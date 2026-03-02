import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
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

    window.localStorage.clear();
    document.body.style.overflow = "";
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

  it("locks body scroll while the mobile menu is open", () => {
    renderHeader();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));
    expect(document.body.style.overflow).toBe("");
  });

  it("closes the mobile menu when a mobile nav link is clicked", () => {
    renderHeader();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const mobileNavigation = screen.getByRole("navigation", {
      name: "Mobile navigation",
    });

    fireEvent.click(within(mobileNavigation).getByRole("link", { name: "Services" }));

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).toBeNull();
    expect(document.body.style.overflow).toBe("");
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

  it("uses desktop controls at desktop-width browser sizes", () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 700,
    });
    window.dispatchEvent(new Event("resize"));

    renderHeader();

    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).toBeNull();
    expect(screen.getAllByRole("link", { name: /email me/i }).length).toBe(1);
  });

  it("syncs locale changes from the storage event", async () => {
    renderHeader();

    expect(screen.getByRole("link", { name: /services/i })).toBeInTheDocument();

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
