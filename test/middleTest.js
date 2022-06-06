
const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should;

let middle = require("../middle")

describe ("Placeholder", () => {

  it("should return 2 number when array is even", () => {
    let input = [1, 2, 3, 4, 5, 6];
    let output = middle(input);
    let expectedOutput = [3, 4];
    expect(output).to.deep.equal(expectedOutput);
  });

  it("should return 1 number when array is even", () => {
    let input = [1, 2, 3, 4, 5];
    let output = middle(input);
    let expectedOutput = [3];
    expect(output).to.deep.equal(expectedOutput);
  });

  it("should return middle items even when strings are incorporated", () => {
    let input = ["apple", 2, "banana", "4"];
    let output = middle(input);
    let expectedOutput = [2, "banana"];
    expect(output).to.deep.equal(expectedOutput);
  });

});


