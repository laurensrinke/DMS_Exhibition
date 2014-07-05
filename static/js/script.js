// Author: Jo Preibisch
// Datum: 2014_06_18
// Projekt: Drone Monitoring System

function map(v, a, b, x, y) {
	return (v == a) ? x : (v - a) * (y - x) / (b - a) + x;
};


$(function(){
	// BACKGROUND /////////////////////////////////////////////////////////////////////////////

	// Grid ////////////////////////////////////////////////////////////////////////////////////////////////////
	// draw grid 
	var grid_left = new Grid('grid_left', 'grid', 0, 84, 261, 996);
	grid_left.create();

	var grid_nav = new Grid('grid_nav', 'grid', 0, 0, 1920, 84);
	grid_nav.create();

	var grid_right = new Grid('grid_nav', 'grid', 1658, 84, 261, 996);
	grid_right.create();


	// CREATE TAB_1 CONTAINER /////////////////////////////////////////////////////////////////////
	var tab_1 = document.createElement('section');
	tab_1.id = 'tab_1';
	tab_1.className = 'tab';

	// var tab_2 = document.createElement('section');
	// tab_2.id = 'tab_2';
	// tab_2.className = 'tab';


	// var tab_3 = document.createElement('section');
	// tab_3.id = 'tab_3';
	// tab_3.className = 'tab';



	// TAB_1 CONTENT



	// create nav tabs
	var myTabs = new Tabs('img/tabs/tabs_def.fw.png', 'img/tabs/tabs_act.fw.png', 'img/tabs/tabs_hover.fw.png', true);
	myTabs.create();

	// function(id, text, img_normal, img_over, img_down, x, y, show_prozess, style_class)
	var first_Button = new Button(
		'b_1', 
		'Upload to Drone', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1682, 1019, true, 'btn_def');
	tab_1.appendChild(first_Button.create());

	// LABLES ////////////////////////////////////////////////////////////////////////////////////////////////////
	// add Lable stuff
	// function(x, y, text, myDelay, myDuration)
	var lable_1 = new Lable(24, 87, 'Flight Mode', 2000, 300);
	tab_1.appendChild(lable_1.create());
	// tab_1.appendChild(lable_1.create());

	// add Lable stuff
	var lable_2 = new Lable(24, 268, 'Attachment', 2000, 300);
	tab_1.appendChild(lable_2.create());

	// add Lable stuff
	var lable_3 = new Lable(24, 479, 'Resolution', 1000, 300);
	tab_1.appendChild(lable_3.create());

	// add Lable stuff
	var lable_4 = new Lable(24, 755, 'Map', 1000, 300);
	tab_1.appendChild(lable_4.create()); 

	// add Lable stuff
	var lable_5 = new Lable(1671, 91, 'Flight Options', 1000, 300);
	tab_1.appendChild(lable_5.create());

	// add Lable stuff
	var lable_6 = new Lable(1671, 313, 'Waypoint List', 1000, 300);
	tab_1.appendChild(lable_6.create());

	// add Lable stuff
	var lable_7 = new Lable(1671, 847, 'Flight Details', 1000, 300);
	tab_1.appendChild(lable_7.create());


	// RADIO ///////////////////////////////////////////////////////////////////////////////
	var radio_1 = new Radio('r_1', 24, 130, 'Manual', 'Route', 'Area', '', '');
	tab_1.appendChild(radio_1.create());

	var radio_2 = new Radio('r_2', 24, 310, '3D Map', 'Toxicity', '360° Camera', 'Infrared', '');
	tab_1.appendChild(radio_2.create());

	var radio_3 = new Radio('r_3', 24, 803, 'Standart', 'Terrain', 'Hybrid', 'Satelitte', '');
	tab_1.appendChild(radio_3.create());

	// right side
	var radio_4 = new Radio('r_4', 1682, 130, 'Waypoints', 'Flight Zone', '', '', '');
	tab_1.appendChild(radio_4.create());


	// Info ///////////////////////////////////////////////////////////////////////////////
	var info_1 = new Info('r_1', 'info', 1671, 886, 'Duration', '1.6', 60, 'h', 'm.', '');
	tab_1.appendChild(info_1.create());


	// var info_2 = new Info('r_2', 'info', 1671, 922, 'Distance', '1.863', 0.621, 'km', 'mi.', '');
	var info_2 = new Info('r_2', 'info', 1671, 922, 'Distance', '3', 0.621, 'km', 'mi.', '');
	tab_1.appendChild(info_2.create());

	// var info_2 = new Info('r_2', 'info', 1671, 922, 'Distance', '1.863', 0.621, 'km', 'mi.', '');
	var info_3 = new Info('r_3', 'info', 1671, 958, 'Battery Usage', '78', 0.3, '%', 'h.', '');
	tab_1.appendChild(info_3.create());


	// Input ///////////////////////////////////////////////////////////////////////////////
	var input_1 = new Input('i_1', 'info', 1671, 195, 'Rel. Altitude', '6', 0.621, 'm', 'km.', '', '-');
	tab_1.appendChild(input_1.create());

	var input_2 = new Input('i_2', 'info', 1671, 223, 'Rel. Speed', '3', 0.621, 'km/h', 'mph', '', '-');
	tab_1.appendChild(input_2.create());


	// UNITS //////////////////////////////////////////////////////////////////////////////////
	var unit_1 = new Unit('r_1', 'unit', 212, 546, 'h', 'm.', '');
	tab_1.appendChild(unit_1.create());

	var unit_2 = new Unit('r_2', 'unit', 212, 580, 'h', 'm.', '');
	tab_1.appendChild(unit_2.create());

	var unit_3 = new Unit('r_1', 'unit', 212, 546, 'h', 'm.', '');
	tab_1.appendChild(unit_3.create());

	var unit_4 = new Unit('r_2', 'unit', 212, 580, 'h', 'm.', '');
	tab_1.appendChild(unit_4.create());







	

	// ADD TABS TO CONTAINER
	document.body.appendChild(tab_1);
	// document.body.appendChild(tab_2);
	// document.body.appendChild(tab_3);
	

	// TRIGGER-EVENT /////////////////////////////////////////////////////////////////////////
	$( "body" ).click(function() {
  		// lable_1.animate();
	});
});

// --------------------------------------------------------------------------------------------
