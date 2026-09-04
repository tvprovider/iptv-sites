import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.cwd(), 'dist');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.name === 'index.html' || e.name === '404.html') out.push(full);
  }
  return out;
}

const files = walk(DIST);
let errors = 0;
const titles = new Map();
const descs = new Map();
const h1s = new Map();

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      console.log('BAD JSON-LD in', f, e.message);
      errors++;
    }
  }

  const h1Count = (html.match(/<h1[ >]/g) || []).length;
  if (h1Count !== 1) {
    console.log(f, 'h1 count =', h1Count);
    errors++;
  }

  const title = (html.match(/<title>(.*?)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="(.*?)">/) || [])[1];
  if (!title) { console.log(f, 'MISSING TITLE'); errors++; }
  if (!desc) { console.log(f, 'MISSING DESCRIPTION'); errors++; }
  const isNoindexPage = f.endsWith('404.html');
  if (!isNoindexPage) {
    if (title && title.length > 60) { console.log(f, `TITLE TOO LONG (${title.length} chars):`, title); errors++; }
    if (desc && (desc.length < 70 || desc.length > 160)) { console.log(f, `DESCRIPTION LENGTH ${desc.length} chars (want 70-160):`, desc); errors++; }
  }
  if (title) { if (titles.has(title)) console.log('DUPLICATE TITLE', title, 'in', f, 'and', titles.get(title)); titles.set(title, f); }
  if (desc) { if (descs.has(desc)) console.log('DUPLICATE DESCRIPTION in', f, 'and', descs.get(desc)); descs.set(desc, f); }

  // canonical
  if (!html.includes('rel="canonical"')) { console.log(f, 'MISSING CANONICAL'); errors++; }

  // internal links pointing at files that must exist
  for (const m of html.matchAll(/href="(\/[a-zA-Z0-9\-\/#]*)"/g)) {
    let href = m[1].split('#')[0];
    if (!href || href === '/') continue;
    if (!href.endsWith('/')) continue; // only check directory-style routes
    const target = path.join(DIST, href, 'index.html');
    if (!fs.existsSync(target)) {
      console.log('BROKEN LINK', href, 'referenced in', f);
      errors++;
    }
  }
}

console.log(`\nChecked ${files.length} pages. Errors: ${errors}`);
process.exit(errors ? 1 : 0);
