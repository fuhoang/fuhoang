import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "../Hero";

describe("Hero", () => {
  it("renders primary heading and action links", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /building and improving production-grade web systems/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Email me" })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(
      screen.getByRole("link", { name: "View selected work" }),
    ).toHaveAttribute("href", "#work");
  });

  it("renders stack details", () => {
    render(<Hero />);

    expect(screen.getByText("Core stack")).toBeInTheDocument();
    expect(
      screen.getByText(/Next\.js · React · Laravel · MongoDB/i),
    ).toBeInTheDocument();
  });
});
