(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebaseSvc', '$state', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebaseSvc, $state) {
        $scope.projects = [];
        $scope.item = {
            Name: null,
            Description: null,
            NumWorkItems: 0
        }
        $scope.editing = false;
        $scope.editId = null;
        $scope.deleting = false;

        var promise = firebaseSvc.getProjects().$loaded();
        promise.then(function (result) {
            $scope.projects = result;
        });

        $scope.addProject = function () {
            $scope.editing = true;
        }

        $scope.editProject = function (projectId) {
            $scope.item = angular.copy($scope.projects[$scope.projects.$indexFor(projectId)]);
            $scope.editId = projectId;
            $scope.editing = true;
        }

        $scope.completeEdit = function () {
            if ($scope.editId === null) {
                $scope.projects.$add($scope.item);
            } else {
                $scope.projects[$scope.projects.$indexFor($scope.editId)].Name = $scope.item.Name;
                $scope.projects[$scope.projects.$indexFor($scope.editId)].Description = $scope.item.Description;
                $scope.projects.$save($scope.projects.$indexFor($scope.editId));
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

        $scope.deleteProject = function (projectId) {
            $scope.editId = projectId;
            $scope.deleting = true;
        }

        $scope.confirmDelete = function () {
            $scope.projects.$remove($scope.projects.$indexFor($scope.editId));
            $scope.editId = null;
            $scope.deleting = false;
        }

        $scope.abandonDelete = function () {
            $scope.editId = null;
            $scope.deleting = false;
        }

        $scope.openProject = function(projectId) {
            $state.go('WorkItemBoard', { ProjectId: projectId });
        }

    };
})();
