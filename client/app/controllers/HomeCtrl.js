'use strict'

app.controller('HomeCtrl', function($scope) {

	$scope.submit = function() {
		console.log($scope.email)
	}

})