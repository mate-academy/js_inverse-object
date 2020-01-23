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
  const itemsValues = Object.values(items).sort();

  for (let i = 0; i < itemsValues.length; i++) {
    if (itemsValues[i] === itemsValues[i + 1]) {
      return null;
    }
  }

  const invertedObj = {};

  for (const key in items) {
    const itemsKey = items[key];

    invertedObj[itemsKey] = key;
  }

  return invertedObj;
}

module.exports = invertObject;
