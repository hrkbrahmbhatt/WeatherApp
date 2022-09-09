//env import
require("dotenv").config();

var differenceInSeconds = require("date-fns/differenceInSeconds"); // fns lib to calculate difference in seconds
const port = process.env.PORT || 8081;
var express = require("express");
var app = express();
const weatherApi = require("./weatherApi");
const geoLocation = require("./geoLocation");
const mongo = require("./mongoDB");
const fs = require("fs");

app.get("/weather/:cityName", async (req, res) => {
  const cityName = req.params.cityName.toString().toLowerCase(); //convert into  lowercase to avoid duplicate data
  console.log("City:", cityName);

  const weatherFromDB = await mongo.findrecordByCity(cityName);
  const currentTime = new Date();

  const logData = {
    API_CALL: "Weather API",
    TIME_STAMP: currentTime,
  };
  fs.appendFileSync("./log.json", JSON.stringify(logData)); // to add data in log file to keep history

  let oldEntry = null;
  if (weatherFromDB) {
    // need to check timestamp of 20 seconds using datefns lib
    oldEntry = differenceInSeconds(currentTime, weatherFromDB.timestamp);
    console.log("Entry Since:", oldEntry + " " + "seconds");
  }

  //if < 20 secounds return existing data from database
  if (oldEntry < 20 && oldEntry != null) {
    console.log("Weather from Database:", weatherFromDB);
    res.send(weatherFromDB); // dump from the database if within 20 seconds
  } else {
    try {
      // need to call mongodb findby id or city
      const address = await geoLocation.getAddress(cityName); //accesing geocode API
      const { lat, lng } = address[0].geometry.location; // destructuring
      // console.log(lat);
      // console.log(lng);

      const weather = await weatherApi.getWeatherinfo(lat, lng);

      const timestamp = new Date(); // to get current time

      //updating data post 20 seconds
      if (weatherFromDB) {
        await mongo.updateRecordByCityName(weatherFromDB._id, {
          cityName,
          weather,
          timestamp,
        });
      } else {
        //creating a new entry when new city submitted
        await mongo.createWeatherRecord({
          cityName,
          weather,
          timestamp,
        });
      }

      res.send(weather);
    } catch (error) {
      res.send("Please try another city"); // its only supporting 200 thousands cities
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
