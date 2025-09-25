Erigea Loisirs — Corporate website (Next.js 14/15, TypeScript, Tailwind v4)

Setup local

- Node 20+
- npm install
- npm run dev -- --port 5001 → http://localhost:5001

Design System (Stitch)

- Tokens: stitch/tokens.json mappés dans tailwind.config.ts (colors, spacing, radius, shadows, transitions)
- Variables CSS exposées dans src/app/globals.css
- Typo: Inter/Poppins via next/font

Architecture

- App Router: /(site)/[locale], presse en Markdown/MDX (content/press)
- Composants DS: src/components/ds (Button, Card, Badge), sections: src/components/site

Contenu Presse

- Ajouter un fichier .md dans content/press selon le front-matter du prompt
- Liste: /[locale]/press, Détail: /[locale]/press/[slug]

SEO

- Metadata via app/layout.tsx, JSON-LD Organization/WebSite + NewsArticle sur les CP
- OG images dynamiques: /api/og?title=...&date=...
- Sitemap: /sitemap.xml, Robots: /robots.txt

Tests

- npm run test:e2e (Playwright + axe)

Docker/Ionos

- docker compose up -d --build
- Nginx: gzip, cache-control, security headers (nginx/nginx.conf)
- deploy.sh: installe Docker si besoin, lance docker compose

Contrib

- Husky pre-commit: eslint + prettier via lint-staged

Workflow de contribution

- Après chaque tâche terminée (unité de travail cohérente), effectuer un commit puis un push immédiat.
- Préférer des commits atomiques et descriptifs (scope clair, e.g. `feat(site): ...`, `fix(press): ...`).
- Ne pas accumuler plusieurs tâches dans un même commit.
