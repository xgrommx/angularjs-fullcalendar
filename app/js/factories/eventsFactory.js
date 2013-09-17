myCalendar.factory('eventsFactory', function($location) {
	//events
	var events = [
        {   id: 231,
            title: 'All Day Event',
        	start: new Date(y, m, 1),
        	address: "",
            coordinates: [], 
        },
        {   
            id: 232,
        	title: 'Long Event',
        	start: new Date(y, m, d - 5),
        	end: new Date(y, m, d - 2),
        	address: " ",
        	coordinates: [] 
        },
        {   
        	id: 999,
        	title: 'Repeating Event',
        	start: new Date(y, m, d - 3, 16, 0),
        	allDay: false,
        	address: "",
        	coordinates: []  
        },
        {   
        	id: 1000,
        	title: 'Repeating Event_2',
        	start: new Date(y, m, d + 4, 16, 0),
        	allDay: false,
        	address: "",
            coordinates: [],  
        },
        {   
            id: 233,
        	title: 'Birthday Party',
        	start: new Date(y, m, d + 1, 19, 0),
        	end: new Date(y, m, d + 1, 22, 30),
        	allDay: false,
        	address: "",
            coordinates: [],    
        },
        {   
            id: 234,
        	title: 'Click for Google',
        	start: new Date(y, m, 28),
        	end: new Date(y, m, 29),
        	url: 'http://google.com/',
        	address: "",
            coordinates: [],   
        }
    ];
    var factory = {};
	factory.getEvents = function() {
		return events;
	};
	//debugangular
	window.scope = factory;
	return factory;
});