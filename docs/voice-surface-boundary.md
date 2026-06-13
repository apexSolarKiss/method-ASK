# Voice Surface Boundary

This doctrine governs the relation between voice, payload, authority, and surface. Prose style, the specific vocabulary it carries, the authority it asserts, and the audience it addresses must all match the surface the prose lives on. A surface that carries the wrong voice or the wrong payload — even when the underlying point is correct — fails operationally: it leaks what should stay operator-side, or it sanitizes away what the work needs to name.

`method-ASK_grounding-note.md` v2 names the rule/payload distinction as a foundational premise and the four-layer protection pattern as its operational expression. `docs/relative-externality.md` provides the surface topology this doctrine operates against. `docs/source-of-truth-and-aging-rate.md` provides the authority-and-cadence framing. `docs/absorption-discipline.md` provides the movement rule for material that crosses surfaces. This doc carries the voice/payload/surface composition itself.

## Definition

The **voice-surface boundary** is the rule that prose style, payload, authority, and audience must match the surface carrying them.

A method repo can carry:

- structural categories
- rules
- cadences
- authority boundaries
- doctrine
- method-altitude examples

A method repo cannot carry:

- protected vocabulary payload
- private or person-specific rationale
- sales / positioning language
- project-specific translation tables
- private reviewer chronology
- stakeholder-specific framing unless role-typed and structurally necessary

The boundary cuts two ways. Repo-readable prose that includes protected payload leaks material that belongs operator-side. Repo-readable prose that strips out legitimate structural or domain vocabulary because it sounds positioning-flavored elsewhere loses the precision the work depends on. The rule is not "remove everything that could be sensitive"; the rule is "match the prose to the surface, on both axes."

## Rule / payload doctrine

The core distinction:

- **Rule** is the structural category, method principle, authority boundary, or operational discipline. Rules are repo-readable; they generalize.
- **Payload** is the specific vocabulary, private context, strategic rationale, project-specific positioning, or audience-sensitive content the rule operates over. Payloads are surface-specific; they do not generalize.

Core formulation:

- **The method can name the category.**
- **The method cannot carry the payload.**

A method doc can say *"ASK-positioning voice belongs operator-side."* It cannot include the full positioning vocabulary, the strategic rationale, or the audience-segmented translation table. Naming the category is method-relevant prose; carrying the payload would import the framing the rule is designed to keep out.

The asymmetry is intentional. The rule is upstream-portable across projects; the payload is project-specific and often audience-sensitive. Conflating them either bloats public repos with operator-side material or hollows out repos that need to name structural categories precisely.

## Surface-specific voice roles

Each surface has a job, an audience, and an allowed payload class. The seven voice/surface roles in current operation:

- **Repo-local systemic voice.** Job: describe structure, mechanism, rules, doctrine, method-altitude examples. Audience: anyone reading the repo (executor, advisor, external reader, future operator). Allowed payload: structural categories, rule articulations, method-level observations, generalizable patterns. Forbidden: protected vocabulary, project-specific positioning, private rationale.
- **Grounding-note source-of-intent / external context voice.** Job: carry slow-aging source-of-intent, durable role boundaries, foundational premises, audience framing. Audience: the active control surface and any advisor working on the project. Allowed payload: source-of-intent, project audience framing, positioning context, durable loose threads. Forbidden: fast-aging event chronology, current-stage state tracking.
- **Operator memory / per-session reminder voice.** Job: carry ephemeral session-state, workflow-discipline reminders, per-conversation tracking. Audience: the operator session-to-session. Allowed payload: short reminders, references to durable surfaces, project-pointer entries. Forbidden: prose meant for external audiences, content that should age slowly.
- **Scratch / event-record voice.** Job: capture event chronology, working memory, post-event recaps, in-flight artifacts. Audience: the operator, sometimes a future advisor working from substrate. Allowed payload: named events, dated state, working drafts, chronologies. Forbidden: doctrine claims dressed up as state records.
- **Article / reflective voice.** Job: reflect on the method at its own pace; articulate principles in essay form. Audience: external readers, the operator's future self, the article-line audience. Allowed payload: aphoristic articulation, narrative framing, illustrative concrete examples that have already been generalized. Forbidden: project-state claims, current operational instructions.
- **Public design-system / artifact voice.** Job: carry shared visual language, design tokens, asset references, project-specific design discipline. Audience: child projects inheriting design substrate, external readers of the design system. Allowed payload: tokens, gradients, type choices, named family colors, protected payload designed for verbatim rendering (e.g., family taglines marked as protected). Forbidden: project-specific identity payloads outside the design family's intended audience.
- **Advisor / critique voice.** Job: surface drift, propose absorption candidates, validate against durable substrate, return classification verdicts. Audience: the operator and the execution surface receiving the relay. Allowed payload: critique observations, structural classifications, proposed routing decisions. Forbidden: presumption of repo-write authority; chat-state assertions that override repo-state.

Each role has a different aging rate, audience, and payload class. Voice that fits one role usually does not fit another; mixing them produces surfaces that age badly, leak inappropriately, or sanitize away what they need.

## Four-layer protection pattern

The four-layer pattern that operationalizes the rule/payload doctrine, named at doctrine altitude:

1. **Doctrine.** The principle and the recursive constraint live in grounding notes and method docs (this doc, the grounding note's §Voice Externality, the source-of-intent and absorption-discipline docs). Doctrine is propagatable through inheritance across the family.
2. **Operational protections.** Per-project operator-side memory carries the over-sanitization failure-mode warnings, project-specific protected-vocabulary lists, domain-vocabulary protection lists, audience-segment translation tables, and other project-tailored protected payload. These materials are project-domain-specific and require tailoring at instantiation time; they cannot live in any method-altitude or repo-readable surface.
3. **Mechanical safety net.** An operator-side hook, config, or scan (user-global or per-project; never in any project artifact) that catches high-precision protected tokens and blocks commits or surfaces warnings on match. The hook's contents are positioning-domain knowledge and stay operator-side; only its discipline (manual or automated scan at exact-scoped-diff time) is method-readable.
4. **Discipline.** Repo-local workflow rules in `AGENTS.md` or templates can name the manual scan step as a structural action at exact-scoped-diff or review time. The rule names the scan discipline; it does not carry the token list.

The method can name the four layers as a pattern. The method cannot carry the contents of Layers 2 or 3. The structural-category-vs-vocabulary distinction applies recursively: the doctrine names the categories (Layers 1–4); the protected vocabulary that lives inside Layers 2 and 3 stays operator-side.

The over-sanitization failure mode — an executor removing legitimate domain vocabulary because it sounds positioning-flavored in another context — is guarded by Layer 2 specifically. Doctrine alone does not protect against it: doctrine tells the executor what to avoid; operational protections tell the executor what *not* to over-correct away from. Both layers are required.

## Role-typed naming

When downstream-project relations are method-relevant, the public method repo carries the **role-typed** category, not loose personal shorthand. Roles available in the current method:

- architect / operator
- domain authority
- reviewer
- advisor
- executor
- stakeholder
- child project
- upstream source
- downstream surface

A specific role-typed pairing the method has established: **architect / operator ↔ domain authority** — when a project's intent loop involves a domain-expert role distinct from the architect/operator, the relation is named structurally, not by personal shorthand. The role label carries the structural information the doctrine needs; the personal name does not.

Names of individuals may appear in repo prose only when the structural role relation requires the individual as witness — and even then, the role label is named first and the individual is named once as the structural witness. The audience-shorthand form ("X-facing") is avoided because it imports stakeholder framing without encoding the actual relation.

The convention guards against two errors at once:

- Under-naming (treating relevant role relations as private and stripping them entirely) loses structural information the doctrine needs.
- Over-naming (using personal shorthand because the role feels too abstract) imports private stakeholder framing into doctrine that should stay structural.

The remedy is role-typed naming with optional structural-witness usage of individual names — not categorical removal, and not personal shorthand.

## Boundary with relative externality

`docs/relative-externality.md` carries the surface-topology and direction-of-authority doctrine. This doc composes with it on the voice/payload axis specifically:

- Voice payload can be **external to the repo by surface boundary, internal to the project system by relative-externality framing.** Ex-repo is not ex-system. The repo points to operator-side authority without absorbing the payload.
- The two-axis model applies: protected vocabulary lives external-to-repo, upstream-to-the-rule-that-protects-it (the rule depends on the existence of the protected payload, but the rule does not encode the payload).
- A surface can be external but authoritative for its payload class: operator-side memory is external to repos, but authoritative for project-specific protected-vocabulary lists. The repo defers to that authority for the payload; the repo carries the rule that defers.

The two doctrines compose: relative externality names where the payload lives and which direction authority flows; voice-surface boundary names which prose style and which payload class fit the surface.

## Boundary with source-of-truth and aging rate

`docs/source-of-truth-and-aging-rate.md` carries the surface-authority and aging-rate doctrine. This doc composes with it on the voice/payload aging axis specifically:

- Token lists, translation tables, reviewer chronology, and current-context payload age at different rates than doctrine. Repo prose carrying fast-aging payload becomes stale faster than the surface is designed to refresh.
- Voice / payload material often belongs operator-side because the payload is project-specific (the audience-segment translation table for one project does not apply to another) and audience-sensitive (vocabulary that's clarifying to one audience is positioning-flavored to another).
- Grounding notes can carry durable voice principles (slow-aging source-of-intent); they cannot carry fast event chronology (which routes to scratch per the layer-classification gate in `docs/source-of-intent.md`).
- Repo prose must not become stale by carrying fast-aging or private payload. The aging-rate match check is a voice-surface boundary check.

The two doctrines compose: source-of-truth and aging-rate names which surface owns which claim at which cadence; voice-surface boundary names which prose style and which payload class match each surface's aging cadence.

## Boundary with absorption discipline

`docs/absorption-discipline.md` carries the movement-between-surfaces routing rule. This doc composes with it on what is and is not allowed to move:

- Not every useful voice observation gets absorbed. A protected-vocabulary observation that helped a specific project stays project-side; the structural rule it informs may earn method-altitude treatment once pressure-tested.
- n=1 role/payload observations stay observation-level. A single project's protected-vocabulary surfacing does not justify a method-altitude protected-vocabulary doctrine; it justifies an operator-side protection in that project.
- Project-specific protected vocabulary stays project / operator-side regardless of how generalizable the rule that protects it becomes. The rule moves; the vocabulary stays.
- General structural rules can move to method doctrine once earned. The four-layer pattern itself moved this way: it was first articulated in a project's grounding-note voice-externality section, then earned method-altitude treatment here.
- Event chronology stays scratch. A reviewer-event narration that informed a doctrinal refinement stays in scratch; the refinement itself moves to doctrine without the narrative.

The two doctrines compose: absorption discipline names when material moves; voice-surface boundary names what category of material is allowed to move (rules yes; payload no) and what surface it can land on (rule moves to doctrine; payload stays operator-side).

## Worked pressure surfaces

Method altitude only. Domain detail lives in project repos and project examples.

- **[`asset-pipeline-ASK`](https://github.com/apexSolarKiss/asset-pipeline-ASK)** surfaced protected-vocabulary, positioning-payload, and over-sanitization pressure. Protected positioning vocabulary that had legitimate domain use within the project's IA layered-content articulation had to be distinguished from positioning-payload-as-payload — same surface word, different semantic class. The four-layer pattern was originally articulated against this pressure: doctrine names the category, operational protections carry the project-specific token list, mechanical safety net catches commits, discipline names the scan step.
- **[`urban-observatory`](https://github.com/apexSolarKiss/urban-observatory)** surfaced role-typed naming and domain-authority handoff classification pressure. The project's intent loop involves a domain-expert role distinct from the architect/operator, requiring the dual-axis role relation to be named structurally in any repo prose discussing the project. The role-typed convention was articulated against this pressure: name the role (domain authority), not the audience shorthand (X-facing).
- **[`design-system-ASK`](https://github.com/apexSolarKiss/design-system-ASK)** surfaced protected-payload handling and project-voice-overrides-personal-voice pressure. The family tagline is Tier 2 protected payload — inheritable across family surfaces, rendered verbatim wherever it appears, exempt from prose voice normalization. The design-system repo's own voice (calm, declarative, sentence-case) overrides the personal terminalcore default that applies elsewhere in the family. Both are voice-surface-boundary instances: protected payload preserved verbatim regardless of surface; project-defined voice overriding inherited fallback voice on its own surfaces.

## Failure modes

Voice-surface boundary fails in two opposing directions. The doctrine must guard both.

**Leak failures** (protected material crosses outward when it shouldn't):

- **Putting private payload in public repo prose.** Protected vocabulary, strategic positioning, audience-segment translation tables embedded in repo-readable surfaces because the surrounding rule prose "needed an example."
- **Turning positioning language into method doctrine.** Project-specific positioning rationale absorbed into method-altitude doctrine as if generalizable. The rule should generalize; the positioning should not.
- **Treating article voice as repo voice.** Aphoristic article phrasing imported into doctrine docs, which then read as reflection rather than rule.
- **Treating grounding-note voice as README voice.** Source-of-intent or positioning context imported into repo-readable surfaces, which then carry framing the repo was designed to keep out.
- **Embedding operator-side token lists in repo-local rules.** A workflow rule that's supposed to name a scan discipline accidentally includes the token list the scan uses. The discipline moves to the repo; the token list should not have.
- **Allowing generated summaries to rewrite voice boundaries.** A chat-side summary "improves" repo prose by elaborating with operator-side context, leaking payload into the repo through the summary.

**Over-sanitize failures** (legitimate material gets stripped when it shouldn't):

- **Over-sanitizing legitimate domain vocabulary.** An executor removes domain terms that sound positioning-flavored in another context but are load-bearing in this one. The work loses precision the project depends on.
- **Removing structurally necessary role references because they look personal.** A role relation that requires the individual as structural witness gets stripped to a generic placeholder; the relation becomes uninterpretable.
- **Using personal shorthand instead of role-typed relation.** The inverse of the prior failure: personal names appear without the structural role being named, importing private framing instead of the structural relation. (Belongs to both lists — leak failure on the personal-shorthand side; under-precision failure on the role-typing side.)

The shared cause across both directions is single-axis evaluation: evaluating prose only against leak risk produces over-sanitization; evaluating only against precision produces leak. Both checks must run in parallel.

## Practical rule

Before writing or revising any repo prose, ask in order:

- **What surface is this prose entering?** Identify the surface explicitly. Each surface has different allowed-payload classes.
- **Who is the reader?** Executor, advisor, external reader, child-project inheritor, operator's future self. The audience constrains the voice.
- **What claim class does it carry?** Rule, structural category, doctrine, method-altitude example, project-specific vocabulary, reviewer chronology, positioning. Per `docs/source-of-truth-and-aging-rate.md`, claim class determines surface ownership.
- **Is this a rule or a payload?** The core rule/payload check. Rules belong in repo prose; payloads stay on their authoritative surface.
- **If it names a person, is the name structurally necessary or should it be role-typed?** Default to role-typed. Names appear only when the role relation requires the individual as structural witness.
- **If it names vocabulary, is it category-level or protected token-level?** Categories ("positioning vocabulary," "audience-segment translation table") are repo-readable. Specific tokens are not.
- **What would leak if this were public?** The leak-failure check.
- **What would become unusable if over-sanitized?** The over-sanitize-failure check. Both checks must pass; either alone is insufficient.
- **What surface should carry the payload instead?** If the prose has payload-class material, name the operator-side surface that owns it. The repo prose references the authority; the payload stays on its surface.

The first three questions establish surface fit. Questions 4–6 distinguish rule from payload and check role-typing precision. Questions 7–9 run the dual-axis evaluation (leak + over-sanitize) and identify the correct payload-bearing surface. All nine are operational; none requires deciding what voice "really is."

## Self-superseding clause

This doctrine should be superseded by:

- a future `docs/protected-vocabulary.md` if the operational protections (Layer 2 of the four-layer pattern) earn structured method-altitude treatment without leaking the payload they protect — the doc would name the operational-protection pattern at higher resolution; the protected vocabulary itself would still live operator-side
- a future `docs/role-typed-naming.md` if the role-typed convention earns a focused home as ASK-family child projects produce more cases of role relations needing structural-witness naming
- compression into `docs/relative-externality.md` if the voice-payload-surface composition folds cleanly into the relative-externality topology and this doc's content becomes redundant under that frame
- partial compression into `docs/source-of-truth-and-aging-rate.md` if the aging-rate pieces of this doctrine (fast-aging payload not belonging on slow surfaces) absorb into that doc's failure-mode treatment
- a formal voice/payload taxonomy if multiple ASK-family projects produce enough leak / over-sanitize cases to justify a structured matrix of voice classes × surface classes × payload classes

The doctrine is not finished. The four-layer pattern is the current best operationalization; the seven voice/surface roles are the current best snapshot of the surface landscape. As new surfaces emerge (new article-line forms, new operator-side patterns, new child-project voice requirements) the role list will refine. The dual-axis evaluation (leak + over-sanitize) is more stable than the specific role list; the roles are substrate, the dual-axis discipline is doctrine.

Anchor reading lives in [`docs/articles.md`](articles.md). The articles most directly substrating this doctrine are *The Rule the Repo Could Not Contain* (the rule/payload doctrine; externality as a relation; the recursive constraint that the methodology repo embodies the rule it articulates), *The Handoff Is Not the Instruction* (the form-does-not-confer-authority discipline; well-formed payload artifacts that look like instructions; the classification step before reshaping current work), and *Three Agents Got Into an Argument // The Repo Won* (chat-side fluency vs artifact-owning authority; the surface-specific failure modes — confident causal confabulation, confident structural confabulation, narrow surface authority — that drive the voice/surface composition rules).
