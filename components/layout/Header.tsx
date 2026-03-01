"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { Container } from "./Container";
import { LanguageSwitch } from "./LanguageSwitch";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && headerRef.current && !headerRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={[
        "sticky top-0 z-50 border-b border-panel transition",
        scrolled ? "bg-ink/70 backdrop-blur" : "bg-ink",
      ].join(" ")}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <BrandLogo />

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
            <LanguageSwitch />

            <a
              href="#contact"
              className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 md:inline-flex"
            >
              {t.header.email}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-panel bg-surface/20 text-slate-100 transition hover:bg-surface/35 md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={[
            "mb-4 overflow-hidden rounded-2xl border border-panel card-surface transition-all duration-200 ease-out md:hidden",
            menuOpen
              ? "pointer-events-auto max-h-80 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div className="p-4">
            <div className="flex flex-col gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-surface/35"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              {t.header.email}
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
