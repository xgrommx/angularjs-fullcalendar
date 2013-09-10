// Declare app level module which depends on filters, and services
var myCalendar = angular.module('calendarApp', ['ui.calendar']);

// Configure the module with routes
myCalendar.config(function($routeProvider) {
    $routeProvider.when('/login',
        {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        });
    $routeProvider.when('/calendar', 
        {
            templateUrl: 'views/calendar.html',
            controller: 'CalendarController'       
        });
    $routeProvider.when('/home', 
        {
            templateUrl: 'views/home.html',
            controller: 'HomeController'       
        });
    $routeProvider.when('/logout', 
        {
            templateUrl: 'views/logout.html',
            controller: 'LogoutController'       
        });
    $routeProvider.when('/addevent', 
        {
            templateUrl: 'views/addevent.html',
            controller: 'AddEventController'       
        });
    $routeProvider.otherwise({ redirecto: '/login' });
});
