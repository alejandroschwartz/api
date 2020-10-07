let cityValue = document.getElementById('city');
let countryValue = document.getElementById('country');
let button = document.getElementById('button');
button.addEventListener('click', obtener_clima);
const WEATHER_KEY = ' ';


function obtener_clima() {
    console.log(cityValue.value);
    console.log(countryValue.value);

    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue.value},${countryValue.value}&appid=${WEATHER_KEY}&units=metric` ;

    console.log(API_URL);

};