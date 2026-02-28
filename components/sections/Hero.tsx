import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PosterLine } from "@/components/ui/PosterLine";

export function Hero() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-8">
            <Reveal>
              {/* Eyebrow */}
              <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                <span className="hero-gradient-text">Next.js</span> · Laravel ·
                <span className="hero-gradient-text">MongoDB</span>· Symfony ·{" "}
                <span className="hero-gradient-text">Python </span>· JS
              </div>

              {/* Main headline */}
              <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                <span className="hero-gradient-text">Full-Stack</span> Software
                Developer
              </h1>

              {/* Supporting line */}
              <p className="mt-6 text-lg text-muted max-w-2xl">
                Embedded delivery for startups and SMEs — building
                production-ready applications while improving reliability,
                testing, and deployment workflows.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                >
                  Email me
                </a>
                <a
                  href="#work"
                  className="rounded-lg border border-panel bg-surface/20 px-6 py-3 text-sm font-medium text-slate-100 hover:bg-surface/40 transition"
                >
                  View selected work
                </a>
              </div>

              <p className="mt-4 text-sm text-muted">
                Senior-level execution. Independent thinking. No agency
                overhead.
              </p>
            </Reveal>
          </div>

          {/* Right Panel */}
          <div className="md:col-span-4">
            <Reveal>
              <div className="rounded-xl border border-panel bg-surface/30 p-6">
                <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                  Focus
                </div>

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-muted">Core stack</dt>
                    <dd className="mt-1 text-slate-100">
                      Next.js · React · Laravel · MongoDB
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted">Additional</dt>
                    <dd className="mt-1 text-slate-100">Symfony · Python</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Engineering focus</dt>
                    <dd className="mt-1 text-slate-100">
                      Reliability · CI/CD · Performance
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="mt-12">
        <PosterLine text="BUILD • STABILISE • SCALE" />
      </div>
    </section>
  );
}
