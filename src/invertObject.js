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
  const itemsKeyArr = [];
  const itemsValueArr = [];
  const reverseObj = {};

  for (const key in items) {
    itemsKeyArr.push(key);
    itemsValueArr.push(items[key]);
  }

  for (let i = 0; i < itemsValueArr.length; i++) {
    for (let j = i + 1; j < itemsValueArr.length; j++) {
      if (itemsValueArr[i] === itemsValueArr[j]) {
        return null;
      }
    }
  }

  for (let i = 0; i < itemsKeyArr.length; i++) {
    reverseObj[itemsValueArr[i]] = itemsKeyArr[i];
  }

  return reverseObj;
}

module.exports = invertObject;
