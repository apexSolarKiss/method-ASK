# Diagrams // illustrative

These diagrams are illustrative. They are not source of truth.

Repo prose remains authoritative. If a diagram and the repo prose disagree, trust the prose and refresh the diagram; do not modify the repo prose to match the diagram.

Each diagram is a structural snapshot of the repo at a point in time. Diagrams age. Repo prose ages too, but more slowly. The diagram should track the repo, not the other way around.

## Authority cadence

- repo prose: source of truth — [`docs/method.md`](../method.md) is the primary method articulation, and the doctrine docs (`docs/relative-externality.md`, `docs/voice-surface-boundary.md`, `docs/source-of-truth-and-aging-rate.md`, `docs/source-of-intent.md`, `docs/absorption-discipline.md`) own their respective doctrine
- diagram: illustrative snapshot, refreshed at topology / milestone changes
- repo [`README.md`](../../README.md): canonical front-door articulation

## Inheritance

The diagram conforms to [`apexSolarKiss/design-system-ASK`](https://github.com/apexSolarKiss/design-system-ASK) Tier 1 + Tier 2 by reference at generation time. The compiled `diagrams.css` in this folder is render support, not identity source of truth. `design-system-ASK` remains the visual authority; this folder does not own visual identity.

## The four intent-architecture figures

`TREE_D10` and `TREE_D05`–`TREE_D07` are one delivery unit against the landed intent-artifact ontology and routed-instance
lifecycle (`docs/intent-artifacts.md`, `docs/source-of-intent.md`). They are structural maps rendered by the
shared tree engine, not bespoke `figure.js` compositions like the SMGI pair — the subject in each case is a
classification or a set of distinctions, which is what the tree engine is for.

They exist to prevent four specific collapses, one per figure:

- **D10** — a source of intent is a locatable ROLE, not a folder or a file; ASK authorship does not make an artifact an intent carrier.
- **D05** — a canonical `vN` lineage is not a routed-instance lifecycle. Only a **fresh routed handoff awaiting first ingestion** enters the routed-instance filename lifecycle; terminal `-TBI` remains orthogonal and may overlay other eligible artifact forms without importing it.
- **D06** — the relay ENVELOPE supplies operative force; the payload supplies content. Ingestion is what results when a feed succeeds, and it is not a disposition.
- **D07** — a PTX is a faithful linear projection of a partially-ordered exchange, not the exchange itself and not an authority converter.

## Update cadence

- topology or method-altitude structural change: refresh the source data file
- new doctrine doc landing: refresh the source data file (the doctrine-docs group needs to track what has landed)
- per-PR repo edits: do not refresh
- per-article work: do not refresh
- ecology-level structural shift: open a new `source-vN`

## Contents

### Live navigation surface

- `index.html` — ASK-branded live navigation surface for this folder's diagram
  set. It consumes the local Tier 1 + Tier 2 mirror and the vendored
  `_dsa-surface/` carriers; its Tier 3 does not propagate into the diagrams.
- `_dsa-surface/` — pinned, byte-identical `surface-shell`, `surface-panel`, and
  `surface-action` carriers plus the mode-aware ASK wordmark pair used only by
  `index.html`.
  - `surface-shell.js` — the shell's responsive-navigation runtime, adopted by
    `index.html`. The identity mark is the disclosure: the runtime upgrades the
    authored anchor in place, so with JavaScript unavailable the mark stays an
    ordinary home link and no panel, trigger or dead control appears. The
    diagram pages adopt none of it and load none of these files.

### Topology + intent-architecture trees

- `README.md` — this file.
- `method-ASK_topology.html` — renders `TREE_D02`.
  - `method-ASK_topology.source.js` — `TREE_D02` data (`source-v9`).
- `method-ASK_intent-artifact-ontology.html` — renders `TREE_D10`.
  - `method-ASK_intent-artifact-ontology.source.js` — `TREE_D10` data (`source-v2`): source of intent as a locatable ROLE; context / intent / provenance families; the claim-level vs artifact-level discipline.
- `method-ASK_activation-lifecycle-comparison.html` — renders `TREE_D05`.
  - `method-ASK_activation-lifecycle-comparison.source.js` — `TREE_D05` data (`source-v1`): five artifact forms and their distinct activation + lineage models; prevents every artifact form from inheriting the fresh routed-handoff filename lifecycle merely because it is read, fed, or co-located. Terminal `-TBI` remains an orthogonal overlay.
- `method-ASK_relay-feeding-ingestion.html` — renders `TREE_D06`.
  - `method-ASK_relay-feeding-ingestion.source.js` — `TREE_D06` data (`source-v1`): direct relay vs payload-bearing feed; the envelope supplies force, the payload supplies content; ingestion as a resulting state; disposition separate.
- `system-ASK-topology-public.html` — renders `TREE_D03_PUBLIC`, the governed
  PUBLIC PROJECTION of the operator-side system-ASK topology. It is generated,
  not authored here, and it is not method doctrine: the four intent-architecture
  figures and the two SMGI figures state what this repo argues, while this page
  reports a structure the operator canonical owns.
  - `system-ASK-topology-public.source.js` — the projected `TREE_D03_PUBLIC`
    data: eight public top-level branches derived from the canonical's twelve.
  - `system-ASK-topology-public.generation.json` — the generation receipt. It
    records the exporter, the operator canonical and its `source-v/render-v`
    tuple, the input manifest, the HTML shell, and the produced outputs, each
    by SHA-256, plus the include/exclude classification that makes the 12 -> 8
    reduction checkable rather than asserted.
- `method-ASK_relay-graph-ptx-projection.html` — renders `TREE_D07`.
  - `method-ASK_relay-graph-ptx-projection.source.js` — `TREE_D07` data (`source-v1`): the native partially-ordered multi-thread topology vs the linear PTX projection; three labels on one relayed passage.

### Doctrine figures

- **Bounded generativity**
  - `method-ASK_bounded-generativity.html` — renders the bounded-generativity system-model figure.
  - `method-ASK_bounded-generativity.figure.js` — figure builder (`source-v4`).
  - `method-ASK_bounded-generativity-dark.png` — sole committed doctrine mirror (dark full-page); the light-page + chrome-free diagram variants are on-demand exporter outputs, not committed.
- **Seed-Mediated Generated Interface // doctrine**
  - `method-ASK_seed-mediated-generated-interface.html` — renders the SMGI DOCTRINE figure.
  - `method-ASK_seed-mediated-generated-interface.figure.js` — figure builder (`source-v1`).
  - `method-ASK_seed-mediated-generated-interface-dark.png` — committed doctrine mirror (dark full-page).
- **Seed-Mediated Generated Interface // ontology**
  - `method-ASK_seed-mediated-generated-interface-ontology.html` — renders the SMGI ONTOLOGY figure.
  - `method-ASK_seed-mediated-generated-interface-ontology.figure.js` — figure builder (`source-v2`; dual-profile — `?layout=screen` default / `?layout=page`).
  - `method-ASK_seed-mediated-generated-interface-ontology-dark.png` — committed doctrine mirror (dark full-page).

### Shared render support

- `diagrams-fit.js` — DS-owned fit support; loads BEFORE the engine AND before every figure builder — each builder throws a named error if it is missing.
- `diagrams-text-layout.js` — the DS-owned shared text-layout contract: it measures and wraps long node labels for the static tree engines. It loads AFTER `diagrams-fit.js` and IMMEDIATELY BEFORE the engine.
- `diagrams-static-H-engine.js` — layout + pan/zoom engine.

**The helper and the engine are indivisible.** The engine throws
`Diagram text-layout support is missing or incomplete. Load diagrams-text-layout.js before the diagram engine.`
when the carrier is absent, and it further requires `DIAGRAM_TEXT_LAYOUT.TARGETS`
to name its own pattern. Neither file may be re-vendored, moved or upgraded
without the other, and a page may not load one alone — the failure is loud by
design rather than a silently unwrapped label.
- `_dsa-tokens/` — vendored Tier 1 + Tier 2 token mirror.
- `diagrams.css` — compiled Tier 1 + Tier 2 style.
- `export-png.js` — 3840×2880 PNG export.

### The two SMGI figures

They are a pair with different jobs, and neither substitutes for the other:

- **doctrine figure** (`…_seed-mediated-generated-interface`) — the **instantiation path** and the loading-boundary seam. Authored seed >> loading boundary >> grammar grants the aperture >> runtime >> generated interaction >> return, or, at the boundary, fork-at-load. Consumes the Three Functions primitive for one licensed node: the grammar box, where the grammar is a concrete actor in the runtime path.
- **ontology figure** (`…_seed-mediated-generated-interface-ontology`) — the **category boundaries**. Four orthogonal layers (mechanism · application · authored control · conformance) around one membership node, joined by typed relations. **Fully neutral — no function colour**, because it classifies concepts rather than diagramming the functions; it does not load `three-functions.css`.

The SMGI doctrine figure is `source-v1 // render-v2`; the ontology figure is `source-v2 // render-v1`.

**Responsive behaviour.** `1440×900` is the reference read-all composition (doctrine `0.750`, ontology **`~0.67` on the default `screen` profile**). Within the current fixed-chrome contract, shorter and narrower windows use fit-all as a navigable **overview**: macrostructure remains identifiable in both figures, the ontology's membership gate remains identifiable, and zoom/pan exposes the authored detail. Read-all composition at every aspect ratio would require either content reduction or a separate responsive-chrome contract; neither is part of these figures.

**Ontology dual-profile (source-v2).** The ontology is height-limited at a normal viewport, so a single fixed canvas cannot both stay read-all at `1440×900` and fill the `3840×2880` page. One semantic model is laid out under two coordinate profiles selected by `?layout=`: **`screen`** (default) is compact-but-recomposed and stays read-all at `1440×900` without zoom; **`page`** (`?layout=page`) is the taller, page-optimized composition that spends the available `3840×2880` page height below the chrome. The committed dark full-page mirror is generated from the page profile (`?layout=page&export=png`). Text, categories, held status, branch asymmetry, and typed relations are identical across profiles — only coordinates differ (the recomposition itself — Application's two cards, Conformance's deepened gate / outcomes / test-strip — is present in both).

## How to use

- Open any listed `.html` figure directly in a browser, or via GitHub Pages if configured.
- Drag to pan; scroll to zoom; HUD controls in the bottom-left; `⤢` to fit.
- Theme follows the OS preference (`prefers-color-scheme`); the CSS supports explicit `data-theme="light"` or `data-theme="dark"` on `<html>` if a specific theme is needed.
- The PNG export outputs a 3840×2880 image in the resolved theme.
- **Theme by embedding surface** — adopting the [`design-system-ASK` convention](https://github.com/apexSolarKiss/design-system-ASK/blob/main/README.md#theme-by-embedding-surface) (pinned `7921b79`): this folder is repository documentation, so its embedded diagrams **default to dark**. Repository doctrine figures commit exactly one **versionless dark full-page** mirror each, named with the semantic figure stem plus the `-dark.png` theme suffix. The current mirrors are **bounded generativity**, the **SMGI doctrine figure**, and the **SMGI ontology figure**. Light-page and chrome-free diagram variants remain on-demand exporter outputs, not committed. Most other diagrams here are HTML-only; a doctrine diagram gets exactly one supplemental raster when the Markdown needs it.

## Lineage

This diagram originated in the v9 operator-side `ecology-ASK` diagram package and was first absorbed here at `source-v2 // render-v9`.

The current tuple is `source-v9 // render-v21` (2026-09-03). Source advances when the authored topology changes; render advances only when the renderer realization changes.

The operator-side package and historical render iterations remain in `ecology-ASK-EXTERNAL/scratch/` and are not repo truth.

**Terminology conformance 2026-08-24.** The abbreviated authority term was expanded to `source of truth` throughout the current repo. No topology, semantic model, renderer, or carrier changed; all source and render stamps hold. The three committed dark full-page mirrors were regenerated only to keep their visible caption copy current.

## What this folder does not carry

- `TREE_D01` (control-surface architecture tree) — lives in [`apexSolarKiss/control-surface/docs/diagrams/`](https://github.com/apexSolarKiss/control-surface/tree/main/docs/diagrams)
- `TREE_D03` (system-ASK topology) — the OPERATOR CANONICAL stays outside this repo, and is not absorbed here. What this folder carries is its governed PUBLIC PROJECTION, `TREE_D03_PUBLIC`, generated from that canonical with the operator-side branches excluded. The projection is not the canonical, does not stand in for it, and confers no authority over it.
- Operator-side context architecture payload (private; conform by reference, do not absorb)
- Tier 3 identity inside the diagram artifacts — excluded by the Tier model. `index.html` is a separate ASK-branded live navigation surface for this repo and carries the mode-aware ASK wordmark pair; its Tier 3 does not propagate into the diagrams it indexes.
- Runtime dynamic import from `design-system-ASK` CSS (no; conform at generation time)
- Fast-aging state (PR numbers, commit hashes, current grounding-note version stamps, branch names, recent activity chronology)
