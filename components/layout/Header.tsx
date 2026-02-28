"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Container } from "./Container";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const isSpanish = locale === "es";

  const nav = [
    { href: "#services", label: t.header.nav.services },
    { href: "#work", label: t.header.nav.work },
    { href: "#approach", label: t.header.nav.approach },
    { href: "#contact", label: t.header.nav.contact },
  ];

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

          <div className="flex items-center gap-4">
            <button
              type="button"
              role="switch"
              aria-checked={isSpanish}
              aria-label={isSpanish ? "Switch to English" : "Cambiar a espanol"}
              onClick={() => setLocale(isSpanish ? "en" : "es")}
              className="inline-flex h-12 items-center rounded-full border border-panel bg-surface/20 p-1.5 transition"
            >
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase">
                <span
                  className={[
                    "inline-flex h-8 items-center justify-center rounded-full border px-4 leading-none transition",
                    isSpanish
                      ? "border-panel text-muted"
                      : "border-accent bg-accent text-white",
                  ].join(" ")}
                >
                  EN
                </span>
                <span
                  className={[
                    "inline-flex h-8 items-center justify-center rounded-full border px-4 leading-none transition",
                    isSpanish
                      ? "border-accent bg-accent text-white"
                      : "border-panel text-muted",
                  ].join(" ")}
                >
                  ES
                </span>
              </span>
            </button>

            <a
              href="#contact"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
            >
              {t.header.email}
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
