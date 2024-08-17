const api = {
    key: "5dfe08212e654875f8cae20c0edcd36a",
    base: "https://api.openweathermap.org/data/2.5/weather?"
}

const city = document.getElementById('city');

city.addEventListener('keypress', disp);


function disp(event) {
    if (event.key === 'Enter') {
        getWeather(city.value);
    }
}

function getWeather(city) {
    fetch(`${api.base}q=${city}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            displayWeather(data);
        })
}

function displayWeather(data) {
    const { name, main, wind } = data;
    console.log(data);
    document.getElementById('cityName').innerText = name;
    document.getElementById('temp').innerText = main.temp;
    document.getElementById('humidity').innerText = main.humidity;
    // console.log(wind.speed)
    document.getElementById('wind').innerText = wind.speed;
    const description = document.getElementById('desc');
    description.innerText = data.weather[0].description;
    console.log(data.weather[0].description);

    changeBack(data);
}

function changeBack(data) {
    const description = data.weather[0].description;
    let backImage;
    if (description.includes('clear')) {
        console.log("clear")
        backImage = 'url("./assets/bc-clouds-clear.jpg")';
    } 

    else if (description.includes('overcast clouds')) {
        console.log("overcast cloud")
        backImage = 'url("./assets/bc-clouds-mist.jpg")';
        console.log("overcast cloud")
    } 

    else if (description.includes('broken clouds')) {
        console.log("broken cloud")
        backImage = 'url("./assets/bc-broken.jpg")';
        console.log("broken cloud")
    } 

    else if (description.includes('light intensity drizzle')) {
        console.log("light intensity drizzle")
        backImage = 'url("./assets/bc-rain.jpg")';
    } 

    else if (description.includes('rain')) {
        console.log("rain")
        backImage = 'url("./assets/bc-rain-outside.jpg")';
    } 
    
    else if (description.includes('snow')) {
        console.log("snow")
        backImage = 'url("./assets/bc-snow.jpg")';
    }

     else if (description.includes('haze')) {
        console.log("haze")
        backImage = 'url("./assets/bc-haze.jpg")';
    } 
    
    else {
        backImage = 'url("./assets/bc-clearsky.jpg")';
    }
    document.body.style.backgroundImage = backImage;
}

