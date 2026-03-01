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
    title: "Dónde aporto valor",
    items: [
      {
        title: "Desarrollo Full-Stack",
        desc: "Construyo funcionalidades de producto de punta a punta, desde interfaces cuidadas hasta APIs y flujos backend fiables.",
      },
      {
        title: "Mejora de plataformas",
        desc: "Estabilizo sistemas heredados, reduzco errores recurrentes y mejoro el mantenimiento sin reescrituras costosas.",
      },
      {
        title: "Pruebas y CI/CD",
        desc: "Añado pruebas automatizadas y pipelines de CI para que los despliegues sean más seguros, rápidos y fiables.",
      },
      {
        title: "Integraciones de APIs y datos",
        desc: "Conecto servicios externos y sistemas internos con integraciones fiables pensadas para producción.",
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
    title: "Trabajo con impacto medible",
    featuredTitle: "Lotto Logic — Ingeniería de plataforma SaaS (2019–2024)",
    featuredStack: "Symfony · PHP · MongoDB · Git CI · AWS",
    bullets: [
      "Añadí cobertura con PHPUnit para reducir el riesgo de regresiones en despliegues",
      "Implementé pipelines de CI basados en Git para despliegues más fiables",
      "Refactoricé código backend heredado en módulos más mantenibles y reutilizables",
      "Mejoré el rendimiento del backend en un entorno SaaS en producción",
      "Creé paquetes Composer para separar la lógica de negocio del código específico de la aplicación",
    ],
    enterpriseTitle: "Plataformas enterprise",
    enterpriseBody:
      "Entregué trabajo backend para plataformas de BeIN Sports, Coca-Cola Enterprises, DHL Resilience360 y Jamie Oliver.",
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
    title: "Inicia la conversación",
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
