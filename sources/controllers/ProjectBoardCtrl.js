(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebase', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebase) {
        var projectsRef = firebase.database().ref().child('projects');
        this.projects = [];
        var thisCtrl = this;

        projectsRef.on('value', function(snap) {
            value = snap.val();
            for (var key in value) {
                thisCtrl.projects.push(value[key]);
            }
        });
    };
})();
