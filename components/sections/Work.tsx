"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

export function Work() {
  const { t } = useLanguage();

  return (
    <>
      <PosterLine text={t.work.poster} />
      <SectionShell id="work" eyebrow={t.work.eyebrow} title={t.work.title}>
        <div className="divide-y divide-slate-800/70 rounded-xl border border-panel overflow-hidden">
          {t.work.studies.map((study) => (
            <Reveal key={study.title}>
              <div className="card-surface card-surface-hover p-6 transition">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div className="text-base font-semibold tracking-tight">{study.title}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted font-mono">
                    {study.stack}
                  </div>
                </div>

                <p className="mt-3 text-muted">{study.summary}</p>

                <ul className="mt-4 space-y-2 text-slate-200/90">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
