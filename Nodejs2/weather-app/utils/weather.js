const request = require("request");

const weather = (place, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=2c91fa64d5fbc35603c728f1bbe3a7fc&query=" +
    place +
    "";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to Internet Service", undefined);
    } else if (response.body.error) {
      callback("Unable to find Location", undefined);
    } else {
      callback(undefined, {
        data: response.body.current,
      });
    }
  });
};
module.exports = weather;
