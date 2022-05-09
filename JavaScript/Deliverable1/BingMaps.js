/*
	Go over tutorials to add more stuff (icons etc)
*/

//function to draw all maps
function call_maps(){
	draw_map4();
	draw_map5();
	draw_map6();
	draw_map7();

}



//TASK 4 - KML 2
function draw_map4(){
	
	var map = new Microsoft.Maps.Map('#map_space4', {
            credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
            center: new Microsoft.Maps.Location(51.5858939,-3.3202176),
			zoom: 8
        });

	Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {
		var shape = Microsoft.Maps.GeoJson.read(myGeoJsonLine);
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

function draw_map7(){
	
	var map = new Microsoft.Maps.Map('#map_space7', {
        credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
        center: new Microsoft.Maps.Location(51.5858939,-3.3202176),
		zoom: 7
    });
	
	var area1 = [
		new Microsoft.Maps.Location(51.86,-3.95),
		new Microsoft.Maps.Location(51.93, -3.85),
		new Microsoft.Maps.Location(52.01,-3.72),
		new Microsoft.Maps.Location(51.96,-3.65),					
		new Microsoft.Maps.Location(51.87,-3.60),
		new Microsoft.Maps.Location(51.86,-3.76),
		new Microsoft.Maps.Location(51.84,-3.91),
		new Microsoft.Maps.Location(51.86,-3.95)	
	];		

	var area2 = [
		new Microsoft.Maps.Location(53.10,-3.90),
		new Microsoft.Maps.Location(52.81,-3.59),
		new Microsoft.Maps.Location(52.75,-3.82),
		new Microsoft.Maps.Location(52.83,-4.05),
		new Microsoft.Maps.Location(53.10,-3.90)
	];

	
	var polygon = new Microsoft.Maps.Polygon(area1, {
        fillColor: 'green',
		strokeColor: 'red'
	});
	
	var polygon2 = new Microsoft.Maps.Polygon(area2, {
        fillColor: 'red',
		strokeColor: 'green',
	});
	
	map.entities.push(polygon);
	map.entities.push(polygon2);
}


