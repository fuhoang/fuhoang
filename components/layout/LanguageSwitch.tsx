"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();
  const isSpanish = locale === "es";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isSpanish}
      aria-label={isSpanish ? t.header.switchToEnglish : t.header.switchToSpanish}
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
  );
}
