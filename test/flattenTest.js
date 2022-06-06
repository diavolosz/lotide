let assertArraysEqual = require("../assertArraysEqual")
let flatten = require("../flatten")

// test cases 
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
assertArraysEqual(flatten([1, 2, ["apple", "banana"], 5, ["1", "2", "3"]]), [1, 2, "apple", "banana", 5, "1", "2", "3"])