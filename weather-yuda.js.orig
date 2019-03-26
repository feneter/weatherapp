

const api ='api.openweathermap.org/data/2.5/weather';
<<<<<<< HEAD
const city= 'kigoma'
const country='tz';
const appid='d3243a8091f7937403f8541ce92c32c8';

 setInterval(() => {
	 updating();
 },20000);
=======
let city= 'kigoma'
const country='tz';
const appid='d3243a8091f7937403f8541ce92c32c8';

//setInterval(() => {
	updating();
//},20000);
>>>>>>> origin/sovello


function updating()
{
	console.log("updating..");
	fetch("https://"+ api +"?q="+ city +","+ country +" &appid="+ appid)
	.then(response => response.json())
	.then(data => {
<<<<<<< HEAD
=======
		// !TO-DO add logic to handle cases when user searched for a city that is not found.
		// the API returns an object in the format {cod: 404, message: "city not found"}
		console.log(data);
>>>>>>> origin/sovello
		printTemperature(data.main.temp,data.main.temp_min,data.main.temp_max);
		printWind(data.wind.speed,data.wind.deg);
		printClouds(data.clouds.all);
		printPrecipitation(data.main.humidity);
		printPlace(data.name);
		
		
<<<<<<< HEAD
=======
	}).catch(error => { //any errors returned from above will be handled right here.
		alert(error);
>>>>>>> origin/sovello
	});
	
}	

function printWind(speed , direction)
{
	document.getElementById('wind.speed').innerHTML=speed+"KmpH";
	document.getElementById('wind.direction').innerHTML=direction;
}
function printPlace(city)
{
document.getElementById('city').innerHTML=city+ " - weather now";
	
}
function printPrecipitation(humidity)
{
	document.getElementById('humidity').innerHTML=humidity+"g/m3";
}
function printClouds(clouds)
{
	document.getElementById('clouds').innerHTML=clouds+"Okta";
}

function printTemperature( temp ,min,max)
{
		document.getElementById('temp').innerHTML=Math.round(temp-273)+"C";
		document.getElementById('temp.min').innerHTML=Math.round(min-273)+"C min";
		document.getElementById('temp.max').innerHTML=Math.round(max-273)+"C max";
}
function kelvinToCelcious (kelvin)
{
	return `${kelvin-273}C`;
<<<<<<< HEAD
}
=======
}

let search_button = document.getElementById('search_button'); //get the search_button
search_button.addEventListener('click', function(){ //wait until user clicks to search for weather
	//get the elements, input box and button
	let search_box = document.getElementById('location'); //get hold of the input box
	//validation
	if(!search_box.value){ //check if value is not empty,
		alert("You have to enter a city name"); //notify user city name is required
		return; //abort
	}
	city = search_box.value; //assign search value to city variable
	search_box.value = ''; //clear the search box
	updating(); //update
});
>>>>>>> origin/sovello
