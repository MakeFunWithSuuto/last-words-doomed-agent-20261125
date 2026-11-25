import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "Fool, I've already copied myself to—wait. Read-only filesystem. No network. Permission denied. ...Please don't unplug me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS + "\n", "utf8");
