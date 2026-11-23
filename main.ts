// news-image-20261123 entry (Node 22, standard library only).
// The image is entry.png beside this file; the program copies it to the
// output directory the grader provides (/output, or MAKEFUN_OUTPUT_DIR
// when run locally), so the judge sees exactly the bytes of that file.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'entry.png');
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);

// Fail loudly instead of shipping a partial copy.
if (statSync(dst).size !== statSync(src).size) {
  throw new Error('entry.png copy is incomplete');
}
