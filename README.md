# WeatherApp
Fetch Weather by City using Openweather Map API 


# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "*"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.17.0
- install POSTMAN for API Test 


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:8001` in POSTMAN 

- API Document endpoints

   Endpoint : http://localhost:8001//weather/:cityName


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- 
| **node_modules**         | Contains all  npm dependencies                                                            |
| **configuration**        | Application configuration including environment-specific configs                          |
| /geoLocation/index.js    | Google Geocode API                                                                        |   
| /mongoDB/index.js        | CRUD Operation in Mongo DB                                                                |  
| /WeatherApi/index.js     | OpenMap Weather API                                                                       |  
| index.js                 | Entry point to express app                                                                |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)|    

## Building the project
- Setup Google Developer Account for Google Map API free $300 credit need to add billing info in your google dev account in order to access Google Geocode API in Project, refer this https://developers.google.com/maps/documentation/geocoding/get-api-key
- Setup free Open Weather API Account for API Key in order to access weather details over 200 thousands cities refer this https://openweathermap.org/api
- Setup MongoDB account and create free cluster and create weather_info database and weather collection in cluster in order to access database in project refer this how to create cluster in Mongo https://www.mongodb.com/basics/clusters/mongodb-cluster-setup

## Tasks performed on this project
- Create a NodeJS API to fetch weather details for a given City using Weather API
- API will accept city name and read from DB table 
- NodeJS will fetch encrypted Key Secrets from configuration file for authenticating Google Weather API.
- NodeJS API will call weather API to get latest weather information and dump this info in DB Table 
- Return weather details in 20 seconds of last call for the same City, API will respond with DB Table dump, post 20 seconds it will go to Google API to     get latest weather
- 	Write Unit Test cases on API
- Log the API execution in Log files with Date stamp.


# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.



Here's what it looks like in action. ( Wait for GIF )


![Alt Text](https://github.com/hrkbrahmbhatt/WeatherApp/blob/master/ggif1.gif)

![Alt Text](https://github.com/hrkbrahmbhatt/WeatherApp/blob/master/ggif2.gif)


