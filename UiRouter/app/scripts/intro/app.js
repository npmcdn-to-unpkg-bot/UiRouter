angular
    .module("app", ["ui.router"])
    .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "app/templates/home.html",
            controller: "homeController",
            resolve: {
                friends: [
                    "Friends", function (Friends) {
                        return Friends.get();
                    }]
            }
        }).state("about", {
            url: "/about",
            templateUrl: "app/templates/about.html",
            controller: "aboutController"
        });
    }]);