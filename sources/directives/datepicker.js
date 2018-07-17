angular().module('work-planner')
directive('datetimepicker', ['$timeout',
    function ($timeout) {
        return {
            require: 'model',
            restrict: 'AE',
            scope: {
                model: '='
            },
            link: function (scope, elem, attrs, ctrl) {
                elem.datetimepicker()
            },
            template: `<input form="text" ng-model="model"></input>`
        };
    }
]);
