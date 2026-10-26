import { quizGeneral } from './data/quiz/quiz-general.js';
import { quizIntro } from './data/quiz/quiz-intro.js';
import { quizAxe1 } from './data/quiz/quiz-axe1.js';
import { quizAxe2 } from './data/quiz/quiz-axe2.js';
import { quizConclusion } from './data/quiz/quiz-conclusion.js';

export { quizGeneral, quizIntro, quizAxe1, quizAxe2, quizConclusion };

export const quizzes = {
  general: quizGeneral,
  intro: quizIntro,
  axe1: quizAxe1,
  axe2: quizAxe2,
  conclusion: quizConclusion,
  concl: quizConclusion,
  p4: quizConclusion,
  all: [...quizIntro, ...quizAxe1, ...quizAxe2, ...quizConclusion, ...quizGeneral]
};

