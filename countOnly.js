const countOnly = function(allItems, itemsToCount) {

  let keepCount = {}

  for (let targetName in itemsToCount) {
    if (itemsToCount[targetName] === true) {
      for (let eachItem of allItems) {
        if(keepCount[targetName] === undefined && eachItem === targetName) {
          keepCount[targetName] = 1
        } else if (eachItem === targetName) {
          keepCount[targetName] += 1
        }
      }
    }
  }
  return keepCount
}

module.exports = countOnly