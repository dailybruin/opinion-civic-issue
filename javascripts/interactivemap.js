var map = L.map('mapid').setView([34.052, -118.243], 9);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([34.052, -118.243]).addTo(map)
    .bindPopup('Los Angeles');
/*
var mymap = L.map('mapid', {
	center: [34.052, 118.243], 
	zoom: 13,
	minZoom: 4,
	maxZoom: 13,
});
*/ 