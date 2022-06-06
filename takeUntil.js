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

module.exports = takeUntil
