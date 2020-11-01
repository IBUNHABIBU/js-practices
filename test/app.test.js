const someOrder = require('./app')

test('testing the name of the item', () => {
  expect(someOrder.items.map( item => item.name)).toEqual([
    'Dragon Food',"Dragon cage (small) ","Shipping"]);
});

for (let i = 0; i < someOreder.items.length; i++) {
  test(`item[${i} should have properties (name, price, quantity)`, ()=> {
    expect(someOreder.items[i]).toHaveProperty('name');
    expect(someOreder.items[i]).toHaveProperty('price');
    // expect(someOreder.items[i]).toHaveProperty('quantity');
  })
}
test('mock implementation of a basic function', () => {
  const mock = jest.fn(() => 'I am a mock function');
  // console.log(mock); 
  expect(mock('Calling my mock function!')).toBe('I am a mock function');
  expect(mock).toHaveBeenCalledWith('Calling my mock function!');
})
test( 'mock return value of a function once', () => {
  const mock = jest.fn();
  mock.mockReturnValueOnce('Hello').mockReturnValueOnce('there!');
  mock();
  mock();
  expect(mock).toHaveBeenCalledTimes(2);
  mock('hello', 'there!', 'steve')
  expect(mock).toHaveBeenCalledWith('hello', 'there!', 'steve');
  mock('suma');
  expect(mock).toHaveBeenLastCalledWith('suma');
})
test('mock implementation', () => {
  const mock = jest.fn().mockImplementation(() => 'United Kingdom !');
  expect(mock('Location')).toBe('United Kingdom !');
  expect(mock).toHaveBeenCalledWith('Location');
})

test('spying using original implementation', () => {
  const pizza = {
    name: n =>  `Pizza name: ${n}`
  };
  const spy = jest.spyOn(pizza, 'name');
  expect(pizza.name('cheeze')).toBe('Pizza name: cheeze');
  expect(spy).toHaveBeenCalledWith('cheeze');
})

test('spying using original implementation 2', () => {
  const pizza = {
    name: n =>  `Pizza name: ${n}`
  };
  const spy = jest.spyOn(pizza, 'name');
  spy.mockImplementation( n => 'crazy pizza')
  expect(pizza.name('cheeze')).toBe('crazy pizza');
  expect(spy).toHaveBeenCalledWith('cheeze');
  spy.mockRestore();
  expect(pizza.name('cheeze')).toBe('Pizza name: cheeze');
});
test('pizza returns new york last', () => {
  const items1 = someOrder.items[0];
  const items2 = someOrder.items[1];
  const items3 = someOrder.items[2];
  
  const item = jest.fn(currentItem => currentItem.name );
  item(items1);
  item(items2);
  item(items3);
  expect(item).toHaveLastReturnedWith('Shipping')
})
test('Expect a promise to resolve', async () => {
  const user = {
    getFullName: jest.fn(() => Promise.resolve('Ibun Habib')),
  };
  await expect(user.getFullName('Ibunh Habib')).resolves.toBe('Ibun Habib');
})