import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Footer } from "../Footer";

describe("Footer", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders contact link", () => {
    render(<Footer />);

    const contactLink = screen.getByRole("link", { name: "Contact" });
    expect(contactLink).toHaveAttribute("href", "#contact");
  });

  it("renders current year", () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument();
  });
});
