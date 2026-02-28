"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

export function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <PosterLine text={t.contact.poster} />
      <SectionShell
        id="contact"
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
      >
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <p className="text-muted">
                {t.contact.intro}
              </p>

              <div className="card-surface mt-6 rounded-xl border border-panel p-6">
                <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                  {t.contact.email}
                </div>
                <div className="mt-3 text-lg font-semibold">
                  <a
                    className="hover:opacity-90 transition"
                    href="mailto:fuhoang84@googlemail.com"
                  >
                    fuhoang84@googlemail.com
                  </a>
                </div>
                <SocialLinks className="mt-5" />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal>
              <div className="card-surface rounded-xl border border-panel p-6">
                <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                  {t.contact.checklistTitle}
                </div>
                <ul className="mt-4 space-y-2 text-muted">
                  {t.contact.checklist.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
