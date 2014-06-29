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

Unit = function(id, myClass, x, y, text_1, text_2, text_3)
{

	// Variables /////////////////////////////////
	var i_container = 0;
	var status = 0;
	var myLength = 0;

	var button = '';

	var unitArray = [
	   [text_1, 1, ''], // default active
	   [text_2, 0, ''],
	   [text_3, 0, ''],
	];

	// functions /////////////////////////////////
	function create()
	{
		i_container = document.createElement('section');
		i_container.className += myClass;

		// create button

		// count radio elements
		for (var i = 0; i < unitArray.length; i++) {
			if (unitArray[i][0] != '') {myLength++};
		};

		// add buttons
		// write construction manual
		button = new Button( 
			'unit_' + id, 
			unitArray[0][0], 
			'img/unit/unit_def.fw.png', 
			'img/unit/unit_hover.fw.png', 
			'img/unit/unit_act.fw.png', 
			0+x, y+i*28, false, 'unit_btn');

		// add event listener
		
		// create & append buttons 
		i_container.appendChild(button.create());
		say('Childs');
		say(i_container);
		say($(button.create()).on( "custom", function(event, param1, param2){say('hey')}));
		$(button.create()).on( "custom", function(event, param1, param2){say('hey')});

		$(i_container).find('#unit_' + id).on( "custom", function(event, param1, param2){
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			    	say('hello ' + id);
					// find out whitch button was pressed and set it to stat
					// update all buttons besides stat button
			      	// updateStatus();
			        break;
			    default:{
			        alert('unknow event! unit button' + i);
			    }
			}
		});


		// say(i_container.firstChild);
		// i_container.firstChild.addEventListener("custom", function (e) {say('hello bitch')}, false);




		document.addEventListener('custom', function (e) {
			say(e);
			// switch(e) {
			//     case 'over':
			//         break;
			//     case 'out':
			//         break;
			//     case 'down':
			//         break;
			//     case 'up':
			//     	say('hello');
			// 		// find out whitch button was pressed and set it to stat
			// 		// update all buttons besides stat button
			//       	updateStatus();
			//         break;
			//     default:{
			//         alert('unknow event! unit button' + i);
			//     }
			// }
		}, false);

		// add event listener to radio buttons
		// button.addEventListener("custom", say('hello'), false);

		// $('#unit_' + id).on( "custom", function(event, param1, param2) {
			
		// });

		// return object
		return i_container;
	}

	function switchUnit () {
		say('unit_r_1');
			// switch(param1) {
			//     case 'over':
			//         break;
			//     case 'out':
			//         break;
			//     case 'down':
			//         break;
			//     case 'up':
			//     	say('hello');
			// 		// find out whitch button was pressed and set it to stat
			// 		// update all buttons besides stat button
			//       	updateStatus();
			//         break;
			//     default:{
			//         alert('unknow event! unit button' + i);
			//     }
			// }
	}


	function updateStatus () {
		// button.setText('O.o');
		// alert('send');
		// for (var i = 0; i < myLength; i++) {
		// 	if (status != i) {
		// 		unitArray[i][2].setInactive();
		// 	} else {
		// 		unitArray[i][2].setActive();
		// 	}
		// }
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