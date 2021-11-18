//reference and Primitive types
//number,strings .bool are primitive types
const num1 = 10;
const num2 = num1;
console.log(num2);

//objects is reference

const person = {
  name: "Max",
};

// const secondPerson = person
// person.name = 'Manu';
// console.log(secondPerson)

//TO CREATE A REAL COPY
const secondPerson = {
  ...person,
};
person.name = "Manu";
console.log(secondPerson);
