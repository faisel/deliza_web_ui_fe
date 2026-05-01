import { isValidLocale, type Locale } from "./config";

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
 * If the pathname doesn't include a locale prefix, the new locale is prepended.
 */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const segments = (pathname || "/").split("/").filter(Boolean);
  if (segments.length > 0 && isValidLocale(segments[0])) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }
  return "/" + segments.join("/");
}
