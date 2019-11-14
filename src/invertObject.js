'use strict';

/**
 * Function, that check if object is empty or not
 *
 * @param {object} object
 * @returns {boolean}
 */
function isEmpty(object) {
  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

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
  let repeat = '';
  const reverseItems = {};
  if (isEmpty(items)) {
    return {};
  }
  for (const prop in items) {
    if (!repeat.includes(items[prop])) {
      reverseItems[items[prop]] = prop;
      repeat += items[prop];
    } else {
      return null;
    }
  }
  return reverseItems;
}

module.exports = invertObject;
