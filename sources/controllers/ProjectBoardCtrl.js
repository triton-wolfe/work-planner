(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebaseSvc', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebaseSvc) {
        $scope.projects = [];

        var promise = firebaseSvc.getProjects().$loaded()
        promise.then(function (result) {
            $scope.projects = result;
        });
    };
})();
