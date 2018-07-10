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
            template: `<nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <img class="navbar-brand" ng-click="goToDashBoard()"
                            src="/work-planner/sources/images/logo.jpg"
                            height="50"/>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li class="active"><a ng-click="goToDashBoard()">DashBoard</a></li>
                            <li><a ng-click="goToCalender()">Calendar</a></li>
                            <li><a ng-click="goToProjects()">Projects</a></li>
                        </ul>
                    </div>
                </div>
            </nav>`
        }
    });
