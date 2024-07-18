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
//const detailsText = document.querySelector(".details");

const weeklyForecastDiv = document.querySelector(".weekly-forecast");
const hourlyForecastDiv = document.querySelector(".hourly-forecast");
// city name
let defaultCityName = "Baku";
// coordinates for weather forecast
let lat = cityList[0].lat;
let long = cityList[0].long;
// api url
// let dailyAPI = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max&timezone=auto&daily=weather_code&daily=apparent_temperature_max`;
// let hourlyAPI = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&hourly=wind_speed_10m&hourly=weather_code&timezone=auto&hourly=apparent_temperature&forecast_days=1`;


let dailyAPI, hourlyAPI