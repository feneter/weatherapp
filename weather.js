const api = 'api.openweathermap.org/data/2.5/weather';
const id = 160196;
const appid = 'd3243a8091f7937403f8541ce92c32c8'; //add your appid here, and remember to remove it before pushing to github

update();
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
	//https://api.openweathermap.org/data/2.5/weather?q=Njombe,tz&appid=d3243a8091f7937403f8541ce92c32c8
   try{ fetch("https://"+api+"?q="+city+","+country+"&appid="+ appid)
    .then(response => response.json())
    .then(data => {
		console.log(data);
        printTemperature(data.main.temp, data.main.temp_max, data.main.temp_min);
        printWindData(data.wind.speed, data.wind.deg)
        printClouds(data.clouds.all);
        printPrecipitation(data.main.humidity);
		printPlace(data.name);
   });}
   catch(err){
	   alert("Enter the name of City in Tanzania");
   }
}
	



function printWindData(speed, direction) {
    document.getElementById('wind-speed').innerHTML = speed;
    document.getElementById('wind-direction').innerHTML = direction;
}


function printClouds(cloud){
    setDomElement('cloud', cloud);
}
function printPlace(city)
{
document.getElementById('city').innerHTML=city+ " - weather now";
	
}

function printPrecipitation(humidity) {
    setDomElement('precipitation', humidity);
}

/**
 * instead of calling document.getElementById() in every function, we can
 * factor that out here and then just pass in the 
 * element id and the value we want to set
 * @param {*} element_id 
 * @param {*} value 
 */
function setDomElement(element_id, value) {
    document.getElementById(element_id).innerHTML = value;
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
let search =document.getElementById('search_box');
search.addEventListener('focus', function(){
	console.log("user enters some value")
});
let btn= document.getElementById('btn');
btn.addEventListener('click',function(){
	let search_box= document.getElementById('search_box');
	if(!search_box.value){
		alert("You have to enter the city name");
		return;
	}
	else{
		city=search_box.value;
		search_box.value='';
		update();
	}
	
});


/*
let search =document.getElementById('search');
search.addEventListener('focus',function(){
		console.log("user enters some value");
});
let search_button =document.getElementById('search_button');
search_button.addEventListener('click', function(){
	
	let search_box= document.getElementById("location");
	if(!search_box.value){
		alert('You have to Enter city name');
		return;
	}
	city=search_box.value;
	search_box.value='';
	update();	
});
 */
	


























