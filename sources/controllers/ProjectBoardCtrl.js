(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'angularfire', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, angularfire) {
        var dbRef = new Firebase("https://work-planner-7bf84.firebaseio.com/");
        var projectsRef = dbRef.child('projects');
        var thisCtrl = this;
        this.projects = [];

        projectsRef.on('value', function(snap) {
            snap.val().forEach(function (item) {
                thisCtrl.projects.push(item);
            })
        });
    };
})();
