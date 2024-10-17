const inputBox = document.querySelector('.input-box');
const searcBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const weather_video = document.querySelector('video');

async function checkWeather(city){
    const api_key = "8b7fbb04c1cb4a05d17ef9c73b2275f1";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none"
        return;
    }
    console.log(weather_data);

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/cloud.png"
            weather_video.src = "https://cdn.pixabay.com/video/2016/05/03/2995-165221451_large.mp4";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png"
            weather_video.src = "https://media.istockphoto.com/id/1048203248/video/moving-cloud-at-sun-time-lapse.mp4?s=mp4-480x480-is&k=20&c=--vQFHJj13j5Kx75ahnHPu7ZHqnd1BykpBsvT8RrdhQ=";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png"
            weather_video.src = "https://videos.pexels.com/video-files/2491284/2491284-sd_960_506_24fps.mp4";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png"
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png"
            weather_video.src = "https://cdn.pixabay.com/video/2022/03/27/112055-692839383_large.mp4";
            break;
        case 'Thunderstorm':
            weather_img.src = "/assets/thunder.png"
            weather_video.src = "https://assets.mixkit.co/videos/47948/47948-720.mp4";
            break;
        case 'Haze':
            weather_img.src = "/assets/cloud.png"
            weather_video.src = "https://cdn.pixabay.com/video/2018/11/18/19409-301531345_tiny.mp4";
            break;

    }
    console.log(weather_data);
}




searcBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
