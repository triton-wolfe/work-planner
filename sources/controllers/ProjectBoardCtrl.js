(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebaseSvc', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebaseSvc) {
        $scope.projects = [];

<<<<<<< HEAD
        var promise = firebaseSvc.getProjects().$loaded();
=======
        var promise = firebaseSvc.getProjects().$loaded()
>>>>>>> db560f8d20e52c967f02db0dcd939b769dbf4e13
        promise.then(function (result) {
            $scope.projects = result;
            console.log(result)
        });
    };
})();
