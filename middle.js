let middle = function(array) {

  if (array.length % 2 !== 0) {
    let newArray = [];
    newArray.push(array[Math.floor(array.length / 2)]);
    return newArray
  } else if (array.length % 2 === 0) {
    return array.splice((array.length/2 - 1), 2);
  }
}

module.exports = middle

