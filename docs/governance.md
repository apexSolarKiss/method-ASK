# Governance

This doctrine governs **governance architecture**: the arrangement by which a normative source is constituted or recognized, decision rights are allocated and constrained, action is executed and verified, and both rules and their applications remain revisable, adjudicable, and answerable. It may **operationalize** a pre-existing source of intent or help **constitute** a collective one. **Procedure alone does not confer legitimacy on arbitrary intent.**

Governance is articulated separately from the [normative apex](normative-apex.md) — and beside it, not inside it — because it has its own decomposition, its own consumer scope, and its own domain implementations. The two are jointly necessary in consequential, delegated, or collective systems.

## The altitude split

```text
normative apex            purpose · governing standard · ultimate answerability
governance architecture   constitution / recognition of authority · rulemaking · delegated discretion ·
                          execution · verification · adjudication · revision · recourse
```

**Authority and recourse appear in both.** The apex states them as normative *requirements* — authority must be legitimate, recourse must remain locatable. Governance provides their institutional *mechanisms* — how authority is constituted or recognized, how recourse is operated. The two docs are complementary, not duplicative.

## Enforcement is not governance

Enforcement makes a rule effective. Governance asks whether the standard is legitimate, who may specify and revise it, who may apply it, who verifies the application, and who answers when either rule or application proves wrong. A perfectly enforced bad rule is not better governed because it is perfectly enforced; it is only harder to contest. The capacity to stop a system is power; the right to do so, under a standard, with limits, and with someone answerable, is governance.

## Operational governance

A durable governance architecture keeps these functions distinct, auditable, and answerable, even when one organization or one person occupies several:

- **rulemaking** — translate the governing standard into predicates, limits, and exceptions.
- **delegated discretion** — bounded (Dworkin *weak*) judgment exercised within the standard, assigned to a decision owner.
- **execution** — apply the rule.
- **verification** — test whether the rule was applied correctly.
- **adjudication** — hear the disputed case.
- **revision and recourse** — correct the rule or its application; name who answers when an authorized move produces an unjust result.

The **Montesquieu separation** runs through all of it: rulemaking, execution, and adjudication are different powers, and collapsing them into one unanswerable layer is arbitrary power, however reliable. The same separation is the spine of [`docs/bounded-generativity.md`](bounded-generativity.md) (legislative grammar / executive generation / judicial selection): bounded generativity is the **generative-artifact instance** of this general architecture, not a separate idea.

## Constitutive governance

Governance does not only operationalize an existing source; it can **constitute** one. A constituency, office, or collective becomes a legitimate source of intent through a governance architecture that supplies it: a defined constituency, a procedure, a scope, a binding decision, a closure, and recourse. Arithmetic supplies none of these — **a poll aggregates; a constituted collective decides.** In collective cases the relation is recursive: governance helps constitute the body capable of expressing binding intent, while that governance remains grounded in prior constitutional or normative commitments.

## The non-identities

- **enforcement ≠ governance** — clearing or holding a floor is not drawing it.
- **determinism ≠ a standard** — a perfectly reliable trigger is not the standard it fires on.
- **a reflex ≠ a conscience** — firing when someone else has decided is not deciding what is wrong.

A fourth is argued in full in the essay line and carried here by reference: **incorruptibility ≠ legitimacy** — an incorruptible mechanism can faithfully execute an illegitimate command (see *Determinism Is Not a Standard*).

## Artifact governance

**Artifact governance** is governance applied to a single produced artifact rather than a system: it binds an accepted artifact to its **claim register, permitted use, circulation, approval, and answerability.** It is the domain implementation of governance architecture inside a production pipeline — image-making and asset production are the worked instances ([`examples/image-making-source-of-intent.md`](../examples/image-making-source-of-intent.md); [`asset-pipeline-ASK`](https://github.com/apexSolarKiss/asset-pipeline-ASK)).

Artifact governance does **not** author the work. **Authorship is attributable through source of intent, bounded discretion, judgment-bearing intervention, selection, and closure.** Artifact governance constrains and records the accepted work's claim, use, and answerability; it preserves attribution and recourse, but it does not itself create authorship.

## Governance record

A **governance record** carries the durable **trace and stated basis** of artifact-governance decisions: capture, provenance, curator, rationale, approval history. It **supports audit and recourse**; it does **not** by itself prove the decision was legitimate, correctly applied, or genuinely reviewed — a record may be incomplete or self-serving. **The record is the carrier, not the governance function.**

## Classification

Governance architecture, generalized beyond any single project. It clears the promotion bar by multi-domain recurrence: state and physical-enforcement cases (the essay line), constituted-collective cases, and artifact-governance instances in image-making and asset production. It is a distinct articulation surface from the apex, ratified on separability and legibility grounds; the stronger "co-primitive" taxonomy is **held**, not asserted.

## Self-superseding clause

This doctrine should be superseded by a refactor if a common parent with [`docs/normative-apex.md`](normative-apex.md) is earned, or if **artifact governance** accrues enough cross-domain implementation detail to warrant its own subordinate doc. The taxonomy of governance relative to the apex is held open for fresh-context review.

## Anchors

Anchor reading lives in [`docs/articles.md`](articles.md). *Determinism Is Not a Standard* (the silicon / limit case, argued in full) and *The Floor Is Not the Standard* (the synthesis) carry the arguments this doctrine states in compact form; Dworkin (*Taking Rights Seriously*) and the Montesquieu separation are the jurisprudential grounding.
