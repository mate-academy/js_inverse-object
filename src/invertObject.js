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
  const reverseItems = {};
  const keys = [];
  const keysReverse = [];

  for (const key in items) {
    keys.push(key);
  }

  let value;

  for (let i = 0; i < keys.length; i++) {
    value = items[keys[i]];
    reverseItems[value] = keys[i];
  }

  for (const keyReverse in reverseItems) {
    keysReverse.push(keyReverse);
  }

  if (keys.length !== keysReverse.length) {
    return null;
  }

  return reverseItems;
}

module.exports = invertObject;
