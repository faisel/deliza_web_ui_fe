import type { Messages } from "./types";

const fr: Messages = {
  common: {
    language: "Langue",
    languages: {
      de: "Deutsch",
      en: "English",
      fr: "Français",
      it: "Italiano",
    },
    buttons: {
      getQuote: "Demander un devis",
      getConsultant: "Obtenir un conseil",
      readMore: "En savoir plus",
      contactUs: "Nous contacter",
      letsWorkTogether: "Travaillons ensemble",
      submitMessage: "Envoyer le message",
      subscribe: "S'abonner",
      learnMore: "En savoir plus",
    },
    by: "par",
  },
  metadata: {
    home: {
      title: "Deliza – Votre partenaire en conseil aux entreprises",
      description:
        "Deliza accompagne les entreprises avec un conseil sur mesure, des stratégies claires et une croissance durable.",
    },
  },
  header: {
    topbar: {
      email: "support@deliza.com",
      workingHours: "Horaires : 8h00 – 17h00",
    },
    topNav: {
      companyNews: "Actualités",
      faq: "FAQ",
      contact: "Contact",
    },
    nav: {
      home: "Accueil",
      brands: "Marques",
      products: "Services",
      investment: "Conseil",
      about: "À propos",
      news: "Actualités",
      contact: "Contact",
    },
    languageSwitcher: {
      label: "Choisir la langue",
    },
  },
  home: {
    banner: {
      eyebrow: {
        prefix: "Bienvenue !",
        text: "Lancez la croissance de votre entreprise dès aujourd'hui",
      },
      slides: [
        {
          title: ["Des solutions innovantes", "pensées pour votre réussite"],
          description:
            "Forts d'une expertise éprouvée et d'une vision claire, nous concevons des stratégies qui font progresser votre entreprise sur le long terme.",
        },
        {
          title: ["Des concepts à fort impact", "pour atteindre vos objectifs"],
          description:
            "Nous allions réflexion stratégique et mise en œuvre concrète pour transformer vos idées en résultats mesurables.",
        },
        {
          title: ["Les meilleures solutions", "pour la réussite de votre entreprise"],
          description:
            "De l'analyse à la mise en œuvre, nous vous accompagnons à chaque étape de votre développement.",
        },
      ],
    },
    about: {
      chip: "À propos",
      pre: "En savoir plus sur nous",
      title: ["Vous donner les moyens", "de réussir au quotidien"],
      description:
        "Depuis plus de 25 ans, nous aidons les entreprises de la région DACH à libérer pleinement leur potentiel. Confiance, transparence et succès durable sont au cœur de notre approche.",
      checks: [
        "Assistance téléphonique 24h/24 et 7j/7",
        "Des consultants hautement qualifiés",
        "Une équipe de véritables experts",
      ],
      yearsExperience: "Années d'expérience",
      callUsAnytime: "Joignables à tout moment",
      phone: "+49 56 778 5678",
    },
    services: {
      chip: "Services",
      pre: "Nos services",
      title: "Des prestations de haute qualité",
      items: [
        {
          title: "Planification d'entreprise",
          description:
            "Nous bâtissons des plans solides qui transforment votre vision en une stratégie claire et concrète.",
        },
        {
          title: "Développement de processus",
          description:
            "Des processus efficaces sont la base d'un succès durable – nous les concevons avec vous.",
        },
        {
          title: "Stratégie & planification",
          description:
            "Grâce à des analyses approfondies et des objectifs clairs, nous posons les bases d'une réussite à long terme.",
        },
        {
          title: "Objectifs commerciaux",
          description:
            "Nous vous aidons à définir des objectifs précis et à les atteindre étape par étape.",
        },
        {
          title: "Stratégie de croissance",
          description:
            "Nous accompagnons votre entreprise vers une croissance évolutive et durable.",
        },
      ],
    },
    cta: {
      title: ["Discutons ensemble de la manière", "de faire grandir votre entreprise"],
    },
    businessGoal: {
      chip: "Objectif business",
      pre: "Un véritable conseil",
      title: ["Nous savons gérer", "des entreprises à l'échelle mondiale"],
    },
    counter: {
      items: [
        { count: 199, label: "Projets réussis" },
        { count: 300, label: "Activités médias" },
        { count: 699, label: "Experts qualifiés" },
        { count: 120, label: "Clients satisfaits" },
      ],
    },
    projects: {
      chip: "Projets",
      pre: "Projets phares",
      title: "Une sélection de nos projets réalisés",
      items: [
        { title: "Croissance d'entreprise", category: "Stratégie d'entreprise" },
        { title: "Solution start-up", category: "Stratégie d'entreprise" },
        { title: "Croissance marketing", category: "Stratégie d'entreprise" },
      ],
    },
    brands: {
      title: "Nos clients de confiance",
    },
    team: {
      chip: "Équipe",
      pre: "Nos experts",
      title: "Une équipe de professionnels",
      members: [
        { name: "Archer Graham", role: "Fondateur" },
        { name: "Amelia Clover", role: "Cofondatrice" },
        { name: "Beckett Hayden", role: "Directeur adjoint" },
        { name: "Julian Wyat", role: "Directeur financier" },
        { name: "Julian Wyat", role: "Directeur financier" },
      ],
    },
    testimonials: {
      chip: "Avis",
      pre: "Ils nous ont fait confiance",
      title: "Témoignages de nos clients",
      items: [
        {
          text: "Travailler avec Deliza a marqué un véritable tournant pour nous : des recommandations claires, un engagement réel et des résultats qui nous ont fait avancer.",
          name: "William Henry",
          designation: "Designer chez Vertex Agency",
        },
        {
          text: "Professionnels, fiables et toujours à l'écoute – Deliza rend les sujets complexes accessibles et nous aide à construire des solutions concrètes.",
          name: "Sophie Brunner",
          designation: "Directrice générale, Aurora Studio",
        },
        {
          text: "Une équipe remarquable, dotée d'une vraie connaissance du secteur. Nous avons été parfaitement accompagnés du début à la fin et recommandons Deliza sans réserve.",
          name: "Markus Keller",
          designation: "Dirigeant, Keller & Partner",
        },
      ],
    },
    appointment: {
      chip: "Bonjour",
      pre: "Prendre rendez-vous",
      title: "Demander un devis gratuit",
      fields: {
        name: "Votre nom",
        phone: "Numéro de téléphone",
        email: "Votre adresse e-mail",
        message: "Votre message",
      },
    },
    blog: {
      chip: "Blog",
      pre: "Blog & actualités",
      title: "Articles récents",
      posts: [
        {
          category: "Solutions d'entreprise",
          author: "David Dolean",
          title: "Construire une marque qui se distingue parmi les leaders",
        },
        {
          category: "Solutions d'entreprise",
          author: "David Dolean",
          title: "Transformer votre approche du business",
        },
        {
          category: "Solutions d'entreprise",
          author: "David Dolean",
          title: "Les bons réflexes pour aborder une nouvelle ère économique",
        },
        {
          category: "Solutions d'entreprise",
          author: "David Dolean",
          title: "Construire une marque qui se distingue parmi les leaders",
        },
        {
          category: "Solutions d'entreprise",
          author: "David Dolean",
          title: "Transformer votre approche du business",
        },
        {
          category: "Solutions d'entreprise",
          author: "David Dolean",
          title: "Les bons réflexes pour aborder une nouvelle ère économique",
        },
      ],
    },
  },
  footer: {
    contact: {
      title: "Contact",
      callUs: "Joignables 24h/24 et 7j/7",
      phone: "+49 21 452 156",
      workWithUs: "Travailler avec nous",
      email: "info@deliza.com",
      ourLocation: "Notre adresse",
      location: "125 Town, Suisse",
    },
    hours: {
      title: "Horaires d'ouverture",
      weekdays: "En semaine",
      weekdaysTime: "09:00 – 18:00",
      saturday: "Samedi",
      saturdayTime: "09:00 – 13:00",
      sunday: "Dimanche",
      dayOff: "Fermé",
    },
    quickLinks: {
      title: "Liens rapides",
      items: [
        "Forum & support",
        "Aide & FAQ",
        "Contact",
        "Tarifs & offres",
        "Politique de cookies",
        "À propos",
        "Mon compte",
        "Notre entreprise",
        "Services",
      ],
    },
    updates: {
      title: "Restez informé",
      description:
        "Inscrivez-vous pour recevoir nos actualités et nos articles. Pas de spam, promis.",
      placeholder: "Saisissez votre adresse e-mail",
      noteLabel: "Note :",
      note: "Nous ne diffusons pas votre adresse e-mail.",
    },
    copyright: "Deliza – Tous droits réservés.",
  },
};

export default fr;
