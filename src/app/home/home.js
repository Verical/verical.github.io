angular.module('ngBoilerplate.home', [
    'ui.router',
    'plusOne'
])

.config(["$stateProvider", function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: '/src/app/home/home.tpl.html'
            }
        },
        data: {
            pageTitle: 'Home'
        }
    });
}])

.controller('HomeCtrl', ["$scope", function HomeController($scope) {

    $scope.exampleOptions = {
        'offsetX': 0,
        'offsetY': 0,
        'wrapperClass': '',
        'closeOthersOnOpen': false,
        'trigger': "",
        'triggerEvent': "click",
        'position': "bottom-left",
        'closeOnClickOff': true
    };

}]);
