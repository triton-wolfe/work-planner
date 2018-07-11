(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebaseSvc', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebaseSvc) {
        $scope.projects = [];
        $scope.editing = false;
        $scope.editId = null;
        $scope.deleting = false;

        var promise = firebaseSvc.getProjects().$loaded();
        promise.then(function (result) {
            $scope.projects = result;
        });

        $scope.addProject() {
            $scope.item.Name = "New Project";
            $scope.editing = true;
        }

        $scope.editProject(projectId) {
            $scope.item = angular.copy($scope.projects[$scope.projects.$indexFor(projectId)]);
            $scope.editId = projectId;
            $scope.editing = true;
        }

        $scope.completeEdit() {
            if ($scope.editId === null) {
                $scope.projects.add({
                    Name: $scope.item.Name,
                    Description: '',
                    NumWorkItems: 0
                });
            } else {
                $scope.projects[$scope.projects.$indexFor($scope.editId)].Name = $scope.item.Name;
                $scope.projects.save($scope.projects.$indexFor($scope.editId));
            }
            $scope.editId = null;
            $scope.editing = false;
        }

        $scope.abandonEdit() {
            $scope.editId = null;
            $scope.editing = false;
        }

        $scope.deleteProject(projectId) {
            $scope.editId = projectId;
            $scope.deleting = true;
        }

        $scope.confirmDelete() {
            $scope.projects.$remove($scope.projects.$indexFor($scope.editId));
            $scope.editId = null;
            $scope.deleting = false;
        }

        $scope.abandonDelete() {
            $scope.editId = null;
            $scope.deleting = false;
        }

        $scope.openProject(projectId) {

        }

    };
})();
