const { countVowels } = require("../vowelManager");

//RED TEST
// describe("countVowels test", () => {
//   test("hello has 2 vowels", () => {
//     expect(countVowels("hello")).toBe(2);
//   });
// });

// //GREEN TESTS

// describe("countVowels tests)", () => {
//   test("hello has 2 vowels", () => {
//     expect(countVowels("hello")).toBe(2);
//   });

//   test("non-string inputs return 0 if negative", () => {
//     expect(countVowels(123)).toBe(0);
//     expect(countVowels(null)).toBe(0);
//     expect(countVowels(undefined)).toBe(0);
//   });

//   test("empty string has 0 vowels if edge", () => {
//     expect(countVowels("")).toBe(0);
//   });
// });

// REFACTOR

describe("countVowels tests", () => {
  test("hello has 2 vowels", () => {
    expect(countVowels("hello")).toBe(2);
  });

  test("non-string inputs return 0 if negative", () => {
    expect(countVowels(123)).toBe(0);
    expect(countVowels(null)).toBe(0);
    expect(countVowels(undefined)).toBe(0);
  });

  test("empty string has 0 vowels if edge", () => {
    expect(countVowels("")).toBe(0);
  });

  test("AEIOU has 5 vowels (case-insensitivity) if edge", () => {
    expect(countVowels("AEIOU")).toBe(5);
  });

  test("'Y' or 'y' count as a vowel if AEIOU absent (edge)", () => {
    expect(countVowels("why")).toBe(1);
  });

  test("'Y' or 'y' are NOT counted when A/E/I/O/U are present (edge/negative)", () => {
    expect(countVowels("yellow")).toBe(2); // e,o only
    expect(countVowels("yummy")).toBe(1); // u only
  });
});
