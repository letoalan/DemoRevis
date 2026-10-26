/**
 * DemoRevis - Studio d'Analyse Critique de Documents
 * Architecture modulaire (< 200 lignes par fichier).
 */
import { SUJETS } from './analyse/sujets-data.js';
import {
  resolvePath,
  getStorageKey,
  getHintsStorageKey,
  loadFormData,
  saveFormData,
  loadHintsState,
  saveHintsState
} from './analyse/storage.js';
import { renderAnalyseLayout } from './analyse/render-view.js';
import { bindAnalyseEvents } from './analyse/events.js';
import { exportToPDF } from './analyse/export-pdf.js';

export { SUJETS };

export function initAnalyseStudio() {
  const container = document.getElementById('analyse-studio-app');
  if (!container) return;

  let activeSubjectKey = localStorage.getItem('demorevis-active-sujet');
  if (!activeSubjectKey || !SUJETS[activeSubjectKey]) {
    activeSubjectKey = Math.random() < 0.5 ? 'A' : 'B';
  }

  let hintsState = loadHintsState(activeSubjectKey);

  function render() {
    const sujet = SUJETS[activeSubjectKey];
    const savedData = loadFormData(activeSubjectKey);

    renderAnalyseLayout({
      container,
      activeSubjectKey,
      sujet,
      savedData,
      hintsState,
      resolvePath
    });

    bindAnalyseEvents({
      container,
      activeSubjectKey,
      hintsState,
      sujet,
      onSubjectChange: (newKey) => {
        activeSubjectKey = newKey;
        localStorage.setItem('demorevis-active-sujet', newKey);
        hintsState = loadHintsState(newKey);
        render();
      },
      onSaveData: (data) => {
        saveFormData(activeSubjectKey, data);
      },
      onSaveHints: (state) => {
        hintsState = state;
        saveHintsState(activeSubjectKey, state);
      },
      onClearDraft: () => {
        localStorage.removeItem(getStorageKey(activeSubjectKey));
        localStorage.removeItem(getHintsStorageKey(activeSubjectKey));
        hintsState = {};
        render();
      },
      onExportPDF: () => {
        exportToPDF(sujet, activeSubjectKey);
      }
    });
  }

  render();
}
