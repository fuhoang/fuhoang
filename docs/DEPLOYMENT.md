# Deployment

## Vercel Production

Production hosting runs on Vercel.

### Required settings

- Production branch: `main`
- Environment variable: `NEXT_PUBLIC_SITE_URL=https://fuhoang.dev`

### Deploy flow

1. Create a `feature/*` or `fix/*` branch.
2. Open a pull request into `main`.
3. Wait for `test-and-build` to pass.
4. Merge the PR.
5. Confirm the Vercel production deployment is `Ready`.

### Release checks

After each production deploy, verify:

- `https://fuhoang.dev/robots.txt`
- `https://fuhoang.dev/sitemap.xml`
- canonical URL in page source
- Open Graph image metadata
- JSON-LD script in page source

### Versioning

Use lightweight Git tags for release markers.

Examples:

- `v1.0.0`
- `v1.0.1`

Use the full release workflow in [Release Checklist](./RELEASE.md).

## URL strategy

- `/` redirects to the preferred locale
- `/en` is the default English landing route
- `/es` is the crawlable Spanish landing route
- locale switching keeps the current page section hash when possible


## Search Console

After production is live and stable:

1. Add the production domain to Google Search Console
2. Submit `https://fuhoang.dev/sitemap.xml`
3. Re-check indexing after new pages are merged


## Post-launch monitoring

After each meaningful content or SEO release:

1. Confirm the latest production deployment is `Ready` in Vercel
2. Re-check `robots.txt` and `sitemap.xml`
3. Inspect `/en` and `/es` for canonical and `hreflang` tags
4. Inspect one English and one Spanish case-study page
5. Check Search Console for indexing and coverage changes
