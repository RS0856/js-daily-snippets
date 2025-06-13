const countVowels = require("./2025-06-13-countVowels");

describe("countVowels", () => {
  test("hello", () => {
    expect(countVowels("hello")).toBe(2);
  });

  test("JAVASCRIPT", () => {
    expect(countVowels("JAVASCRIPT")).toBe(3);
  });
});
