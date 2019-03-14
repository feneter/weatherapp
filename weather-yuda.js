

const api ='api.openweathermap.org/data/2.5/weather';
const city='njombe';
//var city= document.getElementTagName('input')value;
const country='tz';
const appid='d3243a8091f7937403f8541ce92c32c8';
 
 
/*setInterval(() => {
	update();
}. 20000);

function update()
{
	console.log("updating....");
}*/
fetch("https://"+ api +"?q="+ city +","+ country +" &appid="+ appid)
	.then(response => response.json())
	.then(data => {
		printTemperature(data.main.temp,data.main.temp_min,data.main.temp_max);
		printWind(data.wind.speed,data.wind.deg);
		printClouds(data.clouds.all);
		printPrecipitation(data.main.humidity);
		printPlace(data.name,data.sys.country);
		
		
	});
	

	
/*function getVal()
{
	var city= document.getElementByTagname('location').value;
	alert(location);
}*/
function printWind(speed , direction)
{
	document.getElementById('wind.speed').innerHTML=speed+"KmpH";
	document.getElementById('wind.direction').innerHTML=direction;
}
function printPlace(city,country)
{
document.getElementById('city').innerHTML=city+ " - weather now";
document.getElementById('country').innerHTML=country;	
}
function printPrecipitation(humidity)
{
	document.getElementById('humidity').innerHTML=humidity;
}
function printClouds(clouds)
{
	document.getElementById('clouds').innerHTML=clouds;
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