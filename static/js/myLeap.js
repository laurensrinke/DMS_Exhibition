// BUGGY

// THERE IS A MISSTAKE ...

// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};
Leap.loop(controllerOptions, function(frame) {
		if (frame.gestures.length > 0) {
		  for (var i = 0; i < frame.gestures.length; i++) {
		    var gesture = frame.gestures[i];
		    if (gesture.direction[0] > 0) {
			  // swipe to the right
			  say("right");
			  $('#nav_b3').trigger( "custom", ["up", 0]);
			} else {
			  // swipe to the left
			  say("left");
			  $('#nav_b1').trigger( "custom", ["up", 0]);
			}
		  }
		}
})