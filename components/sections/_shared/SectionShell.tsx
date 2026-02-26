import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

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
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow ? (
              <div className="text-xs uppercase tracking-[0.35em] text-muted font-mono">
                {eyebrow}
              </div>
            ) : null}
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
