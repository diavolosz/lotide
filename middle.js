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

//------------------------------------------------------------------------

// actual function
let middle = function(array) {

  if (array.length % 2 !== 0) {
    let newArray = []
    newArray.push(array[Math.floor(array.length / 2)]);
    return newArray
  } else if (array.length % 2 === 0)
    return array.splice((array.length/2 - 1), 2);
}


// // test case
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])
// , true)
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3])
// , true)
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5])
// , true)
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3])
// , true)
// assertArraysEqual(eqArrays(middle(["apple", 2, "banana", "4"]), [2, "banana"])
// , true)



