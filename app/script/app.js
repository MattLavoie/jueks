(function () {
    var dependencies = [];

    angular.module('jueks', dependencies)
        .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            //when('/', {templateUrl:'views/main.html'}).
            when('/posts/:postKey', {templateUrl:'content/UI-and-Interaction-design.html'}).
            otherwise({redirectTo:'/posts/UI-and-Interaction-design'});
    }]);
})();