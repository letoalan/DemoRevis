/**
 * Sujet A : Union Européenne et Démocratie
 * Épreuve officielle HGGSP Première
 */
export const sujetA = {
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
          question: "Comment identifier précisément la nature, les auteurs, la date et le contexte de chaque document ?",
          keywords: "Moravcsik, Vadot, science politique, dessin de presse, Commission européenne, 2003, 2017.",
          hint: "Précisez pour le doc 1 : article scientifique de 2003 par Andrew Moravcsik ; pour le doc 2 : dessin satirique de Nicolas Vadot publié en 2017."
        },
        {
          id: 'intro_contexte',
          label: '2. Contexte historique et institutionnel',
          question: "Dans quel contexte européen s'inscrivent ces documents (traité de Maastricht, élargissement, citoyenneté européenne) ?",
          keywords: "Traité de Maastricht (1992), déficit démocratique, montée de l'abstention, traité de Lisbonne (2007).",
          hint: "Rappelez le processus d'intégration européenne post-Maastricht, la contestation du rôle technocratique de Bruxelles et la hausse constante de l'abstention aux élections européennes."
        },
        {
          id: 'intro_pb',
          label: '3. Problématique',
          question: "Comment formuler une question centrale confrontant les critiques du fonctionnement européen et les réalités démocratiques ?",
          keywords: "Déficit démocratique, souveraineté, paradoxe citoyen, légitimité, technocratie.",
          hint: "Exemple : Dans quelle mesure le fonctionnement institutionnel de l'UE justifie-t-il les accusations de déficit démocratique, tout en révélant les contradictions de citoyens critiques mais abstentionnistes ?"
        }
      ]
    },
    {
      id: 'dev1',
      title: 'Axe 1 — Les critiques et le sentiment de déficit démocratique',
      desc: 'Analysez les arguments dénonçant le manque de démocratie.',
      fields: [
        {
          id: 'dev1_institutions',
          label: '1. Le sentiment technocratique et l\'éloignement des institutions',
          question: "Quelles institutions sont perçues comme opaques ou non élues par les citoyens selon les documents ?",
          keywords: "Commission européenne, Conseil des ministres, secret des délibérations, juges nommés, technocratie.",
          hint: "Citez le texte : la Commission perçue comme lointaine, le Conseil qui délibère souvent en secret, et seul le Parlement est élu au suffrage direct avec des pouvoirs longtemps limités."
        },
        {
          id: 'dev1_citoyens',
          label: '2. Le paradoxe de l\'abstention citoyenne (Doc. 2)',
          question: "Quelle contradiction majeure le dessinateur Vadot met-il en évidence chez les citoyens ?",
          keywords: "Abstentionnisme, paradoxe, contradiction, ironie, désengagement civique, rejet sans participation.",
          hint: "Décrivez la caricature : l'homme brandit une pancarte hostile à l'Europe non démocratique, tout en avouant n'avoir jamais voté. L'abstention fragilise la légitimité du Parlement."
        }
      ]
    },
    {
      id: 'dev2',
      title: 'Axe 2 — Une démocratie moderne sous d\'autres formes ?',
      desc: 'Nuancez avec la thèse de Moravcsik et les mécanismes réels de contrôle.',
      fields: [
        {
          id: 'dev2_moravcsik',
          label: '1. La thèse de Moravcsik : la délégation des pouvoirs',
          question: "Comment Andrew Moravcsik défend-il la légitimité de l'Union face aux critiques ?",
          keywords: "Délégation, agences de régulation, banques centrales, séparation des pouvoirs, démocratie indirecte.",
          hint: "Montrez que les États modernes délèguent tous à des instances indépendantes. Les décisions européennes sont contrôlées indirectement par les gouvernements nationaux démocratiquement élus."
        },
        {
          id: 'dev2_parlement',
          label: '2. Les garanties démocratiques et le rôle croissant du Parlement',
          question: "Quelles garanties institutionnelles assurent l'équilibre et la transparence dans l'UE ?",
          keywords: "Parlement européen, co-décision, Cour de justice de l'UE, contrôle des traités, équilibre institutionnel.",
          hint: "Soulignez la montée en puissance du Parlement (co-décision), l'état de droit garanti par la CJUE et le contrôle démocratique indirect via les États membres."
        }
      ]
    },
    {
      id: 'concl',
      title: 'Conclusion & Regard critique',
      desc: 'Bilan de l\'analyse et mise en perspective.',
      fields: [
        {
          id: 'concl_bilan',
          label: '1. Bilan de la confrontation des documents',
          question: "Quelle réponse synthétique apportez-vous à la consigne de départ ?",
          keywords: "Synthèse, débat légitime, nuance, modèle sui generis, double légitimité (peuples et États).",
          hint: "Résumez : l'UE souffre d'un déficit d'incarnation et d'intérêt citoyen plus que d'un défaut structurel d'institutions républicaines."
        },
        {
          id: 'concl_limites',
          label: '2. Limites des documents et ouverture',
          question: "Quelles limites méthodologiques présentent ces deux sources et quelle ouverture proposer ?",
          keywords: "Publication officielle européenne (Vadot commandité par l'UE), date de Moravcsik (2003 avant Lisbonne), Brexit, Conférence sur l'avenir de l'Europe.",
          hint: "Mentionnez que Vadot est publié par la Commission elle-même (auto-défense institutionnelle) et que Moravcsik écrit avant le Traité de Lisbonne. Ouvrez sur le Brexit ou le vote des jeunes."
        }
      ]
    }
  ]
};
