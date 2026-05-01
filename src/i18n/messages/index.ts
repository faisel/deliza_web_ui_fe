import { defaultLocale, type Locale } from "../config";
import de from "./de";
import en from "./en";
import fr from "./fr";
import it from "./it";
import type { Messages } from "./types";

const messagesByLocale: Record<Locale, Messages> = { de, en, fr, it };

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale] ?? messagesByLocale[defaultLocale];
}

export type { Messages } from "./types";
