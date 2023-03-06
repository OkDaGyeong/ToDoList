//날씨
//   const APIkey = "f4671143a7f6c68e8585518dc4a7fcd2";
const apiKey = "2834387742b25d5393a21e88fee8246a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const city = document.querySelector("#city");
  const weather = document.querySelector("#weather");
  const temp = document.querySelector("#temp");
  // l.innerText = url;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp + "°C";
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
