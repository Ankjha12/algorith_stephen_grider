// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // Math.sign return positive if positive number is passed in it and negative if negative number passed in it
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-5));

module.exports = reverseInt;

// Approach 1 my solution which is wrong completely
// function reverseInt(n) {
//   // Here we have to reverse the int number so the first step to get access to the last value of the number thet we getting  from the parameter from the function then 2nd last and so on and every number should be stored in the another variable.
//   let numberLength = n.toString().length;
//   // check for negative numbers
//   if (n.toString().includes("-")) {
//     n = Number(n.toString().replace("-", ""));
//     numberLength = n.toString().length;
//   }
//   debugger;
//   let reversedValue = 0;
//   for (let i = 0; i < numberLength; i++) {
//     let remainder = n % 10;
//     reversedValue = reversedValue * 10 + remainder;
//     n = Math.floor(n / 10);
//   }

//   return reversedValue;
// }

// Approach 2 with all test case passed

// function reverseInt(n) {
//   // Here we have to reverse the int number so the first step to get access to the last value of the number thet we getting  from the parameter from the function then 2nd last and so on and every number should be stored in the another variable.
//   // Idea: we could just convert the incoming number into an string and then perform the reverse mathod on the String but at the end the test case is expecting a number instead of string to be returned from the function and for solving that we could just wrap the end reverse result in side the Number function provided by the javascript so that at the end we only return number instead of the string
//   let reversedValue;
//   if (Math.sign(n) == -1) {
//     reversedValue = n.toString().replace("-", "").split("").reverse().join("");
//     debugger;
//     console.log(n < 0);
//     if (n < 0) {
//       const negativeValueToReturn = parseInt((reversedValue *= -1));
//       debugger;
//       return negativeValueToReturn;
//     }
//   }

//   reversedValue = n.toString().split("").reverse().join("");

//   return parseInt(reversedValue);
// }
