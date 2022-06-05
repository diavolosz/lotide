




// // assetEq Func
// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };




//-----------------------------------------------------------------------------

let assertEqual = require("./assertEqual")


let countLetter = function(stringInput) {

  let object = {};
  let spaceRemovedInput = stringInput.split(" ").join("");

  for (let character of spaceRemovedInput) {
    if (object[character]) {
      object[character] += 1;
    } else {
      object[character] = 1;
    }
  }
  return object;
};


// console.log(countLetter("lighthouse in the house"));
// const result = countLetter("lighthouse in the house");
// assertEqual(result["i"], 2);
// assertEqual(result["h"], 4);




