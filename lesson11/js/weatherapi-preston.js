const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=b8b0e14937e799b298d79cb51cfa495e&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var currently = jsObject.weather[0].description;
    document.getElementById('currently').textContent = currently[0].toUpperCase() + currently.substring(1);
    document.getElementById('current-temp').textContent = parseInt(jsObject.main.temp);
    document.getElementById('high').textContent = parseInt(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = parseInt(jsObject.main.humidity);
    document.getElementById('wind-speed').textContent = parseInt(jsObject.wind.speed);


    // windchill
    let temperature = parseFloat(document.getElementById("high").innerHTML);
    let windspeed = parseFloat(document.getElementById("wind-speed").innerHTML);
    
    
    let windchill = (35.74 + 0.6125 * temperature) - (35.75 * (windspeed ** 0.16)) + (0.4275 * (temperature * (windspeed ** 0.16)));
    
    document.getElementById("wind-chill").innerHTML = windchill.toFixed(1);
    
  });

// I used my classmates website to help me finish this portion.
  const apiURLforcast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b8b0e14937e799b298d79cb51cfa495e';

  fetch(apiURLforcast)
  .then((response) => response.json())
  .then((jsObject) => {
    const forecast = jsObject['list'];
    for (let i = 3; i < forecast.length; i += 8) {
      document.getElementById(`img${i}`).setAttribute('src', "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png");
      document.getElementById(`day${i}`).innerText = forecast[i].main.temp;
    }


  });
