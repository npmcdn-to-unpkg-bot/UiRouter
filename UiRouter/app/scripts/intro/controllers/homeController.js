angular
    .module("app")
    .controller("homeController", ["$scope", "friends", function ($scope, $friends) {
        $scope.title = "Home";
        $scope.friends = $friends;
        $scope.items = ["home", "about", "contact"];
        $scope.selectedValue = "home";
    }])
