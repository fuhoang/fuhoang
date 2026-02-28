import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

export function Work() {
  return (
    <>
      <PosterLine text="SYSTEMS • PERFORMANCE • RELIABILITY • OUTCOMES" />
      <SectionShell id="work" eyebrow="Selected work" title="Recent work">
        <div className="divide-y divide-slate-800/70 rounded-xl border border-panel overflow-hidden">
          <Reveal>
            <div className="card-surface card-surface-hover p-6 transition">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <div className="text-base font-semibold tracking-tight">
                  Lotto Logic — SaaS Platform Engineering (2019–2024)
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted font-mono">
                  Symfony · PHP · MongoDB · Git CI · AWS
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-slate-200/90">
                {[
                  "Introduced PHPUnit testing to reduce regression-related issues",
                  "Implemented Git-based CI pipelines",
                  "Refactored legacy backend code",
                  "Improved backend performance",
                  "Built reusable Composer packages to modularise business logic",
                ].map((x) => (
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
                Enterprise platforms
              </div>
              <p className="mt-3 text-muted">
                Backend contributions across: BeIN Sports · Coca-Cola
                Enterprises · DHL Resilience360 · Jamie Oliver.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}
