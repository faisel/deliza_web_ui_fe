import { makeNavMetadata } from "@/lib/page-metadata";
import DelizaHeader from "@/app/components/DelizaHeader";
import Brands from "../components/Brands";
import Footer from "../../../components/Footer";
import BackToTop from "../components/BackToTop";
import PartnerBreadcrumbTwo from "../components/PartnerBreadcrumbTwo";
import PageIntro from "../components/PageIntro";
import PageFaq from "../components/PageFaq";
import PageSchema from "../components/PageSchema";
import { isValidLocale } from "@/i18n/config";

export const generateMetadata = makeNavMetadata("investment");

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function InvestissementConseilPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "de";

  return (
    <>
      <PageSchema nav="investment" locale={locale} />
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo nav="investment" />
      <PageIntro nav="investment" />

      <Brands />
      <PageFaq nav="investment" />
      <Footer />
      <BackToTop />
    </>
  );
}
