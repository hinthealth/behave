  var templates = {};
  templates.signup =
    "<form class='form-horizontal' name='form' for='form'>\n" +
    "  <div class='panel panel-default'>\n" +
    "    <div class='panel-heading'>\n" +
    "      <h4>\n" +
    "        Online Signup\n" +
    "        <small ng-show='signupUrl'>at <a href=\"{{signupUrl}}\" target=\"_blank\" test-me=\"signup-url-active\">{{signupUrl}}</a></small>\n" +
    "        <small ng-hide='signupUrl'><em>inactive</em></small>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <div class='panel-body'>\n" +
    "      <div class='form-group'>\n" +
    "        <label class='col-sm-4 control-label' for='name'>Practice Name</label>\n" +
    "        <div class='col-sm-8'>\n" +
    "          <p class='form-control-static name'>\n" +
    "            {{practice.name}}\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class='form-group'>\n" +
    "        <label class='col-sm-4 control-label' for='subdomain'>Subdomain</label>\n" +
    "        <div class='col-sm-8'>\n" +
    "          <input class='form-control with-feedback' type='text' name='subdomain' ng-model='params.subdomain' placeholder='{{subdomainPlaceholder}}'>\n" +
    "          <span class='help-block slide-down' ng-repeat='error in errors.subdomain'>\n" +
    "            <span class='glyphicon glyphicon-exclamation-sign'></span>\n" +
    "            {{error}}\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class='form-group'>\n" +
    "        <label class='col-sm-4 control-label' for='forAttr'>Patient Terms of Service (url)</label>\n" +
    "        <div class='col-sm-8'>\n" +
    "          <input class='form-control with-feedback' type='url' name='forAttrTest' ng-model='params.patient_terms_url' placeholder='testPlaceholder'>\n" +
    "          <span class='help-block ng-hide slide-down' ng-show='form.patient_terms_url.$error.url'>URL must start with http:// or https://</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class='form-group' ng-show=\"hint.features.on('employers')\">\n" +
    "        <label class='col-sm-4 control-label' for='company_terms_url'>Company Terms of Service (url)</label>\n" +
    "        <div class='col-sm-8'>\n" +
    "          <input class='form-control with-feedback' type='url' name='company_terms_url' ng-model='params.company_terms_url' placeholder='https://www.practice.com/company-terms-and-conditions'>\n" +
    "          <span class='help-block ng-hide slide-down' ng-show='form.company_terms_url.$error.url'>URL must start with http:// or https://</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class='form-group'>\n" +
    "        <label class='col-sm-4 control-label' for='logo_url'>Site Logo (url)</label>\n" +
    "        <div class='col-sm-8'>\n" +
    "          <input class='form-control with-feedback' type='url' name='logo_url' ng-model='params.logo_url' placeholder='https://www.practice.com/images/practice.jpg'>\n" +
    "          <span class='help-block ng-hide slide-down' ng-show='form.logo_url.$error.url'>URL must start with http:// or https://</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class='panel-footer'>\n" +
    "      <div class='pager'>\n" +
    "        <a class='btn btn-secondary' ui-sref='admin'>Cancel</a>\n" +
    "        <button class='btn btn-primary' type='submit' ng-click='updatePractice()' ng-disabled='form.$invalid' test-me='update-button'>Update</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>";

  templates.invoiceOne =
    "<div class='panel panel-default'>\n" +
    "  <div class='panel-body scrollable'>\n" +
    "    <h4 test-me='invoice-number'>Invoice # {{data.invoice.invoice_number}}</h4>\n" +
    "    <div app-alerts></div>\n" +
    "    <div class='form-horizontal' test-me='invoice-info'>\n" +
    "      <div class='row'>\n" +
    "        <div class='col-sm-6'>\n" +
    "          <div class='form-group'>\n" +
    "            <label class='col-xs-4 control-label'>Total</label>\n" +
    "            <div class='col-xs-8'>\n" +
    "              <p class='bold-large form-control-static'>\n" +
    "                {{data.invoice.amount_in_cents | fromCents | currency }}\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class='col-sm-6'>\n" +
    "          <div class='form-group'>\n" +
    "            <label class='col-xs-4 control-label'>Payment Status</label>\n" +
    "            <div class='col-xs-8'>\n" +
    "              <p class='form-control-static'>\n" +
    "                <div class='col-xs-4' test-me='status' hi-label-maker='{{data.invoice.human_status}}'></div>\n" +
    "                <span>&nbsp;</span>\n" +
    "                <span class='clickable glyphicon glyphicon-info-sign' data-placement='bottom' bs-popover='popover' data-trigger='hover' data-template='/templates/popover/payments_history' ng-if='data.invoice.payments.length'></span>\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class='col-sm-6'>\n" +
    "          <div class='form-group'>\n" +
    "            <label class='col-xs-4 control-label'>Billed On</label>\n" +
    "            <div class='col-xs-8'>\n" +
    "              <p class='form-control-static'>\n" +
    "                {{data.invoice.invoice_date | date}}\n" +
    "              </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class='col-sm-6'>\n" +
    "          <div class='form-group'>\n" +
    "            <div class='col-xs-8 col-xs-offset-4'>\n" +
    "              <button class='btn btn-md btn-primary' type='submit' ng-hide=\"data.invoice.human_status === 'paid'\" ng-click='showModal()' test-me='open-mark-as-paid'>\n" +
    "                Mark as Paid\n" +
    "              </button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div ng-include=\"'/templates/employees/enrollment_changes_table'\"></div>\n" +
    "    <br>\n" +
    "    <div ng-include=\"'/templates/employees/enrollments_for_invoice_table'\"></div>\n" +
    "  </div>\n" +
    "  <div class='panel-footer'>\n" +
    "    <div class='pager'>\n" +
    "      <a class='btn btn-secondary' ui-sref='^' test-me='open-mark-as-paid'>\n" +
    "        Back to All Invoices\n" +
    "      </a>\n" +
    "      <button class='btn btn-md btn-primary' type='submit' ng-hide=\"data.invoice.human_status === 'paid'\" ng-click='showModal()'>\n" +
    "        Mark as Paid\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>";

  templates.dropdowns =
    "    <div class='row' ng-hide='show.addCoupon'>\n" +
    "      <div class='col-xs-8'>\n" +
    "        <select class='form-control' test-me='coupons'>\n" +
    "          <option value='InactiveCoupon'>Inactive Coupon</option>\n" +
    "          <option value='ActiveCoupon'>Active Coupon</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "      <div class='col-xs-4'>\n" +
    "        <a class='btn btn-default' href='' ng-click='removeCoupon()'>\n" +
    "          <span class='glyphicon glyphicon-minus'></span>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n";

