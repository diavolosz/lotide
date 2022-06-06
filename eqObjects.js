let eqArrays = require("./eqArrays")

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


