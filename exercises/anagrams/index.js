// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // creating a function to convert the string into LowerCase and remove all the thing other than character

  const stringRegExp = (str) => str.replace(/[^\w]/g, "").toLowerCase();

  // Now creating a function that will genearte a characterMap object of that stringregExp
  const characterMapFunction = (str) => {
    const filteredString = stringRegExp(str);
    const charMap = {};
    for (let char of filteredString) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  };

  const characterMapStringA = characterMapFunction(stringA);
  const characterMapStringB = characterMapFunction(stringB);

  // handling Edge Case if string A contains more characters than string B or Vice versa
  // we access the keys of characterMap and store it in an Array and then if string A contains more characters than string B or vice versa then we return false from there;

  const characterMapStringAKeys = Object.keys(characterMapStringA);
  const characterMapStringBKeys = Object.keys(characterMapStringB);

  if (characterMapStringAKeys.length !== characterMapStringBKeys.length) {
    return false;
  }

  // loop over the chacterMapStringA and check all the character keys in characterMapStringA is Exactly havr same value as characterMapStringB keys;

  for (let element in characterMapStringA) {
    if (characterMapStringA[element] !== characterMapStringB[element]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams("Hello", "lleho "));

module.exports = anagrams;

// Approach 1 my solution not very optimized but passed All the Test Cases
// function anagrams(stringA, stringB) {
//   const filteredStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const filteredStringB =
//     stringB && stringB.replace(/[^\w]/g, "").toLowerCase();

//   const characterMapStringA = {};
//   const characterMapStringB = {};

//   for (let char of filteredStringA) {
//     if (characterMapStringA[char]) {
//       characterMapStringA[char]++;
//     } else {
//       characterMapStringA[char] = 1;
//     }
//   }

//   for (let char of filteredStringB) {
//     if (characterMapStringB[char]) {
//       characterMapStringB[char]++;
//     } else {
//       characterMapStringB[char] = 1;
//     }
//   }

//   const characterMapStringAKeys = Object.keys(characterMapStringA);
//   const characterMapStringBKeys = Object.keys(characterMapStringB);

//   if (characterMapStringAKeys.length !== characterMapStringBKeys.length) {
//     return false;
//   }

//   for (let element in characterMapStringA) {
//     if (characterMapStringA[element] !== characterMapStringB[element]) {
//       return false;
//     } else {
//       continue;
//     }
//   }
//   return true;
// }

//Approach 2 by creating seperate Functions to handle different logics

// function anagrams(stringA, stringB) {
//   // creating a function to convert the string into LowerCase and remove all the thing other than character

//   const stringRegExp = (str) => str.replace(/[^\w]/g, "").toLowerCase();

//   // Now creating a function that will genearte a characterMap object of that stringregExp
//   const characterMapFunction = (str) => {
//     const filteredString = stringRegExp(str);
//     const charMap = {};
//     for (let char of filteredString) {
//       if (charMap[char]) {
//         charMap[char]++;
//       } else {
//         charMap[char] = 1;
//       }
//     }
//     return charMap;
//   };

//   const characterMapStringA = characterMapFunction(stringA);
//   const characterMapStringB = characterMapFunction(stringB);

//   // handling Edge Case if string A contains more characters than string B or Vice versa
//   // we access the keys of characterMap and store it in an Array and then if string A contains more characters than string B or vice versa then we return false from there;

//   const characterMapStringAKeys = Object.keys(characterMapStringA);
//   const characterMapStringBKeys = Object.keys(characterMapStringB);

//   if (characterMapStringAKeys.length !== characterMapStringBKeys.length) {
//     return false;
//   }

//   // loop over the chacterMapStringA and check all the character keys in characterMapStringA is Exactly havr same value as characterMapStringB keys;

//   for (let element in characterMapStringA) {
//     if (characterMapStringA[element] !== characterMapStringB[element]) {
//       return false;
//     } else {
//       continue;
//     }
//   }

//   return true;
// }
