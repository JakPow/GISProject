/*
	Go over tutorials to add more stuff (icons etc)
*/

//function to draw all maps
function call_maps(){
	draw_map();
	draw_map1();
}

//PROPREITY 4
//TASK 1


function draw_map(){
	

      var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(
			ol.proj.fromLonLat([-3.203035,51.472826])
		),
		name: 'marker1'
      });
	  
	  
	  var iconFeature2 = new ol.Feature({
        geometry: new ol.geom.Point(
			ol.proj.fromLonLat([-3.934583,51.642749])
		),
		name: 'marker2'
      });
		

      var iconStyleCCFC = new ol.style.Style({
        image: new ol.style.Icon(({
          src: 'https://ces-web2.southwales.ac.uk/students/15581802/year5gis/year5-GIS-Current/Images/ccfc.png',
		  scale: 0.3
        }))
      });
	  
	  
	  var iconStyleSCFC = new ol.style.Style({
        image: new ol.style.Icon(({
          src: 'https://ces-web2.southwales.ac.uk/students/15581802/year5gis/year5-GIS-Current/Images/swansea.png',
		  scale: 0.3
        }))
      });

	iconFeature.setStyle(iconStyleCCFC);
	iconFeature2.setStyle(iconStyleSCFC);
	
      var vectorSource = new ol.source.Vector({
        features: [iconFeature, iconFeature2]
      });

      var vectorLayer = new ol.layer.Vector({
        source: vectorSource
      });
	


		
	var raster = new ol.layer.Tile({
        source: new ol.source.OSM({
			//url: 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png',
		})
    });
	
	

    var map = new ol.Map({
        target: 'map_space',
        layers: [raster, vectorLayer],
        view: new ol.View({
          center: ol.proj.fromLonLat([-3.589246,51.535132]),
          zoom: 10
		})
    });
	
	
	var overlay = new ol.Overlay({
        element: document.getElementById('overlay'),
        positioning: 'bottom-center'
    });
		
	
	map.on('singleclick', function (event) {
		var features = [];
		if (map.hasFeatureAtPixel(event.pixel) === true) {
			map.forEachFeatureAtPixel(event.pixel, function(feature, layer) {
				features.push(features);
				if (feature.values_.name === 'marker1') {
					var coordinate = event.coordinate;
					var popupTXT = '<a href="https://www.cardiffcityfc.co.uk" target="blank">Cardiff City Club Website</a>';
					var element = overlay.getElement();
					element.innerHTML = popupTXT;
					overlay.setPosition(coordinate);
					map.addOverlay(overlay);
				} else if (feature.values_.name === 'marker2') {
					var coordinate = event.coordinate;
					var popupTXT = '<a href="https://www.swanseacity.com" target="blank">Swansea City Club Website</a>';
					var element = overlay.getElement();
					element.innerHTML = popupTXT;
					overlay.setPosition(coordinate);
					map.addOverlay(overlay);
				}
			});
		}
	 });
}


function draw_map1(){



	var count = 20000;
	var features = new Array(count);
	var e = 4500000;

	for (var i = 0; i < count; ++i) {
	  var coordinates = [2 * e * Math.random() - e, 2 * e * Math.random() - e];
	  features[i] = new ol.Feature(new ol.geom.Point(coordinates));
	}	
	
	var source = new ol.source.Vector({
	  features: features
	});

	var clusterSource = new ol.source.Cluster({
	  source: source
	});
		
	var styleCache = {};
	
	var clusters = new ol.layer.Vector({
	  source: clusterSource,
 	  style: function(feature) {
		var size = feature.get('features').length;
		var style = styleCache[size];
		if (!style) {
		  style = new ol.style.Style({
			image: new ol.style.Circle({
			  radius: 10,
			  stroke: new ol.style.Stroke({
				color: 'red'
			  }),
			  fill: new ol.style.Fill({
				color: 'green'
			  })
			}),
			text: new ol.style.Text({
			  text: size.toString(),
			  fill: new ol.style.Fill({
				color: '#fff'
			  })
			})
		  });
		  styleCache[size] = style;
		}
		return style;
	  } 
	});
		
		
	var raster = new ol.layer.Tile({
        source: new ol.source.OSM({
			//url: 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png',
		})
    });
	
	

    var map = new ol.Map({
        target: 'map_space1',
        layers: [raster, clusters],
        view: new ol.View({
          center: ol.proj.fromLonLat([-8.127285,2.886024]),
          zoom: 3
		})
    });
}






