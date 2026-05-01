"use client";

import { useContext } from "react";
import { I18nContext, type I18nContextValue } from "./I18nProvider";

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error(
      "useTranslation must be used inside <I18nProvider>. Make sure your route lives under src/app/[locale]."
    );
  }
  return ctx;
}
