import type { TranslationShape } from "../types";

export const es: TranslationShape = {
  header: {
    nav: {
      services: "Servicios",
      work: "Proyectos",
      approach: "Proceso",
      contact: "Contacto",
    },
    email: "Escríbeme",
    openMenu: "Abrir menu",
    closeMenu: "Cerrar menu",
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
};
