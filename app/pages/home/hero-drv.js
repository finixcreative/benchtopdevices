angular.module('coreMod')
	.directive('hero', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'ContentController',
			controllerAs: 'content',
			templateUrl: '/benchtopdevices/app/pages/home/hero.html',
		};
	});