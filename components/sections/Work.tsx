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
          <Reveal>
            <div className="card-surface card-surface-hover p-6 transition">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <div className="text-base font-semibold tracking-tight">
                  {t.work.featuredTitle}
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted font-mono">
                  {t.work.featuredStack}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-slate-200/90">
                {t.work.bullets.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="card-surface card-surface-hover p-6 transition">
              <div className="text-base font-semibold tracking-tight">
                {t.work.enterpriseTitle}
              </div>
              <p className="mt-3 text-muted">
                {t.work.enterpriseBody}
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}
