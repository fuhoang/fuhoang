import type { MetadataRoute } from "next";
import { locales } from "@/components/i18n/config";
import { getCaseStudies, getCaseStudiesIndexPath, getCaseStudyPath } from "@/lib/caseStudies";
import { getLocalizedPath, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const localeEntries = locales.map((locale) => ({
    url: `${siteUrl}${getLocalizedPath(locale)}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${siteUrl}${getLocalizedPath("en")}`,
        es: `${siteUrl}${getLocalizedPath("es")}`,
      },
    },
  }));

  const caseStudyIndexEntries = locales.map((locale) => ({
    url: `${siteUrl}${getCaseStudiesIndexPath(locale)}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyEntries = locales.flatMap((locale) =>
    getCaseStudies(locale).map((study) => ({
      url: `${siteUrl}${getCaseStudyPath(locale, study.slug)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...localeEntries, ...caseStudyIndexEntries, ...caseStudyEntries];
}
