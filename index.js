function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", showCity);
