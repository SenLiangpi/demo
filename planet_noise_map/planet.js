/* Planet heightmap generator using 3D Perlin noise + fBm.
   - Deterministic via string seed
   - Equirectangular projection (lon/lat -> unit sphere)
*/

function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function fade(t) {
  // 6t^5 - 15t^4 + 10t^3
  return t * t * t * (t * (t * 6 - 15) + 10);
}

class Perlin3D {
  constructor(seedStr) {
    const seedFn = xmur3(seedStr);
    const rng = mulberry32(seedFn());

    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;

    // Fisher–Yates shuffle
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const tmp = p[i];
      p[i] = p[j];
      p[j] = tmp;
    }

    this.perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];

    // Classic 12 gradients (improved Perlin)
    this.grad3 = [
      [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
      [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
      [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
    ];
  }

  dot(g, x, y, z) {
    return g[0] * x + g[1] * y + g[2] * z;
  }

  noise(x, y, z) {
    // Find unit cube
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const zf = z - Math.floor(z);

    const u = fade(xf);
    const v = fade(yf);
    const w = fade(zf);

    const p = this.perm;

    const A = p[X] + Y;
    const AA = p[A] + Z;
    const AB = p[A + 1] + Z;
    const B = p[X + 1] + Y;
    const BA = p[B] + Z;
    const BB = p[B + 1] + Z;

    const gAA = this.grad3[p[AA] % 12];
    const gBA = this.grad3[p[BA] % 12];
    const gAB = this.grad3[p[AB] % 12];
    const gBB = this.grad3[p[BB] % 12];
    const gAA1 = this.grad3[p[AA + 1] % 12];
    const gBA1 = this.grad3[p[BA + 1] % 12];
    const gAB1 = this.grad3[p[AB + 1] % 12];
    const gBB1 = this.grad3[p[BB + 1] % 12];

    const x1 = lerp(
      this.dot(gAA, xf, yf, zf),
      this.dot(gBA, xf - 1, yf, zf),
      u
    );
    const x2 = lerp(
      this.dot(gAB, xf, yf - 1, zf),
      this.dot(gBB, xf - 1, yf - 1, zf),
      u
    );
    const y1 = lerp(x1, x2, v);

    const x3 = lerp(
      this.dot(gAA1, xf, yf, zf - 1),
      this.dot(gBA1, xf - 1, yf, zf - 1),
      u
    );
    const x4 = lerp(
      this.dot(gAB1, xf, yf - 1, zf - 1),
      this.dot(gBB1, xf - 1, yf - 1, zf - 1),
      u
    );
    const y2 = lerp(x3, x4, v);

    // Result is approximately in [-1, 1]
    return lerp(y1, y2, w);
  }
}

function fbm(noise3d, x, y, z, octaves, lacunarity, gain) {
  let amp = 0.5;
  let freq = 1.0;
  let sum = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise3d.noise(x * freq, y * freq, z * freq);
    norm += amp;
    freq *= lacunarity;
    amp *= gain;
  }
  return sum / (norm || 1);
}

function ridgedFbm(noise3d, x, y, z, octaves, lacunarity, gain) {
  let amp = 0.5;
  let freq = 1.0;
  let sum = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    let n = noise3d.noise(x * freq, y * freq, z * freq);
    n = 1 - Math.abs(n); // ridges
    n *= n;
    sum += amp * n;
    norm += amp;
    freq *= lacunarity;
    amp *= gain;
  }
  return sum / (norm || 1);
}

function heightToColor(h01, seaLevel01) {
  // Returns base RGB (no shading yet)
  if (h01 < seaLevel01) {
    const t = clamp01(h01 / Math.max(1e-6, seaLevel01));
    // deep -> shallow
    const deep = [8, 24, 64];
    const shallow = [38, 92, 160];
    return [
      Math.round(lerp(deep[0], shallow[0], Math.pow(t, 1.2))),
      Math.round(lerp(deep[1], shallow[1], Math.pow(t, 1.1))),
      Math.round(lerp(deep[2], shallow[2], Math.pow(t, 1.0))),
    ];
  }

  const land = (h01 - seaLevel01) / Math.max(1e-6, 1 - seaLevel01);
  const t = clamp01(land);

  // beach -> plains -> hills -> mountains -> snow
  if (t < 0.06) return [194, 178, 128];
  if (t < 0.35) return [64, 140, 82];
  if (t < 0.58) return [88, 128, 84];
  if (t < 0.78) return [110, 110, 112];
  return [236, 238, 240];
}

function applyShade(rgb, shade) {
  const s = clamp01(shade);
  return [
    Math.round(rgb[0] * s),
    Math.round(rgb[1] * s),
    Math.round(rgb[2] * s),
  ];
}

function blendOver(baseRgb, overlayRgb, alpha01) {
  const a = clamp01(alpha01);
  return [
    Math.round(baseRgb[0] * (1 - a) + overlayRgb[0] * a),
    Math.round(baseRgb[1] * (1 - a) + overlayRgb[1] * a),
    Math.round(baseRgb[2] * (1 - a) + overlayRgb[2] * a),
  ];
}

function computeHillshade(height, w, h) {
  // Simple Lambert shading from height derivatives
  const light = normalize3([0.6, 0.35, 0.72]);
  const shade = new Float32Array(w * h);

  const get = (x, y) => {
    x = (x + w) % w; // wrap horizontally (lon)
    y = Math.max(0, Math.min(h - 1, y));
    return height[y * w + x];
  };

  const strength = 2.2;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (get(x + 1, y) - get(x - 1, y)) * strength;
      const dy = (get(x, y + 1) - get(x, y - 1)) * strength;
      const n = normalize3([-dx, -dy, 1]);
      const d = Math.max(0, n[0] * light[0] + n[1] * light[1] + n[2] * light[2]);
      // Keep some ambient so ocean isn't black
      shade[y * w + x] = 0.55 + 0.75 * d;
    }
  }

  return shade;
}

function normalize3(v) {
  const len = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / len, v[1] / len, v[2] / len];
}

function computeDownhillAndFlow(heights, w, h, seaLevel01) {
  // D8 steepest descent + flow accumulation (uniform rainfall)
  const downhill = new Int32Array(w * h);
  downhill.fill(-1);

  const flow = new Float32Array(w * h);
  flow.fill(1);

  const getIndex = (x, y) => {
    const xx = (x + w) % w;
    if (y < 0 || y >= h) return -1;
    return y * w + xx;
  };

  // Find downhill neighbor for each land cell
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      const hi = heights[i];
      if (hi <= seaLevel01) continue;

      let best = -1;
      let bestDrop = 0;

      for (let oy = -1; oy <= 1; oy++) {
        for (let ox = -1; ox <= 1; ox++) {
          if (ox === 0 && oy === 0) continue;
          const ni = getIndex(x + ox, y + oy);
          if (ni < 0) continue;
          const drop = hi - heights[ni];
          if (drop > bestDrop) {
            bestDrop = drop;
            best = ni;
          }
        }
      }

      // Stop rivers at the coast: only flow into another land cell
      if (best >= 0 && heights[best] > seaLevel01) downhill[i] = best;
    }
  }

  // Bucket order by height (descending) to avoid O(n log n) sort
  const binsCount = 1024;
  const bins = Array.from({ length: binsCount }, () => []);
  for (let i = 0; i < heights.length; i++) {
    const b = Math.max(0, Math.min(binsCount - 1, (heights[i] * (binsCount - 1)) | 0));
    bins[b].push(i);
  }

  for (let b = binsCount - 1; b >= 0; b--) {
    const bucket = bins[b];
    for (let k = 0; k < bucket.length; k++) {
      const i = bucket[k];
      if (heights[i] <= seaLevel01) continue;
      const d = downhill[i];
      if (d >= 0) flow[d] += flow[i];
    }
  }

  let maxFlowLand = 1;
  for (let i = 0; i < flow.length; i++) {
    if (heights[i] > seaLevel01 && flow[i] > maxFlowLand) maxFlowLand = flow[i];
  }

  return { downhill, flow, maxFlowLand };
}

function generateHeights({ width, height, seed, seaLevel01 }) {
  const perlin = new Perlin3D(seed);
  const heights = new Float32Array(width * height);

  // Scales tuned for “planet-like” patterns
  const baseScale = 2.15;
  const warpScale = 1.25;
  const warpStrength = 0.35;

  let minH = Infinity;
  let maxH = -Infinity;

  for (let y = 0; y < height; y++) {
    const v = y / (height - 1);
    const lat = (v - 0.5) * Math.PI; // [-pi/2, pi/2]
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);

    for (let x = 0; x < width; x++) {
      const u = x / (width - 1);
      const lon = (u - 0.5) * Math.PI * 2; // [-pi, pi]

      const cosLon = Math.cos(lon);
      const sinLon = Math.sin(lon);

      // Unit sphere point
      let sx = cosLat * cosLon;
      let sy = sinLat;
      let sz = cosLat * sinLon;

      // Domain warp to reduce “noise-islands” look
      const wx = fbm(perlin, sx * warpScale, sy * warpScale, sz * warpScale, 3, 2.0, 0.5);
      const wy = fbm(perlin, (sx + 19.1) * warpScale, (sy + 3.7) * warpScale, (sz - 11.4) * warpScale, 3, 2.0, 0.5);
      const wz = fbm(perlin, (sx - 7.2) * warpScale, (sy + 13.9) * warpScale, (sz + 5.5) * warpScale, 3, 2.0, 0.5);

      sx += wx * warpStrength;
      sy += wy * warpStrength;
      sz += wz * warpStrength;

      const base = fbm(perlin, sx * baseScale, sy * baseScale, sz * baseScale, 6, 2.0, 0.5);
      const detail = fbm(perlin, sx * baseScale * 3.2, sy * baseScale * 3.2, sz * baseScale * 3.2, 4, 2.15, 0.48);
      const ridges = ridgedFbm(perlin, sx * baseScale * 1.55, sy * baseScale * 1.55, sz * baseScale * 1.55, 5, 2.0, 0.52);

      // Height combine (still roughly [-1,1] range)
      let h = 0.62 * base + 0.18 * detail + 0.20 * (ridges * 2 - 1);

      // Slightly reduce extreme terrain near poles to keep it readable
      const pole = Math.abs(sinLat);
      h *= 1.0 - 0.18 * Math.pow(pole, 1.7);

      // Remap to [0,1]
      const h01 = clamp01(h * 0.5 + 0.5);
      heights[y * width + x] = h01;
      if (h01 < minH) minH = h01;
      if (h01 > maxH) maxH = h01;
    }
  }

  // Optional contrast curve around sea level to emphasize coasts/canyons
  // Keep it gentle so heights remain meaningful
  const contrast = 1.05;
  for (let i = 0; i < heights.length; i++) {
    const v = heights[i];
    const centered = v - seaLevel01;
    heights[i] = clamp01(seaLevel01 + Math.sign(centered) * Math.pow(Math.abs(centered), contrast));
  }

  return { heights, minH, maxH };
}

function render({ canvas, heights, seaLevel01, mode }) {
  const ctx = canvas.getContext('2d', { willReadFrequently: false });
  const w = canvas.width;
  const h = canvas.height;
  const img = ctx.createImageData(w, h);
  const data = img.data;

  const shade = computeHillshade(heights, w, h);
  const { flow, maxFlowLand } = computeDownhillAndFlow(heights, w, h, seaLevel01);

  // Dynamic river threshold based on overall flow; tuned to be visible but not noisy
  const riverThreshold = Math.max(60, maxFlowLand * 0.02);
  const logT = Math.log(riverThreshold);
  const logM = Math.log(Math.max(riverThreshold + 1, maxFlowLand));
  const riverBlue = [44, 140, 210];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      const baseIndex = i * 4;
      const v = heights[i];

      let rgb;
      if (mode === 'height') {
        const g = Math.round(v * 255);
        rgb = [g, g, g];
      } else {
        rgb = heightToColor(v, seaLevel01);
      }

      let shaded = applyShade(rgb, shade[i]);

      // Rivers overlay (only on land)
      if (v > seaLevel01) {
        const f = flow[i];
        if (f >= riverThreshold) {
          // Thickness/intensity grows sublinearly with flow
          const t = clamp01((Math.log(f) - logT) / Math.max(1e-6, (logM - logT)));
          const alpha = 0.18 + 0.62 * Math.pow(t, 0.85);
          shaded = blendOver(shaded, riverBlue, alpha);
        }
      }

      data[baseIndex + 0] = shaded[0];
      data[baseIndex + 1] = shaded[1];
      data[baseIndex + 2] = shaded[2];
      data[baseIndex + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
}

function formatMs(ms) {
  if (!Number.isFinite(ms)) return '-';
  if (ms < 1000) return `${ms.toFixed(0)}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

function init() {
  const canvas = document.getElementById('map');
  const seedEl = document.getElementById('seed');
  const seaEl = document.getElementById('sea');
  const seaValueEl = document.getElementById('seaValue');
  const modeEl = document.getElementById('mode');
  const regenEl = document.getElementById('regen');
  const randomEl = document.getElementById('random');
  const timeEl = document.getElementById('time');
  const rangeEl = document.getElementById('range');

  const randomSeed = () => {
    const s = Math.random().toString(16).slice(2, 10);
    const t = Date.now().toString(16).slice(-6);
    return `planet-${t}-${s}`;
  };

  if (!seedEl.value) seedEl.value = randomSeed();

  const updateSeaLabel = () => {
    const sea = Number(seaEl.value) / 100;
    seaValueEl.textContent = sea.toFixed(2);
  };

  updateSeaLabel();
  seaEl.addEventListener('input', () => {
    updateSeaLabel();
  });

  let isRendering = false;
  const generateAndRender = () => {
    if (isRendering) return;
    isRendering = true;

    const seed = seedEl.value?.trim() || 'planet';
    const seaLevel01 = Number(seaEl.value) / 100;
    const mode = modeEl.value;

    const t0 = performance.now();
    const { heights, minH, maxH } = generateHeights({
      width: canvas.width,
      height: canvas.height,
      seed,
      seaLevel01,
    });
    render({ canvas, heights, seaLevel01, mode });
    const t1 = performance.now();

    timeEl.textContent = formatMs(t1 - t0);
    rangeEl.textContent = `${minH.toFixed(3)}..${maxH.toFixed(3)} (sea=${seaLevel01.toFixed(2)})`;

    isRendering = false;
  };

  regenEl.addEventListener('click', generateAndRender);
  randomEl.addEventListener('click', () => {
    seedEl.value = randomSeed();
    generateAndRender();
  });

  modeEl.addEventListener('change', generateAndRender);
  seaEl.addEventListener('change', generateAndRender);

  // initial render
  generateAndRender();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
