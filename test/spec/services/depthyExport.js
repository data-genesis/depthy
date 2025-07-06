'use strict';

describe('Service: depthy exportWebmAnimation', function () {
  beforeEach(module('depthyApp'));

  var depthy, $rootScope;
  beforeEach(inject(function (_depthy_, _$rootScope_) {
    depthy = _depthy_;
    $rootScope = _$rootScope_;
  }));

  it('resolves with Blob when MediaRecorder available', function(done) {
    var canvas = document.createElement('canvas');
    canvas.captureStream = function() { return {}; };
    spyOn(depthy, 'getViewer').and.returnValue({
      getCanvas: function() { return canvas; },
      getOptions: function() { return {}; },
      setOptions: function() {},
      render: function() {}
    });

    depthy.exportSize = 32;
    depthy.viewer.animateDuration = 0.01;

    function FakeRecorder() {
      this.state = 'inactive';
    }
    FakeRecorder.prototype.start = function(){
      this.state = 'recording';
      if (this.ondataavailable) {
        this.ondataavailable({data: new Blob(['x'], {type: 'video/webm'})});
      }
      this.stop();
    };
    FakeRecorder.prototype.stop = function(){
      this.state = 'inactive';
      if (this.onstop) this.onstop();
    };

    window.MediaRecorder = FakeRecorder;
    jasmine.clock().install();
    var promise = depthy.exportWebmAnimation();
    jasmine.clock().tick(1000);
    $rootScope.$apply();
    promise.then(function(blob){
      expect(blob instanceof Blob).toBe(true);
      jasmine.clock().uninstall();
      done();
    });
  });
});
