const geoLocation = require("./");
const axios = require("axios");

jest.mock("axios");

test("Location Test Case ", async () => {
  const lat = 42.47;
  const lng = 50.51;
  const results = { lat, lng };
  const data = { results };
  axios.get.mockResolvedValue({ data });
  const address = await geoLocation.getAddress("Toronto");
  expect(JSON.stringify(address)).toBe(JSON.stringify(results));
});
