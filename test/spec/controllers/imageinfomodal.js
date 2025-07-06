'use strict';

describe('Controller: ImageinfomodalCtrl', function () {

  // load the controller's module
  beforeEach(module('depthyApp'));

  var ImageinfomodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImageinfomodalCtrl = $controller('ImageinfomodalCtrl', {
      $scope: scope
    });
  }));

});
