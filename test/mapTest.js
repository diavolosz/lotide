
let assertArraysEqual = require("../assertArraysEqual")
let map = require("../map")

// data
const words = ["ground", "control", "to", "major", "tom"];

// test code
const results1 = map(words, word => word[0]);
assertArraysEqual(words.map(word => word[0]), results1)