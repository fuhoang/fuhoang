import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Understand goals, constraints, and the technical landscape.",
  },
  {
    n: "02",
    title: "Scope",
    desc: "Define milestones, risks, and a structured delivery plan.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Ship in small iterations with clean architecture and automated testing.",
  },
  {
    n: "04",
    title: "Release & optimise",
    desc: "Deploy confidently and improve where it matters.",
  },
];

export function Approach() {
  return (
    <>
      <PosterLine text="DISCOVERY • SCOPE • BUILD • SHIP" />
      <SectionShell id="approach" eyebrow="Approach" title="Delivery approach">
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
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
