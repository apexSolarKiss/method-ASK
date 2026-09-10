/* method-ASK_system-ASK-hero.figure.js — D11 // system-ASK causal orientation (source-v1, ASK 2026-09-09)
   Bespoke one-off method figure. Projects the accepted P1 v5 claim set as published in
   examples/system-ASK.md. Consumes design-system-ASK Three Functions by reference
   (_dsa-tokens/three-functions.css) at the owner's 30% role-fill + full role-stroke contract,
   on FUNCTION-BEARING APPARATUS ONLY:
     legislative  the execution grant / aperture, and the enforced path-scoped grant
     executive    the executor — the bounded realization chamber
     judicial     the adjudication gate, and disposition
   Everything else is NEUTRAL, and the exclusions are load-bearing. The source-of-intent apex
   takes no role color: coloring it legislative would collapse source of intent into the
   legislative function. Artifact governance and the governed artifact take no role color:
   carrying judicial cyan up into governance would imply selection = governance. Project
   cells, public surfaces, and the structural frames and edges are neutral for the same
   reason — they are the structure the functions act within, not functions.
   Structure, not state — Spectral State is deliberately NOT used. */
(function () {
  /* FAIL CLOSED BEFORE ANY LAYOUT. diagrams-fit.js is a DS-owned support file vendored
     alongside this figure and loaded immediately BEFORE it. Checked here so a missing helper
     stops the builder before the SVG exists, rather than leaving a half-built artifact whose
     failure has to be inferred. */
  if (!window.DIAGRAM_FIT || typeof window.DIAGRAM_FIT.compute !== 'function') {
    throw new Error('Diagram fit support is missing. Load diagrams-fit.js before the figure builder.');
  }

  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 1820, H = 860;
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
     axes, dash cadence AND terminal form, and are separable without the legend.
     --------------------------------------------------------------------------- */
  const AH = 9;
  const headR = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH} ${y-AH/1.6} L ${x-AH} ${y+AH/1.6} L ${x} ${y} Z` });
  const headL = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x+AH} ${y-AH/1.6} L ${x+AH} ${y+AH/1.6} L ${x} ${y} Z` });
  const headD = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH/1.6} ${y-AH} L ${x+AH/1.6} ${y-AH} L ${x} ${y} Z` });
  const headU = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH/1.6} ${y+AH} L ${x+AH/1.6} ${y+AH} L ${x} ${y} Z` });
  /* EVIDENCE terminal — OPEN chevron, never filled. The visual weight difference between
     this and a filled authority head is the figure's core non-identity. */
  const openL = (x, y) => el('path', { class: 'edge e-evidence', fill: 'none', d: `M ${x+11} ${y-6} L ${x} ${y} L ${x+11} ${y+6}` });
  const openU = (x, y) => el('path', { class: 'edge e-evidence', fill: 'none', d: `M ${x-6} ${y+11} L ${x} ${y} L ${x+6} ${y+11}` });
  /* CONFORMANCE terminal — an open ring, not an arrowhead. */
  const ringT = (x, y) => el('circle', { cx: x, cy: y, r: 4.6, class: 'edge e-conform', fill: 'none' });
  /* RELAY marker — a small square sitting in the break. */
  const relayMark = (x, y) => el('rect', { x: x-5, y: y-5, width: 10, height: 10, class: 'edge e-relay-mark' });

  const box  = (x, y, w, h, cls='node-box', rx=4) => el('rect', { x, y, width:w, height:h, rx, ry:rx, class:cls });
  const line = (d, cls='edge') => el('path', { class:cls, fill:'none', d });
  const lbl  = (x, y, t, cls='node-label', a='start') => el('text', { x, y, class:cls, 'text-anchor':a }, [t]);
  const note = (x, y, t, a='start', extra='') => el('text', { x, y, class:'node-note'+(extra?' '+extra:''), 'text-anchor':a }, [t]);
  const tag  = (x, y, t, a='middle') => el('text', { x, y, class:'flow-tag', 'text-anchor':a }, [t]);
  const sect = (x, y, t, a='middle') => el('text', { x, y, class:'section-tag', 'text-anchor':a }, [t]);

  /* ===== outer system boundary ===== */
  nodes.append(el('rect', { x:44, y:56, width:1730, height:648, rx:16, ry:16, class:'flow-group' }));
  nodes.append(tag(909, 42, 'system-ASK'));

  /* ===== inner realization field — a STRUCTURAL FRAME, therefore NEUTRAL.
     It bounds where realization happens; it is not itself the executive function.
     Executive attaches to the executor chamber below, not to the frame around it. ===== */
  nodes.append(el('rect', { x:350, y:110, width:1310, height:550, rx:14, ry:14, class:'flow-group' }));

  /* ===== APEX — inside the outer boundary, OUTSIDE the field. NEUTRAL: source of
     intent is not one of the three functions, and coloring it legislative would
     collapse source of intent INTO the legislative function. The apex authorizes the
     grant; the grant, not the apex, is the legislative apparatus.
     This placement is P1 SPINE-1b and is a geometric claim, not a caption. ===== */
  nodes.append(box(100, 250, 224, 72));
  nodes.append(lbl(118, 278, 'human ASK'));
  nodes.append(note(118, 298, 'the single normative apex'));
  nodes.append(note(118, 314, 'membership without derivability'));

  /* ===== GATE — attached to the apex, not a second authority centre. JUDICIAL. ===== */
  edges.append(line('M 212 322 L 212 346', 'edge e-auth'));
  nodes.append(box(100, 350, 224, 68, 'node-box fn-jud'));
  nodes.append(lbl(118, 378, 'adjudication gate'));
  nodes.append(note(118, 396, 'evidence reaches ASK', 'start', 'on-role'));
  nodes.append(note(118, 410, 'THROUGH the gate, as input', 'start', 'on-role'));

  /* ===== RAILS — two relations, which must not be drawn as one. ===== */
  nodes.append(box(390, 138, 246, 56));
  nodes.append(lbl(408, 164, 'method-ASK'));
  nodes.append(note(408, 184, 'explains  ·  portable primitives'));

  nodes.append(box(700, 138, 246, 56));
  nodes.append(lbl(718, 164, 'control-surface'));
  nodes.append(note(718, 184, 'operates  ·  execution protocol'));

  /* DESIGN RAIL — vertical, CROSSING the chain rather than extending it. */
  nodes.append(box(1480, 138, 140, 468));
  nodes.append(lbl(1496, 166, 'design-'));
  nodes.append(lbl(1496, 184, 'system-ASK'));
  nodes.append(note(1496, 206, 'expresses'));
  nodes.append(note(1496, 234, 'foundations'));
  nodes.append(note(1496, 250, 'scaffolds'));
  nodes.append(note(1496, 266, 'surface patterns'));
  nodes.append(note(1496, 294, 'three kinds,'));
  nodes.append(note(1496, 310, 'and only three'));
  nodes.append(note(1496, 552, 'a CROSS-CUTTING'));
  nodes.append(note(1496, 568, 'visual-inheritance'));
  nodes.append(note(1496, 584, 'axis — not a rung'));

  /* ===== FIELD MEMBERS ===== */
  nodes.append(box(390, 240, 210, 62));
  nodes.append(lbl(408, 264, 'advisor'));
  nodes.append(note(408, 284, 'reviews, does not write'));

  nodes.append(box(390, 330, 210, 62));
  nodes.append(lbl(408, 354, 'critic'));
  nodes.append(note(408, 374, 'fresh-context challenge'));

  /* EXECUTOR + nested apertures — delegation, not sub-apexes.
     EXECUTIVE on the chamber: the executor realizes under the grant, authors no rule and
     judges no result. LEGISLATIVE on the execution grant that opens inside it: the grant IS
     the aperture, and the aperture is the legislative apparatus. The two inner rects are the
     narrowing itself — geometry, not a second role fill; the owner's contract carries
     field-vs-object in geometry and negative space, never in stacked opacity. */
  /* The chamber is drawn as an even-odd path with the grant CUT OUT of it, so the executive
     wash and the legislative fill never stack. Two 30% washes on top of each other would
     read as one lighter 51% wash and would carry the nesting in OPACITY — which is exactly
     what the owner's contract refuses: field-vs-object is carried by geometry and negative
     space. Cut out, each role renders at the 30% the owner specifies, and the labels inside
     the aperture keep a dark enough ground to stay legible on the dark field. */
  const rr = (x, y, w, h, r) =>
    `M ${x+r} ${y} H ${x+w-r} A ${r} ${r} 0 0 1 ${x+w} ${y+r} V ${y+h-r} ` +
    `A ${r} ${r} 0 0 1 ${x+w-r} ${y+h} H ${x+r} A ${r} ${r} 0 0 1 ${x} ${y+h-r} ` +
    `V ${y+r} A ${r} ${r} 0 0 1 ${x+r} ${y} Z`;
  nodes.append(el('path', { class:'node-box fn-exe', 'fill-rule':'evenodd',
                            d: rr(700, 240, 320, 180, 8) + ' ' + rr(726, 292, 268, 112, 6) }));
  nodes.append(lbl(718, 264, 'executor'));
  nodes.append(note(718, 282, 'plans + mutates  ·  single-writer', 'start', 'on-role'));
  nodes.append(el('rect', { x:726, y:292, width:268, height:112, rx:6, ry:6, class:'flow-group fn-leg' }));
  nodes.append(el('rect', { x:748, y:312, width:224, height:74, rx:5, ry:5, class:'flow-group' }));
  nodes.append(el('rect', { x:770, y:332, width:180, height:34, rx:4, ry:4, class:'flow-group' }));
  /* Each aperture label is centred in ITS OWN band, between the rect it names and the next
     rect inside it. At the prior y-values the 10px glyph box crossed the inner edge by 1.4px
     — a rule struck through the descenders, which the legislative fill now makes visible. */
  nodes.append(note(736, 303, 'execution grant', 'start', 'on-role'));
  nodes.append(note(758, 323, 'derived task intent', 'start', 'on-role'));
  nodes.append(note(780, 350, 'realization', 'start', 'on-role'));

  /* DOMAIN AUTHORITY — straddles the field boundary. TWO axes, drawn separately. */
  nodes.append(box(254, 470, 236, 80));
  nodes.append(lbl(272, 498, 'domain authority'));
  nodes.append(note(272, 518, 'externality: DECLARED'));
  nodes.append(note(272, 534, 'by its position, per engagement'));
  edges.append(line('M 494 514 L 612 514', 'edge e-auth'));
  edges.append(headR(616, 514));
  nodes.append(note(500, 502, 'binding scope'));

  nodes.append(box(620, 470, 300, 70));
  nodes.append(lbl(638, 498, 'project cells'));
  nodes.append(note(638, 518, 'domain truth + pressure'));
  nodes.append(note(638, 534, 'INSIDE the field'));

  /* RIGHT COLUMN — one judicial act, then two NEUTRAL downstream objects.
     Disposition is JUDICIAL: it evaluates, selects, ratifies and closes. Artifact
     governance and the governed artifact are DOWNSTREAM of that closure and outside the
     three-function palette — carrying judicial cyan up into governance would imply
     selection = governance. The break in color here is the claim. */
  nodes.append(box(1090, 138, 300, 56, 'node-box fn-jud'));
  nodes.append(lbl(1108, 164, 'disposition'));
  nodes.append(note(1108, 184, 'the learning circuit terminates HERE', 'start', 'on-role'));

  nodes.append(box(1090, 240, 300, 62));
  nodes.append(lbl(1108, 266, 'artifact governance'));
  nodes.append(note(1108, 286, 'binds the accepted result'));

  nodes.append(box(1090, 330, 300, 68));
  nodes.append(lbl(1108, 356, 'governed artifact'));
  nodes.append(note(1108, 376, '+ record'));

  /* PUBLIC SURFACES — inside the field, at its outer edge. */
  nodes.append(box(1090, 470, 300, 70));
  nodes.append(lbl(1108, 498, 'public expression'));
  nodes.append(note(1108, 518, 'renders + articulates'));
  nodes.append(note(1108, 534, 'INSIDE the field'));

  nodes.append(box(1090, 570, 300, 62));
  nodes.append(lbl(1108, 596, 'public context scaffold'));
  nodes.append(note(1108, 616, 'inside the field, wall-safe side'));

  /* ===== MEMBRANE — a GATED crossing, not a plain boundary. ===== */
  edges.append(line('M 660 730 L 1180 730', 'edge e-membrane'));
  edges.append(line('M 1300 730 L 1774 730', 'edge e-membrane'));
  nodes.append(el('rect', { x:1180, y:712, width:120, height:34, rx:5, ry:5, class:'node-box fn-leg' }));
  nodes.append(note(1194, 734, 'enforced grant', 'start', 'on-role'));
  /* Last line of the bottom band. At y=700 the descenders crossed the outer boundary rule;
     at y=694 they collided with the section tag above by 9px. 697 clears both. */
  nodes.append(note(660, 697, 'private context perimeter  —  folder separation DEFINES the boundary and makes it AUDITABLE'));
  nodes.append(note(660, 764, 'reach isolation holds only for a surface actually confined to the granted subtree; there it is structural'));
  nodes.append(note(660, 782, 'NO edge crosses into the private side'));

  /* ===========================================================================
     EDGES
     =========================================================================== */

  /* AUTHORITY — apex grant descending INTO the field. */
  edges.append(line('M 212 246 L 212 232 L 860 232 L 860 236', 'edge e-auth'));
  edges.append(headD(860, 240));
  nodes.append(note(356, 226, 'execution grant  ·  authority descends'));

  /* AUTHORITY — the ordered chain, rung 1 >> rung 2. */
  edges.append(line('M 640 166 L 692 166', 'edge e-auth'));
  edges.append(headR(696, 166));

  /* AUTHORITY — rung 2 >> rung 3. THE THIRD RUNG IS PROJECT CELLS. */
  edges.append(line('M 712 194 L 712 248 L 636 248 L 636 466', 'edge e-auth'));
  edges.append(headD(636, 470));
  nodes.append(note(646, 456, 'ordered authority'));

  /* CONFORMANCE — the reverse axis. Different dash cadence AND a ring terminal. */
  edges.append(line('M 513 198 C 513 220, 823 220, 823 202', 'edge e-conform'));
  edges.append(ringT(823, 198));
  nodes.append(note(652, 214, 'conformance — the method REPO consumes the protocol'));

  /* MUTATION CHANNEL — exactly one. */
  edges.append(line('M 1024 275 L 1082 275', 'edge e-auth'));
  edges.append(headR(1086, 275));
  nodes.append(note(1000, 228, 'ONE mutation channel'));

  /* EVIDENCE — thin, upward, OPEN heads, terminating at the GATE. */
  edges.append(line('M 616 460 L 348 460 L 348 392 L 334 392', 'edge e-evidence'));
  edges.append(openL(330, 392));
  edges.append(line('M 386 361 L 334 361', 'edge e-evidence'));
  edges.append(openL(330, 361));
  nodes.append(note(354, 446, 'evidence · critique · candidate correction'));

  /* AUTHORITY — the gate's adjudicated disposition, descending. */
  edges.append(line('M 140 346 L 140 84 L 1240 84 L 1240 134', 'edge e-auth'));
  edges.append(headD(1240, 138));
  nodes.append(note(700, 76, 'ASK adjudicates  ·  authorized disposition descends'));

  /* LEARNING — two exits from the disposition. */
  edges.append(line('M 1240 194 L 1240 232', 'edge e-auth'));
  edges.append(headD(1240, 236));
  nodes.append(note(1250, 218, 'to the correct durable owner'));
  edges.append(line('M 1394 166 L 1452 166 L 1452 96', 'edge e-auth'));
  edges.append(headU(1452, 92));
  /* Clear of the field's top edge: at y=108 the second line dipped 3.4px inside it. */
  nodes.append(note(1298, 84, 'nomination · hold ·'));
  nodes.append(note(1298, 100, 'no retention'));

  /* RELAY — cross-surface transfer through ASK: a gated break carrying a marker. */
  edges.append(line('M 604 275 L 640 275', 'edge e-relay'));
  edges.append(relayMark(650, 275));
  edges.append(line('M 660 275 L 692 275', 'edge e-relay'));
  edges.append(headR(696, 275));
  nodes.append(note(556, 316, 'relay through ASK'));

  /* POINTER — the continuity rail, returning to the field entry. */
  edges.append(line('M 1240 402 L 1240 440 L 860 440 L 860 424', 'edge e-pointer'));
  edges.append(headU(860, 420));
  nodes.append(note(880, 456, 'continuity  ·  fresh context >> bootstrap + index >> named owners >> current work >> lineage'));

  /* INHERITANCE — the design axis reaching its named consumers, and the scaffold's edge to
     the membrane. PINNED, NEVER HOT-LINKED; no universal byte-identity is asserted. */
  edges.append(line('M 1476 505 L 1398 505', 'edge e-inherit'));
  edges.append(headL(1394, 505));
  edges.append(line('M 1550 610 L 1550 650 L 700 650 L 700 544', 'edge e-inherit'));
  edges.append(headU(700, 540));
  nodes.append(note(742, 644, 'owner-declared routes  ·  pinned, never hot-linked'));
  edges.append(line('M 1240 636 L 1240 722', 'edge e-inherit'));
  edges.append(headD(1240, 726));

  /* ===== the figure's core non-identity, stated on the canvas ===== */
  /* Bottom band, solved: field rule 660 | 1.5 | 667 | 2 | 682 | 2 | 697 | 1.6 | boundary rule 704. */
  nodes.append(sect(1005, 667, 'evidence return  !=  authority ascent   —   upward edges are visibly weaker, carry open heads, and terminate at the gate'));
  nodes.append(sect(1005, 682, 'ecology-ASK  ·  bounded realization field  —  membership is FUNCTIONAL, not architectural'));

  /* ===== production circuit, named along the field ===== */
  nodes.append(sect(1080, 438, 'production  ·  intent / aperture >> authorized realization >> selection + closure >> governance'));

  /* ===========================================================================
     THREE FUNCTIONS KEY — one compact strip, drawn INSIDE the SVG.

     It lives here, not in the caption or edge-legend panel, for three reasons.
     (1) It must be visible in the live HTML and in BOTH page exports; SVG content is the
     only surface all three share. (2) The export's caveat panel is hard-capped at three
     lines and the legend panel's height feeds the page-fit band — growing either one is
     what produced the earlier panel collision, and the edge legend must not grow back.
     (3) A key drawn from the SAME classes as the apparatus cannot drift from it: each chip
     below is literally the treatment it names.

     The NEUTRAL entry is not decoration. The exclusions are the load-bearing part of this
     binding, so the key states them.
     =========================================================================== */
  const KEY_Y = 812, CHIP_W = 22, CHIP_H = 12;
  const chip = (x, cls) => el('rect', { x, y: KEY_Y - CHIP_H/2, width: CHIP_W, height: CHIP_H, rx: 3, ry: 3, class: cls });
  edges.append(line('M 44 798 L 1774 798', 'section-rule'));
  nodes.append(sect(44, KEY_Y, 'three functions', 'start'));
  [
    [196,  'node-box fn-leg', 'legislative \u2014 grant / aperture'],
    [452,  'node-box fn-exe', 'executive \u2014 realization'],
    [662,  'node-box fn-jud', 'judicial \u2014 adjudication / disposition'],
    [976,  'node-box',        'NEUTRAL \u2014 source-of-intent apex \u00b7 artifact governance \u00b7 governed artifact'],
  ].forEach(([x, cls, label]) => {
    nodes.append(chip(x, cls));
    nodes.append(note(x + CHIP_W + 8, KEY_Y, label));
  });

  /* ===== tighten the viewBox to the drawn content (+ uniform margin) so the figure FILLS the
     export frame instead of the fixed canvas with dead padding ===== */
  const VB_PAD = 12;
  const bb = svg.getBBox();
  const vbX = Math.floor(bb.x - VB_PAD), vbY = Math.floor(bb.y - VB_PAD);
  const vbW = Math.ceil(bb.width + 2*VB_PAD), vbH = Math.ceil(bb.height + 2*VB_PAD);
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
    /* Refit once the webfonts land: the DS helper measures the LIVE caption, legend and HUD
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
