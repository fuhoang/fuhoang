import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/components/i18n/config";
import {
  getLocaleMetadata,
  getLocalizedPath,
  siteEmail,
  siteName,
  siteSocialLinks,
  siteUrl,
} from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const copy = getLocaleMetadata(resolvedLocale);
  const canonicalPath = getLocalizedPath(resolvedLocale);

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
      images: [{ url: "/opengraph-image" }],
      type: "website",
      url: canonicalPath,
      locale: resolvedLocale === "es" ? "es_ES" : "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getLocaleMetadata(locale);
  const pageUrl = `${siteUrl}${getLocalizedPath(locale)}`;
  const schema = [
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
      "@type": "WebSite",
      name: siteName,
      url: pageUrl,
      description: copy.description,
      inLanguage: locale,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
