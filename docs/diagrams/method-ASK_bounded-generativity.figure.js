/* method-ASK_bounded-generativity.figure.js
   Bespoke static figure for the bounded-generativity method primitive.

   NOT a design-system-ASK scaffold. It reuses the DS static-diagram VISUAL
   CONTRACT — tokens, typography, gradient field, shell, PNG exporter, and the
   shared SVG classes (node-box, node-label, node-note, edge, edge-arrowhead,
   flow-group, flow-tag, section tags) — but lays out custom geometry the H / V /
   SEQ / FLOW engines do not own. It does not claim to be one of those grammars,
   and it introduces no new shared design-system class and no new hue (the HTML
   adds only a local `.legend .foot` style for its own caption row). A reusable
   Class A scaffold is only considered later, if this geometry earns graduation
   across >1 consumer.

   Semantic contract (method altitude — faithful to docs/bounded-generativity.md):
     · SOURCE OF INTENT / normative apex sits OUTSIDE the frame — it supplies or
       authorizes purpose + the governing standard; it is not part of the
       execution architecture.
     · the GRAMMAR / BRIEF GRANTS the aperture. The aperture is a *quantity* —
       the permitted variance — drawn as the OPENING of the realization field,
       never a sequential node.
     · BOUNDED REALIZATION / execution span ("the middle") fills the aperture
       with candidate variance (executive · nonjudgmental). AUTHORIZED JUDGMENT
       may enter within realization — the dotted path marks judgment-bearing spans
       in the field — and at closure, where the ringed selection gate is itself a
       judgment act. Judgment is not the aperture and not the container.
     · SELECTION + CLOSURE ratifies one candidate and closes the aperture. It is
       DISTINCT from
     · ARTIFACT GOVERNANCE, a downstream binding operation (not a fourth branch
       of the legislative / executive / judicial spine).
     · output = GOVERNED ARTIFACT + GOVERNANCE RECORD (outside the frame).

   The whole apparatus — grammar → realization → selection → governance — is
   BRACKETED as "bounded generativity." This is deliberately NOT a linear chain:
   AP's ordered creative-intent → discretion → variance → selection → governance
   sequence is the *function-order projection* (its SEQ diagram); this is the
   *system-model topology* the projection is true of.

   ILLUSTRATIVE. docs/bounded-generativity.md is source truth; the diagram is a
   doctrine-subordinate rendering and may lag the prose. Bump the source-v /
   render-v stamp in the HTML when the content changes.
*/
(function () {
  /* ---- semantic model (edit labels here; geometry is below) ---- */
  const M = {
    apex:   { label: 'source of intent', sub: 'normative apex', note1: 'supplies purpose +', note2: 'governing standard' },
    grammar:{ label: 'grammar / brief', note: 'grants the aperture' },
    field:  { tag: 'bounded realization  ·  execution span  ·  «the middle»', aperture: 'aperture · permitted variance', variance: 'variance', judgment: '· · ·  authorized judgment where present  · · ·' },
    select: { tag: 'selection + closure', note1: 'ratifies one candidate', note2: 'aperture closes' },
    govern: { label: 'artifact governance' },
    output: { label: 'governed artifact', note: '+ governance record' },
    bracket:'bounded generativity',
  };

  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 1180, H = 600;
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
  const edges = el('g', { class: 'edges' });
  const nodes = el('g', { class: 'nodes' });
  svg.append(edges, nodes);

  const AH = 9;
  const headR = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH} ${y-AH/1.6} L ${x-AH} ${y+AH/1.6} L ${x} ${y} Z` });
  const headD = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH/1.6} ${y-AH} L ${x+AH/1.6} ${y-AH} L ${x} ${y} Z` });
  const headU = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH/1.6} ${y+AH} L ${x+AH/1.6} ${y+AH} L ${x} ${y} Z` });
  const box = (x, y, w, h, cls='node-box') => el('rect', { x, y, width:w, height:h, rx:4, ry:4, class:cls });
  const line = (d, cls='edge', dash=null) => el('path', { class:cls, fill:'none', d, 'stroke-dasharray':dash });
  const lbl = (x, y, t, cls='node-label', a='start') => el('text', { x, y, class:cls, 'text-anchor':a }, [t]);
  const note = (x, y, t, a='start') => el('text', { x, y, class:'node-note', 'text-anchor':a }, [t]);
  const tag = (x, y, t, a='middle') => el('text', { x, y, class:'flow-tag', 'text-anchor':a }, [t]);

  /* ===== source of intent / normative apex — OUTSIDE the frame ===== */
  nodes.append(lbl(34, 144, M.apex.label));
  nodes.append(note(34, 162, M.apex.sub));
  nodes.append(note(34, 180, M.apex.note1));   // wrapped so the note stays wholly OUTSIDE the frame (maxX <= FX-12)
  nodes.append(note(34, 198, M.apex.note2));
  edges.append(line('M 40 210 L 285 210'));
  edges.append(headR(285, 210));

  /* ===== bounded generativity frame (the whole apparatus) ===== */
  const FX = 250, FY = 120, FW = 690, FH = 430;
  nodes.append(el('rect', { x:FX, y:FY, width:FW, height:FH, rx:14, ry:14, class:'flow-group' }));
  nodes.append(tag(FX + FW/2, FY - 14, M.bracket));

  /* ---- grammar / brief — grants the aperture ---- */
  nodes.append(box(285, 184, 200, 52));
  nodes.append(lbl(301, 206, M.grammar.label));
  nodes.append(note(301, 224, M.grammar.note));
  edges.append(line('M 385 236 L 385 274'));
  edges.append(headD(385, 278));

  /* ---- bounded realization field — aperture is its opening (geometry) ---- */
  const RX = 300, RY = 278, RW = 380, RH = 196;
  nodes.append(el('rect', { x:RX, y:RY, width:RW, height:RH, rx:8, ry:8, class:'flow-group' }));
  nodes.append(el('text', { x: RX + RW/2, y: RY + RH + 20, class:'section-tag', 'text-anchor':'middle' }, [M.field.tag]));
  edges.append(line(`M ${RX} ${RY+16} L ${RX} ${RY+RH-16}`));
  edges.append(headD(RX, RY+RH-16));
  edges.append(headU(RX, RY+16));
  nodes.append(el('text', { x: RX-12, y: RY+RH/2, class:'flow-tag', 'text-anchor':'middle',
    transform:`rotate(-90 ${RX-12} ${RY+RH/2})` }, [M.field.aperture]));
  // candidate variance — varied glyphs (square / diamond / circle / triangle)
  nodes.append(box(346, 300, 26, 26));
  nodes.append(el('rect', { x:415, y:296, width:26, height:26, rx:2, transform:'rotate(45 428 309)', class:'node-box' }));
  nodes.append(el('circle', { cx:492, cy:314, r:14, class:'node-box' }));
  nodes.append(el('path', { class:'node-box', d:'M 556 300 L 574 328 L 538 328 Z' }));
  nodes.append(box(372, 356, 24, 24));
  nodes.append(el('circle', { cx:460, cy:372, r:13, class:'node-box' }));
  nodes.append(el('rect', { x:540, y:360, width:24, height:24, rx:2, transform:'rotate(45 552 372)', class:'node-box' }));
  nodes.append(tag(618, 306, M.field.variance, 'start'));
  // authorized judgment — the dotted path (distinct dash) marks judgment-bearing spans
  // WITHIN the realization field; judgment AT closure is the ringed selection gate (below).
  edges.append(line('M 330 436 L 662 436', 'edge', '1 5'));
  nodes.append(note(RX + RW/2, 430, M.field.judgment, 'middle'));

  /* ---- selection + closure — ringed gate, distinct from governance ---- */
  const SC = { x: 760, y: 340 };
  edges.append(line(`M ${RX+RW} 372 L ${SC.x-46} 350`));
  edges.append(headR(SC.x-44, 350));
  edges.append(el('circle', { class:'edge', cx:SC.x, cy:SC.y, r:42, fill:'none' }));
  nodes.append(box(SC.x-26, SC.y-26, 52, 52));
  // annotation ABOVE the ring, centred — keeps both lines wholly INSIDE the frame
  // (ring sits far right; a right-side label would straddle FX+FW). maxX <= FX+FW-12.
  nodes.append(tag(SC.x, 250, M.select.tag, 'middle'));
  nodes.append(note(SC.x, 268, M.select.note1, 'middle'));
  nodes.append(note(SC.x, 285, M.select.note2, 'middle'));

  /* ---- artifact governance — a DISTINCT downstream operation, wholly clear of the
         realization field (x >= 700 > field right edge 680; below the selection ring) ---- */
  edges.append(line(`M ${SC.x} ${SC.y+42} L ${SC.x} 458`));
  edges.append(headD(SC.x, 462));
  nodes.append(box(700, 462, 195, 40));
  nodes.append(lbl(716, 486, M.govern.label));
  edges.append(line('M 895 482 L 1000 482'));
  edges.append(headR(1000, 482));

  /* ===== governed artifact + governance record — OUTSIDE the frame ===== */
  nodes.append(box(1005, 454, 162, 58));
  nodes.append(lbl(1021, 477, M.output.label));
  nodes.append(note(1021, 495, M.output.note));

  /* ---- pan / zoom / fit — local behavior (mirrors the DS static engines;
         does not edit or fork the shared engine). fit + zoom buttons, plus
         pointer-drag panning and cursor-centred wheel zoom, so the inherited
         grab cursor / .dragging state are actually functional. ---- */
  const wrap = document.getElementById('canvasWrap'), stage = document.getElementById('stage'), pct = document.getElementById('zoomPct');
  if (wrap && stage) {
    let tx=0, ty=0, sc=1;
    const apply = () => { stage.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`; if (pct) pct.textContent = Math.round(sc*100)+'%'; };
    const fit = () => { const r=wrap.getBoundingClientRect(); const pad=90;
      sc=Math.min((r.width-pad)/W,(r.height-pad)/H,1.3); tx=(r.width-W*sc)/2; ty=(r.height-H*sc)/2; apply(); };
    fit(); window.addEventListener('resize', fit);
    const zi=document.getElementById('zoomIn'), zo=document.getElementById('zoomOut'), zf=document.getElementById('zoomFit');
    if (zi) zi.onclick=()=>{sc=Math.min(sc*1.2,4);apply();};
    if (zo) zo.onclick=()=>{sc=Math.max(sc/1.2,0.2);apply();};
    if (zf) zf.onclick=fit;

    // drag to pan (ignore clicks on the glass panels), with pointer capture
    let dragging=false, px0=0, py0=0, tx0=0, ty0=0;
    wrap.addEventListener('pointerdown', (ev) => {
      if (ev.target.closest('.hud, .legend, .caption')) return;
      dragging=true; wrap.classList.add('dragging'); wrap.setPointerCapture(ev.pointerId);
      px0=ev.clientX; py0=ev.clientY; tx0=tx; ty0=ty;
    });
    wrap.addEventListener('pointermove', (ev) => {
      if (!dragging) return; tx=tx0+(ev.clientX-px0); ty=ty0+(ev.clientY-py0); apply();
    });
    const endDrag=() => { dragging=false; wrap.classList.remove('dragging'); };
    wrap.addEventListener('pointerup', endDrag);
    wrap.addEventListener('pointercancel', endDrag);
    // cursor-centred wheel zoom, bounded
    wrap.addEventListener('wheel', (ev) => {
      ev.preventDefault();
      const r=wrap.getBoundingClientRect(), mx=ev.clientX-r.left, my=ev.clientY-r.top;
      const ns=Math.max(0.2, Math.min(4, sc*(ev.deltaY>0 ? 1/1.1 : 1.1))), k=ns/sc;
      tx=mx-(mx-tx)*k; ty=my-(my-ty)*k; sc=ns; apply();
    }, { passive:false });
  }
})();
