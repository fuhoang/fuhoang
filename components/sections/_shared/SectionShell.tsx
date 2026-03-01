"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TaggedHeading } from "@/components/ui/TaggedHeading";

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-24">
      <div>
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              {eyebrow ? (
                <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                  {eyebrow}
                </div>
              ) : null}
              <TaggedHeading
                as="h2"
                className="mt-4 text-[30px] md:text-[34px] font-semibold tracking-tight"
              >
                {title}
              </TaggedHeading>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={0.08}>
            <div>{children}</div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
