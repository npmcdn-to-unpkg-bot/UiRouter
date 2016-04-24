var example = angular.module("example", ['ui.router']);
example.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('settings', {
            url: '/settings',
            templateUrl: 'app/templates/multi/settings.html'
        })
        .state('settings.profile', {
            url: '/profile',
            templateUrl: 'app/templates/multi/profile.html',
            controller: 'ProfileController'
        })
        .state('settings.account', {
            url: '/account',
            templateUrl: 'app/templates/multi/account.html',
            controller: 'AccountController'
        }).state('settings.tab3', {
            url: '/tab3',
            templateUrl: 'app/templates/multi/tab3.html',
            controller: 'Tab3Controller'
        });
    $urlRouterProvider.otherwise('/settings/profile');
})