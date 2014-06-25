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
// 
// 


// Questions
// ----------------------------------------------------
// Q1: Button_Act Füllfarbe auf 100% lassen?


Tabs = function(img_def, img_act, img_hover)
{
	// Variables /////////////////////////////////
	var state;
	var title = [
	    "Missionplanner",
	    "Live View",
	    "Post Editing"
	];

	// Buttons
	var nav_button_1, nav_button_2, nav_button_3; 
	

	// functions /////////////////////////////////
	function create()
	{

		//Button = function(b_id, b_state, b_text, img_normal, img_over, img_down, b_height, b_width, b_x, b_y)
		
		// button
		// container for all contining elements

		// create container
		i_container = document.createElement('nav');
		
		// create states elements
		// nav_button_1 = document.createElement('img');
		// nav_button_1.src = img_act;
		// nav_button_1.className+= 'nav_btn';
		// nav_button_1.style.left = '24px';

		// nav_button_2 = document.createElement('img');
		// nav_button_2.src = img_def;
		// nav_button_2.className+= 'nav_btn';
		// nav_button_2.style.left = '675px';

		// nav_button_3 = document.createElement('img');
		// nav_button_3.src = img_def;
		// nav_button_3.className+= 'nav_btn';
		// nav_button_3.style.left = '1326px';

		// creat text elements
		var nav_text_1 = document.createTextNode(title[0]);
		var nav_text_2 = document.createTextNode(title[1]);
		var nav_text_3 = document.createTextNode(title[2]);

		// // add elements together
		// i_container.appendChild(nav_button_1);
		// i_container.appendChild(nav_button_2);
		// i_container.appendChild(nav_button_3);


		// add object to page
		document.body.appendChild(i_container);

		// // Event Listener ///////////////////////////////////////////////////////////////////////

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
		
		var testButton = new Button('nav_b_1', 0, 
			'Missionplanner', 
			'img/tabs/tabs_def.fw.png', 
			'img/tabs/tabs_act.fw.png', 
			'img/tabs/tabs_hover.fw.png',
			25, 11, true, 'btn_nav');
		testButton.create();
		// testButton.className += ' nav_btn';

		// return object
		// return _id;
	}
	
	function mouse_over()
	{
		this.src = img_hover;
	}

	function mouse_out()
	{
		this.src = img_def;
	}

	function mouse_down()
	{
		// b_down.style.opacity = 1;	
		// //i_text_container.style.opacity = .5;	
		// i_text_container.style.color = '#FFF';
	}

	function mouse_up()
	{
		// b_down.style.opacity = 0;
		// i_text_container.style.color = '#56C9DC';	
		// show_prozess();
	}

	function animat_in()
	{
		// 
	}

	function animat_out()
	{
		// 
	}

	
	function swap_tab()
	{
		// var p_value = 0;

		// // add line
		// i_prozess = document.createElement('section');
		// i_prozess.id = i_id + '_line';
		// i_prozess.className = 'btn_line';

		// // add glow object
		// var myVar = setInterval(function() {
		// 	if (p_value < 213) {
	 //    		p_value = p_value + 1;
	 //    		i_prozess.style.width = p_value + 'px';
	 //    	} else {
	 //    		clearInterval(myVar)
	 //    	}
	 //    	console.log(p_value);
	 //    }, 2);
		

		// // add elements to DOM
		// i_container.appendChild(i_prozess);
	}

	// ------------------------------------------------------------
	// never touch a running system
	
	/* some magic */
	var exposed = {
		create: create,
		mouse_over: mouse_over, 
		mouse_out: mouse_out,
		mouse_down: mouse_down,
		mouse_up: mouse_up,
		animat_in: animat_in,
		swap_tab: swap_tab,
	}
	return exposed;
}
})(window);