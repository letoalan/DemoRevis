# DemoRevis — HGGSP 1ère Générale

[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Modularity](https://img.shields.io/badge/Modularity-%E2%89%A4%20200%20lines-brightgreen)](#)
[![HGGSP](https://img.shields.io/badge/Programme-HGGSP%201%C3%A8re-1d4ed8)](#)

Plateforme interactive d'apprentissage et de révision du **Thème 1 d'Histoire-Géographie, Géopolitique et Sciences Politiques (HGGSP) en classe de Première** :
*« Comprendre un régime politique : la démocratie »*.

Inspiré de l'expérience pédagogique de [RevoRevis](https://github.com/letoalan/RevoRevis.git).

---

## 🏛️ Fonctionnalités Clés

* **4 Modules de cours complets** : Introduction (P1), Penser la démocratie (P2), Avancées et reculs (P3), L'Union Européenne (P4).
* **Double Station Audio** : Briefings express de 2 min et podcasts magistraux de 12 min pour chaque chapitre.
* **Schémas Heuristiques Mermaid** : organigrammes clairs avec barre d'outils de zoom et navigation tactile drag-to-pan.
* **Tableaux Comparatifs Universitaires** : critères institutionnels contrastés et lisibilité maximale.
* **Cartes Flash 3D Recto/Verso** : 40 flashcards interactives avec verso 100% opaque.
* **Studio d'Analyse Critique de Documents** : tirage au sort des sujets officiels, échafaudage pédagogique à 3 niveaux d'indices (Question → Mots-clés → Indice détaillé), auto-sauvegarde et exportation directe en PDF format A4 via `jsPDF`.

---

## 📚 Documentation Wiki Exhaustive

La documentation détaillée de chaque fichier et module du projet est accessible dans le dossier [`wiki/`](./wiki/) :

* 📑 [**Sommaire Général du Wiki**](./wiki/index.md)
* ⚙️ [Architecture & Pipeline Technique](./wiki/architecture.md)
* 🎨 [Catalogue des 21 Modules CSS (`src/styles/`)](./wiki/modules-css.md)
* 💻 [Modules JavaScript ES6 (`src/modules/`)](./wiki/modules-js.md)
* ✍️ [Studio d'Analyse Critique de Documents](./wiki/module-analyse.md)
* 📊 [Données des Quiz & Médias](./wiki/data-assets.md)
* 🧱 [Composants HTML Partiels (`components/`)](./wiki/components-html.md)
* 🎓 [Alignement Pédagogique HGGSP Première](./wiki/pedagogy-hggsp.md)

---

## 🛠️ Installation & Lancement

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement local
npm run dev

# Construction du bundle de production
npm run build
```
