import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 375,
    });
    window.dispatchEvent(new Event("resize"));
  });

  it("persists language selection", () => {
    const { unmount } = renderHeader();

    fireEvent.click(screen.getByRole("switch"));

    expect(window.localStorage.getItem("locale")).toBe("es");
    expect(screen.getByRole("link", { name: /servicios/i })).toBeInTheDocument();

    unmount();
    renderHeader();

    expect(screen.getByRole("link", { name: /servicios/i })).toBeInTheDocument();
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
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).toBeNull();

    fireEvent.click(toggle);

    const navigation = screen.getByRole("navigation", {
      name: "Mobile navigation",
    });

    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(navigation).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).toBeNull();
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

  it("uses desktop controls at desktop-width browser sizes", async () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 700,
    });
    window.dispatchEvent(new Event("resize"));

    renderHeader();

    await waitFor(() => {
      expect(screen.queryByRole("button", { name: "Open menu" })).toBeNull();
    });

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).toBeNull();
    expect(screen.getAllByRole("link", { name: /email me/i }).length).toBe(1);
  });
});
