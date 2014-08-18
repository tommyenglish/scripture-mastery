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
  $routeProvider.when('/master-scriptures', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/bom/:scripture_index', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/master-scriptures'});
}]);
