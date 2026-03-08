import type { Locale } from "@/components/i18n/config";

export type CaseStudyId = "lotto-logic" | "enterprise-platforms";

export type CaseStudy = {
  id: CaseStudyId;
  slug: string;
  title: string;
  shortTitle: string;
  stack: string;
  summary: string;
  outcomes: string[];
  challenge: string;
  work: string[];
  result: string;
};

const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  en: [
    {
      id: "lotto-logic",
      slug: "lotto-logic-saas-engineering",
      title: "Lotto Logic — SaaS engineering",
      shortTitle: "Lotto Logic",
      stack: "Symfony · PHP · MongoDB · Git CI · AWS",
      summary:
        "Improved release confidence and backend maintainability inside a live SaaS product with ongoing delivery pressure.",
      outcomes: [
        "Introduced PHPUnit coverage around critical backend flows to lower regression risk during releases",
        "Implemented Git-based CI pipelines so deployments were more repeatable and easier to trust",
        "Refactored legacy backend code into smaller reusable modules to reduce maintenance friction",
        "Improved backend performance in production while preserving delivery cadence",
      ],
      challenge:
        "The platform needed safer releases and cleaner backend structure without disrupting a live SaaS roadmap.",
      work: [
        "Added PHPUnit coverage to key backend paths with the highest regression risk",
        "Implemented CI checks around build and release workflows",
        "Refactored legacy backend modules into cleaner reusable components",
        "Improved performance in slow backend areas that affected day-to-day delivery",
      ],
      result:
        "Releases became more predictable, backend changes were easier to ship with confidence, and the codebase became easier to extend without compounding legacy risk.",
    },
    {
      id: "enterprise-platforms",
      slug: "enterprise-platform-delivery",
      title: "Enterprise platform delivery",
      shortTitle: "Enterprise platforms",
      stack: "PHP · APIs · Legacy modernisation · Delivery",
      summary:
        "Delivered backend work across media, commerce, logistics, and content platforms for established brands.",
      outcomes: [
        "Shipped backend changes for BeIN Sports, Coca-Cola Enterprises, DHL Resilience360, and Jamie Oliver",
        "Worked inside established codebases where reliability, release control, and cross-team coordination mattered",
        "Integrated platform changes without forcing disruptive rewrites or risky delivery pauses",
      ],
      challenge:
        "Each platform had different business constraints, delivery expectations, and legacy boundaries that required low-risk technical execution.",
      work: [
        "Delivered backend changes inside existing enterprise delivery processes",
        "Integrated APIs and platform improvements without interrupting ongoing operations",
        "Worked within legacy and cross-team constraints while keeping delivery moving",
      ],
      result:
        "Delivered practical backend change across complex environments where stability, coordination, and controlled releases mattered as much as the code itself.",
    },
  ],
  es: [
    {
      id: "lotto-logic",
      slug: "lotto-logic-ingenieria-saas",
      title: "Lotto Logic — Ingeniería SaaS",
      shortTitle: "Lotto Logic",
      stack: "Symfony · PHP · MongoDB · Git CI · AWS",
      summary:
        "Mejoré la confianza en los despliegues y el mantenimiento del backend dentro de un producto SaaS en producción con entregas continuas.",
      outcomes: [
        "Añadí cobertura con PHPUnit sobre flujos backend críticos para reducir el riesgo de regresiones en cada release",
        "Implementé pipelines de CI basados en Git para que los despliegues fueran más repetibles y fiables",
        "Refactoricé backend heredado en módulos más reutilizables y mantenibles",
        "Mejoré el rendimiento del backend en producción sin frenar el ritmo de entrega",
      ],
      challenge:
        "La plataforma necesitaba releases más seguros y una estructura backend más limpia sin interrumpir la hoja de ruta de un SaaS en producción.",
      work: [
        "Añadí cobertura con PHPUnit sobre rutas backend con mayor riesgo de regresión",
        "Implementé comprobaciones de CI sobre el flujo de build y release",
        "Refactoricé módulos backend heredados en componentes más claros y reutilizables",
        "Mejoré áreas lentas del backend que afectaban a la entrega diaria",
      ],
      result:
        "Los releases se volvieron más predecibles, los cambios backend se pudieron desplegar con más confianza y el codebase quedó más preparado para evolucionar sin aumentar el riesgo legado.",
    },
    {
      id: "enterprise-platforms",
      slug: "entrega-plataformas-enterprise",
      title: "Entrega para plataformas enterprise",
      shortTitle: "Plataformas enterprise",
      stack: "PHP · APIs · Modernización de legado · Delivery",
      summary:
        "Entregué trabajo backend para plataformas de medios, comercio, logística y contenido en marcas consolidadas.",
      outcomes: [
        "Entregué cambios backend para BeIN Sports, Coca-Cola Enterprises, DHL Resilience360 y Jamie Oliver",
        "Trabajé dentro de codebases establecidos donde la fiabilidad, el control de releases y la coordinación entre equipos importaban",
        "Integré cambios de plataforma sin forzar reescrituras disruptivas ni pausas de entrega innecesarias",
      ],
      challenge:
        "Cada plataforma tenía restricciones de negocio, expectativas de entrega y límites de legado distintos, por lo que la ejecución técnica debía ser segura y controlada.",
      work: [
        "Entregué cambios backend dentro de procesos enterprise ya establecidos",
        "Integré APIs y mejoras de plataforma sin interrumpir la operación en curso",
        "Trabajé con restricciones de legado y coordinación entre equipos manteniendo el delivery en movimiento",
      ],
      result:
        "Entregué cambios backend útiles en entornos complejos donde la estabilidad, la coordinación y el control del release importaban tanto como el propio código.",
    },
  ],
};

export function getCaseStudies(locale: Locale) {
  return caseStudiesByLocale[locale];
}

export function getCaseStudy(locale: Locale, slug: string) {
  return caseStudiesByLocale[locale].find((study) => study.slug === slug) ?? null;
}

export function getCaseStudyById(locale: Locale, id: CaseStudyId) {
  return caseStudiesByLocale[locale].find((study) => study.id === id) ?? null;
}

export function getCaseStudiesIndexPath(locale: Locale) {
  return locale === "es" ? "/es/casos" : "/en/case-studies";
}

export function getCaseStudyPath(locale: Locale, slug: string) {
  return `${getCaseStudiesIndexPath(locale)}/${slug}`;
}

export function getLocalizedCaseStudyPath(locale: Locale, id: CaseStudyId) {
  const study = getCaseStudyById(locale, id);
  return study ? getCaseStudyPath(locale, study.slug) : getCaseStudiesIndexPath(locale);
}
