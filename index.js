function updateTemperature(response) {
  let temperature = response.data.temperature.current;
  let roundedTemp = Math.round(temperature);
  let tempElement = document.querySelector("#temp-value");
  let cityElement = document.querySelector("h1");

  let currentHumidity = response.data.temperature.humidity;
  let humidityElement = document.querySelector("#humidity");

  let currentWind = response.data.wind.speed;
  let formattedWind = Math.round(currentWind);
  let windElement = document.querySelector("#wind");

  let currentCondition = response.data.condition.description;
  let conditionElement = document.querySelector("#sky");

  humidityElement.innerHTML = `${currentHumidity}%`;
  windElement.innerHTML = `${formattedWind}km/h`;
  conditionElement.innerHTML = currentCondition;
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = roundedTemp;
}

function searchLocation(city) {
  let apiKey = "8o03bb70ba39844fdc4a5a5t25cc70b6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateTemperature);
}

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  searchLocation(searchInput.value);
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", showCity);

searchLocation("Madrid");
