import HeaderOne from "@/app/home-1/HeaderOne";
import BreadCrumbOne from "@/app/[locale]/blog/BreadCrumbOne";
import Brands from "@/app/components/Brands";
import CtaInner from "@/app/[locale]/about/CtaInner";
import Footer from "@/app/components/Footer";
import RTL from "@/app/home-1/RTL";
import BackToTop from "@/app/home-1/BackToTop";
import PrivacyPolicyInner from "./PrivacyPolicyInner";
import { isValidLocale, type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const breadcrumbCopy: Record<Locale, { bgTitle: string; title: string; description: string }> = {
  de: {
    bgTitle: "Datenschutz",
    title: "Datenschutz",
    description: "Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
  },
  en: {
    bgTitle: "Privacy Policy",
    title: "Privacy Policy",
    description: "Information about how we process your personal data.",
  },
  fr: {
    bgTitle: "Politique de confidentialité",
    title: "Politique de confidentialité",
    description: "Informations sur le traitement de vos données personnelles.",
  },
  it: {
    bgTitle: "Informativa sulla privacy",
    title: "Informativa sulla privacy",
    description: "Informazioni sul trattamento dei vostri dati personali.",
  },
};

export default async function PrivacyPolicyPage({ params }: PageProps) {
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
      <PrivacyPolicyInner locale={validLocale} />
      <Brands className="rts-section-gapBottom" />
      <CtaInner />
      <Footer />
      <RTL />
      <BackToTop />
    </>
  );
}
