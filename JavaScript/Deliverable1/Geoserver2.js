/*
	Go over tutorials to add more stuff (icons etc)
*/

//function to draw all maps
function call_maps(){
	draw_map();

}

//PROPREITY 4
//TASK 1




function draw_map(){
	
	var mymap = L.map('map_space').setView([54.056703, -2.764252], 5);
	
	
	/*
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		layers: 's35:UKShapeFile',
		format: 'image/png',
		transparent: true,
		attribution: 'from CSE-GIS Geoserver'
	}).addTo(mymap);

	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		layers: 's35:FootballStadiumsUK',
		format: 'image/png',
		transparent: true,
		attribution: 'from CSE-GIS Geoserver'
	}).addTo(mymap);
	*/
	
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s35/wms',{
		opacity: 1.0,
		//layers: 's35:CombinedEarth',
		layers: 's35:NewEarthMap',
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








