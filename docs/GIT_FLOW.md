# Git Flow

This project uses a lightweight trunk-based flow centered on `main`.

## Branch Rules

- `main` is the production branch.
- Do not commit directly to `main` for feature work.
- All changes should go through a short-lived branch and a pull request.

## Branch Naming

Use the following prefixes:

- `feature/<short-name>` for new features
- `fix/<short-name>` for bug fixes
- `refactor/<short-name>` for code cleanup
- `chore/<short-name>` for maintenance
- `hotfix/<short-name>` for urgent production fixes

Examples:

- `feature/mobile-nav`
- `fix/ci-build`
- `refactor/header-components`

## Daily Workflow

1. Sync `main`
2. Create a branch
3. Make changes
4. Run local checks
5. Push branch
6. Open a pull request
7. Merge after checks pass

Commands:

```bash
git checkout main
git pull origin main
git checkout -b feature/mobile-nav

# work

npm run lint
npm test
npm run build

git add .
git commit -m "Add mobile navigation"
git push -u origin feature/mobile-nav
```

## Pull Request Rules

- Keep PRs focused and small.
- Require CI to pass before merge.
- Prefer squash merge for a clean `main` history.
- Use clear commit messages with one purpose per commit.

## Hotfix Flow

For urgent production fixes:

1. Branch from `main`
2. Use a `hotfix/*` branch
3. Run the same validation checks
4. Open and merge a PR as soon as CI passes

Example:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/header-overlap
```

## Release Approach

- `main` should always be deployable.
- Every merge to `main` triggers CI/CD.
- Prefer small, frequent merges over large batches.

## Required Local Checks

Before opening a PR, run:

```bash
npm run lint
npm test
npm run build
```
