const request = require("request");
const weather = require("./utils/weather");

weather("New York", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
