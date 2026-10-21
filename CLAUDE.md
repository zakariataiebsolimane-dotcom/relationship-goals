# Relationship Goals — relationshipgoals.store

Amazon affiliate site (gift ideas for him, long distance, date night, couple style).
Traffic comes from Pinterest pins that link to the guides here; guides link to Amazon.
Owner: Zakaria (English is not his first language — talk to him in simple English).

## Stack
- React Router v8 + Vite + Tailwind, in `apps/web` (npm workspaces monorepo).
- **Static site**: `ssr: false` + `prerender` in `apps/web/react-router.config.ts`.
  Every page is built to plain HTML in `dist/apps/web/client` — no Node server needed.
- Hosting: Hostinger web hosting (Apache). `apps/web/public/.htaccess` handles
  clean URLs (no trailing slash), HTTPS and 404s.
- Deploy: commit + push to `main`, then run `./deploy.sh` — it builds and force-pushes
  the static site to the `deploy` branch. Hostinger Git pulls `deploy` into `public_html`.
  (`.github/workflows/deploy.yml` does the same automatically if GitHub Actions gets enabled.)

## Commands (run from repo root)
- `npm install`
- `npm run dev` — dev server on :3000
- `NODE_ENV=production npm run build` — static build into `dist/apps/web/client`
- Preview the build: `cd dist/apps/web/client && python3 -m http.server 8099`

## Content lives in `apps/web/src/data`
- `guides.ts` — guides (title, slug, seoTitle, metaDescription, intro, image, sections → products, comparison, faq).
  New guides are prerendered and added to the sitemap automatically.
- `ideas.ts` — idea pages + shared `images` map. `categories.ts` — categories.
- Product card UI: `src/components/guide-detail.tsx` (photo beside product, badge, Amazon button). Styles: `src/index.css`.

## Amazon Associates rules (never break these)
- Tracking ID: `relations0237-20`. Product links: `https://www.amazon.com/dp/<ASIN>?tag=relations0237-20`.
- Links get `rel="nofollow sponsored noopener"` and `target="_blank"`.
- Disclosure on every guide: "As an Amazon Associate I earn from qualifying purchases."
- **No prices** on the site or pins (they change; use "See photos & price on Amazon").
- **No Amazon product images** until the Creators API is unlocked (needs 10 sales in 30 days).
  Until then product photos are free Pexels mood photos (not the product) + the "See real product" badge.
  Pexels URL format: `https://images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`
- No link shorteners/cloaking, no affiliate links in emails or PDFs, no self-purchases.

## Writing style for guides
- Fun to read, short paragraphs, speaks to her (women 18–34 buying for boyfriend/husband).
- Each product: "Label: product name", 2–3 sentence why-he'll-love-it, social proof (review counts), no prices.
- Every guide has: intro, themed sections, quick comparison table, FAQ (for SEO + FAQ schema).

## Known to-dos
- Email signup and contact forms only show a success message — they are not connected to any email service yet.
