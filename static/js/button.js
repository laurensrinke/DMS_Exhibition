(function(b){

/*
Author:  IgJo
Created: 24.06.2014
Version: c0.1
*/

// what i gonna do
// Bilder einfügen
// Text platzieren

// Questions
// Q1: Button_Act Füllfarbe auf 100% lassen?


Button = function(id, text, img_normal, img_over, img_down, x, y, show_prozess, style_class)
{
	
	// Variables ////////////////////////////////////////////////////////
	var i_this;

	var i_container = 0;
	var i_text_container = '';

	var def = '';
	var b_normal = '';
	var b_over   = '';
	var b_down = '';

	var i_prozess = '';

	// functions ////////////////////////////////////////////////////////
	// 
	function create()
	{
		/*
		Notes
		Es gibt noch viel besser JS Methoden um ein div zu erstellen und mit div und text zu versehen. 
		*/
		// create container
		i_container = document.createElement('section');
		i_container.className += style_class;
		i_container.id = id;
		i_container.style.position = 'absolute';
		i_container.style.left = x + 'px';
		i_container.style.top = y + 'px';

		// create states elements
		b_normal = document.createElement('img');
		b_normal.src = img_normal;
		b_normal.className+= 'btn_img';

		b_over = document.createElement('img');
		b_over.src = img_over;
		b_over.className+= 'btn_img';
		b_over.style.opacity = 0;

		b_down = document.createElement('img');
		b_down.src = img_down;
		b_down.className+= 'btn_img';
		b_down.style.opacity = 0;

		// add text
		i_text_container = document.createElement('section');
		i_text_container.innerHTML = text;
		i_text_container.className = 'btn_text'

		// add elements together
		i_container.appendChild(b_normal);
		i_container.appendChild(b_over);
		i_container.appendChild(b_down);
		i_container.appendChild(i_text_container);

		// add object to page
		document.body.appendChild(i_container);

		// Event Listener ///////////////////////////////////////////////////////////////////////
		i_container.addEventListener("mouseover", mouse_over, false);
		i_container.addEventListener("mouseout", mouse_out, false);
		i_container.addEventListener("mousedown", mouse_down, false);
		i_container.addEventListener("mouseup", mouse_up, false);

		// return _id;
	}
	
	function mouse_over()
	{
		b_over.style.opacity = 1;
	}

	function mouse_out()
	{
		b_over.style.opacity = 0;
		
	}

	function mouse_down()
	{
		b_down.style.opacity = 1;	
	}

	function mouse_up()
	{
		b_down.style.opacity = 0;
	}

	function show_prozess()
	{
		var p_value = 0;
		$('#nav_b1_line').remove();
		// add line
		i_prozess = document.createElement('section');
		i_prozess.id = id + '_line';
		i_prozess.className = 'btn_line';

		// add glow object
		var myVar = setInterval(function() {
			if (p_value < 213) {
	    		p_value = p_value + 1;
	    		i_prozess.style.width = p_value + 'px';
	    	} else {
	    		clearInterval(myVar)
	    	}
	    	console.log(p_value);
	    }, 2);
		

		// add elements to DOM
		i_container.appendChild(i_prozess);
	}
	
	
	/* expose certain functions (in this case ALL) */
	var exposed = {
		create: create,
		mouse_over: mouse_over, 
		mouse_out: mouse_out,
		mouse_down: mouse_down,
		mouse_up: mouse_up,
		show_prozess: show_prozess,
	}
	return exposed;
}
})(window);