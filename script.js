async function getHourlyForecast() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch(hourlyAPI, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();

  renderHourlyForecast(data);
  console.log("all done at hourly");
  console.log(data);
}

async function getDailyForecast() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch(dailyAPI, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();

  renderDailyForecast(data);
  console.log("all done at daily");
}

function getDateFromLocal(str) {
  let date = new Date();

  if (str === "date") {
    return `${String(date.getDate()).padStart(2, "0")}.${String(
      date.getMonth() + 1
    ).padStart(2, "0")}.${date.getFullYear()}`;
  } else if (str === "time") {
    return `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}`;
  }
}

function convertDate(isoDate) {
  return isoDate.substring(0, 10);
}

function convertTime(isoDate) {
  return isoDate.substring(11, 16);
}

function DailyStatsDateConverter(datetime) {
  let month = datetime.substring(5, 7);
  let day = datetime.substring(8, 10);
  return `${day}.${month}`;
}

function convertWeatherCode(weatherCode) {
  switch (weatherCode) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Foggy";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Drizzle";
    case 53:
      return "Drizzle";
    case 55:
      return "Drizzle";
    case 56:
      return "Freezing Drizzle";
    case 57:
      return "Freezing Drizzle";
    case 61:
      return "Rain";
    case 63:
      return "Rain";
    case 65:
      return "Rain";
    case 66:
      return "Freezing Rain";
    case 67:
      return "Freezing Rain";
    case 71:
      return "Snow fall";
    case 73:
      return "Snow fall";
    case 75:
      return "Snow fall";
    case 77:
      return "Snow grains";
    case 80:
      return "Rain showers";
    case 81:
      return "Rain showers";
    case 82:
      return "Rain showers";
    case 85:
      return "Snow showers";
    case 86:
      return "Snow showers";
    case 95:
      return "Thunderstorm";
    case 96:
      return "Thunderstorm";
    case 99:
      return "Thunderstorm";
    default:
      return "Unknown";
  }
}

function renderDailyForecast(dailyResponse) {
  weeklyForecastDiv.innerHTML = "";
  let dailydata = dailyResponse.daily.time;

  dailydata.forEach((element, index) => {
    weeklyForecastDiv.innerHTML += `<div class="day"> <span > ${DailyStatsDateConverter(
      dailyResponse.daily.time[index]
    )}  </span><span class="temp">${Math.round(
      dailyResponse.daily.temperature_2m_max[index]
    )}°</span> <span class="weatherType">${convertWeatherCode(
      dailyResponse.daily.weather_code[index]
    )}</span></div>`;
  });

  mainTempText.innerHTML = ` ${Math.round(
    dailyResponse.daily.temperature_2m_max[0]
  )}°`;
  dailyWeatherConditionText.innerHTML = `${convertWeatherCode(
    dailyResponse.daily.weather_code[0]
  )}`;
  dailyApparentTempText.innerHTML = `Feels like ${dailyResponse.daily.apparent_temperature_max[0]}°`;
  windSpeedText.textContent = `${dailyResponse.daily.wind_speed_10m_max[0]} km/h`;
}

function renderHourlyForecast(data) {
  hourlyForecastDiv.innerHTML = "";
  let hourlydata = data.hourly.time;

  hourlydata.forEach((element, index) => {
    hourlyForecastDiv.innerHTML += `<div class="hour"> <span > ${convertTime(
      data.hourly.time[index]
    )}  </span><span class="temp">${Math.round(
      data.hourly.temperature_2m[index]
    )}°</span> <span class="weatherType">${convertWeatherCode(
      data.hourly.weather_code[index]
    )}</span></div>`;
  });
  hourlyTempText.innerHTML = `${Math.round(
    data.hourly.temperature_2m[new Date().getHours()]
  )}°`;
  appearentTempText.innerHTML = `Feels like ${
    data.hourly.apparent_temperature[new Date().getHours()]
  }°`;
  hourlywindSpeedText.innerHTML = `${
    data.hourly.wind_speed_10m[new Date().getHours()]
  } km/h`;
}

function renderCityList() {
  citiesListDiv.innerHTML = "";
  cityList.forEach((city) => {
    citiesListDiv.innerHTML += `<div class="city" onclick="setCity(${city.lat},${city.long},'${city.cityName}','${city.country}')">${city.cityName}</div>`;
  });
}

function SearchCity(city) {
  citiesListDiv.innerHTML = "";
  cityList.forEach((obj) => {
    console.log(obj.country);
    if (obj.cityName.toLowerCase().includes(city.toLowerCase())) {
      citiesListDiv.innerHTML += `<div class="city" onclick="setCity(${obj.lat},${obj.long},'${obj.cityName}','${obj.country}')" >${obj.cityName}</div>`;
    }
  });
}

function setCity(latCoordinate, longCoordinate, cityParam, countryParam) {
  lat = latCoordinate;
  long = longCoordinate;
  dailyAPI = dailyAPI;
  hourlyAPI = hourlyAPI;
  updateApi(lat, long, cityParam, countryParam);
  hideCityChange();
  localStorage.setItem("lat", JSON.stringify(lat));
  localStorage.setItem("long", JSON.stringify(long));
  localStorage.setItem("cityName", JSON.stringify(cityParam));
  localStorage.setItem("country", JSON.stringify(countryParam));
}

function updateApi(latitude, longtitude, city, country) {
  dateText.innerHTML = getDateFromLocal("date");
  timeText.innerHTML = getDateFromLocal("time");
  console.log(latitude, longtitude);
  dailyAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&daily=temperature_2m_max&timezone=auto&daily=weather_code&daily=apparent_temperature_max&daily=wind_speed_10m_max`;
  hourlyAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&hourly=temperature_2m&hourly=wind_speed_10m&hourly=weather_code&timezone=auto&hourly=apparent_temperature&forecast_days=1`;
  locationCityNameText.innerHTML = `${city}, ${country}`;
  getHourlyForecast();
  getDailyForecast();
  console.log(hourlyAPI);
  console.log(dailyAPI);
}

function showCityChange() {
  cityChangeDiv.style.display = "block";
}

function hideCityChange() {
  cityChangeDiv.style.display = "none";
}

cityInput.addEventListener("input", (event) => {
  SearchCity(event.target.value);
});

locationDiv.addEventListener("click", () => {
 

  renderCityList();

  showCityChange();
});

closeTabIcon.addEventListener("click", () => {
  hideCityChange();
});

updateApi(lat, long, defaultCityName, defaultCountrtyName);


// will be added soon
 //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       lat = position.coords.latitude;
  //       long = position.coords.longitude;
  //       getHourlyForecast();
  //       getDailyForecast();
  //     });
  //   }