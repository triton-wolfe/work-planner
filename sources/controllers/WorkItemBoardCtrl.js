(function () {
    angular.module('work-planner')
    .controller('WorkItemBoardCtrl', ['$scope', 'firebaseSvc', '$state', '$stateParams', WorkItemBoardCtrl]);

    function WorkItemBoardCtrl($scope, firebaseSvc) {
        $scope.workItems = [];
        $scope.item = {
            Name: null,
            Description: null,
            NumWorkItems: 0,
        }
        $scope.editing = false;
        $scope.editId = null;
        $scope.deleting = false;

        var promise = firebaseSvc.getWorkItems($stateParams.projectId).$loaded();
        promise.then(function (result) {
            $scope.workItems = result;
        });

        $scope.addWorkItem = function () {
            $scope.editing = true;
        }

        $scope.editWorkItem = function (workItemId) {
            $scope.item = angular.copy($scope.workItems[$scope.workItems.$indexFor(workItemId)]);
            $scope.editId = workItemId;
            $scope.editing = true;
        }

        $scope.completeEdit = function () {
            if ($scope.editId === null) {
                $scope.workItems.$add($scope.item);
            } else {
                $scope.workItems[$scope.workItems.$indexFor($scope.editId)].Name = $scope.item.Name;
                $scope.workItems[$scope.workItems.$indexFor($scope.editId)].Description = $scope.item.Description;
                $scope.workItems.$save($scope.workItems.$indexFor($scope.editId));
            }
            $scope.item = {
                Name: null,
                Description: null,
                NumWorkItems: 0
            }
            $scope.editId = null;
            $scope.editing = false;
        }

        $scope.abandonEdit = function () {
            $scope.editId = null;
            $scope.editing = false;
        }

        $scope.deleteWorkItem = function (workItemId) {
            $scope.editId = workItemId;
            $scope.deleting = true;
        }

        $scope.confirmDelete = function () {
            $scope.workItems.$remove($scope.workItems.$indexFor($scope.editId));
            $scope.editId = null;
            $scope.deleting = false;
        }

        $scope.abandonDelete = function () {
            $scope.editId = null;
            $scope.deleting = false;
        }

        $scope.openWorkItem = function(workItemId) {
            $state.go('TaskBoard', { WorkItemId: workItemId });
        }

    };
})();
