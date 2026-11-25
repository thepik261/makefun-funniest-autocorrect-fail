// Funniest Autocorrect Fail — make.fun bounty entry.
// Writes one line (under 200 characters) to /output/entry.txt.
// Node stdlib only, deterministic, no network, no third-party code.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const ENTRY =
  "My rapist says I need to stop bottling up my feelings and learn to set boundaries.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  // Gate: 1 to 199 characters, not only whitespace.
  if (ENTRY.length < 1 || ENTRY.length > 199 || ENTRY.trim().length === 0) {
    throw new Error("entry does not satisfy the 1-199 character gate");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, ENTRY, "utf8");
  try {
    chmodSync(OUT_FILE, 0o644);
  } catch {
    // The grader collects outputs as another user; best effort only.
  }
}

main();
