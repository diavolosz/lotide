




// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };

// const eqArrays = function(actual, expected) {

//   if (actual.length !== expected.length) {
//     return false;
//   } else {
//     for (let x = 0; x < expected.length; x++) {
//       if (actual[x] !== expected[x]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };



//-------------------------------------------------------------------

let assertEqual = require("./assertEqual.js")
let eqArrays = require("./eqArrays")


// function implementation
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


let findKeyByValue = function(object, value) {

  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue

// //test cases
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);