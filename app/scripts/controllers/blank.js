'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular
    .module('sbAdminApp')
    .controller('BlankCtrl',function($scope,$stateParams, $timeout) {
        console.log($scope);
        console.log($stateParams.apptype);
        $scope.apptype = $stateParams.apptype;


    });