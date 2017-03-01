var map = L.map('mapid').setView([34.070, -118.243], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var koreatown = L.marker([34.061, -118.302]).addTo(map)
    .bindPopup('Koreatown/ Mid-city Apartments');

var hollywood = L.marker([34.134, -118.321]).addTo(map)
    .bindPopup('Hollywood Sign');

var lapd = L.marker([34.052, -118.244]).addTo(map)
    .bindPopup('LAPD Headquarters');

var dtla = L.marker([34.040, -118.246]).addTo(map)
    .bindPopup('Downtown LA');

var westwood = L.marker([34.063, -118.445]).addTo(map)
    .bindPopup('Westwood Village');

var southCentral = L.marker([34.010, -118.251]).addTo(map)
    .bindPopup('South Central');

var santaMonica = L.marker([34.019, -118.491]).addTo(map)
    .bindPopup('Santa Monica');

var cityHall = L.marker([34.053, -118.242]).addTo(map)
    .bindPopup('City Hall');

function onMarkerHover(e){
	this.openPopup();
}

koreatown.on('mouseover', onMarkerHover);
hollywood.on('mouseover', onMarkerHover);
lapd.on('mouseover', onMarkerHover);
dtla.on('mouseover', onMarkerHover);
westwood.on('mouseover', onMarkerHover);
southCentral.on('mouseover', onMarkerHover);
santaMonica.on('mouseover', onMarkerHover);
cityHall.on('mouseover', onMarkerHover);


hollywood.on('click', function click(e){
window.open('http://www.google.com')}
);

koreatown.on('click', function click(e){
window.open('http://www.google.com')}
);

lapd.on('click', function click(e){
window.open('http://www.google.com')}
);

dtla.on('click', function click(e){
window.open('http://www.google.com')}
);

westwood.on('click', function click(e){
window.open('http://www.google.com')}
);

southCentral.on('click', function click(e){
window.open('http://www.google.com')}
);

santaMonica.on('click', function click(e){
window.open('http://www.google.com')}
);

cityHall.on('click', function click(e){
window.open('http://www.google.com')}
);


/*
var mymap = L.map('mapid', {
	center: [34.052, 118.243], 
	zoom: 13,
	minZoom: 4,
	maxZoom: 13,
});
*/ 
