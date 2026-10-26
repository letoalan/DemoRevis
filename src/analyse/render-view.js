/**
 * Render template for Document Analysis Studio
 */

export function renderAnalyseLayout({ container, activeSubjectKey, sujet, savedData, hintsState, resolvePath }) {
  container.innerHTML = `
    <!-- Toolbar & Subject Selector -->
    <div class="analyse-toolbar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; background: var(--bg-card); padding: 1rem 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">Choix du Sujet :</span>
        <button type="button" class="flashcard-btn ${activeSubjectKey === 'A' ? 'primary' : ''}" id="btn-select-a">
          Sujet A (UE & Démocratie)
        </button>
        <button type="button" class="flashcard-btn ${activeSubjectKey === 'B' ? 'primary' : ''}" id="btn-select-b">
          Sujet B (Abstention & Constant)
        </button>
      </div>

      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <button type="button" class="flashcard-btn" id="btn-random-tirage" title="Tirer au sort entre le Sujet A et le Sujet B">
          🎲 Tirage au sort
        </button>
        <span class="save-status-indicator" id="save-status" style="opacity: 0.7;">
          <span class="save-dot"></span> Brouillon synchronisé
        </span>
      </div>
    </div>

    <!-- Hero Banner du Sujet -->
    <div class="analyse-hero">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
        <span class="quiz-badge" style="background: var(--color-primary-soft); color: var(--color-primary);">${sujet.badge}</span>
        <span class="tag-badge tag-evenement">Épreuve officielle HGGSP Première</span>
      </div>
      <h2 style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--text-main); margin-bottom: 0.75rem;">
        ${sujet.title}
      </h2>
      <p style="font-size: 1.05rem; font-weight: 600; color: var(--color-primary); line-height: 1.5; background: var(--bg-elevated); padding: 1rem; border-radius: var(--radius-sm); border-left: 4px solid var(--color-primary);">
        🎯 Consigne : ${sujet.question}
      </p>
    </div>

    <!-- Main Dual Studio Layout -->
    <div class="analyse-container">
      
      <!-- Colonne Gauche : Documents sources -->
      <div class="analyse-docs-panel">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h3 style="font-family: var(--font-heading); font-size: 1.15rem; color: var(--text-main);">
            📄 Dossier documentaire
          </h3>
          <span style="font-size: 0.8rem; color: var(--text-subtle);">Cliquez sur l'image pour agrandir</span>
        </div>

        <!-- Document 1 (Texte) -->
        <article class="doc-box">
          <div class="doc-box-header">
            <span class="doc-box-title">${sujet.doc1.title}</span>
            <span class="tag-badge tag-institution">Texte</span>
          </div>
          <div class="doc-box-body">${sujet.doc1.text}</div>
          <div class="doc-box-source">${sujet.doc1.source}</div>
        </article>

        <!-- Document 2 (Image / Presse) -->
        <article class="doc-box">
          <div class="doc-box-header">
            <span class="doc-box-title">${sujet.doc2.title}</span>
            <span class="tag-badge tag-politique">Document iconographique</span>
          </div>
          <div class="doc-box-img-wrap" id="doc2-img-container">
            <img src="${resolvePath(sujet.doc2.image)}" alt="${sujet.doc2.alt}" loading="lazy" />
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.75rem;">${sujet.doc2.alt}</p>
          <div class="doc-box-source">${sujet.doc2.source}</div>
        </article>
      </div>

      <!-- Colonne Droite : Formulaire d'analyse guidée avec 3 indices progressifs -->
      <div class="analyse-form-panel">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--text-main);">
              ✍️ Votre Feuille d'Analyse Critique
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              Débloquez progressivement les 3 niveaux d'indices (Question guide → Mots-clés → Indice détaillé).
            </p>
          </div>
          <button type="button" class="flashcard-btn" id="btn-clear-draft" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" title="Réinitialiser les réponses du sujet en cours">
            🗑️ Effacer
          </button>
        </div>

        <!-- Student Name Inputs -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; background: var(--bg-elevated); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          <div>
            <label class="field-label" for="student-nom">Nom de l'élève :</label>
            <input type="text" id="student-nom" class="analyse-textarea" style="min-height: 40px; padding: 0.4rem 0.75rem;" placeholder="Ex: Dupont" value="${savedData['student-nom'] || ''}" />
          </div>
          <div>
            <label class="field-label" for="student-prenom">Prénom :</label>
            <input type="text" id="student-prenom" class="analyse-textarea" style="min-height: 40px; padding: 0.4rem 0.75rem;" placeholder="Ex: Camille" value="${savedData['student-prenom'] || ''}" />
          </div>
        </div>

        <!-- Étapes guidées avec les 3 boutons d'indices -->
        <form id="analyse-form">
          ${sujet.sections.map(section => `
            <div class="form-step-block">
              <div class="step-title">
                <span>📌</span> ${section.title}
              </div>
              <p class="step-desc">${section.desc}</p>

              ${section.fields.map(field => {
                const state = hintsState[field.id] || { unlocked: 1, active: null };
                const unlocked = state.unlocked || 1;
                const active = state.active;

                return `
                  <div class="field-group" data-field-id="${field.id}">
                    <label class="field-label" for="${field.id}">${field.label}</label>
                    
                    <!-- Scaffolding : 3 Boutons d'indices progressifs -->
                    <div class="hints-scaffolding">
                      <div class="hints-buttons-bar">
                        <span class="hints-prompt-label">💡 Indices :</span>
                        <button type="button" class="hint-step-btn step-1 ${active === 1 ? 'active' : ''}" data-level="1" title="Niveau 1 : Question guide pour orienter votre réflexion">
                          1️⃣ Question guide
                        </button>
                        <button type="button" class="hint-step-btn step-2 ${active === 2 ? 'active' : ''}" data-level="2" ${unlocked >= 2 ? '' : 'disabled'} title="Niveau 2 : Mots-clés conceptuels (accessible après clic sur 1)">
                          2️⃣ Mots-clés
                        </button>
                        <button type="button" class="hint-step-btn step-3 ${active === 3 ? 'active' : ''}" data-level="3" ${unlocked >= 3 ? '' : 'disabled'} title="Niveau 3 : Indice détaillé (accessible après clic sur 2)">
                          3️⃣ Indice détaillé
                        </button>
                      </div>

                      <!-- Encadré d'affichage de l'indice actif -->
                      <div class="hint-display-box" id="hint-box-${field.id}" style="${active ? 'display: block;' : 'display: none;'}">
                        ${active === 1 ? `
                          <div class="hint-display-title level-1">❓ Question guide pour orienter votre réflexion :</div>
                          <div>${field.question}</div>
                        ` : active === 2 ? `
                          <div class="hint-display-title level-2">🔑 Mots-clés et notions à mobiliser :</div>
                          <div>${field.keywords}</div>
                        ` : active === 3 ? `
                          <div class="hint-display-title level-3">💡 Indice d'analyse détaillé :</div>
                          <div>${field.hint}</div>
                        ` : ''}
                      </div>
                    </div>

                    <textarea id="${field.id}" name="${field.id}" class="analyse-textarea" rows="3" placeholder="Rédigez ici vos éléments d'analyse...">${savedData[field.id] || ''}</textarea>
                  </div>
                `;
              }).join('')}
            </div>
          `).join('')}

          <!-- Barre d'actions finales -->
          <div class="analyse-actions-bar">
            <div style="font-size: 0.85rem; color: var(--text-muted);">
              💾 Auto-sauvegarde activée dans votre navigateur.
            </div>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <button type="button" class="flashcard-btn" id="btn-print-view">
                🖨️ Imprimer / Aperçu
              </button>
              <button type="button" class="flashcard-btn primary" id="btn-export-pdf">
                📄 Exporter en PDF (jsPDF)
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  `;
}
