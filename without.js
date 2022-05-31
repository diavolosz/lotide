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




const without = function(selectedArray, itemsToRemove) {
  return selectedArray.filter(element => !itemsToRemove.includes(element));
};


// test case
assertArraysEqual([2, 3], (without([1, 2, 3], [1])));
assertArraysEqual(["1", "2"], (without(["1", "2", "3"], [1, 2, "3"])));



// test case to make sure array is not alternated
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


