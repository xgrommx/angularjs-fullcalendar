// global variables
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

myCalendar.controller('CalendarController', ['$scope', 'eventsFactory', function($scope, eventsFactory) {// factory injected into controller at runtime
    /* event source that pulls from google.com */
    $scope.eventSource = {
        url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
        className: 'gcal-event',           // an option!
        currentTimezone: 'America/Chicago' // an option!
    };

    /* event source that contains custom events on the scope */
    $scope.events = eventsFactory.getEvents();

    $scope.init = function() {
        eventsFactory.getEvents();
    };


    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, callback) {
        var s = new Date(start).getTime() / 1000;
        var e = new Date(end).getTime() / 1000;
        var m = new Date(start).getMonth();
        var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
        callback(events);
    };
    /* alert on eventClick */
    $scope.dayClick = function( date, allDay, jsEvent, view) {
        $scope.$apply(function() {
            
            /*eventsFactory.addEvents();*/
            $('#myModal').foundation('reveal', 'open');
            $('#date').val(date);
            $('#send').click(function() {
                $scope.events.push({
                title: $scope.newEvent.title, 
                start: $scope.newEvent.start
            });
            console.log($scope.events);    
            $('#myModal').foundation('reveal', 'close');
            });
            $('a.close-reveal-modal').click(function() {
                $('#myModal').foundation('reveal', 'close');
            });
            
        });
    };
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
    $scope.addRemoveEventSource = function(sources,source) {
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
    /* add custom event*/
    $scope.addEvent = function() {
        $scope.events.push({
            title: 'Open Sesame',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            className: ['openSesame']
        });
    };
    /* remove event */
    $scope.remove = function(index) {
        $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
        calendar.fullCalendar('changeView',view);
    };
    /* config object */
    $scope.uiConfig = {
        calendar:{
            height: 530,
            editable: true,
            header:{
                left: 'prev, next, today',
                center: 'title',
                right: 'month, agendaWeek, agendaDay'
            },
            dayClick: $scope.dayClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventClick: $scope.dayClick
        }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
}]);