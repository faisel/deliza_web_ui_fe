import type { Metadata } from "next";
import { isValidLocale } from "@/i18n/config";
import type { SeoNavKey } from "@/i18n/routing";
import { buildPageMetadata } from "./seo";

/**
 * Factory that returns a Next.js generateMetadata function pinned to a
 * specific main-nav destination. Each active slug page imports this helper
 * with its own SeoNavKey; metadata title/description and OG content come from
 * the per-locale message bundle, and canonical points to the locale-correct
 * URL for the navKey.
 */
export function makeNavMetadata(nav: SeoNavKey) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    if (!isValidLocale(locale)) return {};
    return buildPageMetadata(nav, locale);
  };
}
