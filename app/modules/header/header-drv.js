angular.module('coreMod')
	.directive('appheader', function(){
		return {
			restrict: 'E',
			templateUrl: '/benchtopdevices/app/modules/header/header.html'
		};
	});