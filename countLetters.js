let countLetters = function(stringInput) {

  let object = {};
  let spaceRemovedInput = stringInput.split(" ").join("");

  for (let character of spaceRemovedInput) {
    if (object[character]) {
      object[character] += 1;
    } else {
      object[character] = 1;
    }
  }
  return object;
};


module.exports = countLetters

