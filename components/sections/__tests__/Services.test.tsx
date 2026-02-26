import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Services } from "../Services";

describe("Services", () => {
  it("renders section heading", () => {
    render(<Services />);

    expect(
      screen.getByRole("heading", { name: "How I can help" }),
    ).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    render(<Services />);

    expect(screen.getByText("Full-Stack Development")).toBeInTheDocument();
    expect(screen.getByText("Platform Improvement")).toBeInTheDocument();
    expect(screen.getByText("Testing & CI/CD")).toBeInTheDocument();
    expect(screen.getByText("API & Data Integrations")).toBeInTheDocument();
  });
});
