﻿angular.module('app', ['ngComponentRouter'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: 'It worked!'
    });