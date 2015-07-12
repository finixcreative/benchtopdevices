angular.module('coreMod')
	.directive('subsection', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'ContentController',
			controllerAs: 'content',
			templateUrl: '/benchtopdevices/app/pages/home/subsection.html',
		};
	});