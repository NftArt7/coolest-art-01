// coolest-art-01 entry (Node 22, standard library only).
// The art is the entry.png beside this file: a cyberpunk scarlet macaw
// portrait. The program copies it to the grader's output directory
// ($MAKEFUN_OUTPUT_DIR, else /output/entry.png), deterministic, no network.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, "entry.png"));
const target = join(outDir, "entry.png");
writeFileSync(target, bytes);
console.log(`wrote ${bytes.length} bytes to ${target}`);
