 "use client";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const shellX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? [0, 0, 0] : [-72, 0, 72],
  );

  return (
    <section ref={sectionRef} id={id} className="py-20 md:py-24">
      <motion.div style={{ x: shellX, willChange: "transform" }}>
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
                className="mt-4 text-[30px] md:text-[36px] font-semibold tracking-tight"
              >
                {title}
              </TaggedHeading>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={0.08}>
            <div>{children}</div>
          </Reveal>
        </Container>
      </motion.div>
    </section>
  );
}
