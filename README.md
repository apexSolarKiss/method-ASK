# method-ASK

Methodology layer for the ASK family of projects.

This repo carries the cross-project method for designing systems that build systems: doctrine, topology, lineage, source-of-truth structure, and worked-example explanations at method altitude.

It does not carry execution-protocol assets. Those live in [`apexSolarKiss/control-surface`](https://github.com/apexSolarKiss/control-surface) — `AGENTS.md` rules, templates, prompts, project-instantiation workflow, and worked-example workflow notes.

## Layer relationship

- **`method-ASK`** (this repo) — methodology layer, upstream
- **`control-surface`** — execution-protocol layer
- **project repos** — downstream applications (`asset-pipeline-ASK`, `urban-observatory`, `mazeASK`)

The methodology layer articulates the cross-project method; the execution-protocol layer encodes calibrated rules that operationalize the method per session; project repos apply both to concrete domains.

## Status

Method seed in progress. `docs/method.md` now carries the primary method articulation. Standalone doctrine docs, lineage, article index, diagrams if earned, and worked-example explanations land in subsequent PRs.

`control-surface/docs/method.md` remains in place until a separate PR rewrites it as a compact bridge + pointer to this repo.

## Repo contents

- `AGENTS.md` — repo-local workflow rules
- `docs/method.md` — primary method articulation
- `docs/` — standalone method doctrine, topology, lineage, and source-of-truth structure as they land in subsequent PRs
- `examples/` — worked-example explanations at method altitude (lands in subsequent PRs)

## Anchor reading

- [*Method // Designing Systems That Build Systems*](https://atomicspacekitten.substack.com/p/method-designing-systems-that-build) — external articulation of the method category
- [*From Execution Proof Back to Normative Structure*](https://atomicspacekitten.substack.com/p/from-execution-proof-back-to-normative) — adversarial iteration as the methodology layer's primary motion
- [*Adversarial Collaboration*](https://atomicspacekitten.substack.com/p/adversarial-collaboration) — the within-session multi-mind complement, primarily resident in the execution-protocol layer

## License

Apache 2.0.
