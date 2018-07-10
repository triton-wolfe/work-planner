(function () {
    angular.module('work-planner')
        .service('firebaseSvc', ['$q', 'firebase', '$firebaseObject', '$firebaseArray', firebaseSvc]);

    function firebaseSvc($q, firebase, $firebaseObject, $firebaseArray) {
        var dbRef = firebase.database().ref()

        this.getProjects = function () {
            return $firebaseArray(dbRef.child('projects'));
        }

        this.getWorkItems = function (projectId) {
            return $firebaseArray(dbRef.child('WorkItems').orderByChild('ProjectId').equalTo(projectId));
        }

        this.getTasks = function(workItemId) {
            return $firebaseArray(dbRef.child('Tasks').orderByChild('WorkItemId').equalTo(workItemId));
        }
    };
})();
