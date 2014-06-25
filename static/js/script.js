// Author: Jo Preibisch
// Datum: 2014_06_18
// Projekt: Drone Monitoring System

function map(v, a, b, x, y) {
	return (v == a) ? x : (v - a) * (y - x) / (b - a) + x;
};


$(function(){
	// draw button

	
	var myTabs = new Tabs('img/tabs/tabs_def.fw.png', 'img/tabs/tabs_act.fw.png', 'img/tabs/tabs_hover.fw.png', true);
	myTabs.create();


	// function(id, text, img_normal, img_over, img_down, x, y, show_prozess, style_class)
	var first_Button = new Button(
		'b_1', 
		'Upload to Drown', 
		'img/button/button_def.fw.png', 
		'img/button/button_over.fw.png', 
		'img/button/button_down.fw.png', 
		1682, 1019, true, 'btn_def');
	first_Button.create();
	// event handler von first button
	// function mouse_over()
	// {
	// 	b_over.style.opacity = 1;
	// 	i_text_container.style.color = '#56C9DC';
	// }

	// function mouse_out()
	// {
	// 	b_over.style.opacity = 0;
	// 	i_text_container.style.color = '#FFF';
		
	// }

	// function mouse_down()
	// {
	// 	b_down.style.opacity = 1;	
	// 	//i_text_container.style.opacity = .5;	
	// 	i_text_container.style.color = '#FFF';
	// }

	// function mouse_up()
	// {
	// 	b_down.style.opacity = 0;
	// 	i_text_container.style.color = '#56C9DC';	
	// 	if (show_prozess == 'true') {show_prozess()};
	// }

	// function show_prozess()
	// {
	// 	var p_value = 0;
	// 	$('#nav_b1_line').remove();
	// 	// add line
	// 	i_prozess = document.createElement('section');
	// 	i_prozess.id = id + '_line';
	// 	i_prozess.className = 'btn_line';

	// 	// add glow object
	// 	var myVar = setInterval(function() {
	// 		if (p_value < 213) {
	//     		p_value = p_value + 1;
	//     		i_prozess.style.width = p_value + 'px';
	//     	} else {
	//     		clearInterval(myVar)
	//     	}
	//     	console.log(p_value);
	//     }, 2);
		

	// 	// add elements to DOM
	// 	i_container.appendChild(i_prozess);
	// }

});

// --------------------------------------------------------------------------------------------