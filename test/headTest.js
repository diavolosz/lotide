const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should;

let head = require("../head")

describe ("tetsing the tail.js code", () => {

  it("should work with numbers", () => {
    let input = [5,6,7];
    let output = head(input);
    let expectedOutput = 5;
    expect(output).to.equal(expectedOutput);
  });

  it("should work with strings", () => {
    let input = ["Hello", "Lighthouse", "Labs"];
    let output = head(input);
    let expectedOutput = "Hello";
    expect(output).to.equal(expectedOutput);
  });

});
