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
  const listKeyValues = Object.entries(items);
  const newItems = {};

  for (let i = 0; i < listKeyValues.length; i++) {
    const key = listKeyValues[i][1];
    const value = listKeyValues[i][0];

    if (newItems.hasOwnProperty(key)) {
      return null;
    }
    newItems[key] = value;
  }

  return newItems;
}

module.exports = invertObject;
