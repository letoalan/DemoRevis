# Studio d'Analyse Critique de Documents

Le **Studio d'Analyse Critique** constitue l'atelier d'entraînement phare pour l'épreuve de spécialité HGGSP du Baccalauréat. Développé de manière hautement modulaire dans [`src/analyse/`](../src/analyse/), aucun de ses composants n'excède 170 lignes.

---

## 1. Organisation Modulaire

| Fichier | Rôle |
| :--- | :--- |
| [`src/analyse.js`](../src/analyse.js) (68 lignes) | Orchestrateur principal : instanciation, état courant du sujet, écoute des événements et rendu. |
| [`src/analyse/sujet-a.js`](../src/analyse/sujet-a.js) (115 lignes) | Jeu de données complet pour le **Sujet A (UE & Démocratie)**. |
| [`src/analyse/sujet-b.js`](../src/analyse/sujet-b.js) (117 lignes) | Jeu de données complet pour le **Sujet B (Abstention & Constant)**. |
| [`src/analyse/sujets-data.js`](../src/analyse/sujets-data.js) (9 lignes) | Agrégateur centralisant les sujets A et B. |
| [`src/analyse/storage.js`](../src/analyse/storage.js) (57 lignes) | Gestionnaire de persistance `localStorage` (sauvegarde automatique des réponses et de l'état des indices). |
| [`src/analyse/render-view.js`](../src/analyse/render-view.js) (166 lignes) | Générateur du template HTML split-screen (documents sources à gauche, formulaire guidé à droite). |
| [`src/analyse/events.js`](../src/analyse/events.js) (145 lignes) | Contrôleur d'événements : tirage au sort, auto-sauvegarde différée, déverrouillage progressif des indices. |
| [`src/analyse/export-pdf.js`](../src/analyse/export-pdf.js) (79 lignes) | Générateur de devoir au format PDF via `jsPDF`. |

---

## 2. Échafaudage Pédagogique à 3 Niveaux d'Indices

Pour respecter la consigne didactique, chaque item du formulaire d'analyse dispose de 3 boutons d'aide progressifs :

1. **Bouton 1️⃣ : Question guide**
   * Accessible dès le départ. Pose une question méthodologique orientant la réflexion de l'élève sans donner la solution.
   * **Au premier clic** : affiche la question dans un encadré bleu et **dégrise le bouton n°2**.
2. **Bouton 2️⃣ : Mots-clés**
   * Verrouillé au départ (inaccessible sans avoir cliqué sur 1).
   * **Au clic** : affiche les notions clés et auteurs à mobiliser, et **dégrise le bouton n°3**.
3. **Bouton 3️⃣ : Indice détaillé**
   * Verrouillé au départ (inaccessible sans avoir cliqué sur 1 puis sur 2).
   * **Au clic** : fournit l'indice d'analyse approfondi pour débloquer la rédaction.

L'état de déverrouillage et l'indice actuellement actif sont automatiquement sauvegardés dans le `localStorage` de l'élève par sujet.

---

## 3. Persistance & Export PDF

* **Auto-sauvegarde en arrière-plan** : chaque frappe dans un champ de texte est sauvegardée après 500 ms d'inactivité avec un indicateur visuel de synchronisation (`#save-status`).
* **Génération PDF A4 professionnelle** : le module `export-pdf.js` compile l'en-tête officiel, le nom et prénom de l'élève, la date, l'intitulé du sujet, la consigne et l'intégralité des réponses rédigées structurées en sous-parties.
