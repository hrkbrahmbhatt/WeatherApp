const weatherApi = require("./");
const axios = require("axios");

jest.mock("axios");

test("Temprature Test Case", async () => {
  const lat = 42.47;
  const lng = 50.51;
  const data = { temprature: 15 };
  axios.get.mockResolvedValue({ data });
  const weather = await weatherApi.getWeatherinfo(lat, lng);
  expect(weather).toBe(data);
});
