# DemoRevis — Documentation Wiki

Bienvenue sur le Wiki officiel du projet **DemoRevis**, la plateforme interactive de révision du **Thème 1 d'HGGSP en classe de Première générale** : *« Comprendre un régime politique : la démocratie »*.

Le projet respecte une règle stricte d'ingénierie logicielle : **aucun fichier du projet ne dépasse 200 lignes**. L'application est hautement modulaire, maintenable et rapide.

---

## 📑 Sommaire du Wiki

1. [Architecture & Pipeline](./architecture.md)
   * Présentation du stack technique (Vite, Vanilla CSS, Modules ES6).
   * Système de partials HTML via le plugin `<include src="..." />`.
   * Structure globale de l'arborescence.

2. [Modules CSS (`src/styles/`)](./modules-css.md)
   * Découpage et rôle des 21 feuilles de style modulaires.
   * Palette de couleurs, Dark/Light mode, et responsive design.

3. [Modules JavaScript Généraux](./modules-js.md)
   * Orchestrateur `main.js`.
   * Gestionnaire de thème, visualiseur de schémas Mermaid et éléments d'interface.
   * Lecteur audio double piste (Briefing & Podcast) et moteur de quiz / flashcards.

4. [Studio d'Analyse Critique de Documents](./module-analyse.md)
   * Architecture du studio d'analyse (`src/analyse/`).
   * Échafaudage pédagogique à 3 niveaux d'indices (Question → Mots-clés → Indice).
   * Moteur de sauvegarde locale et exportateur PDF jsPDF.

5. [Données Pédagogiques & Ressources](./data-assets.md)
   * Jeux de données de quiz et flashcards (`src/data/quiz/`, `src/flashcards-data.js`).
   * Crédits iconographiques et sonores (`public/credits.json`).

6. [Composants HTML Partiels](./components-html.md)
   * Documentation des points d'entrée HTML et des templates partiels dans `components/`.

7. [Alignement Pédagogique HGGSP 1ère](./pedagogy-hggsp.md)
   * Découpage didactique (Introduction, Axe 1, Axe 2, Conclusion UE).
   * Penseurs au programme et exigences de l'épreuve du Baccalauréat.

---

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement Vite
npm run dev

# Construction de la version de production
npm run build
```
