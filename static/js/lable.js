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
	var container = document.createElement('article');
	var text_container = document.createElement('section');
	var line = '';
	var myText = '';

	var drawArea = d3.select(document.createElement("svg"));
	var textContainer = drawArea.append("section");
	var textContainer = drawArea.append("path");

	// var nav_text_1, nav_text_2, nav_text_3; 

	// functions /////////////////////////////////
	function create()
	{
		container.style.position = 'absolute';
		container.style.left = x + 'px';
		container.style.top  = y + 'px';

		// svgContainer
		// 	.attr("width", "230px")
		// 	.attr("height", "19px")
		// 	.style("position", 'absolute')
		// 	.style("left", x +'px')
		// 	.style("top", y +'px');

		// lineContainer
		// 	.attr("x1", 11)
		// 	.attr("y1", 16.5)
		// 	.attr("x2", 100)
		// 	.attr("y2", 16.5)
		// 	.attr("fill-width", 1.5)
		// 	.attr("stroke", "#FFF")
		// 	.attr("fill", "#FFF")
		// 	// .attr('opacity', 0)
		// 	.transition()
		// 	.delay(100)
		// 	.duration(myDuration)
		// 	.ease("cubic")
		// 	.attr("x2", 225)
		// 	.attr('opacity', 1);

		textContainer
			.text('')    
			.attr("x", 10)    
			.attr("width", 200)    
			.attr("y", 0)  
			.style("color","#FFF")
			.style("font-family","400 14px Roboto")
			.attr('font-size', 14);

		for (var i = 0; i < text.length; i++) {
			myText += text[i];
			textContainer
				.transition()
				.delay(myDelay*i/20)
				.duration(myDuration)
				.attr('font-size', 14)
				.text(myText)
		};

		// new
	

		// modifiy
		drawArea
		    .append("svg:svg")
		    .attr("width", "213px")    
		    .attr("height", "40px")
		    .style("position", 'absolute')
			.style("left", '0px')
			.style("top", '0px')

		// append brackets
		var start = [ 
			{ "x": 0, "y": 16.5},  
			{ "x": 0, "y": 16.5},
			];

		var end = [ 
			{ "x": 0, "y": 16.5},  
			{ "x": 213, "y": 16.5},
			];

		var lineFunction = d3.svg.line()
			.x(function(d) { return d.x; })
			.y(function(d) { return d.y; })
			.interpolate("linear")


		drawArea.append("path")
				.attr("d", lineFunction(start))
				.attr("stroke", "#FFFFFF")
				.attr("stroke-width", 4)
				// .style("stroke-dasharray", ("1, 1")) 
				.attr("fill", "none")
				.transition()
				.duration(1000)
				.delay(3500)
				.attr('d', lineFunction(end))
				.ease('quad')

		// drawArea.append("path")
		// 		.attr("d", lineFunction(bracked_2))
		// 		.attr("stroke", "#FFFFFF")
		// 		.attr("stroke-width", 1)
		// 		// .style("stroke-dasharray", ("1, 1")) 
		// 		.attr("fill", "none");

		container.appendChild(drawArea.node());
		// container.appendChild(textContainer);

		return container;
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
