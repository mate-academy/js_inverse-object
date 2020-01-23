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
  const valuesList = Object.values(items);

  for (let i = 0; i < valuesList.length - 1; i++) {
    for (let j = i + 1; j < valuesList.length; j++) {
      if (valuesList[j] === valuesList[i]) {
        return null;
      }
    }
  }

  const newObject = {};

  for (const prop in items) {
    if (items.hasOwnProperty(prop)) {
      const value = items[prop];

      newObject[value] = prop;
    }
  }

  return newObject;
}

module.exports = invertObject;
