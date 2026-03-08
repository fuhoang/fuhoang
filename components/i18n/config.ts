export const locales = ["en", "es"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "es";
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  return /\bes\b/i.test(acceptLanguage) ? "es" : defaultLocale;
}
