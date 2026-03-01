import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { Header } from "../Header";

function renderHeader() {
  return render(
    <LanguageProvider>
      <Header />
    </LanguageProvider>,
  );
}

describe("Header", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("persists language selection", () => {
    const { unmount } = renderHeader();

    fireEvent.click(screen.getByRole("switch"));

    expect(window.localStorage.getItem("locale")).toBe("es");
    expect(screen.getAllByRole("link", { name: /escríbeme/i }).length).toBe(1);

    unmount();
    renderHeader();

    expect(screen.getAllByRole("link", { name: /escríbeme/i }).length).toBe(1);
  });

  it("renders the brand logo link", () => {
    renderHeader();

    expect(screen.getByRole("link", { name: "Fu Hoang home" })).toHaveAttribute(
      "href",
      "#",
    );
  });

  it("opens and closes the mobile menu", () => {
    renderHeader();

    const toggle = screen.getByRole("button", { name: "Open menu" });
    const navigation = document.getElementById("mobile-navigation");

    expect(navigation).not.toBeNull();
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(navigation).toHaveAttribute("aria-hidden", "true");
    expect(navigation?.className).toContain("pointer-events-none");

    fireEvent.click(toggle);

    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(navigation).toHaveAttribute("aria-hidden", "false");
    expect(navigation?.className).toContain("pointer-events-auto");

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(navigation).toHaveAttribute("aria-hidden", "true");
    expect(navigation?.className).toContain("pointer-events-none");
  });

  it("closes the mobile menu on outside click", () => {
    renderHeader();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    fireEvent.mouseDown(document.body);

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
