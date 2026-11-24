import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Ridiculous at First Glance, Real by the Second — make.fun bounty entry.
// The program writes one absurd-but-real pitch line (161 chars) to the output entry file.
const line =
  "We pay strangers $25 an hour to insult your AI chatbot — enterprises pay us $60,000 a year because real human trolls find the jailbreaks automated QA never will.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
