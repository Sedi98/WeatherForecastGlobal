const dateText = document.querySelector(".date");
const greetingText = document.querySelector(".greeting");
const timeText = document.querySelector(".time");
const mainTempText = document.querySelector(".main-temp");
const hourlyTempText = document.querySelector(".hourlyTempText");
const dailyWeatherConditionText = document.querySelector(".weather-condition");
const appearentTempText = document.querySelector(".appearentTempText");
const dailyApparentTempText = document.querySelector(".dailyApparentTempText");
const locationCityNameText = document.querySelector(".locationCityNameText");
const windSpeedText = document.querySelector(".windSpeedText");
const hourlywindSpeedText = document.querySelector(".hourlywindSpeedText");

const closeTabIcon = document.querySelector(".closeTabIcon");

const citiesListDiv = document.querySelector(".citiesList");

const cityInput = document.querySelector(".cityInput");

const locationDiv = document.querySelector(".location");
const cityChangeDiv = document.querySelector(".cityChangeDiv");


const weeklyForecastDiv = document.querySelector(".weekly-forecast");
const hourlyForecastDiv = document.querySelector(".hourly-forecast");
// city name
let defaultCityName = JSON.parse(localStorage.getItem("cityName")) || "Baku";
let defaultCountrtyName = JSON.parse(localStorage.getItem("countryName")) || "Azerbaijan";
// coordinates for weather forecast
let lat =JSON.parse(localStorage.getItem("lat")) || cityList[0].lat;
let long =JSON.parse(localStorage.getItem("long")) || cityList[0].long;


let dailyAPI, hourlyAPI

// api for finding coordinate with ip(Will be added soon)
//  https://api.bigdatacloud.net/data/reverse-geocode-client