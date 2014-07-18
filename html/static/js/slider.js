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

Slider = function(id, myClass, x, y)
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
		i_container.type = 'range';
		i_container.style.position = 'absolute';
		i_container.style.left = x + 'px';
		i_container.style.top = y + 'px';

		$(i_container).on('change' ,function(){
			say(i_container.value=parseInt(this.value));
		});
		return i_container;
	}

	function switchUnit () {
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