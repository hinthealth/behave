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
        $view.append("<a href='www.test.com'>Practice Url</button>");
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
        bResult = Behave.find('Practice Url', 'clickable');
        jqResult = $view.find("a:contains(Practice Url)");
        bResult.text().should.eql(jqResult.text());
      });
    });
    describe("with display type elements", function() {
      xit("should return rough matches of text contained in display type elements", function() {
        // TODO: Create good list of display elements, or maybe just use body:contains ? figure this out.
      });
    });
    xdescribe("with icon type elements", function() {
      // TODO: Create tests for finding icons. Probably check classes and type.
    });
    xdescribe("when passing jQuery type selectors", function() {
      // TODO: Implement me!
    });
  });
  describe("#fill", function() {
    it("should return an object who has a 'with' function", function() {
      Behave.fill('testPlaceholder').with.should.be.a.Function
    });
    describe("using #with", function() {
      beforeEach(function() {
        var form = $("<form type='form'></form>")
        form.append("<input type='checkbox' name='accept_terms'>")
        form.append("<input type='text' name='first_name'>")
        $view.append(form)
      });
      describe('on individual form elements', function() {
        it("should fill in the element with the provided data", function() {
          Behave.fill('testPlaceholder').with('bananas');
          Behave.find('testPlaceholder').val().should.eql('bananas');
        })
        it("should work with checkboxes", function() {
          Behave.find('accept_terms').prop('checked').should.be.false
          Behave.fill('accept_terms').with(true);
          Behave.find('accept_terms').prop('checked').should.be.true
        });
      });
      describe('on a whole form at once', function() {
        it.only("should fill all the elements provided in the hash", function() {
          Behave.fill('form').with({
            accept_terms: true,
            first_name: 'Joe Shmo',
            'Practice Url': 'www.yesthisworked.com'
          });
          // Behave.find('accept_terms').prop('checked').should.be.true
          // Behave.find('first_name').prop('checked').should.eql('Joe Shmo')
          // Behave.find('Practice Url').prop('checked').should.eql('www.yesthisworked.com')
        })
      });
    })
  });
}());
