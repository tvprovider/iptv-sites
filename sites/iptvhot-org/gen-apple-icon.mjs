import zlib from 'node:zlib';
import fs from 'node:fs';

const SIZE = 180;
const SCALE = SIZE / 32; // matches the 32x32 viewBox of favicon.svg / logoMark()
const BG = [26, 7, 19]; // #1a0713
const RED = [219, 39, 119]; // #db2777 (brand magenta; keeping the var name to minimize the diff against the shared script)
const WHITE = [255, 255, 255];

const s = (v) => v * SCALE;

// Point-in-rounded-rect test (standard rounded-box SDF, simplified to containment).
function inRoundedRect(px, py, x, y, w, h, r) {
  if (px < x || px > x + w || py < y || py > y + h) return false;
  const qx = Math.min(Math.max(px, x + r), x + w - r);
  const qy = Math.min(Math.max(py, y + r), y + h - r);
  const dx = px - qx, dy = py - qy;
  return dx * dx + dy * dy <= r * r;
}

function inRect(px, py, x, y, w, h) {
  return px >= x && px <= x + w && py >= y && py <= y + h;
}

function inTriangle(px, py, ax, ay, bx, by, cx, cy) {
  const sign = (x1, y1, x2, y2, x3, y3) => (x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3);
  const d1 = sign(px, py, ax, ay, bx, by);
  const d2 = sign(px, py, bx, by, cx, cy);
  const d3 = sign(px, py, cx, cy, ax, ay);
  const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
  const hasPos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(hasNeg && hasPos);
}

// Shapes, in paint order, each with its own color — matches favicon.svg exactly.
const shapes = [
  { test: (x, y) => inRoundedRect(x, y, s(6), s(7), s(20), s(15), s(3)), color: RED },
  { test: (x, y) => inRoundedRect(x, y, s(8.2), s(9.2), s(15.6), s(10), s(1.8)), color: BG },
  { test: (x, y) => inTriangle(x, y, s(13.5), s(11), s(13.5), s(17.4), s(19), s(14.2)), color: WHITE },
  { test: (x, y) => inRect(x, y, s(14), s(22), s(4), s(3)), color: RED },
  { test: (x, y) => inRoundedRect(x, y, s(10), s(25), s(12), s(2), s(1)), color: RED },
];

function colorAt(x, y) {
  let color = BG;
  for (const shape of shapes) if (shape.test(x, y)) color = shape.color;
  return color;
}

const rows = [];
for (let y = 0; y < SIZE; y++) {
  const row = [0]; // filter byte: None
  for (let x = 0; x < SIZE; x++) {
    // 2x2 supersample for anti-aliased edges
    let r = 0, g = 0, b = 0;
    for (const [ox, oy] of [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]]) {
      const c = colorAt(x + ox, y + oy);
      r += c[0]; g += c[1]; b += c[2];
    }
    row.push(Math.round(r / 4), Math.round(g / 4), Math.round(b / 4));
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
