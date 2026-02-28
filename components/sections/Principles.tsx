"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

export function Principles() {
  const { t } = useLanguage();

  return (
    <>
      <PosterLine text={t.principles.poster} />
      <SectionShell eyebrow={t.principles.eyebrow} title={t.principles.title}>
        <div className="grid gap-4 md:grid-cols-2">
          {t.principles.items.map((item) => (
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
