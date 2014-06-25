// Author: Jo Preibisch
// Datum: 2014_06_18
// Projekt: Drone Monitoring System

function map(v, a, b, x, y) {
	return (v == a) ? x : (v - a) * (y - x) / (b - a) + x;
};


$(function(){
	// draw button

	// function(b_id, b_state, b_text, b_l1. b_l1, b_l1, b_height, b_width, b_x, b_y)
	var myTabs = new Tabs('img/tabs/tabs_def.fw.png', 'img/tabs/tabs_act.fw.png', 'img/tabs/tabs_hover.fw.png', true);
	myTabs.create();

	
	var first_Button = new Button(
		'b_1', 0, 
		'Upload to Drown', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1682, 1019, 'btn_def');
	first_Button.create();
	console.log(myTabs);
});

// --------------------------------------------------------------------------------------------