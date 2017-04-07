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
    .controller('EmailSearchCtrl',function($scope, $timeout,$compile) {

        $scope.viewEmail = function(){
            var html = '<div class="modal" ng-style="modalStyle">{{modalStyle}}<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><i class="fa fa-envelope"></i> 邮件内容</div><div class="modal-body">借款协议（豪爵摩托车分期）</br>编号： p1 </br>本协议由以下各方于 p2 年 p3 月 p4 日签署； </br></br>借款人： </br> </br>                              p13 </br> </br> 身份证号码： p5 </br> </br>住所： p6 </br> </br>出借人 </br></br>（出借人可能为一人或多人，出借人名单将作为本协议附件以邮件方式发送至借款人在居间服务人处预留的电子邮箱。）</br></br>居间服务人 </br> </br> 上海夸客金融信息服务有限公司 </br></br> 住所：上海市黄浦区蒙自路207号5号楼</br></br> 及：上海夸客商务信息服务有限公司</br></br>  住所：上海市蒙自路207号“宏慧-盟智园”12号楼2层</div><div class="modal-footer"><button id="buttonClose" class="btn btn-primary" ng-click="close()">Close</button></div></div></div></div>';
            var elm = angular.element(html);
            angular.element(document.body).prepend(elm);
            $scope.close = function() {
                elm.remove();
            };
            $scope.modalStyle = {"display": "block"};
            $compile(elm)($scope);
        };
        $scope.emailgrid = {};
        $scope.emailgrid.paginationPageSizes= [10, 20, 50,100];
        $scope.emailgrid.paginationPageSize = 10;
        $scope.emailgrid.columnDefs= [
                {displayName: '',name :'0'},
                {displayName: '发件人',name :'1'},
                {displayName: '收件人',name :'2'},
                {displayName: '邮件标题',name :'3'},
                {displayName: '状态',name :'4'},
                {displayName: '发送时间',name :'5'},
                {displayName: '邮件内容',name :'6',cellTemplate:'<a href="JavaScript:void(0)" ng-click="grid.appScope.viewEmail();" >查看</a>'},
            ];

        $scope.emailgrid.data = [
            [ "1","mengyingfu@quarkfinance.com", "5@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-03-30 15:50:57"],
            [ "2","2345@quarkfinance.com", "ge7geliu@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-04-30 15:50:57"],
            [ "3","345@quarkfinance.com", "gegeliu@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-05-30 15:50:57"],
            [ "4","men789gyingfu@quarkfinance.com", "qwev@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-06-30 15:50:57"],
            [ "5","meng789yingfu@quarkfinance.com", "sdg@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-07-30 15:50:57"],
            [ "6","mengyingfu@quarkfinance.com", "dfg@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-08-30 15:50:57"],
            [ "7","9789@quarkfinance.com", "sdfg@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-09-30 15:50:57"],
            [ "8","98356@quarkfinance.com", "456@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-10-30 15:50:57"],
            [ "9","789@quarkfinance.com", "geg757eliu@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-11-30 15:50:57"],
            [ "10","3456@quarkfinance.com", "gegeliu@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2016-12-30 15:50:57"],
            [ "11","789@quarkfinance.com", "gegeliu@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2017-03-30 15:50:57"],
            [ "12","789@quarkfinance.com", "miut@quarkfinance.com",  "ms测试发送邮件---。", "发送成功",  "2017-03-31 15:50:57"]
         ];

    });