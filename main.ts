// Ridiculous at First Glance, Real by the Second — make.fun bounty entry.
// Writes the one-sentence pitch to <out>/entry.txt with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  `We rent fainting goats to offices as stress relief — companies pay $300 a visit, because a goat tipping over on cue is cheaper than another trust-fall workshop.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
