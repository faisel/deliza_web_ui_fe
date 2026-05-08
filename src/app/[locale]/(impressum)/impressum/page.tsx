import DelizaHeader from "@/app/components/DelizaHeader";
import Footer from "../../../components/Footer";
import Brands from "../components/Brands";
import CtaInner from "../components/CtaInner";
import BackToTop from "../components/BackToTop";
import PartnerBreadcrumbTwo from "../components/PartnerBreadcrumbTwo";
import LegalNoticeInner from "../components/LegalNoticeInner";
import { isValidLocale, type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ImpressumPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "de";

  return (
    <>
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo title="Impressum" />
      <LegalNoticeInner locale={validLocale} />
      <Brands className="rts-section-gapBottom" />
      <CtaInner />
      <Footer />
      <BackToTop />
    </>
  );
}
