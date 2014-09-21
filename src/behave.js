window.Behave = {};

Behave.view = $(document.body);
Behave.domTypes = {
  field: {
    elementTypes: ['input', 'select', 'option', 'label', 'textarea', 'form'],
    attrOptions: ['name', 'for', 'placeholder', 'contains', 'type', 'test-me']
  },
  clickable: {
    elementTypes: ['button', 'a'],
    attrOptions: ['contains', 'href', 'test-me']
  },
  icon: {
    elementTypes: ['icon', 'div', 'span'],
    attrOptions: ['type', 'class', 'test-me']
  },
  display: {
    elementTypes: [''], // This is actually all elements, since there's no leading el type
    attrOptions: ['test-me', 'contains']
  }
}

Behave.getAllElsAttrOptions = ['name', 'for', 'placeholder', 'type', 'test-me']

Behave.find = function(identifier, type) {
  type = type || 'field'
  var searchParams = this.domTypes[type];
  var element = '';
  _.each(searchParams.elementTypes, function(elType) {
    if (element.length) {
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
      if (element.length) {
        return false;
      }
    });
  });

  if (element && element.is('label')) {
    element = getClosestInput(element);
  }
  // Fall back to jQuery if we can't find anything
  if (!element.length) {
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

    $el.val(data).trigger('input');
  }

  var fillObject = {
    with: fillWith
  }

  return fillObject;
};

Behave.getAllEls = function(element, $els) {
  element = element || Behave.view;
  $els = $els || {};
  var kids = element.children;
  if (kids.length) {
    element.children().each(function() {
      $els = Behave.getAllEls($(this), $els);
    });
  }
  _.each(Behave.getAllElsAttrOptions, function(attrOption) {
    var attrVal = cleanVal(element.attr(attrOption));
    attrVal && ($els[attrVal] = element)
  });
  var elText = element.text();
  if(elText) {$els[cleanVal(elText)] = element;}
  return $els;
};


// PRIVATE FUNCTIONS
var getClosestInput = function($el) {
  var sibling = $el.next();
  if (sibling.is('input')) {return sibling}
  var relatedInput = sibling.find('input');
  return relatedInput.length ? relatedInput : $el;
};

var findByClass = function(identifier, elType, prefix) {
  prefix = prefix || '';
  elType = elType || '';
  return Behave.view.find(elType + '.' + prefix + identifier).first();
}

var cleanVal = function(val) {
  if (!val) {return;}

  // Remove any spaces.
  val = val.replace(' ', '');

  if (val.indexOf('-') !== -1) {
    // camelCasing attrs with dashes in them.
    var words = val.split('-');
    words[1] = words[1][0].toUpperCase() + words[1].substring(1);
    words[2] && (words[2] = words[2][0].toUpperCase() + words[2].substring(1))
    val =  words.join('');
  }
  return val;
};
