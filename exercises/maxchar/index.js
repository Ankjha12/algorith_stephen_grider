// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    // charMap[char] = charMap[char] ? charMap[char]++ : 1;
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }

    // debugger;
  }
  // Now we have to iterate on the charMap object and return the charracter which have highest number of count;
  // for in loop is basically can iterate on objects as well while the for of loop can only iterate on arrays or array of objects
  for (let character in charMap) {
    if (charMap[character] > max) {
      max = charMap[character];
      maxChar = character;
    }
  }

  return maxChar;
}

console.log(maxChar("Ankita"));

module.exports = maxChar;

// Approach 1 my own Solution:

// function maxChar(str) {
//   const strArray = str.split("");
//   let characterCount = {};
//   for (let i = 0; i < strArray.length; i++) {
//     if (!characterCount[strArray[i]]) {
//       characterCount[strArray[i]] = 1;
//     } else {
//       characterCount[strArray[i]] += 1;
//     }
//   }

//   const characterCountArray = Object.values(characterCount);
//   const maxValueInCharacterCountArray = Math.max(...characterCountArray);

//   return Object.keys(characterCount).find(
//     (key) => characterCount[key] == maxValueInCharacterCountArray
//   );
// }
