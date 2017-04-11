(function(){
    'use strict';
    var uiApp = angular.module('app');
    //��װʱ����datetimepicker
    uiApp.directive('datetimepicker',function(){
        return{
            restrict:'ECA',
            $scope: {
                datetime: '@'
            },
            link: function($scope,ele){
                ele.datetimepicker({
                    format: 'yyyy-mm-dd',
                    minView: 2,
                    language: 'zh-CN'
                });
            }
        };
    });
    //��װ�ֲ�swiper�Ĳ��
    uiApp.directive('swiperlb',function($timeout){
        return{
            restrict:'ECA',
            $scope: {
                swiper_lb: '@'
            },
            link: function($scope,ele){
                $scope.swiper = null;
                $timeout(function(){
                    $scope.swiper = new Swiper(ele, {
                        pagination: '.swiper-pagination',
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        paginationClickable: true,
                        spaceBetween: 30,
                        centeredSlides: true,
                        autoplay: 2500,
                        autoplayDisableOnInteraction: false,
                        speed: 5000,
                        loop: true
                    });
                })

            }
        }
    });

    //������ʹ��ʱ����
/*    myApp.controller('setupbill',function(){
        $('#datetimepicker').datetimepicker({
            format: 'yyyy-mm-dd',
            minView: 2,
            language: 'zh-CN'
        });
    });*/
})();