"use client";
import React from 'react'
import { useTranslation } from "@/i18n/useTranslation";
import { localizePath, navHref, type NavKey } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";

interface FooterProps {
  id?: string
}

const CONTACT_PHONE = "081 661 23 45";
const CONTACT_PHONE_HREF = "tel:+41816612345";
const CONTACT_ADDRESS = "Flurweg 4, 7310 Bad Ragaz";
const CONTACT_EMAIL = "info@giessenpark.com";
const BRAND_TITLE = "Deliza GmbH";

const bottomLinkLabels: Record<Locale, { legalNotice: string; privacyPolicy: string }> = {
  de: { legalNotice: "Impressum", privacyPolicy: "Datenschutz" },
  en: { legalNotice: "Legal Notice", privacyPolicy: "Privacy Policy" },
  fr: { legalNotice: "Mentions légales", privacyPolicy: "Politique de confidentialité" },
  it: { legalNotice: "Note legali", privacyPolicy: "Informativa sulla privacy" },
};

const copyrightSuffix: Record<Locale, string> = {
  de: "Alle Rechte vorbehalten",
  en: "All rights reserved",
  fr: "Tous droits réservés",
  it: "Tutti i diritti riservati",
};

const ctaCopy: Record<Locale, { titleLead: string; titleRest: string; description: string; button: string }> = {
  de: {
    titleLead: "Bereit,",
    titleRest: "etwas Besonderes zu schaffen?",
    description:
      "Wo Gastronomie auf Innovation trifft, schaffen wir einzigartige Erlebnisse durch Kulinarik, Produkte und Hospitality-Konzepte.",
    button: "Angebot anfragen",
  },
  en: {
    titleLead: "Ready To",
    titleRest: "Create Something Exceptional?",
    description:
      "Where gastronomy meets innovation, we craft meaningful experiences through dining, products, and hospitality concepts.",
    button: "Get a Quote",
  },
  fr: {
    titleLead: "Prêt à",
    titleRest: "créer quelque chose d’exceptionnel ?",
    description:
      "Là où la gastronomie rencontre l’innovation, nous créons des expériences uniques à travers la cuisine, les produits et les concepts d’hospitalité.",
    button: "Demander un devis",
  },
  it: {
    titleLead: "Pronto a",
    titleRest: "creare qualcosa di eccezionale?",
    description:
      "Dove la gastronomia incontra l’innovazione, creiamo esperienze uniche attraverso cucina, prodotti e concetti di ospitalità.",
    button: "Richiedi un preventivo",
  },
};

const contactTitle: Record<Locale, string> = {
  de: "Kontakt",
  en: "Contact Us",
  fr: "Contactez-nous",
  it: "Contattaci",
};

const brandNavItems: { key: Exclude<NavKey, "home" | "about">; label: Record<Locale, string> }[] = [
  {
    key: "brands",
    label: {
      de: "Unsere Marken",
      en: "Our Brands",
      fr: "Nos marques",
      it: "I nostri marchi",
    },
  },
  {
    key: "products",
    label: {
      de: "Produkte & Leistungen",
      en: "Products & Services",
      fr: "Produits & services",
      it: "Prodotti & servizi",
    },
  },
  {
    key: "investment",
    label: {
      de: "Investment & Beratung",
      en: "Investment & Consulting",
      fr: "Investissement & conseil",
      it: "Investimento & consulenza",
    },
  },
  {
    key: "news",
    label: {
      de: "News & Events",
      en: "News & Events",
      fr: "Actualités & événements",
      it: "Notizie & eventi",
    },
  },
  {
    key: "contact",
    label: {
      de: "Kontakt & Zusammenarbeit",
      en: "Contact & Collaborate",
      fr: "Contact & collaboration",
      it: "Contatto & collaborazione",
    },
  },
];

function Footer({ id }: FooterProps) {
  const { locale } = useTranslation();
  const labels = bottomLinkLabels[locale];
  const cta = ctaCopy[locale];
  return (
    <>
      <div id={id} className="rts-footer-area pt--100 pb--100 pt_sm--50 pb_sm--40 footer-two footer-bg-two">
        <div className="container">
          <div className="row">
            {/* Column 1: CTA */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="footer-two-single-wized left">
                <h3 className="title animated fadeIn">
                  <span>{cta.titleLead}</span> <br />
                  {cta.titleRest}
                </h3>
                <p className="disc">
                  {cta.description}
                </p>
                <a className="rts-btn btn-primary" href="#">
                  {cta.button}
                </a>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--50">
              <div className="footer-two-single-wized">
                <div className="wized-title-area">
                  <h5 className="wized-title">{contactTitle[locale]}</h5>
                </div>
                <div className="wized-2-body">
                  <div className="contact-info-1">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="disc">
                      <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
                    </div>
                  </div>
                  <div className="contact-info-1">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="disc">
                      <a href="#">{CONTACT_ADDRESS}</a>
                    </div>
                  </div>
                  <div className="contact-info-1">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="disc">
                      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 + 4 merged: Brand + nav links (wider on xl) */}
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--30 mt_md--30">
              <div className="footer-two-single-wized two">
                <div className="wized-title-area">
                  <h5 className="wized-title">{BRAND_TITLE}</h5>
                </div>
                <div className="wized-2-body">
                  <ul>
                    {brandNavItems.map((item) => (
                      <li key={item.key}>
                        <a href={navHref(item.key, locale)}>
                          <i className="fa-solid fa-angles-right" />
                          {item.label[locale]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-copy-right-1 ptb--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-h-2-wrapper">
                <p className="disc">
                  Deliza GmbH © {new Date().getFullYear()}. {copyrightSuffix[locale]}
                </p>
                <div className="right">
                  <ul>
                    <li>
                      <a href={localizePath("/legal-notice", locale)}>{labels.legalNotice}</a>
                    </li>
                    <li>
                      <a href={localizePath("/privacy-policy", locale)}>{labels.privacyPolicy}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
