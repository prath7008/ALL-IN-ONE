//Object Property Shorthand

const name = "Andrew";
const userAge = 23;

const user = {
  name,
  age: userAge,
  location: "Mumbai",
};

console.log(user);

//Object destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;

const { label, stock } = product;
console.log(label);

const { label: productLabel, stock: Stock } = product;
console.log(productLabel);
