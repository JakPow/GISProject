

function draw_map(){
	var map_ops={
		center: new google.maps.LatLng(52.417, -3.573),
		zoom:8,
		mapTypeID:google.maps.MapTypeId.RoadMap
	}
	var map = new google.maps.Map(document.getElementById("map_space"),map_ops);
}

