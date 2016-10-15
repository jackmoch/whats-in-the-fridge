'use strict'

app.controller('HomeCtrl', function($scope, $http) {

	$scope.submit = function(user) {

		console.log(user)

		$http
			.post('/api/newUser', user)
			.then((data) => {
				console.log(data)
			})

	}

})