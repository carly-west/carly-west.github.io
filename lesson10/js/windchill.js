let temperature = parseFloat(document.getElementById("high").innerHTML);
let windspeed = parseFloat(document.getElementById("wind-speed").innerHTML);


let windchill = (35.74 + 0.6125 * temperature) - (35.75 * (windspeed ** 0.16)) + (0.4275 * (temperature * (windspeed ** 0.16)));

document.getElementById("wind-chill").innerHTML = windchill.toFixed(1);

