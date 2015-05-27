angular.module('coreMod')
	.directive('social', function(){
		return {
			restrict: 'E',
			templateUrl: '/benchtopdevices/app/modules/social/social.html',
			controller: 'ClientController',
			controllerAs: 'client',
		};
	});