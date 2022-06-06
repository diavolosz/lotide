const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should;

const tail = require("../tail")

describe ("tetsing the tail.js code", () => {

  it("should return Lighthouse, Labs", () => {
    let input = ["Yo Yo", "Lighthouse", "Labs"];
    let output = tail(input);
    let expectedOutput = ["Lighthouse", "Labs"];
    expect(output).to.deep.equal(expectedOutput);
  });

  it("should return 2, 3, 4, 5, 6", () => {
    let input = [1, 2, 3, 4, 5, 6];
    let output = tail(input);
    let expectedOutput = [2, 3, 4, 5, 6];
    expect(output).to.deep.equal(expectedOutput);
  });


});

