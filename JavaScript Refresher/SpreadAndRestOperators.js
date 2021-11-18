
// Spread Operator: Used to split up array elements OR object properties
const addNumbers = (a, b, c) => a + b + c + 5;

let numbers = [2, 3, 4];
console.log(addNumbers(...numbers));

// Rest Operator: Used to merge a list of  function arguments in an array

const sortNamers = (...names) => names.sort();

console.log(sortNamers("Prath", "Rakesh", "Alon"));
