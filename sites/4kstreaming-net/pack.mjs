import fs from 'node:fs';
import path from 'node:path';

const DIST = path.join(process.cwd(), 'dist');
const OUT = path.join(process.cwd(), 'payload');

function walk(dir, base) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'functions') continue;
    const full = path.join(dir, e.name);
    const rel = (base ? base + '/' : '') + e.name;
    if (e.isDirectory()) out = out.concat(walk(full, rel));
    else out.push(rel);
  }
  return out;
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const files = walk(DIST, '');
files.forEach((f, i) => {
  const content = fs.readFileSync(path.join(DIST, f), 'utf8');
  const outName = `f${String(i).padStart(2, '0')}.json`;
  fs.writeFileSync(path.join(OUT, outName), JSON.stringify({ path: f, content }));
});

fs.writeFileSync(path.join(OUT, '_manifest.json'), JSON.stringify(files, null, 2));
console.log('wrote', files.length, 'files to payload/');
