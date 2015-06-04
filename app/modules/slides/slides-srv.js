angular.module('slidesMod', ['ngAnimate', 'ngTouch', 'ngResource'])
	.factory('Slides', ['$resource', function SlidesFactory($resource){
		return $resource('/benchtopdevices/app/modules/slides/slides/slide-a.json', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}]);