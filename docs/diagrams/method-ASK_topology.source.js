/* method-ASK_topology.source.js
   Source data for the method-ASK topology / relative-externality map diagram.
   Renderable by diagrams-engine.js.

   D02 // method-ASK topology / relative-externality map // source-v5 // 2026-07-19
   Single-tree extraction of TREE_D02 from the v9 operator-side ecology-ASK
   package. This repo carries TREE_D02 only; it does not carry TREE_D01
   (control-surface architecture tree) or TREE_D03 (ecology-ASK overall),
   which remain in their respective owners' surfaces.

   source-v3 (2026-06-23): the doctrine-docs group now reflects the graduated
   source-of-intent doctrine cluster (normative-apex · source-of-intent handling ·
   governance · bounded-generativity) plus portable-definition-layer, and the
   image-making worked example is added under examples/. Roles are distinguished
   in the notes; no co-primitive taxonomy is asserted (held per method-GN v18).

   Pre-emptive fixes from PR A's Stage 2 lesson (transposing v9 from
   operator-side scratch to repo-local context):
   - 'canonical mirror · currently v3' → 'canonical external context mirror'
     (fast-aging version claim does not belong inside a repo diagram)
   - 'topology drafts: this artifact lives here' note dropped
     (the diagram now lives in this repo, not in operator-side scratch)

   Each TREE follows the same shape:
     { kind: 'root'|'section'|'group'|'node', label, note?, tag?, status?, children? }
     status: 'earned' (default) | 'held' | 'legacy'
*/

window.TREE_D02 = {
  kind: 'root',
  label: 'method-ASK',
  note: 'upstream methodology layer // designing systems that build systems',
  children: [
    {
      kind: 'section', label: 'repo-local method surfaces',
      children: [
        { label: 'README.md' },
        { label: 'AGENTS.md' },
        { label: 'docs/method.md', note: 'primary method articulation' },
        { label: 'docs/articles.md', note: 'canonical article-line index' },
        { kind: 'group', label: 'doctrine docs', note: 'source-of-intent doctrine cluster + method spine', children: [
          { label: 'normative-apex.md', note: 'structural source-of-intent · the apex role' },
          { label: 'source-of-intent.md', note: 'operational / handling face' },
          { label: 'governance.md', note: 'governance architecture · rulemaking → verification → recourse' },
          { label: 'bounded-generativity.md', note: 'bounded discretion + functional judgment topology' },
          { label: 'absorption-discipline.md' },
          { label: 'portable-definition-layer.md' },
          { label: 'relative-externality.md' },
          { label: 'source-of-truth-and-aging-rate.md' },
          { label: 'voice-surface-boundary.md' },
        ]},
        { label: 'examples/', children: [
          { label: 'asset-pipeline-ASK.md' },
          { label: 'urban-observatory.md' },
          { label: 'design-system-ASK.md' },
          { label: 'image-making-source-of-intent.md', note: 'compact image-making worked example' },
        ]},
        { label: 'docs/diagrams/', note: 'illustrative diagrams · not source truth', children: [
          { label: 'method-ASK_topology.html', note: 'this diagram' },
        ]},
      ],
    },
    {
      kind: 'section', label: 'operator-side method context · shared ecology external surface',
      tag: 'ecology-ASK-EXTERNAL/ · method-ASK slice',
      children: [
        { label: 'method-ASK_grounding-note.md', note: 'root canonical' },
        { label: 'sources of intent/', note: 'shared ecology intake', children: [
          { label: 'routed handoffs · -TBI = received, awaiting ingestion' },
        ]},
        { label: 'scratch/', note: 'shared ecology operator scratch', children: [
          { label: 'topology drafts' },
          { label: 'article planning' },
          { label: 'critique / handoff memos' },
        ]},
        { label: 'articles/', note: 'shared ecology publication corpus' },
      ],
    },
    {
      kind: 'section', label: 'upstream source-of-intent substrate',
      tag: 'operator-side · inherited by reference · not absorbed',
      children: [
        { label: 'ASK as source-of-intent principal', note: 'upstream normative authority' },
        { label: 'personal-ASK/inheritable/', note: 'granted subtree · the only layer a capability-bearing tool can reach', children: [
          { label: 'context architecture ADR', note: 'cross-tool inheritance boundary' },
          { label: 'brand architecture', note: 'tier model authority' },
          { label: 'visual identity system', note: 'visual decisions authority' },
          { label: 'voice / style / typography' },
        ]},
        { label: 'private layer structurally unreachable', note: 'lives outside the grant · only category names surface here' },
      ],
    },
    {
      kind: 'section', label: 'relay + execution topology',
      tag: 'how surfaces compose',
      children: [
        { label: 'ASK as relay / mediation operator', note: 'conduit · adopts advisor output into operative direction' },
        { label: 'advisor surface', note: 'GPT / Claude chat outside execution thread · no repo-write authority' },
        { label: 'active control surface', note: 'Claude Code in single-node mode · executor' },
        { label: 'operative relay = adoption event', note: 'not all forwarding · fix-direction / question-forwarding / classification ≠ adoption' },
      ],
    },
    {
      kind: 'section', label: 'downstream execution-protocol layer',
      children: [
        { label: 'control-surface', note: 'execution-protocol repo · downstream of method-ASK', children: [
          { label: 'AGENTS rules' },
          { label: 'templates' },
          { label: 'prompts', note: 'nudge ladder · critique cycle · instantiation' },
          { label: 'examples', note: 'workflow-asset notes per project' },
          { label: 'compact method bridge in docs/method.md' },
        ]},
      ],
    },
    {
      kind: 'section', label: 'visual-inheritance reference surface',
      children: [
        { label: 'design-system-ASK', note: 'externalized ASK visual / aesthetic-intent implementation', children: [
          { label: 'Tier 1 + Tier 2 inherited by child surfaces by reference' },
          { label: 'Tier 3 local to ASK', note: 'excluded from child surfaces' },
          { label: 'urban-observatory v1→v2 child proof', note: 'n=1 · observation-level per absorption-discipline.md' },
        ]},
      ],
    },
    {
      kind: 'section', label: 'downstream project pressure surfaces',
      tag: 'own absorption decisions',
      children: [
        { label: 'asset-pipeline-ASK', note: 'mature single-node primary pressure surface' },
        { label: 'urban-observatory', note: 'newer single-node · source-of-intent recovery pressure' },
        { label: 'mazeASK', note: 'Model A working example', status: 'legacy' },
      ],
    },
    {
      kind: 'section', label: 'reflective layer',
      children: [
        { label: 'article drafts', note: 'live in the shared ecology articles/ corpus' },
        { label: 'published Substack', note: 'canonical source for published essays' },
        { label: 'article line points to method', note: 'does not override repo truth' },
      ],
    },
    {
      kind: 'section', label: 'relative-externality rules',
      tag: 'doctrine that organizes the topology above',
      children: [
        { label: 'externality is a relation, not a property' },
        { label: 'two axes', note: 'surface boundary (internal/external) ⊥ normative direction (upstream/downstream/reflective)' },
        { label: 'ex-repo ≠ ex-system' },
        { label: 'rule may move downstream · payload may not' },
        { label: 'observation-level holds n=1 material', note: 'promotion awaits n=2 or strong structural argument' },
        { label: 'downstream absorbs from inside its own active project surface' },
      ],
    },
  ],
};
