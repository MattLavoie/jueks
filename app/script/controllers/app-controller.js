(function () {
    var titles = ['/ ju:/ /\'Eks/', 'You Ex', 'UX', 'jooo ehks', 'It\'s an Ex of a thing!', 'What the X?', 'jueks.com', 'Ju Eks',
                  'jueks', 'Don\'t do that', 'You could just view source'];
    var currentTitle = 0;


    angular.module('jueks').controller('main',
        ['$scope',
            function ($scope) {

                $scope.changeTitle = function () {
                    var selection = Math.floor(Math.random() * (titles.length - 1));
                    selection === currentTitle && selection++;
                    currentTitle = selection;
                    $scope.titleText = titles[selection];
                }

            }]);
})();