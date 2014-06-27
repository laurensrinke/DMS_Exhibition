(function(b){

// WILL BE FINSIED IF ENOUGHT TIME IS


// IDEA
// ----------------------------------------------------
// This is a simple lable class. You just define title 
// position. You also can set animate it. (Will be 
	// included later).

// Questions
// ----------------------------------------------------

Lable = function(x, y, text, myDelay, myDuration)
{
	// Variables /////////////////////////////////

	// Buttons
	var container = 0;
	var text_container = '';
	var line = '';


	// SVG objects
	var svgContainer = d3.select("body").append("svg");
	var lineContainer = svgContainer.append("line");
	var textContainer = svgContainer.append("text");  

	// var nav_text_1, nav_text_2, nav_text_3; 

	// functions /////////////////////////////////
	function create()
	{

		svgContainer
			.attr("width", 255)
			.attr("height", 19)
			.style("position", 'absolute')
			.style("left", x +'px')
			.style("top", y +'px');

		lineContainer
			.attr("x1", 11)
			.attr("y1", 16.5)
			.attr("x2", 11)
			.attr("y2", 16.5)
			.attr("fill-width", 0.5)
			.attr("stroke", "#FFF")
			.attr('opacity', 0)

		textContainer
			.text('')    
			.attr("x", 10)    
			.attr("y", 10)    
			.style("fill","#FFF")
			.style("font-family","400 14px Roboto")
			.attr('font-size', 14);

		// end of transition
		lineContainer
			.transition()
			.delay(100)
			.duration(myDuration)
			.ease("cubic")
			.attr("x2", 225)
			.attr('font-size', 14)
			.attr('opacity', 1);

		// textContainer.transition()
		// 	.delay(myDelay)
		// 	.duration(myDuration)
		// 	.ease("cubic")
		// 	.attr('font-size', 14)
		// 	.attr('opacity', 1)
		// 	.text(text[0]+text[1])

		var myText = '';

		for (var i = 0; i < text.length; i++) {
			myText += text[i];
			textContainer.transition()
				.delay(myDelay*i/20)
				.duration(myDuration)
				.ease("cubic")
				.attr('font-size', 14)
				.attr('opacity', 1)
				.text(myText)
		};
			

			// for (var i = 0; i < text.length; i++) {
			// 	lineContainer.transition()
			// 		.delay(400)
			// 		.tween(say('hey'))
			// 	// myText = '';
			// 	// setTimeout(function function_name(i) {
			// 	// 	myText += text[i]
			// 	// 	say(myText);	
			// 	// }, i*100);
			// };

		// textContainer.transition()
		// 	.dely(500)
		// 	.each(text.length, function(){
		// 		myText += text
		// 	})

		// 	.delay(750)
  //   		.each("start", function() { d3.select(this).style("color", "green"); })
  //   		.style("color", "red");

		// textContainer
		// 	.transition()
		// 	.delay(myDelay)
		// 	.duration(myDuration)
		// 	.ease("cubic")
		// 	.attr('font-size', 14)
		// 	.attr('opacity', 1);
		// var myVar
		// var myText
		// myVar = setInterval(function() {
		// 	myText += text[i]
		// 	lineContainer
		// 		.text(myText)
			
		// for (var i = 0; i < text.length; i++) {
		// 	say('hey ' + i);
		// };
	 //    }, 1000);

		


		// textContainer
		// 	.transition()
		//     .duration(3000)
		//         .tween("text", function(d) {
		//             var i = d3.interpolate(this.textContent, d),
		//                 prec = (d + "").split("."),
		//                 round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

		//             return function(t) {
		//                 this.textContent = Math.round(i(t) * round) / round;
		//             };
		//         });

		// return object
		// return _id;
	}

	// animate line
	function animate (argument) {
		
	}

	// ------------------------------------------------------------
	
	/* public functions *///////////////////////////////////////////////////////
	var exposed = {
		create: create,
		animate: animate,
	}
	return exposed;
}
})(window);
