import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Dog Ate My Homework: Funniest Excuse — one line, dog's own voice.
// ATM: the field will flood with literal dog excuses ("it smelled good",
// "I was hungry", "good boy" apologies). The sharpest angle is meta: a dog
// that has heard the old line, believes it did nothing wrong, and treats the
// homework as an afterthought. Twist lands on the last word.
const ENTRY =
  "They said 'the dog ate my homework' is a tired old line, so I ate the line first. The homework was just dessert.";

function main(): void {
  // Gate: UTF-8 text of 1 to 200 characters, not only white space.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.includes("\t")) {
    throw new Error("entry must be a single line");
  }
  // Pure ASCII, so bytes equal characters (ties break on fewer bytes).
  if (!/^[\x00-\x7F]*$/.test(ENTRY)) {
    throw new Error("entry must be pure ASCII");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");

  // Verify the round trip: what the judge reads is exactly what we wrote.
  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("round-trip mismatch between entry and /output/entry.txt");
  }
  console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
}

main();
