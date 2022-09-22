'use strict';

angular.module('myApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/js-view', {
    templateUrl: 'legacy-app/js-view/view.html',
    controller: 'JsViewCtrl'
  });
}])
.controller('JsViewCtrl', function($scope) {
});