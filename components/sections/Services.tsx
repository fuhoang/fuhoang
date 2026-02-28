"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

export function Services() {
  const { t } = useLanguage();

  return (
    <>
      <PosterLine text={t.services.poster} />
      <SectionShell
        id="services"
        eyebrow={t.services.eyebrow}
        title={t.services.title}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {t.services.items.map((s) => (
            <Reveal key={s.title}>
              <div className="card-surface card-surface-hover rounded-xl border border-panel p-6 transition">
                <h3 className="text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
