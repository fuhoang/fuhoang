"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Container } from "./Container";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();

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
            <div className="px-4 flex items-center gap-2 rounded-lg border border-panel bg-surface/20 ">
              <span className="sr-only">{t.header.languageLabel}</span>
              {(["en", "es"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLocale(option)}
                  className={[
                    "rounded-md px-4 py-4 text-xs font-semibold uppercase transition",
                    locale === option
                      ? "bg-accent text-white"
                      : "text-muted hover:text-slate-100",
                  ].join(" ")}
                  aria-pressed={locale === option}
                >
                  {option}
                </button>
              ))}
            </div>

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
