# Seed-Mediated Generated Interface // the interface begins at the loading path

A system pattern: a **seed — a static artifact such as a repo, an assembled packet, or a prompt/prompt-wrapper — supplies enough structured material and behavioral instruction for an AI runtime to render the operative interface in conversation.** The interface is *generated* — caused to happen inside a runtime — not *built* as application chrome. The static artifact is the **seed**; the interface is the guided, AI-mediated interaction the seed produces.

The **hard case is the user's own opaque runtime** — a runtime the author can neither see nor control (see the runtime-context axis below). That is where the doctrine has its bite.

```text
seed (repo / packet / prompt)  +  delivery wrapper  +  user loading path
  >> an AI runtime renders the interface (the user's own opaque tool is the hard case)
    >> the interface is the guided interaction the seed causes to happen
```

## Two orthogonal axes: carrier and runtime context

The family is classified on two independent axes. Conflating them inverts the classification.

**Carrier — what the seed *is* (the primary loading object):**

```text
repo-mediated     the repo is the primary seed / loading object
packet-mediated   an assembled packet is the primary seed / loading object
prompt-mediated   a prompt or prompt-wrapper is the primary seed / loading object
```

Repo-mediated is one **carrier species**, not the genus. **A prompt or packet may reference a repo, and a runtime may have live repo access, without making the interface repo-mediated by carrier** — carrier is *what is loaded*, not what is merely referenced or reachable. (The doctrine was formerly titled after this species; the genus is seed-mediated.)

**Runtime context — what the generated interface *runs against*, and how opaque it is to the author:**

```text
self-contained opaque   the runtime has no authorized live access to the author's context;
                          the author can neither see nor control it                      >> the HARD case
connected authorized    the runtime has authorized live access to the author's repo / context
author-controlled null  the author's own runtime  >> the NULL case (no opacity, no delivery failure surface)
```

The two axes are orthogonal — the same carrier can run in any runtime context, and the same runtime context can carry any species. Worked polarity (below): on carrier, PCS and AP-external are opposite; on runtime context they are the *same* (self-contained opaque), while UO-4TMK is the outlier — the runtime with the **most** authorized context access, though it is *packet*-mediated by carrier. Do not let "repo access at runtime" bleed into "repo-mediated delivery."

**The hard case is runtime opacity.** The author ships behavior and the loading path, but the generated thread is **not itself an authority surface**. A seed-mediated interface running in a runtime the author *does* control (the null case) has none of this failure surface — **opacity is the condition that gives the doctrine its bite, not the carrier name.**

## Relation to bounded generativity

Seed-mediated generated interface is **bounded generativity delivered into a runtime the author cannot see or control** — the bounded-generativity spine ([`docs/bounded-generativity.md`](bounded-generativity.md)) shipped past the author's observability. There, the brief / grammar grants the aperture, execution fills it, selection closes, and governance binds — and the author can, in principle, observe that the judicial (selection / closure) and governance functions ran as authored. Under runtime opacity that **back half of the spine is partially exiled from the author's observability**: the runtime is the renderer, and the author cannot directly confirm the generated thread selected, closed, or recorded as specified.

The author compensates two ways: **behavior travels with the seed** (the process is carried, not left to a standing prompt to infer), and the **generated thread is stripped of authorizing force** — authorization stays in the repo / packet / governance record, never in the runtime conversation. This is why *a generated thread cannot self-authorize* is an invariant rather than a caution: the record is produced inside a runtime the author does not control. So the distinction from bounded generativity is not "one more shipping step" — it is the same spine with its judicial + governance tail moved out of the author's line of sight, compensated by seed-carried behavior and a de-authorized thread.

So the seed governs **two behaviors at once**:

```text
the model's behavior   inside the generated interaction   >> the aperture (permitted variance)
the user's setup       before the interaction can begin   >> the loading path (what to paste / open / upload;
                                                              the failure mode · the fallback · the return shape)
```

A grammar cannot govern a realization it never arrives as. **Bounded generativity governs the candidate space; seed-mediated generated interface governs the instantiation path.** Aperture and operator distance are **orthogonal control dials**: the aperture meters permitted output variance; operator distance meters the setup-encoding burden the seed must carry. They interact, but neither is the delivery-side version of the other. (These control dials are distinct from the carrier and runtime-context classification axes above — a held question of whether **stakes / blast-radius** is a further dial is noted under *What remains local or held*.)

## The interface begins before the AI answers

The first move of a generated interface is not the model's first reply. It is the **user's loading action** — pasting a prompt, dragging a folder, clicking a link. If that action is wrong, confusing, or fails silently, no interface comes into being. Therefore:

**Setup UX is method-bearing, not packaging trivia.** File names, open-first instructions, message wrappers, folder shape, the named failure mode, the fallback path, and the expected user actions are part of the interface. They are designed, not decorated.

## Operator distance — the encoding-budget dial

How much the seed must encode is a function of **operator distance**: how far the consumer sits from an operator who already holds the protocol.

```text
The farther the consumer is from the operator who knows the protocol,
the more the seed / wrapper must itself encode:
  the first action · the loading instruction · the fallback path
  · the expected AI behavior · the return shape · the routing / provenance marker.
```

When an operator performs the load, the seed can lean on that operator's standing context. When the consumer loads it alone, the seed must be idiot-proof — self-explaining, the first action obvious, with a named recovery path when the channel misbehaves.

## Worked cases — classified by carrier and runtime context

The genus is observed across two carrier species (packet, prompt); the **repo-mediated *delivered* species is not yet instantiated** — it is the forward form of AP + UO at launch, intended, not yet observed. So these are worked cases of the **genus**, not evidence of the repo-named species.

```text
Case                          Carrier                          Runtime context           Operator distance
Personal Context System       prompt-mediated (repo fallback)  self-contained opaque     high (self-setup)
Internal domain review (4TMK) packet-mediated                  connected authorized      low (operator-loaded)
External review (AP)          packet-mediated                  self-contained opaque      highest (+ high stakes)
```

**Personal Context System (PCS) — prompt-mediated (repo fallback), self-contained opaque runtime, high operator distance.** The consumer loads a **setup prompt** into their own AI tool with no operator present; the repo is the *fallback* link, not the primary loading object — so this is prompt-mediated with a repo fallback, not a repo-mediated case. Setup is delivered as a **social-channel setup wrapper**: explain the purpose; tell the user to *paste* the prompt rather than understand it; give the raw setup URL; **name the fetch-failure mode** (the tool that cannot open links says so verbatim); provide a fallback repo link. PCS is the clearest evidence that the interface is *generated, not built*, and the strongest lightweight example of **social-channel setup UX**. Load-bearing lessons: first-action clarity and a fallback when the fetch fails.

**Internal domain-expert review (UO 4TMK) — packet-mediated, connected authorized runtime, low operator distance.** An operator loads the whole packet into a known, trusted-collaborator reviewer's standing advisor thread, which has **authorized live read access to the repo (+ scratch + EXTERNAL via the Dropbox connector)** — the runtime with the most authorized context access of the three, yet still packet-mediated by carrier. The package-loading burden on the consumer is low, so this case is **not** the source of heavy package-load UX; it is the source of three other durable lessons: the **packet carries the review behavior** (the standing advisor prompt infers none of it), and the **human artifact must survive its actual access path** — the reviewer can reach the artifact by clicking it inside the AI thread, which downloads the bare file and **leaves the package folder behind**. That access-path failure, not complex loading, is why the human artifact must render self-sufficiently.

**External review (AP) — packet-mediated, self-contained opaque runtime, highest operator distance and stakes.** An outside reviewer receives, processes, and loads the packet directly, with no operator between and no authorized repo access. This is the **strongest package-loading UX pressure**: the packet must be self-explaining, must **separate the human-facing artifact from the AI-facing facilitator materials** (the AI works from machine-readable source, not the heavy sealed artifact), and must carry an explicit return shape. The full external-review packet protocol remains a **held subtype** (see *What remains local or held*) pending an actual outside-reviewer run.

**The null case (bracketed).** Author-controlled self-use is the null case: in-category by mechanism (a repo-shaped context loaded into the author's own AI tool each session), but running in an **author-controlled runtime** — operator distance zero, no runtime opacity, none of the delivery failure surface that gives the doctrine its bite. In-category by mechanism, but outside the hard runtime-opacity case; named here only so the count is honest, not counted as a delivered case.

**Evidence, stated honestly:**

```text
packet-mediated               observed 2x   (AP external, UO 4TMK)
prompt-mediated               observed 1x   (PCS setup, repo fallback)
repo-mediated // delivered    observed 0x   (AP + UO launch form — intended, forward-looking, not yet instantiated)
```

The earlier repo-mediated label named one carrier species, while the observed evidence establishes the broader seed-mediated genus.

## Invariants

- **Behavior travels with the seed.** The seed carries the process; do not rely on a standing reviewer/advisor prompt to infer it.
- **The interface begins at the loading path.** Setup UX is method-bearing.
- **Operator distance sets the encoding budget.** The farther the consumer from the operator, the more the seed must carry on its own.
- **The first action must be obvious** — and the human setup actions **minimized** and **named in the artifact itself**.
- **Test the consumer's actual access path**, not the author's intended folder structure — the delivery channel may strip context the author assumed survives.
- **Separate consumers, separate surfaces.** Where a seed serves multiple consumers, keep the **human-facing artifact**, the **AI-facing facilitator materials**, and the **operator-side audit / provenance** distinct, and ship each consumer only what it needs.
- **Markers are distinct concepts.** Reviewer-routing markers ≠ ingestion-state markers ≠ provenance handles; one string must not carry all three.
- **A generated thread cannot self-authorize.** A setup or review interaction produces a record that informs the owner's next decision; it does not promote, publish, or authorize anything ([`docs/governance.md`](governance.md)). This invariant is strongest in the opaque runtime and is what any future delivered form must not violate.

## Variation by consumer

```text
self-setup user        prompt-mediated; social-channel wrapper; idiot-proof first action; fetch fallback
internal domain expert packet-mediated; operator loads; behavior-carrying + artifact survives the access path
outside reviewer       packet-mediated; consumer loads directly; self-explaining + AI-facilitator split + return handle
```

The invariants hold across all carriers, runtimes, and distances; the *realization* is set by the consumer, the carrier, and the operator distance.

## What remains local or held

This doc lands the **broad genus pattern**. The following are surface-local realizations, still-held subtypes, or out-of-scope for this doctrine:

- a specific delivery-wrapper's copy and channel;
- a project's reviewer-routing suffix mechanics and its exact artifact-class taxonomy;
- exact packet folder names and provenance-handle strings;
- sealed single-file HTML as a universal requirement — it is the right realization where the access path strips the folder, not a law;
- the **external-review packet protocol as settled doctrine** — held pending an actual outside-reviewer run;
- **whether stakes / blast-radius is a third control dial** (beyond aperture × operator distance) — a **held analytical thread** (the external-review corner co-maxes operator distance + stakes while running a *tight* aperture); connected here, **not resolved in this pass**;
- consumer-owned renderer / sealing tooling;
- **delivered launch form** (e.g. "the user clones the repo and uses it") — a plausible **B2B** form for AP + UO, but **stated intent, not a landed instance**; it is **not** the universal launch form. Consumer-facing delivery, hosted-runtime, and monetization reasoning are **out of scope for this doctrine** and stay live on their originating surface, not method doctrine.

The broad genus thesis is doctrine; the review-packet subtype, the stakes dial, and the delivered launch form stay held or out until their own gates land.
