'use strict'

app.factory('ItemFactory', function($http, $q) {

	const getItemsByUser = userId => 
		$q((resolve, reject) => 
			$http
				.get(`/api/getItems/${userId}`)
				.then(({data}) => data ? resolve(data) : reject(null)))

	const postNewItem = newItem => 
		$q((resolve, reject) => 
			$http
				.post('/api/newItem', newItem)
				.then(({data}) => data ? resolve(data) : reject(null)))
	

	return {
		getItemsByUser,
		postNewItem
	}

})