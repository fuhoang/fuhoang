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
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchToEnglish: "Cambiar a inglés",
    switchToSpanish: "Cambiar a español",
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
      "Ayudo a startups y equipos en crecimiento a lanzar productos listos para producción, ordenar código heredado y mejorar la fiabilidad sin frenar la entrega.",
    primaryCta: "Escríbeme",
    secondaryCta: "Ver proyectos",
    kicker: "Ejecución senior. Comunicación clara. Responsabilidad técnica directa.",
    focus: "Enfoque",
    coreStack: "Stack principal",
    additional: "Adicional",
    engineeringFocus: "Enfoque técnico",
    poster: "CONSTRUIR • ESTABILIZAR • ESCALAR",
  },
  proofStrip: [
    { k: "Experiencia", v: "Más de 10 años entregando software" },
    { k: "Alcance", v: "Frontend, backend y delivery" },
    { k: "Calidad", v: "Pruebas, CI/CD y estabilidad" },
    { k: "Trayectoria", v: "Plataformas SaaS y enterprise" },
  ],
  services: {
    poster: "FRONTEND • BACKEND • APIs • ENTREGA",
    eyebrow: "Servicios",
    title: "Qué hago",
    items: [
      {
        title: "Construcción Full-Stack",
        desc: "Construyo funcionalidades de producto de punta a punta, desde interfaces cuidadas hasta APIs y flujos backend fiables.",
      },
      {
        title: "Mejoras de plataforma",
        desc: "Estabilizo sistemas heredados, reduzco errores recurrentes y mejoro el mantenimiento sin reescrituras costosas.",
      },
      {
        title: "Pruebas y CI/CD",
        desc: "Añado pruebas automatizadas y pipelines de CI para que los despliegues sean más seguros, rápidos y fiables.",
      },
      {
        title: "Integraciones API",
        desc: "Conecto servicios externos y sistemas internos con integraciones fiables pensadas para producción.",
      },
    ],
  },
  whyWork: {
    poster: "CLARIDAD • FIABILIDAD • ENTREGA • CALIDAD",
    eyebrow: "Por qué trabajar conmigo",
    title: "Soporte de ingeniería senior",
    items: [
      {
        title: "Responsabilidad senior",
        desc: "Trabajas directamente con quien toma decisiones técnicas y entrega el trabajo.",
      },
      {
        title: "Experiencia en producción",
        desc: "Experiencia en sistemas SaaS y enterprise en vivo donde la fiabilidad, la disponibilidad y el mantenimiento importan.",
      },
      {
        title: "Mejorar mientras se entrega",
        desc: "Avanzo la entrega mientras mejoro la estructura, la cobertura de pruebas y los estándares de ingeniería.",
      },
      {
        title: "Comunicación clara",
        desc: "Alcance claro, plazos realistas y comunicación directa durante todo el trabajo.",
      },
    ],
  },
  principles: {
    poster: "INGENIERÍA • CLARIDAD • SIMPLICIDAD • DISCIPLINA",
    eyebrow: "Principios",
    title: "Principios",
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
    title: "Casos de estudio",
    studies: [
      {
        title: "Lotto Logic — Ingeniería SaaS",
        stack: "Symfony · PHP · MongoDB · Git CI · AWS",
        summary:
          "Mejoré la confianza en los despliegues y el mantenimiento del backend dentro de un producto SaaS en producción con entregas continuas.",
        outcomes: [
          "Añadí cobertura con PHPUnit sobre flujos backend críticos para reducir el riesgo de regresiones en cada release",
          "Implementé pipelines de CI basados en Git para que los despliegues fueran más repetibles y fiables",
          "Refactoricé backend heredado en módulos más reutilizables y mantenibles",
          "Mejoré el rendimiento del backend en producción sin frenar el ritmo de entrega",
        ],
      },
      {
        title: "Entrega para plataformas enterprise",
        stack: "PHP · APIs · Modernización de legado · Delivery",
        summary:
          "Entregué trabajo backend para plataformas de medios, comercio, logística y contenido en marcas consolidadas.",
        outcomes: [
          "Entregué cambios backend para BeIN Sports, Coca-Cola Enterprises, DHL Resilience360 y Jamie Oliver",
          "Trabajé dentro de codebases establecidos donde la fiabilidad, el control de releases y la coordinación entre equipos importaban",
          "Integré cambios de plataforma sin forzar reescrituras disruptivas ni pausas de entrega innecesarias",
        ],
      },
    ],
  },
  approach: {
    poster: "DESCUBRIR • DEFINIR • CONSTRUIR • ENTREGAR",
    eyebrow: "Proceso",
    title: "Cómo entrego",
    steps: [
      {
        n: "01",
        title: "Descubrimiento",
        desc: "Entender el objetivo del producto, las restricciones del negocio y la realidad técnica antes de escribir código.",
      },
      {
        n: "02",
        title: "Alcance",
        desc: "Definir un plan realista con hitos claros, riesgos y prioridades técnicas.",
      },
      {
        n: "03",
        title: "Construcción",
        desc: "Entregar en iteraciones pequeñas con estructura limpia, pruebas prácticas y progreso visible.",
      },
      {
        n: "04",
        title: "Lanzamiento y optimización",
        desc: "Lanzar con confianza y optimizar lo que más afecta a la fiabilidad y la velocidad.",
      },
    ],
  },
  contact: {
    poster: "DESCUBRIR • DEFINIR • EJECUTAR • ENTREGAR",
    eyebrow: "Contacto",
    title: "Hablemos",
    intro:
      "Compárteme tu stack, tus objetivos y el bloqueo actual. Normalmente respondo en menos de 24 horas.",
    email: "Correo",
    checklistTitle: "Qué incluir",
    checklist: [
      "Stack actual",
      "Qué estás construyendo",
      "Problema o bloqueo actual",
      "Plazo objetivo",
      "Dónde necesitas apoyo directo",
    ],
  },
};
