angular.module('finixApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/pages/home/home.html',
			})
			.when('/services', {
				templateUrl: 'app/pages/services/services.html',
				controller: '',
				controllerAs: '',
			})
			.when('/about', {
				templateUrl: 'app/pages/about/about.html',
			})
			.when('/technical', {
				templateUrl: 'app/pages/technical/technical.html',
			})
			.when('/contact', {
				templateUrl: 'app/pages/contact/contact.html',
			})
			.otherwise({
				redirectTo: '/',
			});
	}]);