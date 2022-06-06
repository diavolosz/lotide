const letterPositions = function(sentence) {
  
  const object = {};

  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] === " ") {
      continue;
    }
    if (object[sentence[x]]) {
      object[sentence[x]].push(x);
    } else {
      object[sentence[x]] = [];
      object[sentence[x]].push(x);
    }
  }
  return object
};

module.exports = letterPositions
