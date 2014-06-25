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
	var state; // 0, 1, 2
	var title = [
	    "Missionplanner",
	    "Live View",
	    "Post Editing"
	];


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
		nav_button_1 = new Button(
			'nav_b1', 
			title[0], 
			'img/tabs/tabs_def.fw.png', 
			'img/tabs/tabs_hover.fw.png', 
			'img/tabs/tabs_act.fw.png', 
		24, 11, false, 'nav_btn');

		console.log(nav_button_1);

		nav_button_2 = new Button(
			'nav_b2', 
			title[1], 
			'img/tabs/tabs_def.fw.png', 
			'img/tabs/tabs_hover.fw.png', 
			'img/tabs/tabs_act.fw.png', 
		675, 11, false, 'nav_btn');

		nav_button_3 = new Button(
			'nav_b3', 
			title[2], 
			'img/tabs/tabs_def.fw.png', 
			'img/tabs/tabs_hover.fw.png', 
			'img/tabs/tabs_act.fw.png', 
		1326, 11, false, 'nav_btn');

		nav_button_1.create();
		nav_button_2.create();
		nav_button_3.create();

		// // // add elements together
		// i_container.appendChild(nav_button_1);
		// i_container.appendChild(nav_button_2);
		// i_container.appendChild(nav_button_3);

		// // i_container.appendChild(nav_text_1);
		// // i_container.appendChild(nav_text_2);
		// // i_container.appendChild(nav_text_3);

		// // add object to page
		// document.body.appendChild(i_container);

		// // // Event Listener ///////////////////////////////////////////////////////////////////////

		// nav_button_1.addEventListener("mouseover", mouse_over, false);
		// nav_button_2.addEventListener("mouseover", mouse_over, false);
		// nav_button_3.addEventListener("mouseover", mouse_over, false);

		// nav_button_1.addEventListener("mouseout", mouse_out, false);
		// nav_button_2.addEventListener("mouseout", mouse_out, false);
		// nav_button_3.addEventListener("mouseout", mouse_out, false);

		// nav_button_1.on('hover')

		// i_container.addEventListener("mouseout", mouse_out, false);
		// i_container.addEventListener("mousedown", mouse_down, false);
		// i_container.addEventListener("mouseup", mouse_up, false);


		

		// return object
		// return _id;
	}


	function mouse_over () {
			// say($(this));
		}
		

		// add EventListener for buttons
		// actions whitch need to talke place

		// $("#nav_b_1").on( "custom", function( event, param1, param2 ) {
  // 			// say(param1);
  // 			act_on_event(param1);
		// });
		// $("#nav_b_2").on( "custom", function( event, param1, param2 ) {
  // 			// say(param1);
  // 			act_on_event(param1);
		// });
		// $("#nav_b_3").on( "custom", function( event, param1, param2 ) {
  // 			// say(param1);
  // 			act_on_event(param1);
		// });

		// testButton.className += ' nav_btn';

	// function act_on_event (argument) {
	// 	// check 
	// 	// if (argument == ) {} else{};
	// 	switch(argument) {
	// 	    case 'over':
	// 	        say('over');
	// 	        break;
	// 	    case 'out':
	// 	        say('out');
	// 	        break;
	// 	    case 'down':
	// 	        say('down');
	// 	        break;
	// 	    case 'up':
	// 	        say('up');
	// 	        break;
	// 	    default:
	// 	        say('nothing');
	// 	}
	// }

	
	function swap_tab()
	{

	}

	// ------------------------------------------------------------
	// never touch a running system
	
	/* some magic */
	var exposed = {
		create: create,
		swap_tab: swap_tab,
	}
	return exposed;
}
})(window);