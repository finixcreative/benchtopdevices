angular.module('slidesMod', ['ngAnimate', 'ngTouch', 'ngResource'])
	.factory('Slides', ['$resource', function SlidesFactory($resource){
		return $resource('/website/app/widgets/slides/slides/slide-a.json', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	}]);