(function(b){

/*
Author:  IgJo
Created: 26.06.2014
Version: c0.1
*/


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
	var nav_button_1, nav_button_2, nav_button_3; 
	var i_container = 0;
	// var nav_text_1, nav_text_2, nav_text_3; 
	

	// functions /////////////////////////////////
	function create()
	{
		// create container
		// i_container = document.createElement('nav');

		// // add buttons
		buttons[0][2] = new Button(
			'nav_b1', 
			title[0], 
			'img/tabs/tabs_def.fw.png', 
			'img/tabs/tabs_hover.fw.png', 
			'img/tabs/tabs_act.fw.png', 
		24, 11, false, 'nav_btn');

		buttons[1][2] = new Button(
			'nav_b2', 
			title[1], 
			'img/tabs/tabs_def.fw.png', 
			'img/tabs/tabs_hover.fw.png', 
			'img/tabs/tabs_act.fw.png', 
		675, 11, false, 'nav_btn');

		buttons[2][2] = new Button(
			'nav_b3', 
			title[2], 
			'img/tabs/tabs_def.fw.png', 
			'img/tabs/tabs_hover.fw.png', 
			'img/tabs/tabs_act.fw.png', 
		1326, 11, false, 'nav_btn');

		// create buttons
		for (var i = 0; i < buttons.length; i++) {
			buttons[i][2].create();
		};

		// set button one active
		buttons[0][2].setActive();

	
		// waiting for Trigger
		$('#nav_b1').on( "custom", function( event, param1) {
			// do sth.
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			      	updateStat(0);
			        break;
			    default:{
			        alert('unknow event! nav_b1');
			    }
			}
		});

		$('#nav_b2').on( "custom", function( event, param1) {
			// do sth.
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			      	updateStat(1);
			        break;
			    default:{
			        alert('unknow event! nav_b2');
			    }
			}
		});

		$('#nav_b3').on( "custom", function( event, param1) {
			// do sth.
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			      	updateStat(2);
			        break;
			    default:{
			        alert('unknow event! nav_b3');
			    }
			}
		});

		// return object
		// return _id;
	}

	function updateStat (argument) {
		// set new status variable
		state = parseInt(argument);
		
		for (var i = 0; i < buttons.length; i++) {
			// set all buttons inavtive
			buttons[i][1] = 0;
			// set active Button inactive
			buttons[state][1] = 1;
			// update button status - send message to buttons
			if (buttons[i][1] == 0) {
				buttons[i][2].setInactive();
			} else if (buttons[i][1] == 1) {
				buttons[i][2].setActive();
			} else {
				alert('Congrats - You system is pregnant!');
			}
		};
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