angular.module('demoApp').controller('demoController', [
  '$scope',
  function($scope) {
    $scope.onOffDemoForm = {
      on: false
    };

    $scope.disabledDemoForm = {
      on: false,
      off: true,
      disabled: true
    };
  }
]);
