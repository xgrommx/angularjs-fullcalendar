myCalendar.controller('MainController', ['$scope', '$location', function($scope, $location) {

	$scope.homeTab = "Home";

	$scope.calendarTab = "Calendar";

	$scope.mapTab = "Map";

	$scope.searchTab = "Search";

	$scope.logoutTab = "Logout";

	$scope.addEvent = "Add Event";

	$scope.editEvent = "Edit Event";

	$scope.cancelBtn = "Cancel";

	$scope.sendBtn = "Send";

	$scope.deleteBtn = "Delete";

	$scope.openHome = function(route) {
    	$location.path('/home');
    };

	$scope.openCalendar = function(route) {
        $location.path('/calendar');
    };

    $scope.logoutButton = function(route) {
        $location.path('/logout');
    };
}]);
