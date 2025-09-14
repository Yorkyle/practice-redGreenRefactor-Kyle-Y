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

  test("AEIOU has 5 vowels (case-sensitive) if edge", () => {
    expect(countVowels("AEIOU")).toBe(5);
  });

  test("\'Y\' or \'y\' counts as a vowel if AEIOU absent (edge)", () => {
    expect(countVowels("why")).toBe(1);
  });
});
