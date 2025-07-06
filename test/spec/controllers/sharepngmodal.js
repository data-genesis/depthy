'use strict';

describe('Controller: SharepngmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('depthyApp'));

  var SharepngmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SharepngmodalCtrl = $controller('SharepngmodalCtrl', {
      $scope: scope
    });
  }));

});
