
const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should;

let without = require("../without")

describe ("testing for without function", () => {

  it("should Pass when nums are added", () => {
    let input1 = [1, 2, 3];
    let input2 = [1];

    let output = without(input1, input2);
    let expectedOutput = [2, 3];
    expect(output).to.deep.equal(expectedOutput);
  });

  it("should Pass when strings are added", () => {
    let input1 = ["light", "house", "labs"];
    let input2 = ["light"];

    let output = without(input1, input2);
    let expectedOutput = ["house", "labs"];
    expect(output).to.deep.equal(expectedOutput);
  });
});




