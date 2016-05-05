var example = angular.module("example", ['ui.router']);
example.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('settings', {
            url: '/settings',
            templateUrl: 'app/templates/nested/settings.html'
        })
        .state('settings.profile', {
            url: '/profile',
            templateUrl: 'app/templates/nested/profile.html',
            controller: 'ProfileController'
        })
        .state('settings.account', {
            url: '/account',
            templateUrl: 'app/templates/nested/account.html',
            controller: 'AccountController'
        }).state('settings.tab3', {
            url: '/tab3',
            templateUrl: 'app/templates/nested/tab3.html',
            controller: 'Tab3Controller'
        });
    $urlRouterProvider.otherwise('/settings/profile');
})