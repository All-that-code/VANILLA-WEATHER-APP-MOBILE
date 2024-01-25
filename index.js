function updateTemperature(response) {
  let temperature = response.data.temperature.current;
  let roundedTemp = Math.round(temperature);
  let tempElement = document.querySelector("#temp-value");
  let cityElement = document.querySelector("h1");
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
