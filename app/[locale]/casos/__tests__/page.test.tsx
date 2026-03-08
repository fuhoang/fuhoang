import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CaseStudiesIndexPageEs from "../page";

describe("CaseStudiesIndexPageEs", () => {
  it("renders the Spanish case studies index", async () => {
    const page = await CaseStudiesIndexPageEs({
      params: Promise.resolve({ locale: "es" }),
    });

    render(page);

    expect(
      screen.getByRole("heading", { name: "Casos de estudio" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Lotto Logic — Ingeniería SaaS")).toBeInTheDocument();
    expect(screen.getByText("Entrega para plataformas enterprise")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Leer caso" })).toHaveLength(2);
  });
});
