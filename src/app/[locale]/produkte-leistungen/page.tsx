import { makeNavMetadata } from "@/lib/page-metadata";
import HeaderOne from "@/app/[locale]/produkte-leistungen/HeaderOne";
import Brands from "@/app/[locale]/produkte-leistungen/Brands";
import CtaInner from "@/app/[locale]/produkte-leistungen/CtaInner";
import Footer from "@/app/[locale]/produkte-leistungen/Footer";
import RTL from "@/app/[locale]/produkte-leistungen/RTL";
import BackToTop from "@/app/[locale]/produkte-leistungen/BackToTop";
import ProjectTwo from "@/app/[locale]/produkte-leistungen/ProjectTwo";
import PartnerBreadcrumbTwo from "@/app/[locale]/produkte-leistungen/PartnerBreadcrumbTwo";
import PageIntro from "@/app/[locale]/produkte-leistungen/PageIntro";
import PageFaq from "@/app/[locale]/produkte-leistungen/PageFaq";
import PageSchema from "@/app/[locale]/produkte-leistungen/PageSchema";
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
      <HeaderOne logoSrc="/assets/images/logo/01.svg" />
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
