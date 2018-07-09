angular.module('work-planner').constant('FirebaseUrl', 'https://work-planner-7bf84.firebaseio.com')
    .service('rootRef', ['FirebaseUrl', Firebase]);
