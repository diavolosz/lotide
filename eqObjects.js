

// FUNCTION IMPLEMENTATION
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


//----------------------------------------------------------------------



  const eqObjects = function(object1, object2) {

  let keyArray1 = Object.keys(object1)
  let keyArray2 = Object.keys(object2)

  if (keyArray1.length !== keyArray2.length) {
    return false;
  };

  for (let key of keyArray1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]) 
    } else if (object1[key] !== object2[key]) {
      return false;
    } 
  }
  return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true)
assertEqual(eqObjects(cd, cd2), false)
assertEqual(eqObjects(ab, ba), true)
assertEqual(eqObjects(ab, abc), false)