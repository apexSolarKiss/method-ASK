/* method-ASK_system-ASK-hero.figure.js — D11 // system-ASK causal orientation (source-v2, ASK 2026-09-14)
   Bespoke one-off method figure. Projects the accepted P1 v5 claim set as published in
   examples/system-ASK.md. Consumes design-system-ASK Three Functions by reference
   (_dsa-tokens/three-functions.css) at the owner's 30% role-fill + full role-stroke contract,
   on FUNCTION-BEARING APPARATUS ONLY:
     legislative  the SOURCE-OF-INTENT ROLE, as the constitutive legislative source; the
                  execution grant and the enforced path-scoped grant, as DELEGATED apparatus.
                  The aperture a grant produces is a permission — a quantity, not apparatus —
                  and takes no role color.
     executive    the executor — the bounded realization chamber — and the realization span
                  inside the grant
     judicial     the adjudication gate, and disposition

   ACTOR / ROLE BINDING. The occupying actor and the role it occupies are drawn as two elements.
   "human ASK" is a NEUTRAL ACTOR ENVELOPE; inside it sit two role boxes — the legislative
   source-of-intent role and the judicial adjudication gate. The envelope takes no role color:
   the actor is not exhausted by any role it occupies, and the figure shows it, because one
   envelope holds a legislative role and a judicial one. The role at the apex is constitutively
   legislative, so it carries the role treatment. Its label stays on the theme foreground — a
   label is never the role hue. Constitutive and delegated legislation share the one role value;
   their rank is carried by TOPOLOGY (the source role sits outside the realization field that
   its grant opens inside) and by labels — never a second hue, an opacity rank, a fourth function
   or a role-colored label.

   Everything else is NEUTRAL, and the exclusions are load-bearing. Artifact governance and the
   governed artifact take no role color: carrying judicial cyan up into governance would imply
   selection = governance. Project cells, public surfaces, and the structural frames and edges
   are neutral for the same reason — they are the structure the functions act within, not
   functions. Structure, not state — Spectral State is deliberately NOT used.

   COMPOSITION. source-v2 is composed on a grid. Every ORDINARY NODE — a labeled box that is
   not a container — has ONE common size (NW × NH below): the two role boxes, the three rungs
   and members of the left stack, the right stack, domain authority, project cells and the enforced grant. Only
   structural containers differ: the actor envelope (sized around its two nodes), the executor
   chamber (the column's width, taller for its nested apparatus), the nested grant and intent
   frames, the realization field frame, and the cross-cutting design rail. Peer stacks share
   both column edges (X, below); relation labels and routed paths run in reserved lanes (Y,
   below); the ordered-authority descent takes a deliberate gutter beside the chamber, and the
   evidence return from project cells takes the exterior gutter around domain authority. Both
   keys — the three functions and the edge grammar — are drawn inside the SVG (KEY, below).
   Elements carry data-node / data-col / data-edge attributes so the grid and the routing can
   be measured on the rendered page rather than asserted. */
(function () {
  /* FAIL CLOSED BEFORE ANY LAYOUT. diagrams-fit.js is a DS-owned support file vendored
     alongside this figure and loaded immediately BEFORE it. Checked here so a missing helper
     stops the builder before the SVG exists, rather than leaving a half-built artifact whose
     failure has to be inferred. */
  if (!window.DIAGRAM_FIT || typeof window.DIAGRAM_FIT.compute !== 'function') {
    throw new Error('Diagram fit support is missing. Load diagrams-fit.js before the figure builder.');
  }

  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 2000, H = 1140;
  const svg = document.getElementById('svg');
  svg.setAttribute('width', W); svg.setAttribute('height', H);
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  while (svg.firstChild) svg.removeChild(svg.firstChild);

  function el(name, attrs = {}, kids = []) {
    const e = document.createElementNS(svgNS, name);
    for (const [k, v] of Object.entries(attrs)) if (v != null) e.setAttribute(k, v);
    for (const c of kids) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    return e;
  }
  const edges = el('g', { class: 'edges' }), nodes = el('g', { class: 'nodes' });
  svg.append(edges, nodes);

  /* ---------------------------------------------------------------------------
     EDGE GRAMMAR — six classes. Five inherited from the ASK figure vocabulary,
     plus CONFORMANCE, which exists because ROLEREL-1's second limb cannot be drawn
     in any of the five. INHERITANCE and CONFORMANCE are the closest neighbours —
     both dashed, both about one owner consuming another — so they differ on TWO
     axes, dash cadence AND terminal form, and are separable without the key.
     --------------------------------------------------------------------------- */
  const AH = 9;
  const headR = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH} ${y-AH/1.6} L ${x-AH} ${y+AH/1.6} L ${x} ${y} Z` });
  const headL = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x+AH} ${y-AH/1.6} L ${x+AH} ${y+AH/1.6} L ${x} ${y} Z` });
  const headD = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH/1.6} ${y-AH} L ${x+AH/1.6} ${y-AH} L ${x} ${y} Z` });
  const headU = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH/1.6} ${y+AH} L ${x+AH/1.6} ${y+AH} L ${x} ${y} Z` });
  /* EVIDENCE terminal — OPEN chevron, never filled. The visual weight difference between
     this and a filled authority head is the figure's core non-identity. Two orientations:
     leftward (into the gate's side) and upward (into the gate from below). */
  const openL = (x, y) => el('path', { class: 'edge e-evidence', fill: 'none', d: `M ${x+11} ${y-6} L ${x} ${y} L ${x+11} ${y+6}` });
  const openU = (x, y) => el('path', { class: 'edge e-evidence', fill: 'none', d: `M ${x-6} ${y+11} L ${x} ${y} L ${x+6} ${y+11}` });
  /* CONFORMANCE terminal — a HOLLOW head: an outlined triangle that gives the edge its direction, apart from the filled
     heads of authority and inheritance and from evidence's open chevron. Two orientations: upward (into the consuming
     repository's bottom edge) and rightward (the key's sample). */
  const hollowU = (x, y) => el('path', { class: 'edge e-conform-head', d: `M ${x-AH/1.6} ${y+AH} L ${x+AH/1.6} ${y+AH} L ${x} ${y} Z` });
  const hollowR = (x, y) => el('path', { class: 'edge e-conform-head', d: `M ${x-AH} ${y-AH/1.6} L ${x-AH} ${y+AH/1.6} L ${x} ${y} Z` });
  /* RELAY marker — a small square sitting in the break. */
  const relayMark = (x, y) => el('rect', { x: x-5, y: y-5, width: 10, height: 10, class: 'edge e-relay-mark' });

  const box  = (x, y, w, h, cls='node-box', rx=4, data={}) => el('rect', { x, y, width:w, height:h, rx, ry:rx, class:cls, ...data });
  const line = (d, cls='edge', name=null) => el('path', { class:cls, fill:'none', d, 'data-edge': name });
  const lbl  = (x, y, t, cls='node-label', a='start') => el('text', { x, y, class:cls, 'text-anchor':a }, [t]);
  const note = (x, y, t, a='start', extra='') => el('text', { x, y, class:'node-note'+(extra?' '+extra:''), 'text-anchor':a }, [t]);
  const tag  = (x, y, t, a='middle') => el('text', { x, y, class:'flow-tag', 'text-anchor':a }, [t]);
  const sect = (x, y, t, a='middle') => el('text', { x, y, class:'section-tag', 'text-anchor':a }, [t]);

  /* ===========================================================================
     GRID — one ordinary-node size; columns with shared left AND right edges; lanes.

     NW × NH is the size of every ordinary node. A node's label sits at +26 and its notes at
     +46 / +62. NH is sized for the fullest node, a heading and two note lines, so the last line
     clears the box bottom by one note pitch (16 units); a node with one note line keeps the same
     size, with that room below it. The enforced grant, the one node with no note, centers its
     label in the box instead. The columns are read
     left to right: the actor envelope (outside the realization field), the method / advisor /
     critic stack, the control-surface / executor / project-cells stack, the disposition /
     governance / artifact / public-surface stack, and the cross-cutting design rail. Domain
     authority straddles the field's left edge and shares the left stack's row grid.

     Frames share one inset, 32 units: the field sits 32 outside its columns and the design rail, and the system
     boundary 32 outside the actor envelope and the field at left and right (its top and bottom edges are set by the
     top lanes and the bottom band). Across the actor's column every vertical edge sits
     32 from the next: boundary, envelope, disposition route, role boxes; then role boxes, envelope, field, left stack.

     Lanes are the horizontal bands between box rows; each y below names what occupies it.
     The ordered-authority descent runs in the gutter between the left stack and the chamber
     column (X.desc); the evidence return from project cells runs in the exterior gutter
     between the system boundary and domain authority (X.ev), up into the gate from below.

     Page export. The grid is not sized to the exporter; the viewBox is (PAGE EXPORT, at the end
     of the builder). The actual page result is inspected, not assumed.
     =========================================================================== */
  const NW = 264, NH = 84;
  const X = {
    outer0: 4,   outer1: 1812,        // system-ASK boundary: 32 outside the actor envelope and the field
    env: 36,     envW: 360,           // actor envelope: the disposition route runs 32 inside its left edge
    role: 100,                        // role + gate boxes: 32 right of the disposition route, 32 inside the envelope's right edge
    field0: 428, field1: 1780,        // ecology-ASK realization field: 32 outside its columns and the design rail
    c2: 460,                          // method-ASK · advisor · critic
    desc: 792,                        // ordered-authority descent gutter
    c3: 864,                          // control-surface · executor · project cells
    c4: 1236,                         // disposition · artifact governance · governed artifact · public surfaces · enforced grant
    rail: 1608, railW: 140,           // design rail
    da: 360,                          // domain authority (straddles field0)
    ev: 232,                          // exterior evidence-return gutter (= the gate's center)
  };
  const CX = { c2: X.c2 + NW/2, c3: X.c3 + NW/2, c4: X.c4 + NW/2 };
  /* Rows and lanes are measured from the bottom edge of the row above them, so the node height moves every row,
     lane, port and container that depends on it together, and each lane keeps its clearances. */
  const Y = {};
  Y.outerTop    = 40;                // system-ASK boundary
  Y.dispRail    = 76;                // top lane: ASK's adjudicated disposition, descending
  Y.fieldTop    = 108;               // ecology-ASK realization field
  Y.rowA        = 140;               // method-ASK · control-surface · disposition · design rail
  /* Lane A/B is sized for the conformance U under the first two rungs: its run sits 40 units below row A, the depth of the
     legs in lane D/E, and clears the execution-grant label below it by about 18. */
  const A = Y.rowA + NH;             // lane A/B, from row A's bottom edge:
  Y.confLabel   = A + 20;            //   conformance label, beside the U's first leg
  Y.confRun     = A + 40;            //   conformance U, its run
  Y.grantLabel  = A + 64;            //   execution-grant label
  Y.grantRail   = A + 80;            //   execution-grant rail = the source-of-intent role's center
  Y.mutLabel    = A + 120;           //   mutation-channel label
  Y.rowB        = A + 136;           // advisor · executor · artifact governance
  Y.rowC        = Y.rowB + NH + 44;  // critic · governed artifact  (the chamber spans rows B–C)
  const C = Y.rowC + NH;             // lane C/D, from row C's bottom edge:
  Y.ptrRail     = C + 32;            //   continuity pointer rail
  Y.ptrLabel    = C + 48;            //   continuity label
  Y.prodTag     = C + 68;            //   production-circuit name
  Y.laneLabel   = C + 92;            //   ordered-authority label
  Y.rowD        = C + 112;           // domain authority · project cells · public expression
  const D = Y.rowD + NH;             // lane D/E, from row D's bottom edge:
  Y.routesLabel = D + 24;            //   owner-declared routes label (right of project cells)
  Y.evLabel     = D + 24;            //   evidence-return label, on the same line
  Y.laneDE      = D + 40;            //   ONE rail line for the two edges that meet project cells' bottom edge:
  Y.routesRail  = Y.laneDE;          //     the owner-declared routes rail, entering from the right,
  Y.evRail      = Y.laneDE;          //     and the evidence return, leaving to the left
  Y.rowE        = D + 56;            // public context scaffold
  Y.fieldBot    = Y.rowE + NH + 32;  // the field's bottom edge: the same 32-unit inset as its top (fieldTop → rowA)
  /* BOTTOM BAND — measured from the field's bottom edge, top to bottom: the field's two-line caption, the private
     context perimeter note just inside the system boundary, the boundary's bottom edge, the membrane with
     the enforced grant (an ordinary node, centered on the membrane), the wall note, the key rule. The order and
     every relation are unchanged; the spacing is set from the measured ink of each line (a 9-unit section tag spans
     about 4 units either side of its anchor; a 10-unit note about 4.5 above and 5.5 below) so that each distinct
     element clears the next by about 16 units, the caption hangs about 14 below its frame, its two lines clear each
     other by about 10, and the wall note keeps its 18 above the key rule. */
  const F = Y.fieldBot;
  Y.cap1        = F + 19;            // the figure's core non-identity
  Y.cap2        = F + 37;            // the field's name
  Y.outerBot    = F + 84;            // system-ASK boundary, bottom edge
  Y.perimNote   = Y.outerBot - 22;   // private context perimeter note, inside the boundary
  Y.membrane    = Y.outerBot + 59;   // the enforced grant's top clears the boundary edge by about 16
  Y.memNote     = Y.membrane + 63;   // wall note, about 16 below the enforced grant
  Y.keyRule     = Y.memNote + 24;
  Y.key         = [Y.keyRule + 17, Y.keyRule + 43, Y.keyRule + 63, Y.keyRule + 83];
  Y.keyDivider  = Y.keyRule + 30;
  const ROLE_Y = Y.grantRail - NH/2;                // the grant leaves the role at rail height
  const GATE_Y = Y.rowC;                            // the gate shares the critic's row
  const EXH = Y.rowC + NH - Y.rowB;                 // chamber height: rows B–C
  const ENV = { top: ROLE_Y - 58, bot: GATE_Y + NH + 32 };   // envelope, sized around its two nodes

  /* ===== outer system boundary ===== */
  nodes.append(el('rect', { x:X.outer0, y:Y.outerTop, width:X.outer1 - X.outer0, height:Y.outerBot - Y.outerTop, rx:16, ry:16, class:'flow-group', 'data-node':'boundary' }));
  nodes.append(tag((X.outer0 + X.outer1) / 2, Y.outerTop - 14, 'system-ASK'));

  /* ===== inner realization field — a STRUCTURAL FRAME, therefore NEUTRAL.
     It bounds where realization happens; it is not itself the executive function.
     Drawn as a path with ONE deliberate gap: the left edge breaks where domain authority
     straddles it, so the boundary meets that box instead of running through its labels. ===== */
  const FR = 14, GAP0 = Y.rowD, GAP1 = Y.rowD + NH;
  nodes.append(el('path', { class:'flow-group', fill:'none', 'data-node':'field', d:
    `M ${X.field0} ${GAP1} V ${Y.fieldBot-FR} A ${FR} ${FR} 0 0 0 ${X.field0+FR} ${Y.fieldBot} H ${X.field1-FR} ` +
    `A ${FR} ${FR} 0 0 0 ${X.field1} ${Y.fieldBot-FR} V ${Y.fieldTop+FR} A ${FR} ${FR} 0 0 0 ${X.field1-FR} ${Y.fieldTop} ` +
    `H ${X.field0+FR} A ${FR} ${FR} 0 0 0 ${X.field0} ${Y.fieldTop+FR} V ${GAP0}` }));

  /* ===== human ASK — the OCCUPYING ACTOR. A NEUTRAL envelope, inside the outer boundary and
     OUTSIDE the field: P1 SPINE-1b, a geometric claim, not a caption. It holds two roles. ===== */
  nodes.append(el('rect', { x:X.env, y:ENV.top, width:X.envW, height:ENV.bot - ENV.top, rx:10, ry:10, class:'flow-group actor-envelope', 'data-node':'envelope' }));
  nodes.append(lbl(X.role, ENV.top + 24, 'human ASK'));
  nodes.append(note(X.role, ENV.top + 42, 'occupying actor  ·  more than one role'));

  /* ROLE 1 — the source-of-intent role at the apex. LEGISLATIVE (CONSTITUTIVE). Its center
     is the grant rail's height, so the grant leaves it directly. */
  nodes.append(box(X.role, ROLE_Y, NW, NH, 'node-box fn-leg', 4, { 'data-node':'ordinary', 'data-col':'c1' }));
  nodes.append(lbl(X.role + 18, ROLE_Y + 26, 'source-of-intent role'));
  nodes.append(note(X.role + 18, ROLE_Y + 46, 'the single normative apex', 'start', 'on-role'));
  nodes.append(note(X.role + 18, ROLE_Y + 62, 'membership without derivability', 'start', 'on-role'));

  /* ROLE 2 — the adjudication gate, attached to the apex role, not a second authority
     center. JUDICIAL. */
  edges.append(line(`M ${X.ev} ${ROLE_Y + NH} L ${X.ev} ${GATE_Y}`, 'edge e-auth', 'apex-gate attachment'));
  nodes.append(box(X.role, GATE_Y, NW, NH, 'node-box fn-jud', 4, { 'data-node':'ordinary', 'data-col':'c1' }));
  nodes.append(lbl(X.role + 18, GATE_Y + 26, 'adjudication gate'));
  nodes.append(note(X.role + 18, GATE_Y + 46, 'evidence reaches ASK', 'start', 'on-role'));
  nodes.append(note(X.role + 18, GATE_Y + 62, 'THROUGH the gate, as input', 'start', 'on-role'));

  /* ===== ordinary nodes — one size, placed on the column grid ===== */
  const node = (col, x, y, label, notes, cls='node-box') => {
    nodes.append(box(x, y, NW, NH, cls, 4, { 'data-node':'ordinary', 'data-col':col }));
    nodes.append(lbl(x + 18, y + 26, label));
    const onRole = /fn-/.test(cls) ? 'on-role' : '';
    notes.forEach((t, i) => nodes.append(note(x + 18, y + (i ? 62 : 46), t, 'start', onRole)));
  };

  /* ===== RAILS — two relations, which must not be drawn as one. ===== */
  node('c2', X.c2, Y.rowA, 'method-ASK',      ['explains  ·  portable primitives']);
  node('c3', X.c3, Y.rowA, 'control-surface', ['operates  ·  execution protocol']);

  /* DESIGN RAIL — vertical, CROSSING the chain rather than extending it. A cross-cutting
     axis, not an ordinary node: it spans rows A–E. */
  const RAIL_BOT = Y.rowE + NH;
  nodes.append(box(X.rail, Y.rowA, X.railW, RAIL_BOT - Y.rowA, 'node-box', 4, { 'data-node':'rail' }));
  nodes.append(lbl(X.rail + 16, Y.rowA + 28, 'design-'));
  nodes.append(lbl(X.rail + 16, Y.rowA + 46, 'system-ASK'));
  nodes.append(note(X.rail + 16, Y.rowA + 68, 'expresses'));
  nodes.append(note(X.rail + 16, Y.rowA + 96, 'foundations'));
  nodes.append(note(X.rail + 16, Y.rowA + 112, 'scaffolds'));
  nodes.append(note(X.rail + 16, Y.rowA + 128, 'surface patterns'));
  nodes.append(note(X.rail + 16, Y.rowA + 156, 'three kinds,'));
  nodes.append(note(X.rail + 16, Y.rowA + 172, 'and only three'));
  nodes.append(note(X.rail + 16, RAIL_BOT - 58, 'a CROSS-CUTTING'));
  nodes.append(note(X.rail + 16, RAIL_BOT - 42, 'visual-inheritance'));
  nodes.append(note(X.rail + 16, RAIL_BOT - 26, 'axis — not a rung'));

  /* ===== FIELD MEMBERS ===== */
  node('c2', X.c2, Y.rowB, 'advisor', ['reviews, does not write']);
  node('c2', X.c2, Y.rowC, 'critic',  ['fresh-context challenge']);

  /* EXECUTOR + nested delegation — not sub-apexes.
     EXECUTIVE on the chamber. The chamber's executive treatment marks REALIZATION UNDER THE
     RULE: as that function it authors no rule and judges no result. It does not exhaust what
     the occupying executor may do — deriving the task intent under its grant is delegated
     legislation, and verifying returns and selecting locally within the grant are judicial
     acts (normative-apex.md §Three Functions bridge; §Delegation). The figure colors the
     function the chamber performs, not the whole of its occupant.
     LEGISLATIVE on the execution grant that opens inside it: the grant is DELEGATED apparatus
     carrying the standard into operative scope. The aperture it produces is a permission, not
     apparatus, and is not colored. Inside the grant, the derived task intent is a further
     delegated narrowing — geometry, not a second fill — and the REALIZATION span is cut out of
     the grant's fill and carries the executive treatment, so no realization label sits on
     legislative fill.
     Each level is an even-odd path with the next level CUT OUT of it, so no two role washes
     ever stack into a lighter one: the owner's contract carries field-vs-object in geometry
     and negative space, never in stacked opacity. The chamber keeps the column's edges; only
     its height differs from an ordinary node. */
  const rr = (x, y, w, h, r) =>
    `M ${x+r} ${y} H ${x+w-r} A ${r} ${r} 0 0 1 ${x+w} ${y+r} V ${y+h-r} ` +
    `A ${r} ${r} 0 0 1 ${x+w-r} ${y+h} H ${x+r} A ${r} ${r} 0 0 1 ${x} ${y+h-r} ` +
    `V ${y+r} A ${r} ${r} 0 0 1 ${x+r} ${y} Z`;
  const EX = Y.rowB, EXB = Y.rowB + EXH;
  const EN = EX + (EXH - 180) / 2;                  // the nest's reference top: centered in added height
  const GX = X.c3 + 22, GW = NW - 44;               // grant frame: 886..1106
  const IX = GX + 20, IW = GW - 40;                 // derived-intent frame: 906..1086
  const RX = IX + 20, RW = IW - 40;                 // realization span: 926..1066
  nodes.append(el('path', { class:'node-box fn-exe', 'fill-rule':'evenodd', 'data-node':'chamber', 'data-col':'c3',
                            d: rr(X.c3, EX, NW, EXH, 8) + ' ' + rr(GX, EN + 52, GW, 112, 6) }));
  nodes.append(lbl(X.c3 + 18, EX + 24, 'executor'));
  nodes.append(note(X.c3 + 18, EX + 42, 'plans + mutates  ·  single-writer', 'start', 'on-role'));
  nodes.append(el('path', { class:'flow-group fn-leg', 'fill-rule':'evenodd', 'data-node':'grant',
                            d: rr(GX, EN + 52, GW, 112, 6) + ' ' + rr(RX, EN + 92, RW, 34, 4) }));
  nodes.append(el('rect', { x:IX, y:EN + 72, width:IW, height:74, rx:5, ry:5, class:'flow-group', 'data-node':'intent' }));
  nodes.append(el('rect', { x:RX, y:EN + 92, width:RW, height:34, rx:4, ry:4, class:'node-box fn-exe', 'data-node':'realization' }));
  /* Each nested label is centered in ITS OWN band, between the rect it names and the next
     rect inside it. */
  nodes.append(note(GX + 10, EN + 63, 'execution grant', 'start', 'on-role'));
  nodes.append(note(IX + 10, EN + 83, 'derived task intent', 'start', 'on-role'));
  nodes.append(note(RX + 10, EN + 110, 'realization', 'start', 'on-role'));

  /* DOMAIN AUTHORITY — straddles the field boundary. TWO axes, drawn separately. It is an
     ordinary node, the same size as project cells, on the same row. */
  node('da', X.da, Y.rowD, 'domain authority', ['externality: DECLARED', 'by its position, per engagement']);
  edges.append(line(`M ${X.da + NW} ${Y.rowD + NH - 12} L ${X.c3 - 8} ${Y.rowD + NH - 12}`, 'edge e-auth', 'binding scope'));
  edges.append(headR(X.c3 - 4, Y.rowD + NH - 12));
  nodes.append(note(X.da + NW + 16, Y.rowD + NH - 26, 'binding scope'));

  node('c3', X.c3, Y.rowD, 'project cells', ['domain truth + pressure', 'INSIDE the field']);

  /* RIGHT COLUMN — one judicial act, then two NEUTRAL downstream objects.
     Disposition is JUDICIAL: it evaluates, selects, ratifies and closes. Artifact
     governance and the governed artifact are DOWNSTREAM of that closure and outside the
     three-function palette — carrying judicial cyan up into governance would imply
     selection = governance. The break in color here is the claim. */
  node('c4', X.c4, Y.rowA, 'disposition', ['the learning circuit terminates HERE'], 'node-box fn-jud');
  node('c4', X.c4, Y.rowB, 'artifact governance', ['binds the accepted result']);
  node('c4', X.c4, Y.rowC, 'governed artifact', ['+ record']);

  /* PUBLIC SURFACES — inside the field, at its outer edge. */
  node('c4', X.c4, Y.rowD, 'public expression', ['renders + articulates', 'INSIDE the field']);
  node('c4', X.c4, Y.rowE, 'public context scaffold', ['inside the field, wall-safe side']);

  /* ===== MEMBRANE — a GATED crossing, not a plain boundary. ===== */
  /* The enforced grant is an ORDINARY NODE on the membrane: the one size, in the right-hand column, under the public
     context scaffold whose inheritance edge enters it. Delegated legislative apparatus, like the execution grant;
     its label is a box heading on the theme foreground, as on every role-bearing ordinary node. It carries one line and no
     note, so the label is centered in the box, both ways, rather than set at the heading position. Its ink runs about 5.8
     units above its middle anchor and 7.3 below it (the g's descender), so the anchor sits 0.7 above the box's center. */
  const GRANT_Y = Y.membrane - NH/2;
  /* The wall line spans the system boundary's width. It is schematic: its length measures no grant's reach. An enforced
     grant confines one named surface to its granted subtree, and only there is the wall structural. */
  edges.append(line(`M ${X.outer0} ${Y.membrane} L ${X.c4} ${Y.membrane}`, 'edge e-membrane', 'membrane'));
  edges.append(line(`M ${X.c4 + NW} ${Y.membrane} L ${X.outer1} ${Y.membrane}`, 'edge e-membrane', 'membrane'));
  nodes.append(box(X.c4, GRANT_Y, NW, NH, 'node-box fn-leg', 4, { 'data-node':'ordinary', 'data-col':'c4', 'data-role':'enforced-grant' }));
  nodes.append(lbl(CX.c4, Y.membrane - 0.7, 'enforced grant', 'node-label', 'middle'));
  nodes.append(note(X.c2, Y.perimNote, 'private context perimeter  —  folder separation DEFINES the boundary and makes it AUDITABLE'));
  nodes.append(note(X.c2, Y.memNote, 'schematic wall, not a measure of reach  ·  an enforced grant confines ONE named surface to its granted subtree, and only there is the wall structural  ·  NO edge crosses into the private side'));

  /* ===========================================================================
     EDGES — each routed in the lane or gutter reserved for it above.
     =========================================================================== */

  /* AUTHORITY — the grant leaves the source-of-intent role at its center height and descends
     INTO the field, into the chamber's top. */
  edges.append(line(`M ${X.role + NW} ${Y.grantRail} L ${CX.c3} ${Y.grantRail} L ${CX.c3} ${Y.rowB - 4}`, 'edge e-auth', 'execution grant'));
  edges.append(headD(CX.c3, Y.rowB));
  nodes.append(note(X.c2 + 20, Y.grantLabel, 'execution grant  ·  authority descends'));

  /* AUTHORITY — the ordered chain, rung 1 >> rung 2. Enters the rung's left side, upper. */
  edges.append(line(`M ${X.c2 + NW} ${Y.rowA + 22} L ${X.c3 - 8} ${Y.rowA + 22}`, 'edge e-auth', 'ordered chain 1-2'));
  edges.append(headR(X.c3 - 4, Y.rowA + 22));

  /* AUTHORITY — rung 2 >> rung 3. THE THIRD RUNG IS PROJECT CELLS. It leaves control-surface's
     left side, lower, takes the gutter beside the chamber, and enters project cells' left side,
     upper: two purposeful turns, a bracket, not a staircase. It crosses the execution-grant
     rail once, perpendicularly, mid-segment and far from either terminal — a crossing, not a
     junction — and the relay line, which is dashed. */
  edges.append(line(`M ${X.c3} ${Y.rowA + NH - 14} L ${X.desc} ${Y.rowA + NH - 14} L ${X.desc} ${Y.rowD + 16} L ${X.c3 - 8} ${Y.rowD + 16}`, 'edge e-auth', 'ordered chain 2-3'));
  edges.append(headR(X.c3 - 4, Y.rowD + 16));
  nodes.append(note(X.desc + 10, Y.laneLabel, 'ordered authority'));

  /* CONFORMANCE — the reverse axis. The execution protocol runs from control-surface back to method-ASK, which, as a
     repository, consumes it: a rectangular U under the two rungs, down from control-surface's bottom edge, along the lane
     and up into method-ASK's bottom edge, where a HOLLOW head marks the consumer. Different dash cadence AND terminal form
     from inheritance. The label sits beside the U's first leg. */
  edges.append(line(`M ${X.c3 + 96} ${Y.rowA + NH} L ${X.c3 + 96} ${Y.confRun} L ${CX.c2} ${Y.confRun} L ${CX.c2} ${Y.rowA + NH + AH}`, 'edge e-conform', 'conformance'));
  edges.append(hollowU(CX.c2, Y.rowA + NH));
  nodes.append(note(X.c3 + 112, Y.confLabel, 'conformance — the method REPO consumes the protocol'));

  /* MUTATION CHANNEL — exactly one. */
  edges.append(line(`M ${X.c3 + NW} ${Y.rowB + 22} L ${X.c4 - 8} ${Y.rowB + 22}`, 'edge e-auth', 'mutation channel'));
  edges.append(headR(X.c4 - 4, Y.rowB + 22));
  nodes.append(note(X.c3 + NW + 6, Y.mutLabel, 'ONE mutation channel'));

  /* EVIDENCE — thin, upward, OPEN heads, terminating at the GATE. The critic's return enters
     the gate's side; the project-cells return leaves the cells' bottom, takes the exterior
     gutter around domain authority, and rises into the gate from below. */
  edges.append(line(`M ${X.c2 - 4} ${Y.rowC + NH/2 + 6} L ${X.role + NW + 4} ${Y.rowC + NH/2 + 6}`, 'edge e-evidence', 'critique'));
  edges.append(openL(X.role + NW, Y.rowC + NH/2 + 6));
  edges.append(line(`M ${X.c3 + 40} ${Y.rowD + NH} L ${X.c3 + 40} ${Y.evRail} L ${X.ev} ${Y.evRail} L ${X.ev} ${GATE_Y + NH + 4}`, 'edge e-evidence', 'evidence return'));
  edges.append(openU(X.ev, GATE_Y + NH));
  nodes.append(note(X.c2, Y.evLabel, 'evidence · critique · candidate correction'));

  /* AUTHORITY — the gate's adjudicated disposition, descending. It leaves the gate on the
     envelope's inner gutter, so it passes beside the roles rather than through their labels. */
  edges.append(line(`M ${X.role} ${GATE_Y + 16} L ${X.env + 32} ${GATE_Y + 16} L ${X.env + 32} ${Y.dispRail} L ${CX.c4} ${Y.dispRail} L ${CX.c4} ${Y.rowA - 4}`, 'edge e-auth', 'disposition'));
  edges.append(headD(CX.c4, Y.rowA));
  nodes.append(note(770, Y.dispRail - 12, 'ASK adjudicates  ·  authorized disposition descends'));

  /* LEARNING — two exits from the disposition. */
  edges.append(line(`M ${CX.c4} ${Y.rowA + NH} L ${CX.c4} ${Y.rowB - 4}`, 'edge e-auth', 'durable owner'));
  edges.append(headD(CX.c4, Y.rowB));
  nodes.append(note(CX.c4 + 10, Y.grantLabel - 6, 'to the correct durable owner'));
  edges.append(line(`M ${X.c4 + NW} ${Y.rowA + NH/2} L ${X.c4 + NW + 60} ${Y.rowA + NH/2} L ${X.c4 + NW + 60} ${Y.dispRail + 12}`, 'edge e-auth', 'nomination'));
  edges.append(headU(X.c4 + NW + 60, Y.dispRail + 8));
  nodes.append(note(X.c4 + 164, Y.dispRail - 12, 'nomination · hold ·'));
  nodes.append(note(X.c4 + 164, Y.dispRail + 6, 'no retention'));

  /* RELAY — cross-surface transfer through ASK: a gated break carrying a marker. The marker
     sits left of the descent gutter, so the crossing there is a crossing of two plain lines. */
  const RY = Y.rowB + NH/2 + 2;
  edges.append(line(`M ${X.c2 + NW} ${RY} L ${X.c2 + NW + 20} ${RY}`, 'edge e-relay', 'relay'));
  edges.append(relayMark(X.c2 + NW + 30, RY));
  edges.append(line(`M ${X.c2 + NW + 40} ${RY} L ${X.c3 - 8} ${RY}`, 'edge e-relay', 'relay'));
  edges.append(headR(X.c3 - 4, RY));
  nodes.append(note(X.c2 + 154, Y.rowB + NH + 20, 'relay through ASK'));

  /* POINTER — the continuity rail, returning to the field entry. */
  edges.append(line(`M ${CX.c4} ${Y.rowC + NH} L ${CX.c4} ${Y.ptrRail} L ${CX.c3} ${Y.ptrRail} L ${CX.c3} ${EXB + 4}`, 'edge e-pointer', 'continuity'));
  edges.append(headU(CX.c3, EXB));
  nodes.append(note(CX.c3 + 14, Y.ptrLabel, 'continuity  ·  fresh context >> bootstrap + index >> named owners >> current work >> lineage'));

  /* INHERITANCE — the design axis reaching its named consumers, and the scaffold's edge to
     the membrane. PINNED, NEVER HOT-LINKED; no universal byte-identity is asserted. */
  edges.append(line(`M ${X.rail - 4} ${Y.rowD + NH/2 + 2} L ${X.c4 + NW + 4} ${Y.rowD + NH/2 + 2}`, 'edge e-inherit', 'design axis'));
  edges.append(headL(X.c4 + NW, Y.rowD + NH/2 + 2));
  edges.append(line(`M ${X.rail - 4} ${Y.routesRail} L ${X.c3 + 190} ${Y.routesRail} L ${X.c3 + 190} ${Y.rowD + NH + 4}`, 'edge e-inherit', 'owner-declared routes'));
  edges.append(headU(X.c3 + 190, Y.rowD + NH));
  nodes.append(note(X.c3 + NW + 6, Y.routesLabel, 'owner-declared routes  ·  pinned, never hot-linked'));
  edges.append(line(`M ${CX.c4} ${Y.rowE + NH} L ${CX.c4} ${GRANT_Y - 4}`, 'edge e-inherit', 'scaffold to membrane'));
  edges.append(headD(CX.c4, GRANT_Y));

  /* ===== the figure's core non-identity, stated on the canvas — bottom band ===== */
  nodes.append(sect(X.c2, Y.cap1, 'evidence return  !=  authority ascent   —   upward edges are visibly weaker, carry open heads, and terminate at the gate', 'start'));
  nodes.append(sect(X.c2, Y.cap2, 'ecology-ASK  ·  bounded realization field  —  membership is FUNCTIONAL, not architectural', 'start'));

  /* ===== production circuit, named along the field ===== */
  nodes.append(sect(X.c3 + 20, Y.prodTag, 'production  ·  intent / aperture >> authorized realization >> selection + closure >> governance', 'start'));

  /* ===========================================================================
     KEY — both keys are drawn INSIDE the SVG, in one aligned grid below the membrane.

     Why here. (1) It must be visible in the live HTML and in BOTH page exports; SVG content
     is the only surface all three share. (2) A key drawn from the SAME classes as the
     apparatus cannot drift from it: each chip and each line sample below is literally the
     treatment it names. At source-v1 the edge grammar sat in an HTML legend panel whose line
     samples were inline SVG; the exporter rebuilds that panel from box swatches, so the
     committed raster showed six class names and no line to match them. (3) With no corner
     legend panel, the page export's panel band is the caption's.

     Row 1 names the three functions. Then the owner's form for what is NOT a function: a
     dotted, legend-only divider, and ONE neutral exemplar under its own heading — naming the
     human ASK actor envelope and the downstream governance objects; those exclusions are the
     load-bearing part of the binding, and they are never a fourth color. Rows 3-4 name the
     six edge classes; each sample is long enough to show its dash cadence and carries the
     terminal the figure uses.
     =========================================================================== */
  const COL = [180, 800, 1280], CHIP_W = 22, CHIP_H = 12;
  edges.append(line(`M ${X.outer0} ${Y.keyRule} L ${X.outer1} ${Y.keyRule}`, 'section-rule'));
  /* One label column per key column: chip rows and edge rows both start their text at COL + 64,
     and a chip sits centered on the 56-unit span the line samples occupy. */
  const chip = (x, y, cls) => nodes.append(el('rect', { x: x + 28 - CHIP_W/2, y: y - CHIP_H/2, width: CHIP_W, height: CHIP_H, rx: 3, ry: 3, class: cls }));
  const chipEntry = (c, y, cls, label) => { chip(COL[c], y, cls); nodes.append(note(COL[c] + 64, y, label)); };
  const edgeEntry = (c, y, draw, label) => { draw(COL[c], y); nodes.append(note(COL[c] + 64, y, label)); };
  const [K1, K2, K3, K4] = Y.key;

  nodes.append(sect(X.outer0, K1, 'three functions', 'start'));
  chipEntry(0, K1, 'node-box fn-leg', 'legislative — source-of-intent role (constitutive) · grants (delegated)');
  chipEntry(1, K1, 'node-box fn-exe', 'executive — executor · realization');
  chipEntry(2, K1, 'node-box fn-jud', 'judicial — adjudication / disposition');

  /* the owner's dotted, legend-only divider: the three functions above it, the one neutral
     exemplar below it */
  edges.append(line(`M ${X.outer0} ${Y.keyDivider} L ${X.outer1} ${Y.keyDivider}`, 'key-divider'));
  nodes.append(sect(X.outer0, K2, 'not a fourth function', 'start'));
  chipEntry(0, K2, 'node-box', 'NEUTRAL — the human ASK actor envelope · artifact governance · governed artifact');

  nodes.append(sect(X.outer0, K3, 'edge grammar', 'start'));
  edgeEntry(0, K3, (x, y) => { edges.append(line(`M ${x} ${y} L ${x+47} ${y}`, 'edge e-auth')); edges.append(headR(x+56, y)); },
    'authority — intent · grant · adjudication');
  edgeEntry(1, K3, (x, y) => { edges.append(line(`M ${x} ${y} L ${x+47} ${y}`, 'edge e-inherit')); edges.append(headR(x+56, y)); },
    'inheritance — vendoring, pinned, never hot-linked');
  edgeEntry(2, K3, (x, y) => { edges.append(line(`M ${x} ${y} L ${x+47} ${y}`, 'edge e-conform')); edges.append(hollowR(x+56, y)); },
    'conformance — control-surface protocol >> method-ASK repo · HOLLOW head');
  edgeEntry(0, K4, (x, y) => { edges.append(line(`M ${x+1} ${y} L ${x+56} ${y}`, 'edge e-evidence')); edges.append(openL(x, y)); },
    'evidence — pressure · critique · OPEN head, never filled');
  edgeEntry(1, K4, (x, y) => { edges.append(line(`M ${x} ${y} L ${x+20} ${y}`, 'edge e-relay')); edges.append(relayMark(x+26, y));
                               edges.append(line(`M ${x+32} ${y} L ${x+47} ${y}`, 'edge e-relay')); edges.append(headR(x+56, y)); },
    'relay — cross-surface transfer through ASK · gated break');
  edgeEntry(2, K4, (x, y) => { edges.append(line(`M ${x} ${y} L ${x+47} ${y}`, 'edge e-pointer')); edges.append(headR(x+56, y)); },
    'pointer — live state resolving to its owner');

  /* ===== the viewBox: the drawn content plus a uniform margin, so the export frames the drawing rather than the
     fixed canvas — widened only as PAGE EXPORT, below, describes ===== */
  /* PAGE EXPORT. The DS exporter (export-png.js, unchanged) scales a landscape figure to the page's content width,
     3760 px, and places it below the caption panel only while its scaled height fits the 2128 px band beneath the
     panel (page y 656..2784); otherwise it centers the figure in the full band, where the caption panel covers the
     figure's top-left. For a figure of height H units, 2128 / H px per unit is therefore the largest scale that
     keeps it below the caption, whatever its width. When the drawn content is taller than that band allows at its
     own width, the VIEWBOX — not the drawing — is widened, evenly on both sides and with nothing drawn in the added
     margin, to the width at which the exporter takes its below-caption branch with 4 px to spare. The width selects
     the placement; the height sets the scale. The two constants are the exporter's page geometry for this page's
     current caption panel (band top 656 = overlay 288 + panel 320 + gutter 48; band bottom 2784): a change to the
     caption text or its fonts, or to the exporter's page geometry, moves them. The page export is measured, not
     assumed, and is re-measured whenever any of those changes. */
  const VB_PAD = 12, EXPORT_CONTENT_W = 3760, EXPORT_BELOW_CAPTION_H = 2124;
  const bb = svg.getBBox();
  const vbY = Math.floor(bb.y - VB_PAD), vbH = Math.ceil(bb.height + 2*VB_PAD);
  let vbX = Math.floor(bb.x - VB_PAD), vbW = Math.ceil(bb.width + 2*VB_PAD);
  const exportW = Math.ceil(vbH * EXPORT_CONTENT_W / EXPORT_BELOW_CAPTION_H);
  if (vbW < exportW) { vbX -= Math.floor((exportW - vbW) / 2); vbW = exportW; }
  svg.setAttribute('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`);
  svg.setAttribute('width', vbW);
  svg.setAttribute('height', vbH);

  /* ---- pan / zoom / fit (interaction is local; FIT is DS-owned) ---- */
  const wrap = document.getElementById('canvasWrap'), stage = document.getElementById('stage'), pct = document.getElementById('zoomPct');
  if (wrap && stage) {
    let tx=0, ty=0, sc=1;
    const BASE_MIN_SCALE = 0.2;
    let fittedMinScale = BASE_MIN_SCALE;
    const apply = () => { stage.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`; if (pct) pct.textContent = Math.round(sc*100)+'%'; };
    const fit = () => {
      const f = window.DIAGRAM_FIT.compute({
        wrap,
        bounds: { minX: 0, minY: 0, maxX: vbW, maxY: vbH },
        clearanceX: 90, clearanceY: 90, maxScale: 1.3, gutter: 26
      });
      fittedMinScale = Math.min(BASE_MIN_SCALE, f.scale);
      sc = f.scale; tx = f.tx; ty = f.ty; apply();
    };
    /* Refit once the webfonts land: the DS helper measures the LIVE caption and HUD
       rectangles, and those change size across the font swap. */
    fit();
    const fonts = document.fonts;
    if (fonts && fonts.ready && typeof fonts.ready.then === 'function') {
      fonts.ready.then(fit).catch(() => {});
    }
    window.addEventListener('resize', fit);
    const zi=document.getElementById('zoomIn'), zo=document.getElementById('zoomOut'), zf=document.getElementById('zoomFit');
    if (zi) zi.onclick=()=>{sc=Math.min(sc*1.2,4);apply();};
    if (zo) zo.onclick=()=>{sc=Math.max(sc/1.2,fittedMinScale);apply();};
    if (zf) zf.onclick=fit;
    let dragging=false, px0=0, py0=0, tx0=0, ty0=0;
    wrap.addEventListener('pointerdown', (ev)=>{ if (ev.target.closest('.hud, .legend, .caption')) return;
      dragging=true; wrap.classList.add('dragging'); wrap.setPointerCapture(ev.pointerId); px0=ev.clientX; py0=ev.clientY; tx0=tx; ty0=ty; });
    wrap.addEventListener('pointermove', (ev)=>{ if(!dragging) return; tx=tx0+(ev.clientX-px0); ty=ty0+(ev.clientY-py0); apply(); });
    const endDrag=()=>{ dragging=false; wrap.classList.remove('dragging'); };
    wrap.addEventListener('pointerup', endDrag); wrap.addEventListener('pointercancel', endDrag);
    wrap.addEventListener('wheel', (ev)=>{ ev.preventDefault(); const r=wrap.getBoundingClientRect(), mx=ev.clientX-r.left, my=ev.clientY-r.top;
      const ns=Math.max(fittedMinScale, Math.min(4, sc*(ev.deltaY>0 ? 1/1.1 : 1.1))), k=ns/sc; tx=mx-(mx-tx)*k; ty=my-(my-ty)*k; sc=ns; apply(); }, { passive:false });
  }
})();
