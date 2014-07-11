// // var map;
// // function initialize() {
// //   var mapOptions = {
// //     zoom: 8,
// //     center: new google.maps.LatLng(-34.397, 150.644)
// //   };
// //   map = new google.maps.Map(document.getElementById('map_canvas'),
// //       mapOptions);
// // }

// // // google.maps.event.addDomListener(window, 'load', initialize);


//  // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var myLatlng = new google.maps.LatLng(37.850336, 140.950341);
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 14,

//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(37.850336, 140.950341),
//         // Fukushima Daiichi Kernkraftwerk
//         // 37.850336, 140.950341

//         // How you would like to style the map. 
//         // This is where you would paste any style found on Snazzy Maps.
//         // styles: [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#acbcc9'}]},{'featureType':'landscape','stylers':[{'color':'#f2e5d4'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#c5c6c6'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#e4d7c6'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#fbfaf7'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#c5dac6'}]},{'featureType':'administrative','stylers':[{'visibility':'on'},{'lightness':33}]},{'featureType':'road'},{'featureType':'poi.park','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':20}]},{},{'featureType':'road','stylers':[{'lightness':20}]}]
//         // description: red & dark blue
//         // styles: [{"stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#2f343b"}]},{"featureType":"landscape","stylers":[{"visibility":"on"},{"color":"#703030"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#2f343b"},{"weight":1}]}]
//         // description: startker Kontrast
//      	// styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
//         // description: white and black
// 	    // styles: [{"featureType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":-100}]}]
//         // description: dark gray & darker water
// 	    // styles: [{"featureType":"landscape.natural","stylers":[{"saturation":-100},{"lightness":100}]},{"featureType":"water","stylers":[{"saturation":-100},{"lightness":-86}]},{"elementType":"labels.text.stroke","stylers":[{"saturation":-100},{"lightness":100}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":-100},{"lightness":-75}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"saturation":-100},{"lightness":97}]},{"featureType":"poi.park","stylers":[{"saturation":-100},{"lightness":-100}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"saturation":-100},{"lightness":100}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","stylers":[{"saturation":-100},{"lightness":-68}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"saturation":-100},{"lightness":100}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"saturation":-100},{"lightness":-100}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":91}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"saturation":-100},{"lightness":-100}]},{"featureType":"transit.station","stylers":[{"saturation":-100},{"lightness":-22}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"hue":"#ff004c"},{"saturation":-100},{"lightness":44}]},{"elementType":"labels.text.fill","stylers":[{"saturation":1},{"lightness":-100}]},{"elementType":"labels.text.stroke","stylers":[{"saturation":-100},{"lightness":100}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"}]}]
//         // description: Pastelfarben 
// 	    // styles: [{"featureType":"landscape","stylers":[{"lightness":16},{"hue":"#ff001a"},{"saturation":-61}]},{"featureType":"road.highway","stylers":[{"hue":"#ff0011"},{"lightness":53}]},{"featureType":"poi.park","stylers":[{"hue":"#00ff91"}]},{"elementType":"labels","stylers":[{"lightness":63},{"hue":"#ff0000"}]},{"featureType":"water","stylers":[{"hue":"#0055ff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}]
//         // description: light gray & dark gray (fav_1) 
//         // description: gray and gray
// 	    // styles: [{"featureType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]
//         // description: very shiniy & blue (called flat design)
// 	    // styles: [{"stylers":[{"visibility":"off"}]},{"featureType":"road","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.arterial","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"landscape","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]},{},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]}]
// 	    // gray-scale
// 	    // styles: [{"featureType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]
// 	    // styles: [{"featureType":"all","stylers":[{"saturation":-50},{"gamma":2}]}]
// 	    // 

// 	    // styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]

// 	    styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}],
//     };

//     var mapElement = document.getElementById('map');
//     var map = new google.maps.Map(mapElement, mapOptions);
// }

// WORK IN PROGRESS






// ________________________________________________________________________enable_this___________

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng( 18.539414200742875, -72.33416863568742),
    zoom: 14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}],
    disableDefaultUI: true,
    backgroundColor: "#DDD",
    disableDoubleClickZoom: true,

    // styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
  };
  var markers = [];
  var mapType =  ['ROADMAP', 'TERRAIN', 'HYBRID', 'SATELLITE',];
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  map.setMapTypeId(google.maps.MapTypeId[mapType[0]]);
  var drawingManager = new google.maps.drawing.DrawingManager({
        // drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.MARKER,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
          ]
        },
        markerOptions: {
              icon: '../img/map/marker_def.fw.png',
              editable: true,
              clickable: true,
        },
        polygonOptions: {
            	strokeColor: '#56C9DC', 
            	strokeWeight: 3,
            	fillColor: "#31454D",
            	fillOpacity: .6,
            	editable: true,
              	clickable: true,
        },
         polylineOptions: {
      		strokeColor: '#56C9DC', 
      		strokeOpacity: 0.7, 
      		strokeWeight: 15,
      		fillColor: "#31454D",
      		fillOpacity: .6,
      		editable: true,
            	clickable: true,
        },
  });
  drawingManager.setMap(map);
  // Swap map vis

  google.maps.event.addListener(map, 'click', function(event) {
      addMarker(event.latLng);
      pathCoords.push(event.latLng);
      say(markers);
      myPolygon(event.latLng);
      // send new maker to list
      $('#tab_0_list_1').trigger('custom', [0, markers.length]);
  });

 var image = new google.maps.MarkerImage('../img/map/marker_2.fw.png',
      null, 
      new google.maps.Point(0,0),
      new google.maps.Point(10, 28)
);

 // var image2 = new google.maps.MarkerImage('http://d3dsacqprgcsqh.cloudfront.net/photo/azbVp4p_460sa.gif',
 var image2 = new google.maps.MarkerImage('../img/map/marker_2.fw.png',
      null, 
      new google.maps.Point(0,0),
      new google.maps.Point(10, 70)
);


  var pathCoords = new google.maps.MVCArray();
  var area = new google.maps.Polygon({
                   path: pathCoords,
                   strokeColor: '#56C9DC', 
                   strokeWeight: 2,
                   fillColor: "#31454D",
                   fillOpacity: .6,
                   // editable: true,
                  clickable: true,
                  icon: image, 
    });
    area.setMap(map);

  function myPolygon (argument) {
      // area.getPath().insertAt(pathCoords.length, argument);
  };



 function addMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP,
            anchorPoint: 10,
            draggable: true,
            clickable: true,
        });


         google.maps.event.addListener(marker, 'mousedown', function(event) {
                marker.setIcon(image2);
                // update list
                $('#tab_0_list_1').trigger('custom', [1, myArrayPosition]);
        });

          google.maps.event.addListener(marker, 'mouseup', function(event) {
                marker.setIcon(image);
                // update list
                $('#tab_0_list_1').trigger('custom', [2, myArrayPosition]);
        });

        google.maps.event.addListener(marker, 'drag', function(event) {
                pathCoords.setAt(myArrayPosition-1, event.latLng);
                marker.setIcon(image2);
        });

          google.maps.event.addListener(marker, 'dragend', function(event) {
                pathCoords.setAt(myArrayPosition-1, event.latLng);
                marker.setIcon(image);
        });

        markers.push(marker);
        var myArrayPosition = markers.length;
}

//  google.maps.event.addListener(map, 'dblclick', function(event) {
//       say('close');
// });

 google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
          say(event.type);
          say(event.overlay.getPath().j);
          // add event listener to overlay
          google.maps.event.addListener(event.overlay, 'click', function(event) {
            say("Hey!");
          });
 });

 google.maps.event.addListener(drawingManager, 'click', function(event) {
        say('test');
 });


function overlayClickListener(overlay) {
    google.maps.event.addListener(overlay, "mouseup", function(event){
        alert("!");
    });
}

  // ADD MARKER ADDING - CUSTOM

  	var mapOptions2 = {
        zoom: 14,
        center: new google.maps.LatLng(37.850336, 140.950341),
    	// mapTypeId:google.maps.MapTypeId.SATELLITE,
	    //styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}],
	    // styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
      styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}],


    };

    var mapElement2 = document.getElementById('small-map-canvas');
    var map2 = new google.maps.Map(mapElement2, mapOptions2);
    map2.setZoom(map.getZoom()-5);
    map2.setCenter(map.getCenter());




    // EVENT LISTENERS ///////////////////////////////////////////////////////////////



  	$('#r_3_nav_b0').on("custom", function(event, param1, param2){
		switch(param1) {
		    case 'over':
		        break;
		    case 'out':
		        break;
		    case 'down':
		        break;
		    case 'up':
		      	map.setMapTypeId(google.maps.MapTypeId[mapType[0]]);
		      	map2.setMapTypeId(google.maps.MapTypeId[mapType[0]]);
                        updateGridStatus('gray');
		        break;
		    default:{
		    }
		}
	});

	$('#r_3_nav_b1').on("custom", function(event, param1, param2){
		switch(param1) {
		    case 'over':
		        break;
		    case 'out':
		        break;
		    case 'down':
		        break;
		    case 'up':
		      	map.setMapTypeId(google.maps.MapTypeId[mapType[1]]);
		      	map2.setMapTypeId(google.maps.MapTypeId[mapType[1]]);
                        updateGridStatus('gray');
		        break;
		    default:{
		    }
		}
	});


  	$('#r_3_nav_b2').on("custom", function(event, param1, param2){
		switch(param1) {
		    case 'over':
		        break;
		    case 'out':
		        break;
		    case 'down':
		        break;
		    case 'up':
		      	map.setMapTypeId(google.maps.MapTypeId[mapType[2]]);
		      	map2.setMapTypeId(google.maps.MapTypeId[mapType[2]]);
                        updateGridStatus('white');
		    default:{
		    }
		}
	});

	$('#r_3_nav_b3').on("custom", function(event, param1, param2){
		switch(param1) {
		    case 'over':
		        break;
		    case 'out':
		        break;
		    case 'down':
		        break;
		    case 'up':
		      	map.setMapTypeId(google.maps.MapTypeId[mapType[3]]);
		      	map2.setMapTypeId(google.maps.MapTypeId[mapType[3]]);
                        updateGridStatus('white');
		        break;
		    default:{
		    }
		}
	});


	// over body
	$('body').on("custom", function(event, param1, param2){
		if (param2 == 0) {
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			      	map.setMapTypeId(google.maps.MapTypeId[mapType[0]]);
			      	map2.setMapTypeId(google.maps.MapTypeId[mapType[0]]);
                              updateGridStatus('gray');
			        break;
			    default:{
			    }
			}
		};
	});

	$('body').on("custom", function(event, param1, param2){
		if (param2 == 1) {
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			      	map.setMapTypeId(google.maps.MapTypeId[mapType[1]]);
			      	map2.setMapTypeId(google.maps.MapTypeId[mapType[1]]);
                              updateGridStatus('gray');
			        break;
			    default:{
			    }
			}
		};
	});


  	$('body').on("custom", function(event, param1, param2){
  		if(param2 == 2) {
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			      	map.setMapTypeId(google.maps.MapTypeId[mapType[2]]);
			      	map2.setMapTypeId(google.maps.MapTypeId[mapType[2]]);
                              updateGridStatus('white');
			        break;
			    default:{
			    }
			}
		};
	});

	$('body').on("custom", function(event, param1, param2){
		if (param2 == 3) {
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			      	map.setMapTypeId(google.maps.MapTypeId[mapType[3]]);
			      	map2.setMapTypeId(google.maps.MapTypeId[mapType[3]]);
                              updateGridStatus('white');
			        break;
			    default:{
			    }
			}
		};
	});


  $('body').on("custom", function(event, param1, param2){
        if (param1 == 'zoomin') {
          map.setZoom(16);
        } else  if (param1 == 'zoomout') {
          // map.setZoom(map.getZoom() - .1);
          map.setZoom(8);
    };
  });




	// 45° und so
	$('body').on("custom", function(event, param1, param2){
		if(param1 == 45) {
			// map.setTilt(45);
		}
	});


	// SYNC MAPS 

	google.maps.event.addListener(map, 'zoom_changed', function() {
	  	map2.setZoom(map.getZoom()-5);
    	// say(map.getZoom());
	});

	google.maps.event.addListener(map, 'center_changed', function() {
	  	map2.setCenter(map.getCenter());
    	// say(map.getCenter());
    	// say('Got it!')
	});



  google.maps.event.addListener(map,'click',function(event) {
    $('#lat').html('<span>Lat:</span>' + event.latLng.lat().toFixed(8));
    $('#lng').html('<span>Lat:</span>' + event.latLng.lng().toFixed(8));
  });

    // detect if sth added or so
    // DRAWINGS EVENT LISTENERS
     google.maps.event.addListener(drawingManager, 'overlaycomplete ', function(event) {
      alert('!');
    });


   google.maps.event.addListener(map,'*',function(event) {
    
  });
}

google.maps.event.addDomListener(window, 'load', initialize);




function smoothZoom (map, max, cnt) {
    if (cnt >= max) {
            return;
        }
    else {
        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt + 1);
        });
        setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
    }
}


// Enable wihite or gray gitd

function updateGridStatus (argument) {
  if (argument == 'gray') {
    // animo
    // $('#grid_gray').animo({animation: "fadeIn", duration: 0.2});
    // $('#grid_white').animo({animation: "fadeOut", duration: 0.2});
    $('#grid_gray').css('display', 'block');
    $('#grid_white').css('display', 'none');
  } else if(argument == 'white'){
    // animo
    // $('#grid_gray').animo({animation: "fadeOut", duration: 0.2});
    // $('#grid_white').animo({animation: "fadeIn", duration: 0.2});

    $('#grid_gray').css('display', 'none');
    $('#grid_white').css('display', 'block');
  } else {
    
  };
};


function showArrays(event) {

  // Since this polygon has only one path, we can call getPath()
  // to return the MVCArray of LatLngs.
  var vertices = this.getPath();

  var contentString = '<b>Bermuda Triangle polygon</b><br>' +
      'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
      '<br>';

  // Iterate over the vertices.
  for (var i =0; i < vertices.getLength(); i++) {
    var xy = vertices.getAt(i);
    contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
        xy.lng();
  }

  // Replace the info window's content and position.
  infoWindow.setContent(contentString);
  infoWindow.setPosition(event.latLng);

  infoWindow.open(map);
}




   



// EVENT LISTENER SHOWING POSITION

//   google.maps.event.addListener(map,'mousemove',function(event) {
//     document.getElementById('latspan').innerHTML = event.latLng.lat()
//     document.getElementById('lngspan').innerHTML = event.latLng.lng()
//     document.getElementById('latlong').innerHTML = event.latLng.lat() + ', ' + event.latLng.lng()
//   }); 
// }