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
module.exports = geocode2;
