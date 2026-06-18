# method-ASK

![method-ASK banner](method-ASK-banner.jpg)

Methodology layer for the ASK family of projects.

This repo carries the cross-project method for designing systems that build systems: doctrine, topology, lineage, source-of-truth structure, and worked-example explanations at method altitude.

It does not carry execution-protocol assets. Those live in [`apexSolarKiss/control-surface`](https://github.com/apexSolarKiss/control-surface) — `AGENTS.md` rules, templates, prompts, project-instantiation workflow, and worked-example workflow notes.

## Layer relationship

- **`method-ASK`** (this repo) — methodology layer, upstream
- **[`control-surface`](https://github.com/apexSolarKiss/control-surface)** — execution-protocol layer
- **project repos** — downstream applications ([`asset-pipeline-ASK`](https://github.com/apexSolarKiss/asset-pipeline-ASK), [`urban-observatory`](https://github.com/apexSolarKiss/urban-observatory), [`mazeASK`](https://github.com/apexSolarKiss/mazeASK))

The methodology layer articulates the cross-project method; the execution-protocol layer encodes calibrated rules that operationalize the method per session; project repos apply the method and execution-protocol lineage to concrete domains across current single-node and legacy Model-A generations.

Linked ASK repos are citations to worked examples, lineage surfaces, or layer relationships unless explicitly stated otherwise. They do not imply code dependency, schema import, aesthetic inheritance, or project-specific doctrine import.

## Status

`docs/method.md` carries the primary method articulation. Standalone doctrine docs and method-altitude worked-example explanations have landed in `docs/` and `examples/`; the article-line index lives at `docs/articles.md`. An illustrative topology / relative-externality diagram has landed in [`docs/diagrams/`](docs/diagrams/); the diagram is illustrative, and repo prose remains source truth. Lineage remains a candidate for later PRs as substrate earns it.

## Repo contents

- `AGENTS.md` — repo-local workflow rules
- `docs/method.md` — primary method articulation
- `docs/` — standalone method doctrine and the article-line index
- `docs/diagrams/` — illustrative diagrams (`method-ASK_topology.html`); not source truth
- `examples/` — worked-example explanations at method altitude

## Anchor reading

- [*Method // Designing Systems That Build Systems*](https://atomicspacekitten.substack.com/p/method-designing-systems-that-build) — external articulation of the method category
- [*From Execution Proof Back to Normative Structure*](https://atomicspacekitten.substack.com/p/from-execution-proof-back-to-normative) — adversarial iteration as the methodology layer's primary motion
- [*Adversarial Collaboration*](https://atomicspacekitten.substack.com/p/adversarial-collaboration) — the within-session multi-mind complement, primarily resident in the execution-protocol layer

## License

Copyright 2026 Andrew S Klug // ASK

Licensed under the Apache License 2.0 // see [`LICENSE`](LICENSE)
