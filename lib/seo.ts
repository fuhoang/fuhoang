import type { Metadata } from "next";
import { type Locale } from "@/components/i18n/config";
import { getTranslation } from "@/components/i18n/translations";
import type { CaseStudy } from "@/lib/caseStudies";
import {
  getLocaleMetadata,
  getLocalizedPath,
  siteEmail,
  siteName,
  siteSocialLinks,
  siteUrl,
} from "@/lib/site";

export function buildLocaleMetadata(locale: Locale): Metadata {
  const copy = getLocaleMetadata(locale);
  const canonicalPath = getLocalizedPath(locale);

  return {
    title: copy.title,
    description: copy.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: getLocalizedPath("en"),
        es: getLocalizedPath("es"),
        "x-default": getLocalizedPath("en"),
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      images: [{ url: `${canonicalPath}/opengraph-image` }],
      type: "website",
      url: canonicalPath,
      locale: locale === "es" ? "es_ES" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [`${canonicalPath}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildLocaleSchemas(locale: Locale) {
  const copy = getLocaleMetadata(locale);
  const pageUrl = `${siteUrl}${getLocalizedPath(locale)}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteName,
      jobTitle:
        locale === "es"
          ? "Desarrollador Senior de Software Full-Stack"
          : "Senior Full-Stack Software Developer",
      description: copy.description,
      email: `mailto:${siteEmail}`,
      url: pageUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
      sameAs: [...siteSocialLinks],
      inLanguage: locale,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteName,
      url: pageUrl,
      description: copy.description,
      email: `mailto:${siteEmail}`,
      areaServed: ["GB", "Remote"],
      sameAs: [...siteSocialLinks],
      serviceType:
        locale === "es"
          ? "Desarrollo full-stack, modernización de plataformas, testing y CI/CD"
          : "Full-stack development, platform improvement, testing, and CI/CD",
      inLanguage: locale,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: pageUrl,
      description: copy.description,
      inLanguage: locale,
    },
  ];
}

export function buildFaqSchema(locale: Locale) {
  const t = getTranslation(locale);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildCaseStudiesIndexMetadata(locale: Locale): Metadata {
  const isSpanish = locale === "es";
  return {
    title: isSpanish ? "Casos de estudio | Fu Hoang" : "Case studies | Fu Hoang",
    description: isSpanish
      ? "Casos de estudio sobre ingeniería SaaS, delivery backend, releases más seguros y mejora de plataformas en producción."
      : "Detailed case studies covering SaaS engineering, backend delivery, release confidence, and platform improvement work.",
    alternates: {
      canonical: isSpanish ? "/es/casos" : "/en/case-studies",
      languages: {
        en: "/en/case-studies",
        es: "/es/casos",
      },
    },
    openGraph: {
      url: `${siteUrl}${isSpanish ? "/es/casos" : "/en/case-studies"}`,
      images: [{ url: isSpanish ? "/es/opengraph-image" : "/en/opengraph-image" }],
    },
  };
}

export function buildCaseStudyMetadata(options: {
  locale: Locale;
  study: CaseStudy;
  canonicalPath: string;
  alternatePath: string;
}): Metadata {
  const { locale, study, canonicalPath, alternatePath } = options;
  const isSpanish = locale === "es";

  return {
    title: `${study.title} | Fu Hoang`,
    description: study.summary,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: isSpanish ? alternatePath : canonicalPath,
        es: isSpanish ? canonicalPath : alternatePath,
      },
    },
    openGraph: {
      url: `${siteUrl}${canonicalPath}`,
      images: [{ url: isSpanish ? "/es/opengraph-image" : "/en/opengraph-image" }],
    },
  };
}
