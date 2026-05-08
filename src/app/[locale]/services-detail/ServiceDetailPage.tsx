import React from "react";
import DelizaHeader from "@/app/components/DelizaHeader";
import RTL from "@/app/home-1/RTL";
import BackToTop from "@/app/home-1/BackToTop";
import Footer from "@/app/components/Footer";
import { isValidLocale, defaultLocale } from "@/i18n/config";
import {
  getServiceContent,
  SERVICE_IMAGES,
  type ServiceId,
} from "./content";
import PartnerBreadcrumbTwo from "./PartnerBreadcrumbTwo";
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
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo title={content.heroTitle} image={images.banner} />
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
