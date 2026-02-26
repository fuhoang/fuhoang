import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Contact } from "../Contact";

describe("Contact", () => {
  it("renders section heading and email link", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", { name: /let.s talk/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "fuhoang84@googlemail.com" }),
    ).toHaveAttribute("href", "mailto:fuhoang84@googlemail.com");
  });

  it("renders intake checklist items", () => {
    render(<Contact />);

    expect(screen.getByText("What to include")).toBeInTheDocument();
    expect(screen.getByText("• Current stack")).toBeInTheDocument();
    expect(screen.getByText("• What you’re building")).toBeInTheDocument();
    expect(screen.getByText("• Timeline")).toBeInTheDocument();
    expect(screen.getByText("• Where you need support")).toBeInTheDocument();
  });
});
