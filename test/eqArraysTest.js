let assertEqual = require("../assertEqual")
let eqArrays = require("../eqArrays")


// checking for eqArray return value 
let testSet1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true
let testSet2 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
let testSet3 = eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should fail
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => should fail

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)
