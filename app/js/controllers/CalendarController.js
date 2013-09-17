// global variables
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

myCalendar.controller('CalendarController', ['$scope', '$location', 'eventsFactory', function($scope, $location, eventsFactory) {// factory injected into controller at runtime
    /* event source that pulls from google.com */
    $scope.eventSource = {
        url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
        className: 'gcal-event',           // an option!
        currentTimezone: 'America/Chicago', // an option!
        error: function() {
            alert('there was an error while fetching events!');
        }
    };

    /* event source that contains custom events on the scope */
    $scope.events = eventsFactory.getEvents();

    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, callback) {
        var s = new Date(start).getTime() / 1000;
        var e = new Date(end).getTime() / 1000;
        var m = new Date(start).getMonth();
        var events = [
            {
                title: 'Feed Me ' + m,
                start: s + (50000),
                end: s + (100000),
                allDay: false, 
                className: ['customFeed']
            }
        ];    
        callback(events);
    };

    /* alert on eventClick */
    /*$scope.dayClick = function(date, allDay, jsEvent, view) {
        $scope.$apply(function() {
            $scope.addEvent(date);  
        });
    };*/
    /* alert on Drop */
     $scope.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view) {
        $scope.$apply(function() {
            $scope.alertMessage = ('Event Dropped to make dayDelta ' + dayDelta);
        });
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ){
        $scope.$apply(function() {
            $scope.alertMessage = ('Event Resized to make dayDelta ' + minuteDelta);
        });
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources, source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source) {
            sources.splice(key,1);
            canAdd = 1;
        }
      });
        if(canAdd === 0){
            sources.push(source);
        }
    };

    $scope.backtoCalendar = function(route) {
        $location.path('/calendar');
    };
    /* add custom event*/
    $scope.select = function(start, end, allDay) {
        //modal renders and initialize
        $('#myModal').foundation('reveal', 'open');
        $('#startDate').val(new Date(start));
        $('#endDate').val(new Date(end));
        $('#eventTitle').val('');

        //buttons
        $('#sendAdd').click(function() {
        $scope.events.push({
            title: $scope.newEvent.title,
            start: start,
            end: end,
            allDay: false
        }); 
        
        //render created events
        $scope.renderEvent = function (event) {
            var eventObject = {
                title: $scope.newEvent.title,
                start: start,
                end: end,
                allDay: false
            };
            $scope.myCalendar.fullCalendar('renderEvent', eventObject, true);
            return eventObject;
            $scope.myCalendar.fullCalendar('unselect');
        };

        //call render function
        $scope.renderEvent(event);

        //buttons    
        $('#myModal').foundation('reveal', 'close');
        $scope.backtoCalendar('calendar');
        });

        $('a.close-reveal-modal').click(function() {
            $('#myModal').foundation('reveal', 'close');
        });
        $('#cancelAdd').click(function() {
            $(this).foundation('reveal', 'close');
        });
        return;
    };
    
    /* event clicked */
    $scope.eventClick = function(event, jsEvent, view) {
        //modal render
        $('#editModal').foundation('reveal', 'open');
        //initialization
        $('#editTitle').val(event.title);
        $('#editDate').html('');
        $('#editDate').val(event.start);

        //buttons
        $('a.close-reveal-modal').click(function() {
            $('#myModal').foundation('reveal', 'close');
        });
        $('#editSend').click(function() {
            $(this).foundation('reveal', 'close');
        });
        $('#editCancel').click(function() {
            $(this).foundation('reveal', 'close');
        });
        $('#editDelete').click(function() {console.log(event.id)
            $scope.myCalendar.fullCalendar('removeEvents', event.id);
            $scope.myCalendar.fullCalendar('refetchEvents');
            $(this).foundation('reveal', 'close');
        });    
    };

    /* remove event */
    $scope.remove = function(index) {
        $scope.events.splice(index,1);
    };

    /* remove event */
    $scope.removeEvents = function(event) {
        myCalendar.fullCalendar('removeEvents', event.id);
    };

    /* Change View */
    $scope.changeView = function(view, calendar) {
        myCalendar.fullCalendar('changeView',view);
    };
    /* config object */
    $scope.uiConfig = {
        calendar:{
            height: 530,
            editable: true,
            selectable: true,
            header:{
                left: 'prev, next, today',
                center: 'title',
                right: 'month, agendaWeek, agendaDay'
            },
            select: $scope.select,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventClick: $scope.eventClick
        }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
}]);