'use strict';

/* Controllers */

function GraphCtrl($scope, $timeout,Graph) {
    
    $scope.data1={
	"nodes":{
      },
    "edges":{
      }
    };
    (function tick1() {
			Graph.get(function(graphData1) {
				$scope.data1=graphData1;
				console.log("gd=",graphData1);
				$timeout(tick1, 5000);
			});
     })();
}
