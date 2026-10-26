/**
 * Theme Manager (Light / Dark Mode)
 */

export function initTheme(onThemeChange) {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('demorevis-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('demorevis-theme', newTheme);
      if (typeof onThemeChange === 'function') {
        onThemeChange(newTheme);
      }
    });
  }
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre');
  }
}
