var app = angular.module("routedTabs", ["ui.router", "ui.bootstrap"]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/main/tab1");

    $stateProvider
        .state("main", { abstract: true, url: "/main", templateUrl: "app/templates/ode/main.html" })
            .state("main.tab1", { url: "/tab1", templateUrl: "app/templates/ode/tab1.html" })
            .state("main.tab2", { url: "/tab2", templateUrl: "app/templates/ode/tab2.html" })
            .state("main.tab3", { url: "/tab3", templateUrl: "app/templates/ode/tab3.html" });
});