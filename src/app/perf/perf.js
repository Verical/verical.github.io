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

    $scope.doOptions1 = {
      closeWhenClickOff: false,
      position: 'bottom',
      triggerEvent: 'none'
    };

    $scope.currentIds = {};
    $scope.removedIds = {};

    $scope.addDropover = function() {
      var newId = 'ngdo-' + i;
      $scope.currentIds[newId] = true;
      i++;
      console.log($scope.currentIds);
    };

    $scope.removeDropover = function(id) {
      delete $scope.currentIds[id];
      $scope.removedIds[id] = true;
      console.log($scope.removedIds);
    };

    $scope.openOld = function() {
      Object.keys(removedIds).foreach(function(id){
        console.log('opening: ', id);
        $scope.$emit('ngDropover.open', id);
      });
    };

}]);
