import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Ridiculous at First Glance, Real by the Second — make.fun entry.
// The program writes one bizarre-but-sound pitch sentence to the entry file.
const line =
  "We rent out grandmothers by the hour to stand in your kitchen, taste your cooking, and tell your guests you made it all yourself — $49 a visit, booked out since March.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
