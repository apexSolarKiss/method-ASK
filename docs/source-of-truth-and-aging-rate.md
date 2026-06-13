# Source of Truth and Aging Rate

This doctrine governs how the method assigns authority to surfaces. A surface is authoritative for a class of claim because it is sized to that claim's aging rate. Mixing aging rates within one surface produces a surface that ages at the rate of its fastest-aging contents — usually badly. This doc names the split, the failure modes, and the routing rule.

`AGENTS.md` carries the aging-rate principle as a workflow rule and the source-of-truth split as a brief enumeration. `docs/method.md` references both as elements within the broader method articulation. This doc carries them at full doctrine altitude: definition, the operative surface split, failure modes, boundaries with adjacent doctrine, and a practical decision rule.

## Definition

- **Source of truth** is the authoritative surface for a given class of claim. When two surfaces disagree, the authoritative one wins. Authority is assigned by claim type, not by recency or fluency.
- **Aging rate** is how quickly a claim type becomes stale. State ages fast. Rules age slowly. Source of intent ages slowly. Per-conversation tracking is ephemeral. Reflection moves at its own pace.
- **Each surface should be sized to one dominant aging rate.** A surface that mixes a slow-aging payload with fast-aging contents ages at the rate of the fastest contents. The slow payload becomes unreadable through the noise; the fast payload becomes stale-looking under the surface's slow-aging frame.

Source of truth and aging rate are the same problem viewed from two angles. Source of truth asks *which surface owns this claim?* Aging rate asks *how fast does this claim go stale?* Both questions resolve to: pick the surface whose aging cadence matches the claim's, and let that surface be authoritative.

## Core split

The method assigns authority across these surfaces:

- **Repo** — project state, public-safe truth, current artifacts, doctrine docs, code, schema. Authoritative for *what the project currently is*. Aging rate is project-specific but generally slow within categories (doctrine slower; state faster).
- **`AGENTS.md`** — repo-local workflow rules for executors working on the repo. Authoritative for *how repo work is done*. Slow-aging. Refreshes only when a workflow rule is added, removed, or materially revised — not when project state changes.
- **Grounding note** — slow-aging source-of-intent + external context (graduation origin, audience, durable role boundaries, foundational premises, durable loose threads). Authoritative for *why this project exists and what its enduring premises are*. Slow-aging by design. Lives operator-side, external to the repo.
- **Scratch** — event records, state chronology, working memory, in-flight per-conversation tracking, post-event recaps. Authoritative for *what happened, when, in what sequence*. Fast-aging. Lives operator-side.
- **`method-ASK` docs** — cross-project method doctrine that has earned generalization. Authoritative for *the method itself*. Slow-aging. Refreshes only when the underlying method articulation has materially evolved.
- **`control-surface`** — execution protocol, workflow templates, prompts, project-instantiation workflow, the per-PR cadence. Authoritative for *how sessions operate against repos*. Slow-aging.
- **Articles** — reflection at its own pace; conceptual source of truth for the externally-written essay line. Authoritative for *the conceptual articulation of method elements as they appear in public reflection*. Own pace, distinct from doctrine cadence.
- **Operator memory** — per-conversation reminders, project-session ephemera (Claude Code's `MEMORY.md`, ChatGPT thread history, in-flight task lists). Authoritative for *what the operator needs to remember session-to-session*. Ephemeral. Not repo truth.

Each surface has a single dominant aging rate. The split is not separation-of-concerns alone; it is separation-by-aging-rate.

## Failure modes

- **Mixing fast state into slow grounding notes.** Event chronology, review outcomes, or current-stage status absorbed into the grounding note. The grounding note then ages at the rate of the events it carries, losing its slow-source-of-intent property.
- **Duplicating repo truth in grounding notes.** Repeating current project state in the grounding note creates two sources for the same claim. The grounding note drifts as the repo updates; the repo is authoritative but the grounding note is read first.
- **Treating scratch as doctrine.** A well-formed scratch artifact reads as authoritative even though it was sized to fast-aging contents. Promoting it into doctrine without absorption discipline (see boundary below) bypasses the surface-sizing check.
- **Treating articles as repo specs.** Articles reflect at their own pace; they are not authoritative for current repo state. A reader who treats the article as the operating rule risks acting against a frame the repo has already moved past.
- **Treating generated summaries as authoritative without artifact verification.** A chat-side summary of file contents, branch state, or PR diff can sound coherent while being stale. Authority belongs to the artifact, not to the summary.
- **Letting chat-state outrank repo-state.** Conversational fluency can produce confident claims about current file content that the actual file has already superseded. The repo decides; the conversation may frame.
- **Letting a surface age at the rate of its fastest-aging contents.** The meta-failure. Any surface that admits material from a faster-aging class will gradually take that faster cadence — regardless of intent. The fix is upstream (refuse the material) rather than downstream (try to age the surface differently).

These failure modes share a structural cause: authority assignment by content urgency rather than by surface fit. The remedy is surface-sizing applied at the moment of writing, before the material lands.

## Boundary with source of intent

`docs/source-of-intent.md` carries the doctrine governing source-of-intent origination, recovery, validation, and the grounding-note refresh preflight. This doc references it as the upstream concept for the *source of intent* layer in the surface split above.

Specifically:

- Source of intent is operator-owned. The method can elaborate purpose endlessly but cannot originate it. The grounding note is the surface that carries operator-validated source of intent.
- Recovery and validation precede repo encoding. The repo is not the first artifact; recovered intent is. The repo encodes the structure that validated intent earned.
- The source-of-intent guard prevents unresolved means from becoming unresolved purpose. Most apparent purpose-level gaps are actually architectural-means questions that should be answered method-side, not routed back to the operator.
- The grounding-note refresh preflight classifies candidate content before it enters the grounding note. State / event records route to scratch; slow source-of-intent routes to the grounding note; repo-local public-safe truth routes to the repo; future roadmap is held; advisor scratch waits for validation; premature implementation architecture is held.

The aging-rate principle determines surface authority. The source-of-intent doctrine determines what counts as authoritative source-of-intent at the slow-aging layer. The two docs compose: source-of-intent doctrine names the upstream concept; this doc names the surface that carries it and the cadence at which it ages.

## Boundary with absorption discipline

`docs/absorption-discipline.md` carries the doctrine governing how material moves between surfaces. This doc references it as the operative mechanism for changing a claim's surface assignment.

Specifically:

- Absorption is the move from one surface to another when material has earned a more durable or more general home. The surface split above defines the *destinations*; absorption discipline governs the *movement*.
- Material earns a new surface only when it has earned that aging rate and that level of generality. Aging-rate fit alone is insufficient if the claim has not earned slow-surface durability. Generality alone is insufficient if the claim has not been pressure-tested.
- n=1 stays observation-level unless the structural argument is strong enough to justify generalization before repetition. The default is restraint.
- Absorption can move material upward (toward more durable or more general surfaces), downward (out of a surface where it no longer fits, into operator-side or scratch), or nowhere (held material that has not earned movement either way).

The surface split is a topology; absorption discipline is the routing rule that respects it. A surface assignment without an absorption discipline produces drift; an absorption discipline without a surface split has nowhere to route material to.

## Worked pressure surfaces

Method altitude mentions only. Domain detail lives in the project repos and in the project examples (`examples/`).

- **[`asset-pipeline-ASK`](https://github.com/apexSolarKiss/asset-pipeline-ASK)** surfaced the aging-rate principle and the source-of-truth split under mature project pressure. The friction of mixing rules, state, and context in a single doc was the original surfacing event. The doctrine that resulted — repo carries project state, `AGENTS.md` carries workflow rules, grounding note carries source-of-intent, operator-side memory carries per-conversation tracking — generalized cleanly upstream into `control-surface` workflow templates and into `docs/method.md`'s §Disciplines During Execution treatment.
- **[`urban-observatory`](https://github.com/apexSolarKiss/urban-observatory)** surfaced source-of-intent recovery, the post-bootstrap grounding-note trim pass, and state-vs-context routing. The grounding-note layer-classification gate (now in `docs/source-of-intent.md` §Grounding-note refresh preflight) was the structural absorption of this pressure. State / event records route to scratch even when the event was important.
- **[`design-system-ASK`](https://github.com/apexSolarKiss/design-system-ASK)** surfaced the presence-vs-structure verification observation and the freshly-built-reference-implementation-vs-proven-inheritance distinction. The presence-vs-structure observation is currently held at observation-level; n=1 across child projects. Promotion to rule-level treatment in this doc, in `docs/absorption-discipline.md`, or in `control-surface` templates waits for a second child project surfacing the same failure mode. The reference-implementation-vs-proof distinction is captured in `examples/design-system-ASK.md` as the worked-example framing.

## Practical rule

Before writing or updating any artifact, ask in order:

- What kind of claim is this? (project state / workflow rule / source of intent / event record / cross-project doctrine / execution protocol / reflection / operator memory)
- Which surface owns this claim? (repo / `AGENTS.md` / grounding note / scratch / `method-ASK` doc / `control-surface` / article / operator memory)
- How fast will it age? (slow / own pace / fast / ephemeral)
- What would become stale if placed here? (the test for wrong-surface fit)
- What would be lost if it stays where it is? (the test for under-absorption)
- What later evidence would move it? (the explicit promotion / demotion condition)

The first three questions establish surface fit. The fourth surfaces the staleness risk. The fifth surfaces the under-absorption risk. The sixth records the trigger that would warrant a future move, so the assignment is auditable rather than presumed permanent.

The rule is a tripwire, not a ceremony. Most material answers the first three questions trivially and routes without friction. The rule earns its keep on the cases where the answers disagree.

## Self-superseding clause

This doctrine should be superseded by:

- a future `docs/relative-externality.md` if the surface-topology pieces (the core split, the boundary with adjacent surfaces, the recursive externality relationships) earn a more focused home there and this doc compresses toward the aging-rate and authority-assignment substrate
- a future `docs/voice-surface-boundary.md` if the doctrine's failure-mode treatment for voice-bearing surfaces (article-as-spec confusion, summary-as-authority drift) earns specific treatment in that doc
- compression into `docs/absorption-discipline.md` if the surface-split topology folds into absorption-discipline's §Layer destinations as the routing surface, and the aging-rate principle compresses into a shorter cross-reference
- a future `docs/layer-classification.md` if multiple downstream projects produce enough surface-routing decisions to justify a more formal central routing doc that absorbs both this doc's surface split and the source-of-intent grounding-note refresh preflight

The doctrine is not finished. The eight-surface split is the current best articulation of the method's lived surface topology. As surfaces shift — articles becoming codified differently, new repos earning their own classes, operator memory evolving with tool changes — the split will refine. The aging-rate principle itself is more stable than the specific surface list; the surfaces are the substrate, the aging-rate is the doctrine.

Anchor reading lives in [`docs/articles.md`](articles.md). The articles most directly substrating this doctrine are *Lessons from the First Prototype Phase* (the structural retrospective; the original surfacing of aging-rate and source-of-truth as load-bearing principles), *The Rule the Repo Could Not Contain* (externality as a relation, not a property; surfaces carry the structural category but not always the payload), and *Three Agents Got Into an Argument // The Repo Won* (repo-as-arbiter for current-state questions; the operating rule that splits chat-side advisors from the artifact-owning surface).
