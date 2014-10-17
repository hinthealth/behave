'use strict';
// Little jQuery extension to have exact equals;
$.expr[':'].textEquals = function(a, i, m) {
    var match = $(a).text().trim().match("^" + m[3] + "$")
    return match && match.length > 0;
}

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
  var element = '';
  var searchOptions = type ? {specificOption: Behave.domTypes[type]} : Behave.domTypes;
  _.each(searchOptions, function(searchParams) {
    _.each(searchParams.elementTypes, function(elType) {
      // Explicitly returning false kills iteration early in lodash.
      if (element.length) {return false;}

      _.each(searchParams.attrOptions, function(attrOption) {
        switch (attrOption) {
          case 'contains':
            element = findByText(identifier, elType)
            break;
          case 'class':
            element = findByClass(identifier, elType);
            break;
          default:
            var filter = "[" + attrOption + "='" + identifier + "']";
            element = tryFind(elType + filter);
        }
        // Explicitly returning false kills iteration early in lodash.
        if (element.length) {
          return false;
        }
      });
    });
  })

  if (element && element.is('label')) {
    element = getClosestInput(element);
  }
  // Fall back to jQuery if we can't find anything
  if (!element.length) {
    element = tryFind(identifier);
  }
  return element;
};


Behave.fill = function(identifier) {
  // If id is already jQuery, just go with it. Useful if you've set a variable using Behave.find, and then want to
  // reuse that variable in a fill later on.
  var $el = identifier instanceof jQuery ? identifier : Behave.find(identifier, 'field');

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
    if (attrVal) {
      element.reload = function() {
        return Behave.find(attrVal);
      }
    }
    attrVal && ($els[attrVal] = element)
  });
  var elText = element.text();
  if(elText) {$els[cleanVal(elText)] = element;}
  return $els;
};


// PRIVATE FUNCTIONS
var tryFind = function(expression) {
  var el = '';
  try {
    console.log(expression);
    el = Behave.view.find(expression);
  }
  catch (e) {
    // Syntax errors occur sometimes when trying to do certain operations
    // with ~'s and such. We just want it to return nothing in this case.
    if ( !(_.contains(e.message, "Syntax error")) ) {
      // Re throw if it's not a syntax errors
      throw (e)
    }
  }
  return $(el);
};

var getClosestInput = function($el) {
  var sibling = $el.next();
  if (sibling.is('input')) {return sibling}
  var relatedInput = sibling.find('input');
  return relatedInput.length ? relatedInput : $el;
};

var findByClass = function(identifier, elType) {
  var prefix = _.contains(['icon', 'div', 'span'], elType) ? 'glyphicon-' : '';
  elType = elType || '';
  var expression = elType + '.' + prefix + identifier;

  return tryFind(expression).first();
};

var findByText = function(identifier, elType) {
  var filterMethod, filterString, expression;
  filterMethod = ":textEquals";

  if (identifier[0] === '~') {
    identifier = identifier.slice(1);
    filterMethod = ":contains";
  }
  filterString = filterMethod + "('" + identifier + "')";
  expression = elType + filterString;

  return tryFind(expression);
};

var cleanVal = function(val) {
  if (!val) {return;}

  // Remove any spaces.
  val = val.replace(' ', '');

  if (_.contains(val, '-')) {
    // camelCasing attrs with dashes in them.
    var words = val.split('-');
    words[1] = words[1][0].toUpperCase() + words[1].substring(1);
    words[2] && (words[2] = words[2][0].toUpperCase() + words[2].substring(1))
    val =  words.join('');
  }
  return val;
};

// Set functions to the window for convenience
window.find = Behave.find;
window.fill = Behave.fill

