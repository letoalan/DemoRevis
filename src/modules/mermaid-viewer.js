/**
 * Mermaid Schematics Viewer
 * Auto wrappingWidth per breakpoint, re-render on resize/theme, zoom toolbar, touch pan & pinch-zoom.
 */
import mermaid from 'mermaid';
import { setupPanZoomEvents } from './pan-zoom-gestures.js';

const sources = new WeakMap();

function wrapWidth() {
  const vw = document.documentElement.clientWidth;
  if (vw < 480) return 160;
  if (vw < 900) return 200;
  return 260;
}

function getThemeVars(isDark) {
  return {
    fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif',
    fontSize: '14.5px',
    primaryColor: isDark ? '#1e3a8a' : '#eff6ff',
    primaryTextColor: isDark ? '#f8fafc' : '#0f172a',
    primaryBorderColor: isDark ? '#60a5fa' : '#1d4ed8',
    lineColor: isDark ? '#93c5fd' : '#1d4ed8',
    secondaryColor: isDark ? '#1e293b' : '#f8fafc',
    tertiaryColor: isDark ? '#131d33' : '#ffffff',
    clusterBkg: isDark ? 'rgba(30, 58, 138, 0.22)' : 'rgba(30, 58, 138, 0.04)',
    clusterBorder: isDark ? '#60a5fa' : '#93c5fd',
    mainBkg: isDark ? '#1e293b' : '#ffffff',
    titleColor: isDark ? '#f8fafc' : '#0f172a'
  };
}

export async function initMermaid(selector = '.mermaid') {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  if (document.fonts?.ready) {
    try { await document.fonts.ready; } catch (_) {}
  }

  elements.forEach(el => {
    if (!sources.has(el)) sources.set(el, el.textContent);
    el.removeAttribute('data-processed');
    el.textContent = sources.get(el);
  });

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: isDark ? 'dark' : 'default',
    themeVariables: getThemeVars(isDark),
    flowchart: {
      htmlLabels: true,
      useMaxWidth: false,
      wrappingWidth: wrapWidth(),
      padding: 14,
      nodeSpacing: 32,
      rankSpacing: 46
    }
  });

  try {
    await mermaid.run({ querySelector: selector });
  } catch (err) {
    console.error('Mermaid render error:', err);
  }

  initMermaidToolbars();
}

let lastBucket = wrapWidth();
window.addEventListener('resize', () => {
  const b = wrapWidth();
  if (b !== lastBucket) {
    lastBucket = b;
    initMermaid();
  }
});

function getSvgDimensions(svg) {
  const vb = svg.viewBox?.baseVal;
  if (vb?.width > 0) return { width: Math.ceil(vb.width), height: Math.ceil(vb.height) };
  const raw = svg.getAttribute('viewBox')?.split(/[\s,]+/).map(Number);
  return { width: Math.ceil(raw?.[2] || 800), height: Math.ceil(raw?.[3] || 500) };
}

export function initMermaidToolbars() {
  document.querySelectorAll('.mermaid-card').forEach(card => {
    const box = card.querySelector('.mermaid-box');
    const stage = card.querySelector('.mermaid');
    const svg = box?.querySelector('svg');
    if (!box || !stage || !svg) return;

    const { width: iW, height: iH } = getSvgDimensions(svg);
    svg.style.width = `${iW}px`;
    svg.style.height = `${iH}px`;
    svg.style.maxWidth = 'none';

    if (card._updateCard) {
      card._updateCard(iW, iH);
      return;
    }

    let scale = 1.0, panX = 0, panY = 0, isRotated = false;
    let curW = iW, curH = iH;

    const fitBtn = card.querySelector('.btn-zoom-fit');
    const resetBtn = card.querySelector('.btn-zoom-reset');
    const rotateBtn = card.querySelector('.btn-rotate');

    function getFitScale() {
      const pad = window.innerWidth <= 768 ? 16 : 28;
      const bW = Math.max(80, box.clientWidth - pad);
      const bH = Math.max(80, box.clientHeight - pad);
      return Math.min(bW / curW, bH / curH, 1.15);
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
      panX = (box.clientWidth - curW * scale) / 2;
      panY = Math.max(8, (box.clientHeight - curH * scale) / 2);
      applyTransform(animate);
    }

    function setReadable(animate = true) {
      scale = 1.0;
      panX = Math.max(12, (box.clientWidth - curW) / 2 > 12 ? (box.clientWidth - curW) / 2 : 12);
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

    card._updateCard = (newW, newH) => {
      curW = newW;
      curH = newH;
      fitToView(false);
    };

    fitToView(false);

    fitBtn?.addEventListener('click', () => fitToView(true));
    resetBtn?.addEventListener('click', () => setReadable(true));
    card.querySelector('.btn-zoom-in')?.addEventListener('click', () => zoomAround(box.clientWidth / 2, box.clientHeight / 2, scale * 1.25));
    card.querySelector('.btn-zoom-out')?.addEventListener('click', () => zoomAround(box.clientWidth / 2, box.clientHeight / 2, scale / 1.25));

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
        scale, panX, panY, fitScale: getFitScale(),
        canPanY: curH * scale > box.clientHeight + 10,
        canPanX: curW * scale > box.clientWidth + 10
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
