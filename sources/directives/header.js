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
                $scope.goToCalender = function () {
                    $state.go('Calendar');
                };
            }],
            template: `<div class="navbar navbar-default">
                <div class="navbar-brand">
                    <img ng-click="goToDashBoard()"
                        src="/work-planner/sources/images/logo.jpg"
                        height="50"/>
                </div>
                <ul class="nav navbar-nav">
                    <li>
                        <a class="nav-item" ng-click="goToDashBoard()">DashBoard</a>
                    </li>
                    <li>
                        <a class="nav-item" ng-click="goToCalender()">Calendar</a>
                    </li>
                    <li>
                        <a class="nav-item" ng-click="goToProjects()">Projects</a>
                    </li>
                </ul>
            </div>`
        }
    });
