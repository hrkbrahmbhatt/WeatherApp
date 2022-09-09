const weatherApi = require("./");
const axios = require("axios");

jest.mock("axios");

test("Temprature Test Case", async () => {
  const lat = 60.56;
  const lng = 50.5;
  const data = {
    coord: { lon: 60.56, lat: 50.5 },
    weather: [
      { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
    ],
    base: "stations",
    main: {
      temp: 283.98,
      feels_like: 282.24,
      temp_min: 283.98,
      temp_max: 283.98,
      pressure: 1020,
      humidity: 43,
      sea_level: 1020,
      grnd_level: 986,
    },
    visibility: 10000,
    wind: { speed: 4.01, deg: 249, gust: 7.6 },
    clouds: { all: 97 },
    dt: 1662693976,
    sys: { country: "RU", sunrise: 1662686626, sunset: 1662733622 },
    timezone: 18000,
    id: 1490501,
    name: "Svetlyy",
    cod: 200,
  };
  axios.get.mockResolvedValue({ data });
  const weather = await weatherApi.getWeatherinfo(lat, lng);
  expect(weather).toBe(data);
});
