# Données Pédagogiques & Ressources Multimédias

Cette section documente l'organisation des données textuelles, audio et iconographiques utilisées par l'application.

---

## 1. Données des Quiz : `src/data/quiz/`

Le grand fichier initial de 612 lignes a été scindé en 5 modules distincts de 124 lignes chacun, centralisés et ré-exportés par [`src/quiz-data.js`](../src/quiz-data.js) (16 lignes) :

| Module | Contenu | Questions |
| :--- | :--- | :---: |
| [`quiz-general.js`](../src/data/quiz/quiz-general.js) | Grand quiz transversal couvrant tout le Thème 1. | 10 |
| [`quiz-intro.js`](../src/data/quiz/quiz-intro.js) | Introduction : notions fondamentales et typologie des régimes. | 10 |
| [`quiz-axe1.js`](../src/data/quiz/quiz-axe1.js) | Axe 1 : démocratie directe athénienne et système représentatif de Constant. | 10 |
| [`quiz-axe2.js`](../src/data/quiz/quiz-axe2.js) | Axe 2 : Tocqueville, crises démocratiques et transitions. | 10 |
| [`quiz-conclusion.js`](../src/data/quiz/quiz-conclusion.js) | Conclusion : Union Européenne, institutions et déficit démocratique. | 10 |

**Format d'une question :**
```js
{
  question: "Texte de la question interrogative ?",
  period: "Introduction | Axe 1 | Axe 2 | Conclusion",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 2, // Index 0-based de la bonne réponse
  explanation: "Commentaire pédagogique explicitant pourquoi cette réponse est exacte."
}
```

---

## 2. Données des Cartes Flash : [`src/flashcards-data.js`](../src/flashcards-data.js) (170 lignes)

Regroupe **40 fiches de mémorisation active** réparties en 4 catégories :
* `intro` : Définition, séparation des pouvoirs, démocratie libérale, démocratie illibérale, etc.
* `axe1` : Ecclésia, Héliée, Ostracisme, Misthophorie, Benjamin Constant, etc.
* `axe2` : Tocqueville, Tyrannie de la majorité, République de Weimar 1933, Révolution des Œillets, etc.
* `concl` : Traité de Maastricht, Andrew Moravcsik, Parlement européen, Cour de justice de l'UE, etc.

---

## 3. Ressources Audio : `public/assets/mp3/`

Chaque chapitre de cours dispose d'un double enregistrement sonore optimisé au format MP3 :
* **P1** : `p1-briefing.mp3` (2 min) et `p1-podcast.mp3` (10 min).
* **P2** : `p2-briefing.mp3` (2 min 30) et `p2-podcast.mp3` (12 min).
* **P3** : `p3-briefing.mp3` (3 min) et `p3-podcast.mp3` (14 min).
* **P4** : `p4-briefing.mp3` (2 min) et `p4-podcast.mp3` (11 min).

---

## 4. Iconographie : `public/assets/img/`

Toutes les images inutilisées ou temporaires ont été supprimées. Les images conservées illustrent rigoureusement les cours et sujets officiels du Bac :
* `athenes-institutions.jpg`, `rome-republique.jpg`, `constant-portrait.png`.
* `tocqueville.jpg`, `hitler-weimar.jpg`, `allende-chili.jpg`, `oeillets-portugal.jpg`, `espagne-tejero.jpg`, `espagne-transition.jpg`.
* `ue-institutions.png`, `ue-parlement.jpg`, `vadot-ue-2017.png`, `parisien-abstention-2021.png`.

Les métadonnées de droits, auteurs et légendes sont déclarées dans [`public/credits.json`](../public/credits.json).
