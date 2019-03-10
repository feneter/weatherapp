const api = 'api.openweathermap.org/data/2.5/weather';
const id = 160260;
const appid = '';

/**
 * schedule the function to update every 20 seconds.
 * this is too much for weather info, we could only update every 30 mins say.
 */
setInterval(() => {
    update();
}, 20000);


/**
 * function calls the api for data and updates the DOM.
 * we can extend this to send anything other than modifying the DOM.
 * 
 */
function update(){
    console.log("Updating...");
    //fetch(`https://${api}?id=${id}&appid=${appid}`)
    fetch("https://" + api + "?id=" + id + "&appid=" + appid)
    .then(response => response.json())
    .then(data => {
        printTemperature(data.main.temp, data.main.temp_max, data.main.temp_min);
        printWindData(data.wind.speed, data.wind.deg)
        printClouds(data.clouds.all);
        printPrecipitation(data.main.humidity);
    });
}


function printWindData(speed, direction) {
    document.getElementById('wind-speed').innerHTML = speed;
    document.getElementById('wind-direction').innerHTML = direction;
}


function printClouds(cloud){
    document.getElementById('cloud').innerHTML = cloud;
}

function printPrecipitation(humidity) {
    document.getElementById('precipitation').innerHTML = humidity;
}

/**
 * 
 * prints temperature info to the DOM
 * @param {number} temp 
 * @param {number} max 
 * @param {number} min 
 */
function printTemperature(temp, max, min) {
    document.getElementById('temp').innerHTML = kelvinToCelcius(temp);
    document.getElementById('temp-max').innerHTML = kelvinToCelcius(max);
    document.getElementById('temp-min').innerHTML = kelvinToCelcius(min);
}

/**
 * converts temperature units from Kelvin to Celsius
 * @param {number} kelvin temperature in Kelvin
 */
function kelvinToCelcius(kelvin) {
    return `${kelvin-273}C`;
}


/**
 * converts temperature from kelvin to fahrenheit
 * @param {number} kelvin 
 */
function kelvinToFahrenheit(kelvin) {
    return `${kelvin-273}F`;
}