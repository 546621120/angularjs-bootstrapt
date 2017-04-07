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
    .controller('BlacklistChgCtrl',function($scope, $timeout,$compile) {
        $scope.phonegrid = {};
        $scope.phonegrid.paginationPageSizes= [10, 20, 50,100];
        $scope.phonegrid.paginationPageSize = 10;
        $scope.phonegrid.columnDefs= [
                {displayName: '',name :'0'},
                {displayName: '电话号码',name :'1'},
                {displayName: '客户姓名',name :'2'},
                {displayName: '启用标志',name :'3'},
                {displayName: '创建日期',name :'4'},
                {displayName: '修改日期',name :'5'},
                {displayName: '修改人员',name :'6'},
            ];

        $scope.phonegrid.data = [
            [ "1","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "2","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "3","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "4","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "5","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "6","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "7","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "8","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "9","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "10","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "11","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"],
            [ "12","158624424715", "5@quarkfinance.com",  "启用", "2016-03-30 15:50:57",  "2016-03-30 15:50:57","cuiyan"]
         ];

    });