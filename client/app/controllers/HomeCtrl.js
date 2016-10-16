'use strict'

app.controller('HomeCtrl', function($scope, $http) {

	$scope.userArray = []
	$scope.itemArray = []
	$scope.currentUser = ''

	const getAllUsers = function() {
		$http
			.get('/api/allUsers')
			.then(({data}) => {
				$scope.userArray = data
			})
	}
	getAllUsers()

	$scope.submitUser = function(user) {
		$scope.userArray.push(user)
		$http
			.post('/api/newUser', user)
			.then((data) => {
				getAllUsers()
			})
	}

	$scope.showUserItems = function(user) {
		$scope.currentUser = user
		$http
			.get(`/api/getItems/${user.id}`)
			.then(({data}) => {
				$scope.itemArray = data
			})
	}

	$scope.submitNewItem = function(newItem) {
		console.log(newItem)
	}

})