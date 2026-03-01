"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { en } from "./translations/en";
import { es } from "./translations/es";
import type { Locale, TranslationShape } from "./types";

const LOCALE_STORAGE_KEY = "locale";

const translations: Record<Locale, TranslationShape> = {
  en,
  es,
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationShape;
};

function readStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  return window.localStorage.getItem(LOCALE_STORAGE_KEY) === "es" ? "es" : "en";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === LOCALE_STORAGE_KEY) {
      onStoreChange();
    }
  };
  const handleLocaleChange = () => onStoreChange();

  window.addEventListener("storage", handleStorage);
  window.addEventListener("localechange", handleLocaleChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("localechange", handleLocaleChange);
  };
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale: Locale = useSyncExternalStore(
    subscribe,
    readStoredLocale,
    () => "en",
  );
  const setLocale = useCallback((nextLocale: Locale) => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event("localechange"));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
