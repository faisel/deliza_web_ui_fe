import ServiceDetailPage from "./ServiceDetailPage";
import { makeServiceMetadata } from "./metadata";

export const generateMetadata = makeServiceMetadata("7310");

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  return <ServiceDetailPage serviceId="7310" rawLocale={locale} />;
}
