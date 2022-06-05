


//--------------------------------------------------------------------

let assertEqual = require("./assertEqual")
let eqArrays = require("./eqArrays")

// function implementation 
const eqObjects = function(object1, object2) {

    let keyArray1 = Object.keys(object1)
    let keyArray2 = Object.keys(object2)
  
    if (keyArray1.length !== keyArray2.length) {
      return false;
    };
  
    for (let key of keyArray1) {
      if (typeof(object1[key]) !== typeof(object2[key])) {
        return false
      } 
      if (!Array.isArray(object1[key]) && !Array.isArray(object2[key]) && typeof(object1[key]) === "object" && typeof(object2[key]) === "object") {
        if (!eqObjects(object1[key], object2[key]))
          return false
      } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false
        }
      } else if (object1[key] !== object2[key]) {
        return false
      }
    }
    return true;
  }
  
module.exports = eqObjects


// //test case
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false


// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }), false) // => false

// assertEqual(eqObjects(cd, dc), true)
// assertEqual(eqObjects(cd, cd2), false)
// assertEqual(eqObjects(ab, ba), true)
// assertEqual(eqObjects(ab, abc), false)