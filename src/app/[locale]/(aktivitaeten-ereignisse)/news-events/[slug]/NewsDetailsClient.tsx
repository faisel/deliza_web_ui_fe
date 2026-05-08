"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import DelizaHeader from "@/app/components/DelizaHeader";
import BrandInner from "./BrandInner";
import CtaInner from "./CtaInner";
import Footer from "../../../../components/Footer";
import BackToTop from "./BackToTop";
import news from "@/app/data/news";
import { useTranslation } from "@/i18n/useTranslation";
import type { Locale } from "@/i18n/config";

const localeTags: Record<Locale, string> = {
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
  it: "it-IT",
};

const notFoundCopy: Record<Locale, string> = {
  en: "Article not found.",
  de: "Artikel nicht gefunden.",
  fr: "Article introuvable.",
  it: "Articolo non trovato.",
};

function formatDate(date: string, locale: Locale): string {
  try {
    return new Date(date).toLocaleDateString(localeTags[locale], {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

export default function NewsDetailsClient() {
  const { slug } = useParams();
  const { locale } = useTranslation();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return (
      <>
        <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
        <div className="container py--80">
          <p>{notFoundCopy[locale]}</p>
        </div>
        <Footer />
      </>
    );
  }

  const t = item.translations[locale];

  return (
    <>
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <div className="blog-details-banner-large-image" />
      <div className="blog-details-area-main-wrapper pt--80">
        <div className="container-blog-details">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-details-area-inner-content">
                <div className="image-area mb--30">
                  <Image
                      src={item.image}
                      style={{ width: "100%" }}
                      alt={t.title}
                      width={800}
                      height={600}
                  />
                </div>
                <div className="blog-details-top-wrapper">
                  <div className="single">
                    <i className="fa-solid fa-clock" />
                    <span>{formatDate(item.date, locale)}</span>
                  </div>
                </div>
                <h2 className="title">{t.title}</h2>
                <p className="disc"><strong>{t.teaser}</strong></p>
                <p className="disc">{t.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandInner className="rts-section-gap" />
      <CtaInner />
      <Footer />
      <BackToTop />
    </>
  );
}
