(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebaseSvc', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebaseSvc) {
        $scope.projects = [];

        firebaseSvc.getProjects().$loaded().then(function (result) {
            $scope.projects = result;
        });
    };
})();
