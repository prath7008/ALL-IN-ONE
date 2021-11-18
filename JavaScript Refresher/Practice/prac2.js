import fetch from "node-fetch";

let i = 4;
while (i > 1) {
  console.log(i);
  i--;
}
console.log(2 > 1);

let student = {
  name: "prath",
  rollno: 12,
};

let string1 = JSON.stringify(student);
console.log(typeof string1);
console.log(string1);

let arr1 = "[1,2,3,4]";
let jj = JSON.parse(arr1);
console.log(jj);

setTimeout(() => {
  console.log("Last Message");
}, 3000);

import fetch from "node-fetch";
const fetchdata = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
fetchdata();
