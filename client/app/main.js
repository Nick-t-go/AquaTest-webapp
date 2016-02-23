'use strict';

window.app = angular.module('aquaTest', ['ui.router', 'ngMaterial', 'firebase']);


app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');

});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green', {
            'default': 'A200', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('purple', {
            'default': '400' // use shade 200 for default, and keep all other shades the same
        });
})

app.config(function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('app',{
            url:'/',
            templateUrl: '/app/login/index.html',
            controller: 'loginCTRL'
        })

    $stateProvider
        .state('demo',{
            url:'/demo',
            templateUrl: '/app/demo/index.html',
            controller: 'demoCTRL'
        })

    $stateProvider
        .state('dashboard',{
            url:'/dashboard',
            templateUrl: '/app/dashboard/dashboard.html',
            controller: 'dashboardCTRL'
        });

    $urlRouterProvider.otherwise('/');

});