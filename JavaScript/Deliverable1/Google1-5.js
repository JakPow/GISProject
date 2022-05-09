/*
	Go over tutorials to add more stuff (icons etc)
*/

//function to draw all maps
function call_maps(){
	draw_map();
	draw_map1();
	draw_map2();
	draw_map3();
	draw_map4();
}



//first map
function draw_map(){
	var map_ops={
		center: new google.maps.LatLng(52.417, -3.573),
		zoom:8,
		mapTypeID:google.maps.MapTypeId.RoadMap
	}
	var map = new google.maps.Map(document.getElementById("map_space"),map_ops);
}


//PROPREITY 2 Stadiums
function draw_map1(){

	//Set Cordinates of three stadiums
	var libertyStadium = {lat: 51.6427, lng: -3.9346}
	var racecoursestadium = {lat: 53.051765, lng: -3.003853}
	var cardiffStadium = {lat: 51.472789 ,lng:-3.20353 }
	var nantporth = {lat:53.225453, lng: -4.149947}
	var bridgeMeadow = {lat:51.8091571107521, lng: -4.9675362689449685}


	//Set the new images for the markers
	var swanseaMKR = {
		url: '../Images/swansea.png',
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0,0), // origin
		anchor: new google.maps.Point(0, 0) // anchor
	}
	
	var cardiffMKR = {
		url: '../Images/ccfc.png',
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0,0), // origin
		anchor: new google.maps.Point(0, 0) // anchor
	}
	
	var wrexhamMKR = {
		url: '../Images/wrexham.png',
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0,0), // origin
		anchor: new google.maps.Point(0, 0) // anchor
	}
	
	var bangorMKR = {
		url: '../Images/bangor.png',
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0,0), // origin
		anchor: new google.maps.Point(0, 0) // anchor
	}

	var haverMKR = {
		url: '../Images/haverford.png',
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0,0), // origin
		anchor: new google.maps.Point(0, 0) // anchor
	}


	//Set map of Wales base layer
	var map_ops={
		center: new google.maps.LatLng(52.417, -3.573),
		zoom:7,
		mapTypeId: 'roadmap'
	}
	
	//Set the map base layer to the HTML Div
	var map = new google.maps.Map(document.getElementById("map_space1"),map_ops);
	
	
	//Set the marker for Liberty stadium
	var marker1 = new google.maps.Marker({
		position: libertyStadium,
		map: map,
		title: 'Liberty Stadium',
		icon: swanseaMKR

	});
	
	
	//Set the marker for Principality stadium
	var marker2 = new google.maps.Marker({
		position: racecoursestadium,
		map: map,
		title: 'The Racecourse',
		icon: wrexhamMKR
	});
	
	//Set the marker for Cardiff stadium
	var marker3 = new google.maps.Marker({
		position: cardiffStadium,
		map: map,
		title: 'Cardiff Stadium',
		icon: cardiffMKR
	});
	
	//Set the marker for Bangor stadium
	var marker4 = new google.maps.Marker({
		position: nantporth,
		map: map,
		title: 'Nantporth',
		icon: bangorMKR
	});

	var marker5 = new google.maps.Marker({
		position: bridgeMeadow,
		map: map,
		title: 'Bridge Meadow Stadium',
		icon: haverMKR
	});
	
	////////////////////////////////////////////////////////////////
	var wrexhamInfoBox = new google.maps.InfoWindow({
		content: '<a href="https://www.wrexhamafc.co.uk" target="blank">Wrexham FC club website</a>',
		position: racecoursestadium
	});
	
	google.maps.event.addListener(marker2, 'click', function(){
		map.panTo(marker2.position);
		wrexhamInfoBox.open(map, marker2);
	})
	
	////////////////////////////////////////////////////////////////
	var cardiffInfoBox = new google.maps.InfoWindow({
		content: '<a href="https://www.cardiffcityfc.co.uk" target="blank">Cardiff City Club Website</a>',
		position: cardiffStadium
	});
	
	google.maps.event.addListener(marker3, 'click', function(){
		map.panTo(marker3.position);
		cardiffInfoBox.open(map, marker3);
	})
	//////////////////////////////////////////////////////////////////	
	var swanseaInfoBox = new google.maps.InfoWindow({
		content: '<a href="https://www.swanseacity.com" target="blank">Swansea City Club Website</a>',
		position: libertyStadium
	});

	google.maps.event.addListener(marker1, 'click', function(){
		map.panTo(marker1.position);
		swanseaInfoBox.open(map, marker1);
	});
	
	///////////////////////////////////////////////////////////////
	var haverInfoBox = new google.maps.InfoWindow({
		content: '<a href="http://www.haverfordwestcountyafc.com" target="blank">Haverfordwest County AFC club website</a>',
		position: nantporth
	});

	google.maps.event.addListener(marker5, 'click', function(){
		map.panTo(marker5.position);
		haverInfoBox.open(map, marker5);
	})
	/////////////////////////////////////////////////////////////////
	var bangorInfoBox = new google.maps.InfoWindow({
		content: '<a href="https://www.pitchero.com/clubs/bangorcityfc" target="blank">Bagnor City FC club website</a>',
		position: bridgeMeadow
	});

	google.maps.event.addListener(marker4, 'click', function(){
		map.panTo(marker4.position);
		bangorInfoBox.open(map, marker4);
	})
}

//PROPRIETY 2 CASTLES
function draw_map2(){
	var map = new google.maps.Map(document.getElementById("map_space2"),{
		center: new google.maps.LatLng(52.417, -3.573),
		zoom:7,
		mapTypeId: 'satellite'
	});
	addCastles(map);
}



//Set castle markers
var all_castles = [
   ['Cardiff Castle', 51.4822346, -3.1833654],
   ['Barry Castle', 51.3966854, -3.2960218],
   ['Caernarfon Castle', 53.1383642, -4.2789215],
   ['Cardigan Castle', 52.0818708, -4.6626785],
   ['Tenby Castle', 51.6725385, -4.6967572],
   ['Aberystwyth Castle', 52.4132408,-4.0917984],
   ['Criccieth Castle', 52.7585262, -4.5124102],
   ['Morlais Castle', 51.8272344, -4.0769687],
   ['Carreg Cennen Castle', 51.8272344, -4.0769687],
   ['Loughor Castle',51.6624232,-4.07949],
   ['Dolforwyn Castle',51.9590755,-3.473933],
   ['Chirk Castle',52.9353854,-3.0915984]
];

//function to create the markers
function addCastles(map){
	
  //set the maeker properties
  var image = {
    url: '../Images/tower.png',
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    //anchor: new google.maps.Point(0, 0)
  };

  //loop to place the markers
  for (var i = 0; i < all_castles.length; i++) {  
    var castle = all_castles[i];
    var marker = new google.maps.Marker({
      position: {lat: castle[1], lng: castle[2]},
      map: map,
      icon: image,
	  animation: google.maps.Animation.DROP,
      title: castle[0]
    });
  }
}

//PROPRIETY 2 AIRPORT
function draw_map3(){
	var map = new google.maps.Map(document.getElementById("map_space3"),{
		center: new google.maps.LatLng(55.3781, -3.4360),
		zoom:5.6,
		mapTypeId: 'satellite'
	});
	
	//////////////////////////////////////////////////////////////////////////////
	var my_path1 = [
		{lat:51.3867853,lng: -3.348244},
		{lat:53.4264513,lng: -6.2520985},
	]
	var plotline1 = new google.maps.Polyline({
		path: my_path1,
		strokeColor: 'red',
		strokeOpacity: 0.7,
		strokeWeight: 9
	});
	plotline1.setMap(map);
	
	var path1InfoWindow = new google.maps.InfoWindow();

	google.maps.event.addListener(plotline1, 'mouseover', function(e) {
	   path1InfoWindow.setPosition(e.latLng);
	   path1InfoWindow.setContent("Departure: <b>Cardiff Aiport</b></br>Arrival: <b>Dublin</b></br>" +"Location: 	"+e.latLng);
	   path1InfoWindow.open(map);
	});

	// Close the path1InfoWindow on mouseout:
	google.maps.event.addListener(plotline1, 'mouseout', function() {
	   path1InfoWindow.close();
	});
	//////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////
	var my_path2 = [
		{lat:51.3867853,lng: -3.348244},
		{lat:55.950788,lng: -3.3636419}
	]	
	var plotline2 = new google.maps.Polyline({
		path: my_path2,
		strokeColor: 'yellow',
		strokeOpacity: 0.7,
		strokeWeight: 12
	});
	plotline2.setMap(map);
	
	var path2InfoWindow = new google.maps.InfoWindow();
	
	google.maps.event.addListener(plotline2, 'mouseover', function(e) {
	   path2InfoWindow.setPosition(e.latLng);
	   path2InfoWindow.setContent("Departure: <b>Cardiff Aiport</b></br>Arrival: <b>Edinburgh</b></br>" +"Location: 	"+e.latLng);
	   path2InfoWindow.open(map);
	});

	// Close the path2InfoWindow on mouseout:
	google.maps.event.addListener(plotline2, 'mouseout', function() {
	   path2InfoWindow.close();
	});
	////////////////////////////////////////////////////////////////////////////
	var my_path3 = [
		{lat:51.3867853,lng: -3.348244},
		{lat:53.6177154,lng: -2.2959345}
	]
	var plotline3 = new google.maps.Polyline({
		path: my_path3,
		strokeColor: 'green',
		strokeOpacity: 0.7,
		strokeWeight: 10
	});
	plotline3.setMap(map);

	var path3InfoWindow = new google.maps.InfoWindow();
	
	google.maps.event.addListener(plotline3, 'mouseover', function(e) {
	   path3InfoWindow.setPosition(e.latLng);
	   path3InfoWindow.setContent("Departure: <b>Cardiff Aiport</b></br>Arrival: <b>Leeds</b></br>" +"Location: 	"+e.latLng);
	   path3InfoWindow.open(map);
	});

	// Close the path3InfoWindow on mouseout:
	google.maps.event.addListener(plotline3, 'mouseout', function() {
	   path3InfoWindow.close();
	});
	///////////////////////////////////////////////////////////////////////////////
	
	var my_path4 = [
		{lat:51.3867853,lng: -3.348244},
		{lat:53.0823779,lng: -4.5924109}
	]
	var plotline4 = new google.maps.Polyline({
		path: my_path4,
		strokeColor: 'blue',
		strokeOpacity: 0.7,
		strokeWeight: 11
	});
	plotline4.setMap(map);
	
	
	var path4InfoWindow = new google.maps.InfoWindow();
	
	google.maps.event.addListener(plotline4, 'mouseover', function(e) {
	   path4InfoWindow.setPosition(e.latLng);
	   path4InfoWindow.setContent("Departure: <b>Cardiff Aiport</b></br>Arrival: <b>Bangor</b></br>" +"Location: 	"+e.latLng);
	   path4InfoWindow.open(map);
	});

	// Close the path4InfoWindow on mouseout:
	google.maps.event.addListener(plotline4, 'mouseout', function() {
	   path4InfoWindow.close();
	});
	//////////////////////////////////////////////////////////
	
	var my_path5 = [
		{lat:51.3867853,lng: -3.348244},
		{lat:50.9514596,lng: -1.3598909},
	]	
	var plotline5 = new google.maps.Polyline({
		path: my_path5,
		strokeColor: 'orange',
		strokeOpacity: 0.7,
		strokeWeight: 10
	});
	plotline5.setMap(map);
	
	var path5InfoWindow = new google.maps.InfoWindow();
	
	google.maps.event.addListener(plotline5, 'mouseover', function(e) {
	   path5InfoWindow.setPosition(e.latLng);
	   path5InfoWindow.setContent("Departure: <b>Cardiff Aiport</b></br>Arrival: <b>Southampton</b></br>" +"Location: 	"+e.latLng);
	   path5InfoWindow.open(map);
	});

	// Close the path5InfoWindow on mouseout:
	google.maps.event.addListener(plotline5, 'mouseout', function() {
	   path5InfoWindow.close();
	});
	
	
	/////////////////////////////////////////////

	var my_path6 = [
		{lat:51.3867853,lng: -3.348244},
		{lat:51.8860214,lng: 0.2366774}
	]
	var plotline6 = new google.maps.Polyline({
		path: my_path6,
		strokeColor: 'purple',
		strokeOpacity: 0.7,
		strokeWeight: 12
	});
	plotline6.setMap(map);
	
	var path6InfoWindow = new google.maps.InfoWindow();
	
	google.maps.event.addListener(plotline6, 'mouseover', function(e) {
	   path6InfoWindow.setPosition(e.latLng);
	   path6InfoWindow.setContent("Departure: <b>Cardiff Aiport</b></br>Arrival: <b>Stanstead</b></br>" +"Location: 	"+e.latLng);
	   path6InfoWindow.open(map);
	});

	// Close the path6InfoWindow on mouseout:
	google.maps.event.addListener(plotline6, 'mouseout', function() {
	   path6InfoWindow.close();
	});
	
	//////////////////////////////////////////////////
	
	var my_path7 = [
		{lat:51.3867853,lng: -3.348244},
		{lat:50.7307499,lng: -3.4185844}
	]	
	var plotline7 = new google.maps.Polyline({
		path: my_path7,
		strokeColor: 'pink',
		strokeOpacity: 0.7,
		strokeWeight: 12
	});
	plotline7.setMap(map);
	
	var path7InfoWindow = new google.maps.InfoWindow();
	
	google.maps.event.addListener(plotline7, 'mouseover', function(e) {
	   path7InfoWindow.setPosition(e.latLng);
	   path7InfoWindow.setContent("Departure: <b>Cardiff Aiport</b></br>Arrival: <b>Exeter</b></br>" +"Location: 	"+e.latLng);
	   path7InfoWindow.open(map);
	});

	// Close the path7InfoWindow on mouseout:
	google.maps.event.addListener(plotline7, 'mouseout', function() {
	   path7InfoWindow.close();
	});

}

//PROPRIETY 2 Wind Farms
function draw_map4(){
	var map = new google.maps.Map(document.getElementById("map_space4"),{
		center: new google.maps.LatLng(52.417, -3.573),
		zoom:7,
		mapTypeId: 'terrain'
	});
	
	var area1 = [
		{lat:51.86,lng: -3.95},
		{lat:51.93,lng: -3.85},
		{lat:52.01,lng: -3.72},
		{lat:51.96,lng: -3.65},					
		{lat:51.87,lng: -3.60},
		{lat:51.86,lng: -3.76},
		{lat:51.84,lng: -3.91},
		{lat:51.86,lng: -3.95}	
	];		

	var area2 = [
		{lat:53.10,lng: -3.90},
		{lat:52.81,lng: -3.59},
		{lat:52.75,lng: -3.82},
		{lat:52.83,lng: -4.05},
		{lat:53.10,lng: -3.90}
	];

	var polygon1 = new google.maps.Polygon({
		paths: area1,
		strokeColor: 'black',
		strokeOpacity: 0.8,
		strokeWeight: 2.5,
		fillColor: 'red',
		fillOpacity: 0.7
   });
   
   	var polygon2 = new google.maps.Polygon({
		paths: area2,
		strokeColor: 'black',
		strokeOpacity: 0.8,
		strokeWeight: 2.5,
		fillColor: 'purple',
		fillOpacity: 0.7
   });
   
   
	polygon1.setMap(map);
	polygon2.setMap(map);
	
	
}

