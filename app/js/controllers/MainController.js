myCalendar.controller('MainController', ['$scope', '$location', function($scope, $location) {
	$scope.openCalendar = function(route) {
        $location.path('/calendar');
    };

    $scope.logoutButton = function() {
        $location.path('/logout');
    };
}]);
