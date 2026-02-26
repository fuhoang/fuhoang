import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

const items: Array<[string, string]> = [
  [
    "Senior-level ownership",
    "You work directly with the engineer responsible for architecture and delivery.",
  ],
  [
    "Production experience",
    "Live SaaS and enterprise environments where reliability matters.",
  ],
  [
    "Improve while delivering",
    "Ship features while strengthening structure and engineering standards.",
  ],
  [
    "Clear communication",
    "Structured scope, realistic timelines, predictable execution.",
  ],
];

export function WhyWorkWithMe() {
  return (
    <>
      <PosterLine text="CLARITY • RELIABILITY • DELIVERY • QUALITY" />
      <SectionShell
        eyebrow="Why work with me"
        title="A senior engineer embedded in your team"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {items.map(([t, d]) => (
            <Reveal key={t}>
              <div className="rounded-xl border border-panel bg-surface/30 p-6">
                <div className="text-lg font-semibold tracking-tight">{t}</div>
                <p className="mt-2 text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
