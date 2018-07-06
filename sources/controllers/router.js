(function (window) {

    var baseUrl = 'https://triton-wolfe.github.io/work-planner/';

    angular
        .module('work-planner', ['ui.router', 'ui.bootstrap', 'ui.calendar', 'ngAnimate', 'toaster', 'ngSanitize', 'LocalStorageModule', 'angularUtils.directives.dirPagination', 'angular-clipboard', 'angularCSS', 'ng-showdown', 'dndLists'])
        .value('baseUrl', baseUrl)
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state('DashBoard', {
                url: "/DashBoard",
                templateURL: "sources/views/DashBoard.html"
            })
            $urlRouterProvider.otherwise('DashBoard')
        }]);
})(window);
