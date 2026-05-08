import DelizaHeader from "@/app/components/DelizaHeader";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import BodyClass from "../components/BodyClassTwo";
import PartnerBreadcrumbTwo from "../components/PartnerBreadcrumbTwo";
import NotFoundInner from "../components/NotFoundInner";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function NotFoundPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale: Locale = isValidLocale(locale) ? locale : "de";
  const copy = getMessages(validLocale).notFound;

  return (
    <>
      <BodyClass className="account-page-body" />
      <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
      <PartnerBreadcrumbTwo title={copy.heading} />
      <NotFoundInner />
    </>
  );
}
