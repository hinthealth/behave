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
    "</form>"
