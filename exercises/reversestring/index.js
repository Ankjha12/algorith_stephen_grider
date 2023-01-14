// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Approach 3:
  debugger;
  return str.split("").reverse().join("");
}

reverse("ankit");

// Approach 1
// if (str == "" && str.length == 0) {
//   return;
// }
// const strArray = str.split("");
// console.log("strArray", strArray, typeof strArray.length);
// const reversedArray = [];
// for (let i = strArray.length - 1; i >= 0; i--) {
//   console.log("Inside Loop");
//   reversedArray.push(strArray[i]);
// }
// //   strArray.reverse();
// console.log("array reversed", reversedArray);
// const reversedStr = reversedArray.join("");
// console.log("str reversed", reversedStr);

// return reversedStr;

// Approach 2:
//  const strArray = str.split("");
//  // reduce take two arguments first is the callback function and the 2nd one is the initial value or starting point in this case the starting value is provided as "" after the callback then we accept that "" as reverse inside the callback and then the 2nd argument of the callback function is the looped character of the array on which we are implementing the reduce method.
//  return strArray.reduce((reverse, character) => {
//    console.log(
//      "Reverse and accumulator value inside the reduce",
//      reverse,
//      character
//    );
//    return character + reverse;
//  }, "");
module.exports = reverse;
