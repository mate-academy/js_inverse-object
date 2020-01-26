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
  const arrItemsValue = Object.values(items).sort();

  for (let i = 0; i < arrItemsValue.length; i++) {
    if (arrItemsValue[i] === arrItemsValue[i - 1]
      || arrItemsValue[i] === arrItemsValue[i + 1]) {
      return null;
    }
    continue;
  }

  const entriesItems = Object.entries(items);

  entriesItems.forEach(element => element.reverse());

  return Object.fromEntries(entriesItems);
}

module.exports = invertObject;
