/**
 * DemoRevis - Quiz & Flashcards Hub Controller
 * Manages category switching for quizzes and flashcards on quiz.html
 */

import { initQuiz } from '../quiz.js';
import { quizzes } from '../quiz-data.js';
import { initFlashcards } from '../flashcards.js';

export function initQuizHub() {
  const quizApp = document.getElementById('quiz-full-app');
  if (!quizApp) return;

  const quizConfigs = {
    general: {
      btnId: 'btn-quiz-general',
      data: quizzes.general,
      title: 'Grand Quiz Général (10 questions transversales)',
      badge: 'Contrôle global Thème 1'
    },
    intro: {
      btnId: 'btn-quiz-intro',
      data: quizzes.intro,
      title: 'Quiz Introduction : Définir la démocratie (10 questions)',
      badge: 'P1 • Notions fondamentales'
    },
    axe1: {
      btnId: 'btn-quiz-axe1',
      data: quizzes.axe1,
      title: 'Quiz Axe 1 : Athènes & Constant (10 questions)',
      badge: 'P2 • Démocratie directe et représentative'
    },
    axe2: {
      btnId: 'btn-quiz-axe2',
      data: quizzes.axe2,
      title: 'Quiz Axe 2 : Tocqueville & Crises (10 questions)',
      badge: 'P3 • Avancées et reculs démocratiques'
    },
    conclusion: {
      btnId: 'btn-quiz-conclusion',
      data: quizzes.conclusion,
      title: "Quiz Conclusion : L'Union Européenne et la démocratie (10 questions)",
      badge: 'P4 • Objet conclusif (UE)'
    },
    all: {
      btnId: 'btn-quiz-all',
      data: quizzes.all,
      title: 'Grand Défi Complet Thème 1 (50 questions)',
      badge: 'Défi Ultime Thème 1'
    }
  };

  function switchQuiz(key) {
    const cfg = quizConfigs[key];
    if (!cfg || !cfg.data) return;

    Object.values(quizConfigs).forEach(c => {
      const btn = document.getElementById(c.btnId);
      if (btn) btn.classList.remove('primary');
    });

    const activeBtn = document.getElementById(cfg.btnId);
    if (activeBtn) activeBtn.classList.add('primary');

    initQuiz(cfg.data, '#quiz-full-app', {
      title: cfg.title,
      badge: cfg.badge
    });
  }

  // Bind quiz buttons
  Object.keys(quizConfigs).forEach(key => {
    const btn = document.getElementById(quizConfigs[key].btnId);
    if (btn) {
      btn.addEventListener('click', () => switchQuiz(key));
    }
  });

  // Initial quiz load
  switchQuiz('general');

  // Flashcards category switcher on hub
  const fcConfigs = [
    { btnId: 'btn-fc-intro', key: 'intro' },
    { btnId: 'btn-fc-axe1', key: 'axe1' },
    { btnId: 'btn-fc-axe2', key: 'axe2' },
    { btnId: 'btn-fc-conclusion', key: 'conclusion' }
  ];

  function switchFlashcards(activeKey) {
    fcConfigs.forEach(item => {
      const btn = document.getElementById(item.btnId);
      if (btn) {
        if (item.key === activeKey) {
          btn.classList.add('primary');
        } else {
          btn.classList.remove('primary');
        }
      }
    });
    initFlashcards(activeKey, '#flashcards-container');
  }

  fcConfigs.forEach(item => {
    const btn = document.getElementById(item.btnId);
    if (btn) {
      btn.addEventListener('click', () => switchFlashcards(item.key));
    }
  });

  // Initial flashcard load
  switchFlashcards('intro');
}
