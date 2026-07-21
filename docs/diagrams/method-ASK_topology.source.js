/* method-ASK_topology.source.js
   Source data for the method-ASK topology / relative-externality map diagram.
   Renderable by diagrams-static-H-engine.js.

   D02 // method-ASK topology / relative-externality map // source-v6 // 2026-07-21
   v6 (2026-07-21): ecology-state scrub to the landed shared-protocol architecture.
   Corrects the stale renderer comment (diagrams-engine.js -> diagrams-static-H-engine.js)
   and the D03 name (ecology-ASK overall -> system-ASK topology). method-ASK is a
   RESOLVED-LOCAL consumer of the control-surface-owned execution-protocol canonical
   (direct-core repo-reset authority): its root AGENTS.md resolves the shared rule body +
   core-ecology profile + method-local delta. The downstream execution-protocol layer now
   distinguishes four DISTINCT artifacts / planes (NOT four carriers — protocol/ is the owner
   canonical, the resolved AGENTS.md files are the carriers): protocol/ (owner canonical) ·
   AGENTS.shared.md (authoritative shared rule body) · manifest.json (normative registry, NOT
   live state) · the protocol consumer ledger (live carrier / grant / visibility / propagation
   state plane). Adds
   seed-mediated-generated-interface.md to the doctrine cluster + personal-context-system as
   the public SMGI proof scaffold (applicable-but-carrier-blocked for protocol). Tier 3 restated
   as resolved locally by source-of-intent + brand distance. Absorption rule qualified (recipient
   owns candidate absorption; deterministic GREEN conformance may move directly under established
   jurisdiction). No live SHAs/PRs in the tree. Content-only; render held render-v20.
   Single-tree extraction of TREE_D02 from the v9 operator-side ecology-ASK
   package. This repo carries TREE_D02 only; it does not carry TREE_D01
   (control-surface architecture tree) or TREE_D03 (system-ASK topology),
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
        { label: 'AGENTS.md', note: 'resolved-local carrier of the control-surface-owned execution-protocol · resolves the shared rule body + core-ecology profile + method-local delta (direct-core repo-reset authority)' },
        { label: 'docs/method.md', note: 'primary method articulation' },
        { label: 'docs/articles.md', note: 'canonical article-line index' },
        { kind: 'group', label: 'doctrine docs', note: 'source-of-intent doctrine cluster + method spine', children: [
          { label: 'normative-apex.md', note: 'structural source-of-intent · the apex role' },
          { label: 'source-of-intent.md', note: 'operational / handling face' },
          { label: 'governance.md', note: 'governance architecture · rulemaking → verification → recourse' },
          { label: 'bounded-generativity.md', note: 'bounded discretion + functional judgment topology' },
          { label: 'seed-mediated-generated-interface.md', note: 'SMGI doctrine — seed >> loading boundary >> grammar >> runtime; the two committed SMGI figures illustrate it' },
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
        { label: 'sources of intent/', note: 'shared ecology INBOUND intake · genuinely inbound material only — NOT a core-repo routing bus (direct-core movement is a hard repo-boundary reset, not a -TBI ingestion event)', children: [
          { label: 'routed handoffs · -TBI = received, awaiting ingestion' },
          { label: 'received records from separately-operated or walled surfaces' },
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
        { label: 'personal-ASK/inheritable/', note: 'external WALL-SAFE grant surface · the external read/folder grant reaches this subtree and NOTHING else · inherited by reference', children: [
          { label: 'context architecture ADR', note: 'cross-tool inheritance boundary' },
          { label: 'brand architecture', note: 'tier model authority' },
          { label: 'visual identity system', note: 'visual decisions authority' },
          { label: 'voice / style / typography' },
        ]},
        { label: 'household personal-context perimeter outside the external grant', note: 'two subject-owned instances · instance boundaries organize ownership / retrieval / maintenance / least-need access, NOT default confidentiality · WALL-BOUND content + confidential enclaves remain outside that grant · operator capability ≠ audience authority' },
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
      tag: 'downstream of method methodologically · yet the OWNER of the shared execution-protocol canonical that method consumes',
      children: [
        { label: 'control-surface', note: 'execution-protocol repo · downstream of method-ASK · owns the shared execution-protocol canonical', children: [
          { kind: 'group', label: 'protocol/ owner canonical', note: 'shared execution-protocol owner canonical · resolved consumers carry the applicable shared / profile bodies locally · live carrier / grant / visibility state lives in the protocol consumer ledger', children: [
            { label: 'AGENTS.shared.md', note: 'authoritative shared rule body' },
            { label: 'manifest.json', note: 'normative registry — ownership / scope / applicability / metadata · NOT live state' },
            { label: 'profiles/ · fragments/ · check.sh', note: 'rule profiles · standing-grant body · deterministic validator (--local / --wave / --all)' },
          ]},
          { label: 'method-ASK resolves it locally', note: 'root AGENTS.md = resolved-local carrier (shared body + core-ecology profile + method-local delta) · direct-core repo-reset authority path' },
          { label: 'protocol consumer ledger', note: 'live carrier / grant / visibility / propagation STATE · operator-side, not in this repo' },
          { label: 'templates · prompts · examples', note: 'bootstrap shells · nudge ladder · critique cycle · per-project workflow notes' },
          { label: 'compact method bridge in docs/method.md' },
        ]},
      ],
    },
    {
      kind: 'section', label: 'visual-inheritance reference surface',
      children: [
        { label: 'design-system-ASK', note: 'externalized ASK visual / aesthetic-intent implementation', children: [
          { label: 'Tier 1 + Tier 2 inherited by child surfaces by reference' },
          { label: 'Tier 3 instance identity', note: 'resolved locally by source-of-intent + brand distance (ASK-native · domain-partner · client) — not simply excluded' },
          { label: 'urban-observatory v1→v2 child proof', note: 'n=1 · observation-level per absorption-discipline.md' },
        ]},
      ],
    },
    {
      kind: 'section', label: 'downstream project pressure surfaces',
      tag: 'own absorption decisions',
      children: [
        { label: 'asset-pipeline-ASK', note: 'mature single-node primary pressure surface · separately operated under a standing GREEN maintenance grant' },
        { label: 'urban-observatory', note: 'newer single-node · source-of-intent recovery pressure · separately operated under a standing GREEN maintenance grant' },
        { label: 'personal-context-system', note: 'public scaffold · the SMGI proof surface (seed-mediated setup prompt >> working system) · direct-core consumer, but applicable-but-carrier-blocked for the shared protocol (no root AGENTS.md) — the proof role and the carrier hold are distinct' },
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
        { label: 'candidate absorption is recipient-owned', note: 'but deterministic GREEN conformance (protocol / design-system maintenance) may move directly under established jurisdiction — not everything routes as candidate material' },
      ],
    },
  ],
};
