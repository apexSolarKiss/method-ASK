/* method-ASK_seed-mediated-generated-interface-ontology.figure.js — category map (source-v1, ASK 2026-07-19)

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
  const W = 1900, H = 700;
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

  /* ===== four regions + one centre =====
     Sized so the whole map fits at ~0.75 scale in a normal viewport with the glass
     panels reserved — the doctrine-figure norm. An earlier draft used a 1900x1200
     canvas for this content and fit-scaled to 0.42, which passed every geometry check
     and was still unreadable at real viewing scale. Density is the constraint here,
     not bbox correctness. */
  const RG = {
    mech: { x:  40, y:  40, w: 860, h: 200 },
    app:  { x: 980, y:  40, w: 860, h: 200 },
    ctrl: { x:  40, y: 352, w: 860, h: 230 },
    conf: { x: 980, y: 352, w: 860, h: 230 },
  };
  const CB = { x: 810, y: 268, w: 280, h: 56 };
  const CX = CB.x + CB.w/2, CY = CB.y + CB.h/2;

  Object.values(RG).forEach(r =>
    nodes.append(el('rect', { x:r.x, y:r.y, width:r.w, height:r.h, rx:12, ry:12, class:'flow-group' })));

  nodes.append(box(CB.x, CB.y, CB.w, CB.h));
  nodes.append(lbl(CX, CY + 5, M.centre, 'node-label root', 'middle'));

  /* typed relations — labelled ties, not directional runtime arrows */
  edges.append(line(`M ${RG.mech.x + RG.mech.w} ${RG.mech.y + RG.mech.h} L ${CB.x} ${CB.y}`));
  edges.append(line(`M ${RG.app.x} ${RG.app.y + RG.app.h} L ${CB.x + CB.w} ${CB.y}`));
  edges.append(line(`M ${RG.ctrl.x + RG.ctrl.w} ${RG.ctrl.y} L ${CB.x} ${CB.y + CB.h}`));
  edges.append(line(`M ${RG.conf.x} ${RG.conf.y} L ${CB.x + CB.w} ${CB.y + CB.h}`));
  nodes.append(tag(CB.x - 8,  CB.y - 12, M.rels.mech, 'end'));
  nodes.append(tag(CB.x + CB.w + 8, CB.y - 12, M.rels.app, 'start'));
  nodes.append(tag(CB.x - 8,  CB.y + CB.h + 14, M.rels.ctrl, 'end'));
  nodes.append(tag(CB.x + CB.w + 8, CB.y + CB.h + 14, M.rels.conf, 'start'));

  /* ===== 1 · MECHANISM — two parallel axis inventories, deliberately not a matrix ===== */
  {
    const r = RG.mech;
    nodes.append(tag(r.x + 22, r.y + 22, M.mech.tag));
    const AX = [{ c: M.mech.carrier, x: r.x + 22,  w: 340 },
                { c: M.mech.runtime, x: r.x + 420, w: 400 }];
    AX.forEach(a => {
      nodes.append(lbl(a.x, r.y + 52, a.c.h));
      a.c.items.forEach((t, i) => {
        const y = r.y + 64 + i * 32;
        nodes.append(box(a.x, y, a.w, 26));
        nodes.append(note(a.x + 12, y + 17, t));
      });
    });
    const midY = r.y + 64 + 32 + 13;
    edges.append(line(`M ${AX[0].x + AX[0].w + 8} ${midY} L ${AX[1].x - 8} ${midY}`, 'edge held'));
    nodes.append(note(r.x + 22, r.y + 178, M.mech.rel));
  }

  /* ===== 2 · APPLICATION — purpose, not a class ===== */
  {
    const r = RG.app;
    nodes.append(tag(r.x + 22, r.y + 22, M.app.tag));
    nodes.append(box(r.x + 22, r.y + 36, r.w - 44, 88));
    nodes.append(lbl(r.x + 40, r.y + 56, M.app.label));
    M.app.notes.forEach((t, i) => nodes.append(note(r.x + 40, r.y + 74 + i * 15, t)));
    nodes.append(note(r.x + 22, r.y + 146, M.app.rel));
    M.app.neg.forEach((t, i) =>
      nodes.append(note(r.x + 22, r.y + 166 + i * 15, t, 'start', 'node-note legacy')));
  }

  /* ===== 3 · AUTHORED CONTROL — two landed dials, the third visibly HELD ===== */
  {
    const r = RG.ctrl;
    nodes.append(tag(r.x + 22, r.y + 22, M.ctrl.tag));
    M.ctrl.dials.forEach((d, i) => {
      const x = r.x + 22 + i * 420;
      nodes.append(box(x, r.y + 38, 396, 48));
      nodes.append(lbl(x + 16, r.y + 58, d.l));
      nodes.append(note(x + 16, r.y + 76, d.n));
    });
    nodes.append(note(r.x + 22, r.y + 110, M.ctrl.rel));
    /* held dial — dashed AND inset from the landed pair, so it cannot read as a third dial */
    nodes.append(box(r.x + 100, r.y + 136, 660, 48, 'node-box held'));
    nodes.append(lbl(r.x + 118, r.y + 156, M.ctrl.held.l, 'node-label held'));
    nodes.append(note(r.x + 118, r.y + 174, M.ctrl.held.n));
  }

  /* ===== 4 · CONFORMANCE — the membership gate =====
     The outcomes are deliberately NOT peers: `preserved` sits high, solid and wider;
     `violated` is dashed, set LOWER and narrower, and exits the region rather than
     rejoining the centre. Fork-at-load is a failure state, not an alternate species. */
  {
    const r = RG.conf;
    nodes.append(tag(r.x + 22, r.y + 22, M.conf.tag));
    nodes.append(box(r.x + 22, r.y + 36, r.w - 44, 46));
    nodes.append(lbl(r.x + 40, r.y + 56, M.conf.gate.l));
    nodes.append(note(r.x + 40, r.y + 73, M.conf.gate.n));

    const PY = r.y + 104;
    nodes.append(box(r.x + 22, PY, 390, 84));
    nodes.append(tag(r.x + 40, PY + 16, M.conf.ok.t));
    nodes.append(lbl(r.x + 40, PY + 38, M.conf.ok.l));
    nodes.append(note(r.x + 40, PY + 56, M.conf.ok.n1));
    nodes.append(note(r.x + 40, PY + 72, M.conf.ok.n2));
    edges.append(line(`M ${r.x + 217} ${r.y + 82} L ${r.x + 217} ${PY - 10}`));
    edges.append(headD(r.x + 217, PY - 2));

    const VY = r.y + 134;
    nodes.append(box(r.x + 470, VY, 330, 70, 'node-box held'));
    nodes.append(tag(r.x + 488, VY + 16, M.conf.bad.t));
    nodes.append(lbl(r.x + 488, VY + 38, M.conf.bad.l, 'node-label held'));
    nodes.append(note(r.x + 488, VY + 56, M.conf.bad.n1));
    edges.append(line(`M ${r.x + 635} ${r.y + 82} L ${r.x + 635} ${VY - 10}`, 'edge held'));
    edges.append(headD(r.x + 635, VY - 2, 'edge-arrowhead held'));
    /* exit — leaves the population rather than rejoining the centre */
    edges.append(line(`M ${r.x + 800} ${VY + 35} L ${r.x + 824} ${VY + 35}`, 'edge held'));
    edges.append(headR(r.x + 832, VY + 35, 'edge-arrowhead held'));
    nodes.append(note(r.x + 470, VY + 88, M.conf.bad.n2 + ' ' + M.conf.bad.n3,
                      'start', 'node-note legacy'));

    M.conf.sup.forEach((t, i) =>
      nodes.append(note(r.x + 22, PY + 106 + i * 15, t, 'start', 'node-note legacy')));
  }

  /* ===== held fringe + category-boundary footer — outside the four settled regions ===== */
  {
    const BY = 612, BH = 78;
    nodes.append(el('rect', { x:40, y:BY, width:860, height:BH, rx:12, ry:12,
                              class:'flow-group', 'stroke-dasharray':'4 3' }));
    nodes.append(tag(62, BY + 18, M.held.tag));
    M.held.items.forEach((t, i) => {
      const col = i < 3 ? 0 : 1;
      nodes.append(note(62 + col * 430, BY + 36 + (i % 3) * 15, '·  ' + t, 'start', 'node-note legacy'));
    });

    nodes.append(el('path', { class:'section-rule', d:`M 980 ${BY} L 1840 ${BY}` }));
    nodes.append(tag(980, BY + 18, M.foot.tag));
    M.foot.items.forEach((t, i) => {
      const col = i < 3 ? 0 : 1;
      nodes.append(note(980 + col * 430, BY + 36 + (i % 3) * 15, t));
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
      sc = f.scale; tx = f.tx; ty = f.ty; apply();
    };
    fit();
    const fonts = document.fonts;
    if (fonts && fonts.ready && typeof fonts.ready.then === 'function') {
      fonts.ready.then(fit).catch(() => {});
    }
    window.addEventListener('resize', fit);
    const zi=document.getElementById('zoomIn'), zo=document.getElementById('zoomOut'), zf=document.getElementById('zoomFit');
    if (zi) zi.onclick=()=>{sc=Math.min(sc*1.2,4);apply();};
    if (zo) zo.onclick=()=>{sc=Math.max(sc/1.2,0.2);apply();};
    if (zf) zf.onclick=fit;
    let dragging=false, px0=0, py0=0, tx0=0, ty0=0;
    wrap.addEventListener('pointerdown', (ev)=>{ if (ev.target.closest('.hud, .legend, .caption')) return;
      dragging=true; wrap.classList.add('dragging'); wrap.setPointerCapture(ev.pointerId); px0=ev.clientX; py0=ev.clientY; tx0=tx; ty0=ty; });
    wrap.addEventListener('pointermove', (ev)=>{ if(!dragging) return; tx=tx0+(ev.clientX-px0); ty=ty0+(ev.clientY-py0); apply(); });
    const endDrag=()=>{ dragging=false; wrap.classList.remove('dragging'); };
    wrap.addEventListener('pointerup', endDrag); wrap.addEventListener('pointercancel', endDrag);
    wrap.addEventListener('wheel', (ev)=>{ ev.preventDefault(); const r=wrap.getBoundingClientRect(), mx=ev.clientX-r.left, my=ev.clientY-r.top;
      const ns=Math.max(0.2, Math.min(4, sc*(ev.deltaY>0 ? 1/1.1 : 1.1))), k=ns/sc; tx=mx-(mx-tx)*k; ty=my-(my-ty)*k; sc=ns; apply(); }, { passive:false });
  }
})();
