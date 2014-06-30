// Author: Jo Preibisch
// Datum: 2014_06_18
// Projekt: Drone Monitoring System

function map(v, a, b, x, y) {
	return (v == a) ? x : (v - a) * (y - x) / (b - a) + x;
};


$(function(){
	// BACKGROUND /////////////////////////////////////////////////////////////////////////////
	// create svg drawing
 	// var draw = SVG('drawing').size(300, 300);
	// var rect = draw.rect(100, 100).attr({fill: '#f06'});

	// Grid ////////////////////////////////////////////////////////////////////////////////////////////////////
	// draw grid 
	var grid_left = new Grid('grid_left', 'grid', 0, 84, 261, 1080);
	grid_left.create();

	var grid_nav = new Grid('grid_nav', 'grid', 0, 0, 1920, 84);
	grid_nav.create();

	var grid_right = new Grid('grid_nav', 'grid', 1658, 84, 1920, 1080);
	grid_right.create();


	// TAB_1 CONTAINER /////////////////////////////////////////////////////////////////////
	var tab_1 = document.createElement('section');
	tab_1.id = 'tab_1';
	document.body.appendChild(tab_1);


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
	first_Button.create();
	say('button.creat()');
	say(first_Button.create());

	say(first_Button);

	// LABLES ////////////////////////////////////////////////////////////////////////////////////////////////////
	// add Lable stuff
	var lable_1 = new Lable(13, 91, 'Flight Mode', 1000, 300);
	lable_1.create();

	// add Lable stuff
	var lable_2 = new Lable(13, 271, 'Attachment', 1000, 300);
	lable_2.create();

	// add Lable stuff
	var lable_3 = new Lable(13, 479, 'Resolution', 1000, 300);
	lable_3.create();

	// add Lable stuff
	var lable_4 = new Lable(13, 755, 'Map', 1000, 300);
	lable_4.create(); 

	// add Lable stuff
	var lable_5 = new Lable(1671, 91, 'Flight Options', 1000, 300);
	lable_5.create();

	// add Lable stuff
	var lable_6 = new Lable(1671, 313, 'Waypoint List', 1000, 300);
	lable_6.create();

	// add Lable stuff
	var lable_7 = new Lable(1671, 847, 'Flight Details', 1000, 300);
	lable_7.create();


	// RADIO ///////////////////////////////////////////////////////////////////////////////
	var radio_1 = new Radio('r_1', 24, 130, 'Manual', 'Route', 'Area', '');
	radio_1.create();

	var radio_2 = new Radio('r_2', 24, 310, '3D Map', 'Toxicity', '360° Camera', 'Infrared');
	radio_2.create();

	var radio_3 = new Radio('r_3', 24, 830, 'Standart', 'Satelitte', '3D', '');
	radio_3.create();

	// right side
	var radio_4 = new Radio('r_4', 1682, 130, 'Waypoints', 'Flight Zone', '', '');
	radio_4.create();


	// Info ///////////////////////////////////////////////////////////////////////////////
	var info_1 = new Info('r_1', 'info', 13, 546, 'Duration', '1.6', 60, 'h', 'm.', '');
	tab_1.appendChild(info_1.create());

	var info_2 = new Info('r_2', 'info', 13, 581, 'Duration', '1.6', 60, 'h', 'm.', '');
	tab_1.appendChild(info_2.create());


	// UNITS //////////////////////////////////////////////////////////////////////////////////
	// var unit_1 = new Unit('r_1', 'unit', 212, 546, 'h', 'm.', '');
	// tab_1.appendChild(unit_1.create());

	// var unit_2 = new Unit('r_2', 'unit', 212, 580, 'h', 'm.', '');
	// tab_1.appendChild(unit_2.create());

	// var unit_3 = new Unit('r_1', 'unit', 212, 546, 'h', 'm.', '');
	// tab_1.appendChild(unit_3.create());

	// var unit_4 = new Unit('r_2', 'unit', 212, 580, 'h', 'm.', '');
	// tab_1.appendChild(unit_4.create());
	

	// TRIGGER-EVENT /////////////////////////////////////////////////////////////////////////
	$( "body" ).click(function() {
  		// lable_1.animate();
	});
});

// --------------------------------------------------------------------------------------------
