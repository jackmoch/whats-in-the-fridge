'use strict'

app.factory('UserFactory', function($http, $q) {

	const getAllUsers = function() {
		return $q((resolve, reject) => 
			$http
				.get('/api/allUsers')
				.then(({data}) => {
					if (data) {
						resolve(data)
					} else {
						reject(null)
					}
				})
		)
	}

	return { getAllUsers }

})