import zlib from 'node:zlib';
import fs from 'node:fs';

const SIZE = 180;
const SCALE = SIZE / 32; // matches the 32x32 viewBox of favicon.svg / logoMark()
const BG = [13, 13, 13]; // #0d0d0d, same as the real brand mark background
const FG = [237, 53, 8]; // #ed3508, same brand red as the zigzag stroke

// Same zigzag path as favicon.svg / logoMark(): "M9 21 L14 11 L17 17 L20 11 L23 21"
const pts = [
  [9, 21], [14, 11], [17, 17], [20, 11], [23, 21],
].map(([x, y]) => [x * SCALE, y * SCALE]);
const STROKE = 2.4 * SCALE;

function distToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  let t = lenSq === 0 ? 0 : ((px - ax) * dx + (py - ay) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + t * dx, cy = ay + t * dy;
  return Math.hypot(px - cx, py - cy);
}

function onStroke(x, y) {
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
    if (distToSegment(x, y, ax, ay, bx, by) <= STROKE / 2) return true;
  }
  return false;
}

const rows = [];
for (let y = 0; y < SIZE; y++) {
  const row = [0];
  for (let x = 0; x < SIZE; x++) {
    // supersample 2x2 for basic anti-aliasing on the diagonal stroke
    let hits = 0;
    for (const [ox, oy] of [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]]) {
      if (onStroke(x + ox, y + oy)) hits++;
    }
    const t = hits / 4;
    const px = [
      Math.round(BG[0] + (FG[0] - BG[0]) * t),
      Math.round(BG[1] + (FG[1] - BG[1]) * t),
      Math.round(BG[2] + (FG[2] - BG[2]) * t),
    ];
    row.push(px[0], px[1], px[2]);
  }
  rows.push(Buffer.from(row));
}
const raw = Buffer.concat(rows);

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(zlib.crc32(typeData) >>> 0, 0);
  return Buffer.concat([len, typeData, crc]);
}

const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(SIZE, 0);
ihdr.writeUInt32BE(SIZE, 4);
ihdr[8] = 8;
ihdr[9] = 2;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const idatData = zlib.deflateSync(raw);
const png = Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idatData), chunk('IEND', Buffer.alloc(0))]);

const out = process.argv[2];
fs.writeFileSync(out, png);
console.log('wrote', out, png.length, 'bytes');
