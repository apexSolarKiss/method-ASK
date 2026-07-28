/* method-ASK_activation-lifecycle-comparison.source.js
   D05 // activation and lifecycle comparison // source-v1 // 2026-07-28

   Subject: five carrier classes and their DISTINCT activation and lineage models.
   The figure exists to stop one inheritance error: every carrier type inheriting the
   routed-instance inbox lifecycle because they share a plane.

   A canonical vN lineage is not a routed-instance lifecycle. A deployment is not an
   invocation. An ingestion is not a disposition.

   Repo prose is source truth: docs/intent-artifacts.md, docs/source-of-intent.md. */

window.TREE_D05 = {
  kind: 'root',
  label: 'ACTIVATION + LIFECYCLE',
  note: 'five carrier classes · five different models — none inherits another’s',
  children: [
    { kind: 'section', label: 'grounding note', tag: 'standing context canonical', children: [
      { label: 'lineage', note: 'canonical vN · frozen _vN snapshots in the historical plane' },
      { label: 'activation', note: 'STANDING — a required read; no invocation event, no deployment act' },
      { label: 'force', note: 'normative context. May carry durable intent limbs without becoming an intent carrier' },
      { label: 'NOT', note: 'not routed · not fed · not ingested · never takes a routed-instance suffix' },
    ]},
    { kind: 'section', label: 'Project Instructions', tag: 'standing operative carrier', children: [
      { label: 'lineage', note: 'canonical vN + snapshots' },
      { label: 'activation', note: 'DEPLOYED — ASK installs the payload into a live field; the field is a deployment mirror verified against the canonical' },
      { label: 'drift check', note: 'the live field and the canonical are compared; a canonical revision does not by itself repaste the field' },
      { label: 'NOT', note: 'a canonical filename change is not a lifecycle event' },
    ]},
    { kind: 'section', label: 'prompt', tag: 'invocable operative carrier', children: [
      { label: 'lineage', note: 'canonical vN + snapshots — the canonical FILENAME is unchanged by use' },
      { label: 'activation', note: 'INVOKED — ASK selects it and relays or feeds it; the invocation produces a result, not a state change on the carrier' },
      { label: 'NOT', note: 'invocation leaves no suffix. A prompt does not become -ingested' },
    ]},
    { kind: 'section', label: 'routed handoff', tag: 'routed instance — the ONLY inbox lifecycle', children: [
      { label: '1 · routed', note: 'origin makes it durably available at the recipient intake · terminal -TBI = ASK still owes a feed' },
      { label: '2 · fed', note: 'ASK hands it to the recipient’s active surface — by value or by exact path' },
      { label: '3 · ingested', note: 'the recipient reads it into active context · -TBI becomes -ingested · disposition still OPEN' },
      { label: '4 · disposition', note: 'terminal rename + durable record in ONE bounded operation · absorbed / held / declined / withdrawn / routed / no-route / closed / supersededP' },
      { label: 'pre-ingestion exit', note: '-supersededA — retired before ingestion, never consumed' },
    ]},
    { kind: 'section', label: 'PTX', tag: 'provenance artifact', children: [
      { label: 'lineage', note: 'the PTX files ARE the lineage · optional _vN indexes the transcript artifact · no canonical-plus-snapshot chain' },
      { label: 'activation', note: 'ASSEMBLED by ASK from multi-thread events — capture and projection' },
      { label: 'later feed', note: 'a PTX MAY carry terminal -TBI. Feeding it creates a NEW relay whose envelope governs how it is read — it does not make the transcript a handoff' },
      { label: 'NOT', note: 'not an authority converter · quoting a statement inside a PTX does not make that statement operative' },
    ]},
  ],
};
