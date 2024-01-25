function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
}

let apiKey = `8o03bb70ba39844fdc4a5a5t25cc70b6`;

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", showCity);
