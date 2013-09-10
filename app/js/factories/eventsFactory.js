// TODO: read real time events using $http
myCalendar.factory('eventsFactory', function($location) {
	//events
	var events = [
        {   title: 'All Day Event',start: new Date(y, m, 1) },
        {   title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2) },
        {   id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false  },
        {   id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false  },
        {   title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false    },
        {   title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'   }
    ];
    var factory = {};
	factory.getEvents = function() {
		return events;
	};
	//debugangular
	window.scope = factory;
	return factory;
});