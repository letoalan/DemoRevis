/**
 * LocalStorage utilities for Document Analysis Studio
 */

export function resolvePath(path) {
  if (!path) return '';
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : base + '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return cleanBase + cleanPath;
}

export function getStorageKey(subjKey) {
  return `demorevis-analyse-data-${subjKey}`;
}

export function getHintsStorageKey(subjKey) {
  return `demorevis-hints-state-${subjKey}`;
}

export function loadFormData(subjKey) {
  try {
    const data = localStorage.getItem(getStorageKey(subjKey));
    return data ? JSON.parse(data) : {};
  } catch (_) {
    return {};
  }
}

export function saveFormData(subjKey, data) {
  try {
    localStorage.setItem(getStorageKey(subjKey), JSON.stringify(data));
    showSaveIndicator();
  } catch (e) {
    console.warn('Storage save error:', e);
  }
}

export function loadHintsState(subjKey) {
  try {
    const data = localStorage.getItem(getHintsStorageKey(subjKey));
    return data ? JSON.parse(data) : {};
  } catch (_) {
    return {};
  }
}

export function saveHintsState(subjKey, state) {
  try {
    localStorage.setItem(getHintsStorageKey(subjKey), JSON.stringify(state));
  } catch (e) {
    console.warn('Hints state save error:', e);
  }
}

export function showSaveIndicator() {
  const indicator = document.getElementById('save-status');
  if (indicator) {
    indicator.innerHTML = '<span class="save-dot"></span> Brouillon enregistré';
    indicator.style.opacity = '1';
    setTimeout(() => {
      indicator.style.opacity = '0.7';
    }, 2000);
  }
}
