/**
 * Mermaid Schematics Viewer
 * Rendering, responsive theme sync, zoom toolbar (+, -, reset), and drag-to-pan.
 */
import mermaid from 'mermaid';

export async function initMermaid() {
  const elements = document.querySelectorAll('.mermaid');
  if (!elements.length) return;

  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default';

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: currentTheme,
    themeVariables: currentTheme === 'dark' ? {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '16px',
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
      fontSize: '16px',
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
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'basis',
      padding: 16,
      nodeSpacing: 34,
      rankSpacing: 38
    }
  });

  try {
    await mermaid.run({
      querySelector: '.mermaid'
    });
  } catch (err) {
    console.error('Mermaid render error:', err);
  }

  initMermaidToolbars();
}

export function initMermaidToolbars() {
  document.querySelectorAll('.mermaid-card').forEach(card => {
    if (card.dataset.toolbarInit) return;
    card.dataset.toolbarInit = 'true';

    const box = card.querySelector('.mermaid-box');
    if (!box) return;

    let currentScale = 1.0;
    const resetBtn = card.querySelector('.btn-zoom-reset');

    function setScale(scale) {
      currentScale = Math.max(0.7, Math.min(2.5, Math.round(scale * 100) / 100));
      const svg = box.querySelector('svg');
      if (svg) {
        if (currentScale === 1.0) {
          svg.style.transform = '';
        } else {
          svg.style.transform = `scale(${currentScale})`;
          svg.style.transformOrigin = 'center top';
        }
        svg.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
      }
      if (resetBtn) {
        resetBtn.textContent = `↺ ${Math.round(currentScale * 100)}%`;
      }
    }

    card.querySelector('.btn-zoom-in')?.addEventListener('click', () => {
      setScale(currentScale + 0.15);
    });

    card.querySelector('.btn-zoom-out')?.addEventListener('click', () => {
      setScale(currentScale - 0.15);
    });

    resetBtn?.addEventListener('click', () => {
      setScale(1.0);
    });

    card.querySelector('.btn-fullscreen')?.addEventListener('click', () => {
      const isFull = card.classList.toggle('fullscreen-mode');
      const btn = card.querySelector('.btn-fullscreen');
      if (btn) btn.innerHTML = isFull ? '✕ Réduire' : '⛶ Plein écran';
      setScale(1.0);
    });

    // Drag-to-pan navigation for comfortable viewing
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    box.addEventListener('mousedown', (e) => {
      isDown = true;
      box.style.cursor = 'grabbing';
      startX = e.pageX - box.offsetLeft;
      scrollLeft = box.scrollLeft;
    });

    box.addEventListener('mouseleave', () => {
      isDown = false;
      box.style.cursor = 'grab';
    });

    box.addEventListener('mouseup', () => {
      isDown = false;
      box.style.cursor = 'grab';
    });

    box.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - box.offsetLeft;
      const walk = (x - startX) * 1.5;
      box.scrollLeft = scrollLeft - walk;
    });
  });
}
