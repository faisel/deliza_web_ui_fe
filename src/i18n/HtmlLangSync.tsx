"use client";

import { useLayoutEffect } from "react";
import type { Locale } from "./config";

/**
 * Aligns `<html lang>` with the active `[locale]` segment after mount.
 * Do not set `lang` from an inline head script: it runs before React hydrates
 * and causes a mismatch when the URL locale differs from `defaultLocale`.
 */
export function HtmlLangSync({ locale }: { locale: Locale }) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
