import HeaderOne from "@/app/home-1/HeaderOne";
import Brands from "@/app/components/Brands";
import CtaInner from "@/app/[locale]/about/CtaInner";
import Footer from "@/app/components/Footer";
import RTL from "@/app/home-1/RTL";
import BackToTop from "@/app/home-1/BackToTop";
import NewsListInner from "./NewsListInner";
import PartnerBreadcrumbTwo from "./PartnerBreadcrumbTwo";
import PageIntro from "@/app/components/PageIntro";
import PageFaq from "@/app/components/PageFaq";
import PageSchema from "@/app/components/PageSchema";
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
      <HeaderOne logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo nav="news" />
      <PageIntro nav="news" />
      <NewsListInner />
      <PageFaq nav="news" />
      <Brands className="rts-section-gapBottom" />
      <CtaInner />
      <Footer />
      <RTL />
      <BackToTop />
    </>
  );
}
