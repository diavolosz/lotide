

// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
 
//   for (let x = 0; x < expected.length; x++) {
//     if (actual[x] !== expected[x]) {
//       console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//       break;
//     }
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };

//----------------------------------------------------------------

let assertEqual = require("./assertEqual")

// tail function
const tail = function(array) {
  let newArray = [];
  for (let x  = 1; x < array.length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
};

module.exports = tail


//test case
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


// // array motification test
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// console.log(words)
// assertEqual(words.length, 3); // original array should still have 3 elements!
