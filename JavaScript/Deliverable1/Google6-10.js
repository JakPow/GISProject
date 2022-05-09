/*
	Go over tutorials to add more stuff (icons etc)
*/

//function to draw all maps
function call_maps(){
	draw_map();
	draw_map2();
	draw_map3();
	draw_map4();
	draw_map5();
	draw_map6();
	draw_map7();
}

//PROPREITY 3
//TASK 1
function draw_map(){
	
	//Set map of Wales base layer
	var map_ops={
		center: new google.maps.LatLng(52.417, -3.573),
		zoom:7,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'styled']
		}
	}
	
	
	//Set the map base layer to the HTML Div
	var map = new google.maps.Map(document.getElementById("map_space"),map_ops);
	
	var myStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#4af057"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#00c40f"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#005902"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b005be"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ff8689"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#590002"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#3ef0ff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ff3e43"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bd0004"
      }
    ]
  }
];

	var styledMapType = new google.maps.StyledMapType(myStyles,{
      map: map,
      name: 'Styled Map'
    });
	
	map.mapTypes.set('myStyles',styledMapType);
	map.setMapTypeId('myStyles');
	
}

//TASK 2 - ADD NEW CONTROLS
function draw_map2(){
	
	var map = new google.maps.Map(document.getElementById("map_space2"),{
		center: new google.maps.LatLng(52.417, -3.573),
		zoom:7,
		mapTypeId: 'terrain',
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.TOP_CENTER
		},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.TOP_LEFT
		}
		
	});	
	
}



//TASK 3 - KML 1
function draw_map3(){
	
	var map = new google.maps.Map(document.getElementById("map_space3"),{
		center: new google.maps.LatLng(52.417, -3.573),
		zoom:7,
		mapTypeId: 'terrain'
	});	
	
	
	var src = "https://ces-web2.southwales.ac.uk/staff/mlangfor/ex6/kml/stadiums.kml";
	
	var kmlLayer = new google.maps.KmlLayer(src,{
			preserveViewport: true,
			map: map
	})
	

}


//TASK 4 - KML 2
function draw_map4(){
	
	var map = new google.maps.Map(document.getElementById("map_space4"),{
		center: new google.maps.LatLng(52.417, -3.573),
		zoom:7,
		mapTypeId: 'terrain'
	});	
	
	var src = "https://ces-web2.southwales.ac.uk/students/15581802/KML/KMLAirports5.kml";
	var kmlLayer = new google.maps.KmlLayer(src,{
			preserveViewport: true,
			map: map
	})
}

//TASK 4 - KML 2
function draw_map5(){
	
	var map = new google.maps.Map(document.getElementById("map_space5"),{
		center: new google.maps.LatLng(54.138112, -2.977633),
		zoom:6,
		mapTypeId: 'terrain'
	});	
	
	var src = "https://ces-web2.southwales.ac.uk/students/15581802/KML/UkPostcodes.kml";
	var kmlLayer = new google.maps.KmlLayer(src,{
			preserveViewport: true,
			map: map
	})
}






