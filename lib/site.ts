const fallbackSiteUrl = "http://localhost:3000";

export const siteName = "Fu Hoang";
export const siteTitle = "Fu Hoang — Senior Full-Stack Software Developer (London)";
export const siteDescription =
  "Senior Full-Stack Software Developer in London. Next.js, React, Laravel, MongoDB. Testing, CI/CD, AWS. Contract & freelance.";
export const siteSocialLinks = [
  "https://github.com/fuhoang",
  "https://www.linkedin.com/in/fu-hoang84/",
  "https://www.instagram.com/fuhoang/",
  "https://wa.me/447535034000",
] as const;
export const siteEmail = "fuhoang84@googlemail.com";

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
