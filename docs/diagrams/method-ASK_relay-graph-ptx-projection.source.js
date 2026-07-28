/* method-ASK_relay-graph-ptx-projection.source.js
   D07 // adversarial relay graph + PTX projection // source-v1 // 2026-07-28

   Subject: the difference between the NATIVE topology of an adversarial-collaboration
   exchange and the LINEAR PTX artifact that later represents it.

   The native exchange is a partially-ordered multi-thread graph. A PTX is a faithful
   linearized PROJECTION of that graph, selected and ordered by ASK. It is not the
   native topology, not necessarily wall-clock chronology, and not an authority
   converter: it records who drafted, who adopted, and who executed — it does not
   change any of them.

   One relayed passage carries three different labels at once, and the figure exists to
   keep them separable.

   Repo prose is source truth: docs/source-of-intent.md §Provenance transcript PTX marker. */

window.TREE_D07 = {
  kind: 'root',
  label: 'RELAY GRAPH >> PTX PROJECTION',
  note: 'a partially-ordered multi-thread exchange, and the linear artifact that represents it',
  children: [
    { kind: 'section', label: 'panel A · native topology', tag: 'what actually happens · partially ordered', children: [
      { kind: 'group', label: 'parallel strands', note: 'separate threads, separate contexts, no shared memory', children: [
        { label: 'ASK', note: 'the apex · the only surface that relays across strands' },
        { label: 'GPT advisor strand', note: 'non-writing · challenge, reconstruction, verification' },
        { label: 'Claude executor strand', note: 'single-writer · plans and performs authorized work' },
      ]},
      { kind: 'group', label: 'what crosses between them', note: 'only ASK’s relay — the strands never touch directly', children: [
        { label: 'ASK relays advisor output to the executor' },
        { label: 'ASK relays executor state back to the advisor' },
        { label: 'parallel side conversations' },
        { label: 'delayed returns · branch rejoins · re-quotations' },
      ]},
      { label: 'ordering', note: 'PARTIAL. Two strands can advance simultaneously; there is no single true sequence to read off' },
    ]},
    { kind: 'section', label: 'the projection operation', tag: 'ASK selects · groups · orders · re-quotes', children: [
      { label: 'what ASK does', note: 'assembles selected events from the graph into one readable sequence' },
      { label: 'what it produces', note: 'durable bytes · a path · speaker markers · assembly order · a -PTX role marker · optionally a _vN transcript version' },
      { label: 'what it does NOT change', note: 'who drafted the words · whether ASK adopted them · what the relay envelope authorized · whether the instruction was executed' },
    ]},
    { kind: 'section', label: 'panel B · the PTX artifact', tag: 'linear · faithful · not the topology', children: [
      { label: 'form', note: 'ASK >> · GPT >> · Claude >> · /// branch and splice boundaries' },
      { label: 'what it is', note: 'ASK-assembled provenance retained for lineage and later verification' },
      { label: 'what it is not', note: 'not a canonical · not a model draft · not a handoff · not an approval or execution instruction · not an ingestion-state marker' },
      { label: 'lifecycle', note: 'ASK-owned. Do not edit, extend, close, freeze, or advance a PTX unless ASK directs the exact operation' },
      { label: 'may carry terminal -TBI', note: 'feeding a transcript does not make it a routed handoff; resolving the overlay returns it to -PTX unchanged' },
    ]},
    { kind: 'section', label: 'three labels on ONE relayed passage', tag: 'the reason the projection must stay legible', children: [
      { label: 'drafting provenance', note: 'GPT — who composed the words' },
      { label: 'normative voice', note: 'ASK, through relay — who made them operative' },
      { label: 'execution provenance', note: 'Claude — who acted on them' },
      { label: 'the collapse to avoid', note: 'reading a quoted passage inside a PTX as operative because it appears in the transcript' },
    ]},
  ],
};
