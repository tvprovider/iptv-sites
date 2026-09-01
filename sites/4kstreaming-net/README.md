# 4kstreaming.net

Static source for the 4K Streaming IPTV marketing site. Zero build-tool
dependencies — a small hand-written Node.js static site generator renders
plain HTML/CSS/JS into `dist/`.

## Structure

```
src/
  build.mjs         static site generator (reads src/pages/**, writes dist/)
  validate.mjs      post-build checks: JSON-LD validity, single H1, unique
                    titles/descriptions, canonical tags, broken internal links
  lib/render.mjs     shared layout + reusable components (Navbar, Footer,
                    Hero, PricingCard, FAQAccordion, ComparisonTable, forms...)
  data/business.mjs  single source of truth: pricing, devices, FAQ, nav
  pages/*.mjs         one module per route; pages/guides/*.mjs = cluster
                    content articles
assets/             CSS, JS, images — copied verbatim into dist/assets
functions/api/      Cloudflare Pages Functions for the contact + trial forms
dist/               build output (gitignored — regenerate with `npm run build`)
```

## Build

```
npm run build      # writes dist/ (pages, sitemap.xml, robots.txt, assets)
node src/validate.mjs   # run after build; exits non-zero on any issue found
```

## Deployment

`dist/` is a plain static folder deployable to any static host. The contact
and trial forms additionally need an edge/serverless function runtime that
can execute `functions/api/lead.js` and `functions/api/trial.js` — these are
written in the Cloudflare Pages Functions format. Any host that supports that
format (or an equivalent runtime) works; a purely static host will serve the
pages fine but the forms will fail until functions are wired up there too.

## Required environment variables

Set at the **hosting provider**, never committed to git:

- `RESEND_API_KEY` — used server-side only by `functions/api/lead.js` and
  `functions/api/trial.js` to send form submissions via Resend to the
  internal support inbox. Never exposed to the client.

## Domain

Canonical host: `https://4kstreaming.net` (no `www`). If a `www` DNS record
exists, it should redirect to the apex domain at the hosting/DNS layer so
canonical tags, the sitemap, and actual served URLs all agree.

## SEO/GEO notes

- `sitemap.xml` and `robots.txt` are generated at build time from the same
  page list — no manually-maintained URL list to drift out of sync.
- Every page sets a unique `<title>`, meta description, canonical URL, and
  Open Graph/Twitter tags (`src/lib/render.mjs: headMeta`).
- JSON-LD: `Organization` + `WebSite` on every page, plus `BreadcrumbList`,
  `FAQPage`, and `Article` where relevant. Written and validated by hand
  against schema.org — see `src/lib/render.mjs`.
- Analytics/Search Console/Bing Webmaster Tools verification snippets are
  **not yet added** — there's no placeholder verification ID to fake. Add
  the real verification meta tag or DNS record once the owner has an
  account, in `src/lib/render.mjs: page()`.

## Content model

`src/data/business.mjs` is the only place plan pricing, device support, and
the 7 core FAQ questions are defined — every page imports from there, so a
price or device change only needs to happen once.
