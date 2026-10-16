# tools/read

`read_gen.py` builds the site. It copies `docs/` as authored, except `docs/vercel.json`, hidden directories and symlinked directories, and adds `read/`, the reading pages generated from the repository's Markdown:

- one page per declared document, worked example and record;
- one read-only source view per declared source file;
- a documents index.

The Markdown and the source files stay the only source. The generated pages are build output: they are written to the directory the build is given, never into `docs/`, and never committed. Editing a Markdown file is enough to change its page at the next build, with two exceptions, both of which need `declared.json` changed in the same commit: a new blockquote needs a declared role, and changing the opening words of a declared passage or block needs its declaration changed to match. Until then the build fails and nothing new is deployed.

The pages are static files. Each loads same-site stylesheets, fonts, icons and two scripts, `surface-shell.js` and `surface-document-overflow.js`; the shell script builds the responsive navigation panel from the page's own markup. No content is generated or fetched at runtime, and the site runs no server-side code.

GitHub stays the source of record. Every page links its file on GitHub at `main` and its raw file. The raw `/…md` and `.js` routes under the site are unchanged, and so are the diagram pages and their assets, which the build copies byte for byte.

## The front door

`docs/diagrams/index.html` is authored once, and it is the only authored file the build changes on its way into the site.

- **Opened from a clone**, without a build, it works as written: its relative links open the files they name, the raw source, doctrine, example, README and method files included. Its root-absolute icons are the deployment's and do not load from a clone, as before.
- **In the composed site**, the build serves a copy in which each link to a declared source file opens its source view, and each link to a rendered document, example or record opens its page. A query or `#fragment` on the link is kept. The mapping is the declaration's own; there is no separate list to keep in step.
- **Build-only fragments.** Navigation whose destination exists only in a built site sits in a `<template data-read-build>` element. A template's content is inert, so a clone shows no dead link; the build removes the lines holding the two template tags, so the content renders. The documents route is the one such fragment.

Apart from the mapped `href` values and those two lines, the composed copy is the authored bytes, and nothing else under `docs/` is changed.

## Deployment

`docs/vercel.json` runs the build. With the Vercel project's root directory at `docs/`, Vercel runs `sh ../tools/read/vercel-build.sh` there and serves `../_site`. The script:

1. picks a Python 3.10 or later on the build machine, or stops;
2. installs the exact renderer pin into a temporary virtual environment, by hash, from wheels only;
3. runs `read_gen.py build --out _site` at the repository root.

A failed gate fails the build, so a broken document is never deployed. The redirects and headers in `docs/vercel.json` are unchanged.

## Setup

For local builds you need Python 3.10 or later, with the exact renderer pin installed in a virtual environment outside the repository:

```text
python3 -m venv <venv>
<venv>/bin/python -m pip install --require-hashes --only-binary=:all: -r tools/read/requirements.txt
```

Every mode checks the installed versions first. It exits 2, running nothing, unless they are exactly markdown-it-py 4.2.0, mdit-py-plugins 0.6.1 and mdurl 0.1.2.

## Use

From the repository root:

```text
<venv>/bin/python tools/read/read_gen.py build --out _site
<venv>/bin/python tools/read/read_gen.py check
<venv>/bin/python tools/read/read_gen.py links --site _site
```

- **build** writes the composed site to `--out`. That directory must not exist yet, or must be empty. It may not be the repository, sit inside `docs/` or `.git`, or contain the repository. These are judged by where `--out` physically lands: every symlink in the path, and any `..` after one, is followed first, and when the check fails nothing is staged. Open `_site/diagrams/index.html` or `_site/read/index.html`, or serve `_site/`, to read the result. `--report <file>` writes the pages, link classes, headings and the front-door mapping after a successful build. It may not land inside `docs/` or `.git`, and it may not be `--out`, lie inside it or contain it, judged the same way. That holds whether `--out` exists yet or not: when it does not, the build creates its missing directories for the comparison, so the volume itself decides which spellings name the same directory, and removes them again before anything is staged.
- **check** runs the same build into a temporary directory, prints the digest and removes the directory.
- **links** runs the link check alone over a composed site.

Each successful build prints a digest of the composed tree. Identical inputs give identical digests.

## Gates

The build renders every page in memory first. It publishes nothing when any of these fails:

**The declaration.**
- `declared.json` is malformed: a path not normalized, with a `..` segment, or outside its place; two outputs on one path; or a passage or block declaration on a file that is not rendered.
- `docs/read/` exists in the source tree.
- A Markdown file under `docs/`, `examples/` or the repository root has no declared place: rendered, a redirect, or held with a reason.

**Each document.**
- It does not have exactly one top-level H1, coming first.
- A relative link, anchor or image does not resolve in the source tree, or a link is root-absolute. A path resolves only if every segment matches its directory entry exactly, case included: a clone on a case-insensitive volume would otherwise accept a link the deployment serves as 404.
- An image names a remote file.
- Raw HTML is anything but the allowlisted image markup: lowercase `<img>` tags whose only attributes are a double-quoted `src` naming a hosted `.png` file under `docs/` and a double-quoted `alt`, each at most once, separated only by spaces, tabs or newlines.
  - Every other element, end tag and attribute fails, `style` and `on*` event handlers included.
  - So do comments, CDATA sections, declarations, processing instructions, a `src` with a URL scheme, and raw text containing `<!`, `<?` or `</script` in any case.
  - HTML written inside a code span or a fenced block is literal text, not raw HTML.
- A blockquote has no declared role, or a passage or block declaration does not name exactly one blockquote or block.
- A declared structured block does not fit its shape.
- A table header holds a link, an image or raw HTML. At narrow widths the header row is hidden, so it would hold an interaction the reader cannot see.

**The front door and the carriers.**
- The authored front door does not open from a clone. Outside a build-only fragment, a relative link (`<a>`, `<area>`) or resource reference (`href`, `src`, `srcset`) does not resolve, case-exactly, in the source tree, or a link is root-absolute. A root-absolute resource, such as the deployment-root icons, is the site's and is not checked here. A build-only fragment that opens inside another or never closes fails too.
- Its source links do not name exactly the declared source files: a declared source is not linked, or a `.js` file is linked that is not declared.
- The composed front door does not link each declared source through its source view (`read/source/<file>.html`), links a page in that directory that maps to no declared source, or links a `.js` file directly, as a raw link in a build-only fragment would. A root-absolute link is resolved from the site root for this check. The raw file and GitHub are reached from the view.
- A carrier a reading page loads does not match its declared sha256.

**After composing.** It then composes the site in a staging directory beside `--out`. It re-reads every written file against its source, and the front door against its composed bytes, and runs the link check over the staging tree:
- every relative `href`, `src` and `srcset` on a generated page or the composed front door that stays inside the site must exist, case-exactly. One on a generated page that leaves the site is reported as a warning; one on the composed front door fails, because the deployment would not serve it;
- every `#fragment` must name an id in its target page;
- a GitHub fragment must name a heading of that file;
- no link may claim a fragment in a raw Markdown file;
- the composed front door may not link a rendered document as raw `.md`.

Only then does the staging tree become `--out`.

## The declaration

`declared.json` lists:

- `documents` (under `docs/`), `examples` (under `examples/`) and `records` (the diagram folder's `README.md` and its token mirror's `MANIFEST.md`) — what is rendered;
- `redirects` and `held` — what is not rendered, each with its target or reason;
- `source_views` — the source files the front door's source actions open;
- `site_exclude` — authored files under `docs/` that are configuration, not site: `docs/vercel.json`;
- `passages` — the role of each blockquote.
- `blocks` — the shape of each structured preformatted block.

**Passages.** A blockquote carries no signal of whose words it holds, so each one is declared by the words it starts with, which must start exactly one blockquote in its document:

| role | meaning | markup |
| --- | --- | --- |
| `quotation` | represented voice: someone's words, quoted or introduced | `blockquote.doc-quote` |
| `callout` | the document's own thesis, question or contrast, set apart | `p.doc-body.surface-emphasis-rail`, or `div.doc-group.surface-emphasis-rail` around several blocks |
| `framing` | the statement that opens a whole part before its sections | the flat panel with a magenta-bordered chip, its word in `chip` |
| `synthesis` | the closing compression of a part | the same panel, its word in `chip` |

**Blocks.** Every fenced block is a plain `.doc-pre`, its text as written, unless `blocks` declares it a grouped diagram. Such a block is declared by the start of its first line, which must start exactly one block in its document, and by its shape:

- **`groups-rail`** — peer groups between blank lines. The unindented lines open each group, and the indented lines beneath them sit one hierarchy rail in, with their shared indentation removed. Any further indentation stays as written.
- **`groups-aligned`** — peer groups between blank lines, each opening on its first line. The lines after it keep every space, because their indentation aligns columns rather than marking a level.

Successive groups sit one line apart. A shape is never inferred from blank lines or capitals: an undeclared block stays plain.

## Links

| link in a rendered document | on the page |
| --- | --- |
| a rendered document, example or record, with or without `#fragment` | its page, fragment kept |
| the redirect stub `docs/repo-mediated-generated-interface.md` | the page of its declared target; a fragment is kept only if it names a heading there |
| a `#fragment` into a Markdown file that is not rendered | the file on GitHub at `main`, with the anchor |
| another file under `docs/` (a figure, a raster, a raw file) | a relative link to that file |
| a repository file outside `docs/` that is not rendered | the file on GitHub at `main` |
| an external URL | unchanged |

Emitted paths are percent-encoded. Heading ids follow GitHub's slugs. Headings move down one level so the Markdown H1 sits under the page's breadcrumb title: H1 to H4 render as `h2` to `h5`, and H5 and H6 both render as `h6`. An image is contained to the column, keeps its aspect ratio and links to its full-resolution file, unless it already sits inside a link. A worked example's raw file is linked on GitHub, since `examples/` is not part of the site.

## Carriers

The pages take design-system-ASK's document register from `carriers/`: `surface-text-link.css`, `surface-document.css`, `surface-treatments.css` and `surface-document-overflow.js`. These are byte-identical copies, never hand-edited here, and the build places them at `read/_dsa/`.

The pages also reuse the diagram folder's token and font mirror (`docs/diagrams/_dsa-tokens/`) and its `surface-panel`, `surface-action` and `surface-shell` carriers. Each file's `sha256` in `declared.json` is its operative identity, and the build checks every one. `carriers.pin` names the owner commit the hashes were read from; the build does not read it, so keeping all nine hashes from that one commit is the re-vendor's job.

When any of them moves — a diagram-carrier re-vendor included — re-vendor the register files from the same commit, then update every `sha256` and the pin in the same change. Until then the build stops.
