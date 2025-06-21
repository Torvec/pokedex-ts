import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "",
    expected: [""],
  },
  {
    input: "hi",
    expected: ["hi"],
  },
  {
    input: " hi hello hey   there!   ",
    expected: ["hi", "hello", "hey", "there!"],
  },
  {
    input: "HI THERE",
    expected: ["hi", "there"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
