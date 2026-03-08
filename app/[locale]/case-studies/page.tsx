import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/components/i18n/config";
import { CaseStudiesIndexContent } from "@/components/case-studies/CaseStudiesIndexContent";
import { buildCaseStudiesIndexMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata(): Promise<Metadata> {
  return buildCaseStudiesIndexMetadata("en");
}

export default async function CaseStudiesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale) || locale !== "en") {
    notFound();
  }

  return <CaseStudiesIndexContent locale="en" />;
}
