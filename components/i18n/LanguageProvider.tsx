"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Locale = "en" | "es";

type TranslationShape = {
  header: {
    nav: { services: string; work: string; approach: string; contact: string };
    email: string;
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
    featuredTitle: string;
    featuredStack: string;
    bullets: string[];
    enterpriseTitle: string;
    enterpriseBody: string;
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

const translations: Record<Locale, TranslationShape> = {
  en: {
    header: {
      nav: {
        services: "Services",
        work: "Work",
        approach: "Approach",
        contact: "Contact",
      },
      email: "Email me",
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
  },
  es: {
    header: {
      nav: {
        services: "Servicios",
        work: "Proyectos",
        approach: "Proceso",
        contact: "Contacto",
      },
      email: "Escríbeme",
    },
    footer: {
      contact: "Contacto",
    },
    hero: {
      intro: "Next.js · Laravel · MongoDB · Symfony · Python · JS",
      headlinePrefix: "",
      headlineHighlight: "Full-Stack",
      headlineSuffix: " Desarrollador de Software",
      body:
        "Entrega integrada para startups y pymes: construyo aplicaciones listas para producción mientras mejoro la fiabilidad, las pruebas y los flujos de despliegue.",
      primaryCta: "Escríbeme",
      secondaryCta: "Ver proyectos",
      kicker: "Ejecución senior. Criterio independiente. Sin costes de agencia.",
      focus: "Enfoque",
      coreStack: "Stack principal",
      additional: "Adicional",
      engineeringFocus: "Enfoque técnico",
      poster: "CONSTRUIR • ESTABILIZAR • ESCALAR",
    },
    proofStrip: [
      { k: "Experiencia", v: "Más de 10 años en ingeniería" },
      { k: "Alcance", v: "Sistemas Full-Stack" },
      { k: "Calidad", v: "Pruebas y CI/CD" },
      { k: "Trayectoria", v: "Plataformas SaaS y enterprise" },
    ],
    services: {
      poster: "FRONTEND • BACKEND • APIs • ENTREGA",
      eyebrow: "Servicios",
      title: "Cómo puedo ayudarte",
      items: [
        {
          title: "Desarrollo Full-Stack",
          desc: "Entrega práctica de aplicaciones modernas, desde frontends en React hasta APIs escalables en Laravel y backends con MongoDB.",
        },
        {
          title: "Mejora de plataformas",
          desc: "Estabilizo sistemas heredados, reduzco errores recurrentes y mejoro la mantenibilidad sin reescrituras arriesgadas.",
        },
        {
          title: "Pruebas y CI/CD",
          desc: "Introduzco pruebas automatizadas (PHPUnit) y pipelines de CI basados en Git para despliegues más fiables.",
        },
        {
          title: "Integraciones de APIs y datos",
          desc: "Construyo y mantengo integraciones backend y flujos de datos fiables para entornos de producción.",
        },
      ],
    },
    whyWork: {
      poster: "CLARIDAD • FIABILIDAD • ENTREGA • CALIDAD",
      eyebrow: "Por qué trabajar conmigo",
      title: "Un ingeniero senior integrado en tu equipo",
      items: [
        {
          title: "Responsabilidad senior",
          desc: "Trabajas directamente con el ingeniero responsable de la arquitectura y la entrega.",
        },
        {
          title: "Experiencia en producción",
          desc: "Experiencia real en entornos SaaS y enterprise donde la fiabilidad importa.",
        },
        {
          title: "Mejorar mientras se entrega",
          desc: "Entrego funcionalidades mientras refuerzo la estructura y los estándares de ingeniería.",
        },
        {
          title: "Comunicación clara",
          desc: "Alcance estructurado, plazos realistas y ejecución predecible.",
        },
      ],
    },
    principles: {
      poster: "INGENIERÍA • CLARIDAD • SIMPLICIDAD • DISCIPLINA",
      eyebrow: "Principios",
      title: "Principios de ingeniería",
      items: [
        {
          title: "Mantener los sistemas simples",
          desc: "Prefiero soluciones claras y mantenibles antes que complejidad innecesaria.",
        },
        {
          title: "Probar antes de desplegar",
          desc: "Las pruebas automatizadas y los pipelines de CI reducen el riesgo y mejoran la confianza en cada release.",
        },
        {
          title: "Mejorar mientras se construye",
          desc: "Cada funcionalidad es una oportunidad para reforzar la estructura y reducir deuda técnica.",
        },
        {
          title: "Entregar por incrementos",
          desc: "Iteraciones pequeñas y predecibles mantienen la entrega alineada con las prioridades del negocio.",
        },
      ],
    },
    work: {
      poster: "SISTEMAS • RENDIMIENTO • FIABILIDAD • RESULTADOS",
      eyebrow: "Proyectos seleccionados",
      title: "Trabajo reciente",
      featuredTitle: "Lotto Logic — Ingeniería de plataforma SaaS (2019–2024)",
      featuredStack: "Symfony · PHP · MongoDB · Git CI · AWS",
      bullets: [
        "Introduje pruebas con PHPUnit para reducir problemas de regresión",
        "Implementé pipelines de CI basados en Git",
        "Refactoricé código legacy de backend",
        "Mejoré el rendimiento del backend",
        "Construí paquetes reutilizables de Composer para modularizar la lógica de negocio",
      ],
      enterpriseTitle: "Plataformas enterprise",
      enterpriseBody:
        "Contribuciones backend en: BeIN Sports · Coca-Cola Enterprises · DHL Resilience360 · Jamie Oliver.",
    },
    approach: {
      poster: "DESCUBRIR • DEFINIR • CONSTRUIR • ENTREGAR",
      eyebrow: "Proceso",
      title: "Forma de trabajo",
      steps: [
        {
          n: "01",
          title: "Descubrimiento",
          desc: "Entender objetivos, restricciones y el contexto técnico.",
        },
        {
          n: "02",
          title: "Alcance",
          desc: "Definir hitos, riesgos y un plan de entrega estructurado.",
        },
        {
          n: "03",
          title: "Construcción",
          desc: "Entregar en iteraciones pequeñas con arquitectura limpia y pruebas automatizadas.",
        },
        {
          n: "04",
          title: "Lanzamiento y optimización",
          desc: "Desplegar con confianza y mejorar donde más importa.",
        },
      ],
    },
    contact: {
      poster: "DESCUBRIR • DEFINIR • EJECUTAR • ENTREGAR",
      eyebrow: "Contacto",
      title: "Hablemos",
      intro:
        "Compárteme tu stack, objetivos y plazos. Normalmente respondo en menos de 24 horas.",
      email: "Correo",
      checklistTitle: "Qué incluir",
      checklist: [
        "Stack actual",
        "Qué estás construyendo",
        "Plazo",
        "Dónde necesitas apoyo",
      ],
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationShape;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
