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
                        <img class="navbar-brand" ng-click="vm.goToDashBoard()"
                            src="/work-planner/sources/images/logo.jpg"
                            height="50"/>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                      <ul class="nav navbar-nav">
                        <li><span ng-click="goToDashBoard()">DashBoard</span></li>
                        <li><span ng-click="goToCalender()">Calender</span></li>
                        <li><span ng-click="goToProjects()">Projects</span></li>
                      </ul>
                    </div>
                </div>
            </nav>`
        }
    });
