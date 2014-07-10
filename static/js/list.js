(function(b){

/*
Author:  IgJo
Created: 26.06.2014
Version: c0.1
*/

List = function(id, myClass, x, y)
{
	// Variables //////////////////////////////////////////////////////////////////
	var i_container = 0;
	var waypointArray = [];
	var childContent;
	var markerIcon;



	// functions //////////////////////////////////////////////////////////////////
	function create()
	{
		i_container = document.createElement('ul');
		i_container.className += myClass;
		i_container.id = id;
		i_container.style.position = 'absolute';
		i_container.style.left = x + 'px';
		i_container.style.top = y + 'px';

		// process
		// wait for new element
		$(i_container).on( "custom", function(event, param1, param2){
			say(param1 + ' ' + param2);
			if (param1 == 0) {
				childContent = document.createElement('li');
				waypointArray.push(childContent);
				childContent.style.top = ((waypointArray.length-1) * 30) + 'px';
				markerIcon = document.createElement('img');
				markerIcon.src = '../img/list/maker_icon.fw.png';
				childContent.innerHTML = 'Waypoint ' + param2;
				childContent.appendChild(markerIcon);
				$(markerIcon).animo({ animation: 'bounceIn', duration: .8});
				i_container.appendChild(childContent);
			} else if(param1 == 1) {
				// waypointArray[param2-1].style.background = "url('../img/list/list_act.fw.png')";
				// $(waypointArray[param2-1]).find('img').animo({ animation: 'tada', duration: .4});
				waypointArray[param2-1].style.background = "url('../img/list/list_act.fw.png')";
				$(waypointArray[param2-1]).animo({ animation: 'bounceIn', duration: .4});
			} else if(param1 == 2) {
				// waypointArray[param2-1].style.background = "url('../img/list/list.fw.png')";
				// $(waypointArray[param2-1]).find('img').animo({ animation: 'bounce', duration: .4});
				// $(waypointArray[param2-1]).find('img').animo({ animation: 'bounceInDown', duration: .4});

				waypointArray[param2-1].style.background = "url('../img/list/list.fw.png')";
				$(waypointArray[param2-1]).animo({ animation: 'bounceIn', duration: .4});
			};
			i_container.style.border = "2px soild red";
		});


	

		
		// event listener
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
		
	}



	// ------------------------------------------------------------
	
	/* public functions */
	var exposed = {
		create: create,
	}
	return exposed;
}
})(window);