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

	var svgContainer = d3.select(document.createElement("svg"));
	var lineContainer = svgContainer.append("line");
	var textContainer = svgContainer.append("text");  

	// var nav_text_1, nav_text_2, nav_text_3; 

	// functions /////////////////////////////////
	function create()
	{

		svgContainer
			.attr("width", "230px")
			.attr("height", "19px")
			.style("position", 'absolute')
			.style("left", x +'px')
			.style("top", y +'px');

		lineContainer
			.attr("x1", 11)
			.attr("y1", 16.5)
			.attr("x2", 100)
			.attr("y2", 16.5)
			.attr("fill-width", 1.5)
			.attr("stroke", "#FFF")
			.attr("fill", "#FFF")
			// .attr('opacity', 0)
			.transition()
			.delay(100)
			.duration(myDuration)
			.ease("cubic")
			.attr("x2", 225)
			.attr('opacity', 1);

		textContainer
			.text('')    
			.attr("x", 10)    
			.attr("width", 200)    
			.attr("y", 10)  
			.style("fill","#FFF")
			.style("font-family","400 14px Roboto")
			.attr('font-size', 14);

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

		return svgContainer.node();
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
