import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import { describe, it, expect } from "vitest";

const here = dirname(fileURLToPath(import.meta.url));
const skillPath = resolve(here, "..", "SKILL.md");

describe("@noya-ai/skill", () => {
  it("SKILL.md exists and is non-empty", () => {
    const content = readFileSync(skillPath, "utf8");
    expect(content.trim().length).toBeGreaterThan(0);
  });
});
