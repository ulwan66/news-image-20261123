// Entry point for the news-image-20261123 make.fun bounty.
//
// The front page image lives in this repository as entry.png.
// This program places a copy of it at <output>/entry.png, where
// <output> comes from MAKEFUN_OUTPUT_DIR when set, else /output.
//
// Node 22, standard library only. No dependencies, no network.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_NAME = "entry.png";
const OUTPUT_NAME = "entry.png";
const SIZE_LIMIT = 1_048_576;

function scriptDir() {
  return dirname(fileURLToPath(import.meta.url));
}

function outputDir() {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  return "/output";
}

function sha256Hex(path) {
  const digest = createHash("sha256");
  digest.update(readFileSync(path));
  return digest.digest("hex");
}

function main() {
  const here = scriptDir();
  const source = join(here, SOURCE_NAME);
  const destDir = outputDir();
  const dest = join(destDir, OUTPUT_NAME);

  if (!existsSync(source)) {
    console.error(`missing source image: ${source}`);
    process.exit(1);
  }

  const size = statSync(source).size;
  if (size > SIZE_LIMIT) {
    console.error(`source image too large: ${size} bytes (limit ${SIZE_LIMIT})`);
    process.exit(1);
  }

  mkdirSync(destDir, { recursive: true });
  copyFileSync(source, dest);

  const copied = sha256Hex(dest);
  console.log(`wrote ${dest} (${size} bytes, sha256 ${copied})`);
}

main();
