"use strict";

angular.module("ngTouchstart", []).directive("ngTouchstart", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchstart', onTouchStart);
      
      function onTouchStart(event) {
        var method = '$scope.' + $element.context.getAttribute('ng-touchstart');
        $scope.$apply(function () {
          eval(method);
        });
      };
    }
  };
});
