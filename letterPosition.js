


// // assetEq Func
// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } 

//   for (let x = 0; x < array2.length; x++) {
//     if (array1[x] !== array2[x]) {
//       return false;
//     }
//   }

//   return true;
// };


// const assertArraysEqual = function(actual, expected) {
//   if (!eqArrays(actual, expected)) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };



//-----------------------------------------------------------------------------


let assertArraysEqual = require("./assertArraysEqual")
let eqArrays = require("./eqArrays")


//actual function
const letterPositions = function(sentence) {
  const object = {};

  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] === " ") {
      continue;
    }
    if (object[sentence[x]]) {
      object[sentence[x]].push(x);
    } else {
      object[sentence[x]] = [];
      object[sentence[x]].push(x);
    }
  }
  return object
};

module.exports = letterPositions


// // test case
// let result = letterPositions("hello")
// assertArraysEqual(result.l, [2, 3])


