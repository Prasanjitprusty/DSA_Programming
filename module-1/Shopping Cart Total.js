const calculateTotal = (cart) => {
    let totalCost = 0;
    for (let product of cart) {
        totalCost += product.price * product.quantity;
    }
    return totalCost;
};

const cart1 = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Headphones", price: 50, quantity: 4 },
];

console.log(calculateTotal(cart1));  