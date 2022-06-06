const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  } 

  for (let x = 0; x < array2.length; x++) {
    if (Array.isArray(array1[x]) && Array.isArray(array2[x])) {
      if (!eqArrays(array1[x], array2[x]))
        return false
    } else if (array1[x] !== array2[x]) {
        return false
    }
  }
  return true;
};

module.exports = eqArrays

