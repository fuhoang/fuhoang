"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { TaggedHeading } from "@/components/ui/TaggedHeading";
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
                <TaggedHeading as="h3" className="text-base sm:text-lg font-semibold tracking-tight">
                  {s.title}
                </TaggedHeading>
                <p className="mt-2 text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
