angular.module('work-planner')
    .directive('projectRow', function () {
        return {
            restrict: "E",
            scope: {
                project: '='
            },
            controller: ['$scope', function($scope, $state) {
                $scope.show = false;
                var vm = {
                    viewState: 'normal'
                }
                $scope.vm = vm;

                vm.edit = function () {
                    vm.viewState = 'editing';
                    vm.editable = angular.copy($scope.project);
                }

                vm.completeEdit = function () {
                    $scope.project = vm.editable
                    vm.viewState = 'normal';
                }

                vm.abandonEdit = function () {
                    vm.viewState = 'normal';
                }

                vm.delete = function () {
                    vm.viewState = 'deleting';
                }

                vm.completeDelete = function () {
                    $scope.$emit('deleteProject', project.$id);
                    vm.viewState = 'normal';
                }

                vm.abandonDelete = function () {
                    vm.viewState = 'normal';
                }

                vm.open = function () {
                    $state.go('WorkItemBoard', { ProjectId: project.$id });
                }
            }],
            templateUrl: '/work-planner/sources/views/ProjectRow.html'
        }
    });
