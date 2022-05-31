


const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


const eqArrays = function(actual, expected) {

  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let x = 0; x < expected.length; x++) {
      if (actual[x] !== expected[x]) {
        return false;
      }
    }
  }
  return true;
};

// checking for eqArray return value 
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should PASS
