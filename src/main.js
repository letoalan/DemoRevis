/**
 * DemoRevis - Main Application Entrypoint
 * Architecture modulaire (< 200 lignes par fichier).
 */

import { initTheme } from './modules/theme.js';
import { initMermaid } from './modules/mermaid-viewer.js';
import {
  initReadingProgress,
  initMobileNav,
  initLightbox,
  initDocAccordions,
  initLexiconSearch,
  initScrollToTop
} from './modules/ui-elements.js';
import { setupAudioPlayer } from './audio.js';
import { initQuiz } from './quiz.js';
import { quizzes } from './quiz-data.js';
import { initFlashcards } from './flashcards.js';
import { initAnalyseStudio } from './analyse.js';
import { initQuizHub } from './modules/quiz-hub.js';

document.addEventListener('DOMContentLoaded', async () => {
  initTheme(() => {
    initMermaid();
  });
  initReadingProgress();
  initMobileNav();
  initLightbox();
  initDocAccordions();
  initLexiconSearch();
  initScrollToTop();
  await initMermaid();
  setupAudioPlayer();

  // Page-specific initializers based on global markers or container IDs
  if (window.__PAGE_QUIZ_KEY__ && quizzes[window.__PAGE_QUIZ_KEY__]) {
    const questions = quizzes[window.__PAGE_QUIZ_KEY__];
    initQuiz(questions, '#page-quiz', {
      title: window.__PAGE_QUIZ_TITLE__ || `Quiz d'auto-évaluation (${questions.length} questions)`,
      badge: window.__PAGE_QUIZ_BADGE__ || 'Contrôle des connaissances'
    });
  }

  if (window.__FLASHCARD_KEY__) {
    initFlashcards(window.__FLASHCARD_KEY__, '#flashcards-container');
  }

  if (document.getElementById('quiz-full-app')) {
    initQuizHub();
  }

  if (document.getElementById('analyse-studio-app')) {
    initAnalyseStudio();
  }
});
