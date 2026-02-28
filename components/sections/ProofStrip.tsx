"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/layout/Container";

export function ProofStrip() {
  const { t } = useLanguage();

  return (
    <section className="pb-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-4 text-sm">
          {t.proofStrip.map((x) => (
            <div
              key={x.k}
              className="card-surface rounded-xl border border-panel p-5"
            >
              <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                {x.k}
              </div>
              <div className="mt-2 font-medium text-slate-100">{x.v}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
