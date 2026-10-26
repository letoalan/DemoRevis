/**
 * Generic UI elements: reading progress, mobile nav drawer, image lightbox,
 * document accordions, and lexicon search filter.
 */

export function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

export function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav-drawer');
  if (!toggleBtn || !mobileNav) return;

  function closeMenu() {
    mobileNav.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.textContent = '☰';
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggleBtn.textContent = isOpen ? '✕' : '☰';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && e.target !== toggleBtn) {
      closeMenu();
    }
  });
}

export function initLightbox() {
  const modal = document.getElementById('image-modal');
  if (!modal) return;

  const modalImg = modal.querySelector('.modal-img');
  const modalCaption = modal.querySelector('.modal-caption');
  const closeBtn = modal.querySelector('.modal-close-btn');

  function openModal(img) {
    if (!img || !img.src) return;
    const card = img.closest('.art-card, .doc-box, .study-section, figure, article') || img.parentElement;
    const title = card?.querySelector('.art-title, .doc-box-title, h3, h2')?.textContent?.trim() || img.alt || 'Document iconographique';
    const source = card?.querySelector('.art-artist, .doc-box-source, figcaption, .tag-badge')?.textContent?.trim() || '';

    modalImg.src = img.src;
    modalImg.alt = img.alt || title;
    modalCaption.innerHTML = `
      <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">${title}</h3>
      ${source ? `<p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.35rem;">${source}</p>` : ''}
      <p style="font-size: 0.78rem; color: var(--color-gold); font-weight: 600;">🔍 Cliquez sur l'image pour la rétrécir et revenir au cours</p>
    `;
    modal.style.display = 'flex';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    // Si la modale est ouverte : un clic sur l'image agrandie ou n'importe où rétrécit et ferme
    if (modal.classList.contains('open')) {
      if (e.target === modalImg || e.target === closeBtn || e.target === modal || e.target.closest('.modal-close-btn') || e.target.closest('.modal-content')) {
        closeModal();
        return;
      }
    }

    // Détection universelle de clic sur toute image de cours ou document
    const imgTarget = e.target.closest('img');
    const boxTarget = e.target.closest('.art-img-box, .doc-box-img-wrap');

    if (imgTarget && !imgTarget.closest('#image-modal') && !imgTarget.closest('.logo') && imgTarget.naturalWidth > 32) {
      e.preventDefault();
      openModal(imgTarget);
    } else if (boxTarget && !boxTarget.closest('#image-modal')) {
      const img = boxTarget.querySelector('img');
      if (img) {
        e.preventDefault();
        openModal(img);
      }
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}


export function initDocAccordions() {
  document.querySelectorAll('.doc-corrige-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const box = btn.closest('.doc-box, .art-card, .study-section') || btn.parentElement;
      const target = box ? box.querySelector('.transcription-body, .doc-corrige-content') : btn.nextElementSibling;
      if (!target) return;
      const isOpen = target.classList.toggle('open');
      target.style.display = isOpen ? 'block' : 'none';
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const arrow = btn.querySelector('.corrige-arrow');
      if (arrow) arrow.textContent = isOpen ? '▲ Masquer' : '▼ Afficher';
    });
  });
}

export function initLexiconSearch() {
  const searchInput = document.getElementById('lexique-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    document.querySelectorAll('.lexique-item').forEach(item => {
      const term = item.querySelector('.lexique-term')?.textContent.toLowerCase() || '';
      const def = item.querySelector('.lexique-def')?.textContent.toLowerCase() || '';
      if (term.includes(query) || def.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

export function initScrollToTop() {
  const btn = document.getElementById('btn-scroll-top');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

