(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebaseSvc', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebaseSvc) {
        $scope.projects = [];
        var getProjectsSuccess = function (result) {
            $scope.projects = result;
        }
        firebaseSvc.getProjects().then(getProjectsSuccess);

    };
})();
