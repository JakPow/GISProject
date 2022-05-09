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
	var map_ops = {
		credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
		center: new Microsoft.Maps.Location(52.417, -3.573),
		zoom: 7,
		mapTypeId: Microsoft.Maps.MapTypeId.road
	};
	
	var map = new Microsoft.Maps.Map(document.getElementById("map_space"), map_ops)
	

}




//TASK 2 - ADD NEW CONTROLS
function draw_map2(){
	var map = new Microsoft.Maps.Map('#map_space3', {
            credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
            center: new Microsoft.Maps.Location(51.55081, -3.177109),
			zoom: 11
        });

        var center = new Microsoft.Maps.Location(51.589063, -3.3289);
		var center2 = new Microsoft.Maps.Location(51.4790133,-3.1715507);
		var center3 = new Microsoft.Maps.Location(51.5858161,-2.9923042);
		
		var uniIcon = '../Images/student.png';
		
        //Create custom Pushpin
        var pin = new Microsoft.Maps.Pushpin(center, {
            title: 'USW: ',
            subTitle: 'Trefforst Campus',
            icon: uniIcon
        });
		
		pin.metadata = {
            title: 'USW',
            description: 'Trefforst Campus'
        };
		
		var pin2 = new Microsoft.Maps.Pushpin(center2, {
            title: 'USW:',
            subTitle: 'Cardiff Campus',
            icon: uniIcon
        });
		
		pin2.metadata = {
            title: 'USW',
            description: 'Cardiff Campus'
        };
		
		var pin3 = new Microsoft.Maps.Pushpin(center3, {
            title: 'USW: ',
            subTitle: 'Newport Campus',
            icon: uniIcon
        });
		
		pin3.metadata = {
            title: 'USW',
            description: 'Newport Campus'
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
	
	var map = new Microsoft.Maps.Map('#map_space2', {
            credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
            center: new Microsoft.Maps.Location(51.5858939,-3.3202176),
			customMapStyle: {
				elements: {
					area: { fillColor: '#b6e591' },
					water: { fillColor: '#75cff0' },
					tollRoad: { fillColor: '#a964f4', strokeColor: '#a964f4' },
					arterialRoad: { fillColor: '#ffffff', strokeColor: '#d7dae7' },
					road: { fillColor: '#ffa35a', strokeColor: '#ff9c4f' },
					street: { fillColor: '#ffffff', strokeColor: '#ffffff' },
					transit: { fillColor: '#000000' }
				},
				settings: {
					landColor: '#efe9e1'
				}
			},
			zoom: 10
        });
		
		
	var myGeoJson = {
        "type": "FeatureCollection",
		"features":[
			{
				"type": "point",
				"coordinates": [-3.20353,51.472789],
			},
			{
				"type": "point",
				"coordinates": [-3.9346,51.6427],			
			},			
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
	
