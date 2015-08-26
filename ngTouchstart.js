"use strict";

angular.module("ngTouchstart", []).directive("ngTouchstart", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchstart', onTouchStart);
      
      function onTouchStart(event) {
        var method = '$scope.' + $element.attr('ng-touchstart');
        $scope.$apply(method);
      };
    }
  };
});
