angular.module('finixApp')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'app/pages/home/home.html',
				controller: 'SitemapController',
				controllerAs: 'sitemap',
			})
			.when('/services', {
				templateUrl: 'app/pages/services/services.html',
				controller: 'PanelController',
				controllerAs: 'panel',
			})
			.when('/technical', {
				templateUrl: 'app/pages/technical/technical.html',
			})
			.when('/about', {
				templateUrl: 'app/pages/about/about.html',
			})
			.otherwise({
				redirectTo: '/home',
			});
	}]);