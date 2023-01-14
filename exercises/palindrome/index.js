// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // array.every loops over each elemnt in the array and it has access to the current element it i iterating over and the whole array index values so we can directly compare the first element to the last element and the 2nd element wth the 2nd last element and so on. until we reach the center of the array we don't need to compare again the lasr element with the first element.
  return str.split("").every((char, i) => {
    debugger;
    return char === str[str.length - i - 1];
  });
}
const result = palindrome("aba");
console.log("final result of Plaindrome", result);
module.exports = palindrome;

//Approach 1 With All Test Case Passed

// function palindrome(str) {
//   const temp = str;
//   const strArray = str.split("");
//   const reversedArray = [];
//   for (let i = strArray.length - 1; i >= 0; i--) {
//     reversedArray.push(strArray[i]);
//     debugger;
//   }
//   const reversedString = reversedArray.join("");

//   if (reversedString === temp) {
//     return true;
//   } else {
//     return false;
//   }
// }

//Approach 2 With All Test Case Passed

// function palindrome(str) {
//   const temp = str;
//   const reversedString = str.split("").reverse().join("");

//   if (reversedString == temp) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Approach 3 With All Test Case Passed

// function palindrome(str) {
//   // array.every loops over each elemnt in the array and it has access to the current element it i iterating over and the whole array index values so we can directly compare the first element to the last element and the 2nd element wth the 2nd last element and so on. until we reach the center of the array we don't need to compare again the lasr element with the first element.
//   return str.split("").every((char, i) => {
//     debugger;
//     return char === str[str.length - i - 1];
//   });
// }
