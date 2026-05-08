import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/config";
import { makeNavMetadata } from "@/lib/page-metadata";
import HomeDePage from "./home/pages/de/page";
import HomeEnPage from "./home/pages/en/page";
import HomeFrPage from "./home/pages/fr/page";
import HomeItPage from "./home/pages/it/page";

export const generateMetadata = makeNavMetadata("home");

interface LocaleHomeProps {
  params: Promise<{ locale: string }>;
}

export default async function LocaleHome({ params }: LocaleHomeProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  switch (locale) {
    case "de":
      return <HomeDePage />;
    case "en":
      return <HomeEnPage />;
    case "fr":
      return <HomeFrPage />;
    case "it":
      return <HomeItPage />;
  }
}
