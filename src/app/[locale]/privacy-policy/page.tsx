import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumbTwo from "./PartnerBreadcrumbTwo";
import Brands from "./Brands";
import CtaInner from "./CtaInner";
import Footer from "../../components/Footer";
import RTL from "./RTL";
import BackToTop from "./BackToTop";
import PrivacyPolicyInner from "./PrivacyPolicyInner";
import { isValidLocale, type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const breadcrumbCopy: Record<Locale, { title: string }> = {
  de: { title: "Datenschutz" },
  en: { title: "Privacy Policy" },
  fr: { title: "Politique de confidentialité" },
  it: { title: "Informativa sulla privacy" },
};

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "de";
  const copy = breadcrumbCopy[validLocale];

  return (
    <>
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo title={copy.title} />
      <PrivacyPolicyInner locale={validLocale} />
      <Brands className="rts-section-gapBottom" />
      <CtaInner />
      <Footer />
      <RTL />
      <BackToTop />
    </>
  );
}
