'use strict';

/* App Module */

var App=angular.module('phonecat', ['graphDisplayServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/graph', {templateUrl: 'partials/graph.htm', controller: GraphCtrl}).
      otherwise({redirectTo: '/graph'});
}]);



App.filter('isempty', function() {
    return function(input, replaceText) {
        if(input) return input;
        return replaceText;
    }
});
