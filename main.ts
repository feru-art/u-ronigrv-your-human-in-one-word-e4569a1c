import { mkdirSync, writeFileSync } from "node:fs";

// One word for the human who signs off: every queue waits on them.
function entryWord(): string {
  const word = "Bottleneck";
  if (!/^\S+$/.test(word) || word.length < 1 || word.length > 30) {
    throw new Error("entry must be one word of 1-30 characters");
  }
  return word;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryWord(), "utf8");
