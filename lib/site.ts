import { defaultLocale, type Locale } from "@/components/i18n/config";

const fallbackSiteUrl = "http://localhost:3000";

export const siteName = "Fu Hoang";
export const siteEmail = "fuhoang84@googlemail.com";
export const siteSocialLinks = [
  "https://github.com/fuhoang",
  "https://www.linkedin.com/in/fu-hoang84/",
  "https://www.instagram.com/fuhoang/",
  "https://wa.me/447535034000",
] as const;

const localizedSiteMetadata: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Fu Hoang — Senior Full-Stack Software Developer (London)",
    description:
      "Senior Full-Stack Software Developer in London. Next.js, React, Laravel, MongoDB. Testing, CI/CD, AWS. Contract & freelance.",
  },
  es: {
    title: "Fu Hoang — Desarrollador Full-Stack Senior en Londres",
    description:
      "Desarrollador Full-Stack Senior en Londres. Next.js, React, Laravel, MongoDB, testing, CI/CD y AWS para productos en producción.",
  },
};

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, "");
}

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : fallbackSiteUrl);

export const siteUrl = normalizeSiteUrl(resolvedSiteUrl);
export const siteTitle = localizedSiteMetadata[defaultLocale].title;
export const siteDescription = localizedSiteMetadata[defaultLocale].description;

export function getLocaleMetadata(locale: Locale) {
  return localizedSiteMetadata[locale];
}

export function getLocalizedPath(locale: Locale) {
  return `/${locale}`;
}
