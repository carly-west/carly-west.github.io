
var today = new Date();

var dd = String(today.getDate()).padStart(2, '0');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[today.getDay()];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var monthName = months[today.getMonth()];

var yyyy = today.getFullYear();

today = dayName + ', ' + dd + ' ' + monthName + ' ' + yyyy;

const currentDate = new Date();
document.querySelector('#year').textContent = today;



function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

window.onresize = () => {if (window.innerWidth > 760) nav.classList.remove('responsive')};


let date = new Date();

 if (date.getDay()==5){
    document.getElementById("banner").style.display= "block" ;
}


// Lazy Loader
const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}



// Days since last visit
let d = new Date();
var newTime = d.getTime();

if(localStorage.getItem('timeInput') !== null) {
    var pastTime = localStorage.getItem('timeInput');
    localStorage.setItem('timeInput', newTime.toString());
    var dayDifference = Math.floor((newTime - pastTime) / (1000*3600 *24));
    document.getElementById('daysSinceVisit').innerHTML = "Days Since Last Visit: " + dayDifference + " ";
}
else {
    localStorage.setItem('timeInput', newTime.toString());
    document.getElementById('daysSinceVisit').innerHTML = "Days Since Last Visit: 0 ";
}

// rating


const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}