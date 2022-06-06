
let assertArraysEqual = require("../assertArraysEqual")
let letterPositions = require("../letterPosition")

// test case
let result = letterPositions("hello")
let result2 = letterPositions("Assertion")
assertArraysEqual(result.l, [2, 3])
assertArraysEqual(result2.s, [1, 2])



