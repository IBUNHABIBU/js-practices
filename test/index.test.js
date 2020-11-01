const functions = require('./index');
test("adds 2+2 equals to 4", () => {
  expect(functions.add(2,2)).toBe(4)
})
test("adds 2+2 not equals to 5", () => {
  expect(functions.add(2,2)).not.toBe(5)
})
test("should be null", () => {
  expect(functions.isNull()).toBeNull()
})
test("should be false", () => {
  expect(functions.checkValue(null)).toBeFalsy()
})
// toEqual is used for array or objects
test("User should be Juma makota", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Juma",
    lastName: "Makota"
  })
})
test("should be under 1600", () => {
  const a = 48;
  const b = 83;
  expect(a+b).toBeLessThan(1600)
})
// regular expression
test("There is no I in team", () => {
  expect('team').not.toMatch(/I/)
})
test("admin should be in username", () => {
  const username = ['janus', 'makarious', 'admin']
  expect(username).toContain('admin');
})
// working with async data make sure to have assertions --promise
test('User fetch data should be Leahn graham', () => {
  expect.assertions(1)
  return functions.fetchUser()
    .then(data=>{
      expect(data.name).toEqual('Leanne Graham');
    })
})
// async await function
test('User fetch data should be Leahn graham', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
})