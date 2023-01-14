// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create a variable that will hold the chunked array
  const chunkedArray = [];
  let index = 0;

  // now iterate obver the array and slice the array till size and then push it to chunked Array after than increase the index by size and repeat the same until the actual array become empty.

  while (index < array.length) {
    const slicedArray = array.slice(index, index + size);
    chunkedArray.push(slicedArray);
    index += size;
  }

  return chunkedArray;
}

console.log("Chunk Results", chunk([1, 2, 3, 4, 5], 3));

module.exports = chunk;

// Approach 1

// function chunk(array, size) {
//   // create an empty array that hold the chunk inside it
//   const chunkedArray = [];
//   //iterate on every element of the parameter array or unchunkedArray that we are getting from the parameter
//   for (let element of array) {
//     // check that last index exist inside the chunkedArray or not
//     const last = chunkedArray[chunkedArray.length - 1];
//     console.log("Last value", last);
//     // if last element does not exist or the length of chunkedArray is equal to the size
//     if (!last || last.length == size) {
//       // push a new chunk inside the chunkedArray with the current element we are iterating over
//       console.log("if ke ander");
//       chunkedArray.push([element]);
//     } else {
//       //add a new chunk inside the last value
//       last.push(element);
//     }
//   }
//   return chunkedArray;
// }
