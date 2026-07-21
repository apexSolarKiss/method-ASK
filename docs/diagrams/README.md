# Diagrams // illustrative

These diagrams are illustrative. They are not source truth.

Repo prose remains authoritative. If a diagram and the repo prose disagree, trust the prose and refresh the diagram; do not modify the repo prose to match the diagram.

Each diagram is a structural snapshot of the repo at a point in time. Diagrams age. Repo prose ages too, but more slowly. The diagram should track the repo, not the other way around.

## Authority cadence

- repo prose: source truth — [`docs/method.md`](../method.md) is the primary method articulation, and the doctrine docs (`docs/relative-externality.md`, `docs/voice-surface-boundary.md`, `docs/source-of-truth-and-aging-rate.md`, `docs/source-of-intent.md`, `docs/absorption-discipline.md`) own their respective doctrine
- diagram: illustrative snapshot, refreshed at topology / milestone changes
- repo [`README.md`](../../README.md): canonical front-door articulation

## Inheritance

The diagram conforms to [`apexSolarKiss/design-system-ASK`](https://github.com/apexSolarKiss/design-system-ASK) Tier 1 + Tier 2 by reference at generation time. The compiled `diagrams.css` in this folder is render support, not identity source truth. `design-system-ASK` remains the visual authority; this folder does not own visual identity.

## Update cadence

- topology or method-altitude structural change: refresh the source data file
- new doctrine doc landing: refresh the source data file (the doctrine-docs group needs to track what has landed)
- per-PR repo edits: do not refresh
- per-article work: do not refresh
- ecology-level structural shift: open a new `source-vN`

## Contents

```text
README.md                              this file
method-ASK_topology.html               renders TREE_D02
method-ASK_topology.source.js          TREE_D02 data
method-ASK_bounded-generativity.html         renders the bounded-generativity system-model figure
method-ASK_bounded-generativity.figure.js    figure builder (source-v4)
method-ASK_bounded-generativity-dark.png     sole committed doctrine mirror (dark full-page); the
                                             light-page + chrome-free diagram variants are on-demand
                                             exporter outputs, not committed
method-ASK_seed-mediated-generated-interface.html         renders the SMGI DOCTRINE figure
method-ASK_seed-mediated-generated-interface.figure.js    figure builder (source-v1)
method-ASK_seed-mediated-generated-interface-dark.png     committed doctrine mirror (dark full-page)
method-ASK_seed-mediated-generated-interface-ontology.html        renders the SMGI ONTOLOGY figure
method-ASK_seed-mediated-generated-interface-ontology.figure.js   figure builder (source-v2; dual-profile — ?layout=screen default / page)
method-ASK_seed-mediated-generated-interface-ontology-dark.png    committed doctrine mirror (dark full-page)
diagrams-fit.js                        DS-owned fit support; loads BEFORE the engine
                                       AND before every figure builder — each builder
                                       throws a named error if it is missing
diagrams-static-H-engine.js            layout + pan/zoom engine
_dsa-tokens/                           vendored Tier 1 + Tier 2 token mirror
diagrams.css                           compiled Tier 1 + Tier 2 style
export-png.js                          3840×2880 PNG export
```

### The two SMGI figures

They are a pair with different jobs, and neither substitutes for the other:

- **doctrine figure** (`…_seed-mediated-generated-interface`) — the **instantiation path** and the loading-boundary seam. Authored seed >> loading boundary >> grammar grants the aperture >> runtime >> generated interaction >> return, or, at the boundary, fork-at-load. Consumes the Three Functions primitive for one licensed node: the grammar box, where the grammar is a concrete actor in the runtime path.
- **ontology figure** (`…_seed-mediated-generated-interface-ontology`) — the **category boundaries**. Four orthogonal layers (mechanism · application · authored control · conformance) around one membership node, joined by typed relations. **Fully neutral — no function colour**, because it classifies concepts rather than diagramming the functions; it does not load `three-functions.css`.

The SMGI doctrine figure remains `source-v1 // render-v1`; the ontology figure is `source-v2 // render-v1`.

**Responsive behaviour.** `1440×900` is the reference read-all composition (doctrine `0.750`, ontology **`~0.67` on the default `screen` profile**). Within the current fixed-chrome contract, shorter and narrower windows use fit-all as a navigable **overview**: macrostructure remains identifiable in both figures, the ontology's membership gate remains identifiable, and zoom/pan exposes the authored detail. Read-all composition at every aspect ratio would require either content reduction or a separate responsive-chrome contract; neither is part of these figures.

**Ontology dual-profile (source-v2).** The ontology is height-limited at a normal viewport, so a single fixed canvas cannot both stay read-all at `1440×900` and fill the `3840×2880` page. One semantic model is laid out under two coordinate profiles selected by `?layout=`: **`screen`** (default) is compact-but-recomposed and stays read-all at `1440×900` without zoom; **`page`** (`?layout=page`) is the taller, page-optimized composition that spends the available `3840×2880` page height below the chrome. The committed dark full-page mirror is generated from the page profile (`?layout=page&export=png`). Text, categories, held status, branch asymmetry, and typed relations are identical across profiles — only coordinates differ (the recomposition itself — Application's two cards, Conformance's deepened gate / outcomes / test-strip — is present in both).

## How to use

- Open any listed `.html` figure directly in a browser, or via GitHub Pages if configured.
- Drag to pan; scroll to zoom; HUD controls in the bottom-left; `⤢` to fit.
- Theme follows the OS preference (`prefers-color-scheme`); the CSS supports explicit `data-theme="light"` or `data-theme="dark"` on `<html>` if a specific theme is needed.
- The PNG export outputs a 3840×2880 image in the resolved theme.
- **Theme by embedding surface** — adopting the [`design-system-ASK` convention](https://github.com/apexSolarKiss/design-system-ASK/blob/main/README.md#theme-by-embedding-surface) (pinned `7921b79`): this folder is repository documentation, so its embedded diagrams **default to dark**. Repository doctrine figures commit exactly one **versionless dark full-page** mirror each, named with the semantic figure stem plus the `-dark.png` theme suffix. The current mirrors are **bounded generativity**, the **SMGI doctrine figure**, and the **SMGI ontology figure**. Light-page and chrome-free diagram variants remain on-demand exporter outputs, not committed. Most other diagrams here are HTML-only; a doctrine diagram gets exactly one supplemental raster when the Markdown needs it.

## Lineage

This diagram was rendered as part of the v9 operator-side `ecology-ASK` diagram package and absorbed here at `source-v2 // render-v9`. Future refreshes will bump the render version and may bump the source version if the tree data changes.

The operator-side package and historical render iterations remain in `ecology-ASK-EXTERNAL/scratch/` and are not repo truth.

## What this folder does not carry

- `TREE_D01` (control-surface architecture tree) — lives in [`apexSolarKiss/control-surface/docs/diagrams/`](https://github.com/apexSolarKiss/control-surface/tree/main/docs/diagrams)
- `TREE_D03` (ecology-ASK overall) — operator-side only; not authorized for any repo absorption (the ecology view includes operator-side context substrate)
- Operator-side context architecture payload (private; conform by reference, do not absorb)
- `design-system-ASK` Tier 3 instance identity (logo, wordmark, ASK chrome) — excluded by Tier model
- Runtime dynamic import from `design-system-ASK` CSS (no; conform at generation time)
- Fast-aging state (PR numbers, commit hashes, current grounding-note version stamps, branch names, recent activity chronology)
