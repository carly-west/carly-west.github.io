const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=b8b0e14937e799b298d79cb51cfa495e&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var currently = jsObject.weather[0].description;
    document.getElementById('currently').textContent = currently[0].toUpperCase() + currently.substring(1);
    document.getElementById('current-temp').textContent = parseInt(jsObject.main.temp);
    document.getElementById('high').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = parseInt(jsObject.main.humidity);
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;


  });




