import type { TranslationShape } from "../types";

export const en: TranslationShape = {
  header: {
    nav: {
      services: "Services",
      work: "Work",
      approach: "Approach",
      contact: "Contact",
    },
    email: "Email me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToEnglish: "Switch to English",
    switchToSpanish: "Switch to Spanish",
  },
  footer: {
    contact: "Contact",
  },
  hero: {
    intro: "Next.js · Laravel · MongoDB · Symfony · Python · JS",
    headlinePrefix: "",
    headlineHighlight: "Full-Stack",
    headlineSuffix: " Software Developer",
    body:
      "Embedded delivery for startups and SMEs — building production-ready applications while improving reliability, testing, and deployment workflows.",
    primaryCta: "Email me",
    secondaryCta: "View selected work",
    kicker: "Senior-level execution. Independent thinking. No agency overhead.",
    focus: "Focus",
    coreStack: "Core stack",
    additional: "Additional",
    engineeringFocus: "Engineering focus",
    poster: "BUILD • STABILISE • SCALE",
  },
  proofStrip: [
    { k: "Experience", v: "10+ Years Engineering" },
    { k: "Scope", v: "Full-Stack Systems" },
    { k: "Quality", v: "Testing & CI/CD" },
    { k: "Credibility", v: "Enterprise & SaaS Platforms" },
  ],
  services: {
    poster: "FRONTEND • BACKEND • APIs • DELIVERY",
    eyebrow: "Services",
    title: "How I can help",
    items: [
      {
        title: "Full-Stack Development",
        desc: "Hands-on delivery of modern applications — from React frontends to scalable Laravel APIs and MongoDB backends.",
      },
      {
        title: "Platform Improvement",
        desc: "Stabilise legacy systems, reduce recurring bugs, and improve maintainability without risky rewrites.",
      },
      {
        title: "Testing & CI/CD",
        desc: "Introduce automated testing (PHPUnit) and Git-based CI pipelines to improve deployment reliability.",
      },
      {
        title: "API & Data Integrations",
        desc: "Build and maintain reliable backend integrations and data workflows for production environments.",
      },
    ],
  },
  whyWork: {
    poster: "CLARITY • RELIABILITY • DELIVERY • QUALITY",
    eyebrow: "Why work with me",
    title: "A senior engineer embedded in your team",
    items: [
      {
        title: "Senior-level ownership",
        desc: "You work directly with the engineer responsible for architecture and delivery.",
      },
      {
        title: "Production experience",
        desc: "Live SaaS and enterprise environments where reliability matters.",
      },
      {
        title: "Improve while delivering",
        desc: "Ship features while strengthening structure and engineering standards.",
      },
      {
        title: "Clear communication",
        desc: "Structured scope, realistic timelines, predictable execution.",
      },
    ],
  },
  principles: {
    poster: "ENGINEERING • CLARITY • SIMPLICITY • DISCIPLINE",
    eyebrow: "Principles",
    title: "Engineering principles",
    items: [
      {
        title: "Keep systems simple",
        desc: "Prefer clear, maintainable solutions over unnecessary complexity.",
      },
      {
        title: "Test before deploy",
        desc: "Automated testing and CI pipelines reduce risk and improve release confidence.",
      },
      {
        title: "Improve while building",
        desc: "Every feature is an opportunity to strengthen structure and reduce technical debt.",
      },
      {
        title: "Ship incrementally",
        desc: "Small, predictable iterations keep delivery aligned with business priorities.",
      },
    ],
  },
  work: {
    poster: "SYSTEMS • PERFORMANCE • RELIABILITY • OUTCOMES",
    eyebrow: "Selected work",
    title: "Recent work",
    featuredTitle: "Lotto Logic — SaaS Platform Engineering (2019–2024)",
    featuredStack: "Symfony · PHP · MongoDB · Git CI · AWS",
    bullets: [
      "Introduced PHPUnit testing to reduce regression-related issues",
      "Implemented Git-based CI pipelines",
      "Refactored legacy backend code",
      "Improved backend performance",
      "Built reusable Composer packages to modularise business logic",
    ],
    enterpriseTitle: "Enterprise platforms",
    enterpriseBody:
      "Backend contributions across: BeIN Sports · Coca-Cola Enterprises · DHL Resilience360 · Jamie Oliver.",
  },
  approach: {
    poster: "DISCOVERY • SCOPE • BUILD • SHIP",
    eyebrow: "Approach",
    title: "Delivery approach",
    steps: [
      {
        n: "01",
        title: "Discovery",
        desc: "Understand goals, constraints, and the technical landscape.",
      },
      {
        n: "02",
        title: "Scope",
        desc: "Define milestones, risks, and a structured delivery plan.",
      },
      {
        n: "03",
        title: "Build",
        desc: "Ship in small iterations with clean architecture and automated testing.",
      },
      {
        n: "04",
        title: "Release & optimise",
        desc: "Deploy confidently and improve where it matters.",
      },
    ],
  },
  contact: {
    poster: "DISCOVERY • SCOPE • EXECUTE • SHIP",
    eyebrow: "Contact",
    title: "Let's talk",
    intro:
      "Share your stack, goals, and timeline. I typically respond within 24 hours.",
    email: "Email",
    checklistTitle: "What to include",
    checklist: [
      "Current stack",
      "What you’re building",
      "Timeline",
      "Where you need support",
    ],
  },
};
