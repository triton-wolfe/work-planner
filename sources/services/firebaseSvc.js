(function () {
    angular.module('work-planner')
        .service('firebaseSvc', ['$q', 'firebase', firebaseSvc]);

    function firebaseSvc($q, firebase) {
        var dbRef = firebase.database().ref()

        this.getProjects = function () {
            var deffered = $q.defer();
            dbRef.child('projects').once('value' function (snap) {
                var toReturn = [];
                value = snap.val();
                for (var key in value) {
                    toReturn.push(value[key]);
                }
                deffered.resolve(toReturn);
            });
            return deffered;
        }
    };
})();
