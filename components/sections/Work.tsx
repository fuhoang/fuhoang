"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { getCaseStudies, getCaseStudiesIndexPath, getCaseStudyPath } from "@/lib/caseStudies";
import { SectionShell } from "./_shared/SectionShell";

export function Work() {
  const { locale, t } = useLanguage();
  const studies = getCaseStudies(locale);

  return (
    <>
      <PosterLine text={t.work.poster} />
      <SectionShell id="work" eyebrow={t.work.eyebrow} title={t.work.title}>
        <div className="divide-y divide-slate-800/70 rounded-xl border border-panel overflow-hidden">
          {studies.map((study) => (
            <Reveal key={study.slug}>
              <div className="card-surface card-surface-hover p-6 transition">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div className="text-base font-semibold tracking-tight">{study.title}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted font-mono">
                    {study.stack}
                  </div>
                </div>

                <p className="mt-3 text-muted">{study.summary}</p>

                <ul className="mt-4 space-y-2 text-slate-200/90">
                  {study.outcomes.slice(0, 3).map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={getCaseStudyPath(locale, study.slug)}
                  className="mt-5 inline-flex text-sm font-medium text-slate-100 underline decoration-panel underline-offset-4 transition hover:text-accent"
                >
                  {study.shortTitle}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href={getCaseStudiesIndexPath(locale)}
            className="inline-flex rounded-lg border border-panel bg-surface/20 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-surface/40"
          >
            {t.work.listCta}
          </Link>
        </div>
      </SectionShell>
    </>
  );
}
