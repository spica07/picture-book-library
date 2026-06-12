import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { spawnSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const viewerDir = path.join(root, "viewer");
const manifestFile = path.join(viewerDir, "books", "manifest.js");
const maxWidth = Number(process.env.WEB_IMAGE_WIDTH || 1280);
const quality = Number(process.env.WEB_IMAGE_QUALITY || 82);

function loadManifest() {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(manifestFile, "utf8"), context, {
    filename: manifestFile,
  });
  return context.window.LIBRARY;
}

function loadBook(id) {
  const file = path.join(viewerDir, "books", `${id}.js`);
  let book = null;
  vm.runInNewContext(fs.readFileSync(file, "utf8"), {
    registerBook(data) {
      book = data;
    },
  }, { filename: file });
  if (!book) throw new Error(`Book file did not call registerBook(): ${file}`);
  return book;
}

function webTargetFor(sourceFile) {
  const parsed = path.parse(sourceFile);
  const dir = parsed.dir.replace(`${path.sep}illustrations_16x9`, `${path.sep}illustrations_web`);
  return path.join(dir, `${parsed.name}.webp`);
}

function sourceForManifestCover(coverFile) {
  if (!coverFile.includes(`${path.sep}illustrations_web${path.sep}`)) return coverFile;
  const parsed = path.parse(coverFile);
  const dir = parsed.dir.replace(`${path.sep}illustrations_web`, `${path.sep}illustrations_16x9`);
  return path.join(dir, `${parsed.name}.png`);
}

function addAsset(map, sourceFile) {
  if (!sourceFile || !fs.existsSync(sourceFile)) return;
  if (!sourceFile.includes(`${path.sep}illustrations_16x9${path.sep}`)) return;
  map.set(sourceFile, webTargetFor(sourceFile));
}

const assets = new Map();
const library = loadManifest();

for (const series of library) {
  for (const item of series.books) {
    addAsset(assets, sourceForManifestCover(path.resolve(viewerDir, item.cover)));
    if (!item.available) continue;

    const book = loadBook(item.id);
    const base = path.resolve(viewerDir, book.imageBase);
    addAsset(assets, path.join(base, book.cover));
    for (const scene of book.scenes) {
      addAsset(assets, path.join(base, scene.image));
    }
  }
}

let converted = 0;
let skipped = 0;

for (const [source, target] of assets) {
  fs.mkdirSync(path.dirname(target), { recursive: true });

  const sourceStat = fs.statSync(source);
  if (fs.existsSync(target) && fs.statSync(target).mtimeMs >= sourceStat.mtimeMs) {
    skipped += 1;
    continue;
  }

  const result = spawnSync("ffmpeg", [
    "-y",
    "-v", "error",
    "-i", source,
    "-vf", `scale=w='min(${maxWidth},iw)':h=-2`,
    "-c:v", "libwebp",
    "-quality", String(quality),
    "-compression_level", "6",
    target,
  ], { stdio: "inherit" });

  if (result.status !== 0) {
    throw new Error(`ffmpeg failed for ${source}`);
  }
  converted += 1;
}

console.log(`web images ready: ${converted} converted, ${skipped} skipped, ${assets.size} total`);
