(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebase', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebase) {
        var projectsRef = firebase.database().ref().child('projects');
        var thisCtrl = this;
        thisCtrl.projects = [];

        projectsRef.on('value', function(snap) {
            value = snap.val();
            for (var key in value) {
                thisCtrl.projects.push(value[key]);
            }
        });
    };
})();
