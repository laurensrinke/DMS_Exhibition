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

Edit = function(id, myClass, x, y)
{
	// Variables //////////////////////////////////////////////////////////////////
	var i_container = 0;
	var status = 0;
	var myLength = 0;
	var target = 0;

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

		$(i_container).on('input', function  (argument) {
			say(('#tab_1_list_1 ul li:nth-child(' + (target-1) + ')'));
			// $('#tab_1_list_1 li:nth-child(' + target + ')').css('border', '1px solid green');
			$('#tab_1_list_1 li:nth-child(' + target + ')').html(i_container.value);
			// $('#tab_1_list_1 li:nth-child(' + target + ')').append('<img class="tak_icon" src="../img/list/tak_icon.fw.png" width="25px">');
		});

		// click on tag icon - icon will be added!
		

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

	function setTarget (nr) {
		
	}

	function setValue (argument, nr) {
		i_container.value = argument;
		target = nr;
		return argument;
	}


	// ------------------------------------------------------------
	
	/* public functions */
	var exposed = {
		create: create,
		updateStatus: updateStatus,
		setTarget: setTarget,
		setValue: setValue,
	}
	return exposed;
}
})(window);