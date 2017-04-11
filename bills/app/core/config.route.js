(function () {
    'use strict';

    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
            var routes, setRoutes;

            routes = [
                'introduction',
                'bill/setupBill','bill/incomeBill','bill/payoutCompare','bill/incomeCompare','bill/profit','bill/selectBill','bill/setupBill','bill/indexBill',
                'producers/sourceOfGoods','producers/thing','producers/buyUsers',
                'goods/mangerGoods','goods/soldGoods','goods/unshelveGoods','goods/onlineGoods',
                'friends/goodFriends','friends/producersFriends','friends/buyUsersFriends','friends/badFridens',
                'user/myInfo','user/emailManger',
                'other/helpMe','other/skinSet','page/signin'
            ];

            setRoutes = function(route) {
                var config, url;
                url = '/' + route;
                config = {
                    templateUrl: 'app/' + route + '.html'
                };
                $routeProvider.when(url, config);
                return $routeProvider;
            };

            routes.forEach(function(route) {
                return setRoutes(route);
            });

/*
            $routeProvider
                .when('/', {redirectTo: '/introduction'})
                .when('/introduction', {templateUrl: 'app/introduction/introduction.html'})
                .when('/404', {templateUrl: 'app/page/404.html'})
                .otherwise({ redirectTo: '/404'});
*/

        }]
    );

})(); 