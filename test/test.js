/* jshint immed: false */
/* globals Replicator, describe, beforeEach, it, xdescribe, templates, Behave */
/* quotmark: true*/

(function () {
'use strict';
  var $view;
  beforeEach(function() {
    Behave.view = $view = $(templates.signup);
  });
  describe('#find', function() {
    describe("when no element is found", function() {
      it("should throw an error", function() {
        (function() {
          var el = Behave.find("TOTALLY NOT HERE")
        }).should.throw("Can't find element identified by TOTALLY NOT HERE");
      });
    });
    describe("with field type elements", function() {
      it("should, by default, look for field type elements", function() {
        $view.append('div[name=subdomain]');
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

    describe("when multiple things match", function() {
      beforeEach(function() {
        Behave.view.append("<div>Worked!</div>")
        Behave.view.append("<div>WorkedAgain!</div>")
      });
      it("should throw an error if multiple things match", function() {
        (function() {
          Behave.find('~Worked')
        }).should.throw('Matched multiple elements identified by ~Worked. Use findAll if that\'s what you expect.');
      });
      describe("using find all", function() {
        it("should be totally fine", function() {
          (function() {
            Behave.findAll('~Worked');
          }).should.not.throw();
        });
        it("should return the correct number of elements", function() {
          Behave.findAll('~Worked').length.should.eql(2);
        });
      });
    });

    describe("searching by text", function() {
      describe("with exact matching", function() {
        beforeEach(function() {
          Behave.view = $view = $(templates.invoiceOne);
        });
        it("should only find things with the exact text", function() {
          var jqResult = $view.find("a:contains('Back to All Invoices')");
          var bResultNotExact = Behave.tryFind("Back to All");
          var bResultExact = Behave.find("Back to All Invoices");
          bResultExact.text().should == "Back to All Invoices";
          bResultExact.text().should.eql(jqResult.text());
          bResultNotExact.text().should.eql('');
        });
      });
      describe("when using rough match", function() {
        beforeEach(function() {
          Behave.view.append("<div>Success: This is alert text that could be many things!</div>")
        });
        it("should find a substring match", function() {
          var bResult = Behave.find('~Success');
          bResult.text().should.eql("Success: This is alert text that could be many things!");
        });
        it("should not be case sensitive", function() {
          var bResult = Behave.find('~sUcCess');
          bResult.text().should.eql('Success: This is alert text that could be many things!');
        });
      });
    });
    describe("with clickable type elements", function() {
      var jqResult, bResult;
      beforeEach(function() {
        $view.append("<button>Subdomain</button>");
        $view.append("<a href='www.test.com'>Practice Url</button>");
        jqResult = $view.find('button:contains(Subdomain)');
      })
      it("should find only clickable type elements and search by containing text", function() {
        bResult = Behave.find('Subdomain', 'clickable');
        bResult.is('input').should.eql(false);
        bResult.is('button').should.eql(true);
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
    describe("with icon type elements", function() {
      beforeEach(function() {
        $view.append("<span class='glyphicon glyphicon-cancel'></span>")
        $view.append("<icon type='danger'></icon>")
      });
      it("find icons by type", function() {
        Behave.find('danger', 'icon').attr('type').should.eql('danger');
      });
      it("find icons by class", function() {
        Behave.find('cancel', 'icon').hasClass('glyphicon-cancel').should.be.true;
      });
    });
    describe("when passing jQuery type selectors", function() {
      beforeEach(function() {
        $view.append("<div id='someId'>Worked!</div>")
        $view.append("<div class='someclass'>Worked!</div>")
      });
      it("should use jQuery if it can't find it normally", function() {
        Behave.find('#someId').text().should.eql('Worked!');
        Behave.find('.someclass').text().should.eql('Worked!');
      });
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
        form.append("<label for='practice_url'>Practice Url</label>")
        form.append("<input type='text' name='practice_url'>")
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
        it("should fill all the elements provided in the hash", function() {
          Behave.fill('form').with({
            accept_terms: true,
            first_name: 'Joe Shmo',
            'Practice Url': 'www.yesthisworked.com'
          });
          Behave.find('accept_terms').prop('checked').should.be.true
          Behave.find('first_name').val().should.eql('Joe Shmo')
          Behave.find('Practice Url').val().should.eql('www.yesthisworked.com')
        })
      });
    })
  });
  xdescribe("#click", function() {
    it("would be annoying to test, but I manually tested this");
  });
  describe("#choose/from", function() {
    beforeEach(function() {
      Behave.view = $view = $(templates.dropdowns);
    });
    it.only("should select a dropdown", function() {
      var coupon = Behave.choose('InactiveCoupon').from('coupons');
      coupon.val().should.eql('InactiveCoupon');
      coupon = Behave.choose('ActiveCoupon').from('coupons');
      coupon.val().should.eql('ActiveCoupon');
    });
  });
}());
