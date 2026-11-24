import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Do not meet your past self. He will ask to borrow money, and he knows you always say yes.";

if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry must be 1-120 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
