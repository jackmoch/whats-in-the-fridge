'use strict'

app.factory('ItemFactory', function($http, $q) {

	const getItemsByUser = userId => 
		$q((resolve, reject) => 
			$http
				.get(`/api/getItems/${userId}`)
				.then(({data}) => data ? resolve(data) : reject(null)))
	

	return {
		getItemsByUser
	}

})