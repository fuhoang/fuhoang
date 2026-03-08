import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CaseStudyPage from "../page";

describe("CaseStudyPage", () => {
  it("renders the English case study detail page", async () => {
    const page = await CaseStudyPage({
      params: Promise.resolve({
        locale: "en",
        slug: "lotto-logic-saas-engineering",
      }),
    });

    render(page);

    expect(
      screen.getByRole("heading", { name: "Lotto Logic — SaaS engineering" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Challenge" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What I did" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Result" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Key outcomes" })).toBeInTheDocument();
  });
});
