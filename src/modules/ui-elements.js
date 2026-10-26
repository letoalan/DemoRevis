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

  document.querySelectorAll('.art-img-box, .doc-box-img-wrap').forEach(box => {
    box.addEventListener('click', () => {
      const img = box.querySelector('img');
      if (!img) return;

      const card = box.closest('.art-card') || box.closest('.doc-box');
      const title = card?.querySelector('.art-title, .doc-box-title')?.textContent || img.alt || '';
      const artist = card?.querySelector('.art-artist, .doc-box-source')?.textContent || '';

      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalCaption.innerHTML = `
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">${title}</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted);">${artist}</p>
      `;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
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

