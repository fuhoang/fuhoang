const fallbackSiteUrl = "http://localhost:3000";

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, "");
}

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : fallbackSiteUrl);

export const siteUrl = normalizeSiteUrl(resolvedSiteUrl);
