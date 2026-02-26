import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

const principles = [
  {
    title: "Keep systems simple",
    desc: "Prefer clear, maintainable solutions over unnecessary complexity.",
  },
  {
    title: "Test before deploy",
    desc: "Automated testing and CI pipelines reduce risk and improve release confidence.",
  },
  {
    title: "Improve while building",
    desc: "Every feature is an opportunity to strengthen structure and reduce technical debt.",
  },
  {
    title: "Ship incrementally",
    desc: "Small, predictable iterations keep delivery aligned with business priorities.",
  },
];

export function Principles() {
  return (
    <>
      <PosterLine text="ENGINEERING • CLARITY • SIMPLICITY • DISCIPLINE" />
      <SectionShell eyebrow="Principles" title="Engineering principles">
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <Reveal key={p.title}>
              <div className="rounded-xl border border-panel bg-surface/30 p-6">
                <div className="text-lg font-semibold tracking-tight">
                  {p.title}
                </div>
                <p className="mt-2 text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
