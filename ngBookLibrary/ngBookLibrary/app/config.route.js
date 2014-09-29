﻿(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/admin',
                config: {
                    title: 'admin',
                    templateUrl: 'app/admin/admin.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }, {
                url: '/book',
                config: {
                    title: 'Book',
                    templateUrl: 'app/book/book.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Book'
                    }
                }
            }, {
                url: '/book/details/:id',
                config: {
                    title: 'Book Details',
                    templateUrl: 'app/book/details.html'
                }
            }, {
                url: '/member',
                config: {
                    title: 'Member',
                    templateUrl: 'app/member/memberList.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Member'
                    }
                }
            }, {
                url: '/member/details/:id',
                config: {
                    title: 'Member Details',
                    templateUrl: 'app/member/memberDetails.html'
                }
            }

        ];
    }
})();