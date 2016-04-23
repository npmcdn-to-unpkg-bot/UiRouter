angular
    .module("app")
    .factory("Friends", function() {
        return {
            get: function() {
                return [
                    { "name": "Will", "age": 30 },
                    { "name": "Laura", "age": 26 }];
            }
        }
    })