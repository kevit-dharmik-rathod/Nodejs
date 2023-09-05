const request = require("request");
// const url =
const geocode = (address, callback) => {
  const url =
    `https://geocode.maps.co/search?q=` +
    encodeURIComponent(address) +
    "&limit=1";
  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body[0].lat,
        longitude: body[0].lon,
        place: body[0].display_name,
      });
    }
  });
};
module.exports = geocode;
