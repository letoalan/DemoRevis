/**
 * DemoRevis - Interactive 3D Flashcards Engine
 * Flip cards, keyboard navigation, shuffle, and progress tracker.
 */

import { flashcards } from './flashcards-data.js';

export function initFlashcards(category = 'intro', containerSelector = '#flashcards-container') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const deckData = flashcards[category] || [];
  if (!deckData.length) return;

  let currentDeck = [...deckData];
  let currentIndex = 0;
  let isFlipped = false;

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function render() {
    const card = currentDeck[currentIndex];
    container.innerHTML = `
      <div class="flashcards-station">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="quiz-badge" style="background: var(--color-gold-soft); color: var(--color-gold); font-weight: 700;">Mémorisation Active</span>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 0.25rem;">Cartes Mémoire Flash</h3>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <button type="button" class="flashcard-btn" id="fc-shuffle-btn" title="Mélanger les cartes">
              🔀 Mélanger
            </button>
            <span class="flashcard-counter" id="fc-counter">Carte ${currentIndex + 1} / ${currentDeck.length}</span>
          </div>
        </div>

        <div class="flashcard-wrapper ${isFlipped ? 'flipped' : ''}" id="flashcard-wrapper" tabindex="0" role="button" aria-label="Carte flash, appuyer pour retourner">
          <div class="flashcard-card">
            <div class="flashcard-face flashcard-front">
              <span class="flashcard-hint">Notion / Terme (Recto)</span>
              <div class="flashcard-term">${card.recto}</div>
              <span class="flashcard-subhint">👉 Cliquez ou appuyez sur [Espace] pour révéler la définition</span>
            </div>
            <div class="flashcard-face flashcard-back">
              <span class="flashcard-hint">Définition / Portée (Verso)</span>
              <div class="flashcard-def">${card.verso}</div>
              <span class="flashcard-subhint">↩️ Cliquez pour revenir au recto</span>
            </div>
          </div>
        </div>

        <div class="flashcards-controls">
          <button type="button" class="flashcard-btn" id="fc-prev-btn" ${currentIndex === 0 ? 'disabled' : ''} aria-label="Carte précédente">
            ← Précédente
          </button>
          <button type="button" class="flashcard-btn primary" id="fc-flip-btn" aria-label="Retourner la carte">
            🔄 Retourner la carte
          </button>
          <button type="button" class="flashcard-btn" id="fc-next-btn" ${currentIndex === currentDeck.length - 1 ? 'disabled' : ''} aria-label="Carte suivante">
            Suivante →
          </button>
        </div>
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    const wrapper = container.querySelector('#flashcard-wrapper');
    const flipBtn = container.querySelector('#fc-flip-btn');
    const prevBtn = container.querySelector('#fc-prev-btn');
    const nextBtn = container.querySelector('#fc-next-btn');
    const shuffleBtn = container.querySelector('#fc-shuffle-btn');

    function toggleFlip() {
      isFlipped = !isFlipped;
      if (wrapper) wrapper.classList.toggle('flipped', isFlipped);
    }

    if (wrapper) wrapper.addEventListener('click', toggleFlip);
    if (flipBtn) flipBtn.addEventListener('click', toggleFlip);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          isFlipped = false;
          render();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentIndex < currentDeck.length - 1) {
          currentIndex++;
          isFlipped = false;
          render();
        }
      });
    }

    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        currentDeck = shuffleArray(currentDeck);
        currentIndex = 0;
        isFlipped = false;
        render();
      });
    }

    // Keyboard shortcuts when focusing inside flashcard
    if (wrapper) {
      wrapper.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggleFlip();
        } else if (e.key === 'ArrowRight' && currentIndex < currentDeck.length - 1) {
          currentIndex++;
          isFlipped = false;
          render();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
          currentIndex--;
          isFlipped = false;
          render();
        }
      });
    }
  }

  render();
}
