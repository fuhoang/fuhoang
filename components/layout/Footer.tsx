"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-panel py-10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-muted">
          <div>© {new Date().getFullYear()} Fu Hoang</div>
          <div className="flex items-center gap-5">
            <a className="hover:text-slate-100 transition" href="#contact">
              {t.footer.contact}
            </a>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
}
