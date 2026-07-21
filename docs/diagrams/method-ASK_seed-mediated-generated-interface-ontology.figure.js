/* method-ASK_seed-mediated-generated-interface-ontology.figure.js — category map (source-v2, ASK 2026-07-20)

   source-v2 (2026-07-20): dual-profile recomposition. ONE semantic model, two coordinate profiles
   selected by ?layout= — `screen` (default, compact-but-recomposed, 1440×900 read-all) and `page`
   (the taller page-optimized composition that fills the 3840×2880 page below the chrome; the committed
   dark mirror is generated from ?layout=page).
   Application became a two-part composition (elicitation card + boundary block) and Conformance was
   deepened (taller gate; preserved + violated share a top edge — preserved solid/wider and inside the
   population, violated dashed/narrower and exiting — plus a behavioral test strip).
   Text, categories, held status, branch asymmetry, and typed relations are identical across profiles.

   Subject: the CATEGORY BOUNDARIES of the doctrine — what kind of thing each named
   distinction is. The sibling figure (…_seed-mediated-generated-interface) owns the
   instantiation path and the loading-boundary seam; this one owns the ontology.

   The figure's primary doctrinal job is preventing four category collapses:
     application ≠ mechanism · control dial ≠ classification axis
     conformance precondition ≠ axis or dial · fork-at-load ≠ an SMGI species

   So it is a MAP, not a flow. Four orthogonal layers surround one neutral membership
   node, joined by TYPED relations rather than directional runtime arrows. The only
   arrows in the figure are the preserved/violated branch inside conformance, because
   that branch is the one place where sequence is the content.

   Deliberately NOT a populated 3x3 carrier/runtime matrix: a filled grid reads as an
   instance census and invites the inference that every cell has been observed. Two
   parallel axis inventories plus an orthogonality statement carry the same claim
   without the false evidence implication.

   Colour discipline: fully neutral. No function colour — nothing here is legislative,
   executive, or judicial; these are categories, not powers. Held material is dashed +
   muted, never alarm chrome.

   Repo prose is source truth: docs/seed-mediated-generated-interface.md. */
(function () {
  /* FAIL CLOSED BEFORE ANY LAYOUT. diagrams-fit.js is a DS-owned support file that must be
     vendored alongside this figure and loaded immediately BEFORE it. */
  if (!window.DIAGRAM_FIT || typeof window.DIAGRAM_FIT.compute !== 'function') {
    throw new Error('Diagram fit support is missing. Load diagrams-fit.js before the figure builder.');
  }

  const M = {
    centre: 'conforming SMGI instance',
    mech: {
      tag: 'mechanism // classification',
      carrier: { h: 'carrier axis', items: ['repo-mediated', 'packet-mediated', 'prompt-mediated'] },
      runtime: { h: 'runtime-context axis', items: ['self-contained opaque', 'connected authorized', 'author-controlled null'] },
      rel: 'orthogonal axes classify how a conforming instance is delivered and rendered',
    },
    app: {
      tag: 'application // purpose',
      label: 'governed elicitation',
      notes: ['named application',
              'authored grammar bounds inquiry',
              'capture returns a status-bearing record',
              'recipient governance owns durable handling'],
      rel: 'application names what the interface is used to do',
      neg: ['governed elicitation ≠ carrier species', 'governed elicitation ≠ runtime-context class'],
    },
    ctrl: {
      tag: 'authored control // dials',
      dials: [{ l: 'aperture', n: 'permitted output variance' },
              { l: 'operator distance', n: 'setup-encoding burden' }],
      rel: 'authored dials meter the realization; they do not classify the mechanism',
      held: { l: 'stakes / blast-radius', n: 'possible further dial — held' },
    },
    conf: {
      tag: 'conformance // membership gate',
      gate: { l: 'governing-role integrity at load', n: 'authored seed reaches the runtime as governing entry contract' },
      ok:   { t: 'preserved', l: 'conforming instance', n1: 'mechanism / application / dials', n2: 'may be classified' },
      bad:  { t: 'violated', l: 'fork-at-load', n1: 'nonconforming derivative', n2: 'not an instance of the', n3: 'authored interface' },
      sup: ['seed provenance ≠ seed conformance', 'test governance behavior, not morphology'],
    },
    rels: { mech: 'classifies', app: 'names purpose', ctrl: 'meters', conf: 'admits · excludes' },
    held: { tag: 'held — outside the settled ontology',
            items: ['stakes / blast-radius as a further dial',
                    'settled cross-carrier conformance test',
                    'independently verified seed attestation',
                    'generalized derivative-label taxonomy',
                    'standalone seed-integrity doctrine'] },
    foot: { tag: 'category boundaries',
            items: ['application ≠ mechanism',
                    'control dial ≠ classification axis',
                    'conformance precondition ≠ axis or dial',
                    'fork-at-load ≠ SMGI species',
                    'self-carried marker ≠ independent conformance proof'] },
  };

  const svgNS = 'http://www.w3.org/2000/svg';

  /* ===== source-v2 dual-profile layout: one semantic model (M), two coordinate profiles =====
     The figure is height-limited at a normal viewport, so a single fixed canvas cannot both
     fill the 3840×2880 page AND stay read-all at 1440×900. The SAME semantic model above is
     laid out under two coordinate profiles selected by ?layout= :
       screen (default) — compact-but-recomposed; 1440×900 stays read-all without zoom;
       page            — the taller page-optimized composition; spends the 3840×2880 page height
                          below the chrome; the committed dark full-page mirror is generated from
                          this profile (?layout=page&export=png).
     Text, categories, held status, branch asymmetry, and typed relations are IDENTICAL across
     profiles — only coordinates differ. The recomposition itself (Application's two cards,
     Conformance's deepened gate / outcomes / test-strip) is present in BOTH profiles. */
  const LAYOUT = (new URLSearchParams(location.search).get('layout') === 'page') ? 'page' : 'screen';
  /* box heights carry generous vertical padding around their text (breathing); preserved and
     violated share a TOP edge (vDy === pDy) — the not-peers asymmetry is carried by solid-vs-dashed,
     wider-vs-narrower, and rejoin-vs-exit, not by a vertical offset. The page canvas is kept short
     enough that the static exporter tips the landscape diagram into its below-panel band, so the
     committed page mirror clears the legend at the top and fills to the bottom margin. */
  const PF = {
    screen: { topH:230, botH:300, rowGap:92, cbH:56, footGap:28, footH:98,
      m:{ hdr:58, i0:76, ip:42, bh:30, relB:24 },
      a:{ cardDy:44, cardH:154, lblDy:74, n0:104, np:24, relDy:80, ruleDy:102, ng0:130 },
      c:{ dialDy:46, dialH:62, lblDy:66, nDy:88, relDy:138, heldMargin:38, heldH:54 },
      k:{ gateDy:46, gateH:62, gLbl:66, gNote:88, pDy:128, pH:104, vDy:128, vH:86, supMargin:34, supP:18 },
      f:{ tagDy:22, i0:48, ip:18 } },
    page:   { topH:285, botH:355, rowGap:130, cbH:64, footGap:36, footH:112,
      m:{ hdr:66, i0:88, ip:48, bh:34, relB:26 },
      a:{ cardDy:48, cardH:196, lblDy:82, n0:118, np:30, relDy:88, ruleDy:112, ng0:150 },
      c:{ dialDy:54, dialH:72, lblDy:78, nDy:102, relDy:160, heldMargin:40, heldH:62 },
      k:{ gateDy:50, gateH:70, gLbl:73, gNote:97, pDy:150, pH:118, vDy:150, vH:98, supMargin:40, supP:20 },
      f:{ tagDy:24, i0:54, ip:20 } },
  }[LAYOUT];
  const W = 1900;
  const topY = 40, botY = topY + PF.topH + PF.rowGap;
  const RG = {
    mech: { x:  40, y: topY, w: 860, h: PF.topH },
    app:  { x: 980, y: topY, w: 860, h: PF.topH },
    ctrl: { x:  40, y: botY, w: 860, h: PF.botH },
    conf: { x: 980, y: botY, w: 860, h: PF.botH },
  };
  const CB = { x: 810, y: topY + PF.topH + (PF.rowGap - PF.cbH) / 2, w: 280, h: PF.cbH };
  const FT = { by: botY + PF.botH + PF.footGap, bh: PF.footH };
  const H = FT.by + FT.bh + 12;
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

  const AH = 8;
  /* Arrowheads appear only inside CONFORMANCE — the one place in this figure where
     sequence is the content. Two DOWN heads for the branch, and one RIGHT head for the
     fork's exit. Heads on held paths carry the held class so the triangle is muted like
     the line it terminates; the shared CSS fills an unqualified arrowhead strong. */
  const headD = (x, y, cls='edge-arrowhead') => el('path', { class: cls, d:`M ${x-AH/1.6} ${y-10} L ${x+AH/1.6} ${y-10} L ${x} ${y} Z` });
  const headR = (x, y, cls='edge-arrowhead') => el('path', { class: cls, d:`M ${x-9} ${y-AH/1.6} L ${x-9} ${y+AH/1.6} L ${x} ${y} Z` });
  const box  = (x, y, w, h, cls='node-box') => el('rect', { x, y, width:w, height:h, rx:4, ry:4, class:cls });
  const line = (d, cls='edge') => el('path', { class:cls, fill:'none', d });
  const lbl  = (x, y, t, cls='node-label', a='start') => el('text', { x, y, class:cls, 'text-anchor':a }, [t]);
  const note = (x, y, t, a='start', cls='node-note') => el('text', { x, y, class:cls, 'text-anchor':a }, [t]);
  const tag  = (x, y, t, a='start') => el('text', { x, y, class:'flow-tag', 'text-anchor':a }, [t]);

  /* ===== four regions + one centre (rects from the active profile PF; see the profile block) ===== */
  const CX = CB.x + CB.w/2, CY = CB.y + CB.h/2;

  Object.values(RG).forEach(r =>
    nodes.append(el('rect', { x:r.x, y:r.y, width:r.w, height:r.h, rx:12, ry:12, class:'flow-group' })));

  nodes.append(box(CB.x, CB.y, CB.w, CB.h));
  // centre the label on the box: node-label is dominant-baseline:middle, but the glyph bbox is
  // slightly asymmetric (ascenders vs the 'g' descender), so measure it and offset y so the
  // rendered glyphs — not just the baseline — centre on the box (recomputed on fonts.ready).
  const rootLbl = lbl(CX, CY, M.centre, 'node-label root', 'middle');
  nodes.append(rootLbl);
  function centerRoot() {
    rootLbl.setAttribute('y', CY);
    const bb = rootLbl.getBBox();
    rootLbl.setAttribute('y', (CY + (CY - (bb.y + bb.height / 2))).toFixed(1));
  }
  centerRoot();

  /* typed relations — labelled ties, not directional runtime arrows. Each tie is ONE
     continuous line leaving a CB corner and landing on the region edge facing the centre at
     the box's THIRD division (1/3 in from the inner corner). Each label RUNS ALONG its tie:
     rotated to the tie's angle, centred on the tie's midpoint, and offset a few px
     perpendicular (toward the open centre band) so it reads parallel to — and just off — the
     continuous line. Text is oriented left→right so it stays upright. Recomputed on
     fonts.ready so the perpendicular offset stays exact once the embedded font loads. */
  const third = 1 / 3;
  const RELTIES = [
    { x1: CB.x,        y1: CB.y,        x2: RG.mech.x + RG.mech.w * (1 - third), y2: RG.mech.y + RG.mech.h, rel: M.rels.mech },
    { x1: CB.x + CB.w, y1: CB.y,        x2: RG.app.x  + RG.app.w * third,        y2: RG.app.y  + RG.app.h,  rel: M.rels.app  },
    { x1: CB.x,        y1: CB.y + CB.h, x2: RG.ctrl.x + RG.ctrl.w * (1 - third), y2: RG.ctrl.y,             rel: M.rels.ctrl },
    { x1: CB.x + CB.w, y1: CB.y + CB.h, x2: RG.conf.x + RG.conf.w * third,       y2: RG.conf.y,             rel: M.rels.conf },
  ];
  const relEdges = el('g', { class: 'edges' }); edges.append(relEdges);
  const relLabels = el('g', { class: 'nodes' }); nodes.append(relLabels);
  function drawRelations() {
    while (relEdges.firstChild) relEdges.removeChild(relEdges.firstChild);
    while (relLabels.firstChild) relLabels.removeChild(relLabels.firstChild);
    const probe = tag(0, CY, 'Xg', 'middle'); relLabels.append(probe);
    const bh = probe.getBBox().height; relLabels.removeChild(probe);
    const dPerp = bh / 2 + 4;                          // offset just clear of the tie
    for (const t of RELTIES) {
      relEdges.append(line(`M ${t.x1} ${t.y1} L ${t.x2} ${t.y2}`));   // one continuous tie
      const midX = (t.x1 + t.x2) / 2, midY = (t.y1 + t.y2) / 2;
      // orient left→right so the rotated text reads upright along the tie
      const [ax, ay, bx, by] = t.x1 <= t.x2 ? [t.x1, t.y1, t.x2, t.y2] : [t.x2, t.y2, t.x1, t.y1];
      const dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      // unit perpendicular, flipped to point toward CY (into the open centre band)
      let px = -dy / L, py = dx / L;
      if (Math.sign(py) !== ((midY < CY) ? 1 : -1)) { px = -px; py = -py; }
      const cx = midX + px * dPerp, cy = midY + py * dPerp;
      const lab = tag(cx, cy, t.rel, 'middle');
      lab.setAttribute('transform', `rotate(${angle.toFixed(2)} ${cx.toFixed(1)} ${cy.toFixed(1)})`);
      relLabels.append(lab);
    }
  }
  drawRelations();

  /* ===== 1 · MECHANISM — two parallel axis inventories, deliberately not a matrix ===== */
  {
    const r = RG.mech, m = PF.m;
    nodes.append(tag(r.x + 22, r.y + 22, M.mech.tag));
    // two equal columns filling the region's inner band with symmetric 22px side insets
    // (left col at +22, right col ending 22 from the region's right edge).
    const AX = [{ c: M.mech.carrier, x: r.x + 22,  w: 379 },
                { c: M.mech.runtime, x: r.x + 459, w: 379 }];
    AX.forEach(a => {
      nodes.append(lbl(a.x, r.y + m.hdr, a.c.h));
      a.c.items.forEach((t, i) => {
        const y = r.y + m.i0 + i * m.ip;
        nodes.append(box(a.x, y, a.w, m.bh));
        // single-line axis label: node-note carries dominant-baseline:middle, so the true
        // geometric centre is y + bh/2 (an earlier bh*0.68 sat the text ~0.18·bh low).
        nodes.append(note(a.x + 12, y + m.bh / 2, t));
      });
    });
    const midY = r.y + m.i0 + m.ip + m.bh / 2;
    edges.append(line(`M ${AX[0].x + AX[0].w + 8} ${midY} L ${AX[1].x - 8} ${midY}`, 'edge held'));
    nodes.append(note(r.x + 22, r.y + r.h - m.relB, M.mech.rel));
  }

  /* ===== 2 · APPLICATION — purpose, not a class =====
     A real two-part composition, so the content spans the region instead of clustering in the
     left edge of one wide card: a LEFT card carries the governed-elicitation cluster; a RIGHT
     boundary block carries what application IS (names purpose) and what it is NOT (≠ carrier
     species, ≠ runtime-context class). Semantic content is exact; only the spatial grammar
     changes. */
  {
    const r = RG.app, a = PF.a;
    nodes.append(tag(r.x + 22, r.y + 22, M.app.tag));
    // left card — the elicitation cluster
    nodes.append(box(r.x + 22, r.y + a.cardDy, 397, a.cardH));
    nodes.append(lbl(r.x + 44, r.y + a.lblDy, M.app.label));
    M.app.notes.forEach((t, i) => nodes.append(note(r.x + 44, r.y + a.n0 + i * a.np, t)));
    // right boundary block — names purpose · not a carrier/runtime class. A PEER of the left
    // card: identical container (node-box), identical width, symmetric side insets — the split
    // is spatial only, the border carries no distinct meaning.
    nodes.append(box(r.x + 441, r.y + a.cardDy, 397, a.cardH));
    nodes.append(note(r.x + 463, r.y + a.relDy, M.app.rel));
    nodes.append(el('path', { class: 'section-rule', d: `M ${r.x + 463} ${r.y + a.ruleDy} L ${r.x + 816} ${r.y + a.ruleDy}` }));
    M.app.neg.forEach((t, i) =>
      nodes.append(note(r.x + 463, r.y + a.ng0 + i * a.np, t, 'start', 'node-note legacy')));
  }

  /* ===== 3 · AUTHORED CONTROL — two landed dials, the third visibly HELD ===== */
  {
    const r = RG.ctrl, c = PF.c;
    nodes.append(tag(r.x + 22, r.y + 22, M.ctrl.tag));
    // two dials, symmetric side insets: left at +22, right ending 22 from the region edge.
    const dialW = 393;
    M.ctrl.dials.forEach((d, i) => {
      const x = r.x + 22 + i * (dialW + 30);
      nodes.append(box(x, r.y + c.dialDy, dialW, c.dialH));
      nodes.append(lbl(x + 18, r.y + c.lblDy, d.l));
      nodes.append(note(x + 18, r.y + c.nDy, d.n));
    });
    nodes.append(note(r.x + 22, r.y + c.relDy, M.ctrl.rel));
    /* held dial — dashed AND inset from the landed pair, anchored near the region bottom so the
       gap above it reads as separation, not a third landed row */
    const heldY = r.y + r.h - c.heldMargin - c.heldH;
    nodes.append(box(r.x + 100, heldY, 660, c.heldH, 'node-box held'));
    nodes.append(lbl(r.x + 118, heldY + 24, M.ctrl.held.l, 'node-label held'));
    nodes.append(note(r.x + 118, heldY + 43, M.ctrl.held.n));
  }

  /* ===== 4 · CONFORMANCE — the membership gate =====
     The outcomes are deliberately NOT peers, but they SHARE A TOP EDGE (vDy === pDy):
     `preserved` is solid and wider and remains inside the population; `violated` is dashed,
     narrower, and exits the region rather than rejoining the centre. The not-peers asymmetry
     is carried by solid-vs-dashed + wider-vs-narrower + rejoin-vs-exit, not a vertical offset.
     Fork-at-load is a failure state, not an alternate species. */
  {
    const r = RG.conf, k = PF.k;
    nodes.append(tag(r.x + 22, r.y + 22, M.conf.tag));
    // gate — a taller card: label on the first line, the governing-entry-contract note below
    nodes.append(box(r.x + 22, r.y + k.gateDy, r.w - 44, k.gateH));
    nodes.append(lbl(r.x + 40, r.y + k.gLbl, M.conf.gate.l));
    nodes.append(note(r.x + 40, r.y + k.gNote, M.conf.gate.n));
    const gateBottom = r.y + k.gateDy + k.gateH;

    // preserved — solid, wider, shares its top edge with violated (inside the population)
    const PY = r.y + k.pDy;
    nodes.append(box(r.x + 22, PY, 404, k.pH));
    nodes.append(tag(r.x + 40, PY + 20, M.conf.ok.t));
    nodes.append(lbl(r.x + 40, PY + 44, M.conf.ok.l));
    nodes.append(note(r.x + 40, PY + 64, M.conf.ok.n1));
    nodes.append(note(r.x + 40, PY + 82, M.conf.ok.n2));
    edges.append(line(`M ${r.x + 224} ${gateBottom} L ${r.x + 224} ${PY - 10}`));
    edges.append(headD(r.x + 224, PY - 2));

    // violated / fork-at-load — dashed, narrower, shares its top edge with preserved but EXITS the population
    const VY = r.y + k.vDy, VM = VY + Math.round(k.vH / 2);
    nodes.append(box(r.x + 476, VY, 330, k.vH, 'node-box held'));
    nodes.append(tag(r.x + 494, VY + 20, M.conf.bad.t));
    nodes.append(lbl(r.x + 494, VY + 44, M.conf.bad.l, 'node-label held'));
    nodes.append(note(r.x + 494, VY + 64, M.conf.bad.n1));
    edges.append(line(`M ${r.x + 641} ${gateBottom} L ${r.x + 641} ${VY - 10}`, 'edge held'));
    edges.append(headD(r.x + 641, VY - 2, 'edge-arrowhead held'));
    /* exit — leaves the population rather than rejoining the centre */
    edges.append(line(`M ${r.x + 806} ${VM} L ${r.x + 832} ${VM}`, 'edge held'));
    edges.append(headR(r.x + 840, VM, 'edge-arrowhead held'));
    nodes.append(note(r.x + 476, VY + k.vH + 20, M.conf.bad.n2 + ' ' + M.conf.bad.n3,
                      'start', 'node-note legacy'));

    // behavioral test strip — anchored near the region bottom
    const supY = r.y + r.h - k.supMargin;
    M.conf.sup.forEach((t, i) =>
      nodes.append(note(r.x + 22, supY + i * k.supP, t, 'start', 'node-note legacy')));
  }

  /* ===== held fringe + category-boundary footer — outside the four settled regions ===== */
  {
    const BY = FT.by, BH = FT.bh, f = PF.f;
    nodes.append(el('rect', { x:40, y:BY, width:860, height:BH, rx:12, ry:12,
                              class:'flow-group', 'stroke-dasharray':'4 3' }));
    nodes.append(tag(62, BY + f.tagDy, M.held.tag));
    M.held.items.forEach((t, i) => {
      const col = i < 3 ? 0 : 1;
      nodes.append(note(62 + col * 430, BY + f.i0 + (i % 3) * f.ip, '·  ' + t, 'start', 'node-note legacy'));
    });

    nodes.append(el('path', { class:'section-rule', d:`M 980 ${BY} L 1840 ${BY}` }));
    nodes.append(tag(980, BY + f.tagDy, M.foot.tag));
    M.foot.items.forEach((t, i) => {
      const col = i < 3 ? 0 : 1;
      nodes.append(note(980 + col * 430, BY + f.i0 + (i % 3) * f.ip, t));
    });
  }

  /* ===== tighten the viewBox to drawn content (+ uniform margin), as the sibling figures ===== */
  const VB_PAD = 30;
  const bb = svg.getBBox();
  const vbX = Math.floor(bb.x - VB_PAD), vbY = Math.floor(bb.y - VB_PAD);
  const vbW = Math.ceil(bb.width + 2*VB_PAD), vbH = Math.ceil(bb.height + 2*VB_PAD);
  svg.setAttribute('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`);
  svg.setAttribute('width', vbW);
  svg.setAttribute('height', vbH);

  /* ---- pan / zoom / fit + drag + wheel (interaction local; FIT is DS-owned) ---- */
  const wrap = document.getElementById('canvasWrap'), stage = document.getElementById('stage'), pct = document.getElementById('zoomPct');
  if (wrap && stage) {
    let tx=0, ty=0, sc=1;
    /* Interaction floor. Ordinary zoom-out floor is this figure's historical 0.2 base, but
       the DS panel-aware fit can land BELOW it on a constrained viewport; a fixed floor above
       the fitted scale would make zoom-out ENLARGE the figure (direction reversal). So the
       live floor is the lower of the base and the most recent Fit. fit() sets it from the
       result it applies, so the fonts.ready refit and every resize refresh it too. */
    const BASE_MIN_SCALE = 0.2;
    let fittedMinScale = BASE_MIN_SCALE;
    const apply = () => { stage.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`; if (pct) pct.textContent = Math.round(sc*100)+'%'; };
    /* Caller-owned: clearance 90/20 and maxScale 1.3, matching the sibling doctrine
       figure. Zero-origin bounds despite the negative tightened viewBox — the transform
       target is the stage div, whose box starts at 0 in CSS space. */
    const fit = () => {
      const f = window.DIAGRAM_FIT.compute({
        wrap,
        bounds: { minX: 0, minY: 0, maxX: vbW, maxY: vbH },
        clearanceX: 90, clearanceY: 20, maxScale: 1.3, gutter: 26
      });
      fittedMinScale = Math.min(BASE_MIN_SCALE, f.scale);
      sc = f.scale; tx = f.tx; ty = f.ty; apply();
    };
    fit();
    const fonts = document.fonts;
    if (fonts && fonts.ready && typeof fonts.ready.then === 'function') {
      fonts.ready.then(() => { drawRelations(); centerRoot(); fit(); }).catch(() => {});
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
