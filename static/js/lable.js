(function(b){

// WILL BE FINSIED IF ENOUGHT TIME IS


// IDEA
// ----------------------------------------------------
// This is a simple lable class. You just define title 
// position. You also can set animate it. (Will be 
	// included later).

// Questions
// ----------------------------------------------------

Lable = function(x, y, text)
{
	// Variables /////////////////////////////////

	// Buttons
	var container = 0;
	var text_container = '';
	var line = '';
	// var nav_text_1, nav_text_2, nav_text_3; 

	// functions /////////////////////////////////
	function create()
	{

		// create container
		// container = document.createElement('canvas');
		// container.style.position = "absolute";
		// container.style.left = x;
		// container.style.top = y;
		// container.style.width = "220px";
		
		
		
		// // prpeper 2d stuff
		// text_container = container.getContext('2d');

		// // add text
		// text_container.font = "400 14px Roboto";
		// text_container.fillStyle = '#FFF'
		// text_container.fillText(text,10,50);



		// SVG ////////////////////////////////////////////////////////

		// container = document.createElement('svg');
		// container.style.position = "absolute";
		// container.style.left = "23px";
		// container.style.top = "84px";
		// container.style.width = "300px";
		// container.style.height = "30px";

		// // text element
		// text_container = document.createElement('text');
		// text_container.innerHTML = text;
		// text_container.style.color = '#FFF';
		// text_container.style.fontWeight = 100;
		// text_container.style.fontSize = '14px';

		// // line element
		// // text_container = document.createElement('line');
		// // container.appendChild("line")
  // //                        .attr("x1", 5)
  // //                        .attr("y1", 5)
  // //                        .attr("x2", 50)
  // //                        .attr("y2", 50);


		// // add elements to container
		// container.appendChild(text_container);
		// container.appendChild(line);

		




		// D3.JS
		// creat container
		container = document.createElement('svg');
		container.style.width = 400;
		container.style.width = 300;
		document.body.appendChild(container);
		var svg_container = d3.select(container).append("line")

        svg_container.append('text')
       		.text(text)
        	.attr("width", "200px")
        	.attr("height", "200px")
        	.style('color', '#FFF')
        	.attr("top", "200px")
        	.attr("left", "200px");
 
        svg_container.append("line")
			.attr("x1", 5)
			.attr("y1", 5)
			.attr("x2", 50)
			.attr("y2", 50)
			.style("stroke", "steelblue")
			.style("fill", "#F00");
 
  //       path.append("text")
  //           .text(text)
  //           .attr("position", 'absolute')
  //           .style("position", "absolute")
  //           .style.top = '200px';

        // (1) Specifying path data the SVG way
   //      svgcanvas.append("svg:path")
   //          .attr("d","M 0 60 L 50 110 L 90 70 L 140 100")
   //          .style("stroke-width", 2)
   //          .style("stroke", "steelblue")
   //          .style("fill", "none");







			// .append("text")
			// .text(text)
			// .style("position", "absolute")
			// .style("left", "24px")
			// .style("top", "90px")
			// .style('color', '#FFF')
			// .style('font-size', '14px')
			// .attr("width", 300)
   //          .attr("height", 25);

   //          line = d3.select("body").append("svg:path")
   //          .attr("d","M 0 60 L 50 110 L 90 70 L 140 100")
   //          .style("stroke-width", 2)
   //          .style("stroke", "steelblue")
   //          .style("fill", "none");

   		// var divElem = d3.select("body");
     //    var svgcanvas = divElem.append("svg:svg")
     //        .attr("width", 200)
     //        .attr("height", 200);
 
     //    svgcanvas.append("svg:path")
     //        .attr("d","M 0 60 L 50 110 L 90 70 L 140 100")
     //        .style("stroke-width", 2)
     //        .style("stroke", "steelblue")
     //        .style("fill", "none");

     //    svgcanvas.append("svg:text")
     //        .attr("d","M 0 30 L 60 120 L 190 20 L 100 10")
     //        .style("stroke-width", 2)
     //        .style("stroke", "steelblue")
     //        .style("fill", "none");



		// text_container = document.createElement('text');
		// text_container.innerHTML = text;
		// text_container.style.color = '#FFF';
		// text_container.style.fontWeight = 100;
		// text_container.style.fontSize = '14px';

		// container.append(text_container);
// 

		// <text x="20" y="20" font-family="sans-serif" font-size="20px" fill="red">Hello!</text>
		


		// var ctx=container.getContext("2d");
		// ctx.strokeStyle="#FF0000";
		// ctx.strokeRect(x,y,213,0);
		// ctx.beginPath();
		// ctx.moveTo(x,y);
		// ctx.lineTo(x+213,y);
		// ctx.stroke();

		// create line element
		// svg = document.createElement('svg');
		// svg.clssName = 'line_svg';
		// svg.style.width = '213px';
		// svg.style.height = '1px';


		// line object
		// line = document.createElement('line');

		// svg.appendChild(line);

		// var lineWidth = 420, lineHeight = 20;
		
		// add element to webside
		// document.body.appendChild(container);

		// return object
		// return _id;
	}

	// ------------------------------------------------------------
	
	/* public functions *///////////////////////////////////////////////////////
	var exposed = {
		create: create,
	}
	return exposed;
}
})(window);
