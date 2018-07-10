angular.module('work-planner')
    .directive('header', function () {
        return {
            restrict: "E",
            controller: ['$scope', '$state', function($scope, $state) {
                $scope.goToDashBoard = function () {
                    $state.go('DashBoard');
                };
                $scope.goToProjects = function () {
                    $state.go('ProjectBoard');
                };
                $scope.goToCalendar = function () {
                    $state.go('Calendar');
                };
            }],
            template: `<nav class="navbar navbar-expand-sm bg-light navbar-light">
            <a class="navbar-brand" ng-click="goToDashBoard()">
                <img src="/work-planner/sources/images/logo.jpg" class="rounded navbar-logo"
                    height="32">
                Autograder Docs
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" ng-click="goToDashBoard()">
                            DashBoard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" ng-click="goToCalendar()">
                            Calendar
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" ng-click="goToProjects()">
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </nav>`
        }
    });
