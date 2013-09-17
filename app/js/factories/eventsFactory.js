myCalendar.factory('eventsFactory', function($location) {
	//events
	var events = [
        {   id: 231,
            title: 'All Day Event',
        	start: new Date(y, m, 1),
        	address: "Betongblandargränden 5",
            coordinates: [60.181242, 24.831756], 
        },
        {   
            id: 232,
        	title: 'Long Event',
        	start: new Date(y, m, d - 5),
        	end: new Date(y, m, d - 2),
        	address: "Otaniementie 17",
        	coordinates: [60.186705, 24.819721] 
        },
        {   
        	id: 999,
        	title: 'Repeating Event',
        	start: new Date(y, m, d - 3, 16, 0),
        	allDay: false,
        	address: "Mannerheimintie 3",
        	coordinates: [60.168692,24.940417]  
        },
        {   
        	id: 1000,
        	title: 'Repeating Event_2',
        	start: new Date(y, m, d + 4, 16, 0),
        	allDay: false,
        	address: "Keilalahdentie 4",
            coordinates: [60.170293,24.826599]  
        },
        {   
            id: 233,
        	title: 'Otaniemen urheilukenttä',
        	start: new Date(y, m, d + 1, 19, 0),
        	end: new Date(y, m, d + 1, 22, 30),
        	allDay: false,
        	address: "02150 Espoo",
            coordinates: [60.185404,24.834925]    
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