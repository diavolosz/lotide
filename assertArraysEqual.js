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

// test case
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);

// correct case
assertArraysEqual([1, 2, 3], [1, 2, 3]);





