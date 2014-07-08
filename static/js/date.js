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

Date = function(id, myClass, x, y)
{
	// Variables /////////////////////////////////
	var container;

	// functions /////////////////////////////////
	function create()
	{
		// create container
		container = document.createElement('article');
		container.className = 'Info';

		// place container
		container.style.position = 'absolute';
		container.style.left = x + 'px';
		container.style.top  = y + 'px';

		// add element to container

		// time lable
		// date lable
		// time
		// date
		// update the shit



		var d = new Date();
		var n = d.getHours();
		
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