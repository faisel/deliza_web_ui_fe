"use client";

import { createContext, useMemo, type ReactNode } from "react";
import type { Locale } from "./config";
import { getMessages } from "./messages";
import type { Messages } from "./messages/types";

export interface I18nContextValue {
  locale: Locale;
  messages: Messages;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function I18nProvider({ locale, children }: I18nProviderProps) {
  const value = useMemo<I18nContextValue>(
    () => ({ locale, messages: getMessages(locale) }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
