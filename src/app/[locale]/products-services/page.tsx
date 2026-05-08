import { makeNavMetadata } from "@/lib/page-metadata";
import DelizaHeader from "@/app/components/DelizaHeader";
import Brands from "./Brands";
import Footer from "../../components/Footer";
import RTL from "./RTL";
import BackToTop from "./BackToTop";
import ProjectTwo from "./ProjectTwo";
import PartnerBreadcrumbTwo from "./PartnerBreadcrumbTwo";
import PageIntro from "./PageIntro";
import PageFaq from "./PageFaq";
import PageSchema from "./PageSchema";
import { isValidLocale } from "@/i18n/config";

export const generateMetadata = makeNavMetadata("products");

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProdukteLeistungenPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : "de";

  return (
    <>
      <PageSchema nav="products" locale={locale} />
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo nav="products" />
      <PageIntro nav="products" />
      <ProjectTwo className="pt--120" />
      <PageFaq nav="products" />
      <Brands className="rts-section-gap" />

      <Footer />
      <RTL />
      <BackToTop />
    </>
  );
}
