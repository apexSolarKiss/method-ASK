/* method-ASK_intent-artifact-ontology.source.js
   Source data for the intent / context / provenance ontology diagram.
   Renderable by diagrams-static-H-engine.js.

   D04 // intent-artifact ontology // source-v1 // 2026-07-28

   Subject: what KIND of thing each artifact is, and the one distinction the ontology
   exists to protect — that a source of intent is a locatable governing ROLE, not a
   folder and not an artifact.

   The figure's doctrinal job is preventing four collapses:
     source of intent ≠ any folder or file
     ASK authorship ≠ intent-carrier status
     mixed claim limbs ≠ mixed artifact family
     folder membership ≠ authority

   Claim role and authority are evaluated claim by claim; artifact family and placement
   follow the named primary canonical function. A grounding note may carry durable
   intent limbs and remains a context canonical.

   Repo prose is source truth: docs/intent-artifacts.md, docs/source-of-intent.md. */

window.TREE_D04 = {
  kind: 'root',
  label: 'SOURCE OF INTENT',
  note: 'the locatable governing role · the apex relation — NOT a folder, NOT an artifact',
  children: [
    {
      kind: 'section', label: 'artifacts of context', tag: 'durable description · orientation · state',
      children: [
        { label: 'grounding note', note: 'PRIMARY role: standing context canonical. May carry durable intent limbs and does NOT become an intent carrier by authorship or mixed content alone' },
        { label: 'ADR', note: 'architecture decision record · durable reasoning, not an invocable instrument' },
        { label: 'durable context master', note: 'a descriptive master ABOUT source of intent stays context; its subject does not change its family' },
        { label: 'index · layout', note: 'structural / retrieval context — classified by their own function, not automatically as intent' },
      ],
    },
    {
      kind: 'section', label: 'artifacts of intent', tag: 'durable carriers of operative intent',
      children: [
        { kind: 'group', label: 'standing carriers', note: 'operative while deployed · no invocation event', children: [
          { label: 'Project Instructions canonical' },
          { label: 'chat-tool settings', note: 'exact deployment strings' },
          { label: 'bootstrap', note: 'artifact of intent by ROLE — but its fixed root locator is a retrieval contract that classification does not override' },
        ]},
        { kind: 'group', label: 'invocable carriers', note: 'operative when selected and relayed', children: [
          { label: 'session-start prompt' },
          { label: 'critique · synthesis · execution prompts' },
          { label: 'nudge / review prompt' },
        ]},
        { kind: 'group', label: 'routed instances', note: 'addressed to a recipient · governed by the feed-obligation lifecycle', children: [
          { label: 'handoff memo' },
          { label: 'review return' },
          { label: 'addressed instruction package' },
        ]},
      ],
    },
    {
      kind: 'section', label: 'provenance artifacts', tag: 'evidence of events · dialogue · lineage',
      children: [
        { label: 'PTX', note: 'ASK-assembled provenance transcript · capture and projection, NOT an authority converter' },
        { label: 'closure record' },
        { label: 'receipt' },
        { label: 'PR / event record' },
        { label: 'note', note: 'provenance is NOT operative intent by form — a later feed of a PTX creates a new relay whose ENVELOPE governs how it is read' },
      ],
    },
    {
      kind: 'section', label: 'the rules that keep the families apart', tag: 'classification discipline',
      children: [
        { label: 'claim-level vs artifact-level', note: 'claim role and authority are evaluated CLAIM BY CLAIM; artifact family and placement follow the named PRIMARY canonical function' },
        { label: 'mixed artifacts', note: 'one artifact may carry context, intent, and provenance limbs at once and still have one primary role — never a purity test, never an authorship test' },
        { label: 'folder membership confers nothing', note: 'no authority, activation, absorption, canonicality, or normative adoption' },
        { label: 'what confers force', note: 'artifact role PLUS the valid authority posture — apex-relayed language bounded by ASK’s envelope, or delegated-authority language operative within its named delegation' },
      ],
    },
  ],
};
