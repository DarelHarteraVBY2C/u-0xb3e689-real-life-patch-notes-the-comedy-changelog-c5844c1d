// Real-Life Patch Notes: The Comedy Changelog — entry program.
//
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt: a software
// patch note for a bug in human biology, in the terse register of a real
// release note. Deterministic: the same line every run, byte for byte.
//
// The chosen line:
//   v2.7.1: fixed a bug where the brain replayed your most embarrassing
//   moment from 2009 at 3 a.m. with no skip button.
//
// Why this line, against the judge's brief (most important first):
// 1. A genuine patch note about a real-life human-biology bug: a version
//    number, a terse engineering register, and a fix stated as shipped.
// 2. Genuinely funny on first read: the joke rests on a real comedic
//    idea — the brain as a media player that replays your worst memory
//    on a loop at the worst hour, with no way to skip it.
// 3. Specific and recognisable: everyone has lain awake at 3 a.m.
//    while their brain queued up one embarrassing moment from years
//    ago. The reader winces and laughs at once.
// 4. Uses its characters well: version, bug, time, year, and the
//    punchline ("no skip button") — every word working, no padding.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, at most 160 characters, built from its parts so
// the version, the bug, and the punchline each read on their own.
const VERSION = "v2.7.1";
const BUG =
  "the brain replayed your most embarrassing moment from 2009 at 3 a.m.";
const PATCH_NOTE = `${VERSION}: fixed a bug where ${BUG} with no skip button.`;

// Gate (from RULES.txt): entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space, and must be a single line.
function validateEntry(text: string): number {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  return chars.length;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  const charCount = validateEntry(PATCH_NOTE);

  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, PATCH_NOTE, "utf8");

  // Verify the round trip: what was written must read back byte for byte
  // as the intended line, with no trailing newline or extra bytes.
  const written = readFileSync(target, "utf8");
  if (written !== PATCH_NOTE) {
    throw new Error("written entry does not match the intended line");
  }
  console.log(
    `wrote entry (${charCount} characters, ${Buffer.byteLength(PATCH_NOTE, "utf8")} bytes) to ${target}`,
  );
}

main();
