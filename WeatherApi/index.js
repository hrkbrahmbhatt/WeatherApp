const axios = require("axios");

const getWeatherinfo = async (lat, lng) => {
  // Make a request for a user with a given ID
  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.OPEN_WEATHER_API}`
  );

  return weather.data;
};

module.exports.getWeatherinfo = getWeatherinfo;
