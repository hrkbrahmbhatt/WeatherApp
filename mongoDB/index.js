const { MongoClient } = require("mongodb");

//Mongo DB URL
const uri = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.4bat8u3.mongodb.net/?retryWrites=true&w=majority`;

//connect client to mongo
const client = new MongoClient(uri);

//create record function
async function createWeatherRecord(weather) {
  const result = await client
    .db("weather_info")
    .collection("weather")
    .insertOne(weather); //adding record
  console.log(`New data created with the following id: ${result.insertedId}`);
}

//find record function
async function findrecordByCity(cityName) {
  const result = await client
    .db("weather_info")
    .collection("weather")
    .findOne({ cityName }); //finding record

  if (result) {
    console.log(
      `Found a data in the collection with the City Name '${cityName}':`
    );
    return result;
  } else {
    console.log(`No data found with the City Name '${cityName}'`);
    return null;
  }
}

//update record function
async function updateRecordByCityName(recordID, weatherRecord) {
  // console.log("Record ID:", recordID);
  try {
    const result = await client
      .db("weather_info")
      .collection("weather")
      .updateOne({ _id: recordID }, { $set: weatherRecord }); //updating record

    console.log(`${result.matchedCount} data matched the query criteria.`);
    console.log(`${result.matchedCount} Weather's updated.`);
  } catch (error) {
    console.log("Error in updating", error);
  }
}
module.exports = {
  createWeatherRecord,
  findrecordByCity,
  updateRecordByCityName,
};
