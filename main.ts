import { mkdirSync, writeFileSync } from "node:fs";

const chosenWord = "Bottleneck";

function assertSingleToken(word: string): void {
  if (!/^\S{1,30}$/.test(word)) {
    throw new Error("Entry must be one token of 1-30 characters.");
  }
}

function publishEntry(): void {
  assertSingleToken(chosenWord);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", chosenWord, "utf8");
}

publishEntry();
