import type { Locale } from "@/i18n/config";

export type ServiceId = "chutnee" | "giessenpark" | "7310";

export interface ServiceInfoCard {
  label: string;
  value: string;
}

export interface ServiceStat {
  count: number;
  label: string;
}

export interface ServiceFaqEntry {
  q: string;
  a: string;
}

export interface ServiceContent {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroBgTitle: string;
  introHeadline: string;
  intro: string;
  infoCards: ServiceInfoCard[];
  paragraphs: [string, string];
  quote: string;
  paragraphsAfter: [string, string];
  stats: [ServiceStat, ServiceStat, ServiceStat, ServiceStat];
  faqTitle: string;
  faq: ServiceFaqEntry[];
}

/** Per-locale URL slug for each service detail route. Used for canonical/hreflang. */
export const SERVICE_SLUGS: Record<ServiceId, Record<Locale, string>> = {
  chutnee: {
    de: "leistungen/chutnee-im-schloss",
    en: "services/chutnee-im-schloss",
    fr: "services/chutnee-im-schloss",
    it: "servizi/chutnee-im-schloss",
  },
  giessenpark: {
    de: "leistungen/giessenpark-catering",
    en: "services/giessenpark-catering",
    fr: "services/giessenpark-catering",
    it: "servizi/giessenpark-catering",
  },
  "7310": {
    de: "leistungen/7310-produkte",
    en: "services/7310-products",
    fr: "services/7310-produits",
    it: "servizi/7310-prodotti",
  },
};

export interface ServiceImageSet {
  /** Three images shown in the gallery row at the top of the page body. */
  gallery: [
    { src: string; alt: string; width: number; height: number },
    { src: string; alt: string; width: number; height: number },
    { src: string; alt: string; width: number; height: number }
  ];
  /** Thumbnail used in the produkte-leistungen card grid. */
  card: { src: string; alt: string; width: number; height: number };
  /** Hero banner image for the service detail page. */
  banner: string;
  /** Image displayed inside each FAQ accordion body. */
  faq: { src: string; alt: string; width: number; height: number };
}

export const SERVICE_IMAGES: Record<ServiceId, ServiceImageSet> = {
  chutnee: {
    gallery: [
      {
        src: "/assets/images/deliza/news/Chutnee_restaurant_12.jpg",
        alt: "Chutnee im Schloss – Schlossambiente",
        width: 1910,
        height: 1300,
      },
      {
        src: "/assets/images/deliza/news/Chutnee_restaurant_13.jpg",
        alt: "Chutnee im Schloss – Speisen",
        width: 910,
        height: 640,
      },
      {
        src: "/assets/images/deliza/news/Chutnee_restaurant_14.jpg",
        alt: "Chutnee im Schloss – Service",
        width: 910,
        height: 640,
      },
    ],
    card: {
      src: "/assets/images/deliza/news/Chutnee_restaurant_12.jpg",
      alt: "Chutnee im Schloss",
      width: 1910,
      height: 1300,
    },
    banner: "/assets/images/deliza/banner/11.jpg",
    faq: {
      src: "/assets/images/faq/02.webp",
      alt: "Chutnee im Schloss – Eindrücke",
      width: 1373,
      height: 861,
    },
  },
  giessenpark: {
    gallery: [
      {
        src: "/assets/images/deliza/news/Chutnee_restaurant_9.jpg",
        alt: "Giessenpark Catering – Eventimpression",
        width: 1910,
        height: 1300,
      },
      {
        src: "/assets/images/deliza/news/Chutnee_restaurant_11.jpg",
        alt: "Giessenpark Catering – Hospitality",
        width: 910,
        height: 640,
      },
      {
        src: "/assets/images/deliza/news/Chutnee_restaurant_10.jpg",
        alt: "Giessenpark Catering – Speisen",
        width: 910,
        height: 640,
      },
    ],
    card: {
      src: "/assets/images/deliza/news/Chutnee_restaurant_15.jpg",
      alt: "Giessenpark Catering",
      width: 1910,
      height: 1300,
    },
    banner: "/assets/images/deliza/banner/12.jpg",
    faq: {
      src: "/assets/images/faq/02.webp",
      alt: "Giessenpark Catering – Eindrücke",
      width: 1373,
      height: 861,
    },
  },
  "7310": {
    gallery: [
      {
        src: "/assets/images/deliza/news/badragaz_13_v.jpg",
        alt: "7310 – Bad Ragaz",
        width: 1910,
        height: 1300,
      },
      {
        src: "/assets/images/deliza/news/badragaz_5.jpg",
        alt: "7310 – Produkte",
        width: 910,
        height: 640,
      },
      {
        src: "/assets/images/deliza/news/badragaz_8.jpg",
        alt: "7310 – Lifestyle",
        width: 910,
        height: 640,
      },
    ],
    card: {
      src: "/assets/images/deliza/news/badragaz_13_v.jpg",
      alt: "7310",
      width: 1910,
      height: 1300,
    },
    banner: "/assets/images/deliza/banner/2.jpg",
    faq: {
      src: "/assets/images/faq/02.webp",
      alt: "7310 – Eindrücke",
      width: 1373,
      height: 861,
    },
  },
};

const SERVICE_CONTENT: Record<ServiceId, Record<Locale, ServiceContent>> = {
  chutnee: {
    de: {
      metaTitle: "Chutnee im Schloss | Restaurant & Catering in Bad Ragaz | Deliza",
      metaDescription:
        "Chutnee im Schloss in Bad Ragaz: indische Küche, herzliche Gastfreundschaft und massgeschneidertes Catering für private und geschäftliche Anlässe.",
      heroTitle: "Chutnee im Schloss",
      heroBgTitle: "Chutnee",
      introHeadline: "Indische Kochkunst, getragen von echter Gastfreundschaft",
      intro:
        "Chutnee im Schloss verbindet indische Kochkunst, herzliche Gastfreundschaft und ein besonderes Ambiente im historischen Umfeld von Bad Ragaz. Das Restaurant steht für aromatische Küche, sorgfältig ausgewählte Zutaten und ein Erlebnis, das Gäste nicht nur satt, sondern glücklich macht.",
      infoCards: [
        { label: "Marke", value: "Chutnee im Schloss" },
        { label: "Ort", value: "Bad Ragaz, Schweiz" },
        { label: "Kategorie", value: "Restaurant & Catering" },
        { label: "Fokus", value: "Indische Küche" },
        { label: "Erlebnis", value: "Fine Dining & Events" },
        { label: "Anfrage", value: "Catering möglich" },
      ],
      paragraphs: [
        "Chutnee im Schloss ist mehr als ein Restaurant. Es ist ein Ort, an dem Geschmack, Atmosphäre und persönliche Betreuung zusammenkommen. Die Küche verbindet traditionelle indische Aromen mit einem modernen Verständnis für Qualität, Präsentation und Gastfreundschaft.",
        "Ob ein entspanntes Abendessen, ein besonderes Familienfest, ein Firmenessen oder ein exklusives Catering ausserhalb des Restaurants, das Team legt grossen Wert auf jedes Detail. Von der Auswahl der Gewürze bis zur Präsentation der Speisen entsteht ein kulinarisches Erlebnis, das authentisch, elegant und erinnerungswürdig ist.",
      ],
      quote:
        "„Wo Gastronomie mit Herz geführt wird, entsteht ein Erlebnis, das weit über den Teller hinausgeht.“",
      paragraphsAfter: [
        "Für private und geschäftliche Anlässe bietet Chutnee im Schloss individuelle Catering Lösungen, die sich an Anlass, Gästezahl und Atmosphäre orientieren. Dabei stehen Qualität, Zuverlässigkeit und eine persönliche Beratung im Mittelpunkt.",
        "Als Teil von Deliza GmbH profitiert Chutnee im Schloss von einem starken Netzwerk in Gastronomie, Eventplanung und Hospitality. Dadurch können kulinarische Konzepte flexibel entwickelt und professionell umgesetzt werden, von kleinen Feiern bis zu hochwertigen Veranstaltungen.",
      ],
      stats: [
        { count: 250, label: "Besondere Anlässe begleitet" },
        { count: 12000, label: "Gäste begeistert" },
        { count: 80, label: "Catering Konzepte umgesetzt" },
        { count: 15, label: "Jahre Gastronomie Erfahrung" },
      ],
      faqTitle: "Häufige Fragen",
      faq: [
        {
          q: "Was macht Chutnee im Schloss besonders?",
          a: "Chutnee im Schloss verbindet authentische indische Küche mit einem eleganten Ambiente und persönlicher Gastfreundschaft. Das Ziel ist nicht nur gutes Essen, sondern ein vollständiges Erlebnis für die Gäste.",
        },
        {
          q: "Bietet Chutnee im Schloss Catering an?",
          a: "Ja, Chutnee im Schloss bietet Catering für private Feiern, Firmenanlässe und besondere Veranstaltungen an. Die Speisen und der Ablauf können individuell auf den Anlass abgestimmt werden.",
        },
        {
          q: "Kann man individuelle Menüs besprechen?",
          a: "Ja, individuelle Menüideen, vegetarische Optionen und passende kulinarische Konzepte können im Rahmen einer Anfrage persönlich besprochen werden.",
        },
        {
          q: "Für welche Anlässe eignet sich Chutnee im Schloss?",
          a: "Das Angebot eignet sich für Abendessen, Familienfeiern, Firmenessen, Geburtstage, kleine Events und exklusive Catering Anfragen.",
        },
      ],
    },
    en: {
      metaTitle: "Chutnee im Schloss | Restaurant & Catering in Bad Ragaz | Deliza",
      metaDescription:
        "Chutnee im Schloss in Bad Ragaz blends Indian cuisine, warm hospitality and tailored catering for private celebrations and business events.",
      heroTitle: "Chutnee im Schloss",
      heroBgTitle: "Chutnee",
      introHeadline: "Indian culinary craft carried by genuine hospitality",
      intro:
        "Chutnee im Schloss brings together Indian culinary craft, warm hospitality and a special atmosphere set in the historic surroundings of Bad Ragaz. The restaurant stands for aromatic cooking, carefully sourced ingredients and an experience that leaves guests not only satisfied, but truly happy.",
      infoCards: [
        { label: "Brand", value: "Chutnee im Schloss" },
        { label: "Location", value: "Bad Ragaz, Switzerland" },
        { label: "Category", value: "Restaurant & Catering" },
        { label: "Focus", value: "Indian cuisine" },
        { label: "Experience", value: "Fine dining & events" },
        { label: "Inquiry", value: "Catering on request" },
      ],
      paragraphs: [
        "Chutnee im Schloss is more than a restaurant. It is a place where flavour, atmosphere and personal care come together. The kitchen pairs traditional Indian aromas with a modern understanding of quality, presentation and hospitality.",
        "Whether it is a relaxed evening dinner, a memorable family celebration, a corporate gathering or an exclusive catering experience away from the restaurant, the team puts great care into every detail. From the selection of spices to the way each dish is presented, the result is a culinary experience that is authentic, elegant and worth remembering.",
      ],
      quote:
        "“Where hospitality is led by the heart, an experience emerges that reaches far beyond the plate.”",
      paragraphsAfter: [
        "For private gatherings and business occasions, Chutnee im Schloss offers tailored catering solutions that respond to the event, guest count and desired atmosphere. Quality, reliability and personal consultation remain at the heart of every proposal.",
        "As part of Deliza GmbH, Chutnee im Schloss draws on a strong network in gastronomy, event planning and hospitality. Culinary concepts can be developed flexibly and delivered professionally — from intimate celebrations to high-end events.",
      ],
      stats: [
        { count: 250, label: "Special occasions hosted" },
        { count: 12000, label: "Guests delighted" },
        { count: 80, label: "Catering concepts delivered" },
        { count: 15, label: "Years of gastronomy experience" },
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        {
          q: "What makes Chutnee im Schloss special?",
          a: "Chutnee im Schloss combines authentic Indian cuisine with an elegant atmosphere and personal hospitality. The aim is not just great food, but a complete experience for every guest.",
        },
        {
          q: "Does Chutnee im Schloss offer catering?",
          a: "Yes, Chutnee im Schloss provides catering for private celebrations, corporate events and special occasions. The dishes and the flow of the event can be tailored to fit perfectly.",
        },
        {
          q: "Can I discuss a customised menu?",
          a: "Yes, individual menu ideas, vegetarian options and bespoke culinary concepts can be discussed personally as part of an enquiry.",
        },
        {
          q: "Which occasions does Chutnee im Schloss suit?",
          a: "The offering is ideal for dinners, family celebrations, corporate meals, birthdays, smaller events and exclusive catering enquiries.",
        },
      ],
    },
    fr: {
      metaTitle: "Chutnee im Schloss | Restaurant & Traiteur à Bad Ragaz | Deliza",
      metaDescription:
        "Chutnee im Schloss à Bad Ragaz allie cuisine indienne, accueil chaleureux et service traiteur sur mesure pour vos occasions privées ou professionnelles.",
      heroTitle: "Chutnee im Schloss",
      heroBgTitle: "Chutnee",
      introHeadline: "L'art culinaire indien, porté par une hospitalité authentique",
      intro:
        "Chutnee im Schloss conjugue art culinaire indien, hospitalité chaleureuse et atmosphère singulière dans le cadre historique de Bad Ragaz. Le restaurant s'engage pour une cuisine aromatique, des produits sélectionnés avec soin et une expérience qui rassasie les sens autant que les convives.",
      infoCards: [
        { label: "Marque", value: "Chutnee im Schloss" },
        { label: "Lieu", value: "Bad Ragaz, Suisse" },
        { label: "Catégorie", value: "Restaurant & Traiteur" },
        { label: "Spécialité", value: "Cuisine indienne" },
        { label: "Expérience", value: "Fine dining & événements" },
        { label: "Demande", value: "Traiteur sur demande" },
      ],
      paragraphs: [
        "Chutnee im Schloss est bien plus qu'un restaurant. C'est un lieu où le goût, l'atmosphère et le service personnalisé se rejoignent. La cuisine marie les arômes traditionnels de l'Inde à une approche contemporaine de la qualité, de la présentation et de l'accueil.",
        "Qu'il s'agisse d'un dîner en toute simplicité, d'une fête de famille mémorable, d'un déjeuner d'affaires ou d'un service traiteur exclusif hors les murs, l'équipe accorde la plus grande attention à chaque détail. Du choix des épices à la mise en assiette, l'expérience culinaire se veut authentique, élégante et inoubliable.",
      ],
      quote:
        "« Lorsque la gastronomie est portée avec cœur, l'expérience dépasse largement l'assiette. »",
      paragraphsAfter: [
        "Pour les occasions privées comme professionnelles, Chutnee im Schloss propose des solutions traiteur sur mesure, adaptées à l'événement, au nombre d'invités et à l'atmosphère souhaitée. Qualité, fiabilité et conseil personnalisé sont au cœur de chaque proposition.",
        "Membre du groupe Deliza GmbH, Chutnee im Schloss bénéficie d'un solide réseau dans la gastronomie, l'événementiel et l'hôtellerie. Les concepts culinaires y sont développés avec souplesse et exécutés avec professionnalisme, des petites célébrations aux événements de prestige.",
      ],
      stats: [
        { count: 250, label: "Occasions accompagnées" },
        { count: 12000, label: "Convives ravis" },
        { count: 80, label: "Concepts traiteur réalisés" },
        { count: 15, label: "Années d'expérience gastronomique" },
      ],
      faqTitle: "Questions fréquentes",
      faq: [
        {
          q: "Qu'est-ce qui rend Chutnee im Schloss unique ?",
          a: "Chutnee im Schloss conjugue cuisine indienne authentique, atmosphère élégante et hospitalité personnelle. L'objectif n'est pas seulement de bien manger, mais de vivre une expérience complète.",
        },
        {
          q: "Chutnee im Schloss propose-t-il un service traiteur ?",
          a: "Oui, Chutnee im Schloss assure un service traiteur pour les fêtes privées, les événements d'entreprise et les célébrations particulières. Les mets et le déroulement peuvent être adaptés à chaque occasion.",
        },
        {
          q: "Peut-on composer un menu personnalisé ?",
          a: "Oui, des menus sur mesure, des options végétariennes et des concepts culinaires adaptés peuvent être discutés en toute simplicité dans le cadre d'une demande personnalisée.",
        },
        {
          q: "Pour quelles occasions Chutnee im Schloss convient-il ?",
          a: "L'offre se prête aux dîners, fêtes de famille, repas d'entreprise, anniversaires, événements intimes et demandes traiteur exclusives.",
        },
      ],
    },
    it: {
      metaTitle: "Chutnee im Schloss | Ristorante & Catering a Bad Ragaz | Deliza",
      metaDescription:
        "Chutnee im Schloss a Bad Ragaz unisce cucina indiana, accoglienza calorosa e catering su misura per occasioni private e aziendali.",
      heroTitle: "Chutnee im Schloss",
      heroBgTitle: "Chutnee",
      introHeadline: "Arte culinaria indiana, sostenuta da un'ospitalità autentica",
      intro:
        "Chutnee im Schloss unisce l'arte culinaria indiana, un'ospitalità calorosa e un'atmosfera unica nella cornice storica di Bad Ragaz. Il ristorante si distingue per una cucina aromatica, ingredienti scelti con cura e un'esperienza che soddisfa non solo l'appetito, ma anche i sensi.",
      infoCards: [
        { label: "Marchio", value: "Chutnee im Schloss" },
        { label: "Luogo", value: "Bad Ragaz, Svizzera" },
        { label: "Categoria", value: "Ristorante & Catering" },
        { label: "Specialità", value: "Cucina indiana" },
        { label: "Esperienza", value: "Fine dining & eventi" },
        { label: "Richiesta", value: "Catering disponibile" },
      ],
      paragraphs: [
        "Chutnee im Schloss è molto più di un ristorante. È un luogo in cui sapore, atmosfera e attenzione personale si incontrano. La cucina coniuga aromi tradizionali indiani con un approccio moderno alla qualità, alla presentazione e all'ospitalità.",
        "Che si tratti di una cena in tranquillità, di una festa di famiglia memorabile, di un pranzo aziendale o di un catering esclusivo fuori dal ristorante, il team cura ogni dettaglio con dedizione. Dalla scelta delle spezie alla presentazione delle pietanze, nasce un'esperienza culinaria autentica, elegante e indimenticabile.",
      ],
      quote:
        "«Quando la gastronomia è guidata dal cuore, l'esperienza va ben oltre il piatto.»",
      paragraphsAfter: [
        "Per occasioni private e aziendali, Chutnee im Schloss propone soluzioni di catering su misura, modellate sull'occasione, sul numero di ospiti e sull'atmosfera desiderata. Qualità, affidabilità e consulenza personale sono sempre al centro.",
        "Come parte di Deliza GmbH, Chutnee im Schloss può contare su una rete solida nella gastronomia, nell'organizzazione di eventi e nell'ospitalità. I concetti culinari si sviluppano con flessibilità e si realizzano con professionalità, dalle piccole celebrazioni agli eventi di alto profilo.",
      ],
      stats: [
        { count: 250, label: "Occasioni speciali curate" },
        { count: 12000, label: "Ospiti soddisfatti" },
        { count: 80, label: "Concetti di catering realizzati" },
        { count: 15, label: "Anni di esperienza gastronomica" },
      ],
      faqTitle: "Domande frequenti",
      faq: [
        {
          q: "Cosa rende speciale Chutnee im Schloss?",
          a: "Chutnee im Schloss unisce cucina indiana autentica, ambiente elegante e ospitalità personale. L'obiettivo non è solo offrire un buon pasto, ma un'esperienza completa per gli ospiti.",
        },
        {
          q: "Chutnee im Schloss offre un servizio di catering?",
          a: "Sì, Chutnee im Schloss propone catering per feste private, eventi aziendali e celebrazioni speciali. Le pietanze e l'organizzazione possono essere adattate a ogni occasione.",
        },
        {
          q: "È possibile concordare menù personalizzati?",
          a: "Sì, idee per menù su misura, opzioni vegetariane e concept culinari dedicati possono essere discussi in modo personale nell'ambito di una richiesta.",
        },
        {
          q: "Per quali occasioni è adatto Chutnee im Schloss?",
          a: "L'offerta è ideale per cene, feste di famiglia, pranzi aziendali, compleanni, piccoli eventi e richieste di catering esclusive.",
        },
      ],
    },
  },
  giessenpark: {
    de: {
      metaTitle: "Giessenpark Catering | Events & Hospitality | Deliza",
      metaDescription:
        "Giessenpark Catering plant Veranstaltungen mit Sorgfalt: persönliche Beratung, durchdachte Konzepte und verlässliche Umsetzung in der Region Bad Ragaz.",
      heroTitle: "Giessenpark Catering",
      heroBgTitle: "Giessenpark",
      introHeadline: "Massgeschneidertes Catering und durchdachte Gastgeberkultur",
      intro:
        "Giessenpark Catering steht für individuell geplante Gastronomie, verlässliche Organisation und eine Gastgeberkultur, die jeden Anlass besonders macht. Von privaten Feiern bis zu Firmenveranstaltungen entstehen massgeschneiderte Catering Lösungen mit Qualität, Struktur und persönlicher Handschrift.",
      infoCards: [
        { label: "Marke", value: "Giessenpark" },
        { label: "Region", value: "Bad Ragaz & Umgebung" },
        { label: "Kategorie", value: "Catering & Events" },
        { label: "Fokus", value: "Massgeschneiderte Konzepte" },
        { label: "Service", value: "Planung & Umsetzung" },
        { label: "Anfrage", value: "Privat & Business" },
      ],
      paragraphs: [
        "Giessenpark Catering begleitet Veranstaltungen mit einem klaren Anspruch: Gäste sollen sich willkommen fühlen, Gastgeber sollen entlastet werden und jedes Detail soll stimmig sein. Dafür verbindet das Team gastronomisches Know-how mit Erfahrung in Organisation, Ablaufplanung und persönlicher Betreuung.",
        "Jeder Anlass ist anders. Deshalb beginnt die Zusammenarbeit mit einer sorgfältigen Abstimmung von Ziel, Rahmen, Gästezahl, Menüwunsch und Atmosphäre. Daraus entsteht ein Catering Konzept, das nicht einfach standardisiert wirkt, sondern zum Anlass, zum Ort und zu den Menschen passt.",
      ],
      quote:
        "„Gutes Catering beginnt lange vor dem ersten Teller, mit Zuhören, Planen und echter Aufmerksamkeit.“",
      paragraphsAfter: [
        "Ob Apéro, Business Lunch, Firmenfeier, Vereinsanlass, Familienfest oder exklusive Veranstaltung, Giessenpark entwickelt Lösungen, die kulinarisch überzeugen und organisatorisch funktionieren. Dabei sind Zuverlässigkeit, klare Kommunikation und flexible Umsetzung besonders wichtig.",
        "Als Teil von Deliza GmbH kann Giessenpark Catering auf ein breites Hospitality Netzwerk zugreifen. So entstehen nicht nur Speisen und Getränke, sondern vollständige Erlebnisse, die Beratung, Planung, Service und Atmosphäre miteinander verbinden.",
      ],
      stats: [
        { count: 320, label: "Events begleitet" },
        { count: 18500, label: "Gäste bewirtet" },
        { count: 95, label: "Individuelle Menüs geplant" },
        { count: 12, label: "Catering Formate entwickelt" },
      ],
      faqTitle: "Häufige Fragen",
      faq: [
        {
          q: "Welche Arten von Events betreut Giessenpark Catering?",
          a: "Giessenpark Catering eignet sich für private Feiern, Firmenveranstaltungen, Apéros, Business Events, Vereinsanlässe und besondere Hospitality Konzepte.",
        },
        {
          q: "Kann das Catering individuell geplant werden?",
          a: "Ja, jedes Catering wird passend zum Anlass geplant. Menü, Ablauf, Serviceumfang und Präsentation können individuell abgestimmt werden.",
        },
        {
          q: "Bietet Giessenpark auch Beratung für Events?",
          a: "Ja, neben dem Catering unterstützt Giessenpark auch bei Konzept, Ablauf und organisatorischen Fragen rund um den Anlass.",
        },
        {
          q: "In welcher Region ist Giessenpark Catering verfügbar?",
          a: "Der Fokus liegt auf Bad Ragaz, Heidiland und der umliegenden Region. Für passende Projekte können auch weitere Standorte geprüft werden.",
        },
      ],
    },
    en: {
      metaTitle: "Giessenpark Catering | Events & Hospitality | Deliza",
      metaDescription:
        "Giessenpark Catering plans events with care: personal consultation, refined concepts and reliable delivery across the Bad Ragaz region.",
      heroTitle: "Giessenpark Catering",
      heroBgTitle: "Giessenpark",
      introHeadline: "Tailored catering with a reliable hosting culture",
      intro:
        "Giessenpark Catering stands for individually planned gastronomy, dependable organisation and a hosting culture that makes every occasion feel special. From private celebrations to corporate events, we create bespoke catering solutions defined by quality, structure and a personal touch.",
      infoCards: [
        { label: "Brand", value: "Giessenpark" },
        { label: "Region", value: "Bad Ragaz & surroundings" },
        { label: "Category", value: "Catering & events" },
        { label: "Focus", value: "Bespoke concepts" },
        { label: "Service", value: "Planning & delivery" },
        { label: "Inquiry", value: "Private & business" },
      ],
      paragraphs: [
        "Giessenpark Catering supports events with a clear standard: guests should feel welcome, hosts should feel supported, and every detail should sit in place. To make that happen, the team combines culinary know-how with experience in planning, logistics and personal service.",
        "Every occasion is different. That is why each engagement begins with a careful conversation about purpose, setting, guest numbers, menu preferences and atmosphere. The resulting catering concept never feels off-the-shelf — it fits the occasion, the venue and the people.",
      ],
      quote:
        "“Great catering begins long before the first plate is served — with listening, planning and genuine attention.”",
      paragraphsAfter: [
        "Whether an apéro, business lunch, corporate gathering, association event, family celebration or exclusive launch, Giessenpark develops solutions that are culinarily compelling and operationally sound. Reliability, clear communication and flexible execution are non-negotiable.",
        "As part of Deliza GmbH, Giessenpark Catering taps into a broad hospitality network. We don't just deliver food and drinks — we deliver full experiences that connect consultation, planning, service and atmosphere into one coherent whole.",
      ],
      stats: [
        { count: 320, label: "Events supported" },
        { count: 18500, label: "Guests served" },
        { count: 95, label: "Bespoke menus designed" },
        { count: 12, label: "Catering formats developed" },
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        {
          q: "Which kinds of events does Giessenpark Catering host?",
          a: "Giessenpark Catering is the right partner for private celebrations, corporate events, apéros, business gatherings, association events and bespoke hospitality concepts.",
        },
        {
          q: "Can the catering be planned individually?",
          a: "Yes, every catering brief is tailored to the occasion. Menu, flow, service scope and presentation can all be aligned to your needs.",
        },
        {
          q: "Does Giessenpark also advise on events?",
          a: "Yes, alongside catering Giessenpark supports clients on concept, flow and the organisational questions that surround any event.",
        },
        {
          q: "Where is Giessenpark Catering available?",
          a: "The focus is on Bad Ragaz, Heidiland and the surrounding region. For the right project, additional locations can be considered.",
        },
      ],
    },
    fr: {
      metaTitle: "Giessenpark Catering | Événements & Hospitalité | Deliza",
      metaDescription:
        "Giessenpark Catering planifie chaque événement avec soin : conseil personnalisé, concepts raffinés et exécution fiable dans la région de Bad Ragaz.",
      heroTitle: "Giessenpark Catering",
      heroBgTitle: "Giessenpark",
      introHeadline: "Un service traiteur sur mesure et un véritable art de recevoir",
      intro:
        "Giessenpark Catering incarne une gastronomie pensée sur mesure, une organisation rigoureuse et une culture d'accueil qui distingue chaque occasion. Des fêtes privées aux événements d'entreprise, nos solutions traiteur allient qualité, structure et signature personnelle.",
      infoCards: [
        { label: "Marque", value: "Giessenpark" },
        { label: "Région", value: "Bad Ragaz et environs" },
        { label: "Catégorie", value: "Traiteur & Événements" },
        { label: "Spécialité", value: "Concepts sur mesure" },
        { label: "Service", value: "Planification & Mise en œuvre" },
        { label: "Demande", value: "Privé & Professionnel" },
      ],
      paragraphs: [
        "Giessenpark Catering accompagne les événements avec une exigence claire : les convives doivent se sentir attendus, les hôtes doivent être déchargés, et chaque détail doit être à sa place. L'équipe associe pour cela un savoir-faire gastronomique solide à une véritable expérience en organisation, planification et service personnel.",
        "Chaque occasion est unique. C'est pourquoi notre collaboration débute toujours par un échange attentif autour du but recherché, du cadre, du nombre de convives, des envies de menu et de l'ambiance souhaitée. Naît alors un concept traiteur qui n'a rien de standardisé, mais qui épouse réellement l'événement, le lieu et les personnes.",
      ],
      quote:
        "« Un grand service traiteur commence bien avant la première assiette : par l'écoute, la planification et une attention sincère. »",
      paragraphsAfter: [
        "Apéritif, déjeuner d'affaires, fête d'entreprise, événement associatif, fête de famille ou rendez-vous exclusif : Giessenpark conçoit des solutions qui séduisent en cuisine et fonctionnent dans les coulisses. Fiabilité, communication limpide et exécution souple sont non négociables.",
        "Membre du groupe Deliza GmbH, Giessenpark Catering s'appuie sur un large réseau d'hospitalité. Nous livrons ainsi bien plus que des mets et des boissons : des expériences complètes qui réunissent conseil, planification, service et atmosphère en un ensemble cohérent.",
      ],
      stats: [
        { count: 320, label: "Événements accompagnés" },
        { count: 18500, label: "Convives servis" },
        { count: 95, label: "Menus sur mesure conçus" },
        { count: 12, label: "Formats traiteur développés" },
      ],
      faqTitle: "Questions fréquentes",
      faq: [
        {
          q: "Quels types d'événements Giessenpark Catering prend-il en charge ?",
          a: "Giessenpark Catering est le partenaire idéal pour les fêtes privées, les événements d'entreprise, les apéritifs, les rencontres professionnelles, les manifestations associatives et les concepts d'hospitalité sur mesure.",
        },
        {
          q: "Le service traiteur peut-il être planifié individuellement ?",
          a: "Oui, chaque mandat traiteur est pensé pour l'occasion. Menu, déroulement, périmètre du service et présentation s'ajustent à vos besoins.",
        },
        {
          q: "Giessenpark conseille-t-il aussi sur l'événement ?",
          a: "Oui, au-delà du traiteur, Giessenpark accompagne ses clients sur le concept, le déroulé et les questions organisationnelles propres à chaque événement.",
        },
        {
          q: "Dans quelle région Giessenpark Catering intervient-il ?",
          a: "L'attention se porte d'abord sur Bad Ragaz, le Heidiland et la région environnante. Pour des projets adaptés, d'autres lieux peuvent être étudiés.",
        },
      ],
    },
    it: {
      metaTitle: "Giessenpark Catering | Eventi & Ospitalità | Deliza",
      metaDescription:
        "Giessenpark Catering pianifica gli eventi con cura: consulenza personale, concept raffinati ed esecuzione affidabile nella regione di Bad Ragaz.",
      heroTitle: "Giessenpark Catering",
      heroBgTitle: "Giessenpark",
      introHeadline: "Catering su misura e una vera cultura dell'accoglienza",
      intro:
        "Giessenpark Catering rappresenta una gastronomia pianificata con cura, un'organizzazione affidabile e una cultura dell'accoglienza capace di rendere speciale ogni occasione. Dalle feste private agli eventi aziendali, costruiamo soluzioni di catering su misura, fondate su qualità, struttura e una firma personale.",
      infoCards: [
        { label: "Marchio", value: "Giessenpark" },
        { label: "Regione", value: "Bad Ragaz e dintorni" },
        { label: "Categoria", value: "Catering & Eventi" },
        { label: "Specialità", value: "Concept su misura" },
        { label: "Servizio", value: "Pianificazione & Realizzazione" },
        { label: "Richiesta", value: "Privato & Aziendale" },
      ],
      paragraphs: [
        "Giessenpark Catering accompagna gli eventi con un'idea chiara: gli ospiti devono sentirsi accolti, gli organizzatori devono essere supportati, ogni dettaglio deve essere al suo posto. Per questo il team unisce un solido know-how gastronomico a un'esperienza concreta nell'organizzazione, nella pianificazione e nel servizio personale.",
        "Ogni occasione è diversa. Per questo la collaborazione inizia con un confronto accurato su obiettivo, cornice, numero di ospiti, preferenze di menù e atmosfera desiderata. Ne nasce un concept di catering tutt'altro che standardizzato, capace di adattarsi all'occasione, al luogo e alle persone.",
      ],
      quote:
        "«Un grande catering inizia molto prima del primo piatto: con l'ascolto, la pianificazione e un'attenzione sincera.»",
      paragraphsAfter: [
        "Aperitivi, pranzi di lavoro, feste aziendali, eventi associativi, ricorrenze familiari o appuntamenti esclusivi: Giessenpark sviluppa soluzioni convincenti in cucina e ineccepibili nell'organizzazione. Affidabilità, comunicazione chiara e flessibilità di esecuzione sono imprescindibili.",
        "In quanto parte di Deliza GmbH, Giessenpark Catering accede a una rete di ospitalità ampia e consolidata. Non offriamo solo cibo e bevande, ma esperienze complete che integrano consulenza, pianificazione, servizio e atmosfera in un insieme coerente.",
      ],
      stats: [
        { count: 320, label: "Eventi accompagnati" },
        { count: 18500, label: "Ospiti serviti" },
        { count: 95, label: "Menù personalizzati progettati" },
        { count: 12, label: "Format di catering sviluppati" },
      ],
      faqTitle: "Domande frequenti",
      faq: [
        {
          q: "Che tipo di eventi gestisce Giessenpark Catering?",
          a: "Giessenpark Catering è il partner ideale per feste private, eventi aziendali, aperitivi, incontri di lavoro, manifestazioni associative e concept di ospitalità dedicati.",
        },
        {
          q: "Il catering può essere pianificato individualmente?",
          a: "Sì, ogni catering viene progettato sulla specifica occasione. Menù, flusso, ampiezza del servizio e presentazione possono essere adattati alle tue esigenze.",
        },
        {
          q: "Giessenpark offre anche consulenza per gli eventi?",
          a: "Sì, oltre al catering Giessenpark supporta i clienti sul concept, il flusso e gli aspetti organizzativi che ruotano attorno all'evento.",
        },
        {
          q: "In quale regione opera Giessenpark Catering?",
          a: "L'attenzione si concentra su Bad Ragaz, Heidiland e dintorni. Per progetti adatti possono essere valutate anche altre località.",
        },
      ],
    },
  },
  "7310": {
    de: {
      metaTitle: "7310 Produkte | Whiskey, Gin, Wein & regionale Innovation | Deliza",
      metaDescription:
        "7310 verbindet die regionale Identität von Bad Ragaz mit hochwertigen Produkten – Whiskey, Gin, Wein – und einer geplanten App für lokale Ideen und Events.",
      heroTitle: "7310 Produkte",
      heroBgTitle: "7310",
      introHeadline: "Regionale Identität, hochwertige Produkte und digitale Innovation",
      intro:
        "7310 steht für die regionale Identität von Bad Ragaz und verbindet hochwertige Produkte mit lokalen Ideen, Genuss und digitaler Innovation. Unter dieser Marke entstehen Whiskey, Gin, Wein und zukünftige Projekte, die den Charakter der Region sichtbar und erlebbar machen.",
      infoCards: [
        { label: "Marke", value: "7310" },
        { label: "Ort", value: "Bad Ragaz, Schweiz" },
        { label: "Kategorie", value: "Produkte & Innovation" },
        { label: "Fokus", value: "Whiskey, Gin & Wein" },
        { label: "Vision", value: "Regionale Ideen fördern" },
        { label: "Digital", value: "7310 App geplant" },
      ],
      paragraphs: [
        "Der Name 7310 ist direkt mit Bad Ragaz verbunden. Er steht für Herkunft, regionale Nähe und den Anspruch, aus lokalen Ideen hochwertige Produkte und Erlebnisse zu entwickeln. Die Marke verbindet Genuss, Kreativität und Unternehmergeist in einer klaren Identität.",
        "Zum Kern der 7310 Produkte gehören Whiskey, Gin und Wein. Diese Produkte sollen nicht nur verkauft werden, sondern eine Geschichte erzählen: von der Region, von Menschen mit Ideen und von einem modernen Verständnis für Qualität und Zusammenarbeit.",
      ],
      quote:
        "„7310 ist mehr als eine Zahl, es ist ein Zeichen für Herkunft, Ideen und den Mut, daraus etwas Eigenes zu schaffen.“",
      paragraphsAfter: [
        "Ein wichtiger Teil der Vision ist die geplante 7310 App. Sie soll regionale Events sichtbar machen, lokale Zusammenarbeit fördern und Menschen die Möglichkeit geben, Produktideen einzureichen. Wenn eine Idee überzeugt, kann Deliza dabei helfen, sie unter der Marke 7310 weiterzuentwickeln und zu vermarkten.",
        "So entsteht eine Plattform zwischen Genuss, Community und Innovation. 7310 verbindet physische Produkte mit digitaler Sichtbarkeit und schafft neue Möglichkeiten für Menschen, Unternehmen und Veranstaltungen in der Region.",
      ],
      stats: [
        { count: 65, label: "Regionale Ideen gesammelt" },
        { count: 24, label: "Produktkonzepte entwickelt" },
        { count: 6, label: "Kategorien im Aufbau" },
        { count: 18, label: "Digitale Funktionen geplant" },
      ],
      faqTitle: "Häufige Fragen",
      faq: [
        {
          q: "Was bedeutet 7310?",
          a: "7310 ist die Postleitzahl von Bad Ragaz. Die Marke nutzt diese Zahl als Symbol für regionale Identität, lokale Ideen und hochwertige Produkte.",
        },
        {
          q: "Welche Produkte gehören zu 7310?",
          a: "Zum geplanten und entwickelten Sortiment gehören Whiskey, Gin und Wein. Weitere Produkte können aus regionalen Ideen und Kooperationen entstehen.",
        },
        {
          q: "Was ist die 7310 App?",
          a: "Die geplante 7310 App soll regionale Events zeigen, lokale Zusammenarbeit fördern und Menschen ermöglichen, eigene Produktideen vorzuschlagen.",
        },
        {
          q: "Können lokale Personen eigene Ideen einreichen?",
          a: "Ja, die Vision von 7310 ist es, lokale Ideen sichtbar zu machen. Wenn eine Idee passt, kann Deliza helfen, daraus ein Produkt oder Projekt unter der Marke 7310 zu entwickeln.",
        },
      ],
    },
    en: {
      metaTitle: "7310 Products | Whiskey, Gin, Wine & Regional Innovation | Deliza",
      metaDescription:
        "7310 channels the regional identity of Bad Ragaz into premium products — whiskey, gin, wine — and an upcoming app for local ideas and events.",
      heroTitle: "7310 Products",
      heroBgTitle: "7310",
      introHeadline: "Regional identity, premium products and digital innovation",
      intro:
        "7310 stands for the regional identity of Bad Ragaz, bringing together premium products, local ideas, true enjoyment and digital innovation. The brand is home to whiskey, gin, wine and a growing portfolio of projects that make the character of the region visible and tangible.",
      infoCards: [
        { label: "Brand", value: "7310" },
        { label: "Location", value: "Bad Ragaz, Switzerland" },
        { label: "Category", value: "Products & innovation" },
        { label: "Focus", value: "Whiskey, gin & wine" },
        { label: "Vision", value: "Empowering local ideas" },
        { label: "Digital", value: "7310 app on the way" },
      ],
      paragraphs: [
        "The name 7310 is directly tied to Bad Ragaz. It stands for origin, regional closeness and the ambition to develop premium products and experiences out of local ideas. The brand brings together enjoyment, creativity and entrepreneurial spirit in one clear identity.",
        "At the core of 7310 sit whiskey, gin and wine. These products are not simply sold — they are made to tell a story: of a region, of people with ideas and of a modern understanding of quality and collaboration.",
      ],
      quote:
        "“7310 is more than a number — it stands for origin, ideas and the courage to build something of your own.”",
      paragraphsAfter: [
        "A key part of the vision is the upcoming 7310 app. It is designed to surface regional events, encourage local collaboration and give people a way to submit their own product ideas. When an idea has potential, Deliza can help develop and bring it to market under the 7310 brand.",
        "The result is a platform that lives between enjoyment, community and innovation. 7310 links physical products with digital visibility and opens up new opportunities for people, companies and events across the region.",
      ],
      stats: [
        { count: 65, label: "Regional ideas gathered" },
        { count: 24, label: "Product concepts developed" },
        { count: 6, label: "Categories in build-out" },
        { count: 18, label: "Digital features planned" },
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        {
          q: "What does 7310 mean?",
          a: "7310 is the postal code of Bad Ragaz. The brand uses this number as a symbol of regional identity, local ideas and premium products.",
        },
        {
          q: "Which products belong to 7310?",
          a: "The planned and developed range covers whiskey, gin and wine. Additional products can grow out of regional ideas and partnerships.",
        },
        {
          q: "What is the 7310 app?",
          a: "The upcoming 7310 app is designed to showcase regional events, encourage local collaboration and let people submit their own product ideas.",
        },
        {
          q: "Can local people submit their own ideas?",
          a: "Yes, the vision behind 7310 is to give local ideas visibility. When an idea is a good fit, Deliza can help shape it into a product or project under the 7310 brand.",
        },
      ],
    },
    fr: {
      metaTitle: "Produits 7310 | Whisky, Gin, Vin & Innovation régionale | Deliza",
      metaDescription:
        "7310 transforme l'identité régionale de Bad Ragaz en produits d'exception — whisky, gin, vin — et prépare une application pour idées et événements locaux.",
      heroTitle: "Produits 7310",
      heroBgTitle: "7310",
      introHeadline: "Identité régionale, produits d'exception et innovation numérique",
      intro:
        "7310 incarne l'identité régionale de Bad Ragaz et associe produits d'exception, idées locales, plaisirs partagés et innovation numérique. Sous cette marque naissent whisky, gin, vin et de futurs projets qui rendent le caractère de la région visible et palpable.",
      infoCards: [
        { label: "Marque", value: "7310" },
        { label: "Lieu", value: "Bad Ragaz, Suisse" },
        { label: "Catégorie", value: "Produits & Innovation" },
        { label: "Spécialité", value: "Whisky, gin & vin" },
        { label: "Vision", value: "Soutenir les idées locales" },
        { label: "Numérique", value: "App 7310 en préparation" },
      ],
      paragraphs: [
        "Le nom 7310 est directement lié à Bad Ragaz. Il symbolise l'origine, la proximité régionale et l'ambition de transformer les idées locales en produits et expériences d'exception. La marque réunit plaisir, créativité et esprit d'entreprendre dans une identité limpide.",
        "Au cœur de 7310 : le whisky, le gin et le vin. Ces produits ne se contentent pas d'être vendus, ils racontent une histoire — celle d'une région, d'hommes et de femmes pleins d'idées, et d'une vision moderne de la qualité et de la collaboration.",
      ],
      quote:
        "« 7310 est bien plus qu'un nombre : c'est un signe d'origine, d'idées et du courage d'en faire quelque chose qui nous appartient. »",
      paragraphsAfter: [
        "L'application 7310, en préparation, occupe une place centrale dans cette vision. Elle a vocation à mettre en lumière les événements de la région, à encourager les coopérations locales et à offrir à chacun la possibilité de proposer une idée de produit. Lorsqu'une idée séduit, Deliza accompagne son développement et sa mise en marché sous la marque 7310.",
        "Naît ainsi une plateforme qui se déploie entre plaisir, communauté et innovation. 7310 relie produits physiques et visibilité numérique, ouvrant de nouvelles perspectives aux habitants, aux entreprises et aux événements de la région.",
      ],
      stats: [
        { count: 65, label: "Idées régionales collectées" },
        { count: 24, label: "Concepts produits développés" },
        { count: 6, label: "Catégories en construction" },
        { count: 18, label: "Fonctions numériques prévues" },
      ],
      faqTitle: "Questions fréquentes",
      faq: [
        {
          q: "Que signifie 7310 ?",
          a: "7310 est le code postal de Bad Ragaz. La marque utilise ce nombre comme symbole d'identité régionale, d'idées locales et de produits d'exception.",
        },
        {
          q: "Quels produits font partie de 7310 ?",
          a: "La gamme, en partie déjà développée, comprend du whisky, du gin et du vin. D'autres produits pourront naître d'idées régionales et de coopérations.",
        },
        {
          q: "Qu'est-ce que l'application 7310 ?",
          a: "L'application 7310, en préparation, présentera les événements de la région, soutiendra les coopérations locales et permettra à chacun de proposer ses propres idées de produits.",
        },
        {
          q: "Les habitants peuvent-ils soumettre leurs propres idées ?",
          a: "Oui, la vision de 7310 est de donner de la visibilité aux idées locales. Lorsqu'une idée correspond, Deliza peut aider à en faire un produit ou un projet porté par la marque 7310.",
        },
      ],
    },
    it: {
      metaTitle: "Prodotti 7310 | Whisky, Gin, Vino & Innovazione regionale | Deliza",
      metaDescription:
        "7310 traduce l'identità regionale di Bad Ragaz in prodotti d'eccellenza — whisky, gin, vino — e prepara un'app per idee ed eventi locali.",
      heroTitle: "Prodotti 7310",
      heroBgTitle: "7310",
      introHeadline: "Identità regionale, prodotti d'eccellenza e innovazione digitale",
      intro:
        "7310 è l'identità regionale di Bad Ragaz: unisce prodotti d'eccellenza, idee locali, piacere condiviso e innovazione digitale. Sotto questo marchio nascono whisky, gin, vino e nuovi progetti, che rendono visibile e tangibile il carattere della regione.",
      infoCards: [
        { label: "Marchio", value: "7310" },
        { label: "Luogo", value: "Bad Ragaz, Svizzera" },
        { label: "Categoria", value: "Prodotti & Innovazione" },
        { label: "Specialità", value: "Whisky, gin & vino" },
        { label: "Visione", value: "Valorizzare idee locali" },
        { label: "Digitale", value: "App 7310 in arrivo" },
      ],
      paragraphs: [
        "Il nome 7310 è direttamente legato a Bad Ragaz. Rappresenta provenienza, vicinanza regionale e la volontà di trasformare le idee locali in prodotti ed esperienze di alto livello. Il marchio mette in dialogo piacere, creatività e spirito imprenditoriale in un'identità chiara.",
        "Al centro di 7310 ci sono whisky, gin e vino. Non sono prodotti pensati semplicemente per essere venduti, ma per raccontare una storia: quella di una regione, di persone con idee e di una visione moderna della qualità e della collaborazione.",
      ],
      quote:
        "«7310 è molto più di un numero: è un segno di origine, di idee e del coraggio di trasformarle in qualcosa di proprio.»",
      paragraphsAfter: [
        "Una parte importante della visione è la futura app 7310. Renderà visibili gli eventi del territorio, favorirà la collaborazione locale e darà la possibilità a ciascuno di proporre nuove idee di prodotto. Quando un'idea convince, Deliza può accompagnarne lo sviluppo e la commercializzazione sotto il marchio 7310.",
        "Nasce così una piattaforma che si muove tra piacere, comunità e innovazione. 7310 collega prodotti fisici e visibilità digitale e apre nuove possibilità per persone, imprese ed eventi della regione.",
      ],
      stats: [
        { count: 65, label: "Idee regionali raccolte" },
        { count: 24, label: "Concept di prodotto sviluppati" },
        { count: 6, label: "Categorie in costruzione" },
        { count: 18, label: "Funzioni digitali previste" },
      ],
      faqTitle: "Domande frequenti",
      faq: [
        {
          q: "Cosa significa 7310?",
          a: "7310 è il codice postale di Bad Ragaz. Il marchio utilizza questo numero come simbolo di identità regionale, idee locali e prodotti di alto livello.",
        },
        {
          q: "Quali prodotti fanno parte di 7310?",
          a: "La gamma, in parte già sviluppata, comprende whisky, gin e vino. Ulteriori prodotti potranno nascere da idee regionali e collaborazioni.",
        },
        {
          q: "Cos'è l'app 7310?",
          a: "L'app 7310, in arrivo, presenterà gli eventi della regione, sosterrà la collaborazione locale e consentirà a chiunque di proporre nuove idee di prodotto.",
        },
        {
          q: "Le persone del territorio possono proporre proprie idee?",
          a: "Sì, la visione di 7310 è dare visibilità alle idee locali. Quando un'idea è in linea, Deliza può aiutare a trasformarla in un prodotto o progetto a marchio 7310.",
        },
      ],
    },
  },
};

export function getServiceContent(
  serviceId: ServiceId,
  locale: Locale
): ServiceContent {
  return SERVICE_CONTENT[serviceId][locale];
}

export function getServicePath(serviceId: ServiceId, locale: Locale): string {
  return `/${locale}/${SERVICE_SLUGS[serviceId][locale]}`;
}
