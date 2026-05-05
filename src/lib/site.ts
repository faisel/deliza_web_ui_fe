import type { Locale } from "@/i18n/config";

/**
 * Production base URL for canonical/hreflang/sitemap.
 * Override with NEXT_PUBLIC_SITE_URL at build time when needed.
 */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.deliza.ch").replace(
    /\/$/,
    ""
  );

export const BRAND_NAME = "Deliza GmbH";
export const BRAND_LEGAL_NAME = "Deliza GmbH";

export const BRAND_CONTACT = {
  phoneDisplay: "081 661 23 45",
  phoneTel: "+41816612345",
  phoneE164: "+41 81 661 23 45",
  email: "info@giessenpark.com",
  street: "Flurweg 4",
  postalCode: "7310",
  city: "Bad Ragaz",
  region: "St. Gallen",
  country: "CH",
  countryName: "Switzerland",
} as const;

export const SOCIAL_LINKS: string[] = [
  // Add when confirmed by client (Instagram, LinkedIn, etc.)
];

export const DEFAULT_OG_IMAGE = {
  url: "/assets/images/deliza/about.jpg",
  width: 1200,
  height: 630,
  alt: "Deliza GmbH – Hospitality, Gastronomy & Innovation",
} as const;

/** Build an absolute URL for a path. Use for OG images, hreflang, canonical. */
export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Map our i18n locale to the BCP47 language tag used by hreflang/og:locale. */
export function bcp47(locale: Locale): string {
  const map: Record<Locale, string> = {
    de: "de-CH",
    en: "en",
    fr: "fr-CH",
    it: "it-CH",
  };
  return map[locale];
}
