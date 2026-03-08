import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/components/i18n/config";
import { CaseStudiesIndexContent } from "@/components/case-studies/CaseStudiesIndexContent";
import { buildCaseStudiesIndexMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export async function generateMetadata(): Promise<Metadata> {
  return buildCaseStudiesIndexMetadata("es");
}

export default async function CaseStudiesIndexPageEs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale) || locale !== "es") {
    notFound();
  }

  return <CaseStudiesIndexContent locale="es" />;
}
