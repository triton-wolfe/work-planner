(function (window) {

    var baseUrl = 'https://triton-wolfe.github.io/work-planner/';

    angular
        .module('work-planner', ['ui.router', 'ui.bootstrap', 'ui.calendar', 'ngAnimate', 'toaster', 'ngSanitize', 'LocalStorageModule', 'angularUtils.directives.dirPagination', 'angular-clipboard', 'angularCSS', 'ng-showdown', 'dndLists', 'firebase'])
        .value('baseUrl', baseUrl)
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state('DashBoard', {
                url: "/DashBoard",
                templateUrl: "/work-planner/sources/views/DashBoard.html",
                params: {obj: null}
            })
            .state('Calendar', {
                url: "/Calendar",
                templateUrl: "/work-planner/sources/view/Calendar.html",
                params: {obj: null}
            })
            .state('ProjectBoard', {
                url: "/ProjectBoard",
                templateUrl: "/work-planner/sources/views/ProjectBoard.html",
                params: {obj: null}
            })
            .state('WorkItemBoard', {
                url: "WorkItemBoard?ProjectId",
                templateUrl: "/work-planner/sources/views/WorkItemBoard.html",
                params: {
                    ProjectId: {
                        value: '',
                        squash: true
                    }
                },
                reloadOnSearch: false
            })
            .state('TaskBoard', {
                url: "TaskBoard?WorkItemId",
                templateUrl: "/work-planner/sources/views/TaskBoard.html",
                params: {
                    WorkItemId: {
                        value: '',
                        squash: true
                    }
                },
                reloadOnSearch: false
            })
            .state('EventList', {
                url: "EventList",
                templateUrl: "/work-planner/sources/views/EventList.html",
                params: {obj: null}
            });
            $urlRouterProvider.otherwise('DashBoard');
        }]);
})(window);
