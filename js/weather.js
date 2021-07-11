const api = "d85f161de1ba40f8259f5ed2066d9ce5";
const weatherInfo = document.querySelector("#weather-info");
const city = weatherInfo.querySelector("#city");
const weather = weatherInfo.querySelector("#weather");
const temp = weatherInfo.querySelector("#temp");

function geoSuccess(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}℃`;
    });
}

function geoFail(params) {
  weatherInfo.append("Can't find Weather 😥");
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
