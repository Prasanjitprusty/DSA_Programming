// Define cart1
const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 }
];

// Define cart2
const cart2 = [
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 }
];

// Function to calculate total cost of items in a cart
function calculateTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

// Calculate total cost for cart1
const totalCostCart1 = calculateTotal(cart1);
console.log("Total cost of items in cart1:", totalCostCart1); // Output: 2200

// Calculate total cost for cart2
const totalCostCart2 = calculateTotal(cart2);
console.log("Total cost of items in cart2:", totalCostCart2); // Output: 114

// Exporting the calculateTotal function (if using in a module)
module.exports = { calculateTotal };
