# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @diavolosz/lotide`

**Require it:**

`const _ = require('@diavolosz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: asserts if two arrays are the same
* `assertEqual(actual, expected)`: asserts if two values are the same
* `assertObjectsEqual(actual, expected)`: asserts if two objects are the same
* `countLetters(stringInput)`: takes in a string, and outputs an object containing the count of each letter that appeared
* `countOnly(allItems, itemsToCount)`: takes in an array and an object, returns anew object that contains the count of all elements present in that array if satisfy condition listed in object
* `eqArrays(array1, array2)`: checks to see if two arrays are the same
* `eqObjects(object1, object2)`: checks to see if two objects are the same
* `findKey(objectList, callback)`: takes in object, and callback condition. if object contains callback condition, return the key
* `findKeyByValue(object, value)`: takes in an object and a key, loops through object and return the key
* `flatten(input)`: takes in an array of nested arrays, return new array containing all elements without any nested arrays
* `head(array)`: takes in an array, returns first value in the array
* `letterPositions(sentence)`: takes in a string, returns object with the letter positions (index)
* `map(array, callback)`: takes in an array and callback function, returns array after modification by callback function
* `middle(array)`: takes in an array, counts array length to determine even or odd, and then returns middle value if odd and two middle values if even
* `tail(array)`: takes in an array, returns the rest after the first item
* `takeUntil(array, callback)`: takes in an array and a callback function, return array items until callback function's requirements are satisfied
* `without(selectedArray, itemsToRemove)`: takes in 2 arrays, returns a new array without the items listed in itemsToRemove