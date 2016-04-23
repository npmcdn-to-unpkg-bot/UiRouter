angular
    .module("app")
    .controller("aboutController", ["$scope", function ($scope) {
        $scope.title = "About";
        $scope.items = ["thing1", "thing2", "thing3"];
    }])