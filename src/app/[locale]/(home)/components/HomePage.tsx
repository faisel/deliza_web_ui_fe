import DelizaHeader from "@/app/components/DelizaHeader";
import Brands from "@/app/components/Brands";
import Footer from "@/app/components/Footer";
import PageFaq from "@/app/components/PageFaq";
import PageSchema from "@/app/components/PageSchema";
import type { Locale } from "@/i18n/config";

import BodyClass from "./BodyClassTwo";
import AboutTen from "./AboutTen";
import BackToTop from "./BackToTop";
import DelizaBanner from "./DelizaBanner";
import DelizaServices from "./DelizaServices";
import DelizaDigital from "./DelizaDigital";
import DelizaInvestments from "./DelizaInvestments";
import DelizaNews from "./DelizaNews";
import DelizaTestimonials from "./DelizaTestimonials";

interface HomePageProps {
  locale: Locale;
}

export default function HomePage({ locale }: HomePageProps) {
  return (
    <>
      <PageSchema nav="home" locale={locale} />
      <BodyClass className="overflow-x-visible home-page" />

      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />

      <DelizaBanner />

      <AboutTen />

      <Brands className="home-section" />

      <DelizaServices />
      <DelizaDigital />
      <DelizaInvestments />

      <DelizaNews />
      <DelizaTestimonials />

      <PageFaq nav="home" className="home-section" />

      <Footer />
      <BackToTop />
    </>
  );
}
