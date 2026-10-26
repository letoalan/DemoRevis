# Architecture Technique & Pipeline

## 1. Stack Technologique

* **Bundler & Serveur de Dev** : [Vite 6](https://vite.dev) configuré en multi-pages (MPA).
* **Langages** : HTML5 sémantique, CSS3 Vanilla avec custom properties CSS, JavaScript ES6+.
* **Librairies externes** :
  * `mermaid` : rendu dynamique de schémas heuristiques et organigrammes institutionnels.
  * `jspdf` : génération côté client des fiches de composition d'analyse critique au format PDF A4.
* **Typographie** : *Plus Jakarta Sans* (interface), *Cinzel* (titres académiques), *JetBrains Mono* (horodatages et métadonnées).

---

## 2. Règle d'Or de Modularité (Fichiers $\le 200$ lignes)

Tous les fichiers sources du projet sans exception respectent une limite maximale de 200 lignes :
* Fichiers CSS : découpés en 21 modules thématiques dans `src/styles/` (60 à 185 lignes).
* Fichiers JS : séparés en modules fonctionnels indépendants dans `src/modules/`, `src/analyse/`, `src/data/quiz/` (10 à 175 lignes).
* Fichiers HTML : simplifiés à 30-40 lignes grâce au système d'inclusion de partials.
* Fichiers de documentation Wiki : subdivisés en 8 pages ciblées $\le 150$ lignes.

---

## 3. Système d'Inclusion HTML (`vite-plugin-html-include`)

Développé sur mesure dans [`vite.config.js`](../vite.config.js), le plugin intercepte l'évènement `transformIndexHtml` (en mode dev comme au build de production) :

```js
<include src="./components/common/navbar.html" />
<include src="./components/p1/p1-table.html" />
```

### Avantages :
1. **Zéro duplication** : la barre de navigation, le lecteur audio, la modale d'agrandissement et le pied de page sont factorisés une seule fois dans `components/common/`.
2. **Poids plume des pages** : les pages racines (`index.html`, `p1.html`...) se contentent d'assembler les blocs déclaratifs.
3. **Résolution relative récursive** : un composant peut lui-même inclure un sous-composant si nécessaire.

---

## 4. Arborescence du Projet

```
DemoRevis/
├── components/          # Partials HTML modulaires
│   ├── common/          # Header, footer, lightbox, barre de lecture
│   ├── home/            # Hero vidéo, frise synoptique, grille des cours
│   ├── p1/ .. p4/       # Sections spécifiques par chapitre
│   ├── quiz/            # Moteur de quiz et hub flashcards
│   └── analyse/         # Fiche méthodologique officielle
├── public/              # Fichiers statiques copiés tels quels dans dist/
│   ├── assets/img/      # Iconographie optimisée
│   ├── assets/mp3/      # Briefings express et podcasts approfondis
│   └── credits.json     # Métadonnées et sources académiques
├── src/                 # Code source principal
│   ├── analyse/         # Module Studio d'Analyse Critique
│   ├── data/quiz/       # Jeux de questions découpés par chapitre
│   ├── modules/         # Utilitaires (Thème, Mermaid, Lightbox, etc.)
│   ├── styles/          # 21 feuilles de styles modulaires
│   ├── audio.js         # Lecteur audio double piste
│   ├── flashcards.js    # Moteur de flashcards 3D
│   ├── main.js          # Point d'entrée principal
│   ├── quiz.js          # Moteur de quiz interactif
│   └── style.css        # Point d'entrée CSS (@import)
├── wiki/                # Documentation exhaustive
├── vite.config.js       # Configuration Vite & plugin HTML include
├── index.html           # Page d'accueil (31 lignes)
├── p1.html .. p4.html   # Pages de cours (36 lignes)
├── quiz.html            # Hub de quiz (32 lignes)
└── analyse.html         # Studio d'analyse (40 lignes)
```
