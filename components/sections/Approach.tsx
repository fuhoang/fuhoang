"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

export function Approach() {
  const { t } = useLanguage();

  return (
    <>
      <PosterLine text={t.approach.poster} />
      <SectionShell
        id="approach"
        eyebrow={t.approach.eyebrow}
        title={t.approach.title}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {t.approach.steps.map((s) => (
            <Reveal key={s.n}>
              <div className="card-surface rounded-xl border border-panel p-6">
                <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                  {s.n}
                </div>
                <div className="mt-3 text-lg font-semibold tracking-tight">
                  {s.title}
                </div>
                <p className="mt-2 text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
