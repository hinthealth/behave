/* jshint immed: false */
/* globals Replicator, describe, beforeEach, it, xdescribe, templates */

(function () {
'use strict';
  var $view;
  beforeEach(function() {
    Behave.view = $view = $(templates.signup)
  });
  describe('#find', function() {
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
        var correspondingInput = $view.find('input[name=forAttrTest]');
        bResult.attr('ng-model').should.not.eql(jqResult.attr('ng-model'));
        bResult.attr('ng-model').should.eql(correspondingInput.attr('ng-model'));
      });
      it("should find things by label text, but return the closest input element", function() {
        var jqSubdomain = $view.find("label:contains('Subdomain')");
        var bSubdomain = Behave.find('Subdomain');
        var correspondingInput = $view.find("input[name='subdomain']");
        bSubdomain.attr('ng-model').should.not.eql(jqSubdomain.attr('ng-model'));
        bSubdomain.attr('ng-model').should.eql(correspondingInput.attr('ng-model'));
      });
    });
    describe("with clickable type elements", function() {
      var jqResult, bResult;
      beforeEach(function() {
        $view.append('<button>Subdomain</button>');
        $view.append("<a href='www.test.com'>TestLinks</button>");
        jqResult = $view.find('button:contains(Subdomain)')
      })
      it("should find only clickable type elements and search by containing text", function() {
        bResult = Behave.find('Subdomain', 'clickable');
        bResult.is('input').should.eql(false);
        bResult.is('button').should.eql(true);
        bResult.text().should.eql(jqResult.text());
      });
      it("should default to doing a rough search", function() {
        var bResult = Behave.find('Subdo', 'clickable');
        bResult.text().should.eql(jqResult.text());
      });
      it("should find things based on href", function() {
        bResult = Behave.find("www.test.com", 'clickable');
        jqResult = $view.find("a[href='www.test.com']");
        bResult.text().should.eql(jqResult.text());
      });
      it("should find things based on text for a tags", function() {
        bResult = Behave.find('TestLinks', 'clickable');
        jqResult = $view.find("a:contains(TestLinks)");
        bResult.text().should.eql(jqResult.text());
      });
    });
    describe("with display type elements", function() {
      xit("should return rough matches of text contained in display type elements", function() {
        //TODO: Create good list of display elements, or maybe just use body:contains ? figure this out.
      });
    });
  });
  });
}());
