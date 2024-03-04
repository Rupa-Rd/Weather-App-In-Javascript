// https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}

const apiKey = "e8298b2d3706e3e91277689402f11724";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', function() {
      console.log('Button clicked!');
      const searchBox = document.getElementById("cityInput").value;
      checkWeather(searchBox);
    });
  });


async function checkWeather(city) {
    // console.log("Function is running"+city);
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed * 3.6) + " km/hr";
    const weather = data.weather[0].main;
    document.querySelector('.weather img').src="images/" +weather.toLowerCase()+".png";
    console.log(weather);


    document.querySelector('.weather').style.display = "block";
}



