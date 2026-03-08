import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/site", () => ({
  siteUrl: "https://fuhoang.dev",
}));

import { generateMetadata } from "../page";

describe("case study metadata", () => {
  it("returns localized alternates for an English case study", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({
        locale: "en",
        slug: "lotto-logic-saas-engineering",
      }),
    });

    expect(metadata.alternates?.canonical).toBe(
      "/en/case-studies/lotto-logic-saas-engineering",
    );
    expect(metadata.alternates?.languages?.es).toBe(
      "/es/casos/lotto-logic-ingenieria-saas",
    );
    expect(metadata.openGraph?.url).toBe(
      "https://fuhoang.dev/en/case-studies/lotto-logic-saas-engineering",
    );
  });
});
