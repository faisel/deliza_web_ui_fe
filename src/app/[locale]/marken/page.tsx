import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/config";
import { makeNavMetadata } from "@/lib/page-metadata";
import BrandsDePage from "./pages/marken/page";
import BrandsEnPage from "./pages/brands/page";
import BrandsFrPage from "./pages/marques/page";
import BrandsItPage from "./pages/marchi/page";

export const generateMetadata = makeNavMetadata("brands");

interface BrandsRouteProps {
  params: Promise<{ locale: string }>;
}

export default async function BrandsRoute({ params }: BrandsRouteProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  switch (locale) {
    case "de":
      return <BrandsDePage />;
    case "en":
      return <BrandsEnPage />;
    case "fr":
      return <BrandsFrPage />;
    case "it":
      return <BrandsItPage />;
  }
}
