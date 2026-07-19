/* method-ASK_seed-mediated-generated-interface.figure.js — instantiation path + the loading-boundary seam
   (source-v1, ASK 2026-07-18)

   Subject: the instantiation path and where it fails — NOT the classification taxonomy
   (that is the sibling ontology figure). The fork appears AT the loading boundary,
   before the grammar grants the aperture.

   Colour discipline: neutral throughout, with ONE licensed exception — the grammar box
   carries the design-system-ASK legislative function, because the doctrine states the
   grammar grants the aperture (docs/bounded-generativity.md spine, restated in SMGI
   §Relation to bounded generativity). No colour is invented for integrity: fork-at-load
   is rendered as structural branching + broken continuity (.held = dashed, muted),
   not as alarm chrome. Integrity is a conformance condition, not a fourth function.

   Repo prose is source truth: docs/seed-mediated-generated-interface.md. */
(function () {
  /* FAIL CLOSED BEFORE ANY LAYOUT. diagrams-fit.js is a DS-owned support file that must be
     vendored alongside this figure and loaded immediately BEFORE it. Checked at the top of
     the builder so a missing helper stops this file before the SVG is constructed, rather
     than leaving a half-built, unpositioned artifact. Message names the figure builder. */
  if (!window.DIAGRAM_FIT || typeof window.DIAGRAM_FIT.compute !== 'function') {
    throw new Error('Diagram fit support is missing. Load diagrams-fit.js before the figure builder.');
  }

  const M = {
    seed:    { label: 'authored seed', n1: 'grammar · behavior', n2: 'loading path · return contract' },
    bound:   { tag: 'loading boundary', q: 'does the authored seed remain governing?' },
    // conforming branch
    grammar: { label: 'grammar', note: 'grants the aperture' },
    runtime: { label: 'runtime', note: 'opaque to the author — the hard case' },
    interact:{ label: 'generated interaction', note: 'realizes inside the aperture' },
    ret:     { label: 'return', note: 'application-specific' },
    outside: { tag: 'authority + governance remain outside the thread',
               claim: 'a generated thread cannot self-authorize' },
    // fork branch
    demote:  { label: 'seed demoted', n1: 'to source material', n2: 'reconcile · retarget · rewrite' },
    deriv:   { label: 'derivative grammar', note: 'authored in the runtime' },
    borrow:  { label: 'borrowed shape', n1: '+ causal provenance', n2: 'governing role not carried' },
    noncon:  { label: 'nonconforming derivative', n1: 'not an instance of the', n2: 'authored interface' },
    forkTag: 'fork-at-load',
    conformTag: 'conforming instance',
    claimA:  'seed provenance ≠ seed conformance',
    claimB:  'morphology ≠ behavioral conformance',
    // overlays
    elicit:  { h: 'example // governed elicitation',
               l1: 'stop + capture  >>  status-bearing record',
               l2: 'recipient governance  >>  classification · validation · selection · closure · durable handling' },
    pcs:     { h: 'negative pressure case // PCS · 2026-07-09',
               l1: 'setup prompt + prior exports  >>  runtime reconciliation',
               l2: 'borrowed _BOOTSTRAP / _INDEX morphology',
               l3: 'not a conforming PCS instance' },
  };

  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 1900, H = 880;
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

  const AH = 9;
  const headR = (x, y, cls='edge-arrowhead') => el('path', { class: cls, d: `M ${x-AH} ${y-AH/1.6} L ${x-AH} ${y+AH/1.6} L ${x} ${y} Z` });
  const box  = (x, y, w, h, cls='node-box') => el('rect', { x, y, width:w, height:h, rx:4, ry:4, class:cls });
  const line = (d, cls='edge', dash=null) => el('path', { class:cls, fill:'none', d, 'stroke-dasharray':dash });
  const lbl  = (x, y, t, cls='node-label', a='start') => el('text', { x, y, class:cls, 'text-anchor':a }, [t]);
  const note = (x, y, t, a='start', cls='node-note') => el('text', { x, y, class:cls, 'text-anchor':a }, [t]);
  const tag  = (x, y, t, a='middle') => el('text', { x, y, class:'flow-tag', 'text-anchor':a }, [t]);

  /* ===== grid ===== */
  const SPINE = 430;                 // single origin axis (seed → boundary)
  const YM = 276, YF = 604;          // conforming branch / fork branch
  const BX = 486;                    // loading boundary
  const COL = [612, 928, 1244, 1560];
  const NW = 252;                    // node width
  const H2 = 58, H3 = 78;            // two-line / three-line node heights

  /* ===== authored seed — single origin, NEUTRAL ===== */
  nodes.append(box(126, SPINE - H3/2, 254, H3));
  nodes.append(lbl(146, SPINE - 16, M.seed.label));
  nodes.append(note(146, SPINE + 4, M.seed.n1));
  nodes.append(note(146, SPINE + 23, M.seed.n2));
  edges.append(line(`M 380 ${SPINE} L ${BX-16} ${SPINE}`));
  edges.append(headR(BX - 12, SPINE));

  /* ===== the loading boundary — the seam this figure exists to show ===== */
  edges.append(el('path', { class:'section-rule', d:`M ${BX} ${YM - 108} L ${BX} ${YF + 112}`, 'stroke-dasharray':'3 4' }));
  nodes.append(tag(BX, YM - 122, M.bound.tag));
  nodes.append(note(BX, YM - 104, M.bound.q, 'middle'));

  /* branch out of the boundary: up = conforming, down = fork (broken continuity) */
  edges.append(line(`M ${BX} ${SPINE} C ${BX+52} ${SPINE}, ${BX+52} ${YM}, ${COL[0]-16} ${YM}`));
  edges.append(headR(COL[0] - 12, YM));
  edges.append(line(`M ${BX} ${SPINE} C ${BX+52} ${SPINE}, ${BX+52} ${YF}, ${COL[0]-16} ${YF}`, 'edge held'));
  edges.append(headR(COL[0] - 12, YF));

  /* Branch tags are RIGHT-anchored to end before the first node box of their branch.
     Left-anchored at BX+74 they ran 90px (conforming) and 38px (fork) into those boxes —
     visible in the exported raster, invisible to bbox checks, since a text node
     overlapping a rect is not an overflow. */
  nodes.append(tag(COL[0] - 16, YM - 26, M.conformTag, 'end'));
  nodes.append(el('text', { x: COL[0] - 16, y: YF + 34, class:'flow-tag node-label-held', 'text-anchor':'end' }, [M.forkTag]));

  /* ===== conforming branch — NEUTRAL, except the licensed legislative grammar box ===== */
  // 1 · grammar (LEGISLATIVE — doctrine: the grammar grants the aperture)
  nodes.append(box(COL[0], YM - H2/2, NW, H2, 'node-box fn-leg'));
  nodes.append(lbl(COL[0] + 20, YM - 6, M.grammar.label));
  nodes.append(note(COL[0] + 20, YM + 14, M.grammar.note));

  // 2 · runtime
  nodes.append(box(COL[1], YM - H2/2, NW, H2));
  nodes.append(lbl(COL[1] + 20, YM - 6, M.runtime.label));
  nodes.append(note(COL[1] + 20, YM + 14, M.runtime.note));

  // 3 · generated interaction
  nodes.append(box(COL[2], YM - H2/2, NW, H2));
  nodes.append(lbl(COL[2] + 20, YM - 6, M.interact.label));
  nodes.append(note(COL[2] + 20, YM + 14, M.interact.note));

  // 4 · return
  nodes.append(box(COL[3], YM - H2/2, NW, H2));
  nodes.append(lbl(COL[3] + 20, YM - 6, M.ret.label));
  nodes.append(note(COL[3] + 20, YM + 14, M.ret.note));

  for (let i = 0; i < 3; i++) {
    edges.append(line(`M ${COL[i]+NW} ${YM} L ${COL[i+1]-16} ${YM}`));
    edges.append(headR(COL[i+1] - 12, YM));
  }

  /* authority + governance sit OUTSIDE the generated thread — dashed bracket above */
  const BRK_Y = YM - 74;
  edges.append(line(`M ${COL[1]} ${BRK_Y+14} L ${COL[1]} ${BRK_Y} L ${COL[3]+NW} ${BRK_Y} L ${COL[3]+NW} ${BRK_Y+14}`, 'edge held'));
  /* Both labels sit CLEAR ABOVE the bracket rule. .node-note is dominant-baseline:middle,
     so a note at BRK_Y-4 centres 4px above the rule and its body crosses it — which
     rendered as a strikethrough through "a generated thread cannot self-authorize".
     Caught in the exported raster, not by any bbox check. */
  nodes.append(tag((COL[1] + COL[3] + NW) / 2, BRK_Y - 36, M.outside.tag));
  nodes.append(note((COL[1] + COL[3] + NW) / 2, BRK_Y - 17, M.outside.claim, 'middle'));

  /* governed-elicitation overlay — ONE application, not the universal return shape */
  const EY = YM + 74;
  nodes.append(el('text', { x: COL[2], y: EY, class:'flow-tag', 'text-anchor':'start' }, [M.elicit.h]));
  nodes.append(note(COL[2], EY + 19, M.elicit.l1));
  nodes.append(note(COL[2], EY + 37, M.elicit.l2));

  /* ===== fork branch — dashed / muted throughout (.held); no colour, no alarm chrome ===== */
  const HB = 'node-box held', HL = 'node-label held';

  nodes.append(box(COL[0], YF - H3/2, NW, H3, HB));
  nodes.append(lbl(COL[0] + 20, YF - 16, M.demote.label, HL));
  nodes.append(note(COL[0] + 20, YF + 4, M.demote.n1));
  nodes.append(note(COL[0] + 20, YF + 23, M.demote.n2));

  nodes.append(box(COL[1], YF - H2/2, NW, H2, HB));
  nodes.append(lbl(COL[1] + 20, YF - 6, M.deriv.label, HL));
  nodes.append(note(COL[1] + 20, YF + 14, M.deriv.note));

  nodes.append(box(COL[2], YF - H3/2, NW, H3, HB));
  nodes.append(lbl(COL[2] + 20, YF - 16, M.borrow.label, HL));
  nodes.append(note(COL[2] + 20, YF + 4, M.borrow.n1));
  nodes.append(note(COL[2] + 20, YF + 23, M.borrow.n2));

  nodes.append(box(COL[3], YF - H3/2, NW, H3, HB));
  nodes.append(lbl(COL[3] + 20, YF - 16, M.noncon.label, HL));
  nodes.append(note(COL[3] + 20, YF + 4, M.noncon.n1));
  nodes.append(note(COL[3] + 20, YF + 23, M.noncon.n2));

  for (let i = 0; i < 3; i++) {
    edges.append(line(`M ${COL[i]+NW} ${YF} L ${COL[i+1]-16} ${YF}`, 'edge held'));
    edges.append(headR(COL[i+1] - 12, YF));
  }

  /* the two load-bearing non-identities, on the branch they govern */
  nodes.append(tag((COL[1] + NW + COL[2]) / 2, YF - 58, M.claimA));
  nodes.append(tag((COL[2] + NW + COL[3]) / 2, YF - 58, M.claimB));

  /* PCS negative pressure case — evidence note beside the fork branch */
  const PY = YF + 82;
  nodes.append(el('text', { x: COL[0], y: PY, class:'flow-tag', 'text-anchor':'start' }, [M.pcs.h]));
  nodes.append(note(COL[0], PY + 19, M.pcs.l1));
  nodes.append(note(COL[0], PY + 37, M.pcs.l2));
  nodes.append(note(COL[0], PY + 55, M.pcs.l3));

  /* ===== tighten the viewBox to drawn content (+ uniform margin), as the sibling figure ===== */
  const VB_PAD = 30;
  const bb = svg.getBBox();
  const vbX = Math.floor(bb.x - VB_PAD), vbY = Math.floor(bb.y - VB_PAD);
  const vbW = Math.ceil(bb.width + 2*VB_PAD), vbH = Math.ceil(bb.height + 2*VB_PAD);
  svg.setAttribute('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`);
  svg.setAttribute('width', vbW);
  svg.setAttribute('height', vbH);

  /* ---- pan / zoom / fit + drag + wheel (local; mirrors the sibling figure) ---- */
  const wrap = document.getElementById('canvasWrap'), stage = document.getElementById('stage'), pct = document.getElementById('zoomPct');
  if (wrap && stage) {
    let tx=0, ty=0, sc=1;
    const apply = () => { stage.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`; if (pct) pct.textContent = Math.round(sc*100)+'%'; };
    /* Fit is DS-owned (diagrams-fit.js; presence checked at the top of this file).

       This figure's interim local realization — the one routed as
       `2026-07-18_method-ASK_to_design-system-ASK_diagram-fit-reserves-panel-band` — has
       been RETIRED: design-system-ASK adopted the panel-band default (PR #77), and
       method-ASK vendored it (PR #122). What landed upstream is stronger than the
       proposal: reservation is overlap-gated (a placement that already clears the chrome
       is returned untouched) and edge-aware (four edges, so chrome is reserved along the
       edge it actually occupies).

       CALLER-OWNED, not DS defaults, carried over from the interim implementation:
       clearanceX 90 (DS default 80), clearanceY 20 — this figure is width-limited and
       deliberately spends less vertical clearance than its sibling — and maxScale 1.3
       (DS default 1.2). Bounds start at ZERO although the tightened viewBox origin above
       is negative: the transform target is the stage div, whose box starts at 0 in CSS
       space, so the viewBox origin never enters the transform. */
    const fit = () => {
      const f = window.DIAGRAM_FIT.compute({
        wrap,
        bounds: { minX: 0, minY: 0, maxX: vbW, maxY: vbH },
        clearanceX: 90, clearanceY: 20, maxScale: 1.3, gutter: 26
      });
      sc = f.scale; tx = f.tx; ty = f.ty; apply();
    };
    /* Refit once the webfonts land — the helper measures the live caption / legend / HUD
       rectangles and the vendored faces use `font-display: swap`. Same treatment as the
       sibling figure. */
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
