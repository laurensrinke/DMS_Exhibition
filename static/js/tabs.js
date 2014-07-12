(function(b){

/*
Author:  IgJo
Created: 24.06.2014
Version: c0.1
*/


// IDEA
// ...coming soon. 
// ----------------------------------------------------

// 2 DO
// Make it simple as possible. No ugly class-shit.


// Questions
// ----------------------------------------------------
// Q1: Button_Act Füllfarbe auf 100% lassen?


Tabs = function(img_def, img_act, img_hover)
{
	// Variables /////////////////////////////////
	var state = 0; // 0, 1, 2
	var title = [
	    "Missionplanner",
	    "Live View",
	    "Post Editing"
	];

	var buttons = [
	   ['Missionplanner', 1, ''],
	   ['Live View',      0, ''],
	   ['Post Editing',   0, ''],
	];


	// Buttons
	var nav_button_1, nav_button_2, nav_button_3; 
	var i_container = 0;
	var y_fix = 15;
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
		260, y_fix, false, 'nav_btn');

		buttons[1][2] = new Button(
			'nav_b2', 
			title[1], 
			'img/tabs/tabs_def.fw.png', 
			'img/tabs/tabs_hover.fw.png', 
			'img/tabs/tabs_act.fw.png', 
		725, y_fix, false, 'nav_btn');

		buttons[2][2] = new Button(
			'nav_b3', 
			title[2], 
			'img/tabs/tabs_def.fw.png', 
			'img/tabs/tabs_hover.fw.png', 
			'img/tabs/tabs_act.fw.png', 
		1189, y_fix, false, 'nav_btn');

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
			      	hideElements();
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
			      	hideElements();
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
			      	hideElements();
			        break;
			    default:{
			        alert('unknow event! nav_b3');
			    }
			}
		});

		// Trigger click on tab_0
		 $('#nav_b1').trigger( "custom", ["up", 0]);

		// return object
		// return _id;
	}

	function updateStat (argument) {
		// set new status variable
		state = parseInt(argument);
		
		// NO IDEAD WHAT THIS SHIT IS DOING
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

	// check if status changed?
	// Do I have to remove all elements?
	// add all my elements
	// remove all my elements

	function hideElements (argument) {
		switch(state) {
			    case 0:
				$('#tab_0' ).css('display', 'inline');
				$('#tab_1').css('display', 'none');
				$('#tab_2').css('display', 'none');
				$('#tab_v_0' ).css('display', 'inline');
				$('#tab_v_1').css('display', 'none');
				$('#tab_v_2').css('display', 'none');

				$('#mapRadio').hide();
				$('#mapChemic').hide();
			        break;
			    case 1:
			    	$('#tab_0').css('display', 'none');
				$('#tab_1').css('display', 'inline');
				$('#tab_2').css('display', 'none');
				$('#tab_v_0').css('display', 'none');
				$('#tab_v_1').css('display', 'inline');
				$('#tab_v_2').css('display', 'none');
				$('#mapRadio').show();
				$('#mapChemic').show();
			        break;
			    case 2:
			      	$('#tab_0').css('display', 'none');
				$('#tab_1').css('display', 'none');
				$('#tab_2').css('display', 'inline');
				$('#tab_v_0').css('display', 'none');
				$('#tab_v_1').css('display', 'none');
				$('#tab_v_2').css('display', 'inline');
				$('#mapRadio').show();
				$('#mapChemic').show();
			        break;
			    default:{
			        alert('!');
			    }
			}
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