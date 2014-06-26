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


Button = function(id, text, img_def, img_hover, img_act, x, y, show_prozess, style_class)
{
	
	// Variables ////////////////////////////////////////////////////////
	var i_this;

	var i_container = 0;
	var i_text_container = '';

	var b_def = '';
	var b_hover   = '';
	var b_act = '';

	var isActive = false; // 

	var i_prozess = '';

	var j_id = ''; // jQuery_ID


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
		b_act = document.createElement('img');
		b_act.src = img_act;
		b_act.className+= 'btn_img';
		b_act.style.opacity = 0;

		b_hover = document.createElement('img');
		b_hover.src = img_hover;
		b_hover.className+= 'btn_img';
		b_hover.style.opacity = 0;


		b_def = document.createElement('img');
		b_def.src = img_def;
		b_def.className+= 'btn_img';

		// add text
		i_text_container = document.createElement('article');
		i_text_container.innerHTML = text;
		i_text_container.className = 'btn_text'

		// add elements together
		i_container.appendChild(b_def);
		i_container.appendChild(b_act);
		i_container.appendChild(b_hover);
		i_container.appendChild(i_text_container);

		// add object to page
		document.body.appendChild(i_container);

		// Event Listener ///////////////////////////////////////////////////////////////////////
		i_container.addEventListener("mouseover", mouseOver, false);
		i_container.addEventListener("mouseout", mouseOut, false);
		i_container.addEventListener("mousedown", mouseDown, false);
		i_container.addEventListener("mouseup", mouseUp, false);

		// return
		// return _id;
	}
	
	
	// ---------------- Mouse -----------------

	function mouseOver()
	{
		b_hover.style.opacity = 1;
		$('#' + id).trigger( "custom", ["over"]);
	}


	function mouseOut()
	{
		b_hover.style.opacity = 0;
		$('#' + id).trigger( "custom", ["out"]);
	}

	function mouseDown()
	{
		b_act.style.opacity = 1;
		if (isActive) {
			isActive = false;
		} else{
			isActive = true;
		};
		$('#' + id).trigger( "custom", ["down"]);
	}

	function mouseUp()
	{
		// send event to set all buttons on inactive

		// ... 
		b_act.style.opacity = 0;
		if (isActive) {
			b_act.style.opacity = 1;

		} else{
			b_act.style.opacity = 0;
		};
		$('#' + id).trigger( "custom", ["up"]);
	}

	// ---------------- Settings ----------------
	

	function getId()
	{
		return id;
	}

	function setActive()
	{
		b_act.style.opacity = 1;

	}

	function setInactive()
	{
		b_act.style.opacity = 0;
	}

	function showProzess()
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
	
	
	/* define public functions */
	var exposed = {
		create: create,
		// mouseOver: mouseOver, 
		// mouseOut: mouseOut,
		// mouseDown: mouseDown,
		// mouseUp: mouseUp,
		getId:getId,
		setActive:setActive, 
		setInactive: setInactive,
		setActive: setActive,
		// showProzess: showProzess,
	}
	return exposed;
}
})(window);