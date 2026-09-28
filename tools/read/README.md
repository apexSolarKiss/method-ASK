# tools/read

`read_gen.py` renders the Markdown files declared in `declared.json` into static reading pages under `docs/read/`: one page per declared document, one per declared record (the diagram folder's `README.md` and its token mirror's `MANIFEST.md`), a documents index, and one read-only source view per declared source file; the `source` action of each figure on the diagram front door (`docs/diagrams/index.html`) opens that view. The pages are committed. Nothing runs at deploy time, and no page fetches anything at runtime. Pages link one another, the figures, the raw files and the site icons by relative paths, so they can be opened from a clone. The front door is not generated here, and its own icon declarations stay root-absolute.

GitHub stays the source of record. Every page links its file on GitHub at `main` and its raw file, and the raw `/…md` and `.js` routes are unchanged.

## Setup

Python 3.10 or later, with the exact renderer pin, in a virtual environment outside the repository:

```text
python3 -m venv <venv>
<venv>/bin/python -m pip install --require-hashes --only-binary=:all: -r tools/read/requirements.txt
```

Every mode checks the installed versions first and exits 2, running nothing, unless they are exactly markdown-it-py 4.2.0, mdit-py-plugins 0.6.1 and mdurl 0.1.2.

## Use

From the repository root, `build` regenerates `docs/read/`, `check` fails on drift, and `links` fails on a broken link or anchor:

```text
<venv>/bin/python tools/read/read_gen.py build
<venv>/bin/python tools/read/read_gen.py check
<venv>/bin/python tools/read/read_gen.py links
```

Run all three after any change to a Markdown file under `docs/`, a source file with a view, `declared.json`, the front door or the vendored carriers below, and commit the regenerated pages with the change. Nothing runs these checks automatically.

- **build** writes `docs/read/` and removes files there that it no longer generates. It writes nothing when:
  - `declared.json` is malformed: a declared path, carrier paths included, outside `docs/` or with a `..` segment, a carrier `owner_path` that is not a normalized relative path without `..`, two outputs on one path, or a document named `index`;
  - a rendered document does not have exactly one top-level H1 as its first top-level heading;
  - a relative link, anchor or image does not resolve in the source tree, or a link is root-absolute. A path resolves only if every segment matches its directory entry exactly, case included: a clone on a case-insensitive volume would otherwise accept a link the deployment serves as 404;
  - raw HTML in a document is anything but the allowlisted image markup: lowercase `<img>` tags whose only attributes are a double-quoted `src` naming a hosted `.png` file under `docs/` and a double-quoted `alt`, each at most once, separated only by spaces, tabs or newlines. Every other element, end tag and attribute fails, `style` and `on*` event handlers included, and so do comments, CDATA sections, declarations, processing instructions, a `src` with a URL scheme, and raw text containing `<!`, `<?` or `</script` in any case. HTML written inside a code span or a fenced block is literal text, not raw HTML;
  - the front door's source links differ from the declared source views: each declared source must be linked through its reading view (`docs/read/source/<file>.html`), every link into that directory must map to a declared source, and a direct link to a `.js` file fails, because the raw file and GitHub are reached from the view;
  - a vendored register carrier does not match `declared.json`.

  Run it from a tree that holds `docs/`, `README.md`, `AGENTS.md` and `examples/`: repository-root link targets resolve there. `build --report <file>` writes the link classes it applied, after a successful build only.
- **check** regenerates every page in memory and compares bytes: `DRIFT`, `MISSING` and `ORPHAN` under `docs/read/`, plus the three vendored register carriers. The same gates apply.
- **links** reads the generated pages and the front door. Every relative `href`, `src` and `srcset` must exist, with the exact case of each path segment, every `#fragment` must name an id in its target page, a GitHub fragment must name a heading of that file, no link may point at a fragment inside a raw Markdown file, and the front door may not link a declared document or record as raw `.md`. A relative target outside the site root (`docs/`) is reported under `warnings`: it opens from a clone but is not deployed. Warnings do not fail the check.

`--root`, `--site` and `--carriers` point the tool at another tree; `<venv>/bin/python tools/read/read_gen.py --help` lists them.

## Links

| link in a declared document | on the page |
| --- | --- |
| a declared document or record, with or without `#fragment` | its page, fragment kept |
| the redirect stub `docs/repo-mediated-generated-interface.md` | the page of its declared target; a fragment is kept only if it names a heading there |
| a `#fragment` into a Markdown file that is not rendered | the file on GitHub at `main`, with the anchor |
| another file under `docs/` (a figure, a raster, a raw file) | a relative link to that file |
| a repository file outside `docs/` | the file on GitHub at `main` |
| an external URL | unchanged |

Emitted paths are percent-encoded. Heading ids follow GitHub's slugs. Headings move down one level so the Markdown H1 sits under the page's breadcrumb title: H1 to H4 render as `h2` to `h5`, and H5 and H6 both render as `h6`. An `<img>` is contained to the column, keeps its aspect ratio and links to its full-resolution file, unless it already sits inside a link.

## Carriers

The pages reuse the token and font mirror in `docs/diagrams/_dsa-tokens/` and the surface carriers in `docs/diagrams/_dsa-surface/`. The document register's own files sit beside those carriers: `surface-document.css`, `surface-treatments.css` and `surface-document-overflow.js`, byte-identical to `design-system-ASK` and never hand-edited here. Each carrier's `sha256` in `declared.json` is its operative identity; `carriers.pin` is a label naming the owner commit the bytes came from, and no mode reads it. To re-vendor them, update each `sha256` and the pin in `declared.json`, then run `build --carriers <design-system-ASK tree at that commit>`.

`check` covers those three register carriers only. The reused token, font and surface mirrors are governed by their own re-vendor records, not by `check`.
