/*
	Go over tutorials to add more stuff (icons etc)
*/

//function to draw all maps
function call_maps(){
	draw_map();
	draw_map2();
}

//PROPREITY 4
//TASK 1


function draw_map(){
	
	var mymap = L.map('map_space').setView([52.417, -3.573], 7);
	
	
 	L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);

	L.tileLayer('http://a.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);
	
	var marker1 = L.marker([51.4780, -3.1825]).addTo(mymap);
	var marker2 = L.marker([51.642795, -3.934994]).addTo(mymap);
	
		/*
 	L.tileLayer('http://a.tile.stamen.com/toner/6/31/21.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap); 
	*/

}


function draw_map2(){
	
	var mymap = L.map('map_space2').setView([51.55081, -3.177109], 11);
	

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);

	/*L.tileLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: '29bb3fc87597423c8cc0fe86cb262885'
	}).addTo(mymap);*/

	
	
	var uniIcon = L.icon({
	iconUrl: '../Images/student.png',
	});
	
	
	var marker = L.marker([51.589063, -3.3289], {icon: uniIcon}).addTo(mymap);
	var marker1 = L.marker([51.596347, -3.320189], {icon: uniIcon}).addTo(mymap);
	var marker2 = L.marker([51.479221, -3.169373], {icon: uniIcon}).addTo(mymap);
	var marker3 = L.marker([51.5858161,-2.9923042], {icon: uniIcon}).addTo(mymap);

	
	var circle = L.circle([51.593322, -3.323879], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.1,
		radius: 600
	}).addTo(mymap);
	
	var polygon = L.polygon([
		[51.593322, -3.323879],
		[51.479221, -3.169373],
		[51.5858161,-2.9923042]
	]).addTo(mymap);
	
	
	var linePoints = [
		[51.55081, -3.177109],
		[51.593322, -3.323879],
		[51.55081, -3.177109],
		[51.479221, -3.169373],
		[51.55081, -3.177109],
		[51.5858161,-2.9923042],
		
	];
	
	var polyline = L.polyline(linePoints, {color: 'green'}).addTo(mymap);
	
	
	
	
	circle.bindPopup("Circle to show the area around the 2 Pontypridd campus locations");
	polygon.bindPopup("Locations of all USW campus locations").openPopup();

	
	var popup = L.popup();

	function onMapClick(e) {
		popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
	}
	
	mymap.on('click', onMapClick);
	
	marker.bindPopup("<b>USW</b><br>Treforest Campus.")
	var m1 = false;
	marker.on('click', function(){
		if(m1 == false){
				mymap.setView([51.589063, -3.3289], 15, {animation: true});
				marker.bindPopup("<b>USW</b><br>Treforest Campus.").openPopup();
				m1 = true;
			}
		else if(m1 == true){
			mymap.setView([51.55081, -3.177109], 11, {animation: true});
			marker.bindPopup("<b>USW</b><br>Treforest Campus.").closePopup();
			m1 = false;
		}
	});
	

	marker1.bindPopup("<b>USW</b><br>Glyntaff Campus.")
	var m2 = false;
	marker1.on('click', function(){
		if(m2 == false){
			mymap.setView([51.596347, -3.320189], 15, {animation: true});
			marker1.bindPopup("<b>USW</b><br>Glyntaff Campus.").openPopup();
			m2 = true;
		}
		else if(m2 == true){
			mymap.setView([51.55081, -3.177109], 11, {animation: true});
			marker1.bindPopup("<b>USW</b><br>Glyntaff Campus.").closePopup();
			m2 = false;
		}
	});
	
	
	marker2.bindPopup("<b>USW</b><br>Cardiff Campus.")
	var m3 = false;
	marker2.on('click', function(){
		if(m3 == false){
			mymap.setView([51.479221, -3.169373], 15, {animation: true});
			marker2.bindPopup("<b>USW</b><br>Cardiff Campus.").openPopup();
			m3 = true;
		}
		else if(m3 == true){
			mymap.setView([51.55081, -3.177109], 11, {animation: true});
			marker2.bindPopup("<b>USW</b><br>Cardiff Campus.").closePopup();
			m3 = false;
		}
	});
	
	marker3.bindPopup("<b>USW</b><br>Newport Campus.")
	var m4 = false;
	marker3.on('click', function(){
		if(m4 == false){
			mymap.setView([51.5858161,-2.9923042], 15, {animation: true});
			marker3.bindPopup("<b>USW</b><br>Newport Campus.").openPopup();
			m4 = true;
		}
		else if(m4 == true){
			mymap.setView([51.55081, -3.177109], 11, {animation: true});
			marker3.bindPopup("<b>USW</b><br>Newport Campus.").closePopup();
			m4 = false;
		}
	});


}