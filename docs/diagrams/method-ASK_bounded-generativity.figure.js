/* method-ASK_bounded-generativity.figure.js — horizontal flow + Three Functions color (source-v3, ASK 2026-07-12)
   Consumes design-system-ASK Three Functions by reference (_dsa-tokens/three-functions.css):
   legislative = grammar/brief box · executive = the bounded-realization chamber (variance = negative cutouts)
   · judicial = selection ring + ratified node. Everything else neutral. */
(function () {
  const M = {
    apex:   { label: 'source of intent', sub: 'normative apex', note1: 'supplies purpose +', note2: 'governing standard' },
    grammar:{ label: 'grammar / brief', note: 'grants the aperture' },
    field:  { tag: 'bounded realization  ·  execution span  ·  «the middle»', aperture: 'aperture · permitted variance', variance: 'variance', judgment: '· · ·  authorized judgment where present  · · ·' },
    select: { tag: 'selection + closure', note1: 'ratifies one candidate', note2: 'aperture closes' },
    govern: { label: 'artifact governance', note: 'binds the accepted result' },
    output: { label: 'governed artifact', note: '+ governance record' },
    bracket:'bounded generativity',
  };

  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 1600, H = 620, YM = 320;   // YM = main horizontal axis (source → grammar → aperture → chamber → selection)
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
  const headR = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH} ${y-AH/1.6} L ${x-AH} ${y+AH/1.6} L ${x} ${y} Z` });
  const headD = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH/1.6} ${y-AH} L ${x+AH/1.6} ${y-AH} L ${x} ${y} Z` });
  const headU = (x, y) => el('path', { class: 'edge-arrowhead', d: `M ${x-AH/1.6} ${y+AH} L ${x+AH/1.6} ${y+AH} L ${x} ${y} Z` });
  const box = (x, y, w, h, cls='node-box') => el('rect', { x, y, width:w, height:h, rx:4, ry:4, class:cls });
  const line = (d, cls='edge', dash=null) => el('path', { class:cls, fill:'none', d, 'stroke-dasharray':dash });
  const lbl = (x, y, t, cls='node-label', a='start') => el('text', { x, y, class:cls, 'text-anchor':a }, [t]);
  const note = (x, y, t, a='start') => el('text', { x, y, class:'node-note', 'text-anchor':a }, [t]);
  const tag = (x, y, t, a='middle') => el('text', { x, y, class:'flow-tag', 'text-anchor':a }, [t]);

  /* ===== source of intent / normative apex — OUTSIDE the frame, left · NEUTRAL ===== */
  nodes.append(lbl(140, 250, M.apex.label));
  nodes.append(note(140, 268, M.apex.sub));
  nodes.append(note(140, 286, M.apex.note1));
  nodes.append(note(140, 304, M.apex.note2));

  /* ===== bounded generativity frame · NEUTRAL ===== */
  const FX = 340, FY = 168, FW = 916, FH = 310;   // x 340-1256, y 168-478 (right edge pulled in with the downstream compression)
  nodes.append(el('rect', { x:FX, y:FY, width:FW, height:FH, rx:14, ry:14, class:'flow-group' }));
  nodes.append(tag(FX + FW/2, FY - 14, M.bracket));

  /* ===== source beam · NEUTRAL → grammar/brief = LEGISLATIVE ===== */
  edges.append(line(`M 146 ${YM} L 356 ${YM}`));
  edges.append(headR(356, YM));
  nodes.append(box(360, YM-29, 182, 58, 'node-box fn-leg'));   // two-line node, 58px, centred on YM
  nodes.append(lbl(376, YM-6, M.grammar.label));
  nodes.append(note(376, YM+12, M.grammar.note));

  /* ===== grammar/brief grants the aperture → beam · NEUTRAL → chamber = EXECUTIVE apparatus ===== */
  const CX = 590, CY = 190, CW = 440, CH = 250;    // chamber; top aligned to artifact-governance box (y=190). Compressed horizontally (was 540) with the variance set reduced 9→7.
  edges.append(line(`M 542 ${YM} L 584 ${YM}`));
  edges.append(headR(588, YM));

  /* variance glyph geometry — used twice: as black holes in the executive mask, and as neutral outlines on top */
  const glyphs = [   // 7 marks — plurality/heterogeneity/non-finality without a tidy matrix (top-left cube + one bottom circle removed per ASK)
    { t:'rect',   x:653, y:232, w:30, h:30, rx:2, rot:'rotate(45 668 247)' },   // diamond, top
    { t:'circle', cx:760, cy:250, r:15 },                                       // circle, top
    { t:'path',   d:'M 852 236 L 870 266 L 834 266 Z' },                        // triangle, top
    { t:'rect',   x:934, y:239, w:28, h:28, rx:4 },                             // square, top
    { t:'rect',   x:685, y:328, w:30, h:30, rx:4 },                             // cube, bottom
    { t:'rect',   x:797, y:332, w:26, h:26, rx:2, rot:'rotate(45 810 345)' },   // diamond, bottom
    { t:'circle', cx:920, cy:343, r:13 },                                       // circle, bottom
  ];
  const glyphEl = (g, attrs) =>
    g.t === 'rect'   ? el('rect',   Object.assign({ x:g.x, y:g.y, width:g.w, height:g.h, rx:g.rx, ry:g.rx, transform:g.rot }, attrs)) :
    g.t === 'circle' ? el('circle', Object.assign({ cx:g.cx, cy:g.cy, r:g.r }, attrs)) :
                       el('path',   Object.assign({ d:g.d }, attrs));

  /* executive mask: chamber white (wash shows), glyphs black (punched out as holes) */
  const defs = el('defs');
  const mask = el('mask', { id:'exe-holes', maskUnits:'userSpaceOnUse', x:CX-4, y:CY-4, width:CW+8, height:CH+8 });
  mask.append(el('rect', { x:CX, y:CY, width:CW, height:CH, rx:8, ry:8, fill:'#fff' }));
  glyphs.forEach(g => mask.append(glyphEl(g, { fill:'#000' })));
  defs.append(mask);
  svg.insertBefore(defs, edges);

  /* chamber = the EXECUTIVE apparatus: executive fill (30%, from the consuming CSS) with the glyphs punched OUT as holes, + executive stroke */
  nodes.append(el('rect', { x:CX, y:CY, width:CW, height:CH, rx:8, ry:8, class:'fn-exe-wash', mask:'url(#exe-holes)' }));
  nodes.append(el('rect', { x:CX, y:CY, width:CW, height:CH, rx:8, ry:8, class:'flow-group fn-exe-chamber' }));
  nodes.append(el('text', { x: CX + CW/2, y: CY + CH + 20, class:'section-tag', 'text-anchor':'middle' }, [M.field.tag]));

  /* ---- aperture: opening in the chamber's LEFT edge · NEUTRAL geometry (a quantity, not an actor) ---- */
  const AP = 74;   // aperture half-height (opens AP above and below the entry)
  edges.append(line(`M ${CX-14} ${YM-AP} L ${CX-14} ${YM+AP}`));   // ↕ permitted-variance dimension
  edges.append(headU(CX-14, YM-AP));
  edges.append(headD(CX-14, YM+AP));
  edges.append(line(`M ${CX} ${YM-AP} L ${CX+18} ${YM-10}`));       // iris blade (upper)
  edges.append(line(`M ${CX} ${YM+AP} L ${CX+18} ${YM+10}`));       // iris blade (lower)
  nodes.append(el('text', { x: CX-28, y: YM, class:'flow-tag', 'text-anchor':'middle',
    transform:`rotate(-90 ${CX-28} ${YM})` }, [M.field.aperture]));

  /* ---- variance candidates — NEGATIVE cutouts through the executive wash, neutral outlines
         (executive produces variance; the glyphs are content, NOT executive-function objects) ---- */
  glyphs.forEach(g => nodes.append(glyphEl(g, { class:'node-box fn-cut' })));
  nodes.append(tag(928, 214, M.field.variance, 'start'));
  edges.append(line(`M 620 402 L 1000 402`, 'edge', '1 5'));       // dotted authorized-judgment path · NEUTRAL
  nodes.append(note(CX + CW/2, 396, M.field.judgment, 'middle'));

  /* ===== selection + closure = JUDICIAL — ring + ratified candidate ===== */
  const SC = { x: 1130, y: YM };   // pulled left with the chamber compression (tightens chamber → selection); centred under the governance box
  edges.append(line(`M ${CX+CW} ${YM} L ${SC.x-46} ${YM}`));
  edges.append(headR(SC.x-46, YM));
  edges.append(el('circle', { class:'edge fn-jud-ring', cx:SC.x, cy:SC.y, r:42, fill:'none' }));
  nodes.append(box(SC.x-26, SC.y-26, 52, 52, 'node-box fn-jud'));
  nodes.append(tag(SC.x, 394, M.select.tag));
  nodes.append(note(SC.x, 412, M.select.note1, 'middle'));
  nodes.append(note(SC.x, 429, M.select.note2, 'middle'));

  /* ===== artifact governance — DOWNSTREAM, NEUTRAL (not a fourth color); two-line 58px node,
         top aligned to the chamber top (y=190) ===== */
  edges.append(line(`M ${SC.x} ${SC.y-42} L ${SC.x} 252`));
  edges.append(headU(SC.x, 248));
  nodes.append(box(1040, 190, 180, 58));   // width 180 (centre 1130 = selection axis) so the two-line subtext fits
  nodes.append(lbl(1056, 213, M.govern.label));
  nodes.append(note(1056, 231, M.govern.note));

  /* ===== governed artifact + record — OUTSIDE the frame · NEUTRAL; two-line 58px node,
         top-aligned to the artifact-governance box (y=190) ===== */
  edges.append(line(`M 1220 219 L 1268 219`));
  edges.append(headR(1268, 219));
  nodes.append(box(1274, 190, 178, 58));
  nodes.append(lbl(1290, 213, M.output.label));
  nodes.append(note(1290, 231, M.output.note));

  /* ---- pan / zoom / fit + drag + wheel (local; mirrors the DS engines) ---- */
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
