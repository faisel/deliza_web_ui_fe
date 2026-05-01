"use client";

import { useEffect } from "react";
import type { Locale } from "./config";

/**
 * Keeps `<html lang>` in sync with the active locale on client-side navigation.
 * The initial value is set by an inline script in the root layout's <head>
 * before hydration, so this runs only when the user navigates between locales.
 */
export function HtmlLangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, [locale]);
  return null;
}
