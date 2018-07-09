(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebase', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebase) {
        var projectsRef = firebase.database().ref().child('projects');
        var thisCtrl = this;
        this.projects = [];

        projectsRef.on('value', function(snap) {
            value = snap.val();
            foreach (var key in value) {
                this.projects.push(value[key]);
            }
        });
    };
})();
