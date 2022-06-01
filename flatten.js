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
}


const flatten = function(input) {

  outputArray = [];

  input.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(innerArrayItem => {
        outputArray.push(innerArrayItem);
      })
    } else {
      outputArray.push(element);
    }
  })
  return outputArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));



// test cases 
assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true)
assertArraysEqual(eqArrays(flatten([1, 2, ["apple", "banana"], 5, ["1", "2", "3"]]), [1, 2, "apple", "banana", 5, "1", "2", "3"]), true)