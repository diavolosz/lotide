const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should;

let eqArrays = require("../eqArrays")

describe ("testing eqArray function", () => {

  it("should return true if array is equal", () => { 
    let input1 = [[2, 3], [4]]
    let input2 = [[2, 3], [4]]

    let output = eqArrays(input1, input2);
    assert.isTrue(output)
  });


  it("should return false if array is not equal", () => { 
    let input1 = [[2, 3], [4]]
    let input2 = [[2, 3], [4, 5]]
    
    let output = eqArrays(input1, input2);
    assert.isFalse(output)
  });

  it("should return false if array is not equal", () => { 
    let input1 = [[2, 3], [4]]
    let input2 = [[2, 3], 4]
    
    let output = eqArrays(input1, input2);
    assert.isFalse(output)
  });

});
