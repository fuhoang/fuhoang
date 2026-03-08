"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

export function Faq() {
  const { t } = useLanguage();

  return (
    <>
      <PosterLine text={t.faq.poster} />
      <SectionShell eyebrow={t.faq.eyebrow} title={t.faq.title}>
        <div className="grid gap-4">
          {t.faq.items.map((item) => (
            <Reveal key={item.question}>
              <div className="card-surface rounded-xl border border-panel p-6">
                <div className="text-base sm:text-lg font-semibold tracking-tight">
                  {item.question}
                </div>
                <p className="mt-3 text-muted">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
