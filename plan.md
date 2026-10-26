# Plan d'implémentation DemoRevis (même structure que RevoRevis)
## Arborescence
index.html, p1.html (Introduction), p2.html (Axe 1), p3.html (Axe 2), p4.html (Conclusion UE), quiz.html (général), analyse.html (exercice guidé)
src/main.js, audio.js, quiz.js (repris tel quel), quiz-data.js, flashcards.js, analyse.js, style.css
public/credits.json, public/assets/img, public/assets/mp3/p1-p4.mp3
.github/workflows/deploy.yml (identique à RevoRevis)
## Configuration
package.json : name demorevis, dépendances mermaid + jspdf. vite.config.js : base '/demorevis/' en production, 7 entrées rollupOptions.input.
## Quiz (6 usages)
- Format repris de RevoRevis : {question, period, options[4], correct, explanation} ; initQuiz() mélange déjà les options à chaque affichage.
- 5 quiz de 10 questions (taille uniforme, 4 choix) : général, introduction, axe 1, axe 2, conclusion.
- Pages : quiz général sur quiz.html ; quiz de partie en bas de p1 à p4 avec initQuiz(quizIntro, '#page-quiz').
## Flashcards
flashcards-data.js : 4 séries de 10 cartes (recto/verso). Carte retournable au clic ou à Entrée, navigation précédent/suivant, mélange.
## Exercice d'analyse critique guidé (analyse.html)
1. Deux sujets issus du document 3 : A (déficit démocratique de l'UE, Moravcsik 2003 + dessin de Vadot 2017) ; B (l'abstention, Winock sur Constant 2009 + infographie du Parisien 2021).
2. Tirage : Math.random() entre A et B ; bouton « Nouveau tirage ».
3. Documents affichés (texte + image placée dans public/assets/img) avec le plan guidé : introduction (présentation, termes, problématique, annonce), parties I et II en sous-parties (idée, citations, explications, auteurs), conclusion (bilan, auteur bien informé ? manipulation ?).
4. Champs de saisie par étape, brouillon enregistré en localStorage.
5. Export PDF : jsPDF (npm) ou window.print() avec feuille de style @media print ; contenu = sujet, documents, réponses de l'élève.
Remarque : dans le sujet B du document source, la sous-partie 2 de la partie II reprend « Le rôle important du Parlement européen et des élections européennes », vraisemblablement une erreur de copier-coller ; à corriger (par exemple « Des remèdes à l'abstention »).
## Feuille de route
1 copier RevoRevis et renommer ; 2 ajuster vite.config et package ; 3 ajouter quiz-data et flashcards ; 4 rédiger p1 à p4 ; 5 construire analyse.js ; 6 podcasts ; 7 tests mobiles ; 8 déploiement Pages.
Précaution : les MP3 de RevoRevis pèsent 12 à 21 Mo ; privilégier un mono 64 kbps et ne pas versionner de .m4a doublons.
