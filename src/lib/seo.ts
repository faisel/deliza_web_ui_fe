import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { navHref, type NavKey } from "@/i18n/routing";
import {
  BRAND_NAME,
  DEFAULT_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  bcp47,
} from "./site";

/**
 * Build localized Metadata for an active main-nav page.
 *
 * - canonical points to the locale-correct URL for this nav key
 * - alternates.languages includes one entry per locale + x-default (de)
 * - title/description are pulled from the per-locale message bundle
 */
export function buildPageMetadata(nav: NavKey, locale: Locale): Metadata {
  const messages = getMessages(locale);
  const page = messages.seo.pages[nav];
  const title = page.metaTitle;
  const description = page.metaDescription;

  const canonicalPath = navHref(nav, locale);
  const languages = locales.reduce<Record<string, string>>((acc, l) => {
    acc[bcp47(l)] = absoluteUrl(navHref(nav, l));
    return acc;
  }, {});
  // Tell crawlers which locale to fall back to.
  languages["x-default"] = absoluteUrl(navHref(nav, "de"));

  const ogImage = absoluteUrl(DEFAULT_OG_IMAGE.url);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(canonicalPath),
      siteName: BRAND_NAME,
      title,
      description,
      locale: bcp47(locale),
      images: [
        {
          url: ogImage,
          width: DEFAULT_OG_IMAGE.width,
          height: DEFAULT_OG_IMAGE.height,
          alt: DEFAULT_OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
