angular.module('angular-labelauty', []);

angular.module('angular-labelauty').directive('labelauty', [
  '$compile',
  ($compile) => {
    return {
      restrict: 'E',
      require: '?ngModel',
      scope: {
        label: '@',
        icon: '@',
        ngDisabled: '@'
      },
      link: function(scope, element, attrs, ngModelCtrl) {
        _compileAndReplaceElement();

        scope.disabled = false;
        scope.checked = false;

        scope.toggleModelValue = function($event) {
          if ($event) $event.preventDefault();

          if (scope.disabled) return;

          scope.checked = !scope.checked;

          ngModelCtrl.$setViewValue(scope.checked);
        };

        attrs.$observe('ngDisabled', val => scope.disabled = val);

        scope.$watch(() => {
          return ngModelCtrl.$modelValue;
        }, modelValue => scope.checked = modelValue);

        function _compileAndReplaceElement() {
          let clonedElement = angular.element(`<input type="checkbox" ng-model="ngModel">`);
          clonedElement.removeAttr('labelauty');

          let wrapperEl = angular.element('<div class="labelauty"></div>');

          let innerEl = angular.element(`<div class="labelauty-inner btn btn-default" ng-class="{ 'active' : checked, 'disabled' : disabled }" ng-click="toggleModelValue($event)" ng-class="{ \'disabled\' : disabled }">
            <i class="labelauty-inner-icon fa" ng-class="{ 'fa-check' : checked, 'fa-circle' : !checked }"></i>
            <span>{{ label }}</span>
            </div>`);

          wrapperEl.append(clonedElement);
          wrapperEl.append(innerEl);

          let compiledElement = $compile(wrapperEl)(scope);

          element.replaceWith(compiledElement);
        }
      }
    };
  }
]);
