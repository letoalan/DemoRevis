/**
 * Event bindings and hint progressive logic for Document Analysis Studio
 */

export function bindAnalyseEvents({
  container,
  activeSubjectKey,
  hintsState,
  sujet,
  onSubjectChange,
  onSaveData,
  onSaveHints,
  onClearDraft,
  onExportPDF
}) {
  // Subject selector buttons
  const btnA = container.querySelector('#btn-select-a');
  const btnB = container.querySelector('#btn-select-b');
  const btnTirage = container.querySelector('#btn-random-tirage');

  if (btnA) {
    btnA.addEventListener('click', () => {
      if (activeSubjectKey !== 'A') onSubjectChange('A');
    });
  }

  if (btnB) {
    btnB.addEventListener('click', () => {
      if (activeSubjectKey !== 'B') onSubjectChange('B');
    });
  }

  if (btnTirage) {
    btnTirage.addEventListener('click', () => {
      const next = Math.random() < 0.5 ? 'A' : 'B';
      alert(`🎲 Sujet tiré au sort : Sujet ${next} !`);
      onSubjectChange(next);
    });
  }

  // Auto-save form inputs on input
  const textareas = container.querySelectorAll('.analyse-textarea');
  let saveTimeout = null;

  textareas.forEach(input => {
    input.addEventListener('input', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        const currentData = {};
        textareas.forEach(t => {
          currentData[t.id] = t.value;
        });
        onSaveData(currentData);
      }, 500);
    });
  });

  // Progressive Hint Buttons Wiring
  const fieldMap = {};
  sujet.sections.forEach(sec => {
    sec.fields.forEach(f => {
      fieldMap[f.id] = f;
    });
  });

  const fieldGroups = container.querySelectorAll('.field-group');
  fieldGroups.forEach(group => {
    const fieldId = group.dataset.fieldId;
    const fieldData = fieldMap[fieldId];
    if (!fieldData) return;

    const btn1 = group.querySelector('.hint-step-btn.step-1');
    const btn2 = group.querySelector('.hint-step-btn.step-2');
    const btn3 = group.querySelector('.hint-step-btn.step-3');
    const hintBox = group.querySelector(`#hint-box-${fieldId}`);

    function setLevel(lvl) {
      if (!hintsState[fieldId]) {
        hintsState[fieldId] = { unlocked: 1, active: null };
      }

      // Toggle if clicking active level
      if (hintsState[fieldId].active === lvl) {
        hintsState[fieldId].active = null;
        hintBox.style.display = 'none';
        [btn1, btn2, btn3].forEach(b => b.classList.remove('active'));
        onSaveHints(hintsState);
        return;
      }

      // Progressively unlock next levels: 1 unlocks 2, 2 unlocks 3
      if (lvl === 1) {
        hintsState[fieldId].unlocked = Math.max(hintsState[fieldId].unlocked || 1, 2);
        btn2.disabled = false;
      } else if (lvl === 2) {
        hintsState[fieldId].unlocked = Math.max(hintsState[fieldId].unlocked || 1, 3);
        btn3.disabled = false;
      }

      hintsState[fieldId].active = lvl;
      onSaveHints(hintsState);

      // Highlight active button
      btn1.classList.toggle('active', lvl === 1);
      btn2.classList.toggle('active', lvl === 2);
      btn3.classList.toggle('active', lvl === 3);

      // Render content into hintBox
      hintBox.style.display = 'block';
      if (lvl === 1) {
        hintBox.innerHTML = `
          <div class="hint-display-title level-1">❓ Question guide pour orienter votre réflexion :</div>
          <div>${fieldData.question}</div>
        `;
      } else if (lvl === 2) {
        hintBox.innerHTML = `
          <div class="hint-display-title level-2">🔑 Mots-clés et notions à mobiliser :</div>
          <div>${fieldData.keywords}</div>
        `;
      } else if (lvl === 3) {
        hintBox.innerHTML = `
          <div class="hint-display-title level-3">💡 Indice d'analyse détaillé :</div>
          <div>${fieldData.hint}</div>
        `;
      }
    }

    if (btn1) btn1.addEventListener('click', () => setLevel(1));
    if (btn2) {
      btn2.addEventListener('click', () => {
        if (!btn2.disabled) setLevel(2);
      });
    }
    if (btn3) {
      btn3.addEventListener('click', () => {
        if (!btn3.disabled) setLevel(3);
      });
    }
  });

  // Clear Draft
  const clearBtn = container.querySelector('#btn-clear-draft');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Voulez-vous vraiment effacer votre brouillon pour ce sujet ?')) {
        onClearDraft();
      }
    });
  }

  // Print
  const printBtn = container.querySelector('#btn-print-view');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // PDF Export
  const pdfBtn = container.querySelector('#btn-export-pdf');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', onExportPDF);
  }
}
