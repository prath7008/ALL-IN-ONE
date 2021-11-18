const express = require("express");
require("./db/mongoose");

const userRouter = require("./router/user");
const taskRouter = require("./router/task");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
//Without Middelware: Request -----> Run Route Handler

//With Middelware: New Requet -----> Do Something ----------> Run Route Handler

app.listen(port, () => {
  console.log("Server is up on port", port);
});

const Task = require("./models/task");
const User = require("./models/user");
const main = async () => {
  // const task = await Task.findById("61743e57c43fac05abd7ed29");
  // await task.populate("owner");
  // console.log(task.owner);

  const user = await User.findById("61743b0834a8a3903ccf6321");
  await user.populate("tasks");
  console.log(user.tasks);
};
main();

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//     expiresIn: "2 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };
// myFunction();


