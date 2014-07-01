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

Info = function(id, myClass, x, y, description, value, factor, unit_1, unit_2, unit_3)
{
	// Variables /////////////////////////////////
	var container;
	var text_description;
	var text_value;
	var status = 0;

	var button;
	var child;

	var unit;

	// functions /////////////////////////////////
	function create()
	{
		// create container
		container = document.createElement('article');

		// place container
		container.style.position = 'absolute';
		container.style.left = x + 'px';
		container.style.top  = y + 'px';

		// create description text
		text_description = document.createElement('section');
		text_description.className += 'text_description';
		text_description.style.position = 'absolute';
		text_description.style.left = '10px';
		text_description.style.top  = '4px';
		text_description.innerHTML = description;

		// create value text
		text_value = document.createElement('section');
		text_value.className += 'text_value';
		text_value.style.position = 'absolute';
		text_value.style.left = '90px';
		text_value.style.top  = '4px';
		text_value.innerHTML = value;

		// create unit object
		unit = new Unit(id + '_r_1', 'unit', 199, 0, unit_1, unit_2, unit_3);

		// add description, value & unit to container
		container.appendChild(text_description);
		container.appendChild(text_value);
		container.appendChild(unit.create());

		// add trigger for unit swap
		$(container).find('#unit_' + id + '_r_1').on( "custom", function(event, param1, param2){
			switch(param1) {
			    case 'over':
			        break;
			    case 'out':
			        break;
			    case 'down':
			        break;
			    case 'up':
			      	updateValue();
			        break;
			    default:{
			        alert('unknow event! unit button' + i);
			    }
			}
		});
		
		// retunr obejct
		return container;
	}

	function updateValue () {
		say('update');
		if (status == 0) {
			status = 1;
			setValue(getValue() * factor);
		} else{
			status = 0;
			setValue(getValue() / factor);
		};

	}

	function setValue(argument) {
		text_value.innerHTML = parseFloat(argument);
	}

	function getValue(argument) {
		return parseFloat(text_value.innerHTML);
	}

	// ------------------------------------------------------------

	/* public functions */
	var exposed = {
		create: create,
		updateValue: updateValue,
	}
	return exposed;
}
})(window);