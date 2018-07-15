(function () {
    angular.module('work-planner')
    .controller('ProjectBoardCtrl', ['$scope', 'firebaseSvc', '$state', ProjectBoardCtrl]);

    function ProjectBoardCtrl($scope, firebaseSvc) {
        var vm = $scope.vm;
        vm.projects = [];


        var promise = firebaseSvc.getProjects().$loaded();
        promise.then(function (result) {
            vm.projects = result;
        });

        vm.addProject = function () {
            vm.newItem = {
                Name: null,
                Description: null,
                NumWorkItems: 0
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

        $scope.on('deleteProject', function (event, id) {
            vm.projects.$remove(vm.projects.$indexFor(id));
        })

    };
})();
