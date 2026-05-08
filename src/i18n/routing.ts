import { isValidLocale, type Locale } from "./config";

export type NavKey =
  | "home"
  | "brands"
  | "products"
  | "investment"
  | "about"
  | "news"
  | "contact"
  | "privacy";

/**
 * Subset of NavKey for pages that participate in the shared SEO/intro/FAQ/JSON-LD
 * content system. Footer-only pages like `privacy` have a URL slug but no
 * `seo.pages.<key>` entry in the message bundles.
 */
export type SeoNavKey = Exclude<NavKey, "privacy">;

/**
 * Per-locale URL slug for each main-nav destination. Used to render localized
 * menu links and to translate the slug when switching locales.
 *
 * Empty string for `home` produces the locale-root URL (`/<locale>`).
 */
export const navSlugs: Record<NavKey, Record<Locale, string>> = {
  home: { de: "", en: "", fr: "", it: "" },
  brands: { de: "marken", en: "brands", fr: "marques", it: "marchi" },
  products: {
    de: "produkte-leistungen",
    en: "products-services",
    fr: "produits-services",
    it: "prodotti-servizi",
  },
  investment: {
    de: "investment-beratung",
    en: "investment-consulting",
    fr: "investissement-conseil",
    it: "investimento-consulenza",
  },
  about: {
    de: "ueber-uns",
    en: "about",
    fr: "a-propos",
    it: "chi-siamo",
  },
  news: {
    de: "news-events",
    en: "news-events",
    fr: "actualites-evenements",
    it: "notizie-eventi",
  },
  contact: {
    de: "kontakt",
    en: "contact",
    fr: "contact",
    it: "contatto",
  },
  privacy: {
    de: "datenschutz",
    en: "privacy-policy",
    fr: "politique_de_confidentialite",
    it: "Informativa_sulla_privacy",
  },
};

const navKeys = Object.keys(navSlugs) as NavKey[];

/** Build the localized URL for a given main-nav destination. */
export function navHref(key: NavKey, locale: Locale): string {
  const slug = navSlugs[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/** Find the NavKey that owns a given slug under a specific locale. */
function findNavKeyBySlug(slug: string, locale: Locale): NavKey | undefined {
  if (!slug) return "home";
  return navKeys.find((key) => navSlugs[key][locale] === slug);
}

/**
 * Prepend the locale to an internal path. External links (http/https/mailto/tel/#)
 * are returned unchanged. Already-localized paths are returned unchanged too.
 */
export function localizePath(path: string, locale: Locale): string {
  if (!path) return `/${locale}`;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;

  const segments = normalized.split("/").filter(Boolean);
  if (segments.length > 0 && isValidLocale(segments[0])) {
    return normalized;
  }
  return `/${locale}${normalized}`;
}

/**
 * Replace the locale prefix on the current pathname with the next locale.
 * If the first path segment is a known nav slug for the current locale, the
 * slug is also translated to the next locale (e.g. /de/marken -> /fr/marques).
 * Sub-paths and unrecognized slugs are preserved verbatim.
 */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const segments = (pathname || "/").split("/").filter(Boolean);
  if (segments.length === 0) return `/${nextLocale}`;

  const [maybeLocale, ...rest] = segments;
  if (!isValidLocale(maybeLocale)) {
    return "/" + [nextLocale, ...segments].join("/");
  }
  if (rest.length === 0) return `/${nextLocale}`;

  const [firstSlug, ...subPath] = rest;
  const navKey = findNavKeyBySlug(firstSlug, maybeLocale);
  if (navKey) {
    const translated = navSlugs[navKey][nextLocale];
    const head = translated ? `/${nextLocale}/${translated}` : `/${nextLocale}`;
    return subPath.length ? `${head}/${subPath.join("/")}` : head;
  }
  return "/" + [nextLocale, ...rest].join("/");
}
