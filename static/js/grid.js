(function(b){

/*
Author:  IgJo
Created: 26.06.2014
Version: c0.1
*/

/*
Diese Funktion soll das Grid aufzeichnen

*/

Grid = function(id, myClass, x, y, width, height)
{
	// Variables /////////////////////////////////
	var i_container = 0;
	var status = 0;
	var myLength = 0;

	var button;
	var child;

	// var unitArray = [
	//    [text_1, 1, ''], // default active
	//    [text_2, 0, ''],
	//    [text_3, 0, ''],
	// ];

	// functions /////////////////////////////////
	function create()
	{
		 
		var drawArea = d3.select("body")
		    .append("svg:svg")
		    .attr("width", width)    
		    .attr("height", height)
		    .style("position", 'absolute')
			.style("left", x +'px')
			.style("top", y +'px')
			// .attr('fill', 'red')
			// .style('background', 'rgba(5, 5, 5, 0.5)');
			// .attr('background', 'rgba(5, 5, 5, 0.5)');
			// trabnsistion to obacjit y 00 -- 0.4
			// .attr('fill', 'rgba(250,0,0, 0.5)');
			// .style('fill', 'rgba(0, 0, 0, 0.8)')

		// append rect
		drawArea.append('rect')
			.attr("x", 0)
			.attr("y", 0)
			.attr("width", width)
			.attr("height", height)
			.style("opacity", 0)
			// .attr('fill', '#efefef')
			.attr('fill', '#666')
			.transition()
			.delay(400)
			.duration(2000)
			.style("opacity", 0.8)
			// .style('fill', 'rgba(5, 5, 5, 0.5)')


		// append grid
		var lineData = [ { "x": 0,   "y": 0},  { "x": 400,  "y": 0}];

		var lineFunction = d3.svg.line()
			.x(function(d) { return d.x; })
			.y(function(d) { return d.y; })
			.interpolate("linear")

		lineData = [ { "x": 0,   "y": 0},  { "x": 400,  "y": 0}];
		for (var i = 0; i < height; i++) {
			drawArea.append("line")
				.attr("x1", 0)
				.attr("y1", i * 2 + 0.5)
				.attr("x2", 0)
				.attr("y2", i * 2 + 0.5)
				.attr("stroke", "#222")
				.attr("stroke-width", 1)
				.style("stroke-dasharray", ("1, 1")) 
				.attr("fill", "none")
				.transition()
				.delay(1200 + (3*i*Math.random()))
				.duration(200)
				.attr('x2', width)
				.ease("quad")
		};

		

	
		// // return object
		// return i_container;
	}

	function switchUnit () {
		// say($('#unit_' + id).find('.btn_text').text(':)'));
		if (status <= myLength-2) {
			status++;
		} else{
			status = 0;
		};
		$('#unit_' + id).find('.btn_text').text(unitArray[status][0]);
	}

	function updateStatus () {
	}


	// ------------------------------------------------------------
	
	/* public functions */
	var exposed = {
		create: create,
		updateStatus: updateStatus,
	}
	return exposed;
}
})(window);