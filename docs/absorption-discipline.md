# Absorption Discipline

This doctrine governs how material moves between surfaces — when an observation, pattern, or piece of state earns a more durable or more general home, and when it does not. Absorption is the move; this doctrine is the discipline that prevents the move from happening for the wrong reasons.

The methodology repo embodies the discipline it articulates. `AGENTS.md` carries the absorption discipline as a workflow rule. This doc carries it at method altitude: what the discipline is, what it prevents, where material routes, and how observation-level material is preserved without being promoted prematurely.

## Definition

Absorption is the promotion of material from one surface to another because it has earned a more durable or more general home.

Surfaces in this method have different aging rates and different audiences. State ages fast and lives in the repo. Rules age slowly and live in `AGENTS.md`. Context ages slowly and lives in the grounding note. Per-conversation tracking is ephemeral and lives in operator-side memory. Reflection moves at its own pace and lives in external writing. Method articulation lives in `method-ASK`; execution protocol lives in `control-surface`.

Absorption moves material from its current surface to the appropriate one when the material has earned that move. The doctrine governs both the move and the refusal to make it.

## What absorption is not

Not every insight gets absorbed. Most material stays where it is until the criteria for promotion are met.

Absorption is not:

- copying scratch into repo merely because the scratch artifact is well-formed
- turning event chronology into grounding-note posture because the event was important
- promoting a first sighting into rule-level doctrine because the pattern feels structural
- treating a polished handoff as current instruction because the handoff format is convincing
- treating future roadmap as current-stage work because the roadmap looks actionable
- turning implementation architecture into method before the method stage has earned it
- absorbing material on first sighting that has not yet been pressure-tested across more than one surface

These failure modes share a structural cause: a surface that ages slowly receives material that ages faster than the surface does. The surface then ages at the rate of its fastest-aging contents — usually badly. The aging-rate principle (`docs/method.md` §Disciplines During Execution) is the upstream reason absorption discipline matters.

## Layer destinations

Likely destinations for material being considered for absorption:

- **Repo-local public-safe truth** — stable, generalized project truth that belongs in a public repo's prose. Slow-aging.
- **Grounding note** — slow-aging source-of-intent, audience, durable constraints, durable role boundaries.
- **Scratch / operator-side event record** — state chronology, event records, in-flight per-conversation tracking. Fast-aging; never the absorption target for slow surfaces.
- **`method-ASK` doctrine** — cross-project method articulation that has earned generalization beyond a single project.
- **`control-surface` execution protocol** — workflow rules, templates, prompts that operationalize the method per session.
- **Project-local observation** — project-specific patterns that have not earned generalization beyond their project. The project's own grounding note or repo carries the project-local form.
- **Future roadmap context** — direction that may matter later but is not current-stage source-of-intent. Held without reshaping current work.
- **Hold / no action** — material the discipline declines to absorb anywhere yet. Held material is not lost; it is preserved at the surface where it currently sits, pending evidence that would warrant a move.

The classification step — what kind of material is this — uses the category distinctions in [`docs/source-of-intent.md`](source-of-intent.md). The routing step — where does it go — uses the destinations above. The two steps compose: classify first, then route.

## Evidence thresholds

The core rule:

> n=1 project-specific patterns stay at observation-level by default. Promotion to rule-level doctrine requires earned evidence: repeated pressure across projects, or an explicit structural argument strong enough to justify generalization before repetition. A second project is a useful threshold, not a mechanical law.

The threshold prevents methodology bloat. Promoting on first sighting produces doctrine that has not been pressure-tested across projects, which then has to be retracted, narrowed, or quietly invalidated when the second project surfaces. Refusal is cheaper than retraction.

The structural-argument exception applies when recurrence is forced by the architecture rather than waited for: if a pattern's recurrence is structurally guaranteed (every project of a known class will surface the same pressure), the absorption can earn promotion before the second case actually lands. The exception is exception, not loophole. Most patterns wait for evidence. The structural argument has to be strong enough that the recurrence is genuinely architectural, not just plausible.

A second project is the most common threshold trigger because the second instance is what disambiguates project-specific shape from cross-project pattern. The first instance is always entangled with its project's specifics; the second is what isolates the generalizable substrate.

## Observation-level material

The methodology repo carries observation-level material without pretending it is doctrine. The discipline:

1. **Label explicitly.** The subsection or doc names the material as observation-level, not rule.
2. **State the candidate generalization.** Name what the observation suggests if pressure repeats — concretely enough that a second project's pressure can either confirm or disconfirm.
3. **State the promotion condition.** What evidence would earn rule-level treatment, typically a second project surfacing the same pressure or a structural argument strong enough to justify generalization before repetition.
4. **Preserve the project-specific rule in the project surface where it belongs.** The grounding note for the project that surfaced the pattern carries the project-local form; the methodology repo carries only what is generalizable, at observation-level until earned.

Observation-level material does not have to be small. A subsection-length treatment is appropriate when the pattern is dense; a sentence-length flag is appropriate when the pattern is thin. The discipline lives in the labeling and the explicit promotion condition, not the length.

`docs/source-of-intent.md` carries one such observation-level subsection (external / domain-authority handoff classification) per this discipline. The pattern earns its own first-class doc only when a second project surfaces the same external-source-of-intent-loop pressure or when a structural argument earns the promotion before that.

## Self-diagnostic nomination

When the active control surface notices a routing or operational behavior recurring across surfaces, it should nominate the behavior as a candidate protocol rather than silently keep using it. Nomination is not promotion. The system does not promote the behavior on its own; ASK decides whether the noticing matters and what surface it belongs to.

A repeated local habit is not enough. The nomination threshold is recurrence across surfaces, recurrence at a structural boundary, or a clear failure mode created by leaving the behavior implicit. Without this guard, every reused local convenience becomes a candidate protocol and the methodology bloats.

A nomination identifies:

- **Where** the behavior repeated — which surfaces, which artifacts
- **What problem** it solved — what failure mode the implicit pattern was preventing
- **What failure** it prevents — the explicit failure-mode framing
- **What surface** might own the protocol — method-ASK doctrine candidate, control-surface workflow rule, project-local rule, or operator-side memo only
- **What would happen** if it remained implicit — silent continued use vs unbearable absence

The discipline sits alongside three adjacent disciplines and confers different authority from each:

- **Relay** confers operative intent on a specific forwarded artifact
- **Cross-surface routing** (per `docs/source-of-intent.md` §Cross-surface handoff routing) confers candidate normative availability of material
- **Handoff memo completeness** (per `docs/source-of-intent.md` §Handoff memo completeness) governs the integrity of a routed artifact
- **Self-diagnostic nomination** confers no authority on the noticed pattern; it only asks ASK whether a protocol is emerging

The nomination protects against two opposite failures. **Under-noticing** keeps an emergent protocol implicit — the methodology cannot articulate its own emergence patterns, and future operators, advisors, and sessions inherit the protocol without knowing it is a protocol. **Over-promoting** turns every repeated behavior into doctrine on first sighting — the §Evidence thresholds rule is violated and the methodology bloats with material that has not been pressure-tested. Nomination is the middle: it preserves source-of-intent authority (ASK decides) while making the pattern legible (the system surfaces it for review).

```text
system notices recurrence
system nominates candidate protocol
ASK decides whether the noticing matters
method / recipient surface absorbs only after scoped approval
```

The nomination itself confers no authority. Authority belongs to ASK and the receiving surface.

## Grounding-note layer-classification gate

Before refreshing a grounding note, classify the candidate content layer explicitly.

A grounding note should absorb slow-aging source-of-intent: purpose, audience, durable constraints, durable role boundaries, source-of-intent implications. It should not absorb state chronology merely because the event was important.

Use the eight-category distinctions in [`docs/source-of-intent.md`](source-of-intent.md) to route candidate content before drafting a grounding-note refresh:

- slow source-of-intent → grounding note
- state / event record → scratch
- repo-local public-safe project truth → repo
- future roadmap → roadmap context
- advisor scratch → scratch until validated
- premature implementation architecture → hold

The failure mode the gate prevents: state-oriented reviewer chronology dressed up as durable posture. If placed in the grounding note, it forces the grounding note to age at the rate of the event record — the surface-aging-rate failure mode named in §What absorption is not.

The gate happens before Plan-Before-Execute for a grounding-note refresh, not after the refresh has already been drafted. The full preflight detail lives in `docs/source-of-intent.md`. This doctrine invokes it as the routing surface for absorption decisions that touch a grounding note.

## Worked pressure surfaces

Method altitude mentions only. Domain detail lives in the project repos and in the project examples (`examples/`).

- **[`asset-pipeline-ASK`](https://github.com/apexSolarKiss/asset-pipeline-ASK)** surfaced the aging-rate principle, the source-of-truth split, and the voice / surface-boundary discipline. These were absorbed upstream into `control-surface` (workflow templates, `AGENTS.md` rules) and into `docs/method.md` (method-altitude articulation). The absorption was earned by repeated pressure across the project's own phases plus structural validation against a second pressure surface as it landed.
- **[`urban-observatory`](https://github.com/apexSolarKiss/urban-observatory)** surfaced source-of-intent recovery, the validation loop discipline, the post-bootstrap trim pass, and the external / domain-authority handoff classification observation. The post-bootstrap trim pass earned absorption into `control-surface/templates/grounding-note.template.md` because the lifecycle gate generalizes beyond the urban-observatory domain. The external-handoff classification stayed at observation-level — the meta repo explicitly declined to absorb a project-specific guardrail before generalization was earned. That decision was the first case where the absorption discipline was applied in the moment of its own application.
- **[`design-system-ASK`](https://github.com/apexSolarKiss/design-system-ASK)** is not yet an absorption example in `method-ASK`. The repo exists and is internally tier-demarcated, but downstream inheritance into a child project has not yet happened in practice. If a child project (a downstream ASK-family instance) inherits Tier 1 + Tier 2 in real use, the inheritance pattern may earn method-altitude absorption. Until then, the tier model is a design-system-internal artifact, not method doctrine. The absorption discipline applies to itself: a freshly-built reference implementation does not retroactively constitute a proven inheritance pattern.

## Failure modes

- **Over-absorption.** Promoting first sightings into doctrine. The methodology bloats with material that has not earned its surface. Subsequent retraction is harder than refusal.
- **Under-absorption.** Material that has earned promotion stays in scratch or project-local because no one notices the threshold was crossed. The discipline is bidirectional — refusing to absorb is not the same as ignoring evidence.
- **Wrong-surface absorption.** Material lands in the right repo but on the wrong surface within it: project state in a grounding note, workflow rule in a doctrine doc, doctrine in `AGENTS.md`. Each surface's aging rate is compromised.
- **Premature generalization.** Promoting a project-specific pattern to universal rule before the structural argument is strong enough or the second pressure case has surfaced. The promoted rule then has to be narrowed when the second case disagrees.
- **Stale source-of-intent capture.** Source-of-intent absorbed at one project phase becomes a forward-reference that no longer matches current direction. The absorption was correct at the time and stale now; the discipline includes refreshing or retracting absorbed material when the underlying intent has moved.
- **Event chronology masquerading as durable doctrine.** State-oriented reviewer feedback, session recaps, or post-event narration find their way onto surfaces that should age slowly. The grounding-note layer-classification gate guards specifically against this.
- **Repo bloat from article / prose duplication.** Material lifted from the article line into repo prose, or repeated across multiple repo docs because each looked like a plausible home. The repo carries the structural articulation once; the article line carries the reflection at its own pace; cross-references handle the rest.

## Self-superseding clause

This doctrine should be superseded by:

- a future `docs/layer-classification.md` if the layer-classification gate grows beyond what `docs/source-of-intent.md`'s preflight subsection and this doc's §Layer destinations and §Grounding-note layer-classification gate can carry between them
- a future `docs/external-handoff-classification.md` if the external / domain-authority handoff observation earns its own first-class home, typically when a second project surfaces the same external-source-of-intent-loop pressure
- a stable promotion taxonomy that earns its own home if multiple downstream projects produce enough absorption-decision cases to justify a more formal taxonomy than this doc's §Evidence thresholds and §Observation-level material
- compression into `docs/source-of-intent.md` or `docs/relative-externality.md` if those docs absorb this doctrine's substance as part of their own evolution and the standalone absorption-discipline doc becomes redundant

The doctrine is not finished. Its evidence threshold and its observation-level treatment are themselves observation-level patterns — they have been pressure-tested by the methodology repo's own operating experience but not by a second methodology system at the same altitude. If a second methodology repo surfaces the same absorption pressure with different conclusions, the discipline may refine. The discipline applies to itself: this doc is not exempt from the absorption discipline it articulates.

Anchor reading lives in [`docs/articles.md`](articles.md). The articles most directly substrating this doctrine are *The Rule the Repo Could Not Contain* (meta-to-downstream absorption; ex-repo is not ex-system; externality as a relation; the recursive constraint that the methodology repo embodies the discipline it articulates), *The Handoff Is Not the Instruction* (the categorical classification of incoming material; well-formed handoffs structurally tend to be read as current direction; the operating rule that only valid source-of-intent and current-stage refinement reshape current work by default), and *Lessons from the First Prototype Phase* (the structural retrospective; calibrated compensations; the ~50x ceremony reduction; the principle that rules earn promotion, they are not declared).
