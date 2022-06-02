








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



//----------------------------------------------------------

const takeUntil = function(array, callback) {

  const result = []

  for (let eachItem of array) {
    if (callback(eachItem)) {
      return result
    }
    result.push(eachItem)
  }
  return result
}



// checking function with assertEqualArray
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0) ,[ 1, 2, 5, 7, 2 ])


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ',') ,[ "I've", 'been', 'to', 'Hollywood' ])


// value check with assertEqualArray







