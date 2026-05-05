import { locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { navHref, type NavKey } from "@/i18n/routing";
import news from "@/app/data/news";
import {
  BRAND_CONTACT,
  BRAND_LEGAL_NAME,
  BRAND_NAME,
  DEFAULT_OG_IMAGE,
  SITE_URL,
  SOCIAL_LINKS,
  absoluteUrl,
  bcp47,
} from "./site";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PLACE_ID = `${SITE_URL}/#place`;

export function organizationSchema(locale: Locale): JsonLdValue {
  const messages = getMessages(locale);
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND_NAME,
    legalName: BRAND_LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/assets/images/logo/01.svg"),
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    description: messages.seo.org.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_CONTACT.street,
      postalCode: BRAND_CONTACT.postalCode,
      addressLocality: BRAND_CONTACT.city,
      addressRegion: BRAND_CONTACT.region,
      addressCountry: BRAND_CONTACT.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND_CONTACT.phoneE164,
      email: BRAND_CONTACT.email,
      contactType: "customer support",
      areaServed: ["CH", "DE", "AT", "FR", "IT"],
      availableLanguage: locales.map((l) => bcp47(l)),
    },
    ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS } : {}),
  };
}

export function websiteSchema(locale: Locale): JsonLdValue {
  const messages = getMessages(locale);
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: BRAND_NAME,
    inLanguage: bcp47(locale),
    description: messages.seo.org.description,
    publisher: { "@id": ORG_ID },
  };
}

export function localBusinessSchema(locale: Locale): JsonLdValue {
  const messages = getMessages(locale);
  return {
    "@type": "LocalBusiness",
    "@id": PLACE_ID,
    name: BRAND_NAME,
    url: SITE_URL,
    telephone: BRAND_CONTACT.phoneE164,
    email: BRAND_CONTACT.email,
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    description: messages.seo.org.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_CONTACT.street,
      postalCode: BRAND_CONTACT.postalCode,
      addressLocality: BRAND_CONTACT.city,
      addressRegion: BRAND_CONTACT.region,
      addressCountry: BRAND_CONTACT.country,
    },
    parentOrganization: { "@id": ORG_ID },
    areaServed: BRAND_CONTACT.countryName,
  };
}

export function webPageSchema(nav: NavKey, locale: Locale): JsonLdValue {
  const messages = getMessages(locale);
  const page = messages.seo.pages[nav];
  const path = navHref(nav, locale);
  const url = absoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.metaTitle,
    description: page.metaDescription,
    inLanguage: bcp47(locale),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(DEFAULT_OG_IMAGE.url),
    },
  };
}

export function breadcrumbSchema(nav: NavKey, locale: Locale): JsonLdValue {
  const messages = getMessages(locale);
  const homeLabel = messages.header.nav.home;
  const pageLabel = messages.seo.pages[nav].h1;

  const items: JsonLdValue[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeLabel,
      item: absoluteUrl(navHref("home", locale)),
    },
  ];

  if (nav !== "home") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: pageLabel,
      item: absoluteUrl(navHref(nav, locale)),
    });
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function faqSchema(nav: NavKey, locale: Locale): JsonLdValue | null {
  const messages = getMessages(locale);
  const items = messages.seo.pages[nav].faq.items;
  if (!items || !items.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceSchema(nav: NavKey, locale: Locale): JsonLdValue | null {
  if (nav !== "products" && nav !== "investment") return null;
  const messages = getMessages(locale);
  const page = messages.seo.pages[nav];
  const path = navHref(nav, locale);
  const serviceTypeMap: Record<"products" | "investment", string> = {
    products: "Hospitality services",
    investment: "Hospitality consulting",
  };
  return {
    "@type": "Service",
    name: page.h1,
    description: page.leadParagraph,
    serviceType: serviceTypeMap[nav],
    provider: { "@id": ORG_ID },
    areaServed: BRAND_CONTACT.countryName,
    url: absoluteUrl(path),
    ...(page.highlights && page.highlights.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: page.h1,
            itemListElement: page.highlights.map((h, i) => ({
              "@type": "Offer",
              position: i + 1,
              itemOffered: {
                "@type": "Service",
                name: h.title,
                description: h.description,
              },
            })),
          },
        }
      : {}),
  };
}

export function newsArticleSchemas(locale: Locale): JsonLdValue[] {
  return news.map((item) => {
    const t = item.translations[locale];
    const url = item.externalUrl ?? absoluteUrl(`/${locale}/${getNewsSlug(locale)}/${item.slug}`);
    return {
      "@type": "NewsArticle",
      headline: t.title,
      description: t.teaser,
      image: absoluteUrl(item.image),
      datePublished: item.date,
      url,
      inLanguage: bcp47(locale),
      publisher: { "@id": ORG_ID },
    };
  });
}

function getNewsSlug(locale: Locale): string {
  return navHref("news", locale).split("/").filter(Boolean).slice(1).join("/") || "news-events";
}

/**
 * Compose a full @graph for an active page in a given locale.
 * Caller should serialize this with JSON.stringify and embed in a script tag.
 */
export function buildPageGraph(nav: NavKey, locale: Locale): JsonLdValue {
  const graph: JsonLdValue[] = [
    organizationSchema(locale),
    websiteSchema(locale),
    webPageSchema(nav, locale),
    breadcrumbSchema(nav, locale),
  ];

  const faq = faqSchema(nav, locale);
  if (faq) graph.push(faq);

  const service = serviceSchema(nav, locale);
  if (service) graph.push(service);

  if (nav === "contact" || nav === "home" || nav === "about") {
    graph.push(localBusinessSchema(locale));
  }

  if (nav === "news") {
    graph.push(...newsArticleSchemas(locale));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
