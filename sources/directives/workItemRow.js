angular.module('work-planner')
    .directive('workItemRow', function () {
        return {
            restrict: "A",
            scope: {
                workItem: '=',
                show: '='
            },
            controller: ['$scope', '$state', function($scope, $state) {
                $scope.show = false;
                var vm = {
                    viewState: 'normal'
                }
                $scope.vm = vm;

                vm.edit = function () {
                    vm.viewState = 'editing';
                    vm.editable = angular.copy($scope.workItem);
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
                    $scope.$emit('deleteWorkItem', $scope.workItem.$id);
                    vm.viewState = 'normal';
                }

                vm.abandonDelete = function () {
                    vm.viewState = 'normal';
                }

                vm.open = function () {
                    $state.go('TaskBoard', { WorkItemId: $scope.workItem.$id });
                }
            }],
            templateUrl: '/work-planner/sources/views/WorkItemRow.html'
        }
    });
