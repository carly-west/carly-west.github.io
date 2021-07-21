
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

window.onresize = () => {if (window.innerWidth > 760) nav.classList.remove('responsive')};



// Weather

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.6&lon=-111.8&appid=b8b0e14937e799b298d79cb51cfa495e&units=imperial&lang=en"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.current.temp;
    document.getElementById('condition').textContent = jsObject.current.weather[0].main;
    document.getElementById('humidity').textContent = jsObject.current.humidity;

    document.getElementById('day1').textContent = jsObject.daily[1].temp.day;
    document.getElementById('day2').textContent = jsObject.daily[2].temp.day;
    document.getElementById('day3').textContent = jsObject.daily[3].temp.day;
  });


//   Print day of week
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var date = new Date();
document.getElementById('date1').textContent = days[(date.getDay() + 1) % 7];
document.getElementById('date2').textContent = days[(date.getDay() + 2) % 7];
document.getElementById('date3').textContent = days[(date.getDay() + 3) % 7];





