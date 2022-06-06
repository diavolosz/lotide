const without = function(selectedArray, itemsToRemove) {
  
  return selectedArray.filter(element => !itemsToRemove.includes(element));
};

module.exports = without
