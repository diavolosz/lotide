
let assertArraysEqual = require("../assertArraysEqual")
let middle = require("../middle")


// test case
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle(["apple", 2, "banana", "4"]), [2, "banana"])



