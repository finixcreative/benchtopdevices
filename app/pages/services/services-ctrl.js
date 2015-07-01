angular.module('productsMod')
	.controller('ProductsController', ['$scope', function($scope){
		this.services = services;
		this.products = products;
//		$scope.products.selected = {};
//		$scope.update = function(order) {
//			$scope.master = angular.copy(order);
//		};
	}]);