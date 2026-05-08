"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { navHref, type NavKey } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";

interface PageIntroProps {
  nav: NavKey;
  className?: string;
}

const relatedLinksByNav: Partial<Record<NavKey, NavKey[]>> = {
  home: ["brands", "products", "investment", "contact"],
  brands: ["products", "contact"],
  products: ["investment", "contact"],
  investment: ["products", "contact"],
  about: ["brands", "contact"],
  news: ["brands", "products"],
  contact: ["products", "investment"],
};

const relatedHeading: Record<Locale, string> = {
  de: "Weiterführende Bereiche",
  en: "Related sections",
  fr: "Voir aussi",
  it: "Sezioni correlate",
};

const relatedLabels: Record<Locale, Record<NavKey, string>> = {
  de: {
    home: "Startseite",
    brands: "Unsere Marken",
    products: "Produkte & Leistungen",
    investment: "Investment & Beratung",
    about: "Über Deliza",
    news: "News & Events",
    contact: "Kontakt aufnehmen",
  },
  en: {
    home: "Home",
    brands: "Our brands",
    products: "Products & services",
    investment: "Investment & consulting",
    about: "About Deliza",
    news: "News & events",
    contact: "Get in touch",
  },
  fr: {
    home: "Accueil",
    brands: "Nos marques",
    products: "Produits & services",
    investment: "Investissement & conseil",
    about: "À propos de Deliza",
    news: "Actualités & événements",
    contact: "Nous contacter",
  },
  it: {
    home: "Home",
    brands: "I nostri marchi",
    products: "Prodotti & servizi",
    investment: "Investimento & consulenza",
    about: "Chi è Deliza",
    news: "Notizie & eventi",
    contact: "Contattaci",
  },
};

/**
 * Visible intro block: H2 + lead paragraph + optional H3 highlights + a small
 * set of contextual internal links. Sits right under the hero of each active
 * page to give crawlers (and AI search engines) clean, structured copy.
 */
export default function PageIntro({ nav, className = "" }: PageIntroProps) {
  const { messages, locale } = useTranslation();
  const page = messages.seo.pages[nav];
  if (!page) return null;
  const related = (relatedLinksByNav[nav] ?? []).filter((k) => k !== nav);

  return (
    <section className={`rts-page-intro rts-section-gapBottom mt--60 ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="title-area-left mb--30">
              {page.eyebrow && <span className="pre">{page.eyebrow}</span>}
              <h2 className="title">{page.introTitle}</h2>
            </div>
            <p className="disc">{page.leadParagraph}</p>

            {page.highlights && page.highlights.length > 0 && (
              <div className="row g-4 mt--20">
                {page.highlights.map((h, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="single-page-intro-highlight">
                      <h3 className="title-sm">{h.title}</h3>
                      <p className="disc">{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

           
          </div>
        </div>
      </div>
    </section>
  );
}
