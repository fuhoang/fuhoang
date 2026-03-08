"use client";

import { usePathname, useRouter } from "next/navigation";
import { getAlternateLocale, isLocale } from "@/components/i18n/config";
import { useLanguage } from "@/components/i18n/LanguageProvider";

function replaceLocaleInPathname(pathname: string, locale: string) {
  const segments = pathname.split("/");

  if (isLocale(segments[1])) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();
  const isSpanish = locale === "es";
  const pathname = usePathname();
  const router = useRouter();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isSpanish}
      aria-label={isSpanish ? t.header.switchToEnglish : t.header.switchToSpanish}
      onClick={() => {
        const nextLocale = getAlternateLocale(locale);
        const hash = typeof window === "undefined" ? "" : window.location.hash;
        const nextPathname = replaceLocaleInPathname(pathname, nextLocale);

        setLocale(nextLocale);
        router.replace(`${nextPathname}${hash}`);
      }}
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
