'use strict';

function invertObject(items) {
  const invertedObject = {};

  for (const key in items) {
    if (invertedObject.hasOwnProperty(items[key])) {
      return null;
    }

    invertedObject[items[key]] = key;
  }

  return invertedObject;
}

module.exports = invertObject;
