import ServiceDetailPage from "@/app/[locale]/services-detail/ServiceDetailPage";
import { makeServiceMetadata } from "@/app/[locale]/services-detail/metadata";

export const generateMetadata = makeServiceMetadata("giessenpark");

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  return <ServiceDetailPage serviceId="giessenpark" rawLocale={locale} />;
}
