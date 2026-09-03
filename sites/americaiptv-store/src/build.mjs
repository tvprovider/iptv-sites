#!/usr/bin/env node
// Zero-dependency static site generator for americaiptv.store.
// Reads page modules from src/pages/**, renders them through lib/render.mjs,
// and writes a static dist/ tree ready for any static host, plus
// dist/sitemap.xml and dist/robots.txt.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { page } from './lib/render.mjs';
import { site } from './data/business.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PAGES_DIR = path.join(__dirname, 'pages');

function walkPageFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkPageFiles(full));
    else if (entry.name.endsWith('.mjs')) out.push(full);
  }
  return out;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

async function main() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // Copy static assets through untouched. The functions/ directory is
  // intentionally NOT copied into dist/ — Wrangler compiles it directly
  // from the repo root into the worker script, and dist/ is served as
  // public static assets, so functions/ source would otherwise leak here.
  copyDir(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));
  if (fs.existsSync(path.join(ROOT, 'llms.txt'))) {
    fs.copyFileSync(path.join(ROOT, 'llms.txt'), path.join(DIST, 'llms.txt'));
  }

  const pageFiles = walkPageFiles(PAGES_DIR).sort();
  const urls = [];

  for (const file of pageFiles) {
    const mod = await import(`file://${file}?t=${Date.now()}`);
    const p = mod.default;
    const routePath = p.slug ? `/${p.slug}/` : '/';
    const html = page({
      title: p.title,
      description: p.description,
      path: routePath,
      bodyHtml: p.body,
      jsonld: p.jsonld || [],
      ogImage: p.ogImage,
      noindex: !!p.noindex,
      type: p.type || 'website',
    });

    const outDir = p.slug ? path.join(DIST, p.slug) : DIST;
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);

    if (!p.noindex) urls.push({ path: routePath, priority: routePath === '/' ? '1.0' : '0.7' });
    console.log(`  built ${routePath}`);
  }

  // 404 page (not included in the sitemap; served with a real 404 status by hosts that support it)
  const notFoundHtml = page({
    title: `Page Not Found | ${site.brand}`,
    description: 'The page you were looking for could not be found.',
    path: '/404.html',
    noindex: true,
    bodyHtml: `
      <section class="hero"><div class="container text-center">
        <span class="eyebrow">404</span>
        <h1>Page not found</h1>
        <p class="lead" style="margin:0 auto;">The page you're looking for doesn't exist or may have moved.</p>
        <div class="hero-actions" style="justify-content:center;">
          <a class="btn btn-primary btn-lg" href="/">Back to Home</a>
          <a class="btn btn-ghost btn-lg" href="/faq/">Visit the FAQ</a>
        </div>
      </div></section>`,
  });
  fs.writeFileSync(path.join(DIST, '404.html'), notFoundHtml);

  // sitemap.xml — canonical, indexable URLs only
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url><loc>${site.url}${u.path}</loc><priority>${u.priority}</priority></url>`)
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);

  // robots.txt
  const robots = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST, 'robots.txt'), robots);

  // _headers — base security headers (source-controlled) plus a generated
  // Content-Type block per HTML route, since Cloudflare's static-asset
  // serving doesn't attach a charset to text/html by default.
  const baseHeaders = fs.existsSync(path.join(ROOT, '_headers.base'))
    ? fs.readFileSync(path.join(ROOT, '_headers.base'), 'utf8').trimEnd()
    : '';
  const htmlRoutes = [...urls.map((u) => u.path), '/404.html'];
  const charsetBlocks = htmlRoutes
    .map((p) => `${p}\n  Content-Type: text/html; charset=utf-8`)
    .join('\n\n');
  fs.writeFileSync(path.join(DIST, '_headers'), `${baseHeaders}\n\n${charsetBlocks}\n`);

  console.log(`\nBuilt ${urls.length} indexable pages + 404 to ${path.relative(ROOT, DIST)}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
