const deleteone = async () => {
  const heyy = await db.collection("users").deleteOne({ name: "Rahul" });
  console.log("Completed");
};
deleteone();

const deletemany = async () => {
  const heyy = await db.collection("users").deleteMany({});
  console.log("Completed");
};
deletemany();
