window.Behave = {};

Behave.view = $(document.body);
Behave.domTypes = {
  field: {
    elementTypes: ['input', 'select', 'option', 'label', 'textarea'],
    attrOptions: ['name', 'for', 'placeholder', 'contains']
  },
  clickable: {
    elementTypes: ['button', 'a'],
    attrOptions: ['contains', 'href']
  },
  icon: {
    elementTypes: ['icon', 'div', 'span'],
    attrOptions: ['type']
  },
  display: {
    elementTypes: ['div', 'p', 'label', 'span', 'h1', 'h2', 'h3', 'h4', 'h5'],
    attrOptions: ['contains']
  }
}
var getClosestInput = function($el) {
  var sibling = $el.next();
  if (sibling.is('input')) {return sibling}
  var relatedInput = sibling.find('input');
  return relatedInput.length > 0 ? relatedInput : $el;
};
Behave.find = function(identifier, type) {
  type = type || 'field'
  var searchParams = this.domTypes[type];
  var element = {};

  _.each(searchParams.elementTypes, function(elType) {
    _.each(searchParams.attrOptions, function(attrOption) {
      // Changing filter syntax to handle jQuery "contains"
      var filter = attrOption === 'contains' ? ":contains(" + identifier + ")" : "[" + attrOption + "=" + identifier + "]"

      // Don't go searching jQuery if we've already found an element.
      element = element.length > 0 ? element : Behave.view.find(elType + filter);
      return element;
    });
  });

  if (element && element.is('label')) {
    element = getClosestInput(element);
  }
  return element;
};
