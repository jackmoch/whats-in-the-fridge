'use strict'

app.controller('HomeCtrl', function($scope, $http) {

	$scope.userArray = []
	$scope.itemArray = []

	const getAllUsers = function() {

		$http
			.get('/api/allUsers')
			.then(({data}) => {
				$scope.userArray = data
			})

	}

	getAllUsers()

	$scope.submit = function(user) {

		$scope.userArray.push(user)

		$http
			.post('/api/newUser', user)
			.then((data) => {
				getAllUsers()
			})

	}

	$scope.showUserItems = function(id) {

		$http
			.get(`/api/getItems/${id}`)
			.then(({data}) => {
				$scope.itemArray = data
			})

	}

})