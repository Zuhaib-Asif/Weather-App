let url = "https://api.weatherapi.com/v1/current.json";
let key = "2d8cf0913a2e494fa87192609232703";
let searchBtn = document.getElementById("searchBtn");
let weatherCity = document.getElementById("weatherCity");
let weatherImg = document.getElementById("weatherImg");
let farTempResult = document.getElementById("farTempResult");
let humidityResult = document.getElementById("humidityResult");
let lastUpdate = document.getElementById("lastUpdate");
let secondrow = document.getElementById("secondrow");
let cityError = document.getElementById("cityError");

searchBtn.addEventListener("click", () => {
  let input = document.getElementById("userInput").value;
  fetch(`${url}?key=${key}&q=${input}`)
    .then((res) => {
      if (res.status == 400) {
        celTemp.innerHTML = `City Not Found`;
      } else {
        return res.json();
      }
    })
    .then((data) => {
      cityError.style.display = "none";
      secondrow.style.display = "block";
      weatherCity.innerHTML = `Weather for ${input}`;
      celTemp.innerHTML = `${data.current.temp_c}&#8451`;
      weatherImg.src = `${data.current.condition.icon}`;
      farTempResult.innerHTML = `${data.current.temp_f} &#8457;`;
      humidityResult.innerHTML = `${data.current.humidity}%`;
      lastUpdate.innerHTML = ` Last Updated : ${data.current.last_updated}`;
    })
    .catch((error) => {
      cityError.style.display = "block";
      secondrow.style.display = "none";
    });
});
