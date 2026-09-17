#!/usr/bin/env python3
"""read_gen.py -- static reading pages for method-ASK's declared documents.

Renders the documents and records declared in tools/read/declared.json into
static HTML pages inside the surface shell, styled with the design-system-ASK
document register, plus one bounded, read-only source view per declared source
file and a documents index. The pages are committed under docs/read/; nothing
runs at deploy time and no page fetches anything at runtime.

    build   python3 tools/read/read_gen.py build  [--root DIR] [--site DIR] [--carriers DIR] [--report FILE]
    check   python3 tools/read/read_gen.py check  [--root DIR] [--site DIR] [--carriers DIR]
    links   python3 tools/read/read_gen.py links  [--root DIR] [--site DIR]

--root      source tree holding docs/, README.md, AGENTS.md and examples/
            (default: the repository this file sits in)
--site      deployment root holding read/ and diagrams/ (default: <root>/docs)
--carriers  a design-system-ASK tree holding the declared carriers. With it,
            `build` re-vendors the declared carriers and `check` also compares
            them with the owner's bytes. Either way the sha256 values in
            declared.json are the identity checked; carriers.pin is a label.

Every mode first requires the exact renderer pin (exit 2 otherwise) and a
well-formed declaration: every declared path, carrier paths included, under
docs/ with no '..' segment, every carrier owner_path a normalized relative
path with no '..' segment, no two outputs on one path, no document stem named
index (STRUCTURE-*). Exit 1 on any problem. A declared or linked file exists
only if every path segment matches its directory entry exactly, case included.

build   writes every page under <site>/read/. It fails closed, writing nothing,
        on a structural problem (a rendered document needs exactly one
        top-level H1, and it must be the first top-level heading), on an
        unresolved link, anchor or image, on raw HTML outside the allowlist
        (only lowercase <img> tags whose attributes are a double-quoted src
        naming a hosted .png file and a double-quoted alt, each at most once,
        separated by whitespace; every other element, end tag, attribute,
        comment, CDATA section, declaration or processing instruction fails,
        as does raw text containing '<!', '<?' or '</script' in any case), on
        front-door source links that differ from the declared source views
        (each declared source linked through its reading view, no raw .js
        link, no undeclared view), and on a vendored carrier that does not
        match its declaration.
check   regenerates every page in memory and compares bytes with <site>/read/:
        DRIFT, MISSING and ORPHAN, plus the three vendored register carriers.
        The same gates apply.
links   reads the generated pages and the front door: every relative href, src
        and srcset must exist, each path segment below the deepest directory
        the target shares with --site matching exactly, case included; every
        #fragment must name an id in its target page, a GitHub blob fragment
        must name a heading of that file, no link may claim a fragment in a
        raw Markdown file, and the front door may not link a declared document
        as raw Markdown. A target outside --site is reported as a WARNING and
        does not fail.

Renderer: markdown-it-py 4.2.0 + mdit-py-plugins 0.6.1 + mdurl 0.1.2 (tools/read/requirements.txt).
"""
import argparse
import hashlib
import html
import json
import os
import posixpath
import re
import sys
from html.parser import HTMLParser
from urllib.parse import quote, unquote, urlsplit

PIN = (("markdown-it-py", "markdown_it", "4.2.0"), ("mdit-py-plugins", "mdit_py_plugins", "0.6.1"), ("mdurl", "mdurl", "0.1.2"))

try:
    import markdown_it
    import mdit_py_plugins
    import mdurl
    from markdown_it import MarkdownIt
    from mdit_py_plugins.anchors import anchors_plugin
    from mdit_py_plugins.gfm import gfm_plugin
    IMPORT_ERROR = None
except ImportError as e:  # reported by pin_problems()
    IMPORT_ERROR = e

PAGE_FORMAT = "read-page-v1"
HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
IGNORED_FILES = {".DS_Store"}
TOC_MIN_SECTIONS = 4
GATE_PREFIXES = ("UNRESOLVED", "UNSAFE-HTML", "STRUCTURE", "NO-TITLE")
ALLOWED_SCHEMES = ("http", "https", "mailto")
RAW_TEXT_MARKERS = ("<!", "<?", "</script")
OUTPUT_NAME = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]*\.html$")

# Raw HTML allowlist. The only raw HTML the declared documents carry is an image tag with a src and an alt, and
# that is all raw HTML may be. RAW_HTML_GRAMMAR is the gate, a byte-level form checked without any HTML parser:
# lowercase <img> tags whose only attributes are double-quoted src and alt, separated by spaces, tabs or newlines,
# and nothing else. RawHtmlScan refuses a repeated attribute and names what a refused piece carries.
RAW_HTML_ALLOWED = {"img": ("src", "alt")}
RAW_IMG_TAG = r'<img(?:[ \t\n]+(?:src|alt)="[^"<>]*")+[ \t\n]*>'
RAW_HTML_GRAMMAR = re.compile(r"[ \t\n]*(?:%s[ \t\n]*)+" % RAW_IMG_TAG)
RAW_IMG = re.compile(RAW_IMG_TAG)
RAW_IMG_ATTR = re.compile(r'[ \t\n]+(src|alt)="([^"<>]*)"')
RAW_IMG_TYPES = (".png",)    # a raw <img src> names a regular file of one of these types; the corpus's raw images are .png


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def esc(text):
    return html.escape(text, quote=True)


def exists_exact(base, segments):
    """True when base/segments exists and each segment equals a directory entry exactly. A clone may sit
    on a case-insensitive volume; the deployment's filesystem is case-sensitive."""
    here = base
    for seg in segments:
        try:
            names = os.listdir(here)
        except OSError:
            return False
        if seg not in names:
            return False
        here = os.path.join(here, seg)
    return os.path.exists(here)


def url_path(path):
    """Percent-encode a repository path for emission in an href or src."""
    return quote(path, safe="/")


def new_md():
    return MarkdownIt("commonmark", {"html": True}).use(gfm_plugin).use(anchors_plugin, min_level=1, max_level=6)


def plain_text(inline_token):
    return "".join(c.content for c in (inline_token.children or []) if c.type in ("text", "code_inline"))


def pin_problems():
    if IMPORT_ERROR is not None:
        return ["renderer not importable: %s" % IMPORT_ERROR]
    modules = {"markdown_it": markdown_it, "mdit_py_plugins": mdit_py_plugins, "mdurl": mdurl}
    out = []
    for dist, module, want in PIN:
        have = getattr(modules[module], "__version__", None)
        if have != want:
            out.append("%s %s, pin %s" % (dist, have, want))
    return out


def load_cfg():
    with open(os.path.join(HERE, "declared.json"), encoding="utf-8") as f:
        return json.load(f)


# ---------------------------------------------------------------------------
# the source tree


class Tree:
    """Read access to the source tree plus the per-file heading ids GitHub shows."""

    def __init__(self, cfg, root):
        self.cfg = cfg
        self.root = root
        self.out = cfg["output"]                                   # docs/read
        self.declared = {d["path"]: d for d in cfg["documents"]}
        self.records = {r["path"]: r for r in cfg.get("records", [])}
        self.rendered = dict(self.declared, **self.records)        # every Markdown file with a page
        self.redirects = {r["path"]: r["to"] for r in cfg.get("redirects", [])}
        self._ids = {}

    def abspath(self, repo_path):
        return os.path.join(self.root, *repo_path.split("/"))

    def exists(self, repo_path):
        """Case-exact: every segment below the root must equal a directory entry exactly, case included."""
        return exists_exact(self.root, [s for s in repo_path.split("/") if s not in ("", ".")])

    def read(self, repo_path):
        with open(self.abspath(repo_path), "rb") as f:
            return f.read()

    def heading_ids(self, repo_path):
        """Heading ids of a Markdown file, as the pinned renderer (and GitHub's rendered HTML) assigns them."""
        if repo_path not in self._ids:
            tokens = new_md().parse(self.read(repo_path).decode("utf-8"), {})
            self._ids[repo_path] = {t.attrGet("id") for t in tokens if t.type == "heading_open"}
        return self._ids[repo_path]

    def page_path(self, doc_path):
        if doc_path in self.records:
            return "%s/%s" % (self.out, self.records[doc_path]["output"])
        return "%s/%s.html" % (self.out, posixpath.splitext(posixpath.basename(doc_path))[0])

    def source_view_path(self, path):
        return "%s/source/%s.html" % (self.out, posixpath.basename(path))

    def github(self, path, frag="", kind="blob"):
        return "https://github.com/%s/%s/%s/%s%s" % (self.cfg["repo"], kind, self.cfg["branch"], url_path(path), frag)

    def markdown_files(self):
        found = []
        for dp, dns, fns in os.walk(os.path.join(self.root, "docs")):
            rel = os.path.relpath(dp, self.root).replace(os.sep, "/")
            if rel == self.out:
                dns[:] = []
                continue
            dns.sort()
            for fn in sorted(fns):
                if fn.endswith(".md"):
                    found.append(rel + "/" + fn)
        return sorted(found)


# ---------------------------------------------------------------------------
# structural preconditions of the declaration


def config_problems(tree):
    """Fail-closed checks on declared.json itself, before anything is rendered or written."""
    cfg = tree.cfg
    out = []

    def path_ok(p, what):
        parts = p.split("/")
        if not p.startswith("docs/") or ".." in parts or posixpath.normpath(p) != p:
            out.append("STRUCTURE-PATH  %s %s: a declared path must sit under docs/ with no '..' segment" % (what, p))
            return False
        return True

    path_ok(cfg["output"], "output")
    path_ok(cfg["front_door"], "front door")
    for d in cfg["documents"]:
        if path_ok(d["path"], "document"):
            if posixpath.splitext(posixpath.basename(d["path"]))[0] == "index":
                out.append("STRUCTURE-INDEX-STEM  document %s: a stem named index would replace the documents index" % d["path"])
            if not tree.exists(d["path"]):
                out.append("UNRESOLVED  document %s: no such file" % d["path"])
    for r in cfg.get("records", []):
        if path_ok(r["path"], "record") and not tree.exists(r["path"]):
            out.append("UNRESOLVED  record %s: no such file" % r["path"])
        if not OUTPUT_NAME.match(r.get("output", "")):
            out.append("STRUCTURE-PATH  record %s output %r: must be a plain .html file name" % (r["path"], r.get("output")))
    for r in cfg.get("redirects", []):
        if path_ok(r["path"], "redirect") and not tree.exists(r["path"]):
            out.append("UNRESOLVED  redirect %s: no such file" % r["path"])
        path_ok(r["to"], "redirect target")
        if r["to"] not in tree.declared:
            out.append("STRUCTURE-REDIRECT  %s redirects to %s, which is not a declared document" % (r["path"], r["to"]))
        if r["path"] in tree.rendered:
            out.append("STRUCTURE-REDIRECT  %s is both rendered and a redirect" % r["path"])
    for s in cfg["source_views"]:
        path_ok(s["path"], "source view")
        path_ok(s["figure"], "source view figure")
    for c in cfg["carriers"]["files"]:
        path_ok(c["path"], "carrier")
        owner = c["owner_path"]
        if owner.startswith("/") or ".." in owner.split("/") or posixpath.normpath(owner) != owner:
            out.append("STRUCTURE-PATH  carrier owner_path %s: must be a normalized relative path with no '..' segment" % owner)
    if out:
        return out
    owners = {}
    for p in [d["path"] for d in cfg["documents"]] + [r["path"] for r in cfg.get("records", [])]:
        owners.setdefault(tree.page_path(p).casefold(), []).append(p)
    for s in cfg["source_views"]:
        owners.setdefault(tree.source_view_path(s["path"]).casefold(), []).append(s["path"])
    owners.setdefault((tree.out + "/index.html").casefold(), []).append("the documents index")
    for output, who in sorted(owners.items()):
        if len(who) > 1:
            out.append("STRUCTURE-COLLISION  %s is written by %s" % (output, " and ".join(who)))
    return out


# ---------------------------------------------------------------------------
# links


def rewrite(tree, from_path, page_dir, href):
    """Return (new href, class). A class starting with UNRESOLVED fails the build."""
    parts = urlsplit(href)
    if parts.scheme or parts.netloc:
        return href, "external"
    if href.startswith("#"):
        return href, "same-document"            # verified against the page's ids later
    if href.startswith("/"):
        return href, "UNRESOLVED (root-absolute path)"
    path = unquote(parts.path)
    if path.startswith("/"):
        return href, "UNRESOLVED (root-absolute path once decoded)"
    frag_raw = parts.fragment
    frag = unquote(frag_raw)
    hash_part = ("#" + frag_raw) if frag_raw else ""
    query = ("?" + parts.query) if parts.query else ""
    target = posixpath.normpath(posixpath.join(posixpath.dirname(from_path), path)) if path else from_path
    if target == ".." or target.startswith("../"):
        return href, "UNRESOLVED (outside the repository)"
    if target in tree.rendered:
        if frag and frag not in tree.heading_ids(target):
            return href, "UNRESOLVED-ANCHOR (%s has no heading #%s)" % (target, frag)
        return url_path(posixpath.relpath(tree.page_path(target), page_dir)) + hash_part, "document-page"
    if target in tree.redirects:
        to = tree.redirects[target]
        page = url_path(posixpath.relpath(tree.page_path(to), page_dir))
        if frag and frag in tree.heading_ids(to):
            return page + hash_part, "redirect-to-document-page"
        return page, "redirect-to-document-page-fragment-dropped" if frag else "redirect-to-document-page"
    if not tree.exists(target):
        return href, "UNRESOLVED (no such file)"
    is_dir = os.path.isdir(tree.abspath(target))
    if frag:
        if is_dir or not target.endswith(".md"):
            return href, "UNRESOLVED-ANCHOR (a fragment into %s cannot be verified)" % target
        if frag not in tree.heading_ids(target):
            return href, "UNRESOLVED-ANCHOR (%s has no heading #%s)" % (target, frag)
        return tree.github(target, hash_part), "raw-markdown-fragment-to-github"
    if target.startswith("docs/"):
        rel = url_path(posixpath.relpath(target, page_dir)) + ("/" if is_dir else "")
        return rel + query, "hosted-raw-or-figure"
    return tree.github(target, "", "tree" if is_dir else "blob"), "repository-file-to-github"


def rewrite_img_tags(tree, from_path, page_dir, content, record, in_link=False):
    """Rewrite src in allowlisted raw <img> tags; wrap each one not inside a Markdown link in a link to its
    full-resolution file. A tag outside the allowlist form is left alone: scan_raw_html fails the build on it."""

    def fix(match):
        tag = match.group(0)
        attrs, pos = [], len("<img")
        m = RAW_IMG_ATTR.match(tag, pos)
        while m:                                 # the attributes in order, exactly as the allowlist form reads them
            attrs.append(m)
            m = RAW_IMG_ATTR.match(tag, m.end())
        src_attrs = [a for a in attrs if a.group(1) == "src"]
        if not src_attrs:
            record.append(("", "", "UNRESOLVED-IMAGE (no src)"))
            return tag
        a = src_attrs[0]
        src = a.group(2)
        new, kind = rewrite_image_src(tree, from_path, page_dir, html.unescape(src), raw=True)
        record.append((src, new, kind))
        tag = tag[:a.start(2)] + esc(new) + tag[a.end(2):]
        if not in_link:
            tag = '<a class="doc-image-link" href="%s">%s</a>' % (esc(new), tag)
        return tag

    return RAW_IMG.sub(fix, content)


def rewrite_image_src(tree, from_path, page_dir, src, raw=False):
    parts = urlsplit(src)
    if parts.scheme or parts.netloc:
        if raw:                                  # a raw <img> names a hosted file; no scheme is allowlisted
            return src, "UNRESOLVED-SCHEME (raw <img> src %s)" % ("scheme %s:" % parts.scheme if parts.scheme else "is scheme-relative")
        return src, "image-external"
    path = unquote(parts.path)
    target = posixpath.normpath(posixpath.join(posixpath.dirname(from_path), path))
    if src.startswith("/") or path.startswith("/") or target.startswith("../") or not target.startswith("docs/") or not tree.exists(target):
        return src, "UNRESOLVED-IMAGE (not a hosted file)"
    if raw and not os.path.isfile(tree.abspath(target)):
        return src, "UNRESOLVED-IMAGE (raw <img> src is not a regular file)"
    if raw and posixpath.splitext(target)[1] not in RAW_IMG_TYPES:
        return src, "UNRESOLVED-IMAGE (raw <img> src is not a %s file)" % " or ".join(RAW_IMG_TYPES)
    return url_path(posixpath.relpath(target, page_dir)), "image-hosted"


def srcset_urls(value):
    return [c.strip().split()[0] for c in value.split(",") if c.strip()]


class RawHtmlScan(HTMLParser):
    """Name every construct in a piece of raw HTML that the allowlist does not admit.

    Admitted: the elements in RAW_HTML_ALLOWED, each carrying only its listed attributes, each at most once. Refused:
    every other element, every end tag, every other attribute (an on* handler named as such), and every comment,
    CDATA or marked section, declaration and processing instruction. URL-bearing attributes are classified as well,
    so a refusal also names a relative or disallowed URL. <img src> is checked and rewritten by rewrite_img_tags."""

    def __init__(self, found):
        super().__init__(convert_charrefs=True)
        self.found = found

    def handle_starttag(self, tag, attrs):
        self.tag(tag, attrs)

    def handle_startendtag(self, tag, attrs):
        self.tag(tag, attrs)

    def handle_endtag(self, tag):
        self.found.append(("</%s>" % tag, "", "UNSAFE-HTML (raw </%s> is not allowed)" % tag))

    # Comments, CDATA and other marked sections, declarations and processing instructions are refused
    # outright: html.parser and a browser's tokenizer disagree on where some of them end, so markup
    # hidden inside one here can be live markup in the page.
    def handle_comment(self, data):
        self.found.append(("<!--", "", "UNSAFE-HTML (raw HTML comment is not allowed)"))

    def unknown_decl(self, data):
        self.found.append(("<![", "", "UNSAFE-HTML (raw HTML CDATA or marked section is not allowed)"))

    def handle_decl(self, decl):
        self.found.append(("<!", "", "UNSAFE-HTML (raw HTML declaration is not allowed)"))

    def handle_pi(self, data):
        self.found.append(("<?", "", "UNSAFE-HTML (raw HTML processing instruction is not allowed)"))

    def tag(self, tag, attrs):
        allowed = RAW_HTML_ALLOWED.get(tag, ())
        if tag not in RAW_HTML_ALLOWED:
            self.found.append(("<%s>" % tag, "", "UNSAFE-HTML (raw <%s> is not allowed)" % tag))
        seen = set()
        for name, value in attrs:
            if name.startswith("on"):
                self.found.append((name, value or "", "UNSAFE-HTML (event-handler attribute %s on <%s>)" % (name, tag)))
            elif name not in allowed:
                self.found.append((name, value or "", "UNSAFE-HTML (attribute %s on <%s> is not allowed)" % (name, tag)))
            elif name in seen:
                self.found.append((name, value or "", "UNSAFE-HTML (attribute %s repeated on <%s>)" % (name, tag)))
            seen.add(name)
            if value is None:
                continue
            if name == "href":
                self.url(tag, name, value)
            elif name == "src" and tag != "img":
                self.url(tag, name, value)
            elif name in ("srcset", "poster"):
                for v in (srcset_urls(value) if name == "srcset" else [value]):
                    self.url(tag, name, v)

    def url(self, tag, attr, value):
        v = value.strip()
        parts = urlsplit(v)
        if parts.scheme:
            if parts.scheme in ALLOWED_SCHEMES:
                self.found.append((v, v, "external"))
            else:
                self.found.append((v, v, "UNRESOLVED-SCHEME (raw <%s %s> scheme %s: is not allowed)" % (tag, attr, parts.scheme)))
        elif parts.netloc:
            self.found.append((v, v, "UNRESOLVED-SCHEME (raw <%s %s> is scheme-relative)" % (tag, attr)))
        elif attr == "href" and v.startswith("#"):
            self.found.append((v, v, "same-document"))
        elif attr == "href":
            self.found.append((v, v, "UNRESOLVED (relative link inside raw HTML is not rewritten)"))
        else:
            self.found.append((v, v, "UNRESOLVED (relative %s on raw <%s> is not rewritten)" % (attr, tag)))


def raw_html_allowed(content):
    """The allowlist gate, independent of any HTML parser: the raw text is allowlisted <img> tags and whitespace only."""
    return RAW_HTML_GRAMMAR.fullmatch(content) is not None


def scan_raw_html(content, links):
    if not raw_html_allowed(content):
        first = content.strip().split("\n", 1)[0]
        links.append((first[:80], "", "UNSAFE-HTML (raw HTML outside the allowlist: only <img> tags with "
                                      "double-quoted src and alt attributes are allowed)"))
    # Named diagnostics beside the gate. The raw text may not open a comment, CDATA section, declaration or
    # processing instruction, or close a script, in any case; the parser names every other refused construct.
    lowered = content.lower()
    for marker in RAW_TEXT_MARKERS:
        if marker in lowered:
            links.append((marker, "", "UNSAFE-HTML (raw HTML text contains '%s')" % marker))
    scan = RawHtmlScan(links)
    scan.feed(content)
    scan.close()


# ---------------------------------------------------------------------------
# document rendering

HEADING_ROLE = {1: "doc-title", 2: "doc-section-title", 3: "doc-subsection-title"}


class Node:
    def __init__(self, tag, cls):
        self.tag, self.cls, self.children = tag, cls, []

    def html(self):
        inner = "".join(c if isinstance(c, str) else c.html() for c in self.children)
        return '<%s class="%s">\n%s</%s>\n' % (self.tag, self.cls, inner, self.tag)


SLOT_META = "\x00meta\x00"
SLOT_TOC = "\x00toc\x00"


def annotate(tree, doc_path, page_dir, tokens, links, images):
    """Assign register roles, label table cells and rewrite links and images, in the token stream."""
    headings = []
    quote_depth = 0
    headers, in_head, col = [], False, 0
    for i, tok in enumerate(tokens):
        t = tok.type
        if t == "heading_open":
            level = int(tok.tag[1])
            tok.meta["level"] = level
            headings.append((level, tok.attrGet("id"), plain_text(tokens[i + 1])))
            new_tag = "h%d" % min(level + 1, 6)
            tok.tag = new_tag
            tokens[i + 2].tag = new_tag
            tok.attrSet("class", HEADING_ROLE.get(level, "doc-deep-title"))
        elif t == "paragraph_open":
            if not tok.hidden and quote_depth == 0:
                tok.attrSet("class", "doc-body")
        elif t in ("bullet_list_open", "ordered_list_open"):
            tok.attrSet("class", "doc-list")
        elif t == "list_item_open":
            tok.attrSet("class", "doc-body")
        elif t == "blockquote_open":
            quote_depth += 1
            tok.attrSet("class", "doc-quote")
        elif t == "blockquote_close":
            quote_depth -= 1
        elif t == "hr":
            tok.attrSet("class", "doc-rule")
        elif t == "table_open":
            tok.attrSet("class", "doc-table")
            headers, in_head = [], False
        elif t == "thead_open":
            in_head = True
        elif t == "thead_close":
            in_head = False
        elif t == "tr_open":
            col = 0
        elif t in ("th_open", "td_open"):
            tok.attrSet("class", "doc-body")
            if in_head:
                headers.append(plain_text(tokens[i + 1]).strip())
            elif col < len(headers) and headers[col]:
                tok.attrSet("data-label", headers[col])      # the column header, shown per cell at narrow widths
            col += 1
        elif t == "html_block":
            scan_raw_html(tok.content, links)
            tok.content = rewrite_img_tags(tree, doc_path, page_dir, tok.content, images)
        elif t == "inline":
            annotate_inline(tree, doc_path, page_dir, tok, links, images)
    return headings


def annotate_inline(tree, doc_path, page_dir, tok, links, images):
    link_depth = 0
    out = []
    for child in tok.children or []:
        ct = child.type
        if ct == "link_open":
            link_depth += 1
            href = child.attrGet("href")
            new, kind = rewrite(tree, doc_path, page_dir, href)
            links.append((href, new, kind))
            child.attrSet("href", new)
        elif ct == "link_close":
            link_depth -= 1
        elif ct == "code_inline":
            child.attrSet("class", "doc-code")
        elif ct == "image":
            src = child.attrGet("src")
            new, kind = rewrite_image_src(tree, doc_path, page_dir, src)
            images.append((src, new, kind))
            child.attrSet("src", new)
            if link_depth == 0:
                a_open = type(child)("link_open", "a", 1)
                a_open.attrSet("class", "doc-image-link")
                a_open.attrSet("href", new)
                out += [a_open, child, type(child)("link_close", "a", -1)]
                continue
        elif ct == "html_inline":
            scan_raw_html(child.content, links)
            if "<img" in child.content.lower():
                child.content = rewrite_img_tags(tree, doc_path, page_dir, child.content, images, link_depth > 0)
        out.append(child)
    tok.children = out


def top_level_blocks(tokens):
    i, n = 0, len(tokens)
    while i < n:
        tok = tokens[i]
        if tok.nesting == 1:
            j, depth = i, 0
            while True:
                depth += tokens[j].nesting
                if depth == 0:
                    break
                j += 1
            yield i, j + 1
            i = j + 1
        else:
            yield i, i + 1
            i += 1


def renderer_for(md):
    """Fenced and indented blocks take .doc-pre as literal text; tables scroll in a wrapper."""
    default_fence = md.renderer.rules["fence"]
    default_code_block = md.renderer.rules["code_block"]

    def fence(self, tokens, idx, options, env):
        return default_fence(tokens, idx, options, env).replace("<pre><code", '<pre class="doc-pre"><code', 1)

    def code_block(self, tokens, idx, options, env):
        return default_code_block(tokens, idx, options, env).replace("<pre><code", '<pre class="doc-pre"><code', 1)

    def table_open(self, tokens, idx, options, env):
        return '<div class="doc-table-wrap">\n' + self.renderToken(tokens, idx, options, env)

    def table_close(self, tokens, idx, options, env):
        return self.renderToken(tokens, idx, options, env) + "</div>\n"

    md.add_render_rule("fence", fence)
    md.add_render_rule("code_block", code_block)
    md.add_render_rule("table_open", table_open)
    md.add_render_rule("table_close", table_close)
    return md


def structure_problems(tokens):
    """A rendered document has exactly one top-level H1, and it is the first top-level heading."""
    levels = [int(t.tag[1]) for t in tokens if t.type == "heading_open" and t.level == 0]
    out = []
    h1 = levels.count(1)
    if h1 != 1:
        out.append(("", "", "STRUCTURE-H1-COUNT (%d top-level H1 headings; a rendered document needs exactly one)" % h1))
    if levels and levels[0] != 1:
        out.append(("", "", "STRUCTURE-FIRST-HEADING (the first top-level heading is H%d, not H1)" % levels[0]))
    return out


def render_body(tree, doc_path, page_dir):
    md = renderer_for(new_md())
    env = {}
    tokens = md.parse(tree.read(doc_path).decode("utf-8"), env)
    structure = structure_problems(tokens)
    # A document with no top-level H2: its header holds only the title, the provenance row and the lede; the
    # blocks after them sit in a body section of their own (a later H3 still opens its own section).
    no_h2 = not any(t.type == "heading_open" and t.level == 0 and t.tag == "h2" for t in tokens)
    links, images = [], []
    headings = annotate(tree, doc_path, page_dir, tokens, links, images)

    head = Node("header", "doc-section doc-head")
    root = [head]
    stack = []
    container, prose, after_title, toc_placed, title, h1_seen = head, None, False, False, "", False
    for start, end in top_level_blocks(tokens):
        tok = tokens[start]
        if tok.type == "heading_open":
            level = tok.meta["level"]
            heading_html = md.renderer.render(tokens[start:end], md.options, env)
            if level == 1:
                title = plain_text(tokens[start + 1])
                head.children += [heading_html, SLOT_META]
                container, prose, after_title, h1_seen = head, None, True, True
                continue
            if not toc_placed:
                root.append(SLOT_TOC)
                toc_placed = True
            section = Node("section", "doc-section")
            while stack and stack[-1][0] >= level:
                stack.pop()
            (stack[-1][1].children if stack else root).append(section)
            stack.append((level, section))
            section.children.append(heading_html)
            container, prose, after_title = section, None, False
            continue
        if no_h2 and h1_seen and container is head and not (after_title and tok.type == "paragraph_open"):
            container, prose = Node("section", "doc-section"), None
            root.append(container)
        if prose is None:
            prose = Node("div", "doc-prose")
            container.children.append(prose)
        if after_title and tok.type == "paragraph_open":
            tok.attrSet("class", "doc-lede")
        prose.children.append(md.renderer.render(tokens[start:end], md.options, env))
        after_title = False
    body = "".join(n if isinstance(n, str) else n.html() for n in root)

    # same-document fragments resolve against this document's own ids
    ids = {h[1] for h in headings}
    for k, (href, new, kind) in enumerate(links):
        if kind == "same-document" and unquote(href[1:]) not in ids:
            links[k] = (href, new, "UNRESOLVED-ANCHOR (no heading %s in this document)" % href)
    return body, headings, title, links, images, structure


# ---------------------------------------------------------------------------
# page chrome

LOCAL_CSS = """
  /* Consumer-owned composition only. Every value resolves through the
     foundation or the shell; the register supplies the text roles. */
  body { min-height: 100vh; }
  /* Reading measure on text; preformatted blocks, tables and figures keep the
     full column. 760px is a local literal: no measure token exists. */
  .doc-flow { --doc-measure: 760px; }
  .doc-flow :where(p, ul, ol, blockquote, h2, h3, h4, h5, h6, details) { max-width: var(--doc-measure); }
  /* Fragment clearance. A heading reached by #fragment clears the seated
     desktop mark, using the shell's own resting depth. */
  .doc-flow :where(h2, h3, h4, h5, h6)[id] { scroll-margin-top: var(--space-5); }
  :root[data-surface-nav-mode="desktop"] .doc-flow :where(h2, h3, h4, h5, h6)[id] { scroll-margin-top: calc(var(--surface-nav-top-depth) + var(--space-5)); }
  /* Lists. */
  .doc-list { margin: 0; padding-left: var(--space-5); display: flex; flex-direction: column; gap: var(--space-2); }
  .doc-list > li::marker { color: var(--fg-3); }
  .doc-list .doc-list { margin-top: var(--space-2); }
  /* A fenced block is literal text: the code element inside takes the block's metrics. */
  .doc-pre > code { font: inherit; color: inherit; }
  .doc-rule { border: 0; border-top: 1px solid var(--line-1); margin: var(--space-2) 0; }
  /* Tables scroll inside their own box. Cells take the document body role. */
  .doc-table-wrap { overflow-x: auto; }
  .doc-table { border-collapse: collapse; }
  .doc-table :where(th, td) { text-align: left; vertical-align: top; padding: var(--space-2) var(--space-3); border-bottom: 1px solid var(--line-1); }
  .doc-table th { font-weight: var(--fw-medium); }
  /* Break a long token only where it would overflow, so a column is never
     narrower than its longest word. */
  .doc-table td a, .doc-table th a, .doc-table .doc-code { overflow-wrap: break-word; }
  /* Narrow widths: each row stacks, and each cell is preceded by its column
     header (data-label). The full table returns at 840px: every table in the
     declared set fits its column from a 830px viewport, measured when this
     rule was set (839px is a local literal: media queries take no tokens). */
  @media (max-width: 839px) {
    .doc-table-wrap { overflow-x: visible; }
    .doc-table, .doc-table :where(tbody, tr, th, td) { display: block; }
    .doc-table thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
    .doc-table tr { padding: var(--space-2) 0; border-bottom: 1px solid var(--line-1); }
    .doc-table :where(th, td) { padding: var(--space-1) 0; border-bottom: 0; }
    .doc-table td[data-label]::before { content: attr(data-label); display: block; font-weight: var(--fw-medium); }
  }
  /* Images never widen the page: contained, aspect ratio kept, linked to the
     full-resolution file. */
  .doc-image-link { display: block; border-bottom: 0; }
  .doc-flow img { display: block; max-width: 100%; height: auto; }
  /* Contents list. Zero specificity, so the register's .doc-hierarchy inset and rail win on the nested list. */
  :where(.doc-toc-list) { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--space-2); }
  :where(.doc-toc-list .doc-hierarchy) { margin-top: var(--space-2); }
"""

CHROME_CSS = """
  /* Chrome text breaks between items, never inside one: a provenance item
     keeps its label, value, unit and separator together, and the repository
     name keeps its hyphen. A path item still breaks anywhere when it alone is
     wider than the column; its separator stays bound to its last character. */
  .doc-meta-item, .doc-nowrap { white-space: nowrap; }
  .doc-meta-item.doc-meta-path { white-space: normal; }
"""

SOURCE_CSS = """
  /* The reading measure on the title, provenance row and intro text; the code
     frame keeps the full column. File-name titles break anywhere rather than
     overflow. */
  .doc-flow { --doc-measure: 760px; }
  .doc-flow :where(p, ul, ol, blockquote, h2, h3, h4, h5, h6, details) { max-width: var(--doc-measure); }
  .doc-flow .doc-title { overflow-wrap: anywhere; }
  /* Two columns: a stationary line-number gutter and a horizontally scrolling
     code column. Lines are spans separated by literal newlines, so a copy of
     the code column returns the file's text, blank lines included. */
  .src-frame { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: start;
               font-family: var(--font-mono); font-size: var(--fs-caption); font-weight: var(--fw-light); line-height: 1.6; }
  .src-gutter, .src-view { font: inherit; line-height: inherit; margin: 0; white-space: pre; }
  .src-gutter { padding-right: 2ch; text-align: right; color: var(--fg-3); border-right: 1px solid var(--line-1);
                user-select: none; -webkit-user-select: none; }
  .src-view { padding-left: 2ch; color: var(--fg-1); overflow-x: auto; }
  .src-line { display: inline-block; min-width: 100%; }
  /* A blank line keeps a one-line box, so #L<n> lands on it and hits it. The
     zero-width space is generated content: a copy does not include it. */
  .src-line:empty::before { content: "\\200b"; }
  .src-line:target { background: var(--surface-glass-2); }
  /* Fragment clearance, as for document headings. */
  .src-line[id] { scroll-margin-top: var(--space-5); }
  :root[data-surface-nav-mode="desktop"] .src-line[id] { scroll-margin-top: calc(var(--surface-nav-top-depth) + var(--space-5)); }
"""

INDEX_CSS = """
  .doc-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr)); gap: 20px; }
  .doc-cards > .surface-panel { display: flex; flex-direction: column; gap: var(--space-2); min-width: 0; }
  .doc-cards .surface-panel-support { color: var(--fg-2); }
  .doc-cards .doc-meta { overflow-wrap: anywhere; }
  .doc-index { --doc-measure: none; }
"""

STYLESHEETS = {
    "document": ["_dsa-tokens/colors_and_type.css", "_dsa-surface/surface-panel.css", "_dsa-surface/surface-action.css",
                 "_dsa-surface/surface-shell.css", "_dsa-surface/surface-document.css", "_dsa-surface/surface-treatments.css"],
    "index": ["_dsa-tokens/colors_and_type.css", "_dsa-surface/surface-panel.css", "_dsa-surface/surface-action.css",
              "_dsa-surface/surface-shell.css", "_dsa-surface/surface-document.css"],
    "source": ["_dsa-tokens/colors_and_type.css", "_dsa-surface/surface-panel.css", "_dsa-surface/surface-action.css",
               "_dsa-surface/surface-shell.css", "_dsa-surface/surface-document.css"],
}


def meta_row(items):
    """Provenance items as unbreakable spans; the separator stays with the item before it.

    items: (text, is_path) pairs. A path may break inside itself when it alone is wider than the column:
    it offers a break after each / _ and . (<wbr>), so its separator is bound to its last character instead."""
    spans = []
    for k, (text, is_path) in enumerate(items):
        last = k == len(items) - 1
        if is_path:
            tail = "" if last else '<span class="doc-nowrap">%s&nbsp;&middot;</span>' % esc(text[-1])
            spans.append('<span class="doc-meta-item doc-meta-path">%s%s</span>' % (wbr_path(text if last else text[:-1]), tail))
        else:
            spans.append('<span class="doc-meta-item">%s%s</span>' % (esc(text), "" if last else " &middot;"))
    return " ".join(spans)


def wbr_name(name):
    """A file name with a break opportunity after each _ . - and /."""
    return re.sub(r"([_./-])", r"\1<wbr>", esc(name))


def wbr_path(path):
    """A provenance path with a break opportunity after each / _ and . (a hyphen already offers one)."""
    return re.sub(r"([/_.])", r"\1<wbr>", esc(path))


def head_block(title, description, up, kind, css, metas):
    meta_lines = "".join('<meta name="%s" content="%s">\n' % (esc(k), esc(v)) for k, v in metas)
    links = "".join('<link rel="stylesheet" href="%sdiagrams/%s">\n' % (up, s) for s in STYLESHEETS[kind])
    return ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n"
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
            "<title>%s</title>\n<meta name=\"description\" content=\"%s\">\n"
            "<meta name=\"color-scheme\" content=\"light dark\">\n"
            "<meta name=\"generator\" content=\"tools/read/read_gen.py %s\">\n%s"
            "<!-- GENERATED from tools/read/declared.json by tools/read/read_gen.py. Do not hand-edit:\n"
            "     `read_gen.py check` fails on any byte that differs from a fresh build. -->\n"
            "<link rel=\"icon\" type=\"image/svg+xml\" href=\"%sfavicon.svg\">\n"
            "<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"%sfavicon-32.png\">\n"
            "<link rel=\"apple-touch-icon\" href=\"%sapple-touch-icon.png\">\n"
            "%s<style>%s</style>\n</head>\n") % (esc(title), esc(description), PAGE_FORMAT, meta_lines, up, up, up, links, css)


def shell_open(up, home_href, home_label, crumb_tail, lede=""):
    return ("<body>\n<div class=\"surface\">\n  <header class=\"surface-head\">\n    <div class=\"surface-head-main\">\n"
            "      <a class=\"surface-mark\" href=\"%(home)s\" aria-label=\"%(home_label)s\">\n"
            "        <img class=\"surface-mark-light\" src=\"%(up)sdiagrams/_dsa-surface/assets/logo-ASK-white.png\" alt=\"\" aria-hidden=\"true\" width=\"2160\" height=\"974\">\n"
            "        <img class=\"surface-mark-dark\" src=\"%(up)sdiagrams/_dsa-surface/assets/logo-ASK-lavender-ASK.png\" alt=\"\" aria-hidden=\"true\" width=\"2160\" height=\"974\">\n"
            "      </a>\n"
            "      <nav class=\"surface-breadcrumb\" aria-label=\"Breadcrumb\">\n"
            "        <h1 class=\"surface-title\"><a class=\"org\" href=\"https://a-s-k.studio/\">ASK</a> <span class=\"sep\" aria-hidden=\"true\">//</span> "
            "<a href=\"https://a-s-k.studio/apex-solar-kiss\">apex solar kiss</a> <span class=\"sep\" aria-hidden=\"true\">//</span> <span class=\"doc-nowrap\">method-ASK</span> "
            "<span class=\"sep\" aria-hidden=\"true\">//</span> %(tail)s</h1>\n"
            "      </nav>\n%(lede)s"
            "    </div>\n  </header>\n\n  <hr class=\"surface-rule\">\n\n  <main class=\"surface-payload\">\n") % {
        "home": esc(home_href), "home_label": esc(home_label), "up": up, "tail": crumb_tail, "lede": lede}


def action(href, label, primary=False, external=False):
    cls = "surface-action" if primary else "surface-action surface-action--secondary"
    ext = ' target="_blank" rel="noopener"' if external else ""
    return '<a class="%s" href="%s"%s>%s</a>' % (cls, esc(href), ext, esc(label))


def shell_close(footer_actions, nav_local, nav_utilities, scripts):
    return ("  </main>\n\n  <footer class=\"surface-footer\">\n    %s\n  </footer>\n\n"
            "  <template class=\"surface-nav-source\">\n    <ul class=\"surface-nav-local\">\n%s    </ul>\n"
            "    <p class=\"surface-nav-utilities\">\n      %s\n    </p>\n  </template>\n\n</div>\n%s</body>\n</html>\n") % (
        "\n    ".join(footer_actions), nav_local, "\n      ".join(nav_utilities),
        "".join('<script src="%s"></script>\n' % esc(s) for s in scripts))


def toc_html(headings):
    items = [(lvl, hid, txt) for (lvl, hid, txt) in headings if lvl in (2, 3)]
    if len([h for h in items if h[0] == 2]) < TOC_MIN_SECTIONS:
        return ""
    out = ['<details class="surface-disclosure surface-material-panel surface-attach-free surface-elevation-flush doc-toc">',
           '<summary><span class="surface-disclosure-label">on this page</span>'
           '<span class="surface-disclosure-indicator" aria-hidden="true">&#9660;</span></summary>',
           '<nav class="surface-disclosure-body" aria-label="On this page">',
           '<ul class="doc-toc-list">']
    open_sub = open_li = False
    for lvl, hid, txt in items:
        link = '<a href="#%s">%s</a>' % (esc(hid), esc(txt))
        if lvl == 2:
            if open_sub:
                out.append("</ul>")
                open_sub = False
            if open_li:
                out.append("</li>")
            out.append('<li class="doc-body">' + link)
            open_li = True
        else:
            if not open_li:                    # an H3 before the first H2: its list still needs an item to sit in
                out.append('<li class="doc-body">')
                open_li = True
            if not open_sub:
                out.append('<ul class="doc-toc-list doc-hierarchy">')
                open_sub = True
            out.append('<li class="doc-body">%s</li>' % link)
    if open_sub:
        out.append("</ul>")
    if open_li:
        out.append("</li>")
    out.append("</ul>\n</nav>\n</details>\n")
    return "\n".join(out)


def render_document(tree, entry, report):
    cfg = tree.cfg
    path = entry["path"]
    raw = tree.read(path)
    page_dir = tree.out
    body, headings, title, links, images, structure = render_body(tree, path, page_dir)
    raw_rel = posixpath.relpath(path, page_dir)
    meta_html = ('<p class="doc-meta">%s</p>\n'
                 '<div class="doc-actions">%s %s</div>\n') % (
        meta_row([(path, True), ("%d B" % len(raw), False), ("source sha256 %s" % sha256(raw)[:12], False)]),
        action(tree.github(path), "GitHub // main", primary=True, external=True),
        action(url_path(raw_rel), "raw .md"))
    body = body.replace(SLOT_META, meta_html).replace(SLOT_TOC, toc_html(headings))
    is_record = path in tree.records
    siblings = []
    for d in (cfg["records"] if is_record else cfg["documents"]):
        if d["path"] == path:
            siblings.append("      <li data-surface-nav-current></li>\n")
        else:
            siblings.append('      <li><a href="%s">%s</a></li>\n' % (
                esc(url_path(posixpath.relpath(tree.page_path(d["path"]), page_dir))), esc(d["label"])))
    page = head_block("method-ASK // " + entry["label"], title, "../", "document", LOCAL_CSS + CHROME_CSS,
                      [("source-path", path), ("source-sha256", sha256(raw))])
    page += shell_open("../", "index.html", "method-ASK documents home",
                       '<a href="index.html">documents</a> <span class="sep" aria-hidden="true">//</span> '
                       '<span class="page" aria-current="page">%s</span>' % esc(entry["label"]))
    page += '<article class="doc-flow">\n' + body + "</article>\n"
    page += shell_close(
        [action("index.html", "documents"), action("../diagrams/index.html", "diagrams"),
         action(tree.github(path), "GitHub", external=True), action(url_path(raw_rel), "raw .md"),
         action("https://github.com/" + cfg["repo"], "repository", external=True)],
        "".join(siblings),
        [action("../diagrams/index.html", "diagrams"), action(tree.github(path), "source on GitHub", external=True),
         action(url_path(raw_rel), "raw .md"), action("https://github.com/" + cfg["repo"], "repository", external=True)],
        ["../diagrams/_dsa-surface/surface-shell.js", "../diagrams/_dsa-surface/surface-document-overflow.js"])
    report[path] = {"links": links, "images": images, "headings": headings, "title": title, "structure": structure}
    if not title and not structure:
        report[path]["structure"] = [("", "", "NO-TITLE (the H1 has no text)")]
    return page


def render_source(tree, entry):
    cfg = tree.cfg
    path = entry["path"]
    raw = tree.read(path)
    text = raw.decode("utf-8").replace("\r\n", "\n").replace("\r", "\n")
    lines = text.split("\n")
    if lines and lines[-1] == "":
        lines = lines[:-1]
    page_dir = posixpath.dirname(tree.source_view_path(path))
    name = posixpath.basename(path)
    rel_raw = url_path(posixpath.relpath(path, page_dir))
    rel_fig = url_path(posixpath.relpath(entry["figure"], page_dir))
    code = "\n".join('<span class="src-line" id="L%d">%s</span>' % (i, esc(l)) for i, l in enumerate(lines, 1))
    if text.endswith("\n"):
        code += "\n"
    gutter = "\n".join(str(i) for i in range(1, len(lines) + 1))
    page = head_block("method-ASK // " + name, "Read-only source view of " + path, "../../", "source", SOURCE_CSS + CHROME_CSS,
                      [("source-path", path), ("source-sha256", sha256(raw))])
    page += shell_open("../../", "../index.html", "method-ASK documents home",
                       '<a href="../../diagrams/index.html">diagrams</a> <span class="sep" aria-hidden="true">//</span> '
                       '<span class="page" aria-current="page">%s</span>' % esc(entry["label"]))
    page += '<article class="doc-flow">\n<header class="doc-section doc-head">\n'
    page += '<h2 class="doc-title">%s</h2>\n' % wbr_name(name)
    page += '<p class="doc-meta">%s</p>\n' % meta_row(
        [(path, True), ("%d B" % len(raw), False), ("%d lines" % len(lines), False), ("read-only", False),
         ("source sha256 %s" % sha256(raw)[:12], False)])
    page += '<div class="doc-actions">%s %s %s</div>\n' % (
        action(rel_fig, "open figure", primary=True), action(tree.github(path), "GitHub // main", external=True),
        action(rel_raw, "raw file"))
    page += ('<p class="doc-body">This view shows one file; the diagram front door links this view. '
             'It is generated, static and bounded: there is no browsing beyond this file.</p>\n</header>\n')
    page += ('<div class="src-frame"><pre class="src-gutter" aria-hidden="true">%s</pre>'
             '<pre class="src-view" tabindex="0" aria-label="%s, %d lines">%s</pre></div>\n'
             % (gutter, esc(name), len(lines), code))
    page += "</article>\n"
    page += shell_close(
        [action("../index.html", "documents"), action("../../diagrams/index.html", "diagrams"),
         action(tree.github(path), "GitHub", external=True), action(rel_raw, "raw file")],
        '      <li><a href="../index.html">documents</a></li>\n      <li data-surface-nav-current></li>\n',
        [action(rel_fig, "open figure"), action(tree.github(path), "source on GitHub", external=True),
         action("https://github.com/" + cfg["repo"], "repository", external=True)],
        ["../../diagrams/_dsa-surface/surface-shell.js"])
    return page


def render_index(tree, report):
    cfg = tree.cfg
    page_dir = tree.out

    def card(entry, kind):
        r = report[entry["path"]]
        sections = len([h for h in r["headings"] if h[0] == 2])
        items = [(entry["path"], True)] + ([("%d sections" % sections, False)] if sections else [])
        return ('<a class="surface-panel" href="%s"><span class="doc-label">%s</span>'
                '<span class="surface-panel-title">%s</span>'
                '<span class="surface-panel-support">%s</span>'
                '<span class="doc-meta">%s</span></a>'
                % (esc(url_path(posixpath.relpath(tree.page_path(entry["path"]), page_dir))), kind, esc(entry["label"]),
                   esc(r["title"]), meta_row(items)))

    cards = [card(d, "document") for d in cfg["documents"]]
    records = [card(r, "record") for r in cfg.get("records", [])]
    sources = []
    for s in cfg["source_views"]:
        sources.append('<a class="surface-panel" href="%s"><span class="doc-label">source view</span>'
                       '<span class="surface-panel-title">%s</span>'
                       '<span class="surface-panel-support">Read-only, line-numbered: one source file, in the view the diagram front door links.</span>'
                       '<span class="doc-meta">%s</span></a>'
                       % (esc(url_path(posixpath.relpath(tree.source_view_path(s["path"]), page_dir))), esc(s["label"]),
                          meta_row([(s["path"], True)])))
    rest = []
    for p in tree.markdown_files():
        if p in tree.rendered:
            continue
        note = ""
        if p in tree.redirects:
            to = tree.redirects[p]
            note = ' &middot; redirect to <a href="%s">%s</a>' % (
                esc(url_path(posixpath.relpath(tree.page_path(to), page_dir))), esc(tree.rendered[to]["label"]))
        rest.append('<li class="doc-body"><code class="doc-code">%s</code>%s &middot; <a href="%s">raw .md</a> &middot; '
                    '<a href="%s" target="_blank" rel="noopener">GitHub</a></li>'
                    % (esc(p), note, esc(url_path(posixpath.relpath(p, page_dir))), esc(tree.github(p))))
    page = head_block("method-ASK // documents", "method-ASK documents, rendered from the repository's Markdown.",
                      "../", "index", LOCAL_CSS + CHROME_CSS + INDEX_CSS, [])
    page += shell_open("../", "index.html", "method-ASK documents home",
                       '<span class="page" aria-current="page">documents</span>',
                       '      <p class="surface-lede">method-ASK doctrine, rendered from the repository\'s Markdown. '
                       'GitHub remains the source of record; every page links its source and its raw file.</p>\n')
    page += '<div class="doc-flow doc-index">\n'
    page += ('<section class="doc-section">\n<h2 class="doc-section-title">rendered documents</h2>\n'
             '<div class="doc-cards">\n' + "\n".join(cards) + "\n</div>\n</section>\n")
    if records:
        page += ('<section class="doc-section">\n<h2 class="doc-section-title">records</h2>\n'
                 '<p class="doc-body">Operating records of the diagram folder, rendered from their Markdown.</p>\n'
                 '<div class="doc-cards">\n' + "\n".join(records) + "\n</div>\n</section>\n")
    page += ('<section class="doc-section">\n<h2 class="doc-section-title">source views</h2>\n'
             '<div class="doc-cards">\n' + "\n".join(sources) + "\n</div>\n</section>\n")
    page += ('<section class="doc-section">\n<h2 class="doc-section-title">not rendered</h2>\n'
             '<p class="doc-body">These files stay readable as raw Markdown on this origin and on GitHub. '
             'The declared list decides what is rendered; nothing here is browsed at runtime.</p>\n'
             '<ul class="doc-list">\n' + "\n".join(rest) + "\n</ul>\n</section>\n")
    page += ('<section class="doc-section">\n<h2 class="doc-section-title">outside this origin</h2>\n'
             '<p class="doc-body">Repository-root files (<code class="doc-code">README.md</code>, '
             '<code class="doc-code">AGENTS.md</code>, <code class="doc-code">examples/</code>) are not hosted here. '
             'Links to them open on GitHub.</p>\n</section>\n</div>\n')
    local = ["      <li data-surface-nav-current>\n        <ul>\n"]
    for d in cfg["documents"]:
        local.append('          <li><a href="%s">%s</a></li>\n' % (
            esc(url_path(posixpath.relpath(tree.page_path(d["path"]), page_dir))), esc(d["label"])))
    local.append("        </ul>\n      </li>\n")
    page += shell_close(
        [action("../diagrams/index.html", "diagrams"), action("https://github.com/" + cfg["repo"], "repository", external=True),
         action("https://a-s-k.studio/", "A-S-K.studio", external=True)],
        "".join(local),
        [action("../diagrams/index.html", "diagrams"), action("https://github.com/" + cfg["repo"], "repository", external=True)],
        ["../diagrams/_dsa-surface/surface-shell.js"])
    return page


# ---------------------------------------------------------------------------
# gates


class LinkCollector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs, self.ids = [], set()

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"):
            self.ids.add(a["id"])
        for k in ("href", "src"):
            if a.get(k) is not None:
                self.refs.append((tag, k, a[k]))
        if a.get("srcset"):
            for v in srcset_urls(a["srcset"]):
                self.refs.append((tag, "srcset", v))


def front_door_sources(tree):
    """The front door's source routes, read from its relative anchor hrefs through the declared mapping.

    Returns (views, raw, undeclared): the declared source files whose reading view the front door links; the .js
    files it links directly; and the pages it links under the source-view directory that no declared source maps to."""
    fd = tree.cfg["front_door"]
    by_view = {tree.source_view_path(s["path"]): s["path"] for s in tree.cfg["source_views"]}
    view_dir = posixpath.dirname(tree.source_view_path("x")) + "/"
    p = LinkCollector()
    p.feed(tree.read(fd).decode("utf-8"))
    views, raw, undeclared = set(), set(), set()
    for tag, k, v in p.refs:
        parts = urlsplit(v)
        if tag != "a" or k != "href" or parts.scheme or parts.netloc:
            continue
        target = posixpath.normpath(posixpath.join(posixpath.dirname(fd), unquote(parts.path)))
        if target in by_view:
            views.add(by_view[target])
        elif target.startswith(view_dir):
            undeclared.add(target)
        elif target.endswith(".js"):
            raw.add(target)
    return views, raw, undeclared


def source_set_problems(tree):
    """The front door links exactly the declared source views, each through its reading view."""
    declared = {s["path"] for s in tree.cfg["source_views"]}
    views, raw, undeclared = front_door_sources(tree)
    out = ["SOURCE-SET  declared, not linked by the front door: %s (reading view %s)" % (p, tree.source_view_path(p))
           for p in sorted(declared - views)]
    out += ["SOURCE-SET  linked by the front door, not declared: " + p for p in sorted((raw - declared) | undeclared)]
    out += ["SOURCE-SET  linked by the front door as a raw file, where its reading view is required: " + p
            for p in sorted(raw & declared)]
    for s in tree.cfg["source_views"]:
        for key in ("path", "figure"):
            if not tree.exists(s[key]):
                out.append("UNRESOLVED  source view %s: no such file" % s[key])
    return out


def expected_outputs(tree):
    report = {}
    out = {}
    prefix = tree.out + "/"
    for d in tree.cfg["documents"] + tree.cfg.get("records", []):
        out[tree.page_path(d["path"])[len(prefix):]] = render_document(tree, d, report).encode("utf-8")
    for s in tree.cfg["source_views"]:
        out[tree.source_view_path(s["path"])[len(prefix):]] = render_source(tree, s).encode("utf-8")
    out["index.html"] = render_index(tree, report).encode("utf-8")
    problems = []
    for doc, r in sorted(report.items()):
        for href, _, kind in r["structure"] + r["links"] + r["images"]:
            if kind.startswith(GATE_PREFIXES):
                problems.append("%s  %s -> %s" % (kind, doc, href))
    return out, report, problems


def carrier_problems(tree, site, carriers_dir):
    """The three vendored register carriers only. The reused token, font and surface mirrors are governed
    by their own re-vendor records, not by this check."""
    problems = []
    for c in tree.cfg["carriers"]["files"]:
        on_disk = os.path.join(site, *c["path"].split("/")[1:])     # path under docs/
        if carriers_dir:
            owner = os.path.join(carriers_dir, *c["owner_path"].split("/"))
            if not os.path.exists(owner):
                problems.append("OWNER-MISSING  %s" % c["owner_path"])
            elif sha256(open(owner, "rb").read()) != c["sha256"]:
                problems.append("OWNER-DIFFERS  %s (owner bytes do not match declared.json)" % c["owner_path"])
        if not os.path.exists(on_disk):
            problems.append("MISSING  carrier %s" % c["path"])
        elif sha256(open(on_disk, "rb").read()) != c["sha256"]:
            problems.append("DRIFT    carrier %s" % c["path"])
    return problems


def write_report(path, out, report):
    classes = {}
    for doc, r in sorted(report.items()):
        for _, _, kind in r["links"] + r["images"]:
            classes[kind] = classes.get(kind, 0) + 1
    data = {"format": PAGE_FORMAT, "pages": {k: sha256(v) for k, v in sorted(out.items())}, "classes": classes,
            "documents": {doc: {"links": [list(x) for x in r["links"]], "images": [list(x) for x in r["images"]],
                                "headings": [list(h) for h in r["headings"]]} for doc, r in sorted(report.items())}}
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=1, ensure_ascii=False)
        f.write("\n")


def fail(mode, problems, written="nothing written"):
    print("%s: FAIL (%d problems; %s)" % (mode, len(problems), written))
    for p in problems:
        print("  " + p)
    return 1


def cmd_build(tree, site, carriers_dir, report_path=None):
    problems = config_problems(tree)
    if problems:
        return fail("build", problems)
    out, report, problems = expected_outputs(tree)
    problems = source_set_problems(tree) + problems
    if carriers_dir:
        problems += [p for p in carrier_problems(tree, site, carriers_dir) if p.startswith("OWNER")]
    else:
        problems += carrier_problems(tree, site, None)
    if problems:
        return fail("build", problems, "nothing written, no report")
    root = os.path.join(site, "read")
    for rel, data in sorted(out.items()):
        p = os.path.join(root, *rel.split("/"))
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "wb") as f:
            f.write(data)
    stale = []
    for dp, _, fns in os.walk(root):
        for fn in fns:
            rel = os.path.relpath(os.path.join(dp, fn), root).replace(os.sep, "/")
            if rel not in out and fn not in IGNORED_FILES:
                stale.append(rel)
    for rel in sorted(stale):
        os.remove(os.path.join(root, *rel.split("/")))
    written = 0
    if carriers_dir:
        for c in tree.cfg["carriers"]["files"]:
            dest = os.path.join(site, *c["path"].split("/")[1:])
            with open(os.path.join(carriers_dir, *c["owner_path"].split("/")), "rb") as f:
                data = f.read()
            with open(dest, "wb") as f:
                f.write(data)
            written += 1
    if report_path:
        write_report(report_path, out, report)
    print("build: wrote %d pages under %s%s%s" % (len(out), root,
          "; removed %d stale" % len(stale) if stale else "",
          "; vendored %d carriers" % written if written else ""))
    return 0


def cmd_check(tree, site, carriers_dir):
    problems = config_problems(tree)
    if problems:
        return fail("check", problems, "nothing compared")
    out, report, problems = expected_outputs(tree)
    problems = source_set_problems(tree) + problems
    root = os.path.join(site, "read")
    on_disk = set()
    for dp, _, fns in os.walk(root):
        for fn in fns:
            if fn not in IGNORED_FILES:
                on_disk.add(os.path.relpath(os.path.join(dp, fn), root).replace(os.sep, "/"))
    for rel, data in sorted(out.items()):
        if rel not in on_disk:
            problems.append("MISSING  read/" + rel)
        elif open(os.path.join(root, *rel.split("/")), "rb").read() != data:
            problems.append("DRIFT    read/" + rel)
    for rel in sorted(on_disk - set(out)):
        problems.append("ORPHAN   read/" + rel)
    problems += carrier_problems(tree, site, carriers_dir)
    if problems:
        print("check: FAIL (%d)" % len(problems))
        for p in problems:
            print("  " + p)
        return 1
    print("check: OK (%d pages and %d carriers match)" % (len(out), len(tree.cfg["carriers"]["files"])))
    return 0


def cmd_links(tree, site):
    """Link and anchor check over the generated pages and the front door."""
    problems = config_problems(tree)
    if problems:
        return fail("links", problems, "nothing read")
    root = os.path.join(site, "read")
    site_root = os.path.normpath(site)
    pages = {}
    targets = [os.path.join(dp, fn) for dp, _, fns in os.walk(root) for fn in fns if fn.endswith(".html")]
    targets.append(os.path.join(site, *tree.cfg["front_door"].split("/")[1:]))
    for p in sorted(targets):
        c = LinkCollector()
        with open(p, encoding="utf-8") as f:
            c.feed(f.read())
        pages[os.path.normpath(p)] = c
    gh_prefix = "https://github.com/%s/blob/%s/" % (tree.cfg["repo"], tree.cfg["branch"])
    problems = []
    warnings = []
    counts = {}

    def count(kind):
        counts[kind] = counts.get(kind, 0) + 1

    def ids_of(path):
        if path not in pages:
            c = LinkCollector()
            with open(path, encoding="utf-8") as f:
                c.feed(f.read())
            pages[path] = c
        return pages[path].ids

    for page, c in sorted(pages.items()):
        rel_page = os.path.relpath(page, site).replace(os.sep, "/")
        for tag, attr, v in c.refs:
            parts = urlsplit(v)
            if parts.scheme in ("http", "https"):
                if v.startswith(gh_prefix) and parts.fragment:
                    repo_path = unquote(parts.path[len(urlsplit(gh_prefix).path):])
                    if not tree.exists(repo_path):
                        problems.append("%s: %s -> no such repository file" % (rel_page, v))
                    elif unquote(parts.fragment) not in tree.heading_ids(repo_path):
                        problems.append("%s: %s -> no such heading on GitHub" % (rel_page, v))
                    else:
                        count("github-anchor-ok")
                else:
                    count("external")
                continue
            if parts.scheme:
                count("other-scheme")
                continue
            if v.startswith("#"):
                if unquote(v[1:]) in c.ids:
                    count("in-page-anchor-ok")
                else:
                    problems.append("%s: %s -> no such id in this page" % (rel_page, v))
                continue
            if v.startswith("/"):
                target = os.path.normpath(os.path.join(site, unquote(parts.path).lstrip("/")))
            else:
                target = os.path.normpath(os.path.join(os.path.dirname(page), unquote(parts.path)))
            base = os.path.commonpath([target, site_root])      # given by the operator; below it, compare case-exactly
            below = os.path.relpath(target, base)
            if not exists_exact(base, [] if below == "." else below.split(os.sep)):
                problems.append("%s: %s -> missing file" % (rel_page, v))
                continue
            outside = not (target == site_root or target.startswith(site_root + os.sep))
            if parts.fragment:
                if target.endswith(".md"):
                    problems.append("%s: %s -> fragment into a raw Markdown file" % (rel_page, v))
                    continue
                if not target.endswith(".html") or unquote(parts.fragment) not in ids_of(target):
                    problems.append("%s: %s -> no such id in the target page" % (rel_page, v))
                    continue
            if outside:
                warnings.append("%s: %s -> outside the site root, so the deployment does not serve it" % (rel_page, v))
                count("WARNING-outside-site")
                continue
            count("cross-page-anchor-ok" if parts.fragment else "relative-ok")
        if rel_page == tree.cfg["front_door"][len("docs/"):]:
            for tag, attr, v in c.refs:
                parts = urlsplit(v)
                if tag == "a" and not parts.scheme and parts.path.endswith(".md"):
                    target = posixpath.normpath(posixpath.join(posixpath.dirname(tree.cfg["front_door"]), unquote(parts.path)))
                    if target in tree.rendered:
                        problems.append("%s: %s -> a declared document linked as raw Markdown" % (rel_page, v))
    print(json.dumps({"pages": len(pages), "counts": counts, "warnings": warnings, "problems": problems}, indent=1))
    return 1 if problems else 0


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("mode", choices=["build", "check", "links"])
    ap.add_argument("--root", default=DEFAULT_ROOT)
    ap.add_argument("--site")
    ap.add_argument("--carriers")
    ap.add_argument("--report", help="build only: after a successful build, write a JSON report of pages, link classes and headings")
    a = ap.parse_args(argv)
    bad = pin_problems()
    if bad:
        print("read_gen.py: PIN-MISMATCH  %s; install tools/read/requirements.txt (nothing run)" % "; ".join(bad), file=sys.stderr)
        return 2
    cfg = load_cfg()
    root = os.path.abspath(a.root)
    site = os.path.abspath(a.site) if a.site else os.path.join(root, "docs")
    tree = Tree(cfg, root)
    if a.mode == "build":
        return cmd_build(tree, site, a.carriers, a.report)
    if a.mode == "check":
        return cmd_check(tree, site, a.carriers)
    return cmd_links(tree, site)


if __name__ == "__main__":
    sys.exit(main())
