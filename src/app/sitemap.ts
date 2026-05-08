import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { navHref, type NavKey } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/site";
import news, { getNewsSlug } from "@/app/data/news";

const NAV_KEYS: NavKey[] = [
  "home",
  "brands",
  "products",
  "investment",
  "about",
  "news",
  "contact",
];

/**
 * Static sitemap covering only the canonical, locale-correct URLs for each
 * active main-nav page in every supported locale, plus internal news detail
 * pages. Compatible with `output: 'export'` — Next emits /sitemap.xml at build.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const nav of NAV_KEYS) {
    for (const locale of locales) {
      const url = absoluteUrl(navHref(nav, locale));
      const languages = locales.reduce<Record<string, string>>((acc, l) => {
        acc[l] = absoluteUrl(navHref(nav, l));
        return acc;
      }, {});
      entries.push({
        url,
        lastModified: now,
        changeFrequency: nav === "news" ? "weekly" : "monthly",
        priority: nav === "home" ? 1 : nav === "contact" ? 0.7 : 0.8,
        alternates: { languages },
      });
    }
  }

  for (const item of news) {
    if (item.externalUrl) continue;
    const lastModified = new Date(item.date);
    for (const locale of locales) {
      const newsBase = navHref("news", locale);
      const url = absoluteUrl(`${newsBase}/${getNewsSlug(item, locale)}`);
      const languages = locales.reduce<Record<string, string>>((acc, l) => {
        acc[l] = absoluteUrl(`${navHref("news", l)}/${getNewsSlug(item, l)}`);
        return acc;
      }, {});
      entries.push({
        url,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
