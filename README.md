# Portfolio

Source for [aeh961.github.io/Portfolio](https://aeh961.github.io/Portfolio/) — Abdallah El Hamawi's personal portfolio.

Built with Vite, React, TypeScript, and Tailwind CSS. Deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — typecheck and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run format` / `npm run format:check` — Prettier
- `npm run typecheck` — TypeScript project check with no emit

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The Pages source must be set to **GitHub Actions** under repo Settings → Pages.
