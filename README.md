# WeatherApp
Fetch data by City using Openweather Map API 


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

## Tasks performed on this project
•	Create a NodeJS API to fetch weather details for a given City using Weather API
•	API will accept city name and read from DB table 
•	NodeJS will fetch encrypted Key Secrets from configuration file for authenticating Google Weather API.
•	NodeJS API will call weather API to get latest weather information and dump this info in DB Table 
•	Return weather details in 20 seconds of last call for the same City, API will respond with DB Table dump, post 20 seconds it will go to Google API to     get latest weather
•	Log the API execution in Log files with Date stamp.


# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.


