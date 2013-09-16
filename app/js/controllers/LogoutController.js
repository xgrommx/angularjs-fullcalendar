myCalendar.controller('LogoutController', ['$scope', 'AuthenticationService', function($scope, AuthenticationService) {
	$scope.loggedoutTitle = "Logged Out";
	$scope.loginBack = "Log in back";
	$scope.logout = function() {
		AuthenticationService.logout();
	};
}]);