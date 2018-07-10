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
            template: `<div class="navbar navbar-default row container">
                <div class="navbar-brand">
                    <img ng-click="goToDashBoard()"
                        src="/work-planner/sources/images/logo.jpg"
                        height="25"/>
                    <span> Work-Planner</span>
                </div>
                <div>
                    <a class="nav-item" ng-click="goToDashBoard()">DashBoard</a>
                    <a class="nav-item" ng-click="goToCalender()">Calendar</a>
                    <a class="nav-item" ng-click="goToProjects()">Projects</a>
                </div>
            </div>`
        }
    });
