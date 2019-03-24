

const api ='api.openweathermap.org/data/2.5/weather';
const city= 'kigoma'
const country='tz';
const appid='d3243a8091f7937403f8541ce92c32c8';

 setInterval(() => {
	 updating();
 },20000);


function updating()
{
	console.log("updating..");
	fetch("https://"+ api +"?q="+ city +","+ country +" &appid="+ appid)
	.then(response => response.json())
	.then(data => {
		printTemperature(data.main.temp,data.main.temp_min,data.main.temp_max);
		printWind(data.wind.speed,data.wind.deg);
		printClouds(data.clouds.all);
		printPrecipitation(data.main.humidity);
		printPlace(data.name);
		
		
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
}