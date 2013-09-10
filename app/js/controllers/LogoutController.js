myCalendar.controller('LogoutController', ['$scope', 'AuthenticationService', function($scope, AuthenticationService) {
	$scope.logout = function() {
		AuthenticationService.logout();
	};
}]);