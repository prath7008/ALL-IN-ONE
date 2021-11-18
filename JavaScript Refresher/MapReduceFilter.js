//MAP REDUCE FILTER
const arr = [1, 2, 3, 4, 5];
const arr1 = [1, 2, 3];
//MAPPING
const double = (x) => {
  return x * 2;
};

const triple = (x) => {
  return x * 3;
};

const output = arr.map(triple);
console.log(output);

const outputt = arr.map((x) => {
  return x * 2;
});
console.log(outputt);

//Filter
const lessthan = (x) => {
  return x < 2;
};

const filter1 = arr.filter(lessthan);
console.log(filter1);

const filter2 = arr.filter((x) => {
  return x < 2;
});
console.log(filter2);

//Reduce
const reduce1 = arr1.reduce((x, y) => {
  return x * y;
}, 2);

console.log(reduce1);

const users = [
  { firstName: "Prathamesh", lastName: "Naik", age: 50 },
  { firstName: "Rahul", lastName: "Naik", age: 10 },
  { firstName: "Lokesh", lastName: "Naik", age: 90 },
];

const filtering = users.filter((x) => {
  if (x.age > 40) {
    console.log(x.firstName);
  }
});

const filtering1 = users.filter((x) => x.age > 30).map((x) => x.firstName);
console.log(filtering1);

const red = users.reduce((acc, curr) => {
  if (acc[curr.age] > 30) {
    acc[curr.firstName];
  } else {
  }
  return acc;
});

console.log(red);
