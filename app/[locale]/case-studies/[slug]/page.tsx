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
  return getCaseStudies("en").map((study) => ({ locale: "en", slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale !== "en") {
    return {};
  }

  const study = getCaseStudy(locale, slug);

  if (!study) {
    return {};
  }

  return buildCaseStudyMetadata({
    locale: "en",
    study,
    canonicalPath: getLocalizedCaseStudyPath("en", study.id),
    alternatePath: getLocalizedCaseStudyPath("es", study.id),
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale !== "en") {
    notFound();
  }

  const study = getCaseStudy(locale, slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailContent locale="en" study={study} />;
}
