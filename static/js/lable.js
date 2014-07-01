(function(b){

// Warning!


// IDEA
// ----------------------------------------------------
// I have no Idear how it works. I tryed to build it in a good way but in the end
// it is a mess. D3 is kind a bitch and I have no fucking clue what is going on.

// Dnt touch it. It will explode.  



Lable = function(x, y, text, myDelay, myDuration)
{
	// Variables /////////////////////////////////
	// Buttons
	var container = document.createElement("div");
	var text_description;
	var myLine = d3.select(document.createElement("article"));
	var myTextContainer = d3.select(document.createElement("article"));
	var myText = '';
	var theLine = document.createElement('path');
	say ('iam the fuckcing line')
	say (theLine);

	// var textContainer = myLine.append("section");

	// var nav_text_1, nav_text_2, nav_text_3; 

	// functions /////////////////////////////////
	function create()
	{
		container.style.position = 'absolute';
		container.style.top = y +'px';
		container.style.left = x + 'px';
		container.style.width = '213px';
		container.style.height = '30px';
		// container.style('height', '30px');
		// var myLine = d3.select(document.createElement("section"));
		// myLine.append('svg')
		// 	.attr('width', 213)
		// 	.attr('width', 213)
		// 	.attr('height', 30)
		// 	.style('position', 'absolute')
		// 	.style('top', '0')
		// 	.style('left', '0')

		myLine.append("svg")
			.style('width', "213px")
			.style('height', "12px")
			
		

		// // append brackets
		var start = [ 
			{ "x": 0, "y": .5},  
			{ "x": 0, "y": .5},
			];

		var end = [ 
			{ "x": 0,   "y": .5},  
			{ "x": 213, "y": .5},
			];

		var lineFunction = d3.svg.line()
			.x(function(d) { return d.x; })
			.y(function(d) { return d.y; })
			.interpolate("linear");

		myLine.append("svg").append("path")
			.style('position', 'absolute')
			.style('top', '10px')
			.style('left', '10px')
			.attr("d", lineFunction(start))
			.attr("stroke", "#FFF")
			.attr("stroke-width", 1)
			.attr("fill", "none")
			.transition()
			.duration(myDuration)
			.delay(myDelay)
			.attr('d', lineFunction(end))
			.ease('quad')

		// add text
		myTextContainer
			.text('')    
			.attr("x", 10)    
			.attr("y", 0)
			.attr("width", 200)    
			.style('position', 'absolute')
			.style('top', '0px')
			.style('left', '0px')
			.style("color","#FFF")
			.style("font-family","400 14px Roboto")
			.attr('font-size', 14);

		for (var i = 0; i < text.length; i++) {
			myText += text[i];
			myTextContainer
				.transition()
				.delay(myDelay/2+ 1*i/20)
				.duration(myDuration)
				.attr('font-size', 14)
				.text(myText)
		};

		container.appendChild(myTextContainer.node());
		container.appendChild(myLine.node());

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
