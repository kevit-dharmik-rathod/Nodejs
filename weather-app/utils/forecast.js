const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=0defa7086afdd6f16ab5524619e035cf&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  //   console.log(url);
  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out"
      );
    }
  });
};
module.exports = forecast;
