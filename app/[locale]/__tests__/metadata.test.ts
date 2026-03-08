import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/site", () => ({
  siteEmail: "fuhoang84@googlemail.com",
  siteName: "Fu Hoang",
  siteSocialLinks: [
    "https://github.com/fuhoang",
    "https://www.linkedin.com/in/fu-hoang84/",
  ],
  siteUrl: "https://fuhoang.dev",
  getLocaleMetadata: (locale: "en" | "es") =>
    locale === "es"
      ? {
          title: "Fu Hoang — Desarrollador Full-Stack Senior en Londres",
          description: "Descripcion ES",
        }
      : {
          title: "Fu Hoang — Senior Full-Stack Software Developer (London)",
          description: "Description EN",
        },
  getLocalizedPath: (locale: "en" | "es") => `/${locale}`,
}));

import { generateMetadata } from "../layout";

describe("locale metadata", () => {
  it("returns localized alternates and canonical metadata for English", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ locale: "en" }),
    });

    expect(metadata.alternates?.canonical).toBe("/en");
    expect(metadata.alternates?.languages?.en).toBe("/en");
    expect(metadata.alternates?.languages?.es).toBe("/es");
    expect(metadata.openGraph?.url).toBe("/en");
  });

  it("returns localized metadata for Spanish", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ locale: "es" }),
    });

    expect(metadata.title).toBe("Fu Hoang — Desarrollador Full-Stack Senior en Londres");
    expect(metadata.description).toBe("Descripcion ES");
    expect(metadata.openGraph?.locale).toBe("es_ES");
  });
});
