'use strict';

const invertObject = require('./invertObject');

test('Empty object', () => {
  expect(invertObject({}))
    .toEqual({});
});

test('Simple object with one property', () => {
  expect(invertObject({ 'foo': 'bar' }))
    .toEqual({ 'bar': 'foo' });
});

test('Numeric keys and values', () => {
  expect(invertObject(
    {
      '1': 2, '3': 4, '5': 6,
    }))
    .toEqual(
      {
        '2': '1', '4': '3', '6': '5',
      });
});

test('Repeating values', () => {
  expect(invertObject(
    {
      'foo': 'bar', 'hello': 'world', 'js': 'bar',
    }))
    .toEqual(null);
});
