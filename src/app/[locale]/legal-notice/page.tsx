import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumbTwo from "./PartnerBreadcrumbTwo";
import Brands from "./Brands";
import CtaInner from "./CtaInner";
import Footer from "../../components/Footer";
import RTL from "./RTL";
import BackToTop from "./BackToTop";
import LegalNoticeInner from "./LegalNoticeInner";
import { isValidLocale, type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const breadcrumbCopy: Record<Locale, { title: string }> = {
  de: { title: "Impressum" },
  en: { title: "Legal Notice" },
  fr: { title: "Mentions légales" },
  it: { title: "Note legali" },
};

export default async function LegalNoticePage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "de";
  const copy = breadcrumbCopy[validLocale];

  return (
    <>
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo title={copy.title} />
      <LegalNoticeInner locale={validLocale} />
      <Brands className="rts-section-gapBottom" />
      <CtaInner />
      <Footer />
      <RTL />
      <BackToTop />
    </>
  );
}
