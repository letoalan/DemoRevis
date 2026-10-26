/**
 * DemoRevis - Studio d'Analyse Critique de Documents
 * Sujets A & B issus de l'épreuve officielle HGGSP
 * Système d'échafaudage pédagogique à 3 niveaux d'indices progressifs :
 * n°1 : Question directrice
 * n°2 : Mots-clés conceptuels
 * n°3 : Indice détaillé (actuel)
 * Déverrouillage séquentiel : 1 dégrise 2, qui dégrise 3.
 */

import { jsPDF } from 'jspdf';

export const SUJETS = {
  A: {
    id: 'A',
    badge: 'Sujet A — Union Européenne',
    title: "Le fonctionnement de l'Union Européenne est-il le sujet d'un débat concernant son manque de démocratie ?",
    question: "En vous appuyant sur les documents, montrez que le fonctionnement de l'Union Européenne est le sujet d'un débat concernant son manque de démocratie.",
    doc1: {
      title: "Doc. 1 : Les interrogations sur le manque de démocratie dans l'UE",
      source: "Andrew Moravcsik, « Le mythe du déficit démocratique européen », Raisons politiques (Revue scientifique spécialisée en sciences politiques), 2003.",
      text: `Il n'est pas difficile de voir pourquoi les institutions européennes semblent manquer de légitimité démocratique. Seul un organisme de l'UE est élu directement au niveau européen : le Parlement. Ce dernier a beaucoup moins de pouvoir que ses homologues nationaux et son élection, qui a lieu sur un mode décentralisé, ne mobilise que faiblement les électeurs de chaque pays qui choisissent parmi des partis nationaux en fonction de questions nationales plutôt qu'européennes. La Commission européenne est très largement perçue comme un organe technocratique et lointain. La Cour de justice européenne, constituée de quinze juges nommés, a, en revanche, un pouvoir relativement étendu comparé aux normes européennes. Le Conseil des ministres, la plus puissante des institutions bruxelloises, rassemble des ministres, des diplomates et des officiels de chaque pays qui délibèrent souvent en secret.

Il est injuste de juger l'Union européenne en fonction d'exigences auxquelles aucun gouvernement moderne ne peut répondre. Les gouvernements des États délèguent régulièrement leurs pouvoirs à des institutions telles que cours constitutionnelles, banques centrales, organes de régulation et ministère public. De même qu'ils contrôlent la puissance publique par le biais de la séparation des pouvoirs plutôt que par le recours à la démocratie directe. L'équilibre des pouvoirs inscrit dans la Constitution, le contrôle démocratique indirect via les gouvernements nationaux et la montée en puissance du Parlement européen sont des éléments suffisants pour s'assurer du fait que les décisions de l'Union sont, dans presque tous les cas, honnêtes, transparentes, efficaces et adaptées aux demandes des citoyens européens.`
    },
    doc2: {
      title: "Doc. 2 : Dessin de presse sur l'Europe et l'abstention",
      source: "Dessin de Vadot, « Les décodeurs de l'Europe », brochure publiée par la Commission européenne, 2017.",
      image: "assets/img/vadot-ue-2017.png",
      alt: "Dessin de Vadot montrant un couple sur un canapé. La femme lit un journal avec le titre ABSTENTIONS en hausse et demande : 'Et toi, tu as voté aux dernières élections européennes ?'. L'homme tenant une pancarte 'À bas l'Europe NON DÉMOCRATIQUE' répond : 'Ah non, pourquoi ?'."
    },
    sections: [
      {
        id: 'intro',
        title: 'Introduction',
        desc: 'Posez les fondations de votre réflexion critique.',
        fields: [
          {
            id: 'intro_pres',
            label: '1. Présentation des 2 documents',
            question: "Qui sont les auteurs de chaque document, quelles sont leurs fonctions respectives et dans quel cadre publient-ils ces documents (revue scientifique vs brochure de presse) ?",
            keywords: "Andrew Moravcsik, politologue américain, Raisons politiques (2003), Nicolas Vadot, dessinateur de presse, Les décodeurs de l'Europe (2017), Commission européenne, caricature.",
            hint: "Présentez la nature, l'auteur, la date et le contexte : Moravcsik est un universitaire analysant le prétendu déficit démocratique en 2003 ; Vadot est un caricaturiste illustrant avec ironie le paradoxe des citoyens abstentionnistes dans une brochure officielle en 2017."
          },
          {
            id: 'intro_termes',
            label: '2. Définition des termes clés du sujet',
            question: "Qu'entend-on précisément par 'manque de démocratie' (ou 'déficit démocratique') et pourquoi le statut supranational de l'UE complique-t-il cette notion ?",
            keywords: "Déficit démocratique, institutions européennes, légitimité démocratique directe/indirecte, souveraineté déléguée, technocratie, controverse.",
            hint: "Définissez : fonctionnement de l'UE (triangle institutionnel supranational), manque de démocratie (sentiment d'éloignement des citoyens et opacité perçue), débat (affrontement entre critiques eurosceptiques et partisans d'une démocratie représentative moderne)."
          },
          {
            id: 'intro_pb',
            label: '3. Problématique',
            question: "Comment formuler la contradiction centrale entre la critique d'une technocratie bruxelloise non élue et la réalité d'un système respectant l'équilibre des pouvoirs ?",
            keywords: "Dans quelle mesure, débat, technocratie, souveraineté, séparation des pouvoirs, démocratie libérale, perception citoyenne.",
            hint: "Formulation possible : Dans quelle mesure le fonctionnement institutionnel de l'Union européenne fait-il l'objet d'un débat sur son manque de démocratie, alors même qu'il s'inscrit dans les règles et garanties de la démocratie représentative libérale ?"
          },
          {
            id: 'intro_plan',
            label: '4. Annonce du plan',
            question: "Comment ordonner vos deux grandes parties pour examiner d'abord les griefs formulés contre l'UE, puis la justification institutionnelle libérale apportée par Moravcsik ?",
            keywords: "I. Les critiques sur le fonctionnement démocratique / II. Un système respectant les principes de la démocratie libérale.",
            hint: "I. Les critiques sur le fonctionnement démocratique de l’UE (éloignement des citoyens et poids des fonctionnaires et des États) / II. L’UE, un système respectant les principes de la démocratie libérale (délégation de pouvoir, séparation et équilibre des pouvoirs)."
          }
        ]
      },
      {
        id: 'p1',
        title: 'Partie I — Les critiques sur le fonctionnement démocratique de l’UE',
        desc: 'Analysez les arguments dénonçant un éloignement des citoyens et un pouvoir technocratique.',
        fields: [
          {
            id: 'p1_sp1',
            label: 'Sous-partie 1 : La part réduite des citoyens européens',
            question: "Quels indices précis du texte et du dessin de presse révèlent la faible implication électorale des citoyens et leur sentiment d'impuissance ?",
            keywords: "Parlement européen, faible mobilisation électorale, campagnes dominées par des enjeux nationaux, abstention massive, contradiction citoyenne, caricature de Vadot.",
            hint: "Citez Moravcsik sur le Parlement qui 'ne mobilise que faiblement les électeurs' et analysez la caricature de Vadot : le citoyen crie 'À bas l'Europe non démocratique' mais refuse de voter, illustrant la déconnexion civique."
          },
          {
            id: 'p1_sp2',
            label: 'Sous-partie 2 : Le rôle important des fonctionnaires (technocrates) et des États',
            question: "Quelles institutions bruxelloises cristallisent l'accusation d'opacité et de gouvernement par des experts non élus ?",
            keywords: "Commission européenne, organe technocratique et lointain, Conseil des ministres, diplomates, secret des délibérations, diplomatie intergouvernementale, Cour de justice.",
            hint: "Citez le texte : la Commission perçue comme un 'organe technocratique et lointain', et le Conseil des ministres où ministres et diplomates 'délibèrent souvent en secret', échappant au regard public direct."
          },
          {
            id: 'p1_trans',
            label: 'Transition vers la Partie II',
            question: "Pourquoi ces critiques, bien que compréhensibles, reposent-elles sur une conception dépassée ou irréaliste de la démocratie selon Moravcsik ?",
            keywords: "Apparences trompeuses, exigences impossibles, gouvernement moderne, démocratie déléguée.",
            hint: "Concluez la Partie I sur la force des perceptions négatives, puis annoncez que pour Moravcsik, il est injuste d'exiger de l'UE ce qu'aucun État moderne ne pratique (la démocratie directe permanente)."
          }
        ]
      },
      {
        id: 'p2',
        title: 'Partie II — L’UE, un système respectant les principes de la démocratie libérale',
        desc: 'Démontrez la thèse de Moravcsik sur la délégation légitime et l’équilibre des pouvoirs.',
        fields: [
          {
            id: 'p2_sp1',
            label: 'Sous-partie 1 : Une démocratie déléguée séparant et équilibrant les pouvoirs',
            question: "Quels parallèles l'auteur établit-il avec les institutions démocratiques nationales pour légitimer la délégation de compétences à des organes indépendants ?",
            keywords: "Délégation de pouvoir, cours constitutionnelles, banques centrales, organes de régulation, séparation des pouvoirs, Montesquieu, contrôle indirect par les gouvernements élus.",
            hint: "Expliquez la thèse centrale : les gouvernements démocratiques délèguent régulièrement des pouvoirs à des experts indépendants. L'UE s'appuie sur une stricte séparation des pouvoirs et un contrôle démocratique indirect via les États membres."
          },
          {
            id: 'p2_sp2',
            label: 'Sous-partie 2 : Le rôle croissant du Parlement européen et des élections',
            question: "Comment le Parlement européen incarne-t-il la légitimité démocratique directe et comment ses pouvoirs se sont-ils renforcés au fil des traités ?",
            keywords: "Parlement européen, suffrage universel direct depuis 1979, pouvoir législatif et budgétaire conjoint, investiture de la Commission, décisions transparentes et efficaces.",
            hint: "Soulignez avec Moravcsik la 'montée en puissance du Parlement européen' : co-législateur avec le Conseil, votant le budget et contrôlant la Commission, garantissant que les décisions reflètent les demandes citoyennes."
          },
          {
            id: 'p2_trans',
            label: 'Bilan du développement',
            question: "En confrontant Partie I et Partie II, quel diagnostic posez-vous sur la réalité du modèle politique européen ?",
            keywords: "Synthèse, système représentatif supranational, paradoxe entre solidité institutionnelle et déficit d'adhésion populaire.",
            hint: "Bilan intermédiaire : l'UE n'est pas un monstre technocratique mais une démocratie représentative originale, dont le défi majeur reste le manque d'engagement et de conscience civique européenne."
          }
        ]
      },
      {
        id: 'concl',
        title: 'Conclusion critique',
        desc: 'Prenez de la hauteur et portez un regard distancié sur les documents.',
        fields: [
          {
            id: 'concl_bilan',
            label: '1. Réponse synthétique à la problématique',
            question: "En deux ou trois phrases claires, quelle est votre réponse finale à la question du sujet ?",
            keywords: "Bilan global, controverse vivante, architecture démocratique libérale vérifiée, participation civique à reconquérir.",
            hint: "Le fonctionnement de l'UE fait bien l'objet d'un débat persistant : si le sentiment d'un déficit démocratique nourrit l'euroscepticisme, les documents démontrent qu'il s'agit d'une démocratie représentative fondée sur la délégation et l'équilibre des pouvoirs."
          },
          {
            id: 'concl_auteur_info',
            label: '2. L’auteur est-il bien informé ? Pourquoi ?',
            question: "Quels éléments de biographie intellectuelle et professionnelle confèrent de l'autorité aux auteurs des documents ?",
            keywords: "Andrew Moravcsik professeur à l'Université de Princeton, spécialiste mondial des sciences politiques, Nicolas Vadot dessinateur professionnel pour la presse internationale.",
            hint: "Andrew Moravcsik est un universitaire reconnu mondialement pour ses recherches sur l'intégration européenne ; Vadot est un journaliste-caricaturiste réputé disposant d'une excellente connaissance de l'actualité institutionnelle."
          },
          {
            id: 'concl_manip',
            label: '3. Intention, neutralité ou volonté d’influence ?',
            question: "Quels sont les objectifs respectifs des deux auteurs : s'agit-il d'informer, de provoquer une prise de conscience ou de défendre une cause politique ?",
            keywords: "Plaidoyer universitaire contre les idées reçues, argumentation scientifique, caricature satirique, brochure officielle de la Commission, appel civique au vote.",
            hint: "Moravcsik assume une thèse engagée et provocatrice pour réhabiliter la légitimité de l'UE ; le dessin de Vadot, commandé par la Commission, utilise l'ironie pour culpabiliser l'abstentionniste et inciter à la participation électorale."
          }
        ]
      }
    ]
  },

  B: {
    id: 'B',
    badge: 'Sujet B — Participation et Abstention',
    title: "L'abstention, principal défi proposé aux démocraties libérales aujourd'hui",
    question: "En vous appuyant sur les documents, montrez que le principal défi proposé aux démocraties libérales est aujourd'hui constitué par l'abstention.",
    doc1: {
      title: "Doc. 1 : Les libertés des modernes et le risque de l'abstention",
      source: "Michel Winock, « De la liberté des Anciens comparée à celle des Modernes par Benjamin Constant », L'Histoire (Revue scientifique spécialisée en histoire), 2009.",
      text: `Est-ce à dire que la liberté politique est obsolète ? Au contraire, elle est indispensable, mais selon d'autres formes. Le danger est en effet que le citoyen moderne en vienne à se désintéresser de ses droits et devoirs politiques. Benjamin Constant prône le système représentatif, qu'il définit comme une procuration donnée par les citoyens à ses mandataires. Liberté politique et liberté individuelle doivent être combinées. Le but n'est pas seulement le bonheur individuel, il est aussi moral : c'est le perfectionnement du genre humain. Le libéralisme de Benjamin Constant se dressait contre les pouvoirs abusifs exercés au nom de la collectivité. L'ère des totalitarismes est close, mais un autre danger menace dans l'ère individualiste que nous connaissons : l'abstention des citoyens au profit d'un pouvoir sans contrôle. Constant nous mettait en garde : les libertés individuelles sont un bien précieux mais les défendre exige de la part des citoyens l'exercice de leur liberté politique, le dépassement de leurs intérêts particuliers et leur vigilance de commettants, qui ont le pouvoir de juger et de révoquer leurs mandataires, simples dépositaires de l'autorité publique. C'est la pierre de touche du système représentatif, qui ne peut être réduit à une procédure électorale.

Le danger couru par les démocraties modernes aujourd'hui est moins celui d'un despotisme collectif que celui de l'indifférence massive des citoyens. Constant nous le rappelle : la liberté n'est jamais un acquis définitif ; elle appelle la responsabilité de chacun et la participation du plus grand nombre.`
    },
    doc2: {
      title: "Doc. 2 : Profil des abstentionnistes et évolution de l'abstention",
      source: "Infographie réalisée par le quotidien Le Parisien, article du 21 juin 2021 (Sources : Ipsos / Sopra Steria).",
      image: "assets/img/parisien-abstention-2021.png",
      alt: "Infographie du Parisien montrant le profil des abstentionnistes selon l'âge (87% des 18-24 ans s'abstiennent) et l'évolution de l'abstention aux élections en France (66,7% aux régionales 2021)."
    },
    sections: [
      {
        id: 'intro',
        title: 'Introduction',
        desc: 'Cadrez la tension fondamentale entre liberté privée et engagement civique.',
        fields: [
          {
            id: 'intro_pres',
            label: '1. Présentation des 2 documents',
            question: "Qui sont les auteurs respectifs (un historien commentant un philosophe, un journal s'appuyant sur des sondages) et quelles sont leurs dates de publication ?",
            keywords: "Michel Winock, historien contemporain, Benjamin Constant (1819), revue L'Histoire (2009), infographie Le Parisien (2021), institut Ipsos / Sopra Steria.",
            hint: "Doc 1 : article de l'historien Michel Winock dans L'Histoire (2009) commentant la pensée libérale de Benjamin Constant (1819) ; Doc 2 : infographie de presse du Parisien (2021) fondée sur un sondage Ipsos/Sopra Steria analysant les records d'abstention."
          },
          {
            id: 'intro_termes',
            label: '2. Définition des termes clés du sujet',
            question: "Qu'est-ce qu'une démocratie libérale, qu'appelle-t-on abstention, et pourquoi est-elle qualifiée de 'défi majeur' ?",
            keywords: "Démocratie libérale, libertés individuelles, système représentatif, souveraineté populaire, abstentionnisme, défi de légitimité.",
            hint: "Définissez : démocratie libérale (régime représentatif garantissant pluralisme et droits civils), abstention (refus ou désaffection de l'acte électoral), principal défi (menace sur la représentativité et le contrôle citoyen des dirigeants)."
          },
          {
            id: 'intro_pb',
            label: '3. Problématique',
            question: "En quoi le désintérêt électoral des citoyens menace-t-il le cœur même du pacte démocratique représentatif théorisé dès le XIXe siècle ?",
            keywords: "En quoi, repli individualiste, procuration rompue, pouvoir sans contrôle, crise du consentement démocratique.",
            hint: "Problématique : En quoi l'abstention massive contemporaine transforme-t-elle la liberté moderne en une menace pour la démocratie représentative en favorisant l'émergence d'un pouvoir sans contrôle ?"
          },
          {
            id: 'intro_plan',
            label: '4. Annonce du plan',
            question: "Comment organiser votre réflexion pour confronter d'abord la théorie politique de Constant, puis les données chiffrées de l'abstention contemporaine et ses remèdes ?",
            keywords: "I. Benjamin Constant et la liberté des Modernes / II. La liberté des Modernes au risque de l'abstention massive et les remèdes.",
            hint: "I. Benjamin Constant et la liberté des Modernes : le système représentatif comme procuration / II. La liberté des Modernes au risque de l'abstention : les dangers d'une crise démocratique et les remèdes possibles."
          }
        ]
      },
      {
        id: 'p1',
        title: 'Partie I — Benjamin Constant et la liberté des Modernes',
        desc: 'Présentez la théorie du système représentatif et le refus du despotisme.',
        fields: [
          {
            id: 'p1_sp1',
            label: 'Sous-partie 1 : Constant contre le despotisme et la liberté des Anciens',
            question: "À quelle dérive historique majeure de la Révolution française Constant s'oppose-t-il et pourquoi rejette-t-il la démocratie directe antique ?",
            keywords: "Terreur (1793-1794), dérive totalitaire, pouvoirs abusifs au nom de la collectivité, sacrifice des droits individuels, liberté des Anciens.",
            hint: "Citez Winock : 'Le libéralisme de Benjamin Constant se dressait contre les pouvoirs abusifs exercés au nom de la collectivité'. Constant rejette la démocratie directe à l'antique qui sacrifie les droits individuels au pouvoir collectif."
          },
          {
            id: 'p1_sp2',
            label: 'Sous-partie 2 : La démocratie libérale définie comme procuration',
            question: "Quelle définition précise Constant donne-t-il du système représentatif et comment articule-t-il droits privés et vigilance publique ?",
            keywords: "Procuration donnée aux mandataires, commettants, surveillance et révocation des élus, perfectionnement moral, vigilance civique continue.",
            hint: "Expliquez la formule clé de Constant : le système représentatif est 'une procuration donnée par les citoyens à ses mandataires' ; les commettants doivent conserver le pouvoir de juger et révoquer leurs élus pour éviter un pouvoir sans contrôle."
          },
          {
            id: 'p1_trans',
            label: 'Transition vers la Partie II',
            question: "Quel danger redoutable naît dès lors que le citoyen profite de sa liberté privée au point de négliger son devoir de commettant ?",
            keywords: "Revers de la liberté des Modernes, individualisme excessif, indifférence politique, ouverture vers les crises actuelles.",
            hint: "Montrez que la liberté moderne porte en elle son propre poison : en se repliant exclusivement sur ses affaires privées, le citoyen s'abstient et laisse les gouvernants sans aucun garde-fou démocratique."
          }
        ]
      },
      {
        id: 'p2',
        title: 'Partie II — La liberté des Modernes au risque de l’abstention',
        desc: 'Analysez les périls contemporains de l’indifférence civique et les pistes de remède.',
        fields: [
          {
            id: 'p2_sp1',
            label: 'Sous-partie 1 : Les problèmes posés par une abstention massive',
            question: "Quelles données de l'infographie du Parisien illustrent l'ampleur de la crise électorale et quelles en sont les répercussions sur la démocratie ?",
            keywords: "66,7% d'abstention aux régionales 2021, 87% des 18-24 ans, 83% des 25-34 ans, fracture générationnelle, crise de légitimité, déconnexion.",
            hint: "Reliez l'avertissement de Constant ('danger d'un pouvoir sans contrôle') aux chiffres du Parisien : record de 66,7 % d'abstention et 87 % des jeunes abstentionnistes, privant les élus d'une base démocratique représentative."
          },
          {
            id: 'p2_sp2',
            label: 'Sous-partie 2 : Des remèdes à l’abstention et renouveau de la participation civique',
            question: "Quelles solutions concrètes (institutionnelles, civiques et participatives) peuvent être mises en œuvre pour faire revivre la responsabilité des commettants ?",
            keywords: "Reconnaissance du vote blanc, vote obligatoire, démocratie délibérative, conventions citoyennes, éducation civique, votations locales, responsabilité des commettants.",
            hint: "Proposez des pistes pour surmonter l'abstention : revitalisation de l'éducation civique, reconnaissance du vote blanc, consultation citoyenne continue (conventions, budgets participatifs) et réaffirmation de la liberté politique."
          },
          {
            id: 'p2_trans',
            label: 'Bilan du développement',
            question: "En confrontant Constant et la réalité de 2021, quel constat dresserez-vous sur la fragilité de la citoyenneté moderne ?",
            keywords: "Liberté jamais acquise définitivement, responsabilité individuelle, interdépendance de la liberté civile et de la participation politique.",
            hint: "Bilan intermédiaire : l'abstention record vérifie la prophétie de Constant et de Tocqueville : la liberté individuelle sans participation politique est condamnée à disparaître sous un despotisme doux ou oligarchique."
          }
        ]
      },
      {
        id: 'concl',
        title: 'Conclusion critique',
        desc: 'Portez un jugement critique sur la valeur et les limites des documents.',
        fields: [
          {
            id: 'concl_bilan',
            label: '1. Réponse synthétique à la problématique',
            question: "Quelle synthèse claire formulerez-vous pour répondre au sujet sur l'abstention comme défi numéro un des démocraties ?",
            keywords: "Bilan définitif, défi existentiel, crise du modèle représentatif, impératif de participation civique.",
            hint: "L'abstention constitue sans conteste le défi premier des démocraties contemporaines car elle brise le mécanisme de la procuration représentative et expose la société au risque d'un pouvoir affranchi de tout contrôle populaire."
          },
          {
            id: 'concl_auteur_info',
            label: '2. Les auteurs sont-ils bien informés ? Pourquoi ?',
            question: "En quoi les travaux de Michel Winock et les enquêtes d'Ipsos pour Le Parisien constituent-ils des sources fiables et reconnues ?",
            keywords: "Michel Winock historien réputé, spécialiste de la République et de la citoyenneté, institut de sondage Ipsos/Sopra Steria, données du ministère de l'Intérieur.",
            hint: "Michel Winock est un historien de premier plan de la pensée républicaine ; l'infographie du Parisien s'appuie sur des données électorales officielles et des enquêtes d'opinion d'instituts rigoureusement accrédités."
          },
          {
            id: 'concl_manip',
            label: '3. Portée et objectivité des documents',
            question: "Quelles sont les intentions éditoriales de chaque document et quelles limites peut-on relever dans le traitement médiatique de l'abstention ?",
            keywords: "Vulgarisation savante, réactualisation de la philosophie politique, dramatisation journalistique du chiffre record, abstention subie vs contestataire.",
            hint: "Winock cherche à donner de la profondeur historique au présent ; Le Parisien met l'accent sur les records pour alerter l'opinion, sans toujours distinguer l'abstention de dépit de l'abstention militante ou contestataire."
          }
        ]
      }
    ]
  }
};

export function initAnalyseStudio() {
  const container = document.getElementById('analyse-studio-app');
  if (!container) return;

  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : base + '/';

  function resolvePath(path) {
    if (!path) return '';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return cleanBase + cleanPath;
  }

  // Active Subject key (default random or localStorage)
  let activeSubjectKey = localStorage.getItem('demorevis-active-sujet');
  if (!activeSubjectKey || !SUJETS[activeSubjectKey]) {
    activeSubjectKey = Math.random() < 0.5 ? 'A' : 'B';
  }

  function getStorageKey(subjKey) {
    return `demorevis-analyse-data-${subjKey}`;
  }

  function getHintsStorageKey(subjKey) {
    return `demorevis-hints-state-${subjKey}`;
  }

  function loadFormData(subjKey) {
    try {
      const data = localStorage.getItem(getStorageKey(subjKey));
      return data ? JSON.parse(data) : {};
    } catch (_) {
      return {};
    }
  }

  function saveFormData(subjKey, data) {
    try {
      localStorage.setItem(getStorageKey(subjKey), JSON.stringify(data));
      showSaveIndicator();
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  function loadHintsState(subjKey) {
    try {
      const data = localStorage.getItem(getHintsStorageKey(subjKey));
      return data ? JSON.parse(data) : {};
    } catch (_) {
      return {};
    }
  }

  function saveHintsState(subjKey, state) {
    try {
      localStorage.setItem(getHintsStorageKey(subjKey), JSON.stringify(state));
    } catch (e) {
      console.warn('Hints state save error:', e);
    }
  }

  function showSaveIndicator() {
    const indicator = document.getElementById('save-status');
    if (indicator) {
      indicator.innerHTML = '<span class="save-dot"></span> Brouillon enregistré';
      indicator.style.opacity = '1';
      setTimeout(() => {
        indicator.style.opacity = '0.7';
      }, 2000);
    }
  }

  // Memory state for progressive hints: { [fieldId]: { unlockedLevel: 1|2|3, activeLevel: null|1|2|3 } }
  let hintsState = loadHintsState(activeSubjectKey);

  function render() {
    const sujet = SUJETS[activeSubjectKey];
    const savedData = loadFormData(activeSubjectKey);

    container.innerHTML = `
      <!-- Toolbar & Subject Selector -->
      <div class="analyse-toolbar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; background: var(--bg-card); padding: 1rem 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">Choix du Sujet :</span>
          <button type="button" class="flashcard-btn ${activeSubjectKey === 'A' ? 'primary' : ''}" id="btn-select-a">
            Sujet A (UE & Démocratie)
          </button>
          <button type="button" class="flashcard-btn ${activeSubjectKey === 'B' ? 'primary' : ''}" id="btn-select-b">
            Sujet B (Abstention & Constant)
          </button>
        </div>

        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <button type="button" class="flashcard-btn" id="btn-random-tirage" title="Tirer au sort entre le Sujet A et le Sujet B">
            🎲 Tirage au sort
          </button>
          <span class="save-status-indicator" id="save-status" style="opacity: 0.7;">
            <span class="save-dot"></span> Brouillon synchronisé
          </span>
        </div>
      </div>

      <!-- Hero Banner du Sujet -->
      <div class="analyse-hero">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <span class="quiz-badge" style="background: var(--color-primary-soft); color: var(--color-primary);">${sujet.badge}</span>
          <span class="tag-badge tag-evenement">Épreuve officielle HGGSP Première</span>
        </div>
        <h2 style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--text-main); margin-bottom: 0.75rem;">
          ${sujet.title}
        </h2>
        <p style="font-size: 1.05rem; font-weight: 600; color: var(--color-primary); line-height: 1.5; background: var(--bg-elevated); padding: 1rem; border-radius: var(--radius-sm); border-left: 4px solid var(--color-primary);">
          🎯 Consigne : ${sujet.question}
        </p>
      </div>

      <!-- Main Dual Studio Layout -->
      <div class="analyse-container">
        
        <!-- Colonne Gauche : Documents sources -->
        <div class="analyse-docs-panel">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 style="font-family: var(--font-heading); font-size: 1.15rem; color: var(--text-main);">
              📄 Dossier documentaire
            </h3>
            <span style="font-size: 0.8rem; color: var(--text-subtle);">Cliquez sur l'image pour agrandir</span>
          </div>

          <!-- Document 1 (Texte) -->
          <article class="doc-box">
            <div class="doc-box-header">
              <span class="doc-box-title">${sujet.doc1.title}</span>
              <span class="tag-badge tag-institution">Texte</span>
            </div>
            <div class="doc-box-body">${sujet.doc1.text}</div>
            <div class="doc-box-source">${sujet.doc1.source}</div>
          </article>

          <!-- Document 2 (Image / Presse) -->
          <article class="doc-box">
            <div class="doc-box-header">
              <span class="doc-box-title">${sujet.doc2.title}</span>
              <span class="tag-badge tag-politique">Document iconographique</span>
            </div>
            <div class="doc-box-img-wrap" id="doc2-img-container">
              <img src="${resolvePath(sujet.doc2.image)}" alt="${sujet.doc2.alt}" loading="lazy" />
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.75rem;">${sujet.doc2.alt}</p>
            <div class="doc-box-source">${sujet.doc2.source}</div>
          </article>
        </div>

        <!-- Colonne Droite : Formulaire d'analyse guidée avec indices progressifs -->
        <div class="analyse-form-panel">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--text-main);">
                ✍️ Votre Feuille d'Analyse Critique
              </h3>
              <p style="font-size: 0.85rem; color: var(--text-muted);">
                Débloquez progressivement les 3 niveaux d'indices (Question guide → Mots-clés → Indice détaillé).
              </p>
            </div>
            <button type="button" class="flashcard-btn" id="btn-clear-draft" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" title="Réinitialiser les réponses du sujet en cours">
              🗑️ Effacer
            </button>
          </div>

          <!-- Student Name Inputs -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; background: var(--bg-elevated); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <div>
              <label class="field-label" for="student-nom">Nom de l'élève :</label>
              <input type="text" id="student-nom" class="analyse-textarea" style="min-height: 40px; padding: 0.4rem 0.75rem;" placeholder="Ex: Dupont" value="${savedData['student-nom'] || ''}" />
            </div>
            <div>
              <label class="field-label" for="student-prenom">Prénom :</label>
              <input type="text" id="student-prenom" class="analyse-textarea" style="min-height: 40px; padding: 0.4rem 0.75rem;" placeholder="Ex: Camille" value="${savedData['student-prenom'] || ''}" />
            </div>
          </div>

          <!-- Étapes guidées avec les 3 boutons d'indices -->
          <form id="analyse-form">
            ${sujet.sections.map(section => `
              <div class="form-step-block">
                <div class="step-title">
                  <span>📌</span> ${section.title}
                </div>
                <p class="step-desc">${section.desc}</p>

                ${section.fields.map(field => {
                  const state = hintsState[field.id] || { unlocked: 1, active: null };
                  const unlocked = state.unlocked || 1;
                  const active = state.active;

                  return `
                    <div class="field-group" data-field-id="${field.id}">
                      <label class="field-label" for="${field.id}">${field.label}</label>
                      
                      <!-- Scaffolding : 3 Boutons d'indices progressifs -->
                      <div class="hints-scaffolding">
                        <div class="hints-buttons-bar">
                          <span class="hints-prompt-label">💡 Indices :</span>
                          
                          <!-- Bouton 1 : Question orientant l'élève (Actif au départ) -->
                          <button 
                            type="button" 
                            class="hint-step-btn step-1 ${active === 1 ? 'active' : ''}" 
                            data-level="1"
                            title="Niveau 1 : Question guide pour orienter votre réflexion"
                          >
                            1️⃣ Question guide
                          </button>

                          <!-- Bouton 2 : Mots-clés (Dégrisé après clic sur 1) -->
                          <button 
                            type="button" 
                            class="hint-step-btn step-2 ${active === 2 ? 'active' : ''}" 
                            data-level="2"
                            ${unlocked >= 2 ? '' : 'disabled'}
                            title="Niveau 2 : Mots-clés conceptuels (accessible après clic sur 1)"
                          >
                            2️⃣ Mots-clés
                          </button>

                          <!-- Bouton 3 : Indice actuel complet (Dégrisé après clic sur 2) -->
                          <button 
                            type="button" 
                            class="hint-step-btn step-3 ${active === 3 ? 'active' : ''}" 
                            data-level="3"
                            ${unlocked >= 3 ? '' : 'disabled'}
                            title="Niveau 3 : Indice détaillé (accessible après clic sur 2)"
                          >
                            3️⃣ Indice détaillé
                          </button>
                        </div>

                        <!-- Encadré d'affichage de l'indice actif -->
                        <div class="hint-display-box" id="hint-box-${field.id}" style="${active ? 'display: block;' : 'display: none;'}">
                          ${active === 1 ? `
                            <div class="hint-display-title level-1">❓ Question guide pour orienter votre réflexion :</div>
                            <div>${field.question}</div>
                          ` : active === 2 ? `
                            <div class="hint-display-title level-2">🔑 Mots-clés et notions à mobiliser :</div>
                            <div>${field.keywords}</div>
                          ` : active === 3 ? `
                            <div class="hint-display-title level-3">💡 Indice d'analyse détaillé :</div>
                            <div>${field.hint}</div>
                          ` : ''}
                        </div>
                      </div>

                      <textarea 
                        id="${field.id}" 
                        name="${field.id}" 
                        class="analyse-textarea" 
                        rows="3" 
                        placeholder="Rédigez ici vos éléments d'analyse..."
                      >${savedData[field.id] || ''}</textarea>
                    </div>
                  `;
                }).join('')}
              </div>
            `).join('')}

            <!-- Barre d'actions finales -->
            <div class="analyse-actions-bar">
              <div style="font-size: 0.85rem; color: var(--text-muted);">
                💾 Auto-sauvegarde activée dans votre navigateur.
              </div>
              <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <button type="button" class="flashcard-btn" id="btn-print-view">
                  🖨️ Imprimer / Aperçu
                </button>
                <button type="button" class="flashcard-btn primary" id="btn-export-pdf">
                  📄 Exporter en PDF (jsPDF)
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    // Subject selector buttons
    const btnA = container.querySelector('#btn-select-a');
    const btnB = container.querySelector('#btn-select-b');
    const btnTirage = container.querySelector('#btn-random-tirage');

    if (btnA) {
      btnA.addEventListener('click', () => {
        if (activeSubjectKey !== 'A') {
          activeSubjectKey = 'A';
          localStorage.setItem('demorevis-active-sujet', 'A');
          hintsState = loadHintsState('A');
          render();
        }
      });
    }

    if (btnB) {
      btnB.addEventListener('click', () => {
        if (activeSubjectKey !== 'B') {
          activeSubjectKey = 'B';
          localStorage.setItem('demorevis-active-sujet', 'B');
          hintsState = loadHintsState('B');
          render();
        }
      });
    }

    if (btnTirage) {
      btnTirage.addEventListener('click', () => {
        const next = Math.random() < 0.5 ? 'A' : 'B';
        activeSubjectKey = next;
        localStorage.setItem('demorevis-active-sujet', next);
        hintsState = loadHintsState(next);
        render();
        alert(`🎲 Sujet tiré au sort : Sujet ${next} !`);
      });
    }

    // Auto-save form inputs on input
    const textareas = container.querySelectorAll('.analyse-textarea');
    let saveTimeout = null;

    textareas.forEach(input => {
      input.addEventListener('input', () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
          const currentData = {};
          textareas.forEach(t => {
            currentData[t.id] = t.value;
          });
          saveFormData(activeSubjectKey, currentData);
        }, 500);
      });
    });

    // Progressive Hint Buttons Wiring
    const sujet = SUJETS[activeSubjectKey];
    const fieldMap = {};
    sujet.sections.forEach(sec => {
      sec.fields.forEach(f => {
        fieldMap[f.id] = f;
      });
    });

    const fieldGroups = container.querySelectorAll('.field-group');
    fieldGroups.forEach(group => {
      const fieldId = group.dataset.fieldId;
      const fieldData = fieldMap[fieldId];
      if (!fieldData) return;

      const btn1 = group.querySelector('.hint-step-btn.step-1');
      const btn2 = group.querySelector('.hint-step-btn.step-2');
      const btn3 = group.querySelector('.hint-step-btn.step-3');
      const hintBox = group.querySelector(`#hint-box-${fieldId}`);

      function setLevel(lvl) {
        if (!hintsState[fieldId]) {
          hintsState[fieldId] = { unlocked: 1, active: null };
        }

        // Toggle if clicking active level
        if (hintsState[fieldId].active === lvl) {
          hintsState[fieldId].active = null;
          hintBox.style.display = 'none';
          [btn1, btn2, btn3].forEach(b => b.classList.remove('active'));
          saveHintsState(activeSubjectKey, hintsState);
          return;
        }

        // Progressively unlock next levels: 1 unlocks 2, 2 unlocks 3
        if (lvl === 1) {
          hintsState[fieldId].unlocked = Math.max(hintsState[fieldId].unlocked || 1, 2);
          btn2.disabled = false;
        } else if (lvl === 2) {
          hintsState[fieldId].unlocked = Math.max(hintsState[fieldId].unlocked || 1, 3);
          btn3.disabled = false;
        }

        hintsState[fieldId].active = lvl;
        saveHintsState(activeSubjectKey, hintsState);

        // Highlight active button
        btn1.classList.toggle('active', lvl === 1);
        btn2.classList.toggle('active', lvl === 2);
        btn3.classList.toggle('active', lvl === 3);

        // Render content into hintBox
        hintBox.style.display = 'block';
        if (lvl === 1) {
          hintBox.innerHTML = `
            <div class="hint-display-title level-1">❓ Question guide pour orienter votre réflexion :</div>
            <div>${fieldData.question}</div>
          `;
        } else if (lvl === 2) {
          hintBox.innerHTML = `
            <div class="hint-display-title level-2">🔑 Mots-clés et notions à mobiliser :</div>
            <div>${fieldData.keywords}</div>
          `;
        } else if (lvl === 3) {
          hintBox.innerHTML = `
            <div class="hint-display-title level-3">💡 Indice d'analyse détaillé :</div>
            <div>${fieldData.hint}</div>
          `;
        }
      }

      if (btn1) {
        btn1.addEventListener('click', () => setLevel(1));
      }
      if (btn2) {
        btn2.addEventListener('click', () => {
          if (!btn2.disabled) setLevel(2);
        });
      }
      if (btn3) {
        btn3.addEventListener('click', () => {
          if (!btn3.disabled) setLevel(3);
        });
      }
    });

    // Clear Draft
    const clearBtn = container.querySelector('#btn-clear-draft');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('Voulez-vous vraiment effacer votre brouillon pour ce sujet ?')) {
          localStorage.removeItem(getStorageKey(activeSubjectKey));
          localStorage.removeItem(getHintsStorageKey(activeSubjectKey));
          hintsState = {};
          render();
        }
      });
    }

    // Print
    const printBtn = container.querySelector('#btn-print-view');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // PDF Export with jsPDF
    const pdfBtn = container.querySelector('#btn-export-pdf');
    if (pdfBtn) {
      pdfBtn.addEventListener('click', exportToPDF);
    }
  }

  function exportToPDF() {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const sujet = SUJETS[activeSubjectKey];
    const nom = document.getElementById('student-nom')?.value || 'Élève';
    const prenom = document.getElementById('student-prenom')?.value || '';
    const dateStr = new Date().toLocaleDateString('fr-FR');

    let y = 15;
    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - (margin * 2);

    function checkPage(needHeight = 20) {
      if (y + needHeight > 280) {
        doc.addPage();
        y = 15;
      }
    }

    // En-tête
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(30, 58, 138);
    doc.text('DemoRevis — Analyse Critique de Documents (HGGSP 1ère)', margin, y);
    y += 8;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.text(`Élève : ${nom} ${prenom} | Date : ${dateStr} | ${sujet.badge}`, margin, y);
    y += 6;

    doc.setDrawColor(200, 200, 200);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    // Sujet & Consigne
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    const splitTitle = doc.splitTextToSize(`Sujet : ${sujet.title}`, contentWidth);
    doc.text(splitTitle, margin, y);
    y += (splitTitle.length * 5) + 3;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    const splitConsigne = doc.splitTextToSize(`Consigne : ${sujet.question}`, contentWidth);
    doc.text(splitConsigne, margin, y);
    y += (splitConsigne.length * 4) + 6;

    // Sections de réponses de l'élève
    sujet.sections.forEach(section => {
      checkPage(25);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(30, 58, 138);
      doc.text(section.title, margin, y);
      y += 6;

      section.fields.forEach(field => {
        const value = document.getElementById(field.id)?.value?.trim() || '(Non rédigé)';
        checkPage(18);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(40, 40, 40);
        doc.text(field.label, margin, y);
        y += 5;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 23, 42);
        const splitVal = doc.splitTextToSize(value, contentWidth);
        checkPage(splitVal.length * 4.5);
        doc.text(splitVal, margin, y);
        y += (splitVal.length * 4.5) + 5;
      });

      y += 3;
    });

    const fileName = `Analyse_Critique_${activeSubjectKey}_${nom.replace(/\s+/g, '_')}.pdf`;
    doc.save(fileName);
  }

  render();
}
