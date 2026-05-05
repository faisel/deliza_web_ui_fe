import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { I18nProvider } from "@/i18n/I18nProvider";
import { HtmlLangSync } from "@/i18n/HtmlLangSync";
import { locales, isValidLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata("home", locale);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <I18nProvider locale={locale as Locale}>
      <HtmlLangSync locale={locale as Locale} />
      {children}
    </I18nProvider>
  );
}
