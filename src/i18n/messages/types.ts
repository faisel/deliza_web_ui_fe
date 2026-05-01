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
  header: {
    topbar: { email: string; workingHours: string };
    topNav: { companyNews: string; faq: string; contact: string };
    nav: {
      home: string;
      pages: string;
      service: string;
      project: string;
      blog: string;
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
