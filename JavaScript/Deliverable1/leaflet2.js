/*
	Go over tutorials to add more stuff (icons etc)
*/

//function to draw all maps
function call_maps(){
	draw_map();
	draw_map2();
	draw_map3();
}

//PROPREITY 4
//TASK 1


function draw_map(){
	
	var mymap = L.map('map_space').setView([52.417, -3.573], 7); 
	
	
	var myGeoJson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-3.9346,51.6427]
        },
          "properties": {
            "name": "Principality Stadium"
          }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-3.1825,51.47806]
        },
          "properties": { 
            "name": "Liberty Stadium"
          }
      }
    ]
};

	L.geoJSON(myGeoJson).addTo(mymap);

	
 	L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);

	
}


function draw_map2(){
	
	var mymap = L.map('map_space2').setView([52.417, -3.573], 7);
	var selection;
	var jsonMarkers = {
		radius: 5,
		fillColor: "#ff7800",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	};

	function newStyle(){
		return{
			fillColor: "#FF00FF",
			fillOpacity: 0.3,
			color: '#B04173',
			weight: 4,
		};
	}
	
	
	function unClickedStyle(feature){
		return{
			fillColor: "#00FFFF",
			fillOpacity: 0.4,
			color: '#00FFF',
			weight: 4
		};
	}

	function clickedStyle(feature){
		return{
			fillColor: "#FFFF00",
			fillOpacity: 0.6,
			color: '#FFFF00',
			weight: 4
		};
	}

	var contentLayer = L.geoJSON(welshAuth,{
		style: unClickedStyle,
		onEachFeature: clickOnFeature
	}).addTo(mymap);
	
	function clickOnFeature(feature, layer){
		layer.on({
				click: function(e) {
					if  (selection){
						contentLayer.resetStyle(selection);
					}
					e.target.setStyle(clickedStyle());
					selection = e.target;
					L.DomEvent.stopPropagation(e);
				}
		});
	}
	
	mymap.addEventListener('click', function(e){
		if (selection){
			contentLayer.resetStyle(selection);
			selection = null;
		}
	})


	//L.geoJSON(welshAuth,{style:newStyle}).addTo(mymap);
	
	L.geoJSON(myGeoJSON2, {
		pointToLayer: function(feature, latlng){
			return L.circleMarker(latlng,jsonMarkers);
		}
	}).addTo(mymap);
	
 	L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);
}



function draw_map3(){
	
	var mymap = L.map('map_space3').setView([52.417, -3.573], 7);
	
	var jsonMarkers = {
		radius: 5,
		fillColor: "#968f89",
		color: "#000",
		weight: 0.5,
		opacity: 1,
		fillOpacity: 0.8
	};

 	L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiMTU1ODE4MDIiLCJhIjoiY2s2cWhmejU0MDlqYjNvcWxiNTd3cXFjbyJ9.Rpg1nIEuTOainxuM5dwhEg'
	}).addTo(mymap);
	


	var newMKRS = L.geoJSON(accidentsGEOJSON, {
				pointToLayer: function(feature, coordinates){
				return L.circleMarker(coordinates,jsonMarkers);
			}
		});
	
		
	var customControl =  L.Control.extend({        
		options: {
        position: 'topleft'
    },

    onAdd: function (mymap) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
		container.style.backgroundColor = 'white';     
        container.style.backgroundImage = "url(../Images/eye.png)";
        container.style.backgroundSize = "30px 30px";
        container.style.width = '30px';
        container.style.height = '30px';
		container.title="show pinpoint accidents";
		
        container.onclick = function(){
			console.log('buttonClicked');
			newMKRS.addTo(mymap);
        }

        return container;
      }
	  
    });
	mymap.addControl(new customControl());
	
	
	var customControl2 =  L.Control.extend({        
		options: {
        position: 'topleft'
    },
    onAdd: function (mymap) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
		container.style.backgroundColor = 'white';     
        container.style.backgroundImage = "url(../Images/hide.png)";
        container.style.backgroundSize = "30px 30px";
        container.style.width = '30px';
        container.style.height = '30px';
		container.title="hide pinpoint accidents";
	
        container.onclick = function(){
			console.log('buttonClicked');
			mymap.removeLayer(newMKRS);
        }

        return container;
      }
    });
	mymap.addControl(new customControl2());
	

	var locations = accidentsGEOJSON.features.map(function(extract) {
      var location = extract.geometry.coordinates.reverse();
      location.push(10);
      return location; 
    });

    var heat = L.heatLayer(locations, { radius: 20 }).addTo(mymap);
	
	/*
	L.geoJSON(accidentsGEOJSON, {
			pointToLayer: function(feature, coordinates){
			return L.circleMarker(coordinates,jsonMarkers);
		}
	}).addTo(mymap);
		*/
	
		/*
	document.getElementById("btnMarker").onclick = function(){
		
	}
	*/


/*
    var map;

    var readyState = function(e){
      map = new L.Map('map').setView([48.935, 18.14], 14);
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      map.addControl(new customControl());
    }

    window.addEventListener('DOMContentLoaded', readyState);

*/
	
}


