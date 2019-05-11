

const api ='api.openweathermap.org/data/2.5/weather';
const api2='api.openweathermap.org/data/2.5/forecast';
let city= 'kigoma'
const country='tz';
const appid='d3243a8091f7937403f8541ce92c32c8';

updating();

let search_box=document.getElementById('location');
let search_button= document.getElementById('search_button');
search_button.addEventListener('click', function (){
	
		if(!search_box.value){
			alert("You have to enter City name!");
			return;
		}
		else if(search_box.value == (keyCode==13)){
		city= search_box.value;
		search_box.value='';
		updating();
		}
});	

		
function Enterkey (){
location.addEventListener('keyup', function(event){
		if(event.keyCode === 13){
			city= search_box.value;
		search_box.value='';
		updating();
		
		}
	});
}

function updating()
{
	weatherForecast();
	console.log("updating..");
	fetch("https://"+ api +"?q="+ city +","+ country +" &appid="+ appid)
	//http://api.openweathermap.org/data/2.5/forecast?q=Njombe,tz&&appid=d3243a8091f7937403f8541ce92c32c8 (weather forecast link)
	//https://api.openweathermap.org/data/2.5/weather?q=Njombe,tz&appid=d3243a8091f7937403f8541ce92c32c8 (current weather link)
	.then(response => response.json())
	.then(data => {

		// !TO-DO add logic to handle cases when user searched for a city that is not found.
		// the API returns an object in the format {cod: 404, message: "city not found"}
		console.log(data);
		if (data.cod === '404'){
				alert(data.message);
		}
		printTemperature(data.main.temp,data.main.temp_min,data.main.temp_max);
		printWind(data.wind.speed,data.wind.deg);
		printClouds(data.clouds.all);
		printPrecipitation(data.main.humidity);
		printPlace(data.name);
		
	})/*.catch(error => { //any errors returned from above will be handled right here.
		alert(error);
	});*/
	
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
function kelvinToCelcious (kelvin) {
	let t = kelvin-273;
	Number.parseFloat(t).toFixed(2);
	return `${t}C`;
}

function TimeConversion(dt) {
	var dt = new Date(dt*1000);
	return dt;  
}
	/*<div class="4nextDays day//1//">
			<h2 id="firstday">mon-aprl/1</h2>
			<ul>
			  <li>rain</li>
			  <li>wind</li>
			  <li>temperature</li>
			  <li>cluod</li>
			</ul>
		</div>*/
function printForecast(day, time, rains, winds, temperature, clouds){
	
	let div = document.createElement('div'); // creates a <div> element NODE
	div.setAttribute('class', `4nextDays day${day}`); // add class to div, so it looks like <div class="4nextDays day1">
	let h2 = document.createElement('h2'); // creates an <h2> element with text
	let h2Text = document.createTextNode(time); // creates a text Node with text time
	h2.appendChild(h2Text); // append text node to h2
	let ul = document.createElement('ul'); // create <ul>
	let rain = document.createElement('li'); // creates <li>
	rain.appendChild(document.createTextNode(`Rain: ${rains}`)); // create text node and append its to <li> to get <li>Rain</li>
	let wind = document.createElement('li');
	wind.appendChild(document.createTextNode(`Wind speed: ${winds}`));
	let temp = document.createElement('li')
	temp.appendChild(document.createTextNode(`Temperature: ${temperature}`));
	let cloud = document.createElement('li');
	//cloudtxt = document.createTextNode(`Cloud cover: ${clouds}%`);
	cloud.appendChild(document.createTextNode(`Cloud cover: ${clouds}%`));
	/*function list(ul){
		ul.appendChild(ul);
	}
	list(rain);
	list(wind);
	list(temp);
	list(cloud);*/

	ul.appendChild(rain); //appends <li>Rain</li> to <ul>
	ul.appendChild(wind); // appends <li>Wind</li>
	ul.appendChild(temp);
	ul.appendChild(cloud);
	div.appendChild(h2); // appends <div><h2>Time</h2></div>
	div.appendChild(ul); // appends <ul> with content to <div>
	//document.getElementById('forecasts').appendChild(div); // this appends the div created to the div with id="forecasts" in the HTML
	
	// to attach to the <section> tag.
	// document.getElementsByTagName returns an element of HTML nodes matching the tag name
	// get the section: document.getElementsByTagName(('section')) this returns an array. but we have only one section tag, so it will be at index 0
	document.getElementsByTagName('section')[0].appendChild(div);
}


function weatherForecast (){

	fetch("https://"+ api2 +"?q="+ city +","+ country +" &appid="+ appid)
	.then (response => response.json())
	.then (data => {
		// data.list is an array of *hourly* weather data
		// we can loop this 4 times to extract weather data for each *hour*
		for(i = 0; i < 4; i++){
			printForecast(i+1, TimeConversion(data.list[i].dt), 'rain', data.list[i].wind.speed, kelvinToCelcious(data.list[i].main.temp), data.list[i].clouds.all);
		}
		// document.getElementById("firstday").innerHTML=TimeConversion(data.list[0].dt);
		// document.getElementById("secondday").innerHTML=TimeConversion(data.list[1].dt);
		// document.getElementById("thirdday").innerHTML=TimeConversion(data.list[2].dt);
		// document.getElementById("fourthday").innerHTML=TimeConversion(data.list[3].dt);
	})

}

/*let search_button = document.getElementById('search_button'); //get the search_button
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
});*/

       