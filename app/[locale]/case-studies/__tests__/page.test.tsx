import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CaseStudiesIndexPage from "../page";

describe("CaseStudiesIndexPage", () => {
  it("renders the English case studies index", async () => {
    const page = await CaseStudiesIndexPage({
      params: Promise.resolve({ locale: "en" }),
    });

    render(page);

    expect(
      screen.getByRole("heading", { name: "Case studies" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Lotto Logic — SaaS engineering")).toBeInTheDocument();
    expect(screen.getByText("Enterprise platform delivery")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Read case study" })).toHaveLength(2);
  });
});
