/*
	Go over tutorials to add more stuff (icons etc)
*/

//function to draw all maps
function call_maps(){
	draw_map();
	draw_map2();
	draw_map25();
	draw_map3();
	draw_map4();
}

//PROPREITY 4
//TASK 1


function draw_map(){
	
	var mymap = L.map('map_space').setView([52.417, -3.573], 7);
	
	
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		layers: 's35:outline',
		format: 'image/png',
		transparent: true,
		attribution: 'from CSE-GIS Geoserver'
	}).addTo(mymap);

	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		layers: 's35:dentists',
		format: 'image/png',
		transparent: true,
		attribution: 'from CSE-GIS Geoserver'
	}).addTo(mymap);

	

	/*
 	L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);
	*/
	
}

function draw_map2(){
	
	var mymap = L.map('map_space2').setView([52.417, -3.573], 7);
	
	
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		layers: 's35:outline',
		format: 'image/png',
		transparent: true,
		attribution: 'from CSE-GIS Geoserver'
	}).addTo(mymap);

	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		layers: 's35:mountains',
		format: 'image/png',
		transparent: true,
		attribution: 'from CSE-GIS Geoserver'
	}).addTo(mymap);

	

	/*
 	L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);
	*/
	
}


function draw_map25(){
	
	var mymap = L.map('map_space5').setView([52.417, -3.573], 7);
	
		
	 L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);
	
	L.geoJSON(nationalParks).addTo(mymap);
	
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		layers: 's35:MountainSites',
		format: 'image/png',
		transparent: true,
		attribution: 'from CSE-GIS Geoserver'
	}).addTo(mymap);
	

}

function draw_map3(){
	
	var mymap = L.map('map_space3').setView([54.056703, -2.764252], 5);
	
	
	
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		//layers: 's35:CombinedEarth',
		layers: 's35:NewEarthMap',
		format: 'image/png',
		transparent: true,
		attribution: 'from CSE-GIS Geoserver'
	}).addTo(mymap);


}



function draw_map4(){
	
	var mymap = L.map('map_space4').setView([54.056703, -2.764252], 5);
	
	

	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		layers: 's35:CombinedLayerGroup',
		format: 'image/png',
		transparent: true,
		attribution: 'from CSE-GIS Geoserver'
	}).addTo(mymap);


	/*
 	L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);
	*/
	
}






