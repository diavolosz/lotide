

let eqArrays = require("./eqArrays")

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


module.exports = assertArraysEqual;

// // test case
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
// assertArraysEqual([1, 2, 3], [1, 2, "3"]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);

// // correct case
// assertArraysEqual([1, 2, 3], [1, 2, 3]);





