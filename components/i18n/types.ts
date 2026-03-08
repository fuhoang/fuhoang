import type { Locale } from "./config";

export type { Locale };

export type TranslationShape = {
  header: {
    nav: { services: string; work: string; approach: string; contact: string };
    email: string;
    openMenu: string;
    closeMenu: string;
    switchToEnglish: string;
    switchToSpanish: string;
  };
  footer: {
    contact: string;
  };
  hero: {
    intro: string;
    headlinePrefix: string;
    headlineHighlight: string;
    headlineSuffix: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    kicker: string;
    focus: string;
    coreStack: string;
    additional: string;
    engineeringFocus: string;
    poster: string;
  };
  proofStrip: Array<{ k: string; v: string }>;
  services: {
    poster: string;
    eyebrow: string;
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  whyWork: {
    poster: string;
    eyebrow: string;
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  principles: {
    poster: string;
    eyebrow: string;
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  work: {
    poster: string;
    eyebrow: string;
    title: string;
    studies: Array<{
      title: string;
      stack: string;
      summary: string;
      outcomes: string[];
    }>;
  };
  approach: {
    poster: string;
    eyebrow: string;
    title: string;
    steps: Array<{ n: string; title: string; desc: string }>;
  };
  contact: {
    poster: string;
    eyebrow: string;
    title: string;
    intro: string;
    email: string;
    checklistTitle: string;
    checklist: string[];
  };
};
