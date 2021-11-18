const updateone = async () => {
  const does = await db
    .collection("users")
    .updateOne({ name: "Rahul" }, { $set: { status: "completed" } });
  console.log("Update Succesfully");
};
updateone();

const updatemany = async () => {
  const does1 = await db
    .collection("users")
    .updateMany({}, { $set: { status: "Pending" } });
  console.log("Update Succesfully");
};
updatemany();

const nesting = async () => {
  const rr = await db
    .collection("users")
    .updateOne(
      { name: "Rahul" },
      { $set: { sports: ["cricket", "football"] } }
    );
  console.log(rr);
};
nesting();
