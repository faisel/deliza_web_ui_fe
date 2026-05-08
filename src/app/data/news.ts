import type { Locale } from "@/i18n/config";

export interface NewsTranslation {
  title: string;
  teaser: string;
  description: string;
  /** Per-locale image alt text. Falls back to title if not set. */
  alt?: string;
}

export interface NewsItem {
  id: number;
  /** Canonical slug used by default for all locales. */
  slug: string;
  /**
   * Optional per-locale slug overrides. When set, each locale's URL uses
   * its own slug; the canonical `slug` above stays as the internal key.
   */
  slugs?: Record<Locale, string>;
  date: string;
  image: string;
  /** When set, listing cards link out and no detail page is generated. */
  externalUrl?: string;
  translations: Record<Locale, NewsTranslation>;
}

const news: NewsItem[] = [
  {
    id: 1,
    slug: "chutnee-restaurant",
    date: "2026-05-15",
    image: "/assets/images/news/Chutnee_restaurant_1.jpg",
    translations: {
      en: {
        title: "Grand Opening of Chutnee Restaurant",
        teaser:
          "A new culinary destination blending tradition, elegance, and bold flavors has arrived.",
        description:
          "Chutnee Restaurant celebrates its grand inauguration, introducing a refined dining experience inspired by authentic Indian flavors and modern presentation. Located in the heart of Bad Ragaz, the restaurant combines warm hospitality with carefully curated dishes that reflect both heritage and innovation. Guests can expect an inviting atmosphere, premium ingredients, and a menu designed to create memorable moments. With its elegant ambiance and attention to detail, Chutnee sets a new standard for gastronomy in the region.",
        alt: "Chutnee Restaurant interior on opening night",
      },
      de: {
        title: "Grosse Eröffnung des Chutnee Restaurants",
        teaser:
          "Eine neue kulinarische Destination, die Tradition, Eleganz und ausdrucksstarke Aromen vereint, ist da.",
        description:
          "Das Chutnee Restaurant feiert seine grosse Eröffnung und bietet ein raffiniertes Esserlebnis, inspiriert von authentischen indischen Aromen und moderner Präsentation. Im Herzen von Bad Ragaz verbindet das Restaurant herzliche Gastfreundschaft mit sorgfältig kuratierten Gerichten, die Tradition und Innovation widerspiegeln. Gäste dürfen sich auf eine einladende Atmosphäre, hochwertige Zutaten und ein Menü freuen, das unvergessliche Momente schafft. Mit seinem eleganten Ambiente und seiner Liebe zum Detail setzt Chutnee neue Massstäbe für die Gastronomie der Region.",
        alt: "Innenraum des Chutnee Restaurants am Eröffnungsabend",
      },
      fr: {
        title: "Inauguration du restaurant Chutnee",
        teaser:
          "Une nouvelle destination culinaire mêlant tradition, élégance et saveurs audacieuses ouvre ses portes.",
        description:
          "Le restaurant Chutnee célèbre son inauguration en proposant une expérience gastronomique raffinée, inspirée des saveurs authentiques indiennes et d'une présentation moderne. Situé au cœur de Bad Ragaz, l'établissement allie hospitalité chaleureuse et plats soigneusement composés, reflets d'un héritage et d'une créativité. Les hôtes pourront profiter d'une atmosphère accueillante, d'ingrédients de qualité supérieure et d'une carte conçue pour créer des moments mémorables. Par son ambiance élégante et son souci du détail, Chutnee établit une nouvelle référence gastronomique dans la région.",
        alt: "Intérieur du restaurant Chutnee le soir de l'ouverture",
      },
      it: {
        title: "Grande apertura del ristorante Chutnee",
        teaser:
          "Una nuova destinazione culinaria che fonde tradizione, eleganza e sapori intensi ha aperto le sue porte.",
        description:
          "Il ristorante Chutnee celebra la sua grande inaugurazione, offrendo un'esperienza gastronomica raffinata ispirata agli autentici sapori indiani e a una presentazione moderna. Situato nel cuore di Bad Ragaz, il ristorante unisce calorosa ospitalità a piatti curati che riflettono sia la tradizione che l'innovazione. Gli ospiti possono aspettarsi un'atmosfera accogliente, ingredienti di prima qualità e un menù pensato per creare momenti memorabili. Con il suo ambiente elegante e la cura dei dettagli, Chutnee stabilisce un nuovo standard per la gastronomia della regione.",
        alt: "Interno del ristorante Chutnee la sera dell'inaugurazione",
      },
    },
  },
  {
    id: 2,
    slug: "giessenpark",
    date: "2026-05-18",
    image: "/assets/images/news/Chutnee_restaurant_2.jpg",
    translations: {
      en: {
        title: "Giessenpark – Where Nature Meets Lifestyle",
        teaser:
          "Discover a place where relaxation, nature, and modern living come together effortlessly.",
        description:
          "Giessenpark stands as a unique destination that harmoniously blends natural beauty with contemporary lifestyle experiences. Surrounded by lush greenery and scenic landscapes, it offers visitors a peaceful escape while still providing access to premium facilities and curated spaces. Whether for leisure, recreation, or inspiration, Giessenpark creates an environment that encourages balance and well-being. Its thoughtful design and tranquil atmosphere make it a standout location in the region.",
        alt: "Giessenpark surrounded by greenery and modern architecture",
      },
      de: {
        title: "Giessenpark – Wo Natur auf Lifestyle trifft",
        teaser:
          "Entdecken Sie einen Ort, an dem Erholung, Natur und modernes Leben mühelos zusammenfinden.",
        description:
          "Der Giessenpark ist eine einzigartige Destination, die natürliche Schönheit harmonisch mit zeitgemässem Lifestyle verbindet. Umgeben von satter Vegetation und malerischen Landschaften bietet er einen ruhigen Rückzugsort und gleichzeitig Zugang zu erstklassigen Einrichtungen und kuratierten Räumen. Ob für Erholung, Freizeit oder Inspiration – der Giessenpark schafft ein Umfeld, das Balance und Wohlbefinden fördert. Sein durchdachtes Design und seine ruhige Atmosphäre machen ihn zu einem Highlight der Region.",
        alt: "Giessenpark umgeben von Grünflächen und moderner Architektur",
      },
      fr: {
        title: "Giessenpark – Là où la nature rencontre l'art de vivre",
        teaser:
          "Découvrez un lieu où détente, nature et vie moderne se rencontrent avec aisance.",
        description:
          "Le Giessenpark est une destination unique qui marie harmonieusement beauté naturelle et expériences de vie contemporaines. Entouré d'une végétation luxuriante et de paysages pittoresques, il offre aux visiteurs une retraite paisible tout en donnant accès à des équipements haut de gamme et à des espaces soigneusement conçus. Que ce soit pour les loisirs, la détente ou l'inspiration, le Giessenpark crée un environnement propice à l'équilibre et au bien-être. Son design réfléchi et son atmosphère sereine en font un lieu remarquable de la région.",
        alt: "Le Giessenpark entouré de verdure et d'architecture moderne",
      },
      it: {
        title: "Giessenpark – Dove la natura incontra lo stile di vita",
        teaser:
          "Scopri un luogo in cui relax, natura e vita moderna si incontrano con naturalezza.",
        description:
          "Il Giessenpark è una destinazione unica che combina armoniosamente bellezza naturale ed esperienze di vita contemporanea. Circondato da un verde rigoglioso e da paesaggi suggestivi, offre ai visitatori una pausa tranquilla pur garantendo l'accesso a strutture di alto livello e spazi curati. Che sia per svago, ricreazione o ispirazione, il Giessenpark crea un ambiente che favorisce equilibrio e benessere. Il suo design ricercato e la sua atmosfera serena lo rendono una location di spicco nella regione.",
        alt: "Il Giessenpark circondato dal verde e dall'architettura moderna",
      },
    },
  },
  {
    id: 3,
    slug: "7310-badragaz",
    date: "2026-05-20",
    image: "/assets/images/news/events_7310.jpg",
    translations: {
      en: {
        title: "7310 – The Digital Heart of the Community",
        teaser:
          "A platform designed to connect people, businesses, and local experiences in one place.",
        description:
          "7310.ch is redefining how local communities interact by offering a centralized platform for discovery, connection, and commerce. From local businesses and events to services and opportunities, the platform brings everything together under one digital roof. With a focus on accessibility and simplicity, 7310 empowers both residents and visitors to explore what the region has to offer. It represents a forward-thinking approach to building stronger, more connected communities.",
        alt: "7310 community platform on a laptop screen",
      },
      de: {
        title: "7310 – Das digitale Herz der Region",
        teaser:
          "Eine Plattform, die Menschen, Unternehmen und lokale Erlebnisse an einem Ort verbindet.",
        description:
          "7310.ch definiert neu, wie lokale Gemeinschaften interagieren – mit einer zentralen Plattform für Entdeckung, Vernetzung und Handel. Von lokalen Unternehmen und Events bis zu Dienstleistungen und Angeboten bringt die Plattform alles unter einem digitalen Dach zusammen. Mit dem Fokus auf Zugänglichkeit und Einfachheit ermöglicht 7310 sowohl Einheimischen als auch Besuchern, zu entdecken, was die Region zu bieten hat. Sie steht für einen zukunftsorientierten Ansatz, stärkere und besser vernetzte Gemeinschaften zu schaffen.",
        alt: "Die 7310-Plattform auf einem Laptopbildschirm",
      },
      fr: {
        title: "7310 – Le cœur numérique de la communauté",
        teaser:
          "Une plateforme conçue pour relier personnes, entreprises et expériences locales en un seul endroit.",
        description:
          "7310.ch redéfinit la manière dont les communautés locales interagissent en proposant une plateforme centralisée dédiée à la découverte, à la mise en relation et au commerce. Des entreprises et événements locaux aux services et opportunités, la plateforme réunit l'essentiel sous un même toit numérique. Axée sur l'accessibilité et la simplicité, 7310 permet aux habitants comme aux visiteurs d'explorer ce que la région a à offrir. Elle incarne une approche tournée vers l'avenir pour bâtir des communautés plus fortes et mieux connectées.",
        alt: "La plateforme 7310 affichée sur un ordinateur portable",
      },
      it: {
        title: "7310 – Il cuore digitale della comunità",
        teaser:
          "Una piattaforma pensata per collegare persone, imprese ed esperienze locali in un unico luogo.",
        description:
          "7310.ch ridefinisce il modo in cui le comunità locali interagiscono offrendo una piattaforma centralizzata per scoperta, connessione e commercio. Dalle attività locali agli eventi, dai servizi alle opportunità, la piattaforma riunisce tutto sotto un unico tetto digitale. Con un focus su accessibilità e semplicità, 7310 consente a residenti e visitatori di esplorare ciò che la regione ha da offrire. Rappresenta un approccio lungimirante per costruire comunità più forti e meglio connesse.",
        alt: "La piattaforma 7310 mostrata su un laptop",
      },
    },
  },
  {
    id: 4,
    slug: "giessenpark-hospitality-consulting",
    slugs: {
      de: "giessenpark-expandiert-in-die-hospitality-beratung",
      en: "giessenpark-expands-into-hospitality-consulting",
      fr: "giessenpark-developpe-son-conseil-en-hospitality",
      it: "giessenpark-si-espande-nella-consulenza-hospitality",
    },
    date: "2026-05-22",
    image: "/assets/images/news/Chutnee_restaurant_3.jpg",
    translations: {
      en: {
        title: "Giessenpark Expands into Hospitality Consulting",
        teaser:
          "Supporting visionary gastronomy and hospitality concepts from idea to execution.",
        description:
          "Giessenpark is extending its expertise by offering consulting services tailored to the development of gastronomy and hospitality concepts. With a deep understanding of market trends, guest experience, and operational excellence, the team supports businesses in creating distinctive and sustainable concepts. From initial strategy to implementation, Giessenpark provides guidance that transforms ideas into successful ventures. This new initiative strengthens its role as a key partner in the regional hospitality ecosystem.",
        alt: "Giessenpark consulting team reviewing a hospitality concept",
      },
      de: {
        title: "Giessenpark expandiert in die Hospitality-Beratung",
        teaser:
          "Begleitung visionärer Gastronomie- und Hospitality-Konzepte von der Idee bis zur Umsetzung.",
        description:
          "Giessenpark erweitert sein Leistungsspektrum mit Beratungsdienstleistungen für die Entwicklung von Gastronomie- und Hospitality-Konzepten. Mit einem fundierten Verständnis für Markttrends, Gästeerlebnis und operative Exzellenz unterstützt das Team Unternehmen dabei, eigenständige und nachhaltige Konzepte zu schaffen. Von der ersten Strategie bis zur Umsetzung bietet Giessenpark eine Begleitung, die Ideen in erfolgreiche Vorhaben verwandelt. Diese neue Initiative festigt seine Rolle als wichtiger Partner im regionalen Hospitality-Ökosystem.",
        alt: "Giessenpark-Beratungsteam bei der Arbeit an einem Hospitality-Konzept",
      },
      fr: {
        title: "Giessenpark se développe dans le conseil en hôtellerie",
        teaser:
          "Accompagnement de concepts visionnaires en gastronomie et en hôtellerie, de l'idée à la réalisation.",
        description:
          "Giessenpark étend son expertise en proposant des services de conseil dédiés au développement de concepts gastronomiques et hôteliers. Forte d'une connaissance approfondie des tendances du marché, de l'expérience client et de l'excellence opérationnelle, l'équipe accompagne les entreprises dans la création de concepts distinctifs et durables. De la stratégie initiale à la mise en œuvre, Giessenpark offre un accompagnement qui transforme les idées en projets réussis. Cette nouvelle initiative renforce son rôle de partenaire clé dans l'écosystème régional de l'hôtellerie.",
        alt: "L'équipe de conseil Giessenpark travaillant sur un concept hôtelier",
      },
      it: {
        title: "Giessenpark si espande nella consulenza per l'ospitalità",
        teaser:
          "Sostegno a concept visionari di gastronomia e ospitalità, dall'idea all'esecuzione.",
        description:
          "Giessenpark amplia la propria esperienza offrendo servizi di consulenza dedicati allo sviluppo di concept di gastronomia e ospitalità. Grazie a una profonda conoscenza delle tendenze di mercato, dell'esperienza dell'ospite e dell'eccellenza operativa, il team supporta le aziende nella creazione di concept distintivi e sostenibili. Dalla strategia iniziale all'implementazione, Giessenpark offre una guida che trasforma le idee in progetti di successo. Questa nuova iniziativa rafforza il suo ruolo di partner chiave nell'ecosistema regionale dell'ospitalità.",
        alt: "Il team di consulenza Giessenpark al lavoro su un concept di ospitalità",
      },
    },
  },
];

export default news;

/** Returns the URL slug to use for the given locale (per-locale override or canonical). */
export function getNewsSlug(item: NewsItem, locale: Locale): string {
  return item.slugs?.[locale] ?? item.slug;
}

/**
 * Find a news item by URL slug. When `locale` is given, prefers an exact
 * locale match first, then falls back to any locale's variant — keeps old
 * canonical URLs working when per-locale slugs are added later.
 */
export function findNewsBySlug(
  slug: string,
  locale?: Locale,
): NewsItem | undefined {
  if (locale) {
    const exact = news.find((n) => getNewsSlug(n, locale) === slug);
    if (exact) return exact;
  }
  return news.find(
    (n) =>
      n.slug === slug ||
      (n.slugs && Object.values(n.slugs).includes(slug)),
  );
}
