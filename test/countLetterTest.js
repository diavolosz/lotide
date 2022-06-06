let assertEqual = require("../assertEqual")
let countLetter = require("../countLetter")

const result = countLetter("lighthouse in the house");
assertEqual(result["i"], 2);
assertEqual(result["h"], 4);




