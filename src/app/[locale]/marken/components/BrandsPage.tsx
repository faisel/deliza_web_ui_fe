import DelizaHeader from "@/app/components/DelizaHeader";
import Brands from "@/app/components/Brands";
import Footer from "@/app/components/Footer";
import PageFaq from "@/app/components/PageFaq";
import PageIntro from "@/app/components/PageIntro";
import PageSchema from "@/app/components/PageSchema";
import type { Locale } from "@/i18n/config";

import PartnerBreadcrumbTwo from "./PartnerBreadcrumbTwo";
import BackToTop from "./BackToTop";

interface BrandsPageProps {
  locale: Locale;
}

export default function BrandsPage({ locale }: BrandsPageProps) {
  return (
    <>
      <PageSchema nav="brands" locale={locale} />
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo nav="brands" />
      <PageIntro nav="brands" />
      <Brands className="rts-section-gapBottom" />
      <PageFaq nav="brands" className="" />
      <Footer />
      <BackToTop />
    </>
  );
}
