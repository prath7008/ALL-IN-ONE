//ASYNC-AWAIT
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject("Number must be Non-Negative");
      }
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  const sum = await add(1, 99);
  const sum2 = await add(sum, 50);
  const sum3 = await add(sum2, 3);
  return sum3;
  // return "Andrew";
};

doWork()
  .then((result) => {
    console.log("result", result);
  })
  .catch((e) => {
    console.log("e", e);
  });
