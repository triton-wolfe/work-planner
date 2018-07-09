(function () {
    angular.module('work-planner')
    .controller('DashBoardCtrl', ['$scope', DashBoardCtrl]);

    function DashBoardCtrl($scope) {
        this.field = 'hi';
    };
})();
