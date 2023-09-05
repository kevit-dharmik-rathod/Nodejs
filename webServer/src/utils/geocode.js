// const request = require("request");
// // const url =
// const geocode = (address, callback) => {
//   const url =
//     `https://geocode.maps.co/search?q=` +
//     encodeURIComponent(address) +
//     "&limit=1";
//   request({ url: url, json: true }, (error, response, body) => {
//     if (error) {
//       callback("Unable to connect to location services!", undefined);
//     } else if (body.length === 0) {
//       callback("Unable to find location. Try another search.", undefined);
//     } else {
//       callback(undefined, {
//         latitude: body[0].lat,
//         longitude: body[0].lon,
//         place: body[0].display_name,
//       });
//     }
//   });
// };
// module.exports = geocode;

const axios = require("axios");
const geocode2 = async (address, callback) => {
  try {
    const fetchData = await axios.get(
      `https://geocode.maps.co/search?q=` +
        encodeURIComponent(address) +
        "&limit=1"
    );
    if (fetchData.data.length === 0) {
      callback({ error: "Unable to find location" }, undefined);
    } else {
      callback(undefined, {
        latitude: fetchData.data[0].lat,
        longitude: fetchData.data[0].lon,
        place: fetchData.data[0].display_name,
      });
    }
  } catch (error) {
    callback({ error: "Unable to connect to location services" }, undefined);
  }
};
// geocode2("morbi", (error, res) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(res);
//   }
// });
module.exports = geocode2;
