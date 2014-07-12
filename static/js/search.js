(function(b){

/*
Author:  IgJo
Created: 26.06.2014
Version: c0.1
*/

/*
- 3 Buttons zeichnen
- An aus detecten
- Transistions gestalten

Wie macht man es mit den 3 oder 4? 
	Entweder man gibt es auch an, oder es wird überprüft ob die letzte Variable leer ist!
	
*/

Search = function(id, myClass, x, y)
{
	// Variables //////////////////////////////////////////////////////////////////
	var i_container = 0;
	var status = 0;
	var myLength = 0;

	var button;
	var child;

	// var unitArray = [
	//    [text_1, 1, ''], // default active
	//    [text_2, 0, ''],
	//    [text_3, 0, ''],
	// ];

	// functions //////////////////////////////////////////////////////////////////
	function create()
	{
		i_container = document.createElement('input');
		i_container.className += myClass;
		i_container.id = id;
		i_container.style.position = 'absolute';
		i_container.style.left = x + 'px';
		i_container.style.top = y + 'px';

		// ON ENTER 
		$(i_container).keyup(function (e) {
		    if (e.keyCode == 13) {
		        $('body').trigger( "custom", ["location", 0]);
		    }
		});

		




		// create button
		// count radio elements
		// for (var i = 0; i < unitArray.length; i++) {
		// 	if (unitArray[i][0] != '') {myLength++};
		// };

		// // add buttons
		// // write construction manual
		// if (size == 0) {
		// 	button = new Button( 
		// 		'unit_' + id, 
		// 		unitArray[0][0], 
		// 		'img/unit/unit_def.fw.png', 
		// 		'img/unit/unit_hover.fw.png', 
		// 		'img/unit/unit_act.fw.png', 
		// 		0, 0, false, 'unit_small_btn');

		// } else{
		// 	button = new Button( 
		// 		'unit_' + id, 
		// 		unitArray[0][0],
		// 		'img/unit/unit2_def.fw.png', 
		// 		'img/unit/unit2_hover.fw.png', 
		// 		'img/unit/unit2_act.fw.png', 
		// 		0, 0, false, 'unit2_btn');
		// };

		// // add event listener
		
		// // create & append buttons 
		// i_container.appendChild(button.create());
		// child = $(i_container).find('#unit_' + id).on( "custom", function(event, param1, param2){
		// 	switch(param1) {
		// 	    case 'over':
		// 	        break;
		// 	    case 'out':
		// 	        break;
		// 	    case 'down':
		// 	        break;
		// 	    case 'up':
		// 	      	switchUnit();
		// 	        break;
		// 	    default:{
		// 	        alert('unknow event! unit button' + i);
		// 	    }
		// 	}
		// });
		// return object
		return i_container;
	}

	function switchUnit () {
		// say($('#unit_' + id).find('.btn_text').text(':)'));
		if (status <= myLength-2) {
			status++;
		} else{
			status = 0;
		};
		$('#unit_' + id).find('.btn_text').text(unitArray[status][0]);
	}

	function updateStatus () {
	}


	// ------------------------------------------------------------
	
	/* public functions */
	var exposed = {
		create: create,
		updateStatus: updateStatus,
	}
	return exposed;
}
})(window);