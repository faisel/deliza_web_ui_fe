import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/config";
import { makeNavMetadata } from "@/lib/page-metadata";
import HomePage from "./components/HomePage";

export const generateMetadata = makeNavMetadata("home");

interface LocaleHomeProps {
  params: Promise<{ locale: string }>;
}

export default async function LocaleHome({ params }: LocaleHomeProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <HomePage locale={locale} />;
}
