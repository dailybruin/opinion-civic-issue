var map = L.map('mapid', { fadeAnimation: false}).setView([34.070, -118.243], 11);

 L.tileLayer.grayscale('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 14, minZoom: 2
        }).addTo(map);

/* L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); */


var koreatown = L.marker([34.061, -118.302]).addTo(map)
    .bindPopup('Jacqueline Alvarez: Gentrification of LA detrimental to lower-income population');

var hollywood = L.marker([34.134, -118.321]).addTo(map)
    .bindPopup('Guillaume Kosmala: Students must stand against proposals like Measure S');

var lapd = L.marker([34.052, -118.244]).addTo(map)
    .bindPopup('William Zou: The solution to crime lies in communication, not incarceration');

var dtla = L.marker([34.040, -118.246]).addTo(map)
    .bindPopup('Chris Busco: City infrastructure could turn Los Angeles into a pedestrian paradise');

var westwood = L.marker([34.063, -118.445]).addTo(map)
    .bindPopup('Aaron Julian: Paul Koretz\'s leadership needs to be more dynamic in final term');

var southCentral = L.marker([34.010, -118.251]).addTo(map)
    .bindPopup('Pravin Visakan: City mayor\'s push for after-school programs could vitalize LAUSD');

var santaMonica = L.marker([34.019, -118.491]).addTo(map)
    .bindPopup('Keshav Tadimeti: Silicon Beach must complement Silicon Valley, not replace it');

var sanFernando = L.marker([34.1826, -118.4397]).addTo(map)
    .bindPopup('Jasmine Aquino: City leaders must pursue sexual education reform');

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
sanFernando.on('mouseover', onMarkerHover);


hollywood.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/guillaume-kosmala-students-must-stand-against-proposals-like-measure-s/')}
);

koreatown.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/jacqueline-alvarez-gentrification-of-la-detrimental-to-lower-income-population/')}
);

lapd.on('click', function click(e){
window.open('http://www.google.com')}
);

dtla.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/chris-busco-city-infrastructure-could-turn-los-angeles-into-a-pedestrian-paradise/')}
);

westwood.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/aaron-julian-paul-koretzs-leadership-needs-to-be-more-dynamic-in-final-term/')}
);

southCentral.on('click', function click(e){
window.open('http://www.google.com')}
);

santaMonica.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/keshav-tadimeti-las-silicon-beach-must-complement-silicon-valley-not-replace-it/')}
);

sanFernando.on('click', function click(e){
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
