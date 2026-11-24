import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, at most 200 characters: a bizarre startup pitch that
// sounds like a joke until the business logic lands.
const pitch =
  "We charge $19 a month for a retired judge to read your angry emails aloud in a courtroom voice before you send them, because one unsent lawsuit pays for a decade of the service.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
