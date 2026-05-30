# Relative Externality

This doctrine governs how the method treats the relation between surfaces. Externality is not a property of a file, repo, or grounding note; it is a relation between two surfaces. The same artifact is external to one surface and internal to another at the same time, and authority flows in a specific direction across each boundary. This doc names the relation, the direction, and the operational rules that follow.

`method-ASK_grounding-note.md` v2 names relative externality as a foundational premise. `docs/source-of-truth-and-aging-rate.md` carries the surface authority and aging-rate substrate. `docs/absorption-discipline.md` carries the movement-between-surfaces routing. This doc carries the relation itself: which surface is external to which, in which direction, with what consequence.

`Recursive method ecology` is the portable category this doctrine supports: a topology of surfaces governed by relative externality. `ecology-ASK` is the ASK-specific, operator-side instance / altitude of that category. This document owns the portable relation doctrine; `recursive method ecology` is its category name and `ecology-ASK` is one application of it inside the ASK system — neither is a separate doctrine.

## Definition

Externality is **relative to a surface.**

A file, repo, grounding note, article, prompt, or memory surface can be external to one surface and internal to another at the same time. The question is never *is X external?* The question is always *external to what?*

Three formulations the method uses:

- **Ex-repo is not ex-system.** A grounding note lives outside the repo by surface boundary, but inside the system the repo participates in. The repo can read it; the method depends on it; the system reaches it.
- **Outside the repo can still be inside the method system.** Articles, operator memory, scratch, and grounding notes are all outside repos and all inside the method system. They are not stray context — they are layered context the method routes through.
- **Inside one layer can be outside another.** `control-surface` is internal to the ASK family meta-architecture but external to each downstream project repo. The same artifact has different externality postures depending on which surface you stand on.

There is no absolute externality. Every claim about externality has to name both surfaces.

## Two-axis model

Relative externality has two axes that have to be tracked separately:

- **Surface boundary** — where the artifact physically or operationally lives. Inside the repo, outside the repo, inside this folder, in operator-side scratch, in a separate repo, in a chat thread, in published external writing.
- **Normative direction** — where authority flows. Upstream (the surface is authoritative for downstream surfaces; downstream conforms), downstream (the surface receives authority from upstream; the surface conforms), or reflective (the surface comments on adjacent surfaces without being upstream or downstream of them).

The two axes do not align by default. A surface can be outside the repo *and* upstream of it (grounding notes). A surface can be inside the repo *and* downstream of an external source (an inheriting child project's files relative to an upstream design system referenced from outside). A surface can be outside everything *and* upstream of nothing (operator memory, by design).

Examples illustrating both axes:

- A grounding note is outside the repo by surface boundary, but upstream to the repo by normative direction.
- `control-surface` is outside downstream project repos by surface boundary, but upstream to them by normative direction (templates, prompts, instantiation workflow flow down).
- `method-ASK` is outside `control-surface` by surface boundary, but upstream to it by normative direction (methodology articulates the rules execution-protocol operationalizes).
- Articles are outside repos by surface boundary; reflective by normative direction (they comment on the method without being authoritative for current repo state, but can become substrate for later doctrine).
- Operator memory is outside repos and outside grounding notes by surface boundary, and not upstream or downstream of either by normative direction; it is ephemeral session-local — neither repo truth nor source-of-intent.
- `design-system-ASK` is outside `urban-observatory` by surface boundary, and upstream to it by normative direction for visual inheritance (Tier 1 + Tier 2 flow down; Tier 3 does not).

## Relative-externality map

The current ASK topology, textual:

- **Operator source-of-intent** — axiom outside the recursion. Upstream-external to every surface; not a surface itself, but a substrate the method depends on. Per `docs/source-of-intent.md`, recovery and validation precede repo encoding because source-of-intent is not authored by the method.
- **Grounding notes** — external to repos by surface boundary; upstream to repos by normative direction. Carry slow-aging source-of-intent, durable role boundaries, and external context. Each repo (downstream project, method, design-system) has its own grounding note; each is upstream-external to its respective repo.
- **`method-ASK`** — upstream-external to `control-surface`. Methodology articulates the rules; execution-protocol operationalizes them. Doctrine moves from method to execution-protocol, not the other way.
- **`control-surface`** — downstream-internal to `method-ASK`; upstream-external to downstream project repos. Templates, prompts, project-instantiation workflow flow down. Each downstream repo inherits from control-surface; control-surface does not inherit from individual downstream repos (though it absorbs cross-project patterns when they earn promotion per absorption discipline).
- **Downstream project repos** — downstream-internal to `control-surface`; each is external to the others. `asset-pipeline-ASK`, `urban-observatory`, `mazeASK`, and similar — peers by surface boundary; not normatively related to each other in either direction.
- **`design-system-ASK`** — peer to other repos by surface boundary; upstream-external to downstream surfaces that inherit visual language. Tier 1 (foundation) and Tier 2 (ASK design language) flow downstream by reference; Tier 3 (instance identity) stays internal to the repo and is not inherited.
- **Articles** — external to all repos by surface boundary; reflective by normative direction. Move at their own pace. Can be substrate for later doctrine when pressure earns promotion; not authoritative for current repo state.
- **Scratch / event records** — operator-side; external to all repos by surface boundary; not upstream or downstream of any repo. Fast-aging by design. Carries event chronology and working memory; never the absorption target for slow surfaces.
- **Operator memory** — external to repos and grounding notes; ephemeral session-local. Not repo truth, not source-of-intent. Operator-only.

The map is many-to-many. A single artifact (e.g., a grounding note) has externality postures vis-à-vis every other surface, not just one. Reading the map requires naming both surfaces in the relation.

## Recursive discipline, non-recursive authority

A surface can be governed by a discipline it helps execute, but it does not govern itself. The recursion is in discipline, not in authority.

`control-surface` encodes execution protocol that an execution surface consumes and applies during repo work. The protocol can itself be revised through the same scoped-review discipline it imposes on work, but authority for that revision does not come from the execution-protocol surface itself. Method-level doctrine governs how protocol patterns are interpreted, held, promoted, or rejected.

This refines the same principle as internal location does not confer authority: executing a rule does not confer authority to revise that rule.

The practical rule: when a rule changes, identify the surface that has authority to change it. A surface executing a rule is not automatically the surface authorized to revise that rule.

## Boundary with source of truth and aging rate

`docs/source-of-truth-and-aging-rate.md` carries the doctrine on surface authority and aging cadence. This doc references it as the upstream concept for authority assignment.

The composition:

- **Relative externality identifies the relation.** *X is external to Y, in direction D.*
- **Source-of-truth identifies authority.** *For claim class C, surface S is authoritative.*
- **Aging rate identifies cadence.** *Claims of type T age at rate R; the surface that owns them must be sized to that rate.*

A surface can be **external but authoritative.** A grounding note is external to the repo by surface boundary, but authoritative for source-of-intent claims about the project. The repo defers to the grounding note on those claims even though the grounding note lives outside it.

A surface can be **internal but non-authoritative for a given claim.** A repo's own `examples/` folder is internal by surface boundary, but not authoritative for the doctrine the example illustrates — that authority belongs to the doctrine doc the example reflects. Internal location does not confer authority.

The two doctrines compose: the relation (this doc) names which surface is external to which and in which direction; the authority assignment (`source-of-truth-and-aging-rate.md`) names which surface owns which claim class.

## Boundary with absorption discipline

`docs/absorption-discipline.md` carries the doctrine on how material moves between surfaces. This doc references it as the operative movement mechanism when an external surface promotes content into the surface it is external to (or vice versa).

The composition:

- **Externality names the relation between surfaces.** It is a static topology fact — *grounding note is upstream-external to repo*.
- **Absorption is movement across the relation.** It is a dynamic event — *this observation moved from scratch to doctrine because it earned promotion.*

Not every external relation implies absorption. Some relations are persistent: the grounding note is upstream-external to the repo permanently; the source-of-intent it carries is read by the repo on each session entry without being absorbed into the repo as prose. Similarly, articles can be external-and-reflective to repos forever without ever being absorbed as doctrine — the reflection is the point, not the eventual movement.

Absorption applies when the topology stays the same but specific material moves: a project-local observation moves to method doctrine; a state record moves from scratch to scratch-archive; an article-line insight earns method-altitude treatment after a second pressure case. The relation persists; the material's surface assignment changes.

The two doctrines compose: the relation (this doc) names where material currently is and which way authority flows; absorption (`absorption-discipline.md`) governs the conditions under which the material moves to a different surface.

## Boundary with source of intent

`docs/source-of-intent.md` carries the doctrine governing source-of-intent origination, recovery, validation, and routing. This doc references it as the operator-owned axiom that sits upstream-external to the entire recursion.

The composition:

- **Source-of-intent is upstream-external to every surface in the topology.** It is not a surface itself; it is the substrate the surfaces depend on.
- **Grounding notes carry source-of-intent** at the slow-aging layer. They are external to repos by surface boundary, upstream to repos by normative direction, and internal to the system by relative-externality framing.
- **The validation loop prevents AI from authoring the source it should serve.** This is a structural rule about which direction authority flows: source-of-intent flows downstream from operator validation, never upstream from method articulation.
- **The source-of-intent guard prevents unresolved means from being routed to the operator as unresolved purpose.** This is a relative-externality rule applied at a specific seam: most apparent purpose-level gaps are actually architectural-means questions the method should answer, not source-of-intent questions to escalate operator-ward.

The two doctrines compose: source-of-intent doctrine names the upstream axiom and its routing rules; this doc names the relative-externality posture of every surface that participates in the source-of-intent lifecycle.

## Worked pressure surfaces

Method altitude only. Domain detail lives in project repos and project examples.

- **`asset-pipeline-ASK`** surfaced rule/payload and voice-boundary pressure: protected vocabulary, positioning tokens, and strategic rationale are external to the repo by surface boundary but internal to the project system by relative-externality framing. The repo can name the structural category (e.g., "ASK-positioning voice"); it cannot carry the payload (the specific vocabulary). The split between what's repo-internal and what's grounding-note-internal is a relative-externality decision, not a privacy-by-default decision.
- **`urban-observatory`** surfaced source-pack and validation-loop pressure: conversation captures, intent-recovery records, and domain-authority handoffs are external to the repo by surface boundary but internal to the source-of-intent system by relative-externality framing. The validation loop sits at a specific surface seam (operator validates against AI-surfaced candidates; the AI does not author the validated intent). The domain-authority handoff classification is itself a relative-externality observation: handoffs from a domain-authority role are external to the architect/operator's primary thread but internal to the project's broader source-of-intent loop.
- **`design-system-ASK` → `urban-observatory`** surfaced inheritance-by-reference pressure: `design-system-ASK` is external to UO by surface boundary, upstream to UO by normative direction for Tier 1 + Tier 2 visual inheritance, and not normatively related to UO at all for Tier 3 (which stays internal to the parent). The inheritance is by reference, not by fork — the upstream and downstream remain distinct surfaces; only the visual language flows. n=1 across child projects; the relative-externality pattern here is observation-level pending a second downstream inheritance case.

## Failure modes

- **Treating ex-repo as irrelevant.** An artifact external to the repo is dismissed as not-part-of-the-system. This breaks the ex-repo-is-not-ex-system rule. Grounding notes, articles, and scratch are all ex-repo and all load-bearing.
- **Treating ex-repo as private by default.** An artifact external to the repo is assumed to carry private payload. This overshoots the privacy concern and conflates surface boundary with content classification. Externality is a relation, not a privacy attribute.
- **Treating external source as current instruction.** A well-formed external artifact (handoff, memo, advisor synthesis) is read as authoritative for current repo work without being routed through the absorption discipline. The form does not confer authority; the relation does.
- **Absorbing external payload into public repo.** An external surface carries payload (protected vocabulary, positioning, project-specific positioning rationale); the payload is promoted into repo prose because it "sounded good." This violates rule/payload doctrine and breaks the surface's voice posture. The repo can name the category, not carry the payload.
- **Ignoring normative direction.** A surface relation is identified by surface boundary alone, without tracking which way authority flows. The downstream surface is then accidentally treated as authoritative for the upstream one, inverting the relation.
- **Confusing downstream-external hooks with upstream-external grounding notes.** A downstream project's own external scratch is treated as if it were an upstream grounding note for the method. Both are external to the project repo; only one is upstream. The downstream-external surface does not earn upstream authority just because it shares the external-by-surface-boundary characteristic.
- **Mistaking article reflection for repo state.** Articles are reflective by normative direction; reading them as authoritative for current repo state acts against a frame the repo may have already moved past. The article is upstream of itself; it is not upstream of the repo's current contents.
- **Mistaking operator memory for repo truth.** Operator memory is ephemeral and external to every authoritative surface. Treating a memory entry as authoritative for repo state or grounding-note substance violates surface assignment.

These failure modes share a structural cause: collapsing the two-axis model into a single-axis intuition. Either surface boundary is treated as if it determined direction (it does not), or direction is presumed without checking which surface authoritatively owns the claim. The remedy is to name both axes explicitly before acting on the relation.

## Practical rule

Before using or absorbing material from an external surface, ask in order:

- **External to what?** Name the surface the artifact is external to. Not external in absolute; external to a specific other surface.
- **Internal to what larger system?** Name the system the artifact is still inside. Ex-repo is not ex-system; the artifact has not left the system just because it left the repo.
- **Which direction does authority flow?** Upstream, downstream, or reflective. The relation is not symmetric.
- **What claim class does this surface own?** Per `docs/source-of-truth-and-aging-rate.md`, surfaces are authoritative for specific claim classes. Identify the class the artifact carries.
- **What should be referenced, absorbed, ignored, or held?** Per `docs/absorption-discipline.md`, the routing decision follows from claim class + aging-rate fit + evidence threshold.
- **What payload must not cross the boundary?** Protected vocabulary, positioning, project-specific positioning rationale, private stakeholder framing — these stay on their authoritative surface even when the structural category they carry crosses.

The first three questions establish the relation. The fourth establishes authority. The fifth determines routing. The sixth catches payload leakage. All six are operational; none require deciding what externality "really is."

## Self-superseding clause

This doctrine should be superseded by:

- a formal topology diagram if textual map proves insufficient for navigating the relations (currently the map is textual by design; a diagram earns a home only if it improves operational clarity over prose)
- compression into `docs/source-of-truth-and-aging-rate.md` if the surface-authority material there absorbs most of the topology substrate this doc carries
- a future `docs/voice-surface-boundary.md` if the rule/payload subtype (the most specific failure-mode pattern here, around payload not crossing surface boundaries) earns its own focused treatment
- a more formal cross-repo externality taxonomy if multiple ASK-family child projects produce enough inheritance cases to justify a structured surface-relationship matrix (currently n=1 cross-repo inheritance proof from `design-system-ASK` → UO; promotion to formal taxonomy waits for n=2)
- a future `docs/layer-classification.md` if the routing/topology pieces from this doc, `docs/source-of-intent.md` (grounding-note refresh preflight), and `docs/source-of-truth-and-aging-rate.md` (surface split) consolidate into a central routing doc

The doctrine is not finished. The two-axis model is the current best articulation of the relation; the textual map is the current best snapshot of the topology. As the family grows (new child repos, new article-line surfaces, new operator-side patterns), the map will refine. The two-axis discipline itself is more stable than the specific surface list; the surfaces are substrate, the relational frame is doctrine.

Anchor reading lives in [`docs/articles.md`](articles.md). The article most directly substrating this doctrine is *The Rule the Repo Could Not Contain* (externality as a relation, not a property; ex-repo is not ex-system; the two-axis framing — surface boundary × normative direction; meta-to-downstream absorption as a worked instance; the invariant across surfaces).
