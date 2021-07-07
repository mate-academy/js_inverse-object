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
  // write code here
  const result = {};
  const props = Object.getOwnPropertyDescriptors(items);
  const names = Object.getOwnPropertyNames(items);

  for (let i = 0; i < names.length; i++) {
    const key = names[i];
    const value = props[key].value;

    if (Object.getOwnPropertyNames(result).includes(value)) {
      return null;
    }

    result[value] = key;
  }

  return result;
}

module.exports = invertObject;
