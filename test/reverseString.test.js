const { TestScheduler } = require('jest');
const reverseString = require('./reverseString');
test('reverse string function exist', () => {
  expect(reverseString).toBeDefined();
})

test('string reverse', () => {
  expect(reverseString('hello')).toEqual('olleh')
})

test('string reverse', () => {
  expect(reverseString('Hello')).toEqual('olleh')
})