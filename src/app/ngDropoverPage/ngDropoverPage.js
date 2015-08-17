angular.module('verical.ngDropoverPage', ['ui.router'])

.config(["$stateProvider", function config($stateProvider) {
    $stateProvider.state('ngDropoverPage', {
        url: '/ngDropover',
        views: {
            "main": {
                controller: 'ngDropoverPageCtrl',
                templateUrl: '/src/app/ngDropoverPage/ngDropoverPage.tpl.html'
            }
        },
        data: {
            pageTitle: 'ngDropover'
        }
    });
}])

.controller('ngDropoverPageCtrl', ["$scope", function ngDropoverPageCtrl($scope) {

    $scope.exampleOptions = {
        'horizontalOffset': 0,
        'verticalOffset': 0,
        'closeOthersOnOpen': false,
        'trigger': "",
        'triggerEvent': "click",
        'position': "bottom-left",
        'closeOnClickOff': true
    };
}]);
