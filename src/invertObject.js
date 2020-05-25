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
  const NEW_OBJ = {};
  const SORTED_VALUES = Object.values(items).sort();

  for (let i = 0; i < SORTED_VALUES.length; i++) {
    if (SORTED_VALUES[i] === SORTED_VALUES[i + 1]) {
      return null;
    } else {
      for (const key in items) {
        NEW_OBJ[items[key]] = key;
      };
    };
  };

  return NEW_OBJ;
}

module.exports = invertObject;
