'use strict';

// Declare app level module which depends on filters, and services
angular.module('scriptureMasteryApp', [
  'ngRoute',
  'scriptureMasteryApp.filters',
  'scriptureMasteryApp.services',
  'scriptureMasteryApp.directives',
  'scriptureMasteryApp.controllers',
  'ngSanitize'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/master-scriptures', {templateUrl: 'partials/levelSelect.html', controller: 'LevelSelectCtrl'});
  $routeProvider.when('/master-scriptures/:scripture_set/:scripture_index', {templateUrl: 'partials/playground.html', controller: 'MainGameCtrl'});
  $routeProvider.otherwise({redirectTo: '/master-scriptures'});
}]);
