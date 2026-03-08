import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale } from "@/components/i18n/config";
import { getTranslation } from "@/components/i18n/translations";
import { Container } from "@/components/layout/Container";
import {
  getCaseStudies,
  getCaseStudiesIndexPath,
  getCaseStudy,
  getLocalizedCaseStudyPath,
} from "@/lib/caseStudies";
import { siteUrl } from "@/lib/site";

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

  return {
    title: `${study.title} | Fu Hoang`,
    description: study.summary,
    alternates: {
      canonical: getLocalizedCaseStudyPath("en", study.id),
      languages: {
        en: getLocalizedCaseStudyPath("en", study.id),
        es: getLocalizedCaseStudyPath("es", study.id),
      },
    },
    openGraph: {
      url: `${siteUrl}${getLocalizedCaseStudyPath("en", study.id)}`,
      images: [{ url: "/en/opengraph-image" }],
    },
  };
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

  const t = getTranslation(locale ?? defaultLocale);

  return (
    <main className="py-20 md:py-24">
      <Container>
        <div className="max-w-4xl">
          <Link
            href={getCaseStudiesIndexPath(locale)}
            className="text-sm font-medium text-muted underline decoration-panel underline-offset-4 transition hover:text-slate-100"
          >
            {t.caseStudyPage.backToStudies}
          </Link>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted font-mono">
            {study.stack}
          </p>
          <p className="mt-6 text-lg text-muted">{study.summary}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="card-surface rounded-xl border border-panel p-6">
            <h2 className="text-xl font-semibold tracking-tight">{t.caseStudyPage.challenge}</h2>
            <p className="mt-3 text-muted">{study.challenge}</p>
          </section>
          <section className="card-surface rounded-xl border border-panel p-6">
            <h2 className="text-xl font-semibold tracking-tight">{t.caseStudyPage.result}</h2>
            <p className="mt-3 text-muted">{study.result}</p>
          </section>
        </div>

        <section className="card-surface mt-6 rounded-xl border border-panel p-6">
          <h2 className="text-xl font-semibold tracking-tight">{t.caseStudyPage.work}</h2>
          <ul className="mt-4 space-y-2 text-slate-200/90">
            {study.work.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card-surface mt-6 rounded-xl border border-panel p-6">
          <h2 className="text-xl font-semibold tracking-tight">{t.caseStudyPage.outcomes}</h2>
          <ul className="mt-4 space-y-2 text-slate-200/90">
            {study.outcomes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
