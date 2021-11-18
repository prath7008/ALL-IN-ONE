db.collection("users").insertOne({
  name: "Prath",
  age: 22,
  status: "pending",
});
db.collection("users").insertMany([
  {
    name: "Rahul",
    age: 30,
    status: "pending",
  },
  {
    name: "Rakesh",
    age: 55,
    status: "completed",
  },
]);
