import DelizaHeader from "@/app/components/DelizaHeader";
import Brands from "../components/Brands";
import CtaInner from "../components/CtaInner";
import Footer from "../../../components/Footer";
import BackToTop from "../components/BackToTop";
import NewsListInner from "../components/NewsListInner";
import PartnerBreadcrumbTwo from "../components/PartnerBreadcrumbTwo";
import PageIntro from "../components/PageIntro";
import PageFaq from "../components/PageFaq";
import PageSchema from "../components/PageSchema";
import { isValidLocale } from "@/i18n/config";
import { makeNavMetadata } from "@/lib/page-metadata";

export const generateMetadata = makeNavMetadata("news");

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function NewsEventsPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "de";

  return (
    <>
      <PageSchema nav="news" locale={locale} />
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo nav="news" />
      <PageIntro nav="news" />
      <NewsListInner />
      <PageFaq nav="news" />
      <Brands className="rts-section-gapBottom" />
      <CtaInner />
      <Footer />
      <BackToTop />
    </>
  );
}
