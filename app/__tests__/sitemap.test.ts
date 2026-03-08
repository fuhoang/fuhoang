import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/site", () => ({
  siteUrl: "https://fuhoang.dev",
  getLocalizedPath: (locale: "en" | "es") => `/${locale}`,
}));

import sitemap from "../sitemap";

describe("sitemap", () => {
  it("includes locale landing pages, case study indexes, and case study details", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain("https://fuhoang.dev/en");
    expect(urls).toContain("https://fuhoang.dev/es");
    expect(urls).toContain("https://fuhoang.dev/en/case-studies");
    expect(urls).toContain("https://fuhoang.dev/es/casos");
    expect(urls).toContain(
      "https://fuhoang.dev/en/case-studies/lotto-logic-saas-engineering",
    );
    expect(urls).toContain(
      "https://fuhoang.dev/es/casos/lotto-logic-ingenieria-saas",
    );
  });
});
