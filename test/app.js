const someOreder = {
  items: [
    { name: "Dragon Food", price: 8, quantity: 21 },
    { name: "Dragon cage (small) ", price: 800, quantity: 2 },
    { name: "Shipping", price: 40, shipping: true }
  ]
}
const orderTotal = order => {
  const totalItems = order.items
  .filter(x=> !x.shipping)
  .reduce((prev, curr) => prev + (curr.price*curr.quantity), 0 );
  const shippingItems = order.items.find(x => x.shipping);
  const shipping = totalItems > 1000 ? 0 : shippingItems.price;
  return totalItems + shipping;
};
result = orderTotal(someOreder);
module.exports = someOreder;