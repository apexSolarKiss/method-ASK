# Method // Designing Systems That Build Systems

This document is the methodology layer's articulation of the method used to design systems that produce, govern, template, or instantiate other systems. Some downstream systems are themselves systems-of-systems; the broader target is the system-building layer.

## Posture

```text
methodology layer
upstream of control-surface
not just adversarial iteration
comprehensive statement of the method
articulates the rule it follows
```

This is the methodology layer. The execution-protocol layer that operationalizes it — `AGENTS.md` rules, two review windows, branch discipline, the cadence per [*Adversarial Collaboration*](https://atomicspacekitten.substack.com/p/adversarial-collaboration) — lives in `apexSolarKiss/control-surface`. That layer governs how work gets done within a session. The methodology layer governs how a project navigates its own evolution across phases.

The two layers are at different altitudes:

- **Execution protocol** — per-session, per-PR, multi-agent dialogue at the architectural altitude. Workflow rules live in `control-surface/AGENTS.md`; advisor posture and cadence context are recorded in `control-surface`'s grounding note. Anchored on [*Adversarial Collaboration*](https://atomicspacekitten.substack.com/p/adversarial-collaboration).
- **Methodology** — cross-phase, across-time, single-mind project rhythm. Lives here. Anchored on [*From Execution Proof Back to Normative Structure*](https://atomicspacekitten.substack.com/p/from-execution-proof-back-to-normative).

The pendulum / swing motion that *From Execution Proof Back to Normative Structure* names as the project's rhythm is one element of the method, not the whole. It names the across-time rhythm of adversarial iteration. Other elements — ontology development, vocabulary deconstruction, pressure-surface use of prototypes, evidence-trail integrity, fresh-context critique, source-of-intent guard, source-of-intent nudge, externality-decision routing, and drift audit — are equally load-bearing.

The rake names a shared restoration function across several of these distinct mechanisms: it returns source of intent, ownership, carriers, state, local difference, and representations to a more legible relation after ordinary system-building motion has accumulated drift. It is not a master metaphor for the method.

The nudge layer adds something different from a metaphor. It is an operational simulation of the external-intent boundary: the system asks whether durable sources already supply enough intent for the next move, whether new operator intent is needed, whether external synthesis is enough, or whether fresh-context critique should be nominated. The method doc covers the broader method; no single rhythm, metaphor, or control layer exhausts the content.

## What This Doc Captures

The method is the practice of designing systems whose structure is itself worth articulating before, during, and after implementation. The mature worked example this document currently centers is [`apexSolarKiss/asset-pipeline-ASK`](https://github.com/apexSolarKiss/asset-pipeline-ASK) — an information architecture for commercial visual asset production pipelines. The project is the worked example; the method is the durable element.

The method is not a single principle. It is a coherent collection of pre-architecture moves, execution disciplines, synthesis disciplines, cross-phase workflow shape, surface-and-voice discipline, and a recursive observation about methodology itself.

This doc names them in one place so a returning operator or external reader can read the method as itself, not only as residue distributed across other artifacts.

## Recursive System Roles

The method applies across recursive system roles, not a single fixed level.

- **Articulated system** — a discrete artifact or project whose structure is worth making explicit. [`apexSolarKiss/mazeASK`](https://github.com/apexSolarKiss/mazeASK) is the historical project-scale example: a concrete maze-game repo whose Model-A workflow pressure helped surface the need for a reusable control-surface pattern, later generalized in [`apexSolarKiss/control-surface`](https://github.com/apexSolarKiss/control-surface).
- **System-of-systems** — an operational system composed of interacting subsystems. A governed visual asset production pipeline can fit this role: brand inputs, product data, reference systems, generation surfaces, curation seams, governance records, and output assets operate together as one production system.
- **System-building system** — a system that produces, governs, templates, or instantiates other systems. [`apexSolarKiss/asset-pipeline-ASK`](https://github.com/apexSolarKiss/asset-pipeline-ASK) fits this role for governed visual asset production pipelines. [`apexSolarKiss/control-surface`](https://github.com/apexSolarKiss/control-surface) fits this role for AI-native execution workflows.

The method does not change shape across these roles. Ontology development, vocabulary deconstruction, architecture-attempt-before-prototype, pressure-surface prototypes, ceremony budget, evidence-trail integrity, self-superseding clauses, the swing, the rake, and the fresh-context critique cycle apply whether the work is an articulated system, a system-of-systems, or a system-building system.

The recursion is part of why the method is worth articulating as itself. This document is itself a structured artifact produced by the method it describes.

## Pre-Architecture Moves

What happens before any architectural commitment, often before any prototyping.

### Ontology development as primary work

Articulating what concepts exist and how they connect — the structured-definition-of-intent — is the durable architectural deliverable. The interface is a view on top of it; the prototype is a pressure test of it; the method's job is to produce the ontology cleanly.

This is distinct from data modeling or schema design. Data modeling answers "what fields does this record have?" Schema design answers "what tables exist and how are they related?" Ontology development answers a deeper question: "what categories of thing does this work treat as load-bearing? what relationships among them make the structure cohere? what would be lost if any single category collapsed?"

In the asset-pipeline-ASK worked example, the ontology work is the IA layered-content articulation: what kinds of information operate at brand-system, category / product-class, packet, slot, and other layers; how those layers inherit, override, and combine; what is shared upstream and what is specific downstream.

### Vocabulary / language deconstruction

Pressure-test the words you are using before committing them to schema or to architectural claims. Make sure terminology is doing the work you think it is. Surface where two words are being used as synonyms when they should not be. Surface where a single word is hiding distinctions that matter.

In asset-pipeline-ASK, the architecture-vocabulary-pass-v1 was this discipline in operation: five carrier-and-discretion distinctions (runtime curation vs upstream setup; prose vs structural representation; visual inputs vs prose fallback; scoped mode-independence; approximate layer count vs load-bearing inheritance) were surfaced before they could harden into structure, while there was still room to refine them.

### Architecture-attempt-before-prototype

Try to model the architecture against a concrete example before building anything. The failure mode this prevents: the prototype becomes the architecture by default, because the prototype is what got built and the architecture was never articulated.

Architecture-attempt is not the same as architecture-completion. The attempt is allowed to be partial, exit-criterion-bounded, and self-superseding. What matters is that the attempt happens upstream of the prototype, and that the prototype runs against the attempt rather than producing the architecture as residue.

### Attempt-model-before-plan

Try to model the work shape before planning execution. Sister to architecture-attempt-before-prototype, applied at the project-direction altitude rather than the schema altitude.

The principle prevents an analogous failure mode: the plan becomes the model by default, because the plan named tasks but never named the structural shape of the work the tasks were addressing.

### Refusal of premature doctrine / permission to be wrong

Do not lock posture or rules before evidence has earned them. Carry named limitations explicitly. Surface held questions rather than resolving them prematurely.

This is the discipline that allows the method itself to evolve. Self-superseding clauses on artifacts; named limitations carried explicitly; held questions surfaced rather than answered too early — these all preserve the method's ability to update when later swings produce evidence the earlier swing could not have produced.

## Disciplines During Execution

What constrains how the work is done once a swing has begun.

### Pressure-surface use of prototypes

Prototypes are pressure surfaces for studying the architecture. They are not the project's center. The architecture is the project; the prototype is the test rig.

This framing keeps the architecture in the position of being tested, refined, and articulated as itself. The prototype's outputs are evidence for or against architectural claims, not the architecture's substance.

### Smallest honest unit / right-altitude scope discipline

Match the unit of work to the level of the question. For implementation and repo hygiene, prefer the smallest honest unit (small bounded PRs are usually best). For conceptual architecture, prefer the largest tractable structural question. Refuse both bundling at the implementation altitude and ceremony at the architectural altitude.

The corollary: do not let "smallest unit" become a rule that prevents zooming out to the right scale. A series of small honest units at the wrong layer adds up to ceremony without architectural progress.

### Ceremony budget

Do not overspend on process where structure suffices. Workflow rules in `AGENTS.md` make reasoning inspectable across ASK, the executor, and any configured advisor while preserving one write authority; once the rules carry the discipline, the process ceremony that previously did the work becomes redundant. Removing redundant ceremony is part of the method. One concrete instance: do not require a reviewer-generated handoff memo after an authorized operator has already relayed an explicit decision with its qualifications and scope. When the relay already carries the complete decision, repackaging it into a return artifact adds no judgment, condition, or authorization — it is ceremony, not governance (see [`docs/source-of-intent.md`](source-of-intent.md) §Handoff necessity).

### Evidence-trail integrity

Each phase preserves what it produced for the next phase to build on. Do not retrofit evidence-chain artifacts. Let them age in place. New artifacts can refine forward without rewriting history.

The method's integrity at scale depends on this — without it, each new architectural claim either has to relitigate prior claims or quietly invalidates them.

### Aging-rate principle / source-of-truth split

Different surfaces age at different rates. State ages fast (lives in the repo). Rules age slow (live in `AGENTS.md`). Context ages slow (lives in the grounding note). Per-conversation tracking is ephemeral (lives in operator-side memory).

Each surface is sized to a single aging rate. Mixing aging rates within one surface produces a doc that ages at the rate of its fastest-aging contents — usually badly. Maintaining the aging-rate split is part of the method's surface discipline.

## Synthesis Disciplines

How the project moves between phases without losing what came before.

### Synthesis-attempt-against-concrete-example

A synthesis or architectural-pass should pressure the model against a concrete example, not become a recursive narration of earlier passes.

This discipline applies the architecture-attempt-before-prototype principle to synthesis artifacts: the synthesis is allowed to be partial, exit-criterion-bounded, and self-superseding, but it must engage with concrete material rather than circulating among prior abstractions.

### Proof-chain gravity well guard

No new conceptual artifact unless it changes the model, schema pressure, carrier boundary, or governance seam. Findings that do not change those things belong in concise execution records or in-thread, not in new conceptual artifacts.

This guards against the failure mode where every operational discrepancy or process amendment generates a durable artifact whether or not it changes anything load-bearing. The artifact economy stays proportional to actual architectural movement.

That rule is narrow, and the mechanism it guards against is general. Naming the mechanism is what tells a reader when the rule extends beyond the artifact economy and when it does not.

A project reaches **asymptotic saturation** when another internally generated cycle has little remaining capacity to reduce uncertainty about the external object under the current frame. Saturation is a legitimate plateau, not a failure — it is the condition the fresh-context critique cycle is naming when it detects that the current pressure surface has exhausted itself. It is not the same asymptote as the swing's: the swing approaches its limit while each stroke still produces evidence the other stroke could not, and the approach is the work. Saturation is the local exhaustion of that yield under the present frame.

**Asymptotic resonance** begins when, at that plateau, the system's own process, evidence, proof, review, correction, absorption, or closure outputs become the dominant forcing input for the next cycle. A **recursive-performance gravity well** forms when that self-forcing continues without materially new evidence, method, decision pressure, or differently situated error, so internal activity rises while externally meaningful movement approaches zero. Process, evidence, and proof gravity wells are operational species of the one mechanism; the species names locate where the recursive performance is occurring and should not harden into a required taxonomy.

Before opening another conceptual or assurance cycle, name the external object or changeable decision it can affect, the credible failure mode or uncertainty it can reduce, the genuinely new evidence, method, or differently situated pressure it introduces, the exact operative object set, and the terminal condition. If the next artifact exists mainly because the previous artifact now needs another proof, summary, absorption, verification, or closure — and no real authority, safety, recovery, lifecycle, or evidence gate requires that exact carrier — the cycle does not open. Stopping can be wrong too: a cycle still earns its opening when the conditions above are met and the work can materially change an external object or decision. The discipline is proportion between assurance activity and unresolved risk, not minimal activity.

Escape has two valid forms — accept the plateau and stop, or admit nonredundant exterior pressure: a real user, a domain authority, failed execution, contradictory evidence, a new consumer, a new substrate, changed source intent, or genuinely fresh reconstruction from durable truth. Exteriority is relative to the error class, not to the number of agents. A second surface given the same premises, context, and evaluative frame may still be endogenous, which is why the fresh-context critique cycle's load-bearing property is context reset rather than a change of interlocutor.

Dogfooding is productive when the system is applied to an externally anchored object and the result is allowed to falsify or change the system. It becomes a hall of mirrors when the system's own artifacts serve at once as the object, the evidence, the trigger, and the standard of success. The discriminator is not self-reference — this method is recursive by design — but whether something differently situated can still make the system wrong.

Exteriority does not guarantee durable evidentiary value. Where exterior pressure is mediated by an incomplete stand-in for the property that actually matters, repeated optimization against that stand-in can erode what the resulting evidence establishes by selecting for the gap between proxy and property. This is a different axis from error dependence: a differently situated reviewer can still rely on an incomplete proxy, while a correlated reviewer can still contribute evidence when it reaches an adequate external source, test, environment, or observation. Exposure does not automatically invalidate a source of pressure. It changes the burden — after the candidate-generating process has been repeatedly revised or selected against that source, reassess what the source still establishes rather than assuming its earlier evidentiary force persists.

The execution-protocol layer operationalizes this guard for verification and correction loops. [`control-surface`](https://github.com/apexSolarKiss/control-surface) scales evidentiary depth and blocking thresholds to reversibility, blast radius, cost of error, and decision relevance; requires a named failure mode before a discrepancy may block; separates the operative review set from preserve-only history; states the conditions under which a correction round may open, a convergence stop, and a re-anchor remedy; and obliges the executor to read the finished object end-to-end before handing it across a surface boundary. Those controls bound the loop. This section explains why the loop can become self-amplifying in the first place.

### Self-superseding clauses

Every meaningful artifact names what would supersede it. This holds the work in place without locking it. A reader can see what the artifact intends to remain authoritative for, and what would replace or absorb it under specified conditions.

### Source-of-intent guard

Fresh critique, synthesis, and handoff recaps may surface gaps between stated purpose and current evidence. Those gaps must not automatically become requests for the operator to reauthorize the purpose.

When the grounding note or repo-local premise already states the end, treat the gap as an architectural means problem: what carrier, trace, model attempt, pressure test, inheritance structure, or boundary correction is required to make the stated purpose real?

A held implementation question is not the same as a held purpose question. Do not promote unresolved means into an unresolved source-of-intent fork.

Before naming operator-required input, distinguish:

- source-of-intent premises already supplied
- unresolved architectural means
- sequencing choices among valid routes
- operator-side positioning choices
- evidence-depth assessments

The operator should be asked to decide only the latter categories when the durable sources do not already answer them. Where the premise is already supplied and the means are unresolved, the method should force an architecture attempt against the premise.

### Source-of-intent nudge

At local plateaus, after meaningful absorptions, or when the next move is unclear but the durable purpose may already be sufficient, ask the advisor surface what additional operator source of intent or direction is needed to continue developing the project toward its stated purpose.

The nudge is not the same as asking "what next?" It is a boundary-classification pass. The advisor should distinguish whether the project needs new source intent, a sequencing choice, a bounded architecture attempt, repo-local absorption or routing, external synthesis, or a fresh-context reset.

A good nudge can return "no new purpose-level source-of-intent is needed." That is a successful result. It means the durable sources already contain the premise, and the next move should be derived from the current architecture rather than routed back to the operator as a new decision.

A good nudge can also return a stop signal: the current closure is a real pause point and the next move should not auto-chain. That is also a successful result. It should route to absorption, external synthesis, or fresh-context critique depending on whether the current durable state merely needs sequencing, needs synthesis from current context, or needs independent reconstruction from repo plus grounding note.

This nudge operationalizes the source-of-intent guard. It reduces false stops, where the system asks for operator input even though the intent is already supplied, and false autonomy, where the system continues without noticing that a genuine source-of-intent premise is missing or changed.

The nudge is a lighter-weight control loop than the fresh-context critique cycle. Use it before invoking fresh external critique when the question is local sequencing, absorption, routing, or next-pressure choice. Nominate fresh-context critique when the nudge surfaces drift, stale durable context, unresolved purpose, or a need for independent reconstruction from repo plus grounding note.

The nudge ladder has three roles. The **default lightweight nudge** is a live reusable prompt in the protocol repo: [`control-surface/prompts/repo-nudge-prompt.md`](https://github.com/apexSolarKiss/control-surface/blob/main/prompts/repo-nudge-prompt.md) — a single-question nudge anchored against the grounding note. The two heavier roles — a **structured boundary-classification instrument** (the seven-outcome routing form) and an **externality-decision instrument** (for serious pause / routing decisions) — are non-default: they are not maintained as standing prompt files and are re-derived when a heavier routing pass is warranted. The protocol repo owns its own prompt inventory; this doc asserts the ladder's roles, not another repo's current file list.

Operationally, the minimal nudge is the default cycle prompt. The structured roles are heavier reset / routing instruments, not regular-cycle prompts. Fresh-context critique remains a distinct anti-drift mechanism: the nudge can nominate it, but ASK authorizes it. The critique cycle should not be used merely as a next-step finder when the nudge layer can classify the boundary.

### Fresh-context critique cycle

When ASK authorizes a fresh-context critique because the project's structure, posture, or direction needs re-examination beyond what a source-of-intent nudge can classify, start fresh advisor threads and give each only the durable context — the repo and the grounding note. Do not give them the working thread's accumulated explanations unless the task is to fold a prior critique. The load-bearing property is **context reset**: the critic is denied working-thread momentum and forced to reconstruct the project from durable truth. That reconstruction is what surfaces drift, ceremony, overclaimed architecture, stale navigation, weak naming, missing proof, or mismatched source-of-truth boundaries.

The cycle has three moves, each assigned to a distinct surface:

1. **Independent critique** — each critic thread reads durable truth and produces high-level concerns without seeing the other critique. Same prompt, same inputs, no shared thread momentum.
2. **Advisor-role synthesis** — a separate thread in the advisor surface folds both critiques into one analysis and produces an advisory plan, from outside execution momentum. The role is what matters; the model occupying it does not need to differ from the critique threads. The structural value is exteriority to the threads that produced the critiques.
3. **Bounded absorption** — the execution surface verifies repo state fresh, scopes the advisory plan into implementation work, and stops at exact scoped diff before any commit. Only corrections that survive synthesis and operator approval become repo work, grounding-note updates, or held threads.

The fresh-context critique cycle runs on its default prompt surfaces. The default initial prompt preserves open-ended critique behavior: high-level observations, concerns, doubts, and source-of-intent needs anchored in the grounding note. The default synthesis prompt preserves simple fold-and-plan behavior. The default execution prompt preserves the fuller-context handoff: independent critique plus folded advisory plan, with execution still stopping at exact scoped diff. Structured variants are a non-default *role*, not standing files: re-derive one at the critique-cycle altitude when explicit boundary classification, convergence/divergence synthesis, or stricter execution scoping is useful. This preserves the same distinction the nudge ladder established: lightweight prompts keep regular motion organic; structured instruments are heavier routing forms.

This pattern composes both adversarial collaboration and adversarial iteration: the independent critiques create multi-mind opposition in one moment (collaboration); the synthesis and absorption metabolize that opposition into the next cross-time swing of the project (iteration). Adversarial iteration uses adversarial collaboration as a pressure mechanism at the structural-review altitude.

This is distinct from Stage 2 PR review. Stage 2 is targeted advisor review of a pushed branch before merge, scoped to the change at hand. The fresh-context critique cycle is broader: repo- or phase-level critique of accumulated system state at structural-posture moments. Different cadences, different surfaces.

The cycle is not a standing ceremony and has no deterministic internal trigger. Major plateaus, accumulated proof-chain gravity, unstable naming or tier ownership, and a mismatch between local and global coherence are signals the system may nominate and ASK may weigh; none authorizes the cycle by itself. Routinizing the cycle as an automatic workflow step would re-introduce the ceremony class the method is calibrated against.

The cycle earns its keep not only by producing better critiques, but by identifying when the current pressure surface has saturated. A successful cycle may end by naming that the thread should stop, that the project needs exterior digestion, or that new operator intent is required before further work would be meaningful. Plateau detection is itself a successful outcome of the cycle, not a failure to produce one.

A third failure mode appears when the cycle works too well: correct moves chained too quickly become their own drift vector. The remedy is the self-diagnostic plateau signal — stop, preserve what landed, and re-enter through a fresh-context pass only when new intent or new pressure is available. The remedy is not more procedure; more procedure is the failure mode this guards against.

The cycle's reusable prompts live in [`control-surface/prompts/repo-critique-initial-prompt.md`](https://github.com/apexSolarKiss/control-surface/blob/main/prompts/repo-critique-initial-prompt.md), [`control-surface/prompts/repo-critique-synthesis-prompt.md`](https://github.com/apexSolarKiss/control-surface/blob/main/prompts/repo-critique-synthesis-prompt.md), and [`control-surface/prompts/repo-critique-execution-prompt.md`](https://github.com/apexSolarKiss/control-surface/blob/main/prompts/repo-critique-execution-prompt.md). The work happens in the durable backbone (repo + grounding note) and in the critics' independent reads. The operator does not direct what any critic should find; the artifacts speak. When the durable backbone is honest enough to serve as ground truth, the critique can be open-ended without losing focus.

## Cross-Phase Workflow Shape

How the project navigates its own evolution.

### The swing (adversarial iteration)

The pendulum motion between abstraction and execution. Each swing produces something the other cannot. Pure abstraction produces beautiful diagrams that the world refuses to populate. Pure implementation produces a working system whose underlying model is never articulated. The motion between them is the method.

The swing leaves something for the next swing to do, and leaves something the next swing should preserve. Naming what each swing does *not* undo is what keeps the pendulum honest. Otherwise each swing pretends the previous swing was wasted, and the project loses the cumulative evidence each direction produced.

The swing's shape is asymptotic. The architecture and the execution converge across each swing, approaching each other but never meeting. The work is the approach.

### The rake // recurrent order restoration

System-building work produces drift even when its individual changes are locally correct. New artifacts, exceptions, implementations, interpretations, consumers, and corrections enter different surfaces at different rates. Over time, the relations among source of intent, owners, carriers, live state, durable context, local differences, and public representations become less legible.

The **rake** names a recurrent restoration function within the method: the work of returning those relations to legible differentiated order. It reconstructs governing relations from their owners, surfaces material drift, distinguishes error from legitimate local difference, routes correction to the proper surface, reconciles affected carriers and projections, and records the resulting raked state.

The rake is not a master frame for the method. It does not subordinate every method mechanism, and no single rhythm, metaphor, or control layer exhausts the method. A mechanism may serve work other than raking; a rake may compose several mechanisms.

The image is a Zen garden: the raked lines are valuable because they are ordered. In the method, a raked state likewise has more order, less drift, clearer boundaries, and better alignment. Ordinary activity and continued change soften those lines; that loss is not part of their value, but the suffered degradation recurrent raking mitigates.

Raking is a continual system function implemented through mechanisms operating at different cadences:

1. **Adversarial collaboration and critique** are the quotidian rake. Differently situated reasoning, execution, review, and adjudication continually pressure local work before one surface's account silently becomes the whole system's account.
2. **Fresh-context critique** is a lower-cadence rake of accumulated framing, explanatory momentum, and self-description. It reconstructs from durable owners rather than inheriting the reasoning by which the current state was produced. Its concrete instantiation mechanics live in [`control-surface/docs/critique-protocol.md`](https://github.com/apexSolarKiss/control-surface/blob/main/docs/critique-protocol.md).
3. **The pendulum, or adversarial iteration,** is a lower-cadence rake across phases between abstraction and execution. Each direction exposes and corrects the imbalance accumulated by the other while preserving the evidence the prior swing produced.
4. **Compression, with bilateral calibration where the compression becomes a durable system-level self-map,** is a lower-cadence rake of the relation between distributed truth and its high-level representation. Compression is established practice: it makes a distributed system stateable at an appropriate altitude and leaves a standing artifact that can orient later work. That standing artifact is useful and dangerous for the same reason — it can itself drift, or be mistaken for the authority it depicts. The method therefore requires bilateral calibration for a durable system-level compression: test what the projection omits or distorts, what it asserts without owner support, where owners conflict, and whether the system's applicable authority, trust, disclosure, and public/private boundaries have been represented correctly. This is a normative requirement, not a claim that every existing compression has undergone it or that system-scale bilateral calibration has already been demonstrated. Named owners establish current fact, and ASK adjudicates what should change.

Fresh-context critique and the pendulum are partly orthogonal. Fresh reconstruction pressures the system's inherited frame and self-description; adversarial iteration pressures abstraction against execution across time. Compression and its required bilateral calibration act on another axis again: the relation between distributed truth and its high-level representation. These mechanisms may compose, but none is a required stage of another, and adversarial collaboration may operate within any of them.

Other rake strokes include source-of-intent guards and nudges; owner, carrier, and consumer reconciliation; ledger and projection reconciliation; absorption; and closure. The list names different surfaces on which order can be restored. It is not a mandatory sequence and does not require one synchronized ecology-wide cycle.

Convening a deliberate rake cycle is externally triggered relative to the process it audits. The ecology may nominate such a cycle through a nudge, milestone, felt incoherence, accumulated change, or another signal. Those signals are evidence, not triggers. Because the state supplying them may itself be drifted, no deterministic internal threshold authorizes the cycle. ASK decides whether and when to initiate it.

ASK may initiate a deliberate rake cycle without an internal nomination, and may defer one despite strong signals. Surface stabilization, opportunity, operator bandwidth, and critic bandwidth constrain timing; they do not determine legitimacy. More frequent raking would generally be desirable if those constraints disappeared.

A raked-state claim is dated, banded, owner-relative, and explicit about what remained outside the pass. It records restored order, not permanent stability. Future-rake signals may be recorded for ASK's judgment, but none automatically triggers another cycle.

A deliberate rake cycle remains subject to the proof-chain gravity well guard after it begins. Raking should improve an actual owner, relation, decision, boundary, or usable system state. Audit activity whose primary object becomes the preceding audit, without improving the system itself, is recursive performance rather than restoration. This constrains ceremony inside a rake; it does not condition ASK's authority to initiate one.

Reflective lineage: [*The Drift Audit*](https://atomicspacekitten.substack.com/p/the-drift-audit) explains why the audited system may nominate but cannot own the final anti-drift trigger. [*The Auditor Is Inside the Trade*](https://atomicspacekitten.substack.com/p/the-auditor-is-inside-the-trade) explains why increasing internal fluency and coherence do not establish that the standard itself has not drifted.

### Threshold pauses at architectural closures

Major junctures earn pauses. Phase 1 closure earns a pause. Sequencing forks earn pauses. Auto-chaining is the failure mode to avoid. Closure is structural, not merely the absence of more work — and the structural closure deserves time to absorb before the next move opens.

### Absorption reviews at major thresholds

In-thread reflective pass at major junctures. The output is sometimes a clean assessment, sometimes a small repo correction, sometimes a memory entry, sometimes nothing. The discipline is that the reflection happens before the next work begins.

Absorption reviews are explicitly not always artifact-producing. The right output of a reflective pass is often "the existing state is honest; proceed."

### Direction-check questions at sequencing forks

"What does milestone-X actually need next?" is sharper than "what is next?" Asked at moments where the next move could be one of several. The question shapes the sequencing rather than the available options.

## Surface and Voice Discipline

The method maintains discipline about which voice belongs in which surface. Different artifact types (workflow rules, methodology articulation, project documentation, grounding notes, external writing) have different audiences and different appropriate voices.

Repo-local prose (this doc, `AGENTS.md`, project documentation) stays in systemic / architectural voice. ASK-positioning voice belongs in operator-side grounding notes and external writing. The full articulation of which vocabulary belongs where lives operator-side; this document references the principle structurally without carrying its content.

The principle is recursive: the rule about voice externality stays operator-side. Naming the rule's specifics inside repo prose would itself name the framing the rule keeps out. This document carries the structural reference (voice categories as method elements) and points to operator-side surfaces for the full articulation.

## Relation to Adversarial Collaboration

Adversarial collaboration is the within-session multi-mind execution-protocol layer. Adversarial iteration is the across-time single-mind methodology motion this document is about. They are different patterns at different altitudes operating on different timescales. Both are load-bearing in the working method.

- **Adversarial collaboration** — multi-mind, one moment. Workflow rules live in `control-surface/AGENTS.md`; advisor posture and cadence context are recorded in `control-surface`'s grounding note. Per-session, per-PR cadence with two review windows.
- **Adversarial iteration** — single-mind, across time. Lives here. Cross-phase swing motion.

Both preserve productive opposition, but they do so through different structures. Adversarial collaboration separates roles across agents in one moment; adversarial iteration separates pressures across phases in time. Adversarial collaboration produces the within-session friction that surfaces architectural disagreements while they are still resolvable; adversarial iteration produces the across-phase motion that lets each phase's evidence pressure the next phase's claims.

## Methodology as First-Class Subject

The recursive observation: the method itself is part of the project's articulated value. The asset-pipeline-ASK grounding note frames the project as more than a pipeline — *"a prototype system for designing such systems."* The meta-pattern (the moves articulated above) is what makes the project's approach reusable beyond its single domain.

This document is the first move toward making the method legible as itself. Before this document, the method lived diffused across `AGENTS.md` rules, milestone notes, the corrective-principles section of milestone-7, and the article line. A returning operator or external reader could reconstruct the architecture-of-furniture-image-production from the docs much more readily than the architecture-of-arriving-at-such-architectures. If the meta-pattern is load-bearing for how the project is understood beyond its single domain, it should be legible as itself, not only as residue.

The recursive shape: this document applies the method to itself. It is an architecture-attempt-before-prototype for the methodology layer. It is a synthesis-attempt-against-concrete-example (the concrete example being asset-pipeline-ASK). It carries a self-superseding clause. The method's own articulation respects the method's own discipline.

## Worked Example: asset-pipeline-ASK

The method is visible in the project's history.

The first swing was pure ontology — abstract architecture work. Then a directional reversal toward implementation produced the v1 prototype: the SKU-driven Furniture v1 base operationalized end-to-end, three other modes probed at probe-depth, the architecture surviving cross-mode pressure without structural mutation.

The prototype phase produced its plateau (milestone-7) and surfaced corrective principles: architecture-attempt-before-prototype, vocabulary deconstruction before architectural commitment, synthesis-attempt-against-concrete-example, proof-chain gravity well guard. These are the moves articulated above, surfaced through the project's actual work rather than imposed in advance.

The second swing moved back toward abstraction through the IA layered-content redirection: worked-example mode sketches, cross-mode synthesis, and later architecture attempts that pressure layered references, constraints, discretion, and inheritance. Later swings may return to demonstration or operational proof. The method cares about the pattern, not the worked example's current phase state: abstraction and execution keep pressuring each other; the asymptote does not arrive.

The method is not separate from this history; it is what makes the history coherent.

## Self-Superseding Clause

This document is the method's primary articulation in [`apexSolarKiss/method-ASK`](../README.md). It should be superseded by:

- the splitting-out of any method element above into its own first-class doc as the substrate accumulates — `docs/intent-artifacts.md`, `docs/relative-externality.md`, `docs/voice-surface-boundary.md`, `docs/source-of-truth-and-aging-rate.md`, `docs/source-of-intent.md`, and others as they land
- subsequent articulations of the method that earn deeper coverage of any single element above
- whatever later synthesis absorbs the methodology layer alongside the project's own evolution

The articulation is not finished. Each method element above could earn its own deeper treatment. Some elements may dissolve as later work shows they were instances of more general principles; others may earn first-class status as their own articulated patterns.

## Anchor Documents

### Article cluster (the methodology articulated externally)

- [*Beyond Vibe Coding: Constraining LLMs*](https://atomicspacekitten.substack.com/p/beyond-vibe-coding-constraining-llms) — the prior argument for constrained LLMs and explicit rules; substrate for the discipline this method runs on
- [*From Normative Structure to Execution Proof*](https://atomicspacekitten.substack.com/p/from-normative-structure-to-execution) — the swing toward implementation; "architecture should not rush to implementation, but it should eventually submit itself to it"
- [*Lessons from the First Prototype Phase*](https://atomicspacekitten.substack.com/p/lessons-from-the-first-prototype) — the structural retrospective written when the split-execution model was retired; ~50x ceremony reduction; why the protocol's compensating rules exist
- [*Adversarial Collaboration*](https://atomicspacekitten.substack.com/p/adversarial-collaboration) — the within-session multi-mind layer; complement to this document at the execution-protocol altitude
- [*From Execution Proof Back to Normative Structure*](https://atomicspacekitten.substack.com/p/from-execution-proof-back-to-normative) — the swing back to abstraction; introduces *adversarial iteration* alongside adversarial collaboration
- [*Method // Designing Systems That Build Systems*](https://atomicspacekitten.substack.com/p/method-designing-systems-that-build) — the external articulation of this document; names the category the method targets (system-building systems) and the productive Russellian shape of the method's self-membership
- [*Machine Builds Machine*](https://atomicspacekitten.substack.com/p/machine-builds-machine) — the recursive limit of AI-native work; the plateau signal as a two-part discipline (when to ask for new operator intent + when not to ask); Russell + Hegel as bracketing anchors
- [*The Nudge Layer*](https://atomicspacekitten.substack.com/p/the-nudge-layer) — the small control layer between normal execution and fresh-context critique; a boundary-classification pass that simulates the external-intent boundary check; reduces false stops and false autonomy; the stack-as-intelligence frame applied at workflow scale
- [*The Drift Audit*](https://atomicspacekitten.substack.com/p/the-drift-audit) — the methodological refinement after the nudge layer; once the nudge ladder handles next-direction discovery, fresh-context critique returns to its proper role as anti-drift inspection; load-bearing asymmetry that anti-drift critique cannot be deterministically triggered from inside the system it inspects (system nominates; operator authorizes); the audit earns its value from externality; milestones are evidence, not triggers; names the four-layer ladder (minimal / structured / externality-decision / fresh-context critique) and the principle that the stack becomes smarter when each layer understands the size of its own job
- [*From Conversation to Control Surface*](https://atomicspacekitten.substack.com/p/from-conversation-to-control-surface) — the method applied to project inception from messy AI-mediated exploration (`urban-observatory`); recovered intent → validated constraint → repo as the load-bearing sequence; source-of-intent recovery as architecture; reconciliation of overlapping conversation captures before synthesis; validation loops that prevent the model from authoring intent; the grounding note as external memory; catastrophic forgetting and other structural LLM failure modes (weak inhibitory control, weak cognitive flexibility, pattern completion, dispersal of focus) reframed as the class the control-surface method is calibrated against; the repo is not the first artifact
- [*The Rule the Repo Could Not Contain*](https://atomicspacekitten.substack.com/p/the-rule-the-repo-could-not-contain) — the recursive externality topology across the cluster; the repo can name the structural category but cannot carry the protected payload; externality as a relation, not a property; two axes — surface boundary (internal/external) and normative direction (upstream / downstream / reflective); ex-repo is not ex-system; meta-to-downstream absorption (`urban-observatory` post-bootstrap trim pass as worked instance); the invariant across surfaces (repo-readable / grounding notes / operator-side memory / articles); the methodology-layer altitude distinct from the execution-protocol layer; the article is itself the principle in action, positioned as a link from `control-surface` rather than an absorption into it
- [*Three Agents Got Into an Argument // The Repo Won*](https://atomicspacekitten.substack.com/p/three-agents-got-into-an-argument) — the method stress-tested on a multi-advisor disagreement about current file contents; distinguishes three surface-specific failure modes — confident causal confabulation, confident structural confabulation, and narrow surface authority — none well-described by the word *hallucination*; connects to the prior reasoning-failures piece; names the thematic-tidiness tell as heuristic (a diagnosis too clean is doing rhetorical work, not retrieval work); restates the operating rule that splits chat-side advisors from the artifact-owning surface; the architecture works because the principle is structural, not rhetorical — the artifact-owning surface gets the final read; positioned as a link from `control-surface` rather than an absorption into it
- [*The Handoff Is Not the Instruction*](https://atomicspacekitten.substack.com/p/the-handoff-is-not-the-instruction) — the methodology-layer guardrail when expertise enters an AI-native workflow; well-formed artifacts (memos, sketches, expert handoffs) structurally tend to be read as current direction even when they represent exploration, future roadmap, or premature architecture; a five-category taxonomy for incoming contributions classified by operational status — valid source-of-intent / current-stage information-architecture or method refinement / future roadmap idea / advisor scratch or exploration / premature implementation architecture; the operating rule that only the first two categories reshape current control-surface work by default, with later categories stored for the stage that will need them rather than promoted into method on arrival; preserves repeatability of the method as the load-bearing constraint; positioned as a link from `control-surface` rather than an absorption into it
- [*The Method Learns from Exteriority*](https://atomicspacekitten.substack.com/p/the-method-learns-from-exteriority) — the method's leave-and-return stroke as method-series narrative; a system cannot see itself from inside its own frame, so it builds an external surface to reflect against and returns to re-represent what it made; re-representation (the diagram that refuses to interpolate) exposes the seam the inside view missed — the intent ↔ discretion relation; the pause is the mechanism, not lost time; the system surfaces the recursion but only the human decides it is significant; narrative companion to the bounded-generativity primitive (`docs/bounded-generativity.md`)

### Repo anchors

- [`AGENTS.md`](../AGENTS.md) — workflow rules for this methodology repo
- [`docs/bounded-generativity.md`](bounded-generativity.md) — the **bounded generativity** method primitive (grammar → bounded variance → selection → governed artifact); the mechanized form of *order from chaos*; three functions on the Montesquieu spine; discretion brackets generation
- [`docs/portable-definition-layer.md`](portable-definition-layer.md) — the **portable definition layer** method primitive (intent / constraints / discretion / references / governance as the durable object preserved across substrates); the **durability axis**, orthogonal complementary peer to bounded generativity; AP implemented + UO conceptual interpretive instance — lands the primitive, not an implementation protocol
- [`docs/seed-mediated-generated-interface.md`](seed-mediated-generated-interface.md) — the **seed-mediated generated interface** pattern (a seed — repo / packet / prompt — + delivery wrapper supplies the material and behavior for an AI runtime to render the interface in conversation); **carrier** (repo- / packet- / prompt-mediated) and **runtime context** (self-contained opaque / connected authorized / author-controlled null) are orthogonal axes; setup UX is method-bearing; **operator distance** sets the encoding budget; observed across packet + prompt carriers (the repo-mediated *delivered* form is the forward AP/UO launch shape, not yet instantiated); the external-review packet subtype stays a held candidate. Repo-mediated GI is one carrier species of this genus
- [`apexSolarKiss/control-surface`](https://github.com/apexSolarKiss/control-surface) — the execution-protocol repo that operationalizes the method; carries `AGENTS.md` rules, templates, prompts, and project-instantiation workflow
- [`apexSolarKiss/control-surface/docs/architecture.md`](https://github.com/apexSolarKiss/control-surface/blob/main/docs/architecture.md) — the execution-protocol repo's role-model architecture
- [`apexSolarKiss/asset-pipeline-ASK`](https://github.com/apexSolarKiss/asset-pipeline-ASK) — the mature worked example the method has been pressure-tested against
- [`apexSolarKiss/mazeASK`](https://github.com/apexSolarKiss/mazeASK) — separate dormant historical origin case for the retired split-execution generation; not a current operating-model example; if resumed, it migrates to the current model
