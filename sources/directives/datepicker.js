angular().module('work-planner')
    .directive('datepicker', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            link: function(scope, element) {
                scope.format = "MM/dd/yyyy";
                scope.isOpen = false;
                scope.datePickerOpen = function ($event) {

                }

            },
            template: `
            <input id="datepicker-{{question.questionId}}"
                       class="form-control form-control-sm date"
                       type="text"
                       placeholder="mm/dd/ccyy"
                       datepicker-popup="{{format}}"
                       ng-model="model"
                       is-open="isOpen"
                       ng-click="datePickerOpen($event)"
                       close-text="Close"
                       datepicker-options="{showWeeks: false, initDate: inDate}"></input>`
        }
    }]);
