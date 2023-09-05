const apiKey = "ce62697e6065c5b1cbb836f42fbd7edf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.svg";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.svg";
    }
    else if (data.weather[0].main == "Clear-Night"){
        weatherIcon.src = "images/clear-night.svg";
    }
    else if (data.weather[0].main == "Hail"){
        weatherIcon.src = "images/hail.svg";
    }
    else if (data.weather[0].main == "Hurricane"){
        weatherIcon.src = "images/hurricane.svg";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.svg";
    }
    else if (data.weather[0].main == "Tornado"){
        weatherIcon.src = "images/tornado.svg";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.svg";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.svg";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

// checkWeather();
