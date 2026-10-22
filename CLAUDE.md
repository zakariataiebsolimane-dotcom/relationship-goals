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
- Deploy: just commit + push to `main`. GitHub Action (`.github/workflows/deploy.yml`) builds
  and pushes the static site to the `deploy` branch → Hostinger (hPanel → Advanced → Git,
  auto-deployment ON) pulls `deploy` into `public_html`. Live in ~2 minutes.
  Do NOT also run `./deploy.sh` (manual fallback only, if Actions is down) — two pushes at
  once make Hostinger's clone fail ("shallow file has changed").
- Hostinger site: https://relationshipgoals.store (hPanel website was created as olive-partridge-884320.hostingersite.com)
  (US server). Domain moved from the old Horizons builder site on 2026-10-22; the builder site now lives at green-cattle-613978.hostingersite.com (unused).

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

## Analytics
- Google Analytics 4: property "Relationship Goals (relationshipgoals.store)" (id 560097432), measurement ID `G-ZRFZXP6XKL`,
  in Zakaria's GA account. Code: `apps/web/src/lib/analytics.ts` (consent mode v2 tied to the cookie banner:
  EEA/UK/CH denied until "Analytics" accepted, others granted; ads storage always denied unless "Marketing").
- Custom event `amazon_click` (params: product, link_place photo/button, page_path) on every Amazon link click.
  This is the main money metric. Outbound clicks are also on via enhanced measurement.
- Pin links should carry UTM tags: `?utm_source=pinterest&utm_medium=social&utm_campaign=<guide>&utm_content=<pin-id>`.
- Hostinger hPanel "Analytics" counts robots (AhrefsBot, scanners) — don't use it for visitor numbers.

## Known to-dos
- Email signup and contact forms only show a success message — they are not connected to any email service yet.
