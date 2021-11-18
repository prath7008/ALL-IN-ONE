const findage = async () => {
  const result1 = await db
    .collection("users")
    .find({
      age: 30,
    })
    .toArray();
  console.log(result1);
};
findage();

const greaterThan = async () => {
  const tt = await db
    .collection("users")
    .find({ age: { $gt: 30 } })
    .toArray();
  console.log(tt);
};
greaterThan();

const projection = async () => {
  const result = await db.collection("users").find({}, { name: 1 }).toArray();

  console.log(result);
};
projection();
  