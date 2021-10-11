let userInput = document.querySelector("input");

let button = document.getElementById("button");

let address = document.getElementById("location");

let myTemp = document.getElementById("temp");

let weather = document.getElementById("temp-min");

let tempRange = document.getElementById("temp-max");

let API_key = "03b46f91c624d859f7b1e70a7fb9546f";

function showResult() {
  let city_name = userInput.value.trim();

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;

  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      let myWeather = content.weather[0].description;
      let temprature = content.main.temp;
      let tempMin = content.main.temp_min;
      let tempMax = content.main.temp_max;

      myTemp.innerText = ` ${Math.floor(temprature - 273.15)}cel`;
      weather.innerText = ` ${myWeather}`;
      tempRange.innerText = ` ${Math.floor(tempMin - 273.15)}cel - ${Math.floor(
        tempMax - 273.15
      )}cel`;
    })
    .catch((err) => {
      console.error(err);
    });
}

button.addEventListener("click", showResult);
