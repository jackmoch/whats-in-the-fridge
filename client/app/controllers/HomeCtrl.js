'use strict'

app.controller('HomeCtrl', function($scope, $http) {

	$scope.userArray = []
	$scope.itemArray = []
	$scope.currentUser = ''
	$scope.newItem = {
		item_name: '',
		item_type: '',
		item_add_date: '',
		item_exp_date: '',
		item_amount: ''
 	}

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
		newItem.user_id = $scope.currentUser.id
		$http
			.post('/api/newItem', newItem)
			.then((data) => {
				resetNewItemForm()
				$scope.showUserItems($scope.currentUser)
			})
	}

	const resetNewItemForm = function() {
		$scope.newItem.item_name = ''
		$scope.newItem.item_type = ''
		$scope.newItem.item_add_date = ''
		$scope.newItem.item_exp_date = ''
		$scope.newItem.item_amount = ''
	}

})