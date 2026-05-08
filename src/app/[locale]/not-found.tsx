"use client";

import DelizaHeader from "@/app/components/DelizaHeader";
import { useTranslation } from "@/i18n/useTranslation";
import BodyClass from "./(404)/components/BodyClassTwo";
import PartnerBreadcrumbTwo from "./(404)/components/PartnerBreadcrumbTwo";
import NotFoundInner from "./(404)/components/NotFoundInner";

export default function LocaleNotFound() {
  const { messages } = useTranslation();

  return (
    <>
      <BodyClass className="account-page-body" />
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo title={messages.notFound.heading} />
      <NotFoundInner />
    </>
  );
}
