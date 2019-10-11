'use strict';

/**
 * Implement a function that inverts an object:
 *
 * Every `key: value` pair of the object passed as the only argument to the
 * function must become `value: key` in the object that you return. If there are
 * more than one property with the same value in the original object,
 * return `null` instead.
 *
 *
 * invertObject({}) is {}
 * invertObject({"foo": "bar"}) is {"bar": "foo"}
 * invertObject({"1": 2, "2": 4, "3": 6}) is {"2": "1", "4": "2", "6": "3"}
 * invertObject({"foo": "bar", "hello": "world", "js": "bar"}) === null
 *
 * @param {Object} items
 *
 * @return {Object}
 */
function invertObject(items) {
  function uniqueValues(arr) {
    const result = [];

    for (const str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      } else {
        return true;
      }
    }
    return false;
  }

  const uniqueChecker = uniqueValues(Object.values(items));

  if (uniqueChecker) {
    return null;
  }

  const revObj = {};

  for (const key in items) {
    revObj[items[key]] = key;
  }

  return revObj;
}

// let testObj = {
//   foo: 'bar',
//   hello: 'world',
//   js: 'bar'
// }

// const checkerObj = Object.values(testObj);
// console.log(checkerObj);

module.exports = invertObject;
