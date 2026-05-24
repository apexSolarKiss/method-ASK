# Source of Intent

This doctrine governs how the method handles purpose: where it originates, how it enters the system, how it is preserved across surfaces, how it is distinguished from look-alikes, and what discipline keeps the operator from being asked to reauthorize what is already settled.

Source-of-intent is the axiom the recursion cannot supply. The system can elaborate purpose endlessly, but it cannot originate it. The operator's intent — held in the grounding note, validated through the loop, recovered when inception was messy — is what the method's recursion stands on. This doc names the disciplines that keep that intent intact.

## Source-of-intent recovery

Projects do not always begin with clean source-of-intent. Inception often happens in AI-mediated exploration: chat threads, sketches, overlapping conversation captures, partial framings that accumulate without consolidation. Repo prose comes later. Method discipline at this stage is recovery, not authorship.

The load-bearing sequence is *recovered intent → validated constraint → repo*. Each step requires a distinct discipline:

- **Recovery** — reconcile overlapping conversation captures into a coherent source pack. The work is reading, not writing. The operator surfaces what was already said across threads and consolidates the durable parts into a single readable artifact.
- **Validation** — confirm the recovered intent against operator judgment. The AI does not author intent at this stage; it surfaces candidates the operator validates or rejects. The validation loop is structural, not stylistic.
- **Repo** — only after recovered intent is validated does a repo become the right artifact. The repo is not the first artifact; the first artifact is recovered intent, and the repo encodes the structure that intent earned.

The failure mode this prevents is letting the model produce another polished frame on top of stale exploration. A polished frame reads as direction; the operator validates against the underlying intent, not against the framing.

## The validation loop

The validation loop is the structural pattern that keeps the model from authoring the source of intent it is supposed to serve. When recovery surfaces a candidate frame, the operator validates it against durable purpose before any synthesis builds on it.

Three constraints make the loop work:

- The model proposes; it does not assert. Candidate framings carry an explicit "validate or reject" gate.
- The operator's validation is treated as ground truth for source-of-intent, regardless of how polished the candidate framing is.
- A rejected framing does not become a held question to relitigate. It becomes evidence that the recovery pass needs another loop, or that a candidate frame was wrong.

The loop is not skepticism or ceremony. It is the structural separation between source-of-intent (operator-owned) and structural articulation (method-owned).

## Source-of-intent guard

Fresh critique, synthesis, and handoff recaps may surface gaps between stated purpose and current evidence. Those gaps must not automatically become requests for the operator to reauthorize the purpose.

When the grounding note or repo-local premise already states the end, treat the gap as an architectural means problem: *what carrier, trace, model attempt, pressure test, inheritance structure, or boundary correction is required to make the stated purpose real?*

A held implementation question is not the same as a held purpose question. Do not promote unresolved means into an unresolved source-of-intent fork.

The guard is what prevents the system from manufacturing source-of-intent decisions out of every gap that surfaces. The operator's attention to source-of-intent is finite and load-bearing; the system protects it by not spending it on means-level questions disguised as purpose-level questions.

## Category distinctions

Before naming operator-required source-of-intent input, distinguish what kind of question is actually live. Eight categories recur:

| Category | What it is | Who decides |
|---|---|---|
| **Source of intent** | new purpose, audience, or premise not already supplied by durable sources | operator (this is the only category that requires source-of-intent input) |
| **Architectural means** | how to operationalize an already-supplied premise | method / structural attempt against the premise |
| **Sequencing choice** | ordering among valid routes the durable sources already permit | operator may decide if the choice is load-bearing; otherwise method |
| **Advisor scratch** | exploratory framing surfaced during synthesis | not promoted to repo work until validated against purpose |
| **Future roadmap** | direction that may matter later but is not current-stage source-of-intent | preserved as roadmap context; does not reshape current repo work |
| **Premature implementation architecture** | structural commitment that gets ahead of the method's current stage | held, not adopted; the method's architecture-attempt-before-prototype discipline applies |
| **State / event record** | review chronology, who said what, what a specific review validated or did not validate, current event outcome | scratch / operator-side event record |
| **Repo-local public-safe project truth** | stable generalized project truth that belongs in public repo docs rather than the grounding note | repo |

The category distinctions are load-bearing. Conflating *architectural means* with *source of intent* burns operator attention on questions the method should answer. Conflating *advisor scratch* or *future roadmap* with *source of intent* lets exploratory or out-of-stage material reshape current work as if it were validated direction.

Only the *source of intent* category requires the operator to supply new purpose-level input. The other categories route elsewhere: method-side attempt, sequencing decision, scratch, roadmap context, held implementation architecture, or repo-local truth.

## Grounding-note refresh preflight

Before refreshing a grounding note, classify the candidate content layer explicitly.

A grounding note should absorb slow-aging source-of-intent: purpose, audience, durable constraints, durable role boundaries, and source-of-intent implications. It should not absorb state chronology merely because the event was important.

Use the category distinctions above before drafting a grounding-note refresh:

- slow source-of-intent → grounding note
- state / event record → scratch
- repo-local public-safe project truth → repo
- future roadmap → roadmap context
- advisor scratch → scratch until validated
- premature implementation architecture → hold

The failure mode is state-oriented reviewer chronology dressed up as durable posture. If placed in the grounding note, it forces the grounding note to age at the rate of the event record.

The gate should happen before Plan-Before-Execute for a grounding-note refresh, not after the refresh has already been drafted.

## Source-of-intent nudge

At local plateaus, after meaningful absorptions, or when the next move is unclear but the durable purpose may already be sufficient, the system asks the advisor surface what additional operator source of intent or direction is needed to continue developing the project toward its stated purpose.

The nudge is not "what next?" — it is a boundary-classification pass. The advisor classifies the next move against the category distinctions above and returns one of:

- *No new source-of-intent needed.* The durable sources already contain the premise; derive the next move from the current architecture.
- *Sequencing choice; operator may decide.* Load-bearing-enough to ask, but not new purpose.
- *Architectural means; force an attempt against the premise.*
- *Advisor scratch surfaced; validate before promoting.*
- *Future roadmap surfaced; preserve, do not reshape current work.*
- *Premature implementation architecture; hold.*
- *Source-of-intent boundary actually reached; ask the operator.*
- *Stop signal; the current closure is a real pause point, do not auto-chain.*

A nudge that returns "no new source-of-intent is needed" or "stop" is a successful result. The nudge's job is classification, not perpetual motion. Returning a stop signal protects against the failure mode where correct moves chained too quickly become their own drift vector.

The nudge is a lighter-weight control loop than the fresh-context critique cycle. Use it before invoking fresh external critique when the question is local sequencing, absorption, routing, or next-pressure choice. Escalate to fresh-context critique when the nudge surfaces drift, stale durable context, unresolved purpose, or a need for independent reconstruction from repo plus grounding note.

## External / domain-authority handoff classification (observation-level)

Some projects have an external source-of-intent loop where domain authority sits in a different role than architect/operator, and handoff content (memos, sketches, expert recaps) enters the system from outside the operator's direct authoring.

`urban-observatory` is the project where this pattern first surfaced. ASK is the project's architect/operator; the domain authority is a separate role. Domain-authority input arrives as handoffs that may carry valid source-of-intent, current-stage refinement, future roadmap, advisor scratch, or premature implementation architecture in the same artifact. The project's grounding note v12 added a project-specific guardrail: classify the handoff against those categories before treating any of it as current repo direction.

The project-specific guardrail itself stays in `urban-observatory`'s grounding note. The generalized observation lives here at observation-level only:

> When a project has an external source-of-intent loop where domain authority sits in a role distinct from architect/operator, handoffs from the domain-authority role may benefit from stage-aware classification before reshaping current repo work.

This observation has not yet earned promotion to rule-level method doctrine. The absorption discipline applies: n=1 stays observation-level until a second project surfaces the same pressure, or a strong structural argument justifies generalization before repetition. A future `docs/external-handoff-classification.md` may earn its own home if the pattern recurs.

The category mapping for handoff classification reuses the doctrine's category distinctions above. *Valid source-of-intent* maps to the first row; *current-stage refinement* maps to architectural-means; *future roadmap*, *advisor scratch*, and *premature implementation architecture* map directly. The classification is not a separate taxonomy — it is the doctrine's existing categories applied at the moment external content enters the system.

## Operator grounding-note extension (adjacent pressure)

Source-of-intent has a persistence problem at every layer below it — projects forget across threads, tools forget across sessions. The method's response is the grounding note: externalized, durable, single-sourced intent that the system reads on entry.

The same persistence problem applies to the operator. The operator works across tools, across threads, across weeks. The durable facts about the operator — how they want to be engaged, what context shapes their judgment, what's load-bearing for them this week — do not survive a thread boundary either. Every new conversation starts cold; tools disagree about state; the operator re-explains constantly.

This is the project-memory problem with the subject changed. If the grounding note is the answer for a project, the operator needs a grounding note too. Same architecture: externalized files, organized by aging rate, single-sourced, read on entry, surviving any thread. Pointer discipline at the boundaries, aging-rate discipline within.

This is adjacent method pressure, not method doctrine to absorb wholesale. The operator-grounding-note pattern lives operator-side; its specifics (file names, content layout, tool-specific behaviors) are not method-ASK's to articulate. What method-ASK preserves is the structural observation that *source-of-intent persistence applies recursively to the operator who supplies the intent*.

Two implications for the doctrine:

- The operator's source-of-intent has the same load-bearing-ness as the project's. The axiom-outside-the-recursion (per [*Machine Builds Machine*](https://atomicspacekitten.substack.com/p/machine-builds-machine)) lives in the operator; the operator's context can no more be left to ephemeral threads than the project's can.
- The dual-axis role-typing matters. Architect/operator and domain authority are different roles, and the source-of-intent pattern works differently depending on which role is supplying intent. The external/domain-authority handoff classification observation above is one specific instance of this dual-axis structure.

## Self-superseding clause

This doctrine should be superseded by:

- a future `docs/external-handoff-classification.md` if the external/domain-authority handoff pattern earns its own first-class home (typically when a second project surfaces the same pressure)
- splitting-out of the validation-loop discipline into its own doc if validation-pattern substrate accumulates beyond what this doctrine can carry
- broader refactoring if the category distinctions earn their own home (e.g., `docs/category-distinctions.md`) and source-of-intent contracts to a thinner doctrine that references it
- a future `docs/layer-classification.md` or `docs/absorption-discipline.md` if the grounding-note refresh preflight subsection grows into a broader treatment that absorbs it

The doctrine is not finished. The eight-category distinction may refine as more pressure surfaces. The operator-grounding-note extension may earn fuller treatment if the operator-side architecture becomes method-relevant in its own right (rather than as adjacent pressure). The external-handoff classification observation is the most likely candidate for near-term promotion if a second project shows the pattern.

Anchor reading lives in [`docs/articles.md`](articles.md). The articles most directly substrating this doctrine are *From Conversation to Control Surface* (recovered intent → validated constraint → repo), *The Handoff Is Not the Instruction* (the five-category classification), and *Context // The Operator Needs a Grounding Note Too* (the operator-side persistence pressure).
