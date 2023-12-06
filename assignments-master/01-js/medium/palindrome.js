/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // const lowercase = str.toLowerCase();
  const string1 = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");

  const string2 = [];
  for (let i = string1.length - 1; i >= 0; i--) {
    string2.push(string1[i]);
  }

  for (let i = 0; i < string1.length / 2; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }
  return true;
}
module.exports = isPalindrome;
