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

	var raster = new ol.layer.Tile({
        source: new ol.source.OSM({
			url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png',
		})
    });

    var source = new ol.source.Vector({wrapX: false});

    var vector = new ol.layer.Vector({
        source: source
    });

	//KML
	
	var KML = new ol.layer.Vector({
	  source: new ol.source.Vector({
		url: 'https://ces-web2.southwales.ac.uk/students/15581802/KML/WalesCoastalPaths.kml',
		format: new ol.format.KML()
	  })
	});

	//MARKERS
	var marker = new ol.Feature({
		geometry: new ol.geom.Point(
			ol.proj.fromLonLat([-75.006,39.7127]),
		), 
	});
	

	var marker2 = new ol.Feature({
		geometry: new ol.geom.Point(
			ol.proj.fromLonLat([-74.006,40.7127]),
		),  
	});


	var vectorSource = new ol.source.Vector({
		features: [marker, marker2]
	});
	
	var markerVectorLayer = new ol.layer.Vector({
		source: vectorSource,
	});
	//map.addLayer(markerVectorLayer);

    var map = new ol.Map({
        layers: [raster, vector, KML, markerVectorLayer],
        target: 'map_space',
        view: new ol.View({
			center: ol.proj.fromLonLat([-3.573,52.417]),
			zoom: 8
		})
    });
		  
	var typeSelect = document.getElementById('type');

    var draw; // global so we can remove it later
		function addInteraction() {
			var value = typeSelect.value;
			if (value !== 'None') {
				draw = new ol.interaction.Draw({
				source: source,
				type: typeSelect.value
			});
          map.addInteraction(draw);
        }
    }

    // Handle change event.
    typeSelect.onchange = function() {
		map.removeInteraction(draw);
        addInteraction();
    };

    addInteraction();

}



function draw_map2(){

	var raster = new ol.layer.Tile({
        source: new ol.source.OSM({
			url: 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png',
		})
    });

    var source = new ol.source.Vector({wrapX: false});

    var vector = new ol.layer.Vector({
        source: source
    });

	//geojson
	//var vectorSource = new VectorSource({
	//  features: (new GeoJSON()).readFeatures('http://lle.gov.wales/catalogue/item/LakesInventory.json')
	//});

	var style = new ol.style.Style({
		fill: new ol.style.Fill({
			color: 'rgba(41, 241, 195, 0.95)'
		}),
		stroke: new ol.style.Stroke({
			color: 'red',
			width: 2
		}),
		text: new ol.style.Text()
	});
	


	var geoJSONLayer = new ol.layer.Vector({
	  source: new ol.source.Vector({
		  url: 'https://raw.githubusercontent.com/missinglink/uk-postcode-polygons/master/geojson/CF.geojson',
		  format: new ol.format.GeoJSON()
	  }),
	  style: function(feature){
		  style.getText().setText(feature.get('name'));
		  return style;
	  }
	});


    var map = new ol.Map({
        layers: [raster, vector, geoJSONLayer],
        target: 'map_space2',
        view: new ol.View({
			center: ol.proj.fromLonLat([-3.359392,51.600236]),
			zoom: 9.5
		})
    });
		 
}


function draw_map3(){

	var raster = new ol.layer.Tile({
        source: new ol.source.OSM({
			url: 'http://a.tile.stamen.com/watercolor/{z}/{x}/{y}.png',
		})
    });
	

    var map = new ol.Map({
        target: 'map_space3',
        layers: [raster],
        view: new ol.View({
          center: ol.proj.fromLonLat([-3.589246,51.535132]),
          zoom: 9
		})
    });
	
	
	//Marker variables  
	var pos1 = ol.proj.fromLonLat([-3.203035,51.472826]);
	var pos2 = ol.proj.fromLonLat([-3.934583,51.642749]);
	
	// Cardiff marker
    var marker1 = new ol.Overlay({
        position: pos1,
        positioning: 'center-center',
        element: document.getElementById('marker'),
        stopEvent: false
    });
    map.addOverlay(marker1);	
	// cardiff label
    var cardiff = new ol.Overlay({
        position: pos1,
        element: document.getElementById('cardiff')
    });
    map.addOverlay(cardiff);
	
	// Swansea marker
    var marker2 = new ol.Overlay({
        position: pos2,
        positioning: 'center-center',
        element: document.getElementById('marker2'),
        stopEvent: false
    });
    map.addOverlay(marker2);	
	// swansea label
    var swansea = new ol.Overlay({
        position: pos2,
        element: document.getElementById('swansea')
    });
    map.addOverlay(swansea);
	 
}


