(function(){
    'use strict';
    var goodsApp = angular.module("app");
    //点击添加创建表单元素
    goodsApp.controller("goodsController", ["$scope", function ($scope) {

        $scope.goods = {
            select: false,
            name: '',
            price: null,
            number: 1,
            owner: '',
            time: '',
            add: function (goods, addNumber) {
                // 改变商品数量
                if (goods.number + addNumber >= 0) {
                    goods.number += addNumber;
                }
                if (goods.number + addNumber >= 99){
                    goods.number =99;
                }
            }

        };
        $scope.goodsform = {
            goodsforms: [],
            AllSelect: false,
            Allnumber: 0,
            Allprice: 0,
            del: function (goods) {
                // todo something
                var isdel = window.confirm("您是否要下架该商品");
                if (isdel) {
                    $scope.goodsform.goodsforms.splice($scope.goodsform.goodsforms.indexOf(goods), 1);
                }
            },
            seletAll: function () {
                // 选中所有商品
                if ($scope.goodsform.AllSelect) {
                    for (var i = 0; i < $scope.goodsform.goodsforms.length; i++) {
                        $scope.goodsform.goodsforms[i].select = false;
                    }
                } else {
                    for (var i = 0; i < $scope.goodsform.goodsforms.length; i++) {
                        $scope.goodsform.goodsforms[i].select = true;
                    }
                }
            },
            add: function () {
                var resetGoods = function () {
                    $scope.goods.price = null;
                    $scope.goods.name = "";
                    $scope.goods.time ="";
                };
                // 验证数据是否符合规则
                var countsReg = /^(\d){1,9}$/g;
                var dateReg = /^((((19|20)\d{2})-(0?(1|[3-9])|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/g;
                if ($scope.goods.name.length <= 0) {
                    alert("请输入商品名称！！！！");
                    resetGoods();
                    return false;
                }
                if (!countsReg.test($scope.goods.price)) {
                    alert("输入的价格不满足规则,请重新输入");
                    resetGoods();
                    return false;
                }
                if (!dateReg.test($scope.goods.time)) {
                    alert("请输入正确的时间格式");
                    resetGoods();
                    return false;
                }
                // 添加商品
                $scope.goodsform.goodsforms.push(angular.copy($scope.goods));
                resetGoods();
            },
            numberchange: function () {
                //判断数量变化
                $scope.goodsform.Allnumber = 0;
                $scope.goodsform.Allprice = 0;
                for (var i = 0; i < $scope.goodsform.goodsforms.length; i++) {
                    //只有当选中时，数量总值才开始变化(监听input值)
                    //改变数量值，数量总计选中关联变化，因为input输入改变，数量总计也要跟着变化
                    if ($scope.goodsform.goodsforms[i].select) {
                        $scope.goodsform.Allnumber += ($scope.goodsform.goodsforms[i].number * 1);
                        $scope.goodsform.Allprice += ($scope.goodsform.goodsforms[i].number * 1)*($scope.goodsform.goodsforms[i].price * 1);
                    }
                }
            }
        };
        $scope.$watch('goodsform', function(){
        //判断选中与全选之间的条件
            var flag = true;
            //遍历选中条件
            for(var i = 0; i< $scope.goodsform.goodsforms.length; i++){
                //清除所有非法数量
                $scope.goodsform.goodsforms[i].number = (($scope.goodsform.goodsforms[i].number + "").replace(/\D/g, '')) * 1;
                flag = flag && $scope.goodsform.goodsforms[i].select;
            }
            if (flag) {
                $scope.goodsform.AllSelect = true;
            } else {
                $scope.goodsform.AllSelect = false;
            }
            $scope.goodsform.numberchange();
        },true);

    }]);
})();