import BannerOne from "../home-1/Banner";
import AboutOne from "../home-1/AboutOne";
import ServicesOne from "../home-1/ServicesOne";
import CtaOne from "../home-1/CtaOne";
import BusinessGoalOne from "../home-1/BusinessGoalOne";
import CounterUpOne from "../home-1/CounterUpOne";
import ProjectOne from "../home-1/ProjectOne";
import BrandOne from "../home-1/BrandOne";
import TeamOne from "../home-1/TeamOne";
import TestimonialsOne from "../home-1/TestimonialsOne";
import AppointmentOne from "../home-1/AppointmentOne";
import HomeBlogOne from "../home-1/HomeBlogOne";
import FooterOne from "../home-1/FooterOne";
import HeaderOne from "../home-1/HeaderOne";
import BackToTop from "../home-1/BackToTop";

export default function HomePage() {
  return (
    <>
      <HeaderOne logoSrc="/assets/images/logo/deliza_web_b.png" logoAlt="Deliza" />
      <BannerOne />
      <AboutOne />
      <ServicesOne />
      <CtaOne />
      <BusinessGoalOne className="rts-section-gap" />
      <CounterUpOne />
      <ProjectOne className="gallery-bg" />
      <BrandOne />
      <TeamOne />
      <TestimonialsOne />
      <AppointmentOne />
      <HomeBlogOne
        className="rts-section-gapBottom pt--40 mb--310"
        titleClassName="title-style-two"
      />
      <FooterOne />
      <BackToTop />
    </>
  );
}
