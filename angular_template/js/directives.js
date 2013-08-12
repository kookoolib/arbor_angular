'use strict';

/* Directives */
App.directive('arbor', function() {
    return{
        restrict: 'A',
        scope: {graphData1: '=data'},
        link: function(scope, elem, attrs) {
            scope.$watch("graphData1", function(v) {
                console.log("watching graph data");
                console.log(v);
				// Initialise arbor
				sys.parameters({stiffness:600, repulsion:2000, gravity:false, dt:0.015});
				sys.renderer = Renderer("#viewport");
				//sys.graft(v);
				sys.merge(v);
				sys.tweenNode("KooKoo", 3, {color:"#0431B4", radius:2})
				//sys.start();

            });
        }
    };
});
