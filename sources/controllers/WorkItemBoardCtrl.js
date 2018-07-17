(function () {
    angular.module('work-planner')
    .controller('WorkItemBoardCtrl', ['$scope', 'firebaseSvc', '$state', '$stateParams', WorkItemBoardCtrl]);

    function WorkItemBoardCtrl($scope, firebaseSvc, $state, $stateParams) {
        var vm = $scope.vm || {}
        vm.workItems = [];

        var promise = firebaseSvc.getWorkItems($stateParams.ProjectId).$loaded();
        promise.then(function (result) {
            vm.workItems = result;
        });

        vm.addWorkItem = function () {
            vm.newItem = {
                Name: null,
                Description: null,
                ProjectId: $stateParams.ProjectId,
                DueDate: null,
                PercentComplete: 0,
            }
            vm.adding = true;
        }

        vm.completeAdd = function () {
            vm.projects.$add(vm.newItem);
            vm.adding = false;
        }

        vm.abandonAdd = function () {
            vm.adding = false;
        }

        $scope.$on('deleteWorkItem', function (event, id) {
            vm.workItems.$remove(vm.workItems.$indexFor(id));
        });
    };
})();
