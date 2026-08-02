# Intent Artifacts

This doctrine governs the **artifact** face of source of intent: what carries intent, how each kind of carrier becomes operative, and how each ages. `docs/normative-apex.md` governs the structural face — what a source of intent *is*. The distinction those two docs draw between them is the one this doctrine exists to make unmissable:

```text
source of intent    a locatable governing role — a chair, a hat
artifact of intent  a carrier through which that role's intent is expressed,
                    deployed, routed, relayed, or preserved
```

A role is not a file. Naming a folder after the role was the category error this doctrine corrects: a folder holds artifacts of intent, and the source of intent is whoever sits in the chair.

## Three artifact families

Every durable artifact **this doctrine classifies** falls into one of three families by **primary role**. Primary role is not determined by content alone — a context artifact may carry authoritative intent-bearing claims without becoming an instruction.

**Produced and execution artifacts are outside this taxonomy** — code, images, datasets, diagrams, published works, and the other work created *under* intent. They are governed as produced artifacts, not as carriers of intent, unless a particular artifact's primary role is itself context, intent, or provenance.

```text
ARTIFACTS OF CONTEXT      orient, describe, constrain, preserve
                          grounding note · architecture-decision record ·
                          durable context canonical

ARTIFACTS OF INTENT       express, deploy, route, or relay intent from the apex
                          Project Instructions · chat-tool settings · bootstrap ·
                          session-start / critique / synthesis prompts ·
                          routed handoffs · review returns

PROVENANCE ARTIFACTS      record what occurred
                          provenance transcript · closure · receipt · PR record
```

**Mixed claims inside one artifact are ordinary.** A grounding note carries project purpose, audience, and durable constraints — all intent-bearing — alongside origin, environment, and rationale, which are context. The artifact still has one primary role. Classify the artifact by what it is *for*, not by scanning its sentences.

**Internal goal state is a runtime realization of intent, not a fourth family.** An explicit goal statement, policy, configuration, memory entry, or audit of that state may be an artifact when its primary role fits the taxonomy above. The causal organization through which intent actually influences planning and action is not identical to any one carrier, and does not enter the taxonomy at all. Four consequences follow. A carrier may preserve or deploy standing intent without being identical to it. A routed instance may carry content that is standing at its origin, candidate at its recipient, or neither — routing does not make content standing. Carriers may help instantiate or reconstruct a runtime realization. And where persistent memory causally sustains or reconstructs a goal, *that causal function* participates in runtime realization, while the memory surface itself remains non-authoritative context under its existing owner — it does not become a standing-intent carrier merely because a realization draws on it. Realization admits degrees — explicitly represented, behaviorally integrated, self-restoring — but these are descriptions of how deeply intent has been instantiated, not a fifth axis, a form, an activation posture, or a lineage.

## Four axes

One list cannot classify these artifacts, because at least four independent questions apply to each. Collapsing any two produces the confusions this doctrine resolves.

**Axis A — form.** What kind of object is it?

```text
standing normative context   a canonical read to orient and constrain
standing operative carrier   a continuously deployed instruction
invocable operative carrier  a durable canonical activated episodically
routed instance              an addressed artifact crossing a surface boundary
utterance event              intent expressed in a composer, with no file of its own
provenance artifact          a record of what occurred
```

**Axis B — authority and voice.** What makes its language operative?

```text
apex-uttered          composed or adopted and addressed by the apex; operative within
                      the envelope of that utterance
delegated-authority   composed by a role holding an already-recognized delegation;
                      operative within that named delegated scope, without a fresh
                      apex relay
apex-relayed          composed elsewhere without independently delegated binding force —
                      an advisor, an executor, another surface — and operative within
                      the apex's relay envelope
quoted-not-adopted    present inside an apex utterance as reported speech
surface-generated     a recipient's own product; never self-authorizing
```

**Composition by the apex is not itself the operative event.** A draft, a private note, or a quotation the apex wrote does not bind until the apex addresses or adopts it within a scope. The operative act is the addressing, not the authorship — which is the same reason advisor-drafted language becomes operative on relay.

**Delegated authority is a real posture, not a special case of relay.** A domain authority operating inside a named delegation binds within that scope on its own footing; requiring a fresh apex relay for each judgment would collapse a delegation into a courier arrangement. `docs/governance.md` owns what may be delegated and how the scope is named.

**Axis C — activation.** What is its activation posture or event?

```text
standing      always available, or continuously deployed
invoked       selected and relayed for one use
routed        made durably available for a possible later feed
fed           presented by the apex to an active surface
ingested      the resulting recipient-side state when a feed succeeds
dispatched    supplied to a nested execution context by a delegate acting
              within its grant — no apex relay per dispatch
```

**Axis D — lineage.** How does its history persist?

```text
canonical family     unversioned current canonical + frozen _vN snapshots
routed instance      immutable body + filename lifecycle +
                     disposition / lineage record as applicable
deployment mirror    an installed copy of a canonical carrier
provenance lineage   the transcript's own versioning
```

**Relayed intent is axis B, not a class on axis A.** A relayed advisor approval may arrive as an utterance event, a routed instance, or a quoted passage. What makes it *relayed* is its origin plus the apex act that activates it — never its physical form. Treating "relayed intent" as a peer of "standing carrier" and "routed instance" mixes two axes and produces a taxonomy that cannot classify anything cleanly.

## The classes, placed on the axes

```text
                    form                      activation    lineage
grounding note      standing normative        standing      canonical family
                    context
Project             standing operative        deployed      canonical family
Instructions        carrier                                 + deployment mirror
prompt canonical    invocable operative       invoked       canonical family
                    carrier                                 + invocation events
routed handoff      routed instance           routed/fed/   routed-instance
                                              ingested      lifecycle
provenance          provenance artifact       read as       provenance lineage
transcript                                    evidence
subagent task       utterance event           dispatched    none — event
brief
```

**A grounding note and Project Instructions are both standing, and they differ in force.** The grounding note establishes why, for whom, and under what durable premises a surface operates; Project Instructions establish how it must behave. The grounding note *constrains the interpretation of* instructions. It is authoritative for project purpose while authorizing no particular mutation.

**A prompt canonical and a prompt invocation are different objects with different lifecycles.** The canonical is a durable file with a version lineage. An invocation is an event. A prompt canonical is never renamed to record that it was used — otherwise every reusable instrument would acquire the routed-instance lifecycle simply by being useful.

**A subagent task brief is an artifact of intent inside one execution surface.** A parent executor operating under a recognized grant composes sub-briefs that carry **derived task intent** to computational subagents. On the axes: its form is an **utterance event**; its voice is **delegated-authority** — operative within the parent's named grant, without a fresh apex relay per subtask, which is what delegation is for; its activation is **dispatched** — not routed, not fed, not ingested. Its authority is derivative and bounded: the task dispatch instantiates derived task intent in a nested execution context, constitutes no source role, crosses no surface boundary, and acquires no routed-instance lifecycle.

The dispatched sub-brief is ordinarily an utterance event. Where a reusable durable prompt canonical supplies or generates that brief, the canonical remains classified by the existing `prompt canonical` row — invocable operative carrier, canonical lineage — while the resulting sub-brief is the dispatched event. [`docs/source-of-intent.md`](source-of-intent.md) §Runtime delegation through the execution span owns the operational chain; [`docs/normative-apex.md`](normative-apex.md) §Delegation does not propagate the apex owns why the recursion creates no new apex.

## Three lifecycle architectures

Not one lifecycle. Three, and applying the wrong one is the recurring failure.

**Canonical lineage** — context canonicals and standing or invocable intent carriers:

```text
canonical authored and accepted
→ unversioned canonical mirrors the latest accepted _vN
→ revision produces the next _vN; the canonical mirrors it
→ the canonical line ends only on explicit retirement
```

A prior `_vN` is **historical**, not superseded. Version succession is ordinary revision. Prospectively, **supersession names an addressed routed artifact displaced by a successor** — the phase-sensitive `-supersededA` / `-supersededP` event on the routed-instance lifecycle below. Standing and invocable carrier families are **revised, retired, or replaced** under canonical lineage; they do not acquire routed-instance supersession semantics. Historical carrier filenames retain their original labels in their own lineage plane without acquiring the prospective meanings defined here.

**Routed-instance lifecycle** — addressed artifacts crossing a surface boundary:

```text
fresh routed handoff + terminal -TBI overlay
  ├─ successful first ingestion
  │    → -ingested
  │    → a durable post-ingestion disposition suffix
  │
  └─ ASK-side pre-ingestion retirement
       → -supersededA
```

`-ingested` begins the durable **post-ingestion** branch of the routed-instance filename lifecycle; `-supersededA` is its durable **pre-ingestion retirement** branch. Terminal `-TBI` remains the cross-cutting feed overlay, not a durable routed-instance state. The received body is byte-immutable; no canonical mirror and no `_vN` chain are created. **`docs/source-of-intent.md` is the authoritative state machine** — the exact suffix transitions, marker grammar, queue mechanics, supersession phases, and exceptions live in §Inbound handoff TBI marker, and the overlay-resolution mechanics in §Resolving the feed-obligation overlay; neither is restated here.

**Provenance lineage** — transcripts:

```text
-PTX, and -PTX_vN where the apex directs
```

A provenance transcript receives neither the canonical-plus-snapshot model nor the routed-instance lifecycle. Its role marker is orthogonal to lifecycle state.

**Feed-obligation overlay** — orthogonal to all three architectures:

```text
<otherwise-complete-underlying-filename>-TBI.md
```

`-TBI` is not part of any one lifecycle architecture. It is human ASK's terminal flag that a successful feed of that exact artifact is still owed, and it may sit above a canonical carrier, a routed instance, a provenance transcript, or an ordinary artifact carrying no marker at all. Placing it there imports no other class's lifecycle: `topic-PTX-TBI.md` is a provenance transcript with a feed owed, not a routed handoff, and resolving the overlay returns it to `topic-PTX.md`.

Only a **fresh routed handoff** specializes the resolution, and only on a successful feed: `-TBI` → `-ingested`. A fresh handoff may instead leave the overlay through the ASK-side pre-ingestion retirement branch, `-TBI` → `-supersededA`, without ever reaching `-ingested`. Anything **not currently in that state** — a provenance transcript, an ordinary artifact, or a routed instance already ingested or dispositioned — has the overlay removed and its underlying filename restored unchanged. The discriminator is the fresh-handoff *state*, not the artifact's class: `topic-absorbed-TBI.md → topic-absorbed.md` is a routed instance by class, and it takes the removal branch because its first ingestion is already behind it. An in-place overlay is valid only where resolving it leaves the filename truthful and preserves any contractual locator — `docs/source-of-intent.md` §Resolving the feed-obligation overlay owns the mechanics, including the `-supersededA` and fixed-path carve-outs.

## Relay and feeding

```text
relay      the apex's authority-bearing act of addressing an utterance to a surface
feeding    a relay that introduces material from outside the recipient's active context
ingestion  the resulting recipient-side state when a feed succeeds
```

**All feeding occurs through relay; not every relay is feeding.** A direct instruction typed fresh into a thread is a relay with no external payload. Feeding is the delivery face of a relay that carries one.

The distinction does **not** turn on transport. Inline paste, attachment, file path, mounted source, dragged canonical — any of these may carry any force. Transport says how the bytes arrived; it says nothing about authority.

**Feeding is transport-neutral and occurs by value or by reference.**

```text
by value      inline text · pasted excerpt · attachment · dragged carrier
by reference  an exact path or locator the recipient is authorized and able to resolve
              → recipient retrieves through its available route
              → recipient reads the artifact into active context
```

In a feed by reference the apex relays the locator plus the envelope governing how the artifact is to be treated; the recipient then retrieves it — through a connector, or by reading the filesystem directly. **Supplying or resolving the path is not ingestion.** Ingestion occurs when the artifact's content is actually in the recipient's active context. A failed retrieval, or metadata-only reachability, is not ingestion.

A normalized or lossy inspection view is a different case: it **may** constitute content read, but it carries a bounded fidelity claim and never establishes exact-byte identity. Where the omitted portion could affect classification, the recipient obtains an adequate representation before recording ingestion as complete.

```text
path resolves   ≠ content read
content read    ≠ exact-byte identity proven
```

The second line is a separate verification question, governed by whatever evidence the task requires — not settled by the feed.

**The payload supplies content; the relay envelope supplies force and scope.** A feed always relays at least a meta-intent — read this, consider this, ingest and classify this, execute this exactly, hold this — but it does not thereby adopt every proposition inside the payload as operative instruction.

```text
execute this exact prompt      envelope and payload coextensive; the whole payload
                               becomes operative
ingest and classify this       envelope authorizes ingestion and classification;
                               the payload's recommendations remain candidate
read this for context          envelope authorizes reading; nothing is adopted
```

**Ingestion is not a proactive election by the recipient.** The apex performs the act; ingestion is the resulting state when the material is read into the surface's active context. A surface does not decide to ingest — it ingests because it was fed.

## Drafting provenance is not normative voice

```text
drafting provenance   who composed the language
normative voice       whose intent the language expresses operationally
execution provenance  who performed the authorized act
```

Language may be drafted by an advisor, an executor, a domain authority, or another surface. Its drafting provenance remains true and remains part of the record. **When the apex deliberately relays that exact language, the apex becomes the operative speaker within the relay's scope** — the words are the apex's intent because the apex relayed them, not because the apex composed them.

This is why advisor-drafted language often reads as though the apex is speaking: it is frequently drafted *as a proposed apex utterance*. Before relay it is a candidate. Relay converts it into an actual utterance.

It follows that provenance forensics based on voice, style, pronouns, or a speaker label is unreliable:

```text
words carry an advisor's drafting provenance  ≠  the advisor supplied operative authority
words read in the apex's voice                ≠  the apex originally composed them
the apex relayed the exact words              =  the apex is the operative speaker,
                                                 within the relay's scope
```

A single chain reads: **advisor-drafted · apex-relayed · executor-performed.** All three are true at once, and none of them is the others.

## Provenance transcripts project a relay graph

Each apex–agent conversation is individually linear. The system they compose is not.

```text
native topology     two or more linear strands
                    + cross-strand relay edges made by the apex
                    + side branches, delayed returns, re-quotations
                    a partially ordered graph

transcript          one total ordering of that graph, selected by the apex
```

A provenance transcript is therefore an **apex-assembled linearized projection of a multi-thread relay graph** — faithful as a projection, not identical as a topology. The apex chooses which branch appears first, which packet is quoted in full, where a side discussion rejoins the principal arc, and where a splice boundary falls. That selection is interpretive by necessity: two events in separate strands have no intrinsic "next turn" relation.

The consequences are practical:

```text
transcript sequence   ≠ native chronology
transcript order      ≠ system-level relay topology
speaker marker         records the apex's assembled attribution of the source strand —
                       evidence of drafting provenance, not infallible proof, and not
                       the operative voice downstream
a passage appearing     may be an intentional re-quotation rather than two events;
twice                   duplication alone settles neither
```

**Capture is not conversion of authority.** Assembling an utterance into a transcript gives it durable bytes, a path, and a role marker. It does not make it operative, and it does not change who drafted it, what the relay envelope authorized, or whether the instruction was executed. Relay created the operative intent, at the original event; the transcript records that it happened.

Reading a transcript's line order and speaker markers as a literal execution trace produces false findings. That failure has been observed: a duplicated block read as two rulings when it was one ruling quoted twice, and a proposal-generation turn read as an authority breach when the same turn recorded that no authoritative write occurred. Both were settled only by reading the actual bytes — **a marker, a summary, or a structural proxy is a reason to look, never a substitute for looking.** A hand-assembled projection is also subject to ordinary assembly error, so an anomalous marker may be a mistake rather than evidence of anything.

## The non-identities

```text
source of intent          ≠ artifact of intent
intent-bearing claim      ≠ intent-carrier artifact
context carrying intent   ≠ a prompt or directive
standing intent           ≠ standing operative instruction
prompt canonical          ≠ prompt invocation
deployment canonical      ≠ deployed mirror
version succession        ≠ routed-artifact supersession
drafting provenance       ≠ normative voice
speaker marker            ≠ operative speaker after relay
relay                     ≠ neutral forwarding
routing                   ≠ relay
relay                     ≠ feeding          (all feeding ⊂ relay)
feeding                   ≠ wholesale adoption of the payload
feeding                   ≠ ingestion
ingestion                 ≠ disposition       (and therefore ≠ absorption)
disposition               ≠ absorption         (absorption is one disposition)
feed obligation           ≠ artifact role
feed obligation           ≠ prior ingestion history
feed obligation           ≠ durable lifecycle state
feed-obligation removal   ≠ disposition change
re-feeding                ≠ reopening
absorption                ≠ implementation
transcript projection     ≠ native topology
transcript capture        ≠ conversion into operative authority
```

## Boundaries

This doctrine owns the ontology. It does not own:

- the routed-instance state machine, marker grammar, or queue mechanics — `docs/source-of-intent.md` §Inbound handoff TBI marker;
- feed-overlay resolution mechanics, including the governed-role and prior-lifecycle-state discriminator, the truth-preservation invariant, and the fixed-locator carve-out — `docs/source-of-intent.md` §Resolving the feed-obligation overlay;
- absorption criteria, durable disposition, closure requirements, or reconciliation after absorption — `docs/absorption-discipline.md`;
- the structural face of source of intent — `docs/normative-apex.md`;
- the surface-relation frame these classes sit inside — `docs/relative-externality.md`;
- physical placement on any operator surface. At method altitude the routed plane is the **intent inbox**; the target folder convention is `intent-INbox/`, and each surface's live index governs its current physical path until that surface completes its cutover.
