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
	// var grid_left = new Grid('grid_left', 'grid', 0, 84, 261, 996);
	// grid_left.create();

	// var grid_nav = new Grid('grid_nav', 'grid', 0, 0, 1920, 84);
	// grid_nav.create();

	// var grid_right = new Grid('grid_nav', 'grid', 1658, 84, 261, 996);
	// grid_right.create();


	// GLOBAL STUFF
	startTime();


	// CREATE tab_0 CONTAINER /////////////////////////////////////////////////////////////////////
	var tab_0 = document.getElementById('tab_0');
	tab_0.className = 'tab';

	var tab_1 = document.getElementById('tab_1');
	tab_1.className = 'tab';

	var tab_2 = document.getElementById('tab_2');
	tab_2.className = 'tab';

	// var tab_2 = document.createElement('section');
	// tab_2.id = 'tab_2';
	// tab_2.className = 'tab';


	// var tab_3 = document.createElement('section');
	// tab_3.id = 'tab_3';
	// tab_3.className = 'tab';



	// tab_0 CONTENT



	// create nav tabs
	var myTabs = new Tabs('img/tabs/tabs_def.fw.png', 'img/tabs/tabs_act.fw.png', 'img/tabs/tabs_hover.fw.png', true);
	myTabs.create();

	// BUTTON
	var tab_0_btn_1 = new Button(
		'tab_0_btn_1', 
		'Upload to Drone', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1682, 1019, true, 'btn_def');
	tab_0.appendChild(tab_0_btn_1.create());

	var tab_0_btn_2 = new Button(
		'tab_0_btn_2', 
		'Calculate Grid', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1682, 769, true, 'btn_def');
	tab_0.appendChild(tab_0_btn_2.create());

	var tab_0_btn_3 = new Button(
		'tab_0_btn_3', 
		'Upload to Drone', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1682, 1019, true, 'btn_def');
	tab_0.appendChild(tab_0_btn_3.create());

	// LABLES ////////////////////////////////////////////////////////////////////////////////////////////////////
	// add Lable stuff
	// function(x, y, text, myDelay, myDuration)
	var tab_0_lb_1 = new Lable(24, 87, 'Flight Mode', 2000, 300);
	tab_0.appendChild(tab_0_lb_1.create());
	// tab_0.appendChild(lable_1.create());

	// add Lable stuff
	var tab_0_lb_2 = new Lable(24, 268, 'Attachment', 2000, 300);
	tab_0.appendChild(tab_0_lb_2.create());

	// add Lable stuff
	var tab_0_lb_4 = new Lable(24, 755, 'Map', 1000, 300);
	tab_0.appendChild(tab_0_lb_4.create()); 

	// add Lable stuff
	var tab_0_lb_5 = new Lable(1682, 91, 'Flight Options', 1000, 300);
	tab_0.appendChild(tab_0_lb_5.create());

	// add Lable stuff
	var tab_0_lb_6 = new Lable(1682, 316, 'Waypoint List', 1000, 300);
	tab_0.appendChild(tab_0_lb_6.create());

	// add Lable stuff
	var tab_0_lb_7 = new Lable(1682, 733, 'Grid Resolution', 1000, 300);
	tab_0.appendChild(tab_0_lb_7.create());

	// add Lable stuff
	var tab_0_lb_8 = new Lable(1682, 851, 'Flight Details', 1000, 300);
	tab_0.appendChild(tab_0_lb_8.create());



	// RADIO ///////////////////////////////////////////////////////////////////////////////
	var tab_0_rd_1 = new Radio('r_1', 24, 130, 'Manual', 'Route', 'Area', '', '');
	tab_0.appendChild(tab_0_rd_1.create());

	var tab_0_rd_2 = new Radio('r_2', 24, 310, '3D Map', 'Toxicity', '360° Camera', 'Infrared', '');
	tab_0.appendChild(tab_0_rd_2.create());

	var tab_0_rd_3 = new Radio('r_3', 24, 803, 'Standart', 'Terrain', 'Hybrid', 'Satelitte', '');
	tab_0.appendChild(tab_0_rd_3.create());

	// right side
	var tab_0_rd_4 = new Radio('r_4', 1682, 130, 'Waypoints', 'Flight Zone', '', '', '');
	tab_0.appendChild(tab_0_rd_4.create());

	


	// Info ///////////////////////////////////////////////////////////////////////////////
	var tab_0_nf_1 = new Info('r_1', 'info', 1671, 886, 'Duration', '1.6', 60, 'h', 'm.', '');
	tab_0.appendChild(tab_0_nf_1.create());

	var tab_0_nf_2 = new Info('r_2', 'info', 1671, 922, 'Distance', '3', 0.621, 'km', 'mi.', '');
	tab_0.appendChild(tab_0_nf_2.create());

	var tab_0_nf_3 = new Info('r_3', 'info', 1671, 958, 'Battery Usage', '78', 0.3, '%', 'h.', '');
	tab_0.appendChild(tab_0_nf_3.create());


	// Input ///////////////////////////////////////////////////////////////////////////////
	var tab_0_npt_1 = new Input('tab_0_npt_1', 'info', 1671, 195, 'Rel. Altitude', '6', 0.621, 'm', 'km.', '', '-');
	tab_0.appendChild(tab_0_npt_1.create());

	var tab_0_npt_2 = new Input('tab_0_npt_2', 'info', 1671, 223, 'Rel. Speed', '3', 0.621, 'km/h', 'mph', '', '-');
	tab_0.appendChild(tab_0_npt_2.create());


	// waypoint list
	var tab_0_list_1 = new List('tab_0_list_1', 'list', 1682, 367);
	tab_0.appendChild(tab_0_list_1.create());


	// IIIIII		IIIIII
	// IIIIII		IIIIII
	// IIIIII		IIIIII
	// IIIIII		IIIIII
	// IIIIII		IIIIII
	// IIIIII		IIIIII
	// IIIIII		IIIIII
	// IIIIII		IIIIII
	// IIIIII		IIIIII
	// IIIIII		IIIIII
	// IIIIII		IIIIII

	// TAB 2
	// right side
	var radio_5 = new Radio('r_5', 23, 832, 'Live', 'Pilot', 'Map', '', '');
	tab_1.appendChild(radio_5.create());

	var tab_1_btn_1 = new Button(
		'tab_1_btn_1', 
		'Screenshot', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1681, 130, true, 'btn_def');
	tab_1.appendChild(tab_1_btn_1.create());

	var tab_1_btn_2 = new Button(
		'tab_1_btn_2', 
		'Print', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1681, 982, true, 'btn_def');
	tab_1.appendChild(tab_1_btn_2.create());

	var tab_1_btn_3 = new Button(
		'tab_1_btn_3', 
		'Share', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1681, 1018, true, 'btn_def');
	tab_1.appendChild(tab_1_btn_3.create());


	// add Lable stuff
	var tab_1_lb_1 = new Lable(24, 87, 'Flight Details', 2000, 300);
	tab_1.appendChild(tab_1_lb_1.create());

	var tab_1_lb_2 = new Lable(24, 271, 'Sensor Data', 2000, 300);
	tab_1.appendChild(tab_1_lb_2.create());

	var tab_1_lb_3 = new Lable(24, 788, 'Map', 1000, 300);
	tab_1.appendChild(tab_1_lb_3.create()); 

	var tab_1_lb_4 = new Lable(1682, 91, 'Add Marks', 1000, 300);
	tab_1.appendChild(tab_1_lb_4.create()); 

	var tab_1_lb_5 = new Lable(1682, 237, 'Edit Mark', 1000, 300);
	tab_1.appendChild(tab_1_lb_5.create());

	var tab_1_lb_6 = new Lable(1682, 531, 'Screenshot', 1000, 300);
	tab_1.appendChild(tab_1_lb_6.create()); 

	var tab_1_lb_7 = new Lable(1682, 939, 'Export Data', 1000, 300);
	tab_1.appendChild(tab_1_lb_7.create()); 


	// info lables
	var tab_1_nf_1 = new Info('tab_1_nf_1', 'info', 13, 131, 'Duration', '1.6', 60, 'h', 'm.', '');
	tab_1.appendChild(tab_1_nf_1.create());

	var tab_1_nf_2 = new Info('tab_1_nf_2', 'info', 13, 164, 'Distance', '3', 0.621, 'km', 'mi.', '');
	tab_1.appendChild(tab_1_nf_2.create());

	var tab_1_nf_3 = new Info('tab_1_nf_3', 'info', 13, 198, 'Battery Usage', '78', 0.3, '%', 'h.', '');
	tab_1.appendChild(tab_1_nf_3.create());



	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII
	// IIIIII		IIIIII      IIIIII

	// Radio
	var tab_3_rd_1 = new Radio('tab_3_rd_1', 23, 832, 'Video', '2D', '3D', '', '');
	tab_2.appendChild(tab_3_rd_1.create());

	// Buttons
	var tab_3_btn_1 = new Button(
		'tab_3_btn_1', 
		'Screenshot', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1681, 130, true, 'btn_def');
	tab_2.appendChild(tab_3_btn_1.create());

	var tab_3_btn_2 = new Button(
		'tab_3_btn_2', 
		'Print',
		'img/button/button_def.fw.png',
		'img/button/button_over.fw.png',
		'img/button/button_down.fw.png',
		1681, 983, true, 'btn_def');
	tab_2.appendChild(tab_3_btn_2.create());

	var tab_3_btn_3 = new Button(
		'tab_3_btn_3', 
		'Share',
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1681, 1019, true, 'btn_def');
	tab_2.appendChild(tab_3_btn_3.create());

	var tab_3_btn_4 = new Button(
		'tab_3_btn_4', 
		'Path Finder', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		24, 683, true, 'btn_def');
	tab_2.appendChild(tab_3_btn_4.create());

	var tab_3_btn_5 = new Button(
		'tab_3_btn_5', 
		'Compare Maps', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		24, 717, true, 'btn_def');
	tab_2.appendChild(tab_3_btn_5.create());

	


	

	// var tab_1_btn_2 = new Button(
	// 	'tab_1_btn_2', 
	// 	'Print', 
	// 	'img/button/button_def.fw.png', 
	// 	'img/button/button_over.fw.png', 
	// 	'img/button/button_down.fw.png', 
	// 	1681, 982, true, 'btn_def');
	// tab_1.appendChild(tab_1_btn_2.create());

	// var tab_1_btn_3 = new Button(
	// 	'tab_1_btn_3', 
	// 	'Share', 
	// 	'img/button/button_def.fw.png', 
	// 	'img/button/button_over.fw.png', 
	// 	'img/button/button_down.fw.png', 
	// 	1681, 1018, true, 'btn_def');
	// tab_1.appendChild(tab_1_btn_3.create());


	// // add Lable stuff
	var tab_2_lb_1 = new Lable(24, 87, 'Flight Details', 2000, 300);
	tab_2.appendChild(tab_2_lb_1.create());

	var tab_2_lb_2 = new Lable(24, 271, 'Sensor Data', 2000, 300);
	tab_2.appendChild(tab_2_lb_2.create());

	var tab_2_lb_3 = new Lable(24, 642, 'Functions', 1000, 300);
	tab_2.appendChild(tab_2_lb_3.create()); 

	var tab_2_lb_4 = new Lable(24, 788, 'Map', 1000, 300);
	tab_2.appendChild(tab_2_lb_4.create());

	var tab_2_lb_5 = new Lable(1682, 91, 'Add Marks', 1000, 300);
	tab_2.appendChild(tab_2_lb_5.create());

	var tab_2_lb_6 = new Lable(1682, 237, 'Edit Mark', 1000, 300);
	tab_2.appendChild(tab_2_lb_6.create()); 

	var tab_2_lb_7 = new Lable(1682, 531, 'Marks', 1000, 300);
	tab_2.appendChild(tab_2_lb_7.create());

	var tab_2_lb_8 = new Lable(1682, 939, 'Export Data', 1000, 300);
	tab_2.appendChild(tab_2_lb_8.create()); 




	

	// var tab_1_lb_5 = new Lable(1680, 237, 'Edit Mark', 1000, 300);
	// tab_1.appendChild(tab_1_lb_5.create());

	// var tab_1_lb_6 = new Lable(1680, 531, 'Screenshot', 1000, 300);
	// tab_1.appendChild(tab_1_lb_6.create()); 

	// var tab_1_lb_7 = new Lable(1680, 939, 'Export Data', 1000, 300);
	// tab_1.appendChild(tab_1_lb_7.create()); 


	// // info lables
	var tab_2_nf_1 = new Info('tab_1_nf_1', 'info', 13, 131, 'Final Duration', '1.6', 60, 'h', 'm.', '');
	tab_2.appendChild(tab_2_nf_1.create());

	var tab_2_nf_2 = new Info('tab_1_nf_2', 'info', 13, 164, 'Final Distance', '3', 0.621, 'km', 'mi.', '');
	tab_2.appendChild(tab_2_nf_2.create());

	var tab_2_nf_3 = new Info('tab_1_nf_3', 'info', 13, 198, 'Final Battery Usage', '78', 0.3, '%', 'h.', '');
	tab_2.appendChild(tab_2_nf_3.create());





	// UNITS //////////////////////////////////////////////////////////////////////////////////
	// var unit_1 = new Unit('r_1', 'unit', 212, 546, 'h', 'm.', '');
	// tab_0.appendChild(unit_1.create());

	// var unit_2 = new Unit('r_2', 'unit', 212, 580, 'h', 'm.', '');
	// tab_0.appendChild(unit_2.create());

	// var unit_3 = new Unit('r_1', 'unit', 212, 546, 'h', 'm.', '');
	// tab_0.appendChild(unit_3.create());

	// var unit_4 = new Unit('r_2', 'unit', 212, 580, 'h', 'm.', '');
	// tab_0.appendChild(unit_4.create());

	// Trigger click on nav_1







	

	// ADD TABS TO CONTAINER
	document.body.appendChild(tab_0);
	// document.body.appendChild(tab_2);
	// document.body.appendChild(tab_3);
	

	// TRIGGER-EVENT /////////////////////////////////////////////////////////////////////////
	$( "body" ).click(function() {
  		// lable_1.animate();
	});
	// DETECT OS
	var OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

	if (OSName == 'MacOS') {
		alert('Warining! Wrong Operation System<br> Will remove content');
		$('body').remove();
	};

});

// --------------------------------------------------------------------------------------------
