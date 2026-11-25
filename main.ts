import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIRECTORY = "/output";
const OUTPUT_FILE = join(OUTPUT_DIRECTORY, "entry.txt");
const ANSWER = "Bottleneck";

function assertSingleToken(value: string): void {
  const characterCount = [...value].length;

  if (characterCount < 1 || characterCount > 30 || /\s/u.test(value)) {
    throw new Error("Entry must be one token containing 1-30 characters.");
  }
}

assertSingleToken(ANSWER);
mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
writeFileSync(OUTPUT_FILE, ANSWER, { encoding: "utf8" });
