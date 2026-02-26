import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

const services = [
  {
    title: "Full-Stack Development",
    desc: "Hands-on delivery of modern applications — from React frontends to scalable Laravel APIs and MongoDB backends.",
  },
  {
    title: "Platform Improvement",
    desc: "Stabilise legacy systems, reduce recurring bugs, and improve maintainability without risky rewrites.",
  },
  {
    title: "Testing & CI/CD",
    desc: "Introduce automated testing (PHPUnit) and Git-based CI pipelines to improve deployment reliability.",
  },
  {
    title: "API & Data Integrations",
    desc: "Build and maintain reliable backend integrations and data workflows for production environments.",
  },
];

export function Services() {
  return (
    <>
      <PosterLine text="FRONTEND • BACKEND • APIs • DELIVERY" />
      <SectionShell id="services" eyebrow="Services" title="How I can help">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="rounded-xl border border-panel bg-surface/30 p-6 transition hover:bg-surface/50">
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
