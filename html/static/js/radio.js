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

Radio = function(id, x, y, text_1, text_2, text_3, text_4, text_5)
{

	// Variables /////////////////////////////////
	var i_container = 0;
	var status = 0;
	var myLength = 0;


	var radioArray = [
	   [text_1, 1, ''], // default active one
	   [text_2, 0, ''],
	   [text_3, 0, ''],
	   [text_4, 0, ''],
	   [text_5, 0, ''],
	];

	// functions /////////////////////////////////
	function create()
	{
		i_container = document.createElement('section');
		i_container.style.position = 'absolute';
		i_container.style.left = x + 'px';
		i_container.style.top = y + 'px';
		// i_container.className += style_class;

		// count radio elements
		for (var i = 0; i < radioArray.length; i++) {
			if (radioArray[i][0] != '') {myLength++};
		};

		// add buttons
		for (var i = 0; i < myLength; i++) {
			// write construction manual
			radioArray[i][2] = new Button( 
				id + '_nav_b' + i, 
				radioArray[i][0], 
				'img/radio/radio_def.fw.png', 
				'img/radio/radio_hover.fw.png', 
				'img/radio/radio_act.fw.png', 
				0, i*28, false, 'radio_btn');
			// create buttons
			i_container.appendChild(radioArray[i][2].create());

			$(i_container).find('#' + id + '_nav_b' + i).on( "custom", function(event, param1, param2) {
				// say('been clicked: ' + param1 + ' ' + myId)
				// do sth.
				switch(param1) {
				    case 'over':
				        break;
				    case 'out':
				    		updateStatus();
				        break;
				    case 'down':
				        break;
				    case 'up':
						// find out whitch button was pressed and set it to stat
						status = parseInt(param2[param2.length-1]);
						// update all buttons besides stat button
				      	updateStatus();
				        break;
				    default:{
				        alert('unknow event! nav_b' + i);
				    }
				}
			});
		};

		// set button one active
		radioArray[0][2].setActive();

		// return object
		// say(i_container)
		return i_container;
	}


	function updateStatus () {
		for (var i = 0; i < myLength; i++) {
			if (status != i) {
				radioArray[i][2].setInactive();
			} else {
				radioArray[i][2].setActive();
			}
		}
	}


	function setState (argument) {
		// body...
	}

	function setActive (argument) {
		// body...
	}

	// ------------------------------------------------------------
	// never touch a running system
	
	/* public functions */
	var exposed = {
		create: create,
		updateStatus: updateStatus,
	}
	return exposed;
}
})(window);