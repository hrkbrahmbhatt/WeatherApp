const axios = require("axios");

const getAddress = async (cityName) => {
  // Make a request for a user with a given ID
  const address = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${process.env.GOOGLE_GEO_API}`
  );

  return address.data.results;
};

module.exports.getAddress = getAddress;
