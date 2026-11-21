
const products = [
  { name: "Notebook", price: 4.5, inStock: true },
  { name: "Pen", price: 1.25, inStock: false },
  { name: "Backpack", price: 32, inStock: true },
  { name: "Ruler", price: 2, inStock: true }
];

const names = products.map(product => product.name);

const available = products.filter(
  product => product.inStock
);

const total = products.reduce(
  (sum, product) => sum + product.price, 0
);

const expensive = products.find(
  product => product.price > 10
);

const sortedByPrice = [...products].sort(
  (a, b) => a.price - b.price
);

console.log("Product names:", names);
console.log("In stock:", available);
console.log("Total value:", total.toFixed(2));
console.log("Expensive product:", expensive);
console.log("Sorted products:", sortedByPrice);
