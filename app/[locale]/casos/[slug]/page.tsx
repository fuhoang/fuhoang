import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/components/i18n/config";
import { CaseStudyDetailContent } from "@/components/case-studies/CaseStudyDetailContent";
import {
  getCaseStudies,
  getCaseStudy,
  getLocalizedCaseStudyPath,
} from "@/lib/caseStudies";
import { buildCaseStudyMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getCaseStudies("es").map((study) => ({ locale: "es", slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale !== "es") {
    return {};
  }

  const study = getCaseStudy(locale, slug);

  if (!study) {
    return {};
  }

  return buildCaseStudyMetadata({
    locale: "es",
    study,
    canonicalPath: getLocalizedCaseStudyPath("es", study.id),
    alternatePath: getLocalizedCaseStudyPath("en", study.id),
  });
}

export default async function CaseStudyPageEs({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale !== "es") {
    notFound();
  }

  const study = getCaseStudy(locale, slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailContent locale="es" study={study} />;
}
