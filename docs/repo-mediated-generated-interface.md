# Repo-Mediated Generated Interface // the interface begins at the loading path

A system pattern: a **repo, prompt, or package supplies enough structured material and behavioral instruction for a user's own AI chat tool to render the operative interface in conversation.** The interface is *generated* — caused to happen inside a runtime the author does not control — not *built* as application chrome.

```text
repo / prompt / package  +  delivery wrapper  +  user loading path
  >> the user's AI chat tool becomes the runtime
    >> the interface is the guided interaction the package causes to happen
```

The static artifact — a prompt file, a sealed HTML, a review packet — is the **seed**, not the interface. The interface is the guided, AI-mediated interaction the seed produces. This is the bounded-generativity spine ([`docs/bounded-generativity.md`](bounded-generativity.md)) seen from the delivery side: the brief carries the grammar, and here it must also carry **its own loading instructions into a runtime the author cannot see**.

## The interface begins before the AI answers

The first move of a generated interface is not the model's first reply. It is the **user's loading action** — pasting a prompt, dragging a folder, clicking a link. If that action is wrong, confusing, or fails silently, no interface comes into being. Therefore:

**Setup UX is method-bearing, not packaging trivia.** File names, open-first instructions, message wrappers, folder shape, the named failure mode, the fallback path, and the expected user actions are part of the interface. They are designed, not decorated.

## Operator distance — the organizing variable

How much the seed must encode is a function of **operator distance**: how far the consumer sits from an operator who already holds the protocol.

```text
The farther the consumer is from the operator who knows the protocol,
the more the package / prompt / wrapper must itself encode:
  the first action · the loading instruction · the fallback path
  · the expected AI behavior · the return shape · the routing / provenance marker.
```

When an operator performs the load, the seed can lean on that operator's standing context. When the consumer loads it alone, the seed must be idiot-proof — self-explaining, the first action obvious, with a named recovery path when the channel misbehaves.

## Three worked cases

The pattern is observed at three distinct operator distances — three separate instantiations of one thesis, not one accident reused.

**Personal Context System (PCS) — self-setup, high operator distance.** The consumer loads a setup prompt into their own AI tool with no operator present. Setup is delivered as a **social-channel setup wrapper** — a short human-channel wrapper that explains the purpose, tells the user what to paste or upload, names likely tool failures, and gives a fallback path. In PCS: explain the point; tell the user to *paste* the prompt rather than understand it; give the raw setup URL; **name the fetch-failure mode** (the tool that cannot open links says so verbatim); and provide a fallback repo link. PCS is the clearest evidence that the interface is *generated, not built*, and the strongest lightweight example of **social-channel setup UX**. Load-bearing lessons: first-action clarity and a fallback when the fetch fails.

**Internal domain-expert review — operator-loaded, low operator distance.** An operator loads the whole package into a known reviewer's standing advisor thread, so the *package-loading* burden on the consumer is low. This case is therefore **not** the source of heavy package-load UX; it is the source of three other durable lessons: the **package carries the review behavior** (the standing advisor prompt infers none of it), and the **human artifact must survive its actual access path** — because the reviewer can reach the artifact by clicking it inside the AI thread, which downloads the bare file and **leaves the package folder behind**. That access-path failure, not complex loading, is why the human artifact must render self-sufficiently.

**External review — consumer-loaded, highest operator distance and stakes.** An outside reviewer receives, processes, and loads the package directly, with no operator between. This is the **strongest package-loading UX pressure**: the package must be self-explaining, must **separate the human-facing artifact from the AI-facing facilitator materials** (the AI works from machine-readable source, not the heavy sealed artifact), and must carry an explicit return shape. The full external-review packet protocol remains a **held subtype** (see *What remains local or held*) pending an actual outside-reviewer run.

## Invariants

- **Behavior travels with the seed.** The prompt/package carries the process; do not rely on a standing reviewer/advisor prompt to infer it.
- **The interface begins at the loading path.** Setup UX is method-bearing.
- **Operator distance sets the encoding budget.** The farther the consumer from the operator, the more the seed must carry on its own.
- **The first action must be obvious** — and the human setup actions **minimized** and **named in the artifact itself**.
- **Test the consumer's actual access path**, not the author's intended folder structure — the delivery channel may strip context the author assumed survives.
- **Separate consumers, separate surfaces.** Where a generated-interface package serves multiple consumers, keep the **human-facing artifact**, the **AI-facing facilitator materials**, and the **operator-side audit / provenance** distinct, and ship each consumer only what it needs.
- **Markers are distinct concepts.** Reviewer-routing markers ≠ ingestion-state markers ≠ provenance handles; one string must not be made to carry all three.
- **A generated thread cannot self-authorize.** A setup or review interaction produces a record that informs the owner's next decision; it does not promote, publish, or authorize anything ([`docs/governance.md`](governance.md)).

## Variation by consumer

```text
self-setup user        social-channel wrapper; idiot-proof first action; fetch fallback
internal domain expert operator loads; behavior-carrying + artifact survives the access path
outside reviewer       consumer loads directly; self-explaining + AI-facilitator split + return handle
```

The invariants hold across all three; the *realization* is set by the consumer and the operator distance.

## What remains local or held

This doc lands the **broad pattern**. The following are surface-local realizations or a still-held subtype, deliberately **not** generalized here:

- a specific delivery-wrapper's copy and channel;
- a project's reviewer-routing suffix mechanics and its exact artifact-class taxonomy;
- exact package folder names and provenance-handle strings;
- sealed single-file HTML as a universal requirement — it is the right realization where the access path strips the folder, not a law;
- the **external-review packet protocol as settled doctrine** — held pending an actual outside-reviewer run, which will confirm or modify the kernel;
- consumer-owned renderer / sealing tooling.

The broad UX thesis is doctrine; the review-package subtype stays a held candidate until a real external run lands.
