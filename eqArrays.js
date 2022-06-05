


let assertEqual = require("./assertEqual")

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  } 

  for (let x = 0; x < array2.length; x++) {
    if (Array.isArray(array1[x]) && Array.isArray(array2[x])) {
      if (!eqArrays(array1[x], array2[x]))
        return false
    } else if (array1[x] !== array2[x]) {
        return false
    }
  }
  return true;
};

module.exports = eqArrays

// // checking for eqArray return value 
// let testSet1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true
// let testSet2 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
// let testSet3 = eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should fail
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => should fail

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)
