(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebase', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebase) {
        var projectsRef = firebase.database().ref().child('projects');
        $scope.projects = [];

        projectsRef.on('value', function(snap) {
            value = snap.val();
            for (var key in value) {
                $scope.projects.push(value[key]);
            }
        });
    };
})();
