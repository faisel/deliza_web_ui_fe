import React from "react";
import HeaderOne from "@/app/home-1/HeaderOne";
import RTL from "@/app/home-1/RTL";
import BackToTop from "@/app/home-1/BackToTop";
import Footer from "@/app/components/Footer";
import { isValidLocale, defaultLocale } from "@/i18n/config";
import {
  getServiceContent,
  SERVICE_IMAGES,
  type ServiceId,
} from "./content";
import ServiceDetailHero from "./ServiceDetailHero";
import ServiceDetailMain from "./ServiceDetailMain";

interface Props {
  serviceId: ServiceId;
  rawLocale: string;
}

function ServiceDetailPage({ serviceId, rawLocale }: Props) {
  const locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale;
  const content = getServiceContent(serviceId, locale);
  const images = SERVICE_IMAGES[serviceId];

  return (
    <>
      <HeaderOne logoSrc="/assets/images/logo/01.svg" />
      <ServiceDetailHero content={content} />
      <ServiceDetailMain
        serviceId={serviceId}
        content={content}
        images={images}
      />
      <Footer />
      <RTL />
      <BackToTop />
    </>
  );
}

export default ServiceDetailPage;
