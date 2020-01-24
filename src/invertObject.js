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
  let volumeProp;
  let count;

  for (const key in items) {
    count = 0;
    volumeProp = items[key];

    for (const key1 in items) {
      if (items[key1] === volumeProp) {
        count++;
      }
    }

    if (count > 1) {
      return null;
    }
  }

  let volProp;
  let volKey;

  for (const key in items) {
    volProp = items[key];
    volKey = key;

    if (items.hasOwnProperty(volProp)) {
      items[volProp + 'a'] = volKey;
    } else {
      items[volProp] = volKey;
    }
    delete items[key];
  }

  for (let i = 0; i < Object.keys(items).length; i++) {
    if (Object.keys(items)[i][1] === 'a') {
      items[parseInt(Object.keys(items)[i])] = items[Object.keys(items)[i]];
      delete items[[Object.keys(items)[i + 1]]];
    }
  }

  return items;
}
module.exports = invertObject;
