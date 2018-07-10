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
            <div class="col-md-11 container">
                <a class="navbar-brand" ng-click="goToDashBoard()">
                    <img src="/work-planner/sources/images/logo.jpg" class="rounded navbar-logo"
                        height="37">
                        Work Planner
                </a>
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
            </div>
        </nav>`
        }
    });
