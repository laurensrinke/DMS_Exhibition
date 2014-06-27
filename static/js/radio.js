(function(b){

/*
Author:  IgJo
Created: 26.06.2014
Version: c0.1
*/


// IDEA
// ----------------------------------------------------
// 

// Questions
// ----------------------------------------------------


Radio = function(x, y, text_1, text_2, text_3, text_4)
{
	// Variables /////////////////////////////////

	// Buttons
	var i_container = 0;
	// var nav_text_1, nav_text_2, nav_text_3; 

	var radioArray = [
	   [text_1, 1, ''], // default active one
	   [text_2, 0, ''],
	   [text_3, 0, ''],
	   [text_4, 0, ''],
	];

	// functions /////////////////////////////////
	function create()
	{

		// <input type="radio" name="..." checked />

		// buttons[0][2] = new Button(
		// 	'nav_b1', 
		// 	title[0], 
		// 	'img/tabs/tabs_def.fw.png', 
		// 	'img/tabs/tabs_hover.fw.png', 
		// 	'img/tabs/tabs_act.fw.png', 
		// 24, 11, false, 'nav_btn');



		// create container
		container = document.createElement('canvas');
		container.style.width = "213px";
		container.style.height = "27px";
		container.style.position = "absolute";
		container.style.top = "20px";
		container.style.left = "20px";


		var ctx=container.getContext("2d");
		// ctx.strokeStyle="#FF0000";
		// ctx.strokeRect(x,y,213,0);
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x+213,y);
		ctx.stroke();

		// create line element
		// svg = document.createElement('svg');
		// svg.clssName = 'line_svg';
		// svg.style.width = '213px';
		// svg.style.height = '1px';


		// line object
		// line = document.createElement('line');

		// svg.appendChild(line);

		var lineWidth = 420, lineHeight = 20;
		
		// add element to webside
		document.body.appendChild(container);

		// return object
		// return _id;
	}

	function uncheck(argument) {
		// body...
	}

	function check (argument) {
		// body...
	}

	function hover (argument) {
		// body...
	}

	function out (argument) {
		// body...
	}

	function down (argument) {
		// body...
	}

	function up (argument) {
		// body...
	}



	function updateState (argument) {
		// body...
	}

	function setState (argument) {
		// body...
	}

	function setActive (argument) {
		// body...
	}
	
	

	// ------------------------------------------------------------
	// never touch a running system
	
	/* public functions */
	var exposed = {
		create: create,
	}
	return exposed;
}
})(window);