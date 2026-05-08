import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumbTwo from "../components/PartnerBreadcrumbTwo";
import Brands from "../components/Brands";
import CtaInner from "../components/CtaInner";
import Footer from "../../../components/Footer";
import BackToTop from "../components/BackToTop";
import PrivacyPolicyInner from "../components/PrivacyPolicyInner";
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
      <BackToTop />
    </>
  );
}
