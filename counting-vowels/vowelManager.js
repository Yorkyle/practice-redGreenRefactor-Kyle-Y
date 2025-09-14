//GREEN CODE

// function countVowels(str) {
//   if (typeof str !== "string") return 0;

//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// REFACTORED CODE

function countVowels(str) {
  if (typeof str !== "string") return 0;

  const basic = "aeiouAEIOU";
  let stringInput = str.toLowerCase();

  let hasAEIOU = false;
  for (let i = 0; i < stringInput.length; i++) {
    if (basic.includes(stringInput[i])) {
      hasAEIOU = true;
      break;
    }
  }

  let vowels;
  if (hasAEIOU) {
    vowels = basic;
  } else {
    vowels = basic + "y";
  }

  let count = 0;
  for (let i = 0; i < stringInput.length; i++) {
    if (vowels.includes(stringInput[i])) {
      count++;
    }
  }

  return count;
}

module.exports = { countVowels };
