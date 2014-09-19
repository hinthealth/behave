/* jshint immed: false */
/* globals Replicator, describe, beforeEach, it, xdescribe, templates */

(function () {
'use strict';
  var $view;
  beforeEach(function() {
    Behave.view = $view = $(templates.signup)
  });
  describe('#getEl', function() {
    describe("with field type elements", function() {
      it("should, by default, look for field type elements", function() {
        $view.append('div[name=subdomain]')
        var jqSubdomain = $view.find("input[name='subdomain']");
        var bSubdomain = Behave.find('subdomain');
        bSubdomain.attr('ng-model').should.eql(jqSubdomain.attr('ng-model'));
      });
      it("should find things by name attribute", function() {
        var jqSubdomain = $view.find("input[name='subdomain']");
        var bSubdomain = Behave.find('subdomain');
        bSubdomain.attr('ng-model').should.eql(jqSubdomain.attr('ng-model'));
      });
      it("should find things by placeholder text", function() {
        var jqPlaceholder = $view.find("input[placeholder='testPlaceholder']");
        var bPlaceholder = Behave.find('testPlaceholder');
        bPlaceholder.attr('ng-model').should.eql(jqPlaceholder.attr('ng-model'));
      });
      it("should find things by 'for' attribute on a label, but return the closest input element", function() {
        var jqResult = $view.find("label[for='forAttr']");
        var bResult = Behave.find('forAttr');
        var correspondingInput = Behave.find('forAttr');
        bResult.attr('ng-model').should.not.eql(jqResult.attr('ng-model'));
        bResult.attr('ng-model').should.eql(correspondingInput.attr('ng-model'));
      });
      it("should find things by label text, but return the closest input element", function() {
        var jqSubdomain = $view.find("label:contains('Subdomain')");
        var bSubdomain = Behave.find('Subdomain');
        var correspondingInput = $('input[name=subdomain]');
        bSubdomain.attr('ng-model').should.not.eql(jqSubdomain.attr('ng-model'));
        bSubdomain.attr('ng-model').should.eql(correspondingInput.attr('ng-model'));
      });
    });
  });
}());
