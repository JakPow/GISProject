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

//PROPREITY 4
//TASK 1
function draw_map(){
	var map_ops = {
		credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
		center: new Microsoft.Maps.Location(52.417, -3.573),
		zoom: 7,
		mapTypeId: Microsoft.Maps.MapTypeId.road
	};
	
	var map = new Microsoft.Maps.Map(document.getElementById("bingMap"), map_ops)
}




//TASK 2 - ADD NEW CONTROLS
function draw_map2(){
	var map = new Microsoft.Maps.Map('#map_space2', {
            credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
            center: new Microsoft.Maps.Location(51.5858939,-3.3202176),
			zoom: 11
        });

        var center = map.getCenter();
		var center2 = new Microsoft.Maps.Location(51.4790133,-3.1715507);
		var center3 = new Microsoft.Maps.Location(51.5858161,-2.9923042);
		
        //Create custom Pushpin
        var pin = new Microsoft.Maps.Pushpin(center, {
            title: 'USW: ',
            subTitle: 'Trefforst Campus',
            text: '1'
        });
		
		pin.metadata = {
            title: 'Pin Title',
            description: 'Pin discription'
        };
		
		var pin2 = new Microsoft.Maps.Pushpin(center2, {
            title: 'USW:',
            subTitle: 'Cardiff Campus',
            text: '2'
        });
		
		pin2.metadata = {
            title: 'Pin Title',
            description: 'Pin discription'
        };
		
		var pin3 = new Microsoft.Maps.Pushpin(center3, {
            title: 'USW: ',
            subTitle: 'Newport Campus',
            text: '3'
        });
		
		pin3.metadata = {
            title: 'Pin Title',
            description: 'Pin discription'
        };
		
		var lineCoords = [center, center2, center3, center];
		
		var line = new Microsoft.Maps.Polyline(lineCoords, {
            strokeColor: 'red',
            strokeThickness: 5,
            strokeDashArray: [4, 4]
        });
		
		var polygon = new Microsoft.Maps.Polygon(lineCoords, {
            fillColor: 'rgba(0, 255, 0, 0.5)',
            //strokeColor: 'red',
            //strokeThickness: 2
        });
		
		//create infobox
		infobox = new Microsoft.Maps.Infobox(center, {
            visible: false
        });

		infobox.setMap(map);
		
		Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
		Microsoft.Maps.Events.addHandler(pin2, 'click', pushpinClicked);
		Microsoft.Maps.Events.addHandler(pin3, 'click', pushpinClicked);
		
		function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
			if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
		}
	
        //Add the pushpin to the map
        map.entities.push(pin);
		map.entities.push(pin2);
		map.entities.push(pin3);
		map.entities.push(line);
		map.entities.push(polygon);
}





//TASK 3
function draw_map3(){
	
	var map = new Microsoft.Maps.Map('#map_space3', {
            credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
            center: new Microsoft.Maps.Location(51.5858939,-3.3202176),
			zoom: 10
        });
		
		
	var myGeoJson = {
        "type": "FeatureCollection",
		"features":[
			{
				"type": "point",
				"coordinates": [-3.20353,51.472789]
			},
			{
				"type": "point",
				"coordinates": [-3.9346,51.6427]				
			}	
		]
    };
	
	
	
	Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {

		var shape = Microsoft.Maps.GeoJson.read(myGeoJson, {
			pointOptions: {
				color: 'blue'
			}
		});

        map.entities.push(shape);
    });
		
}
	


//TASK 4 - KML 2
function draw_map4(){
	
	var map = new Microsoft.Maps.Map('#map_space4', {
            credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
            center: new Microsoft.Maps.Location(51.5858939,-3.3202176),
			zoom: 8
        });

	Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
		var shape = Microsoft.Maps.GeoJson.read(myGeoJsonLine, {
			pointOptions: {
				color: 'blue',
			}
		});

        map.entities.push(shape);
    }); 
	
}





//TASK 4 - KML 2
function draw_map5(){
		var map = new Microsoft.Maps.Map('#map_space5', {
            credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
            center: new Microsoft.Maps.Location(51.5858939,-3.3202176),
			zoom: 10
        });

	Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
		var shape = Microsoft.Maps.GeoJson.read(myGeoJsonPoly, {
                polygonOptions: {
                    fillColor: 'red',
                    strokeColor: 'green',
                    strokeThickness: 5
                }
		});

        map.entities.push(shape);
    }); 
	
	
	
}

//TASK 5 - KML 2
function draw_map6(){
	
		var map = new Microsoft.Maps.Map('#map_space6', {
            credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
            center: new Microsoft.Maps.Location(51.5858939,-3.3202176),
			zoom: 7
        });

		Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
		var shape = Microsoft.Maps.GeoJson.read(nationalParks, {
                polygonOptions: {
                    fillColor: 'red',
                }
		});
		
		var shape2 = Microsoft.Maps.GeoJson.read(walesOutline, {
                polygonOptions: {
                    fillColor: 'green',
                }
		});
		
		map.entities.push(shape2);
        map.entities.push(shape);

    }); 
	
	
}


