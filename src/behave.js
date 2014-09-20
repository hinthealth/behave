window.Behave = {};

Behave.view = $(document.body);
Behave.domTypes = {
  field: {
    elementTypes: ['input', 'select', 'option', 'label', 'textarea', 'form'],
    attrOptions: ['name', 'for', 'placeholder', 'contains', 'type']
  },
  clickable: {
    elementTypes: ['button', 'a'],
    attrOptions: ['contains', 'href']
  },
  icon: {
    elementTypes: ['icon', 'div', 'span'],
    attrOptions: ['type', 'class']
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

var findByClass = function(identifier, elType, prefix) {
  prefix = prefix || '';
  elType = elType || '';
  return Behave.view.find(elType + '.' + prefix + identifier).first();
}

Behave.find = function(identifier, type) {
  type = type || 'field'
  var searchParams = this.domTypes[type];
  var element = '';
  _.each(searchParams.elementTypes, function(elType) {
    if (element.length > 0) {
      // Explicitly returning false kills iteration early in lodash.
      return false;
    }
    _.each(searchParams.attrOptions, function(attrOption) {
      switch (attrOption) {
        case 'contains':
          var filter = ":contains(" + identifier + ")"
          element = Behave.view.find(elType + filter);
          break;
        case 'class':
          element = findByClass(identifier, elType, 'glyphicon-');
          break;
        default:
          var filter = "[" + attrOption + "='" + identifier + "']";
          element = Behave.view.find(elType + filter);
      }
      // Explicitly returning false kills iteration early in lodash.
      if (element.length > 0) {
        return false;
      }
    });
  });

  if (element && element.is('label')) {
    element = getClosestInput(element);
  }
  // Fall back to jQuery if we can't find anything
  if (element.length === 0) {
    element = Behave.view.find(identifier);
  }
  return element;
};


Behave.fill = function(identifier) {
  var $el = this.find(identifier, 'field');
  var fillWith = function(data) {
    if ($el.is('form') || $el.attr('type') === 'form') {
      if (!_.isObject(data)) {
        throw new Error("Must pass in a hash with signature of {element: value} when filling a whole form")
      }
      _.each(data, function(value, el) {
        Behave.fill(el).with(value);
      })
      return;
    }
    if ($el.attr('type') === 'checkbox') {
      return $el.prop('checked', data);
    }

    $el.val(data);
  }

  var fillObject = {
    with: fillWith
  }

  return fillObject;
};
