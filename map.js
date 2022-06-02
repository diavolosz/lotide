

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } 

  for (let x = 0; x < array2.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }

  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
//----------------------------------------------------------------------



//
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(words.map(word => word[0]), results1)