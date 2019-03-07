
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
	thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	osmAttrib = '&copy; ' + osmLink + ' Contributors',
	landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
	thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;

var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
	landMap = L.tileLayer(landUrl, {attribution: thunAttrib});

var map = L.map('map', {
	layers:[osmMap]}).setView([28.2380, 83.9956], 10);


var baseLayers = {
	"OSM Mapnik": osmMap,
	"Landscape": landMap
	};

	L.control.layers(baseLayers).addTo(map);


var sidebar = L.control.sidebar('sidebar').addTo(map);

