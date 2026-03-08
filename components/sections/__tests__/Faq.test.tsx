import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Faq } from "../Faq";

describe("Faq", () => {
  it("renders the FAQ heading and common questions", () => {
    render(<Faq />);

    expect(
      screen.getByRole("heading", { name: "Common questions" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("What kinds of projects do you work on?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I usually help startups and product teams/i),
    ).toBeInTheDocument();
  });
});
