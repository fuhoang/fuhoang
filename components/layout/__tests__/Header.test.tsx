import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import type { Locale } from "@/components/i18n/types";
import { Header } from "../Header";

const replaceMock = vi.fn();
let pathnameMock = "/en";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: replaceMock }),
  usePathname: () => pathnameMock,
}));

function renderHeader(initialLocale?: Locale) {
  return render(
    <LanguageProvider initialLocale={initialLocale}>
      <Header />
    </LanguageProvider>,
  );
}

describe("Header", () => {
  beforeEach(() => {
    const mediaQueryListeners = new Set<(event: MediaQueryListEvent) => void>();

    window.matchMedia = ((query: string) => ({
      matches: window.innerWidth >= 640,
      media: query,
      onchange: null,
      addListener: (listener: (event: MediaQueryListEvent) => void) => {
        mediaQueryListeners.add(listener);
      },
      removeListener: (listener: (event: MediaQueryListEvent) => void) => {
        mediaQueryListeners.delete(listener);
      },
      addEventListener: (_event: string, listener: (event: MediaQueryListEvent) => void) => {
        mediaQueryListeners.add(listener);
      },
      removeEventListener: (
        _event: string,
        listener: (event: MediaQueryListEvent) => void,
      ) => {
        mediaQueryListeners.delete(listener);
      },
      dispatchEvent: () => false,
    })) as typeof window.matchMedia;

    replaceMock.mockReset();
    pathnameMock = "/en";
    window.localStorage.clear();
    document.body.style.overflow = "";
    document.cookie = "locale=; Max-Age=0; path=/";
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 375,
    });
    window.dispatchEvent(new Event("resize"));
    window.history.replaceState({}, "", "/en");
  });

  it("renders the brand logo link", () => {
    renderHeader("en");

    expect(screen.getByRole("link", { name: "Fu Hoang home" })).toHaveAttribute(
      "href",
      "#",
    );
  });

  it("opens and closes the mobile menu", () => {
    renderHeader("en");

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

  it("locks body scroll while the mobile menu is open", () => {
    renderHeader("en");

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));
    expect(document.body.style.overflow).toBe("");
  });

  it("closes the mobile menu when a mobile nav link is clicked", () => {
    renderHeader("en");

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const mobileNavigation = screen.getByRole("navigation", {
      name: "Mobile navigation",
    });

    fireEvent.click(within(mobileNavigation).getByRole("link", { name: "Services" }));

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).toBeNull();
    expect(document.body.style.overflow).toBe("");
  });

  it("closes the mobile menu on outside click", () => {
    renderHeader("en");

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    fireEvent.mouseDown(document.body);

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("uses desktop controls at desktop-width browser sizes", () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 700,
    });
    window.dispatchEvent(new Event("resize"));

    renderHeader("en");

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).toBeNull();
    expect(screen.getAllByRole("link", { name: /email me/i }).length).toBe(1);
  });

  it("switches locale by updating state and replacing the locale path", async () => {
    pathnameMock = "/en";
    window.history.replaceState({}, "", "/en#contact");
    renderHeader("en");

    fireEvent.click(screen.getByRole("switch", { name: /switch to spanish/i }));

    await waitFor(() => {
      expect(screen.getByRole("switch", { name: /cambiar a ingl[eé]s/i })).toBeInTheDocument();
    });

    expect(window.localStorage.getItem("locale")).toBe("es");
    expect(document.cookie).toContain("locale=es");
    expect(replaceMock).toHaveBeenCalledWith("/es#contact");
  });

  it("syncs locale changes from the storage event", async () => {
    renderHeader("en");

    window.localStorage.setItem("locale", "es");
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "locale",
        newValue: "es",
      }),
    );

    await waitFor(() => {
      expect(
        screen.getByRole("switch", { name: /cambiar a ingl[eé]s/i }),
      ).toBeInTheDocument();
    });
  });
});
