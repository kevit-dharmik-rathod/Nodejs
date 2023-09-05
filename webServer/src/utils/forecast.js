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

// const axios = require("axios");
// const forecast2 = async (latitude, longitude,callback) => {
//   try {
//     const fetchData = await axios.get(
//       "http://api.weatherstack.com/current?access_key=0defa7086afdd6f16ab5524619e035cf&query=" +
//         latitude +
//         "," +
//         longitude +
//         "&units=f"
//     );
//     console.log(fetchData.data);
//     if (fetchData.data.success === false) {
//       return callback("Unable to find location. Try another Search", undefined);
//       // console.log("unable to find location. Try another Search");
//     } else {
//       console.log(fetchData.data);
//       console.log(
//         fetchData.data["current"]["weather_description"][0] +
//           " It is currently " +
//           fetchData.data["current"]["temperature"] +
//           " degrees out. It feels like " +
//           fetchData.data["current"]["temperature"] +
//           " degrees out"
//       );
//       // callback(
//       //   undefined,
//       //   fetchData.data["current"]["weather_description"][0] +
//       //     " It is currently " +
//       //     fetchData.data["current"]["temperature"] +
//       //     " degrees out. It feels like " +
//       //     fetchData.data["current"]["temperature"] +
//       //     " degrees out"
//       // );
//     }
//   } catch (error) {
//     console.log("Unable to connect to service");
//   }
// };
// // forecast2(22.8176662, 70.8345928);
// (forecast2("abcd", "abcd",(error,res)=>);
