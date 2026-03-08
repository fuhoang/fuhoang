import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale } from "@/components/i18n/config";
import { getTranslation } from "@/components/i18n/translations";
import { Container } from "@/components/layout/Container";
import { getCaseStudies, getCaseStudyPath } from "@/lib/caseStudies";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Case studies | Fu Hoang",
    description:
      "Detailed case studies covering SaaS engineering, backend delivery, release confidence, and platform improvement work.",
    alternates: {
      canonical: "/en/case-studies",
      languages: {
        en: "/en/case-studies",
        es: "/es/casos",
      },
    },
    openGraph: {
      url: `${siteUrl}/en/case-studies`,
      images: [{ url: "/en/opengraph-image" }],
    },
  };
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

  const t = getTranslation(locale ?? defaultLocale);
  const studies = getCaseStudies(locale);

  return (
    <main className="py-20 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
            {t.caseStudiesIndex.eyebrow}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.caseStudiesIndex.title}
          </h1>
          <p className="mt-5 text-lg text-muted">{t.caseStudiesIndex.intro}</p>
        </div>

        <div className="mt-10 grid gap-4">
          {studies.map((study) => (
            <article key={study.slug} className="card-surface rounded-xl border border-panel p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-xl font-semibold tracking-tight">{study.title}</h2>
                <div className="text-xs uppercase tracking-[0.25em] text-muted font-mono">
                  {study.stack}
                </div>
              </div>
              <p className="mt-3 text-muted">{study.summary}</p>
              <Link
                href={getCaseStudyPath(locale, study.slug)}
                className="mt-5 inline-flex text-sm font-medium text-slate-100 underline decoration-panel underline-offset-4 transition hover:text-accent"
              >
                {t.caseStudiesIndex.readMore}
              </Link>
            </article>
          ))}
        </div>

        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex rounded-lg border border-panel bg-surface/20 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-surface/40"
        >
          {t.caseStudiesIndex.backToHome}
        </Link>
      </Container>
    </main>
  );
}
