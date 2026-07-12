/* method-ASK_bounded-generativity.figure.js — horizontal-flow revision (ASK visual review 2026-07-12) */
(function () {
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

  /* ===== source of intent / normative apex — OUTSIDE the frame, left ===== */
  nodes.append(lbl(34, 250, M.apex.label));
  nodes.append(note(34, 268, M.apex.sub));
  nodes.append(note(34, 286, M.apex.note1));
  nodes.append(note(34, 304, M.apex.note2));

  /* ===== bounded generativity frame ===== */
  const FX = 340, FY = 168, FW = 1016, FH = 310;   // x 340-1356, y 168-478
  nodes.append(el('rect', { x:FX, y:FY, width:FW, height:FH, rx:14, ry:14, class:'flow-group' }));
  nodes.append(tag(FX + FW/2, FY - 14, M.bracket));

  /* ===== source beam enters the frame → grammar/brief (the inside-frame carrier) ===== */
  edges.append(line(`M 40 ${YM} L 356 ${YM}`));
  edges.append(headR(356, YM));
  nodes.append(box(360, YM-26, 182, 52));
  nodes.append(lbl(376, YM-4, M.grammar.label));
  nodes.append(note(376, YM+14, M.grammar.note));

  /* ===== grammar/brief grants the aperture → beam continues into the chamber's left-edge opening ===== */
  const CX = 590, CY = 200, CW = 540, CH = 240;    // chamber, centre_y = 320
  edges.append(line(`M 542 ${YM} L 584 ${YM}`));
  edges.append(headR(588, YM));
  nodes.append(el('rect', { x:CX, y:CY, width:CW, height:CH, rx:8, ry:8, class:'flow-group' }));
  nodes.append(el('text', { x: CX + CW/2, y: CY + CH + 20, class:'section-tag', 'text-anchor':'middle' }, [M.field.tag]));

  /* ---- aperture: the opening in the chamber's LEFT edge, centred on YM, opening on either side ---- */
  const AP = 44;   // aperture half-height (opens AP above and below the entry)
  edges.append(line(`M ${CX-14} ${YM-AP} L ${CX-14} ${YM+AP}`));   // ↕ permitted-variance dimension
  edges.append(headU(CX-14, YM-AP));
  edges.append(headD(CX-14, YM+AP));
  edges.append(line(`M ${CX} ${YM-AP} L ${CX+18} ${YM-10}`));       // iris blade (upper) — opens toward the entry
  edges.append(line(`M ${CX} ${YM+AP} L ${CX+18} ${YM+10}`));       // iris blade (lower)
  nodes.append(el('text', { x: CX-28, y: YM, class:'flow-tag', 'text-anchor':'middle',
    transform:`rotate(-90 ${CX-28} ${YM})` }, [M.field.aperture]));

  /* ---- candidate variance — varied glyphs filling the chamber ---- */
  nodes.append(box(648, 236, 30, 30));
  nodes.append(el('rect', { x:730, y:232, width:30, height:30, rx:2, transform:'rotate(45 745 247)', class:'node-box' }));
  nodes.append(el('circle', { cx:812, cy:252, r:15, class:'node-box' }));
  nodes.append(el('path', { class:'node-box', d:'M 892 236 L 910 266 L 874 266 Z' }));
  nodes.append(box(970, 240, 28, 28));
  nodes.append(box(676, 330, 26, 26));
  nodes.append(el('circle', { cx:772, cy:344, r:14, class:'node-box' }));
  nodes.append(el('rect', { x:858, y:332, width:26, height:26, rx:2, transform:'rotate(45 871 345)', class:'node-box' }));
  nodes.append(el('circle', { cx:965, cy:344, r:13, class:'node-box' }));
  nodes.append(tag(1046, 236, M.field.variance, 'start'));
  edges.append(line(`M 632 402 L 1088 402`, 'edge', '1 5'));
  nodes.append(note(CX + CW/2, 396, M.field.judgment, 'middle'));

  /* ===== selection + closure — STRAIGHT out of the chamber (horizontal), ring on the YM axis.
         Annotation sits BELOW the ring — the flow ELEVATES above it into governance. ===== */
  const SC = { x: 1240, y: YM };
  edges.append(line(`M ${CX+CW} ${YM} L ${SC.x-46} ${YM}`));
  edges.append(headR(SC.x-46, YM));
  edges.append(el('circle', { class:'edge', cx:SC.x, cy:SC.y, r:42, fill:'none' }));
  nodes.append(box(SC.x-26, SC.y-26, 52, 52));
  nodes.append(tag(SC.x, 394, M.select.tag));
  nodes.append(note(SC.x, 412, M.select.note1, 'middle'));
  nodes.append(note(SC.x, 429, M.select.note2, 'middle'));

  /* ===== artifact governance — the flow ELEVATES through selection → governance: vertical RISE,
         box ABOVE the ring (elevating matters more than reader eye-direction). ===== */
  edges.append(line(`M ${SC.x} ${SC.y-42} L ${SC.x} 238`));
  edges.append(headU(SC.x, 234));
  nodes.append(box(1160, 190, 160, 44));
  nodes.append(lbl(1176, 216, M.govern.label));

  /* ===== governed artifact + record — OUTSIDE the frame, at the (elevated) governance level ===== */
  edges.append(line(`M 1320 212 L 1388 212`));
  edges.append(headR(1388, 212));
  nodes.append(box(1394, 183, 178, 58));
  nodes.append(lbl(1410, 206, M.output.label));
  nodes.append(note(1410, 224, M.output.note));

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
