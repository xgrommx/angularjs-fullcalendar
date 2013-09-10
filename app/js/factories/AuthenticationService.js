myCalendar.factory('AuthenticationService', ['$location', function($location) {
	return {
		login: function(credentials) {
			if(credentials.username !== "demo" &&  credentials.password !== "demo") {
	        alert('wrong username or password') 
		    }
		    else {
		        $location.path('/home');
		    }
		},
		logout: function() {
			$location.path('/login');
		}
	};  	    
}]);