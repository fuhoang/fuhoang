import { Container } from "@/components/layout/Container";

const items = [
  { k: "Experience", v: "10+ Years Engineering" },
  { k: "Scope", v: "Full-Stack Systems" },
  { k: "Quality", v: "Testing & CI/CD" },
  { k: "Credibility", v: "Enterprise & SaaS Platforms" },
];

export function ProofStrip() {
  return (
    <section className="pb-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-4 text-sm">
          {items.map((x) => (
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
