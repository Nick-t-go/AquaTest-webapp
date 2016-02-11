'use strict';

window.app = angular.module('aquaTest', ['ui.router', 'ngMaterial']);


app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');

});

app.config(function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('login',{
            url:'/',
            templateUrl: '/app/login/index.html',
            controller: 'loginCTRL'
        });

    $urlRouterProvider.otherwise('/');

});