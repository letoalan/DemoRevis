# Composants HTML Partiels

Pour respecter l'obligation de **fichiers $\le 200$ lignes**, l'ensemble des pages HTML a été décomposé en composants partiels situés dans le dossier [`components/`](../components/).

---

## 1. Composants Partagés : `components/common/`

| Fichier | Lignes | Rôle |
| :--- | :---: | :--- |
| `navbar.html` | 51 | Barre de navigation supérieure (desktop & mobile), logo, toggle de thème et menu drawer. |
| `reading-progress.html` | 1 | Élément `#reading-progress` pour la barre de défilement supérieure. |
| `image-modal.html` | 9 | Fenêtre modale Lightbox universelle pour l'agrandissement et le rétrécissement immédiat au clic de toutes les images du site. |
| `footer.html` | 33 | Pied de page institutionnel conforme aux programmes officiels. |

---

## 2. Composants par Page

### Accueil : `components/home/`
* `hero-home.html` (33 lignes) : En-tête avec vidéo d'arrière-plan du Parthénon (balise vidéo HTML5 locale `media/video/parthenon.mp4`) et descriptif du thème.
* `timeline-track.html` (27 lignes) : Frise synoptique cliquable des 4 étapes de révision.
* `course-grid.html` (86 lignes) : Grille de présentation des 4 modules de cours avec liens d'accès direct.
* `analyse-promo.html` (40 lignes) : Carte promotionnelle du studio d'analyse critique de documents.
* `tools-section.html` (27 lignes) : Liens vers le Grand Quiz et le jeu de 40 flashcards.

### Cours P1 : `components/p1/`
* `p1-hero-audio.html` (85 lignes) : Bannière de chapitre et station audio double piste (Briefing & Podcast).
* `p1-ideas.html` (40 lignes) : Question directrice, carte mentale et 3 idées clés.
* `p1-schemes.html` (46 lignes) : Schéma Mermaid de synthèse avec barre de zoom et drag-to-pan.
* `p1-table.html` (51 lignes) : Tableau comparatif : Démocratie directe athénienne vs Démocratie représentative moderne.
* `p1-gallery-flashcards.html` (56 lignes) : Galerie iconographique, monture de flashcards et conteneur de quiz.
* `p1-lexique-pager.html` (51 lignes) : Glossaire interactif filtrable et bouton de navigation vers P2.

### Cours P2 : `components/p2/`
* Contient 7 partials dédiés à l'Axe 1 : `p2-hero-audio.html`, `p2-ideas.html`, `p2-schemes.html`, `p2-table.html` (critères comparatifs détaillés), `p2-doc-analyse.html`, `p2-gallery-flashcards.html`, `p2-lexique-pager.html`.

### Cours P3 : `components/p3/`
* Contient 6 partials dédiés à l'Axe 2 : `p3-hero-audio.html`, `p3-ideas.html`, `p3-schemes.html`, `p3-table.html` (tableau d'analyse comparée des 4 cas : Allemagne 1933, Chili 1973, Portugal 1974, Espagne 1975-1981), `p3-gallery-flashcards.html`, `p3-lexique-pager.html`.

### Cours P4 : `components/p4/`
* Contient 6 partials dédiés à la Conclusion : `p4-hero-audio.html`, `p4-ideas.html`, `p4-schemes.html`, `p4-table.html` (synthèse des institutions de l'Union européenne et du débat sur le déficit démocratique), `p4-gallery-flashcards.html`, `p4-lexique-pager.html`.

### Quiz & Flashcards Hub : `components/quiz/`
* `quiz-hero.html` (13 lignes), `quiz-engine.html` (33 lignes), `flashcards-hub.html` (39 lignes).

### Méthodologie d'Analyse : `components/analyse/`
* `methodo-guide.html` (46 lignes) : Fiche repliable avec les 4 règles d'or de l'épreuve de spécialité.
