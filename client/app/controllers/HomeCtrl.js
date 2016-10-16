'use strict'

app.controller('HomeCtrl', function($scope, $http, UserFactory, ItemFactory) {

	$scope.userArray = []
	$scope.itemArray = []
	$scope.currentUser = ''

 	const getAllUsers = () => 
		UserFactory.getAllUsers()
			.then(users => $scope.userArray = users)
 	
 	getAllUsers()

	const resetNewItemForm = () => 
		$scope.newItem = {
				item_name: '',
				item_type: '',
				item_add_date: '',
				item_exp_date: '',
				item_amount: ''
		 	}
	
	resetNewItemForm()

	$scope.submitUser = user => {
		$scope.userArray.push(user)
		UserFactory.postNewUser(user)
	}

	$scope.showUserItems = user => {
		$scope.currentUser = user
		ItemFactory.getItemsByUser(user.id)
			.then(items => $scope.itemArray = items)
	}

	$scope.submitNewItem = newItem => {
		newItem.user_id = $scope.currentUser.id
		$http
			.post('/api/newItem', newItem)
			.then((data) => {
				resetNewItemForm()
				$scope.showUserItems($scope.currentUser)
			})
	}
})