const geoLocation = require("./");
const axios = require("axios");

jest.mock("axios");

test("Location Test Case ", async () => {
  const data = {
    results: [
      {
        address_components: [
          {
            long_name: "Toronto",
            short_name: "Toronto",
            types: ["locality", "political"],
          },
          {
            long_name: "Toronto",
            short_name: "Toronto",
            types: ["administrative_area_level_2", "political"],
          },
          {
            long_name: "Ontario",
            short_name: "ON",
            types: ["administrative_area_level_1", "political"],
          },
          {
            long_name: "Canada",
            short_name: "CA",
            types: ["country", "political"],
          },
        ],
        formatted_address: "Toronto, ON, Canada",
        geometry: {
          bounds: {
            northeast: {
              lat: 43.8554579,
              lng: -79.1168971,
            },
            southwest: {
              lat: 43.5810245,
              lng: -79.639219,
            },
          },
          location: {
            lat: 43.653226,
            lng: -79.3831843,
          },
          location_type: "APPROXIMATE",
          viewport: {
            northeast: {
              lat: 43.8554579,
              lng: -79.1168971,
            },
            southwest: {
              lat: 43.5810245,
              lng: -79.639219,
            },
          },
        },
        place_id: "ChIJpTvG15DL1IkRd8S0KlBVNTI",
        types: ["locality", "political"],
      },
    ],
    status: "OK",
  };
  axios.get.mockResolvedValue({ data });
  const address = await geoLocation.getAddress("Toronto");
  expect(JSON.stringify(address)).toBe(JSON.stringify(data.results));
});
