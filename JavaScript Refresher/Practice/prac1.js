let a = 50;
console.log(a);

let fruits = ["apple", "orange"];

let [c, b] = fruits;

console.log(c);

let func1 = (a, b, c) => {
  return a + b + c;
};

let arr1 = [1, 2, 3];
console.log(func1(...arr1));

let sorting = (...names) => {
  console.log(names.sort());
};

sorting("Akash", "Prath", "Mani");

let arr2 = [1, 2, 3, 4, 5];

let double = arr2.map((x) => {
  return x * 2;
});
console.log(double);

let filteringOut = arr2.filter((x) => {
  return x > 4;
});

console.log(filteringOut);

let i = 10;
let sum = 0;
for (let x = 0; x < i; x++) {
  sum = sum + x;
}
console.log(sum);

let arr5 = [1, 4, 5, 6, 7];

let f1 = arr5.filter((x) => {
  if (x % 2 != 0) {
    return x;
  }
});
console.log(f1);

setTimeout(() => {
  console.log("HELLO");
}, 3000);

function z() {
  let g = 5;
  function c() {
    console.log(g);
  }
  c();
}
z();

function m(n) {
  console.log("HEY");
  n();
}
m(function n() {
  console.log("Good Morining");
});


