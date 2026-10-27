/**
 * Mermaid Schematics Viewer
 * Rendering, responsive theme sync, zoom toolbar, touch pan & pinch-zoom, fit/readable modes.
 */
import mermaid from 'mermaid';
import { setupPanZoomEvents } from './pan-zoom-gestures.js';

export async function initMermaid() {
  const elements = document.querySelectorAll('.mermaid');
  if (!elements.length) return;

  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch (_) {}
  }

  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default';

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: currentTheme,
    themeVariables: currentTheme === 'dark' ? {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '14.5px',
      primaryColor: '#1e3a8a',
      primaryTextColor: '#f8fafc',
      primaryBorderColor: '#60a5fa',
      lineColor: '#93c5fd',
      secondaryColor: '#1e293b',
      tertiaryColor: '#131d33',
      clusterBkg: 'rgba(30, 58, 138, 0.22)',
      clusterBorder: '#60a5fa',
      mainBkg: '#1e293b',
      titleColor: '#f8fafc'
    } : {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '14.5px',
      primaryColor: '#eff6ff',
      primaryTextColor: '#0f172a',
      primaryBorderColor: '#1d4ed8',
      lineColor: '#1d4ed8',
      secondaryColor: '#f8fafc',
      tertiaryColor: '#ffffff',
      clusterBkg: 'rgba(30, 58, 138, 0.04)',
      clusterBorder: '#93c5fd',
      mainBkg: '#ffffff',
      titleColor: '#0f172a'
    },
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
      curve: 'basis',
      padding: 20,
      nodeSpacing: 40,
      rankSpacing: 48
    }
  });

  try {
    await mermaid.run({ querySelector: '.mermaid' });
  } catch (err) {
    console.error('Mermaid render error:', err);
  }

  initMermaidToolbars();
}

function fixNodeHeights(svg) {
  svg.querySelectorAll('.node').forEach(node => {
    const fo = node.querySelector('foreignObject');
    const div = fo?.firstElementChild;
    const rect = node.querySelector('rect');
    if (!fo || !div || !rect) return;

    div.style.overflow = 'visible';
    fo.style.overflow = 'visible';

    const scrollH = Math.ceil(div.scrollHeight || div.offsetHeight || 0);
    const foH = parseFloat(fo.getAttribute('height')) || 0;
    const rectH = parseFloat(rect.getAttribute('height')) || foH;

    if (scrollH > foH - 4) {
      const extraH = scrollH - foH + 18;
      const newRectH = rectH + extraH;
      const newFoH = foH + extraH;

      fo.setAttribute('height', newFoH);
      rect.setAttribute('height', newRectH);

      const rectY = parseFloat(rect.getAttribute('y'));
      if (!isNaN(rectY)) rect.setAttribute('y', rectY - extraH / 2);
      const foY = parseFloat(fo.getAttribute('y'));
      if (!isNaN(foY)) fo.setAttribute('y', foY - extraH / 2);
    }
  });
}

function getSvgDimensions(svg) {
  let w = 920, h = 600;
  if (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width > 0) {
    w = svg.viewBox.baseVal.width;
    h = svg.viewBox.baseVal.height;
  } else {
    const vb = svg.getAttribute('viewBox');
    if (vb) {
      const p = vb.split(/[\s,]+/).map(Number);
      if (p.length === 4 && p[2] > 0) { w = p[2]; h = p[3]; }
    }
  }
  return { width: Math.ceil(w), height: Math.ceil(h + 30) };
}

export function initMermaidToolbars() {
  document.querySelectorAll('.mermaid-card').forEach(card => {
    const box = card.querySelector('.mermaid-box');
    const stage = card.querySelector('.mermaid');
    const svg = box?.querySelector('svg');
    if (!box || !stage || !svg) return;

    fixNodeHeights(svg);

    const { width: iW, height: iH } = getSvgDimensions(svg);
    svg.style.width = `${iW}px`;
    svg.style.height = `${iH}px`;
    svg.style.maxWidth = 'none';

    let scale = 1.0;
    let panX = 0;
    let panY = 0;
    let isRotated = false;

    const fitBtn = card.querySelector('.btn-zoom-fit');
    const resetBtn = card.querySelector('.btn-zoom-reset');
    const rotateBtn = card.querySelector('.btn-rotate');

    function getFitScale() {
      const pad = window.innerWidth <= 768 ? 16 : 28;
      const bW = Math.max(80, box.clientWidth - pad);
      const bH = Math.max(80, box.clientHeight - pad);
      return Math.min(bW / iW, bH / iH, 1.15);
    }

    function applyTransform(animate = true) {
      stage.classList.toggle('is-dragging', !animate);
      stage.style.transform = `translate3d(${Math.round(panX)}px, ${Math.round(panY)}px, 0) scale(${scale})`;
      if (resetBtn) resetBtn.textContent = `🔍 Lisible (${Math.round(scale * 100)}%)`;
      if (fitBtn) fitBtn.classList.toggle('is-active', Math.abs(scale - getFitScale()) < 0.05);
      if (resetBtn) resetBtn.classList.toggle('is-active', Math.abs(scale - 1.0) < 0.05);
    }

    function fitToView(animate = true) {
      scale = getFitScale();
      panX = (box.clientWidth - iW * scale) / 2;
      panY = Math.max(8, (box.clientHeight - iH * scale) / 2);
      applyTransform(animate);
    }

    function setReadable(animate = true) {
      scale = 1.0;
      panX = Math.max(12, (box.clientWidth - iW) / 2 > 12 ? (box.clientWidth - iW) / 2 : 12);
      panY = 16;
      applyTransform(animate);
    }

    function zoomAround(cx, cy, newScale) {
      newScale = Math.max(0.22, Math.min(2.8, newScale));
      panX = cx - (cx - panX) * (newScale / scale);
      panY = cy - (cy - panY) * (newScale / scale);
      scale = newScale;
      applyTransform(true);
    }

    fitToView(false);

    if (card.dataset.toolbarInit) return;
    card.dataset.toolbarInit = 'true';

    fitBtn?.addEventListener('click', () => fitToView(true));
    resetBtn?.addEventListener('click', () => setReadable(true));

    card.querySelector('.btn-zoom-in')?.addEventListener('click', () => {
      zoomAround(box.clientWidth / 2, box.clientHeight / 2, scale * 1.25);
    });

    card.querySelector('.btn-zoom-out')?.addEventListener('click', () => {
      zoomAround(box.clientWidth / 2, box.clientHeight / 2, scale / 1.25);
    });

    card.querySelector('.btn-fullscreen')?.addEventListener('click', () => {
      const isFull = card.classList.toggle('fullscreen-mode');
      const btn = card.querySelector('.btn-fullscreen');
      if (btn) btn.innerHTML = isFull ? '✕ Quitter' : '⛶ Plein écran';
      document.body.style.overflow = isFull ? 'hidden' : '';
      if (!isFull && isRotated) {
        isRotated = false;
        card.classList.remove('is-rotated');
      }
      setTimeout(() => fitToView(true), 80);
    });

    rotateBtn?.addEventListener('click', () => {
      isRotated = !isRotated;
      card.classList.toggle('is-rotated', isRotated);
      setTimeout(() => fitToView(true), 80);
    });

    setupPanZoomEvents(box, stage, {
      getState: () => ({
        scale,
        panX,
        panY,
        fitScale: getFitScale(),
        canPanY: iH * scale > box.clientHeight + 10,
        canPanX: iW * scale > box.clientWidth + 10
      }),
      setPan: (x, y) => { panX = x; panY = y; applyTransform(false); },
      zoomAround,
      toggleMode: () => {
        if (Math.abs(scale - getFitScale()) < 0.1) setReadable(true);
        else fitToView(true);
      }
    });
  });
}



