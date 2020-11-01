const isAnagram = require('./anagram')
test('is anagram function exist', () => {
  expect(typeof isAnagram).toEqual('function');
})
test( 'cinema is an anagarm of iceman', () => {
  expect(isAnagram('cinema','iceman')).toBeTruthy();
})
test( 'malaya is not anagarm of manyara', () => {
  expect(isAnagram('malaya','manyara')).toBeFalsy();
})