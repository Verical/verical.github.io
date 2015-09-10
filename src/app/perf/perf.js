angular.module('verical.perf', ['ui.router'])

.config(["$stateProvider", function config($stateProvider) {
    $stateProvider.state('perf', {
        url: '/perf',
        views: {
            "main": {
                controller: 'perfCtrl',
                templateUrl: '/src/app/perf/perf.tpl.html'
            }
        },
        data: {
            pageTitle: 'perf'
        }
    });
}])

.controller('perfCtrl', ["$scope","$window", "$rootScope", function perfCtrl($scope, $window, $rootScope) {
    $scope.doOptions1 = {
      closeWhenClickOff: false,
      position: 'bottom',
      triggerEvent: 'none'
    };
    
    angular.element(document.querySelector('#hover')).on('mouseover', function() {
      $scope.$emit('ngDropover.open', 'myDropover');
    });

    angular.element(document.querySelector('#hover')).on('mouseout', function() {
        $scope.$emit('ngDropover.close', 'myDropover');
    });
    
    $rootScope.$on('ngDropover.opening', function(event, dropObj) {
      if(dropObj.options.groupId == 'jqueryGroup'){
        $(dropObj.dropoverContents).stop().slideDown(); 
      }
    });
        
    $rootScope.$on('ngDropover.closing', function(event, dropObj) {
      if(dropObj.options.groupId == 'jqueryGroup'){
        $(dropObj.dropoverContents).show();
        $(dropObj.dropoverContents).stop().slideUp();
      }
    });

}]);
