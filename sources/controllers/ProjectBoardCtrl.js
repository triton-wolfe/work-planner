(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebase', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebase) {
        var projectsRef = firebase.database().ref().child('projects');
        var thisCtrl = this;
        this.projects = [];

        projectsRef.on('value', function(snap) {
            snap.val().forEach(function (item) {
                thisCtrl.projects.push(item);
            })
        });
    };
})();
