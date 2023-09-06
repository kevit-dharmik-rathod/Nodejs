const axios = require("axios");
const forecast2 = async (latitude, longitude, callback) => {
  try {
    const fetchData = await axios.get(
      "http://api.weatherstack.com/current?access_key=0defa7086afdd6f16ab5524619e035cf&query=" +
        latitude +
        "," +
        longitude +
        "&units=f"
    );
    if ((await fetchData.data.success) === false) {
      callback("Unable to find location. Try another Search", undefined);
    } else {
      callback(
        undefined,
        fetchData.data["current"]["weather_description"] +
          " It is currently " +
          fetchData.data["current"]["temperature"] +
          " degrees out. It feels like " +
          fetchData.data["current"]["temperature"] +
          " degrees out"
      );
    }
  } catch (error) {
    callback("Unable to connect to location services!", undefined);
  }
};
module.exports = forecast2;
