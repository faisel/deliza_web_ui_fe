import news, { getNewsSlug } from "@/app/data/news";
import { isValidLocale, locales, type Locale } from "@/i18n/config";
import NewsDetailsClient from "./NewsDetailsClient";

interface RouteParams {
  locale: string;
}

/**
 * Generate the per-locale (locale, slug) combinations that should be
 * pre-rendered. Internal items only — externalUrl items don't get a detail
 * page. When a locale is given, only that locale's slugs are emitted, so
 * each locale gets its own URL slug variants.
 */
export function generateStaticParams({ params }: { params?: RouteParams }) {
  const locale = params?.locale && isValidLocale(params.locale)
    ? (params.locale as Locale)
    : null;

  const targetLocales: Locale[] = locale ? [locale] : [...locales];
  const slugs = new Set<string>();
  for (const l of targetLocales) {
    for (const item of news) {
      if (item.externalUrl) continue;
      slugs.add(getNewsSlug(item, l));
    }
  }
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default function NewsDetailsPage() {
  return <NewsDetailsClient />;
}
