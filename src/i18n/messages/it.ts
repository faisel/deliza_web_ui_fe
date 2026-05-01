import type { Messages } from "./types";

const it: Messages = {
  common: {
    language: "Lingua",
    languages: {
      de: "Deutsch",
      en: "English",
      fr: "Français",
      it: "Italiano",
    },
    buttons: {
      getQuote: "Richiedi un preventivo",
      getConsultant: "Richiedi una consulenza",
      readMore: "Scopri di più",
      contactUs: "Contattaci",
      letsWorkTogether: "Lavoriamo insieme",
      submitMessage: "Invia il messaggio",
      subscribe: "Iscriviti",
      learnMore: "Scopri di più",
    },
    by: "di",
  },
  metadata: {
    home: {
      title: "Deliza – Il tuo partner per la consulenza aziendale",
      description:
        "Deliza affianca le aziende con consulenza su misura, strategie chiare e una crescita sostenibile.",
    },
  },
  header: {
    topbar: {
      email: "support@deliza.com",
      workingHours: "Orari: 8:00 – 17:00",
    },
    topNav: {
      companyNews: "News aziendali",
      faq: "FAQ",
      contact: "Contatti",
    },
    nav: {
      home: "Home",
      pages: "Pagine",
      service: "Servizi",
      project: "Progetti",
      blog: "Blog",
      contact: "Contatti",
    },
    languageSwitcher: {
      label: "Scegli la lingua",
    },
  },
  home: {
    banner: {
      eyebrow: {
        prefix: "Benvenuto!",
        text: "Inizia oggi a far crescere la tua attività",
      },
      slides: [
        {
          title: ["Soluzioni innovative", "su misura per il tuo successo"],
          description:
            "Con esperienza consolidata e una visione chiara, sviluppiamo strategie che fanno crescere la tua azienda nel lungo periodo.",
        },
        {
          title: ["Idee ad alto impatto", "pensate per i tuoi obiettivi"],
          description:
            "Uniamo pensiero strategico e attuazione concreta, trasformando le idee in risultati misurabili.",
        },
        {
          title: ["Le migliori soluzioni", "per il successo della tua azienda"],
          description:
            "Dall'analisi all'implementazione, ti accompagniamo in ogni fase del tuo percorso di crescita.",
        },
      ],
    },
    about: {
      chip: "Chi siamo",
      pre: "Conosci di più Deliza",
      title: ["Ti diamo gli strumenti", "per dare il meglio ogni giorno"],
      description:
        "Da oltre 25 anni aiutiamo le aziende dell'area DACH a esprimere appieno il loro potenziale. Fiducia, trasparenza e successo duraturo sono al centro di tutto ciò che facciamo.",
      checks: [
        "Assistenza telefonica 24/7",
        "Consulenti altamente qualificati",
        "Un team di veri esperti del settore",
      ],
      yearsExperience: "Anni di esperienza",
      callUsAnytime: "Sempre raggiungibili",
      phone: "+49 56 778 5678",
    },
    services: {
      chip: "Servizi",
      pre: "I nostri servizi",
      title: "Servizi di alta qualità",
      items: [
        {
          title: "Pianificazione aziendale",
          description:
            "Sviluppiamo piani solidi che traducono la tua visione in una strategia chiara e attuabile.",
        },
        {
          title: "Sviluppo dei processi",
          description:
            "Processi efficienti sono la base per un successo duraturo: li disegniamo insieme a te.",
        },
        {
          title: "Strategia & pianificazione",
          description:
            "Con analisi approfondite e obiettivi chiari, costruiamo la base per un successo a lungo termine.",
        },
        {
          title: "Obiettivi di business",
          description:
            "Ti aiutiamo a definire obiettivi precisi e a raggiungerli passo dopo passo.",
        },
        {
          title: "Strategia di crescita",
          description:
            "Affianchiamo la tua azienda nel percorso verso una crescita scalabile e sostenibile.",
        },
      ],
    },
    cta: {
      title: ["Parliamo insieme di come possiamo", "far crescere la tua azienda"],
    },
    businessGoal: {
      chip: "Obiettivo aziendale",
      pre: "Vera consulenza",
      title: ["Sappiamo come gestire", "il business a livello globale"],
    },
    counter: {
      items: [
        { count: 199, label: "Progetti realizzati" },
        { count: 300, label: "Attività media" },
        { count: 699, label: "Esperti qualificati" },
        { count: 120, label: "Clienti soddisfatti" },
      ],
    },
    projects: {
      chip: "Progetti",
      pre: "Progetti in evidenza",
      title: "Una selezione dei nostri progetti realizzati",
      items: [
        { title: "Crescita aziendale", category: "Strategia aziendale" },
        { title: "Soluzione startup", category: "Strategia aziendale" },
        { title: "Crescita marketing", category: "Strategia aziendale" },
      ],
    },
    brands: {
      title: "I nostri clienti di fiducia",
    },
    team: {
      chip: "Team",
      pre: "Il nostro team di esperti",
      title: "Un team di professionisti",
      members: [
        { name: "Archer Graham", role: "Fondatore" },
        { name: "Amelia Clover", role: "Cofondatrice" },
        { name: "Beckett Hayden", role: "Vice Direttore" },
        { name: "Julian Wyat", role: "Direttore finanziario" },
        { name: "Julian Wyat", role: "Direttore finanziario" },
      ],
    },
    testimonials: {
      chip: "Recensioni",
      pre: "Cosa dicono i nostri clienti",
      title: "Testimonianze dei clienti",
      items: [
        {
          text: "Lavorare con Deliza è stato per noi un vero punto di svolta: indicazioni chiare, impegno autentico e risultati che ci hanno davvero fatto progredire.",
          name: "William Henry",
          designation: "Designer presso Vertex Agency",
        },
        {
          text: "Professionalità, affidabilità e un confronto sempre alla pari: Deliza rende semplici i temi complessi e costruisce con noi soluzioni concrete.",
          name: "Sophie Brunner",
          designation: "Direttrice generale, Aurora Studio",
        },
        {
          text: "Un team eccellente, con una conoscenza profonda del settore. Siamo stati seguiti in modo impeccabile dall'inizio alla fine: consigliamo Deliza senza riserve.",
          name: "Markus Keller",
          designation: "Titolare, Keller & Partner",
        },
      ],
    },
    appointment: {
      chip: "Ciao",
      pre: "Fissa un appuntamento",
      title: "Richiedi un preventivo gratuito",
      fields: {
        name: "Il tuo nome",
        phone: "Numero di telefono",
        email: "La tua e-mail",
        message: "Il tuo messaggio",
      },
    },
    blog: {
      chip: "Blog",
      pre: "Blog & news",
      title: "Articoli recenti",
      posts: [
        {
          category: "Soluzioni aziendali",
          author: "David Dolean",
          title: "Costruire un brand all'altezza dei leader di mercato",
        },
        {
          category: "Soluzioni aziendali",
          author: "David Dolean",
          title: "Trasformare il tuo modo di affrontare il business",
        },
        {
          category: "Soluzioni aziendali",
          author: "David Dolean",
          title: "Consigli concreti per affrontare una nuova era del business",
        },
        {
          category: "Soluzioni aziendali",
          author: "David Dolean",
          title: "Costruire un brand all'altezza dei leader di mercato",
        },
        {
          category: "Soluzioni aziendali",
          author: "David Dolean",
          title: "Trasformare il tuo modo di affrontare il business",
        },
        {
          category: "Soluzioni aziendali",
          author: "David Dolean",
          title: "Consigli concreti per affrontare una nuova era del business",
        },
      ],
    },
  },
  footer: {
    contact: {
      title: "Contatti",
      callUs: "Sempre disponibili 24/7",
      phone: "+49 21 452 156",
      workWithUs: "Lavora con noi",
      email: "info@deliza.com",
      ourLocation: "La nostra sede",
      location: "125 Town, Svizzera",
    },
    hours: {
      title: "Orari di apertura",
      weekdays: "Giorni feriali",
      weekdaysTime: "09:00 – 18:00",
      saturday: "Sabato",
      saturdayTime: "09:00 – 13:00",
      sunday: "Domenica",
      dayOff: "Chiuso",
    },
    quickLinks: {
      title: "Link utili",
      items: [
        "Forum & supporto",
        "Aiuto & FAQ",
        "Contatti",
        "Prezzi & piani",
        "Politica sui cookie",
        "Chi siamo",
        "Il mio account",
        "La nostra azienda",
        "Servizi",
      ],
    },
    updates: {
      title: "Resta aggiornato",
      description:
        "Iscriviti per ricevere le nostre novità e i nostri articoli. Niente spam, promesso.",
      placeholder: "Inserisci la tua e-mail",
      noteLabel: "Nota:",
      note: "Non diffondiamo il tuo indirizzo e-mail.",
    },
    copyright: "Deliza – Tutti i diritti riservati.",
  },
};

export default it;
