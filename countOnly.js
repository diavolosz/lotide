

// assetEq Func
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};




//-----------------------------------------------------------------------------


// data
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];





// function starts here 
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
  console.log(keepCount)
  return keepCount
}



const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


// test case
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
