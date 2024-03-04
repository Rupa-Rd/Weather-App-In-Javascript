// https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}

const apiKey = "";
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
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        document.querySelector(".error").style.display = "none";

    console.log(data);
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed * 3.6) + "km/hr";
    const weather = data.weather[0].main;
    document.querySelector('.weather img').src="images/" +weather.toLowerCase()+".png";
    console.log(weather);


    document.querySelector('.weather').style.display = "block";
    }
    
}



