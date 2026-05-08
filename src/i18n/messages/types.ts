export interface ServiceItem {
  title: string;
  description: string;
}

export interface CounterItem {
  count: number;
  label: string;
}

export interface ProjectItem {
  title: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface TestimonialItem {
  text: string;
  name: string;
  designation: string;
}

export interface BlogPost {
  category: string;
  author: string;
  title: string;
}

export interface BannerSlide {
  /** Two-line title; rendered with a <br/> between elements. */
  title: [string, string];
  description: string;
}

/** One question/answer pair shown in a FAQ accordion and emitted as JSON-LD. */
export interface FaqEntry {
  q: string;
  a: string;
}

/** Single H3 highlight block displayed under a page intro. */
export interface PageHighlight {
  title: string;
  description: string;
}

/** SEO + content payload for a single active main-nav page. */
export interface SeoPageContent {
  /** <title> tag, ~50–60 chars. */
  metaTitle: string;
  /** <meta description>, ~140–160 chars. */
  metaDescription: string;
  /** Single visible H1 in the hero/breadcrumb. */
  h1: string;
  /** Optional small label rendered above the H1 / intro. */
  eyebrow?: string;
  /** Decorative oversized background word for hero blocks (already used by template). */
  bgTitle?: string;
  /** Hero subtitle — short sentence under H1. */
  heroDescription?: string;
  /** H2 used inside the page intro section under the hero. */
  introTitle: string;
  /** First lead paragraph — answers "what is this page" in 1–3 sentences. */
  leadParagraph: string;
  /** Optional highlight cards, rendered as H3 + paragraph each. */
  highlights?: PageHighlight[];
  /** FAQ block content. */
  faq: {
    title: string;
    items: FaqEntry[];
  };
}

export interface Messages {
  common: {
    language: string;
    languages: { de: string; en: string; fr: string; it: string };
    buttons: {
      getQuote: string;
      getConsultant: string;
      readMore: string;
      contactUs: string;
      letsWorkTogether: string;
      submitMessage: string;
      subscribe: string;
      learnMore: string;
    };
    by: string;
  };
  metadata: {
    home: { title: string; description: string };
  };
  seo: {
    org: {
      /** Short single-paragraph organization description. */
      description: string;
      /** Brand tagline used in OG/Twitter when appropriate. */
      tagline: string;
    };
    pages: {
      home: SeoPageContent;
      brands: SeoPageContent;
      products: SeoPageContent;
      investment: SeoPageContent;
      about: SeoPageContent;
      news: SeoPageContent;
      contact: SeoPageContent;
    };
  };
  header: {
    topbar: { email: string; workingHours: string };
    topNav: { companyNews: string; faq: string; contact: string };
    nav: {
      home: string;
      brands: string;
      products: string;
      investment: string;
      about: string;
      news: string;
      contact: string;
    };
    languageSwitcher: { label: string };
  };
  home: {
    banner: {
      eyebrow: { prefix: string; text: string };
      slides: BannerSlide[];
    };
    about: {
      chip: string;
      pre: string;
      title: [string, string];
      description: string;
      checks: string[];
      yearsExperience: string;
      callUsAnytime: string;
      phone: string;
    };
    services: {
      chip: string;
      pre: string;
      title: string;
      items: ServiceItem[];
    };
    cta: { title: [string, string] };
    businessGoal: {
      chip: string;
      pre: string;
      title: [string, string];
    };
    counter: { items: CounterItem[] };
    projects: {
      chip: string;
      pre: string;
      title: string;
      items: ProjectItem[];
    };
    brands: { title: string };
    team: {
      chip: string;
      pre: string;
      title: string;
      members: TeamMember[];
    };
    testimonials: {
      chip: string;
      pre: string;
      title: string;
      items: TestimonialItem[];
    };
    appointment: {
      chip: string;
      pre: string;
      title: string;
      fields: { name: string; phone: string; email: string; message: string };
    };
    blog: {
      chip: string;
      pre: string;
      title: string;
      posts: BlogPost[];
    };
    aboutIntro: {
      pre: string;
      title: [string, string];
      description: string;
    };
    delizaServices: {
      pre: string;
      title: string;
      items: ServiceItem[];
    };
    delizaDigital: {
      pre: string;
      title: string;
      description: string;
      features: ServiceItem[];
      cta: string;
    };
    delizaInvestments: {
      pre: string;
      title: string;
      description: string;
      checks: string[];
    };
    delizaCta: {
      title: string;
      subtitle: string;
      button: string;
    };
    delizaNews: {
      pre: string;
      title: string;
    };
    delizaTestimonials: {
      pre: string;
      title: string;
      items: TestimonialItem[];
    };
  };
  notFound: {
    /** Big "404" heading. */
    code: string;
    /** Sub-heading under the code, e.g. "Page Not Found". */
    heading: string;
    /** One-paragraph explanation. */
    description: string;
    /** Label for the home-link button. */
    backHome: string;
  };
  footer: {
    contact: {
      title: string;
      callUs: string;
      phone: string;
      workWithUs: string;
      email: string;
      ourLocation: string;
      location: string;
    };
    hours: {
      title: string;
      weekdays: string;
      weekdaysTime: string;
      saturday: string;
      saturdayTime: string;
      sunday: string;
      dayOff: string;
    };
    quickLinks: {
      title: string;
      /** 9 link labels, in display order. */
      items: string[];
    };
    updates: {
      title: string;
      description: string;
      placeholder: string;
      noteLabel: string;
      note: string;
    };
    copyright: string;
  };
}
