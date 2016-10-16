'use strict'

app.factory('UserFactory', function($http, $q) {

	const getAllUsers = function() {
		return $q((resolve, reject) => 
			$http
				.get('/api/allUsers')
				.then(({data}) => {
					data ? resolve(data) : reject(null)
				})
		)
	}

	const postNewUser = function(newUser) {
		return $q((resolve, reject) => 
			$http
			.post('/api/newUser', newUser)
			.then((data) => {
				data ? resolve() : reject() 
			})
		)
	}

	return { 
		getAllUsers,
		postNewUser
	}

})