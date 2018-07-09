(function () {
    angular.module('work-planner')
    .controller('DashBoardCtrl', ['$scope', DashBoardCtrl]);

    function DashBoardCtrl($scope) {
        $scope.field = 'hi';
    };
})();
