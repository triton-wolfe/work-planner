(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'rootRef', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, rootRef) {
        var projectsRef = rootRef.child('projects');
        var thisCtrl = this;
        this.projects = [];

        projectsRef.on('value', function(snap) {
            snap.val().forEach(function (item) {
                thisCtrl.projects.push(item);
            })
        });
    };
})();
