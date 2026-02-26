"use client";

import { Container } from "./Container";
import { useEffect, useState } from "react";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-panel transition",
        scrolled ? "bg-ink/70 backdrop-blur" : "bg-ink",
      ].join(" ")}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#" className="font-semibold tracking-tight text-slate-100">
            Fu Hoang
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-muted">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="group relative">
                <span className="transition-colors duration-200 group-hover:text-slate-100">
                  {n.label}
                </span>
                <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-slate-200/90 transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Email me
          </a>
        </div>
      </Container>
    </header>
  );
}
