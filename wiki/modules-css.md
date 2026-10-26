# Modules CSS (`src/styles/`)

L'ensemble des styles du projet a été restructuré en 21 modules indépendants regroupés dans le dossier [`src/styles/`](../src/styles/). Le fichier racine [`src/style.css`](../src/style.css) se limite à 27 lignes d'instructions `@import`.

---

## 📑 Répertoire des Feuilles de Style

| Fichier | Lignes | Rôle & Description |
| :--- | :---: | :--- |
| `variables.css` | 83 | Palette HSL / Hex, polices, tokens d'espacement, rayons de courbure, ombres. |
| `base.css` | 36 | Normalisation CSS, structure du `<body>`, layout principal et conteneurs. |
| `navigation.css` | 155 | Barre de navigation supérieure, logo typographique, liens de pages et menu mobile drawer. |
| `hero.css` | 122 | Bannière Hero académique, badges de périodisation, typographie hero. |
| `hero-video.css` | 115 | Intégration iframe YouTube en arrière-plan plein écran avec overlay dégradé sombre/clair. |
| `audio-player.css` | 185 | Station audio, barre de défilement, bouton lecture/pause, horodatage et zone de transcription. |
| `dual-audio.css` | 43 | Sélecteur à deux onglets (Briefing express vs Podcast de cours approfondi). |
| `cards.css` | 111 | Cartes d'idées maîtresses, question directrice, mind maps et boîtes d'analyse. |
| `mermaid-base.css` | 184 | Conteneur des diagrammes Mermaid, barre d'outils de zoom (+, -, reset), surface drag-to-pan. |
| `mermaid-nodes.css` | 155 | Stylisation des nœuds SVG Mermaid, contrastes typographiques, variantes sombres. |
| `tables.css` | 69 | Tableaux comparatifs et synthétiques : en-têtes gradient, bordures, première colonne accentuée. |
| `gallery.css` | 180 | Grille d'œuvres d'art et documents d'archive, légendes historiques, zoom modal. |
| `flashcards.css` | 129 | Cartes mémoires 3D à retournement (flip card), verso 100% opaque, boutons de navigation. |
| `quiz.css` | 139 | Interface des questionnaires à choix multiples : questions, options, retours explicatifs, score. |
| `analyse-studio.css`| 89 | Disposition split-screen de l'atelier d'analyse, prévisualisation documentaire, barre d'état. |
| `analyse-form.css` | 134 | Formulaire de rédaction guidée, étapes méthodologiques, nom/prénom, styles d'impression. |
| `analyse-hints.css`| 84 | Échafaudage à 3 boutons d'indices (Question, Mots-clés, Indice) et encadrés d'aide. |
| `lexique.css` | 136 | Grille du glossaire des notions clés, recherche temps réel et modale Lightbox. |
| `footer.css` | 155 | Pied de page académique haut de gamme : 4 colonnes, badges, liens animés et bouton de retour haut. |
| `responsive-core.css`| 175 | Requêtes média pour mobile et tablette : header, hero, audio station, conteneurs généraux. |
| `responsive-schemes.css`| 68 | Adaptation mobile des schémas Mermaid et des tableaux synthétiques. |
| `responsive-views.css`| 146 | Adaptation mobile de la galerie d'images, des flashcards, du studio d'analyse et du footer. |

---

## 🎨 Système de Thème (Light / Dark)

Le thème est géré via l'attribut `data-theme="light"` ou `data-theme="dark"` sur l'élément `<html>` :
* **Mode Clair** : fond doux `--bg-main: #f8fafc`, cartes `--bg-card: #ffffff`, texte `--text-main: #0f172a`, accentuation bleu souverain `#1d4ed8` et or républicain `#b45309`.
* **Mode Sombre** : fond nuit `--bg-main: #0b1120`, cartes `--bg-card: #1e293b`, texte `--text-main: #f8fafc`, bordures contrastées `--border-color: #334155`.

Toutes les couleurs sont définies par des variables CSS centralisées dans `variables.css`.
