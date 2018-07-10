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
            template: `<nav class="navbar navbar-expand-md navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-brand">
                        <img ng-click="goToDashBoard()"
                            src="/work-planner/sources/images/logo.jpg"
                            height="50"/>
                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a ng-click="goToDashBoard()">DashBoard</a></li>
                            <li class="nav-item"><a ng-click="goToCalender()">Calendar</a></li>
                            <li class="nav-item"><a ng-click="goToProjects()">Projects</a></li>
                        </ul>
                    </div>
                </div>
            </nav>`
        }
    });
