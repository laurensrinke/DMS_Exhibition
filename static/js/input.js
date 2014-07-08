(function(b){

/*
Author:  IgJo
Created: 26.06.2014
Version: c0.1
*/

/*
- 3 Buttons zeichnen
- An aus detecten
- Transistions gestalten

Wie macht man es mit den 3 oder 4? 
	Entweder man gibt es auch an, oder es wird überprüft ob die letzte Variable leer ist!
	
*/

Input = function(id, myClass, x, y, description, value, factor, unit_1, unit_2, unit_3)
{
	// Variables /////////////////////////////////
	var container;
	var text_description;
	var text_value;
	var text_input;
	var status = 0;

	var button;
	var child;

	var unit;

	// functions /////////////////////////////////
	function create()
	{
		// create container
		container = document.createElement('article');

		// place container
		container.style.position = 'absolute';
		container.style.left = x + 'px';
		container.style.top  = y + 'px';

		// create description text
		text_description = document.createElement('section');
		text_description.className += 'text_description';
		text_description.style.position = 'absolute';
		text_description.style.left = '10px';
		text_description.style.top  = '4px';
		text_description.innerHTML = description;

		// create value text
		text_value = document.createElement('section');
		text_value.className += 'text_value';
		text_value.style.position = 'absolute';
		text_value.style.left = '90px';
		text_value.style.top  = '4px';
		text_value.innerHTML = value;

		// create text input field
		text_input = document.createElement('input');
		text_input.className += 'text_input';
		text_input.style.position = 'absolute';
		text_input.style.left = '128px';
		text_input.style.top  = '1px';
		text_input.style.color  = '#FFF';
		text_input.style.fontWeight  = "800";
		text_input.style.fontFamily  = "Roboto-Bold";
		text_input.type = 'text';
		text_input.value = '800';
		text_input.style.width = "35px";

		// create unit object
		unit = new Unit(id + '_r_1', 'unit', 175, 0, unit_1, unit_2, unit_3);


		// add trigger for unit swap
		$(container).find('#unit_' + id + '_r_1').on( "custom", function(event, param1, param2){
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			      	updateValue();
			        break;
			    default:{
			        alert('unknow event! unit button' + i);
			    }
			}
		});




		// create input field background

		// add element
		var drawArea = d3.select(document.createElement("svg"));
		var lineContainer = drawArea.append("line");

		// modifiy
		drawArea = d3.select("body")
		    .append("svg:svg")
		    .attr("width", 100)    
		    .attr("height", 25)
		    .style("position", 'absolute')
			.style("left", '125px')
			.style("top", '0px')

		for (var i = 0; i < 14; i++) {
			drawArea.append("line")
				.attr("x1", 0)
				.attr("y1", i * 2 + 0.5)
				.attr("x2", 49)
				.attr("y2", i * 2 + 0.5)
				// .attr("stroke", "#646464")
				.attr("stroke", "#777777")
				// .attr("stroke", "#FFFFFF")
				.attr("stroke-width", 1)
				.style("stroke-dasharray", ("1, 1")) 
				.attr("fill", "none")
		};

		// append brackets
		var bracked_1 = [ 
			{ "x": 6, "y": 0},  
			{ "x": 0, "y": 0},
			{ "x": 0, "y": 25},
			{ "x": 6, "y": 25}
			];

		var bracked_2 = [ 
			{ "x": 93, "y": 0.5},  
			{ "x": 98.5, "y": 0.5},
			{ "x": 98.5, "y": 24.5},
			{ "x": 93, "y": 24.5}
			];

		// lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
		// 				 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
		// 				 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

		var lineFunction = d3.svg.line()
			.x(function(d) { return d.x; })
			.y(function(d) { return d.y; })
			.interpolate("linear")


		drawArea.append("path")
				.attr("d", lineFunction(bracked_1))
				.attr("stroke", "#FFFFFF")
				.attr("stroke-width", 2)
				// .style("stroke-dasharray", ("1, 1")) 
				.attr("fill", "none");

		drawArea.append("path")
				.attr("d", lineFunction(bracked_2))
				.attr("stroke", "#FFFFFF")
				.attr("stroke-width", 1)
				// .style("stroke-dasharray", ("1, 1")) 
				.attr("fill", "none");


		container.appendChild(drawArea.node());

		// add description, value & unit to container
		container.appendChild(text_description);
		// container.appendChild(text_value);
		container.appendChild(text_input);
		container.appendChild(unit.create());



		// modify elements
		// drawArea
		// 	.attr("width", "230px")
		// 	.attr("height", "19px")
		// 	.style("position", 'absolute')
		// 	.style("left", x +'px')
		// 	.style("top", y +'px');

		// lineContainer
		// 	.attr("x1", 0)
		// 	.attr("y1", 0.5)
		// 	.attr("x2", 100)
		// 	.attr("y2", 0.5)
		// 	.attr("fill-width", 1.5)
		// 	.attr("stroke", "#FFF")
		// 	.attr("stroke-width", 2)
		// 	.attr("fill", "#FFF")




			// .attr('opacity', 0)
			// .transition()
			// .delay(100)
			// .duration(999)
			// .ease("cubic")
			// .attr("x2", )
			// .attr('opacity', 1);

		// var svgContainer = d3.select(document.createElement("section"))
		// 	.append('svg')
		// 		.attr('width', 200)
		// 		.attr('height', 30)

		// // append grid
		// var lineData = [ { "x": 0,   "y": 0},  { "x": 400,  "y": 0}];

		// var lineFunction = d3.svg.line()
		// 	.x(function(d) { return d.x; })
		// 	.y(function(d) { return d.y; })
		// 	.interpolate("linear")

		// lineData = [ { "x": 0,   "y": 0},  { "x": 10,  "y": 0}];
		// line.append("line")
		// 	.attr("x1", 0)
		// 	.attr("y1", 0)
		// 	.attr("x2", 20)
		// 	.attr("y2", 0)
		// 	.attr("stroke", "#FFFFFF")
		// 	.attr("stroke-width", 2)
		// 	.attr("fill", "none")

		// say(svgContainer.node());

		// container.appendChild(svgContainer.node());




		// for (var i = 0; i < 11; i++) {
		// 	svgContainer.append("line")
		// 		.attr("x1", 0)
		// 		.attr("y1", i * 2 + 0.5)
		// 		.attr("x2", 0)
		// 		.attr("y2", i * 2 + 0.5)
		// 		.attr("stroke", "#222")
		// 		.attr("stroke-width", 1)
		// 		.style("stroke-dasharray", ("1, 1")) 
		// 		.attr("fill", "none")
		// 		.transition()
		// 		.delay(1200 + (3*i*Math.random()))
		// 		.duration(200)
		// 		.attr('x2', 40)
		// 		.ease("quad")
		// };

		// retunr obejct
		return container;
	}

	function updateValue () {
		say('update');
		if (status == 0) {
			status = 1;
			setValue(getValue() * factor);
		} else{
			status = 0;
			setValue(getValue() / factor);
		};

	}

	function setValue(argument) {
		text_value.innerHTML = parseFloat(argument);
	}

	function getValue(argument) {
		return parseFloat(text_value.innerHTML);
	}

	// ------------------------------------------------------------

	/* public functions */
	var exposed = {
		create: create,
		updateValue: updateValue,
	}
	return exposed;
}
})(window);