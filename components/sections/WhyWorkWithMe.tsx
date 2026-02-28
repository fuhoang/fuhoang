"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

export function WhyWorkWithMe() {
  const { t } = useLanguage();

  return (
    <>
      <PosterLine text={t.whyWork.poster} />
      <SectionShell eyebrow={t.whyWork.eyebrow} title={t.whyWork.title}>
        <div className="grid gap-4 md:grid-cols-2">
          {t.whyWork.items.map((item) => (
            <Reveal key={item.title}>
              <div className="card-surface rounded-xl border border-panel p-6">
                <div className="text-lg font-semibold tracking-tight">
                  {item.title}
                </div>
                <p className="mt-2 text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
