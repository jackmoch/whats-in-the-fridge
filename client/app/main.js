'use strict'

const app = 
	angular
		.module('meanStack', ['ngRoute'])
		.config($routeProvider => {
			$routeProvider
				.when('/', {
					controller: 'HomeCtrl',
					templateUrl: 'partials/home.html'
				})
		})