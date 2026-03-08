import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CaseStudyPageEs from "../page";

describe("CaseStudyPageEs", () => {
  it("renders the Spanish case study detail page", async () => {
    const page = await CaseStudyPageEs({
      params: Promise.resolve({
        locale: "es",
        slug: "lotto-logic-ingenieria-saas",
      }),
    });

    render(page);

    expect(
      screen.getByRole("heading", { name: "Lotto Logic — Ingeniería SaaS" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Reto" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Qué hice" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Resultado" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Resultados clave" })).toBeInTheDocument();
  });
});
