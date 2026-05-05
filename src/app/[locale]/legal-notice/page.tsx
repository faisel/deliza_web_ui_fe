import HeaderOne from "@/app/home-1/HeaderOne";
import BreadCrumbOne from "@/app/[locale]/blog/BreadCrumbOne";
import Brands from "@/app/components/Brands";
import CtaInner from "@/app/[locale]/about/CtaInner";
import Footer from "@/app/components/Footer";
import RTL from "@/app/home-1/RTL";
import BackToTop from "@/app/home-1/BackToTop";
import LegalNoticeInner from "./LegalNoticeInner";
import { isValidLocale, type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const breadcrumbCopy: Record<Locale, { bgTitle: string; title: string; description: string }> = {
  de: {
    bgTitle: "Impressum",
    title: "Impressum",
    description: "Angaben gemäß den gesetzlichen Vorschriften.",
  },
  en: {
    bgTitle: "Legal Notice",
    title: "Legal Notice",
    description: "Information provided in accordance with legal requirements.",
  },
  fr: {
    bgTitle: "Mentions légales",
    title: "Mentions légales",
    description: "Informations fournies conformément aux exigences légales.",
  },
  it: {
    bgTitle: "Note legali",
    title: "Note legali",
    description: "Informazioni fornite in conformità con i requisiti di legge.",
  },
};

export default async function LegalNoticePage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "de";
  const copy = breadcrumbCopy[validLocale];

  return (
    <>
      <HeaderOne logoSrc="/assets/images/logo/01.svg" />
      <BreadCrumbOne
        bgTitle={copy.bgTitle}
        title={copy.title}
        description={copy.description}
      />
      <LegalNoticeInner locale={validLocale} />
      <Brands className="rts-section-gapBottom" />
      <CtaInner />
      <Footer />
      <RTL />
      <BackToTop />
    </>
  );
}
