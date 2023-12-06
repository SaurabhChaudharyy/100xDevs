/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let string1 = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");
  let count = 0;
  for (let i = 0; i < string1.length; i++) {
    if (
      string1[i] === "a" ||
      string1[i] === "e" ||
      string1[i] === "i" ||
      string1[i] === "o" ||
      string1[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
module.exports = countVowels;
