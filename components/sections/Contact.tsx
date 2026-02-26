import { PosterLine } from "@/components/ui/PosterLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "./_shared/SectionShell";

export function Contact() {
  return (
    <>
      <PosterLine text="DISCOVERY • SCOPE • EXECUTE • SHIP" />
      <SectionShell id="contact" eyebrow="Contact" title="Let’s talk">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <p className="text-muted">
                Share your stack, goals, and timeline. I typically respond
                within 24 hours.
              </p>

              <div className="mt-6 rounded-xl border border-panel bg-surface/30 p-6">
                <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                  Email
                </div>
                <div className="mt-3 text-lg font-semibold">
                  <a
                    className="hover:opacity-90 transition"
                    href="mailto:fuhoang84@googlemail.com"
                  >
                    fuhoang84@googlemail.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal>
              <div className="rounded-xl border border-panel bg-surface/30 p-6">
              <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                What to include
              </div>
              <ul className="mt-4 space-y-2 text-muted">
                <li>• Current stack</li>
                <li>• What you’re building</li>
                <li>• Timeline</li>
                <li>• Where you need support</li>
              </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
