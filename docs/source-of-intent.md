# Source of Intent

This doctrine governs how the method handles purpose: where it originates, how it enters the system, how it is preserved across surfaces, how it is distinguished from look-alikes, and what discipline keeps the operator from being asked to reauthorize what is already settled.

Source-of-intent is the axiom the recursion cannot supply. The system can elaborate purpose endlessly, but it cannot originate it. The operator's intent — recorded or carried in the grounding note, validated through the loop, recovered when inception was messy — is what the method's recursion stands on. This doc names the disciplines that keep that intent intact.

This doctrine governs the **operational** face of source of intent — how purpose is recovered, validated, preserved, and routed across surfaces. The **structural** face — what a source of intent *is* (the locatable governing role; intent · authority · recourse) — is governed by [`docs/normative-apex.md`](normative-apex.md); the governance architecture that operationalizes or constitutes a source lives in [`docs/governance.md`](governance.md).

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

## Cross-surface handoff routing

When one ASK project surface prepares a handoff for another, the routing follows a specific pattern. The originating surface preserves the handoff in its own scratch space; a copy lands in the recipient surface's `sources of intent/`.

The two copies serve different purposes at different aging rates. The origin scratch copy records the sending — authorship, local pressure, event context, what the origin thought it was sending — at the rate of the originating session (fast). The recipient `sources of intent/` copy records the receiving: the material is now durably available to the recipient as candidate normative input, aging at the recipient project's source-of-intent rate (slow). The two copies are necessary; neither replaces the other.

The recipient project owns the absorption decision. It reads the handoff from inside its own active project surface — against its own repo truth, its own grounding note, and the broader stage of its own work — then classifies (per §Category distinctions) whether the material belongs as repo-local truth, grounding-note source-of-intent, roadmap pressure, advisor scratch, or premature implementation architecture. The origin surface may prepare and route context. It does not mutate the recipient's repo, grounding note, or project truth from outside. This implements the downstream absorption boundary at the file-routing level.

When material crosses as candidate input requiring recipient classification, this protocol applies between ASK project surfaces regardless of their relative altitude. Downstream → downstream, methodology → downstream, downstream → methodology: the same discipline.

```text
origin scratch records the sending
recipient sources-of-intent records the receiving
recipient active surface decides absorption
```

The protocol is **distinct from relay**. Relay (per [*The Relay Is the Instruction*](https://atomicspacekitten.substack.com/p/the-relay-is-the-instruction)) confers operative intent on a specific forwarded artifact — the forwarding act IS the authorization. Cross-surface handoff routing confers candidate normative availability only — the copy into recipient `sources of intent/` does not authorize anything; it makes the material durably available for classification. Conflating the two reintroduces the failure mode [*The Handoff Is Not the Instruction*](https://atomicspacekitten.substack.com/p/the-handoff-is-not-the-instruction) names.

Copy into recipient `sources of intent/` ≠ automatic absorption. Recipient ownership of absorption is non-negotiable.

### Multi-repo operating surface: shared intake

A single operating surface may operate across more than one repo. In that case, the surface may maintain one shared recipient `sources of intent/` intake for those repos, rather than one folder per repo. Receipt into that shared intake makes the material durably available for classification by the operating surface; it does **not** merge the artifact authority of the repos behind the surface.

The routed memo names its candidate owner surface or surfaces where known. The operating surface classifies the eventual owner or owners after ingestion. Each resulting owner acts through its own governing source of truth and workflow: repo actions follow the owning repo's workflow; operator-canonical actions follow that canonical's write, version, and snapshot discipline. Physical co-location in one intake grants no cross-repo authority, and a filename addressee (`_to_<surface>_`) records intent, not storage or ownership.

This refines the carrier only. Recipient-owned absorption (§Inbound handoff TBI marker), the ingestion ≠ absorption disequality, and the closure-record requirement are unchanged. The default remains one `sources of intent/` per project surface; the shared intake is the declared multi-repo-operating-surface case, not a new general default.

### Scope guard: handoff routing vs protocol conformance

This section governs candidate material whose status must be classified by the recipient, and any change that must cross a recipient-owned absorption boundary. It does not make every cross-surface update a handoff.

An ASK-authorized conformance change to a shared protocol owned upstream may propagate directly where the acting surface has write jurisdiction, through the consumer's normal workflow gates. Where that jurisdiction does not exist, the change routes to the owning surface.

Protocol authority and write permission are separate axes: upstream ownership does not pierce a wall, while the existence of a surface boundary does not turn an already-authoritative protocol update into candidate source-of-intent.

## Handoff memo completeness

A routed handoff memo should be self-contained at the moment it lands in the recipient surface's `sources of intent/`. §Cross-surface handoff routing governs delivery mechanics; this rule governs the integrity of the artifact being delivered.

The memo itself should carry:

- **Recipient-facing classification** — what the material is from the recipient's perspective, per §Category distinctions (valid source-of-intent, current-stage refinement, roadmap pressure, advisor scratch, premature implementation architecture, or another category named by the receiving surface)
- **Boundary statement** — what the memo is and is not; what it authorizes and does not authorize
- **Intended use** — why the memo was prepared; what the recipient is meant to do with it
- **Non-actions / out-of-scope** — what the memo explicitly does not authorize
- **Absorption caveats** — handling guidance specific to the recipient
- **Routing target** — where the memo is going, if known

The routing act may identify the file and the destination. It does not supply substantive wrapper logic that the recipient needs to interpret the memo. If wrapper logic is needed, it belongs inside the memo before routing.

```text
handoff memo carries meaning
routing relay carries delivery
recipient surface decides absorption
```

The completeness rule is the operational mechanism that makes cross-surface handoff routing work as designed. Without it, the routing protocol's promise — that the memo is durably available for recipient classification — is partially defeated: the file lands in `sources of intent/` (slow-aging) but its handling instructions live in chat relay (event-rate), and the durable copy ages out of sync with the meaning it depends on. The completeness rule restores the alignment.

All meaning the recipient needs must age at the recipient's aging rate.

## Inbound handoff TBI marker

Routed handoff memos copied into a recipient project's `sources of intent/` should use the `-TBI.md` suffix until ASK has fed them into the recipient active project surface.

TBI means "to be ingested." It does not mean "to be absorbed." The marker tracks operator ingestion state only; the receiving project owns absorption.

The disequality is hard and load-bearing:

```text
ingestion ≠ absorption
removing `-TBI` = the ingestion signal (first recipient-side action)
absorption = the later recipient-owned classification + durable action / hold / rejection + closure record
```

Leaving `-TBI` on a memo until its payload is absorbed is the failure this section corrects: it conflates the two and makes the ingestion queue lie — a memo already fed to the active surface still reads as un-ingested. Remove the suffix on ingestion; track absorption by the closure record, never by the filename suffix.

The lifecycle:

1. Origin prepares a self-contained handoff memo per §Handoff memo completeness. The origin scratch trail copy uses a clean filename (no `-TBI`).
2. The recipient copy lands in the recipient surface's `sources of intent/` with the `-TBI.md` suffix.
3. ASK feeds the memo into the recipient active project surface (typically by attaching it to a new Claude session, or equivalent invocation).
4. The recipient active surface's **first action, before any classification or absorption work begins, is to rename the file in place to remove `-TBI`.** Rename only. The rename is the *ingested* signal; it records nothing about what was absorbed, held, rejected, routed, or superseded.
5. The recipient surface **then** classifies the memo per §Category distinctions and `docs/absorption-discipline.md` — **absorb / hold / reject / route-elsewhere / withdraw / no-route.** Classification is a separate, recipient-owned decision that follows the rename; it is never a precondition of it.
6. If the memo produces any durable action, a held disposition, or a rejection, a separate dated closure memo in `scratch/` (`scratch/*_absorption.md`) is **required** — it is the closure record: classification, actions, non-actions, remaining held items. **A rename is not a closure record:** a memo that changes durable state but leaves only a renamed file (plus an ephemeral chat summary) is not closed until the separate closure memo exists.
7. The recipient adds a **minimal status/receipt line** to the top of the received handoff pointing to the closure memo — e.g. `status: INGESTED // absorbed by <closure memo path> on <date>` or `status: INGESTED // HELD, see <closure memo path>`. This is a receipt annotation, not the closure body.
8. The **body** of the received handoff remains the received record — not rewritten, re-argued, or replaced. The status line makes the file self-describing; the closure memo carries the actual disposition; the received memo preserves what was received.

```text
handoff memo body carries meaning (the received record — preserved)
-TBI carries ASK ingestion state (removed on ingestion — first action, before classification)
recipient surface decides absorption (absorb / hold / reject / route / withdraw / no-route)
scratch closure memo records what happened (the durable disposition)
received memo carries a minimal status line pointing to that closure memo
```

The marker confers no authority on the memo content. Without it, the recipient surface cannot distinguish a routed memo awaiting ingestion from one that has been seen but held, and the ingestion queue becomes invisible to the operator across multiple recipient surfaces.

**External-origin / read-only-source variant.** Some handoff memos are generated by a source that cannot write directly into the recipient project's `sources of intent/` folder — for example, a domain-authority review chat with read-only access to the recipient's external directory. In that case, the `-TBI` suffix appears on the file in transit before it reaches `sources of intent/`. ASK routes the memo into the recipient folder with the suffix intact; the first recipient-side action on ingestion is still the in-place rename. The marker tracks ingestion state regardless of where the file originates.

Copy + suffix do not authorize anything. The marker tracks operator ingestion state; absorption belongs to the recipient.

## External / domain-authority handoff classification

Some projects have an external source-of-intent loop where domain authority sits in a different role than architect/operator, and handoff content (memos, sketches, expert recaps) enters the system from outside the operator's direct authoring.

[`urban-observatory`](https://github.com/apexSolarKiss/urban-observatory) is the project where this pattern first surfaced. ASK is the project's architect/operator; the domain authority is a separate role. Domain-authority input arrives as handoffs that may carry valid source-of-intent, current-stage refinement, future roadmap, advisor scratch, or premature implementation architecture in the same artifact. The project's grounding note v12 added a project-specific guardrail: classify the handoff against those categories before treating any of it as current repo direction.

The project-specific guardrail itself stays in `urban-observatory`'s grounding note. The generalized rule lives here as method doctrine:

> When a project separates domain authority from architect/operator authority, domain-authority input is classified against the project's current stage before it reshapes current repo work. The role split creates an unavoidable authority boundary: expertise may be authoritative within its named domain without authorizing project-stage advancement, implementation architecture, execution, publication, or closure. Domain facts, constraints, and judgments may therefore bind within an explicitly delegated scope, while future-facing or implementation-shaped material remains future roadmap, advisor scratch, or premature implementation architecture until the architect/operator promotes it.

This rule is promoted under the absorption discipline's structural-argument exception. The pressure follows from the role structure itself rather than from Urban Observatory's local review mechanics. `urban-observatory` remains the first worked instance. A forthcoming second project may test and refine the rule, but is not counted as demonstrated evidence before implementation.

The classification is claim-level, not whole-artifact: one handoff may carry a binding domain judgment and a premature implementation proposal at once, and each claim is classified on its own. A review does not advance project stage by implication — out-of-stage material is preserved as future roadmap, advisor scratch, or premature implementation architecture until the architect/operator promotes it, neither adopted as current direction nor silently discarded.

The category mapping for handoff classification reuses the doctrine's category distinctions above. *Valid source-of-intent* maps to the first row; *current-stage refinement* maps to architectural-means; *future roadmap*, *advisor scratch*, and *premature implementation architecture* map directly. The classification is not a separate taxonomy — it is the doctrine's existing categories applied at the moment external content enters the system.

## Handoff necessity // domain-authority review

§Cross-surface handoff routing separates two acts: the **relay** confers operative intent on a forwarded artifact (the forwarding act IS the authorization), while routing a handoff into a recipient's `sources of intent/` confers only candidate normative availability. A corollary the method must state explicitly, because omitting it produces ceremony: **before creating a handoff, determine whether one is needed at all.**

A domain authority supplies or validates judgment within a named domain. The role does not by itself confer project-level source-of-intent, architecture, execution, publication, or closure authority; those rights are named explicitly or they are absent. A domain authority's judgment may be advisory, delegated-binding within a named scope, or apex-level when the same person also owns the project intent — which one it is must be stated, not inferred from expertise (see [`docs/governance.md`](governance.md) §Operational governance, delegated discretion).

When a decision is already settled and reaches the acting surface through an authorized relay, a new handoff adds nothing. A handoff is **unnecessary** when all of the following hold:

- the human decision is explicit;
- the proposal or target being decided is fixed and identifiable;
- the authorized operator forwards the decision with its qualifications and scope;
- no material meaning is lost between the human response and the executor.

Then the route is direct:

```text
human judgment >> authorized relay >> execution
```

The relay is the instruction. **Do not send a settled, already-relayed decision back to its source thread to be repackaged into a memo.** Re-eliciting it to produce a transport artifact the relay already carried adds no judgment, condition, authorization, or scope; it spends the operator's ceremony budget and the reviewer's attention for redundant provenance. The executor's closure already preserves that provenance — proposal reviewed, decision as stated, qualifications applied, files changed, verification.

A handoff **is** warranted when meaning genuinely needs asynchronous transport or durable structured capture: the review was asynchronous and the operator was not present; the answer spans many decisions or qualifications; ambiguity remains; the recipient lacks context the relay cannot safely compress; or an audit, legal, contractual, or confidentiality requirement demands a standalone record. A handoff preserves and transports meaning; it does not add authority, and neither does re-issuing one.

## Operator grounding-note extension (adjacent pressure)

Source-of-intent has a persistence problem at every layer below it — projects forget across threads, tools forget across sessions. The method's response is the grounding note: durable context that carries externalized, single-sourced intent the system reads on entry.

The same persistence problem applies to the operator. The operator works across tools, across threads, across weeks. The durable facts about the operator — how they want to be engaged, what context shapes their judgment, what's load-bearing for them this week — do not survive a thread boundary either. Every new conversation starts cold; tools disagree about state; the operator re-explains constantly.

This is the project-memory problem with the subject changed. If the grounding note is the durable carrier for a project, the operator needs a grounding note too. Same architecture: externalized files, organized by aging rate, single-sourced, read on entry, surviving any thread. Pointer discipline at the boundaries, aging-rate discipline within.

This is adjacent method pressure, not method doctrine to absorb wholesale. The operator-grounding-note pattern lives operator-side; its specifics (file names, content layout, tool-specific behaviors) are not method-ASK's to articulate. What method-ASK preserves is the structural observation that *source-of-intent persistence applies recursively to the operator who supplies the intent*.

Two implications for the doctrine:

- The operator's source-of-intent has the same load-bearing-ness as the project's. The axiom-outside-the-recursion (per [*Machine Builds Machine*](https://atomicspacekitten.substack.com/p/machine-builds-machine)) lives in the operator; the operator's context can no more be left to ephemeral threads than the project's can.
- The dual-axis role-typing matters. Architect/operator and domain authority are different roles, and the source-of-intent pattern works differently depending on which role is supplying intent. The external/domain-authority handoff classification rule above is one specific instance of this dual-axis structure.

## Canonicality is not normative force

A canonical context note can carry, describe, or preserve source-of-intent material without becoming the authority behind it. Canonicalization — the absorption of settled reasoning into durable context — is distinct from **normative adoption**, the separate act by which the operator establishes intent, direction, or constraint. A file can hold the settled account of a decision without being the source of that decision; folder membership confers no canonicality, and the authorized source of intent remains the source; the note records or carries the settled account. Canonicality does not itself confer normative force. The mechanics of the authorized transition — when reasoning earns a durable home, and how — live in [`docs/absorption-discipline.md`](absorption-discipline.md).

## Self-superseding clause

This doctrine should be superseded by:

- a future `docs/external-handoff-classification.md` if the now-promoted external/domain-authority handoff rule outgrows this doctrine's category distinctions and earns its own first-class home on separability grounds — a heavier threshold than the rule-level promotion already made
- splitting-out of the validation-loop discipline into its own doc if validation-pattern substrate accumulates beyond what this doctrine can carry
- broader refactoring if the category distinctions earn their own home (e.g., `docs/category-distinctions.md`) and source-of-intent contracts to a thinner doctrine that references it
- a future `docs/layer-classification.md` or `docs/absorption-discipline.md` if the grounding-note refresh preflight subsection grows into a broader treatment that absorbs it

The doctrine is not finished. The eight-category distinction may refine as more pressure surfaces. The operator-grounding-note extension may earn fuller treatment if the operator-side architecture becomes method-relevant in its own right (rather than as adjacent pressure). The external/domain-authority handoff classification has been promoted to rule-level doctrine on the structural-argument exception; its remaining open move is the separability-driven split into its own doc, not a further promotion.

Anchor reading lives in [`docs/articles.md`](articles.md). The articles most directly substrating this doctrine are *From Conversation to Control Surface* (recovered intent → validated constraint → repo), *The Handoff Is Not the Instruction* (the five-category classification), and *Context // The Operator Needs a Grounding Note Too* (the operator-side persistence pressure).
