'use strict'

app.factory('UserFactory', function($http, $scope) {

	const postUser = function(user) {
		console.log(user)
	}

	console.log('test')

	return { postUser }

})