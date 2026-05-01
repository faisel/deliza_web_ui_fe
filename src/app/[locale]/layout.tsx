import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { I18nProvider } from "@/i18n/I18nProvider";
import { HtmlLangSync } from "@/i18n/HtmlLangSync";
import { locales, isValidLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

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
  const messages = getMessages(locale);

  return {
    title: messages.metadata.home.title,
    description: messages.metadata.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: "/de",
        en: "/en",
        fr: "/fr",
        it: "/it",
        "x-default": "/de",
      },
    },
    openGraph: {
      title: messages.metadata.home.title,
      description: messages.metadata.home.description,
      locale,
    },
  };
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
