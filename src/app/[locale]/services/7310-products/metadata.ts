import type { Metadata } from "next";
import { locales, isValidLocale, type Locale } from "@/i18n/config";
import {
  BRAND_NAME,
  DEFAULT_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  bcp47,
} from "@/lib/site";
import {
  getServiceContent,
  getServicePath,
  type ServiceId,
} from "./content";

/**
 * Build a generateMetadata function for a service detail page.
 * Sets canonical to the locale-correct URL and emits hreflang alternates
 * for every supported locale plus an x-default fallback to the German URL.
 */
export function makeServiceMetadata(serviceId: ServiceId) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale: rawLocale } = await params;
    if (!isValidLocale(rawLocale)) return {};
    const locale: Locale = rawLocale;

    const content = getServiceContent(serviceId, locale);
    const canonicalPath = getServicePath(serviceId, locale);

    const languages = locales.reduce<Record<string, string>>((acc, l) => {
      acc[bcp47(l)] = absoluteUrl(getServicePath(serviceId, l));
      return acc;
    }, {});
    languages["x-default"] = absoluteUrl(getServicePath(serviceId, "de"));

    const ogImage = absoluteUrl(DEFAULT_OG_IMAGE.url);

    return {
      metadataBase: new URL(SITE_URL),
      title: content.metaTitle,
      description: content.metaDescription,
      alternates: {
        canonical: canonicalPath,
        languages,
      },
      openGraph: {
        type: "website",
        url: absoluteUrl(canonicalPath),
        siteName: BRAND_NAME,
        title: content.metaTitle,
        description: content.metaDescription,
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
        title: content.metaTitle,
        description: content.metaDescription,
        images: [ogImage],
      },
    };
  };
}
