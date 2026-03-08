# Release Checklist

Use this checklist for every production release.

## Before merge

1. Work on a `feature/*` or `fix/*` branch.
2. Run:
   - `npm run lint`
   - `npm test`
   - `npm run build`
3. Open a pull request into `main`.
4. Confirm these checks are green:
   - `test-and-build`
   - `Vercel`

## Merge and deploy

1. Merge the pull request into `main`.
2. Confirm the latest Vercel production deployment is `Ready`.
3. If production env vars changed, trigger a fresh production redeploy.

## Production verification

Check the live site after deployment:

1. `https://fuhoang.dev/en`
2. `https://fuhoang.dev/es`
3. `https://fuhoang.dev/robots.txt`
4. `https://fuhoang.dev/sitemap.xml`
5. One English case-study page
6. One Spanish case-study page

Confirm:

- canonical tags are correct
- `hreflang` alternates are present
- Open Graph image metadata is present
- JSON-LD is present
- locale switching works
- case-study links resolve correctly

## Tagging

Use lightweight semantic version tags on `main`.

Examples:

- `v1.0.1`
- `v1.1.0`

Tag flow:

1. Update local `main`
2. Create the tag on `main`
3. Push the tag to `origin`

Commands:

```bash
git checkout main
git pull origin main
git tag v1.1.0
git push origin v1.1.0
```

## Post-release follow-up

1. Check Vercel Analytics for traffic and engagement changes
2. Check Vercel Speed Insights for regressions
3. Review Google Search Console indexing and coverage
4. Note any issues before starting the next feature branch
