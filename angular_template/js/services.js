'use strict';

/* Services */
//replace the URL with your own service which return JSON in the format as specified by data/data.json
angular.module('graphDisplayServices', ['ngResource']).
    factory('Graph', function($resource){
	return $resource('data/data.json');
});
