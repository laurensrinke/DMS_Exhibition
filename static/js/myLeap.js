// BUGGY
// THERE IS A MISSTAKE ...

// Setup Leap loop with frame callback function
// var controllerOptions = {enableGestures: true};
// Leap.loop(controllerOptions, function(frame) {
// 	if (frame.gestures.length > 0) {
// 	  for (var i = 0; i < frame.gestures.length; i++) {
// 	    var gesture = frame.gestures[i];
// 	    if (gesture.direction[0] > 0) {
// 		  // swipe to the right
// 		  say("right");
// 		  $('#nav_b3').trigger( "custom", ["up", 0]);
// 		} else {
// 		  // swipe to the left
// 		  say("left");
// 		  $('#nav_b1').trigger( "custom", ["up", 0]);
// 		}
// 	  }
// 	}
// })

// Leap.loop({background: true}, {
//     hand: function(hand){
// 		output.innerHTML = hand.pinchStrength.toPrecision(2);
// 		progress.style.width = hand.pinchStrength * 100 + '%';
// 	}
// });

var controller = Leap.loop(function(frame){
    if(frame.hands.length > 0)
    {
        var hand = frame.hands[0];
        var position = hand.palmPosition;
        var velocity = hand.palmVelocity;
        var direction = hand.direction;

        console.log(position[1]);
        if (position[1] < 100) {
        	say('zoom in');
        	$('body').trigger('custom', ['zoomin', 0]);
        } if (position[1] > 150) {
        	say('zoom out');
        	$('body').trigger('custom', ['zoomout', 0]);
        } else{
        	// say('nothing');
        };
        $('#leap_info').css('width', position[1] + 'px');
        // 70 / 300
    }
});


/*
$('body').on("custom", function(event, param1, param2){
        if (param1 == 'zoomin') {
          map.setZoom(map.getZoom() + 1);
        } else  if (param1 == 'zoomout') {
          map.setZoom(map.getZoom() - 1);
        }; 
    };




*/