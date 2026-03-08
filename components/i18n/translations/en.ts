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
      "I help startups and growing teams ship production-ready products, untangle legacy code, and improve reliability without slowing delivery.",
    primaryCta: "Email me",
    secondaryCta: "View selected work",
    kicker: "Senior execution. Clear communication. Direct engineering ownership.",
    focus: "Focus",
    coreStack: "Core stack",
    additional: "Additional",
    engineeringFocus: "Engineering focus",
    poster: "BUILD • STABILISE • SCALE",
  },
  proofStrip: [
    { k: "Experience", v: "10+ Years Shipping Software" },
    { k: "Scope", v: "Frontend, Backend, Delivery" },
    { k: "Quality", v: "Testing, CI/CD, Stability" },
    { k: "Track record", v: "SaaS and Enterprise Platforms" },
  ],
  services: {
    poster: "FRONTEND • BACKEND • APIs • DELIVERY",
    eyebrow: "Services",
    title: "What I do",
    items: [
      {
        title: "Full-Stack Build",
        desc: "Build product features end to end, from polished interfaces to dependable APIs and backend workflows.",
      },
      {
        title: "Platform Fixes",
        desc: "Stabilise legacy systems, reduce recurring bugs, and improve maintainability without expensive rewrites.",
      },
      {
        title: "Testing & CI/CD",
        desc: "Add automated tests and CI pipelines that make releases safer, faster, and easier to trust.",
      },
      {
        title: "API Integrations",
        desc: "Connect third-party services and internal systems with reliable integrations built for production load.",
      },
    ],
  },
  whyWork: {
    poster: "CLARITY • RELIABILITY • DELIVERY • QUALITY",
    eyebrow: "Why work with me",
    title: "Senior engineering support",
    items: [
      {
        title: "Senior-level ownership",
        desc: "You work directly with the person making technical decisions and delivering the work.",
      },
      {
        title: "Production experience",
        desc: "Experience in live SaaS and enterprise systems where reliability, uptime, and maintainability matter.",
      },
      {
        title: "Improve while delivering",
        desc: "Move delivery forward while improving structure, test coverage, and engineering standards.",
      },
      {
        title: "Clear communication",
        desc: "Clear scope, realistic timelines, and direct communication throughout the work.",
      },
    ],
  },
  principles: {
    poster: "ENGINEERING • CLARITY • SIMPLICITY • DISCIPLINE",
    eyebrow: "Principles",
    title: "Principles",
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
    title: "Case studies",
    listCta: "View all case studies",
  },
  caseStudiesIndex: {
    poster: "DELIVERY • SYSTEMS • RELEASES • OUTCOMES",
    eyebrow: "Case studies",
    title: "Case studies",
    intro:
      "A closer look at product and platform work focused on reliability, delivery, and safer releases.",
    readMore: "Read case study",
    backToHome: "Back to home",
  },
  caseStudyPage: {
    challenge: "Challenge",
    work: "What I did",
    result: "Result",
    outcomes: "Key outcomes",
    backToStudies: "Back to case studies",
  },
  approach: {
    poster: "DISCOVERY • SCOPE • BUILD • SHIP",
    eyebrow: "Approach",
    title: "How I deliver",
    steps: [
      {
        n: "01",
        title: "Discovery",
        desc: "Understand the product goal, business constraints, and the technical reality before writing code.",
      },
      {
        n: "02",
        title: "Scope",
        desc: "Set a realistic delivery plan with clear milestones, risks, and technical priorities.",
      },
      {
        n: "03",
        title: "Build",
        desc: "Ship in small iterations with clean structure, practical testing, and visible progress.",
      },
      {
        n: "04",
        title: "Release & optimise",
        desc: "Release with confidence, then improve the parts that matter most for reliability and speed.",
      },
    ],
  },
  faq: {
    poster: "QUESTIONS • DELIVERY • STACK • WORKING STYLE",
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      {
        question: "What kinds of projects do you work on?",
        answer:
          "I usually help startups and product teams with Next.js, Laravel, PHP, React, APIs, backend improvements, testing, and delivery reliability work.",
      },
      {
        question: "Can you work inside an existing codebase?",
        answer:
          "Yes. A large part of my work is improving and shipping inside live systems without forcing unnecessary rewrites.",
      },
      {
        question: "Do you help with testing and CI/CD?",
        answer:
          "Yes. I regularly add automated testing, release checks, and CI pipelines to make deployment safer and more predictable.",
      },
      {
        question: "Do you work contract or freelance?",
        answer:
          "Yes. I support short delivery-focused engagements as well as longer product and platform work.",
      },
    ],
  },
  contact: {
    poster: "DISCOVERY • SCOPE • EXECUTE • SHIP",
    eyebrow: "Contact",
    title: "Let's talk",
    intro:
      "Send over your stack, goals, and current blockers. I usually reply within 24 hours.",
    email: "Email",
    checklistTitle: "What to include",
    checklist: [
      "Current stack",
      "What you are building",
      "Current problem or blocker",
      "Target timeline",
      "Where you need hands-on support",
    ],
  },
};
