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
    var i = 0;

    $scope.doOptions = [{
      triggerEvent: 'click'
    },
    {
      triggerEvent: 'hover'
    },
    {
      triggerEvent: 'none'
    }];

    $scope.currentIds = {};
    $scope.removedIds = {};

    $scope.addDropover = function() {
      var newId = 'ngdo-' + i;
      $scope.currentIds[newId] = Math.floor(Math.random()*3);
      i++;
    };

    $scope.removeDropover = function(id) {
      delete $scope.currentIds[id];
      $scope.removedIds[id] = true;
    };

    $scope.openOld = function(event) {
      event.stopPropagation();
      Object.keys($scope.removedIds).forEach(function(id){
        console.log('send open event for: ', id);
        $scope.$emit('ngDropover.open', id);
      });
    };
    $scope.openCurrent = function(event) {
      event.stopPropagation();
      Object.keys($scope.currentIds).forEach(function(id){
        console.log('send open event for: ', id);
        $scope.$emit('ngDropover.open', id);
      });
    };

    $scope.$on('ngDropover.opening', function(e, dropObj) {
      console.log('caught ngDropover.opening : ', dropObj);
    });

}]);
