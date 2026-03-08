import type { MetadataRoute } from "next";
import { locales } from "@/components/i18n/config";
import { getLocalizedPath, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${siteUrl}${getLocalizedPath(locale)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${siteUrl}${getLocalizedPath("en")}`,
        es: `${siteUrl}${getLocalizedPath("es")}`,
      },
    },
  }));
}
