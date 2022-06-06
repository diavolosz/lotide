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

module.exports = flatten


