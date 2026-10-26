/**
 * Sujet B : Benjamin Constant et l'Abstention contemporaine
 * Épreuve officielle HGGSP Première
 */
export const sujetB = {
  id: 'B',
  badge: 'Sujet B — Démocratie & Citoyenneté',
  title: "Les formes contemporaines de la citoyenneté démocratique : participation, abstention et représentativité.",
  question: "En confrontant le texte de Benjamin Constant et les statistiques sur l'abstention, analysez les tensions inhérentes à la liberté des Modernes et le risque d'un repli sur la sphère privée.",
  doc1: {
    title: "Doc. 1 : De la liberté des Anciens comparée à celle des Modernes",
    source: "Benjamin Constant, Discours prononcé à l'Athénée royal de Paris, 1819.",
    text: `Le danger de la liberté moderne, c'est qu'absorbés dans la jouissance de notre indépendance privée, et dans la poursuite de nos intérêts particuliers, nous ne renoncions trop facilement à notre droit de partage dans le pouvoir politique.

Les dépositaires de l'autorité ne manquent pas de nous y exhorter. Ils sont si disposés à nous épargner toute espèce de peine, excepté celle d'obéir et de payer ! Ils nous diront : Quel est au fond le but de vos efforts, le motif de vos travaux, l'objet de toutes vos espérances ? N'est-ce pas le bonheur ? Eh bien, ce bonheur, laissez-nous faire, et nous vous le donnerons.

Non, Messieurs, ne laissons pas faire ; quelque touchant que soit un intérêt si tendre, prions l'autorité de rester dans ses limites ; qu'elle se borne à être juste. Nous nous chargerons d'être heureux.

Le système représentatif n'est autre chose qu'une organisation à l'aide de laquelle une nation se décharge sur quelques individus de ce qu'elle ne peut ou ne veut pas faire elle-même. Les individus pauvres font eux-mêmes leurs affaires : les hommes riches prennent des intendants. C'est l'histoire des nations anciennes et des nations modernes. Le système représentatif est une procuration donnée à un certain nombre d'hommes par la masse du peuple, qui veut que ses intérêts soient défendus, et qui néanmoins n'a pas le temps de les défendre toujours lui-même.`
  },
  doc2: {
    title: "Doc. 2 : L'abstention record aux élections régionales et départementales de 2021",
    source: "Infographie Le Parisien d'après les données du Ministère de l'Intérieur / IPSOS, juin 2021.",
    image: "assets/img/parisien-abstention-2021.png",
    alt: "Graphique montrant le record historique d'abstention en France au second tour des élections régionales de juin 2021 (65,7 % d'abstention globale, culminant à 82 % chez les 18-24 ans et 77 % chez les 25-34 ans)."
  },
  sections: [
    {
      id: 'intro',
      title: 'Introduction',
      desc: 'Présentez les sources et problématisez l\'enjeu de l\'engagement civique.',
      fields: [
        {
          id: 'intro_pres',
          label: '1. Présentation des 2 documents',
          question: "Comment caractériser avec précision le discours philosophique de Constant (1819) et l'infographie électorale (2021) ?",
          keywords: "Benjamin Constant, Restauration (1819), Athénée royal, libéralisme politique, infographie presse, élections 2021, abstention.",
          hint: "Distinguez un texte théorique fondateur du libéralisme politique du XIXe siècle (discours à l'Athénée) et un document statistique contemporain (infographie de presse post-élections de 2021)."
        },
        {
          id: 'intro_contexte',
          label: '2. Contextualisation historique et sociopolitique',
          question: "Quelles évolutions sociopolitiques relient l'avènement du régime représentatif et la crise civique contemporaine ?",
          keywords: "Passage du suffrage censitaire au suffrage universel, individualisme démocratique, consumérisme, crise de la représentation.",
          hint: "Rappelez le passage de la démocratie directe des cités antiques au gouvernement représentatif moderne, puis la montée d'une crise de défiance envers les élus au XXIe siècle."
        },
        {
          id: 'intro_pb',
          label: '3. Problématique',
          question: "En quoi la mise en garde de Constant en 1819 éclaire-t-elle le phénomène contemporain de l'abstention massive ?",
          keywords: "Liberté des modernes, repli privé, démission civique, procuration politique, péril despotique.",
          hint: "Exemple : En quoi l'alerte formulée par Benjamin Constant sur le danger d'un repli exclusif sur la sphère privée trouve-t-elle une résonance frappante dans l'abstention record des démocraties contemporaines ?"
        }
      ]
    },
    {
      id: 'dev1',
      title: 'Axe 1 — La liberté des Modernes et le risque du désengagement',
      desc: 'Confrontez la théorie libérale de Constant avec les chiffres de 2021.',
      fields: [
        {
          id: 'dev1_theorie',
          label: '1. Le diagnostic de Constant : l\'attrait du bonheur privé',
          question: "Pourquoi les citoyens modernes sont-ils tentés de se désintéresser de la gestion publique selon Constant ?",
          keywords: "Indépendance privée, intérêts particuliers, jouissance personnelle, tentation de déléguer, procuration.",
          hint: "Expliquez l'allégorie de l'homme riche et de ses intendants : les citoyens modernes ont des activités économiques et des loisirs privés qui les détournent de l'engagement politique quotidien."
        },
        {
          id: 'dev1_chiffres',
          label: '2. L\'illustration empirique : le gouffre de l\'abstention (Doc. 2)',
          question: "Quels chiffres précis du document 2 témoignent de la gravité de ce désengagement, notamment chez les jeunes ?",
          keywords: "65,7 % d'abstention générale, 82 % chez les 18-24 ans, 77 % chez les 25-34 ans, fracture générationnelle.",
          hint: "Analysez les taux : près de 2/3 des Français s'abstiennent, et plus de 8 jeunes sur 10 ne votent pas aux scrutins locaux, illustrant une déconnexion aiguë entre la jeunesse et le vote traditionnel."
        }
      ]
    },
    {
      id: 'dev2',
      title: 'Axe 2 — Dangers pour la démocratie et nouvelles formes d\'engagement',
      desc: 'Évaluez les risques institutionnels et les métamorphoses de la citoyenneté.',
      fields: [
        {
          id: 'dev2_danger',
          label: '1. Le risque paternaliste et autoritaire pointé par Constant',
          question: "Quel danger majeur guette une société où les citoyens abandonnent tout contrôle politique aux gouvernants ?",
          keywords: "« Laissez-nous faire », despotisme doux (Tocqueville), paternalisme d'État, dépossession de la souveraineté.",
          hint: "Commentez la formule « Laissez-nous faire, et nous vous le donnerons » : si les citoyens renoncent à la vigilance, l'autorité confisque le pouvoir et transforme les citoyens en sujets passifs."
        },
        {
          id: 'dev2_mutation',
          label: '2. Désintérêt politique réel ou mutation des formes d\'expression ?',
          question: "L'abstention traduit-elle seulement l'indifférence ou aussi l'essor d'autres pratiques militantes ?",
          keywords: "Démocratie continue, pétitions, marches pour le climat, réseaux sociaux, boycott, défiance envers l'offre partisane.",
          hint: "Nuancez : l'abstention sanctionne une offre électorale jugée inadaptée, mais les citoyens s'investissent souvent dans des formes alternatives (associations, mobilisations numériques, manifestations)."
        }
      ]
    },
    {
      id: 'concl',
      title: 'Conclusion & Regard critique',
      desc: 'Faites la synthèse des apports et interrogez les perspectives civiques.',
      fields: [
        {
          id: 'concl_bilan',
          label: '1. Synthèse de l\'analyse',
          question: "Comment concilier liberté privée et devoir civique pour préserver l'équilibre démocratique ?",
          keywords: "Vigilance citoyenne, équilibre, liberté politique garante de la liberté civile, impératif civique.",
          hint: "Rappelez la conclusion de Constant : la liberté politique est la garantie indispensable de la liberté individuelle ; sans contrôle citoyen, toutes les libertés privées sont menacées."
        },
        {
          id: 'concl_limites',
          label: '2. Limites méthodologiques et ouverture',
          question: "Quelles limites présentent ces documents et comment prolonger la réflexion (vote obligatoire, RIC, démocratie participative) ?",
          keywords: "Scrutin local post-Covid (2021 contexte atypique), texte rédigé pour une élite bourgeoise (1819), tirage au sort, votations citoyennes.",
          hint: "Précisez que 2021 s'est déroulé en sortie de crise sanitaire avec un déficit de campagne. Ouvrez sur des réformes possibles : vote par Internet, RIC ou conventions citoyennes."
        }
      ]
    }
  ]
};
