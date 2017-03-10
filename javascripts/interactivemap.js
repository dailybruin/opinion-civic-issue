var map = L.map('mapid', { fadeAnimation: false}).setView([34.120, -118.343], 10);

 L.tileLayer.grayscale('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 10, minZoom: 10
        }).addTo(map);

/* L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); */


var koreatown = L.marker([34.061, -118.302]).addTo(map)
    .bindPopup('<div class="pin"><div class="pin-img"><img src="images/koreatown.png"/></div><div class="pin-text">Jacqueline Alvarez: Gentrification of LA detrimental to lower-income population</div></div>');

var hollywood = L.marker([34.134, -118.321]).addTo(map)
    .bindPopup('<div class="pin"><div class="pin-img"><img src="images/hollywood.png"/></div><div class="pin-text">Guillaume Kosmala: Students must stand against proposals like Measure S</div></div>');

var lapd = L.marker([34.052, -118.244]).addTo(map)
    .bindPopup('<div class="pin"><div class="pin-img"><img src="images/lapd.png"/></div><div class="pin-text">William Zou: The solution to crime lies in communication, not incarceration</div></div>');

var dtla = L.marker([34.040, -118.246]).addTo(map)
    .bindPopup('<div class="pin"><div class="pin-img"><img src="images/dtla.png"/></div><div class="pin-text">Chris Busco: City infrastructure could turn Los Angeles into a pedestrian paradise</div></div>');

var westwood = L.marker([34.063, -118.445]).addTo(map)
    .bindPopup('<div class="pin"><div class="pin-img"><img src="images/westwood.png"/></div><div class="pin-text">Aaron Julian: Paul Koretz\'s leadership needs to be more dynamic in final term</div></div>');

var southCentral = L.marker([34.010, -118.251]).addTo(map)
    .bindPopup('<div class="pin"><div class="pin-img"><img src="images/southcentral.png"/></div><div class="pin-text">Pravin Visakan: City mayor\'s push for after-school programs could vitalize LAUSD</div></div>');

var santaMonica = L.marker([34.019, -118.491]).addTo(map)
    .bindPopup('<div class="pin"><div class="pin-img"><img src="images/santamonica.png"/></div><div class="pin-text">Keshav Tadimeti: Silicon Beach must complement Silicon Valley, not replace it</div></div>');

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
window.open('hhttp://dailybruin.com/2017/03/09/william-zou-the-solution-to-crime-lies-in-communication-not-incarceration/')}
);

dtla.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/chris-busco-city-infrastructure-could-turn-los-angeles-into-a-pedestrian-paradise/')}
);

westwood.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/aaron-julian-paul-koretzs-leadership-needs-to-be-more-dynamic-in-final-term/')}
);

southCentral.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/pravin-visakan-city-mayors-push-for-after-school-programs-could-revitalize-lausd/')}
);

santaMonica.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/keshav-tadimeti-las-silicon-beach-must-complement-silicon-valley-not-replace-it/')}
);

sanFernando.on('click', function click(e){
window.open('http://dailybruin.com/2017/03/09/jasmine-aquino-city-leaders-must-pursue-sexual-education-reform/')}
);


/*
var mymap = L.map('mapid', {
	center: [34.052, 118.243], 
	zoom: 13,
	minZoom: 4,
	maxZoom: 13,
});
*/ 
