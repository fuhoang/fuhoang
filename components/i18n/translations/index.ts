import type { Locale } from "../config";
import { en } from "./en";
import { es } from "./es";

export const translations = {
  en,
  es,
};

export function getTranslation(locale: Locale) {
  return translations[locale];
}
