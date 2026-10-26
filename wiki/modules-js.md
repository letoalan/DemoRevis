# Modules JavaScript Généraux

L'architecture JavaScript de DemoRevis s'appuie sur des modules ES6 natifs, sans framework lourd, garantissant une exécution instantanée et une empreinte mémoire minimale.

---

## 1. Point d'Entrée Principal : [`src/main.js`](../src/main.js) (44 lignes)

Orchestre le cycle de vie de la page lors du `DOMContentLoaded` :
1. Initialise le gestionnaire de thème (`initTheme`).
2. Démarre la barre de progression de lecture (`initReadingProgress`).
3. Connecte le menu mobile et la modale lightbox (`initMobileNav`, `initLightbox`).
4. Active la recherche interactive dans le glossaire (`initLexiconSearch`).
5. Effectue le rendu asynchrone des diagrammes Mermaid (`initMermaid`).
6. Active le lecteur audio double piste (`setupAudioPlayer`).
7. Initialise les composants spécifiques déclarés via les variables globales (`window.__PAGE_QUIZ_KEY__`, `window.__FLASHCARD_KEY__`).

---

## 2. Modules d'Interface : `src/modules/`

### A. [`theme.js`](../src/modules/theme.js) (28 lignes)
* Détecte la préférence système (`prefers-color-scheme: dark`) ou charge la préférence enregistrée dans `localStorage` (`demorevis-theme`).
* Bascule entre mode clair et sombre au clic sur `#theme-toggle-btn`.
* Notifie les auditeurs enregistrés pour synchroniser la palette des diagrammes Mermaid.

### B. [`mermaid-viewer.js`](../src/modules/mermaid-viewer.js) (114 lignes)
* Configure et rend les diagrammes Mermaid avec typographie *Plus Jakarta Sans* et palette adaptée au thème courant.
* Installe la barre d'outils sur chaque `.mermaid-card` :
  * Zoom avant (`+15%`), Zoom arrière (`-15%`), Réinitialisation (`100%`).
  * Mode plein écran (`.fullscreen-mode`).
  * **Navigation tactile et souris par glisser-déposer (Drag-to-Pan)** : permet de déplacer facilement les diagrammes larges sans ascenseurs disgracieux.

### C. [`ui-elements.js`](../src/modules/ui-elements.js) (103 lignes)
* **Barre de lecture** : calcule le pourcentage de défilement vertical et actualise `#reading-progress`.
* **Drawer Mobile** : ouverture/fermeture fluide avec fermeture au clic extérieur et touche Échap.
* **Lightbox Universelle (Agrandir & Rétrécir au clic)** : détection universelle par délégation d'événements rendant toutes les images cliquables pour agrandissement HD, et rétrécissement automatique immédiat au clic sur l'image agrandie, sur le fond ou sur la touche Échap.
* **Accordéons de corrigés** : déploiement animé des corrigés d'entraînement.
* **Filtre du lexique** : recherche dynamique en temps réel dans les termes et définitions.

---

## 3. Station Audio : [`src/audio.js`](../src/audio.js) (175 lignes)

* Gère la lecture audio HTML5 avec bascule instantanée entre deux sources :
  * **⚡ Briefing Express** (synthèse condensée de 2 à 3 minutes).
  * **🎙️ Podcast Approfondi** (cours magistral de 10 à 15 minutes).
* Maintient le temps de lecture, le scrubber interactif et l'affichage de la transcription synchronisée.

---

## 4. Moteurs d'Évaluation & Hub

* **[`src/quiz.js`](../src/quiz.js) (177 lignes)** : moteur de questionnaires à choix multiples avec validation immédiate, explications détaillées, barre de progression et score final calculé avec jauge visuelle.
* **[`src/flashcards.js`](../src/flashcards.js) (143 lignes)** : moteur de mémorisation active à retournement 3D, navigation séquentielle (précédent/suivant), raccourcis clavier (flèches, Espace, Entrée) et verso 100% opaque.
* **[`src/modules/quiz-hub.js`](../src/modules/quiz-hub.js) (98 lignes)** : contrôleur interactif du hub d'évaluation (`quiz.html`), gérant la sélection dynamique des quiz thématiques (Intro, Axe 1, Axe 2, Conclusion UE, Grand Quiz Général, Défi Ultime 50 questions) et des séries de cartes mémoire.

