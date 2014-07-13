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

var latValue =  document.getElementById('lat');
var lngValue =  document.getElementById('lng');

var gridPath = [];

var droneAdded = false;

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng( 18.539414200742875, -72.33416863568742),
    // center: new google.maps.LatLng( 16.404206195302862, -41.03952714093645),
    // zoom: 14,
    zoom: 3,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}],
    disableDefaultUI: true,
    backgroundColor: "#DDD",
    disableDoubleClickZoom: true,
    // draggableCursor : url('../img/cursor/points.fw.png, auto');
    draggableCursor : "url(../img/cursor/draggableCursor.fw.png), auto",
    draggingCursor:    "url(../img/cursor/draggingCursor.fw.png), auto",
    // cursor: url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default;

    // styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
  };
  var markers = [];
  // var mapType =  ['ROADMAP', 'TERRAIN', 'HYBRID', 'SATELLITE',];
  var mapType =  ['SATELLITE', 'HYBRID', 'TERRAIN', 'ROADMAP'];
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
  // drawingManager.setMap(map);
  // Swap map vis

  google.maps.event.addListener(map, 'click', function(event) {
      say(event.latLng);
      addMarker(event.latLng);
      pathCoords.push(event.latLng);
      // say(markers);
      myPolygon(event.latLng);
      // send new maker to list
      $('#tab_0_list_1').trigger('custom', [0, markers.length]);
  });


 var image = new google.maps.MarkerImage('../img/map/marker_2.fw.png',
      null, 
      new google.maps.Point(0,0),
      new google.maps.Point(10, 28)
);

  var droneImage = new google.maps.MarkerImage('../img/map/droneMarker.fw.png',
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


        // if (!droneAdded) {
        //         droneAdded = true;
        //           var droneMarker = new google.maps.Marker({
        //           position: location,
        //           map: map,
        //           icon: droneImage,
        //           animation: google.maps.Animation.DROP,
        //           anchorPoint: 10,
        //       });
        // };


        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP,
            anchorPoint: 10,
            draggable: true,
            clickable: true,
            cursor: "url(../img/cursor/cursorOver.fw.png), auto",
        });

       

        say('location')
        say(location.lat())
        say(location.lng())
        gridPath.push( new google.maps.LatLng(location.lat(), location.lng()));
        say(gridPath);

        // push marker location into array
        // gridPath.push(new google.maps.LatLng(location.lat(), location.lng()));

        

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

        // cursorDragging.png

        // google.maps.event.addListener(marker, 'mouseover', function(event) {
        //         // set cursor
        //         map.setOptions({draggableCursor: icon_hover});
        //         marker.setOptions({
        //             cursor: "url(../img/cursor/cursorOver.fw.png), auto",
        //         });
        //         // draggableCursor : "url(../img/cursor/draggableCursor.fw.png), auto",
        // });

          // marker hover effect
          // var icon_hover = "../img/cursor/cursorOver.fw.png";

          // var marker = new google.maps.Marker({
          //     position: event.latLng,
          //     map: map,
          //     icon: icon_hover,
          //     title: "some marker"
          // });

          // google.maps.event.addListener(marker, 'mouseover', function() {
          //     // marker.setIcon(icon_hover);
          //     say('hover');
          // });
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
      styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}],
    };

    var mapElement2 = document.getElementById('small-map-canvas');
    var map2 = new google.maps.Map(mapElement2, mapOptions2);
    map2.setZoom(map.getZoom()-5);
    map2.setCenter(map.getCenter());

    // SMALL VIS MAPS
    var mapRadioOptions = {
           zoom: 15,
           center:  new google.maps.LatLng(18.572182154720327,  -72.34312534332275),
           styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}]
    };


    var mapRadioElement = document.getElementById('mapRadio');
    var mapRadio = new google.maps.Map(mapRadioElement, mapRadioOptions);
    // mapRadio.setCenter(18.569893864136784, -72.3376590013504);
    // mapRadio.setZoom(14);


    // 3D MAP START
    var mapOptions3D = {
        center: new google.maps.LatLng(45.518970, -122.672899),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        heading: 90,
        tilt: 60
      };
      map3D = new google.maps.Map(document.getElementById('map3DCanvas'), mapOptions3D);
      var counter = 0;
       window.setInterval(function () {
               map3D.panTo(new google.maps.LatLng(45.518970, -122.68));
       }, 1000);

      
    

    function rotate90() {
      var heading = map.getHeading() || 0;
      map.setHeading(heading + 90);
    }

    function autoRotate() {
      // Determine if we're showing aerial imagery
      if (map.getTilt() != 0) {
        window.setInterval(rotate90, 3000);
      }
    }

// 3DMAP END



  google.maps.event.addListener(mapRadio, 'click', function(event) {
      // say(RadioMap);
      // say(event);
      say(mapRadio.getCenter());
  });

    // HEATMAP RADIO ////////////////////////////////////////////////////////////////////////

    var heatmapPointarray, heatmap_1;
    var taxiData = [
            new google.maps.LatLng(18.570432886461624, -72.33747661113739),
            new google.maps.LatLng(18.57013286481179, -72.33694553375244),
            new google.maps.LatLng(18.569949800494996, -72.3365592956543),
            new google.maps.LatLng(18.56975656572519, -72.33601748943329),
            new google.maps.LatLng(18.56964977799533, -72.33570098876953),
            new google.maps.LatLng(18.570056588037012, -72.33822226524353),
            new google.maps.LatLng(18.569863353388207, -72.33768582344055),
            new google.maps.LatLng(18.569700629303608, -72.33726739883423),
            new google.maps.LatLng(18.561889690680708, -72.34574317932129),
            new google.maps.LatLng(18.573768684838157, -72.31012344360352 ),
            new google.maps.LatLng(18.578568865536024, -72.33501434326172 ),
            new google.maps.LatLng(18.579057011933873, -72.3241138458252),
            new google.maps.LatLng(18.574419564717502, -72.33527183532715),
          ];
     
      // DRAW CIRCLE
      // center: new google.maps.LatLng(37.850336, 140.950341),
      // Add circle overlay and bind to marker
         

          for (var i = 0; i < taxiData.length; i++) {
             var circle = new google.maps.Circle({
                  center: taxiData[i],
                  map: mapRadio,
                  radius: 100 * Math.random(), 
                  fillColor: '#662723',
                  fillOpacity: '0.8',
                  strokeColor: '#FF5D4F',
                  strokeWeight: 1,
                });
          };

           for (var i = 0; i < taxiData.length; i++) {
             var circle2 = new google.maps.Circle({
                  center: taxiData[i],
                  map: mapChemic,
                  radius: 300 * Math.random(), 
                  fillColor: '#1A6F7D',
                  fillOpacity: '0.8',
                  strokeColor: '#55C9DC',
                  strokeWeight: 1,
                });
          };



      var heatmapPointarray = new google.maps.MVCArray(taxiData);
      heatmap_1 = new google.maps.visualization.HeatmapLayer({
            data: heatmapPointarray,
            radius: 20,
      });
      // say(heatmap_1.getRadius());
      var gradient = [
              'rgba(0, 255, 255, 0)',
              'rgba(0, 255, 255, 1)',
              'rgba(0, 191, 255, 1)',
              'rgba(0, 127, 255, 1)',
              'rgba(0, 63, 255, 1)',
              'rgba(0, 0, 255, 1)',
              'rgba(0, 0, 223, 1)',
              'rgba(0, 0, 191, 1)',
              'rgba(0, 0, 159, 1)',
              'rgba(0, 0, 127, 1)',
              'rgba(63, 0, 91, 1)',
              'rgba(127, 0, 63, 1)',
              'rgba(191, 0, 31, 1)',
              'rgba(255, 0, 0, 1)',
      ];
      heatmap_1.set('gradient', heatmap_1.get('gradient') ? null : gradient);
      // heatmap_1.setMap(mapRadio);

      // HEATMAP RADIO END//////////////////////////////////////////////////////////////

       var mapChemicOptions = {
            zoom: 15,
            center:  new google.maps.LatLng(18.572182154720327,  -72.34312534332275),
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}]
    };
 
    var mapChemicElement = document.getElementById('mapChemic');
    var mapChemic = new google.maps.Map(mapChemicElement, mapChemicOptions);
    
   



    // HEATMAP ////////////////////////////////////////////////////////////////////////

    // var heatmapPointarray, heatmap_1;
    // var taxiData = [
    //       new google.maps.LatLng(18.570432886461624, -72.33747661113739),
    //       new google.maps.LatLng(18.57013286481179, -72.33694553375244),
    //       new google.maps.LatLng(18.569949800494996, -72.3365592956543),
    //       new google.maps.LatLng(18.56975656572519, -72.33601748943329),
    //       new google.maps.LatLng(18.56964977799533, -72.33570098876953),
    //       new google.maps.LatLng(18.570056588037012, -72.33822226524353),
    //       new google.maps.LatLng(18.569863353388207, -72.33768582344055),
    //       new google.maps.LatLng(18.569700629303608, -72.33726739883423),
    //       ];
    //   var heatmapPointarray = new google.maps.MVCArray(taxiData);
    //   heatmap_1 = new google.maps.visualization.HeatmapLayer({
    //         data: heatmapPointarray,
    //         // radius: 201,
    //   });
    //   // say(heatmap_1.getRadius());
    //   var gradient = [
    //           'rgba(0, 255, 255, 0)',
    //           'rgba(0, 255, 255, 1)',
    //           'rgba(0, 191, 255, 1)',
    //           'rgba(0, 127, 255, 1)',
    //           'rgba(0, 63, 255, 1)',
    //           'rgba(0, 0, 255, 1)',
    //           'rgba(0, 0, 223, 1)',
    //           'rgba(0, 0, 191, 1)',
    //           'rgba(0, 0, 159, 1)',
    //           'rgba(0, 0, 127, 1)',
    //           'rgba(63, 0, 91, 1)',
    //           'rgba(127, 0, 63, 1)',
    //           'rgba(191, 0, 31, 1)',
    //           'rgba(255, 0, 0, 1)',
    //   ];
    //   heatmap_1.set('gradient', heatmap_1.get('gradient') ? null : gradient);
      // heatmap_1.setMap(map);


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
                        updateGridStatus('white');
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
                        updateGridStatus('white');
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
                        updateGridStatus('gray');
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
                        updateGridStatus('gray');
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
                              updateGridStatus('white');
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
                              updateGridStatus('white');
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
                              updateGridStatus('gray');
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
                              updateGridStatus('gray');
			        break;
			    default:{
			    }
			}
		};
	});

  // fill with structure

   PolyLineFill.prototype = new google.maps.OverlayView();

    function PolyLineFill(poly, map, fill, stroke) {
     var bounds = new google.maps.LatLngBounds();
     for (var i = 0; i < poly.length; i++) {
         bounds.extend(poly[i]);
     }

     //initialize all properties.
     this.bounds_ = bounds;
     this.map_ = map;
     this.div_ = null;
     this.poly_ = poly;
     this.polysvg_ = null;
     this.fill_ = fill;
     this.stroke_ = stroke;

     // Explicitly call setMap on this overlay
     this.setMap(map);
 }

 PolyLineFill.prototype.onAdd = function () {
     // Create the DIV and set some basic attributes.
     var div = document.createElement('div');
     div.style.borderStyle = 'none';
     div.style.borderWidth = '0px';
     div.style.position = 'absolute';

     //createthe svg element
     var svgns = "http://www.w3.org/2000/svg";
     var svg = document.createElementNS(svgns, "svg");
     svg.setAttributeNS(null, "preserveAspectRatio", "xMidYMid meet");

     var def = document.createElementNS(svgns, "defs");

     //create the pattern fill 
     var pattern = document.createElementNS(svgns, "pattern");
     pattern.setAttributeNS(null, "id", "lineFill");
     pattern.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
     pattern.setAttributeNS(null, "patternTransform", "rotate(-45)");
     pattern.setAttributeNS(null, "height", "7");
     pattern.setAttributeNS(null, "width", "7");
     def.appendChild(pattern);

     var rect = document.createElementNS(svgns, "rect");
     rect.setAttributeNS(null, "id", "rectFill");
     rect.setAttributeNS(null, "fill", this.fill_ || "red");
     rect.setAttributeNS(null, "fill-opacity", "0.3");
     rect.setAttributeNS(null, "stroke", this.stroke_ || "#000");
     rect.setAttributeNS(null, "stroke-dasharray", "7,7");
     rect.setAttributeNS(null, "height", "7");
     rect.setAttributeNS(null, "width", "7");
     pattern.appendChild(rect);

     svg.appendChild(def);

     //add polygon to the div
     var p = document.createElementNS(svgns, "polygon");
     p.setAttributeNS(null, "fill", "url(#lineFill)");
     p.setAttributeNS(null, "stroke", "#000");
     p.setAttributeNS(null, "stroke-width", "1");
     //set a reference to this element;
     this.polysvg_ = p;
     svg.appendChild(p);

     div.appendChild(svg);

     // Set the overlay's div_ property to this DIV
     this.div_ = div;

     // We add an overlay to a map via one of the map's panes.
     // We'll add this overlay to the overlayLayer pane.
     var panes = this.getPanes();
     panes.overlayLayer.appendChild(div);
 }

 PolyLineFill.prototype.AdjustPoints = function () {
     //adjust the polygon points based on the projection.
     var proj = this.getProjection();
     var sw = proj.fromLatLngToDivPixel(this.bounds_.getSouthWest());
     var ne = proj.fromLatLngToDivPixel(this.bounds_.getNorthEast());

     var points = "";
     for (var i = 0; i < this.poly_.length; i++) {
         var point = proj.fromLatLngToDivPixel(this.poly_[i]);
         if (i == 0) {
             points += (point.x - sw.x) + ", " + (point.y - ne.y);
         } else {
             points += " " + (point.x - sw.x) + ", " + (point.y - ne.y);
         }
     }
     return points;
 }

 PolyLineFill.prototype.draw = function () {
     // Size and position the overlay. We use a southwest and northeast
     // position of the overlay to peg it to the correct position and size.
     // We need to retrieve the projection from this overlay to do this.
     var overlayProjection = this.getProjection();

     // Retrieve the southwest and northeast coordinates of this overlay
     // in latlngs and convert them to pixels coordinates.
     // We'll use these coordinates to resize the DIV.
     var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
     var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

     // Resize the image's DIV to fit the indicated dimensions.
     var div = this.div_;
     div.style.left = sw.x + 'px';
     div.style.top = ne.y + 'px';
     div.style.width = (ne.x - sw.x) + 'px';
     div.style.height = (sw.y - ne.y) + 'px';

     this.polysvg_.setAttributeNS(null, "points", this.AdjustPoints());
 }

 PolyLineFill.prototype.onRemove = function () {
     this.div_.parentNode.removeChild(this.div_);
     this.div_ = null;
 }

  window.BW = {};
  window.BW.PolyLineFill = PolyLineFill;






  // smoothZoom

  $('body').on("custom", function(event, param1, param2){
    if (param1 == 'location') {
      say('Smooth Zoom now!');
      //  center: new google.maps.LatLng( 16.404206195302862, -41.03952714093645),
      // zoom: 14,
      // enable later again
      map.panTo(new google.maps.LatLng(18.563703363952172, -72.35412427075822));
      smoothZoom(map, 15, map.getZoom());

      // say(pathCoords);



      // var overlay = new BW.PolyLineFill(taxiData, map, "red", "#000")
     //  var path = [
     // new google.maps.LatLng(41.983994270935625, -111.02783203125),
     // new google.maps.LatLng(42.00032514831621, -114.01611328125),
     // new google.maps.LatLng(36.96744946416931, -114.01611328125),
     // new google.maps.LatLng(37.00255267215955, -109.0283203125),
     // new google.maps.LatLng(40.97989806962013, -109.0283203125),
     // new google.maps.LatLng(41.0130657870063, -111.02783203125)];

     // GRID DRAWING _ NOT WORKING SO FAR
     //custom overlay created
     //BW.PolyLineFill(path, map, fillColor?, strokeColor?); 
     // var overlay = new BW.PolyLineFill(pathCoords, map, "red", "#000");


      // switch(param1) {
      //     case 'over':
      //         break;
      //     case 'out':
      //         break;
      //     case 'down':
      //         break;
      //     case 'up':
      //         map.setMapTypeId(google.maps.MapTypeId[mapType[3]]);
      //         map2.setMapTypeId(google.maps.MapTypeId[mapType[3]]);
      //                         updateGridStatus('white');
      //         break;
      //     default:{
      //     }
      // }
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

    // CALC RATIO
    // var GLOBE_WIDTH = 1920; // a constant in Google's map projection
    // var west = sw.lng();
    // var east = ne.lng();
    // var angle = east - west;
    // if (angle < 0) {
    //   angle += 360;
    // }
    // var zoom = Math.round(Math.log(pixelWidth * 360 / angle / GLOBE_WIDTH) / Math.LN2);


	// SYNC MAPS 
	google.maps.event.addListener(map, 'zoom_changed', function() {
	  	map2.setZoom(map.getZoom()-5);
           map2.setZoom(map.getZoom()-5);
           // mapRadio.setZoom(map.getZoom());
           // mapChemic.setZoom(map.getZoom());
           // google.maps.event.trigger(mapRadio, 'resize'); 
           // google.maps.event.trigger(mapChemic, 'resize'); 
	});
  

	google.maps.event.addListener(map, 'center_changed', function(event) {
         map2.setCenter(map.getCenter());
         // mapRadio.setCenter(map.getCenter());
         // mapChemic.setCenter(map.getCenter());
         latValue.innerHTML  = '<span>Lat:</span>' +  map.getCenter().lat().toFixed(6);
         lngValue.innerHTML = '<span>Lng:</span>' + map.getCenter().lng().toFixed(6);
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
        setTimeout(function(){map.setZoom(cnt)}, 500); // 80ms is what I found to work well on my system -- it might not work well on all systems
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
    latValue.style.color = '#333';
    lngValue.style.color = '#333';
  } else if(argument == 'white'){
    // animo
    // $('#grid_gray').animo({animation: "fadeOut", duration: 0.2});
    // $('#grid_white').animo({animation: "fadeIn", duration: 0.2});

    $('#grid_gray').css('display', 'none');
    $('#grid_white').css('display', 'block');
    latValue.style.color = '#FFF';
    lngValue.style.color = '#FFF';
  } else {
    
  };
};



   



// EVENT LISTENER SHOWING POSITION

//   google.maps.event.addListener(map,'mousemove',function(event) {
//     document.getElementById('latspan').innerHTML = event.latLng.lat()
//     document.getElementById('lngspan').innerHTML = event.latLng.lng()
//     document.getElementById('latlong').innerHTML = event.latLng.lat() + ', ' + event.latLng.lng()
//   }); 
// }


