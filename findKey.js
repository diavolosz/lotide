const findKey = function(objectList, callback) {

  const keyList = Object.keys(objectList)

  for (let key of keyList) {
    if (callback(objectList[key])) {
      return key
    }
  }
}

module.exports = findKey
