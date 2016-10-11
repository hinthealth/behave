'use strict';
// Little jQuery extension for exact and rough text matching
$.expr[':'].textEquals = function(el, i, m) {
    var reToMatch = new RegExp(("^" + m[3].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + "$"));
    var match = $(el).text().trim().match(reToMatch);
    return match && match.length > 0;
};

// This is similar to contains, except not case sensitive.
$.expr[':'].textRoughMatch = function(el, i, m) {
    var textToMatch = m[3];
    var elText = $(el).text().toLowerCase();
    var res = elText.toLowerCase().indexOf(textToMatch.toLowerCase()) !== -1;
    return res;
};

window.Behave = {};
Behave.view = $(document.body);
Behave.domTypes = {
  field: {
    elementTypes: ['input', 'select', 'option', 'label', 'textarea', 'form'],
    attrOptions: ['name', 'for', 'placeholder', 'contains', 'type', 'test-me']
  },
  clickable: {
    elementTypes: ['button', 'a', 'select'],
    attrOptions: ['contains', 'href', 'test-me']
  },
  icon: {
    elementTypes: ['icon', 'div', 'span'],
    attrOptions: ['type', 'class', 'test-me']
  },
  display: {
    // The empty string is actually all elements, since there's no leading el type
    elementTypes: ['table', 'tr', 'td', 'th', ''],
    attrOptions: ['test-me', 'contains']
  }
};

Behave.find = function(identifier, type, opts) {
  opts = opts || {};
  var element = '';
  var searchOptions = type ? {specificOption: Behave.domTypes[type]} : Behave.domTypes;
  _.each(searchOptions, function(searchParams) {
    _.each(searchParams.elementTypes, function(elType) {
      // Explicitly returning false kills iteration early in lodash.
      if (element.length) {return false;}

      _.each(searchParams.attrOptions, function(attrOption) {
        switch (attrOption) {
          case 'contains':
            element = findByText(identifier, elType);
            break;
          case 'class':
            element = findByClass(identifier, elType);
            break;
          default:
            var filter = "[" + attrOption + "='" + identifier + "']";
            element = tryToFind(elType + filter);
        }
        // Explicitly returning false kills iteration early in lodash.
        if (element.length) {
          return false;
        }
      });
    });
  });

  if (element && element.is('label')) {
    element = getClosestInput(element);
  }
  // Fall back to jQuery if we can't find anything
  if (!element.length) {
    element = Behave.view.find(identifier);
  }

  // No element has been found, and we're in error mode.
  if (!element.length && !opts.noErrors) {
    throw new Error('Can\'t find element identified by ' + identifier);
  }

  // We found too many things
  if (element.length > 1 && !opts.findMany) {
    throw new Error('Matched multiple elements identified by ' + identifier + '. Use findAll if that\'s what you expect.')
  }

  return element;
};

Behave.tryFind = function(identifier, type) {
  return Behave.find(identifier, type, {noErrors: true});
};

Behave.findAll = function(identifier, type) {
  return Behave.find(identifier, type, {findMany: true});
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

Behave.bexpect = function(identifier, opts) {
  if (_.isObject(jasmine)) {
    if (_.isString(identifier)) {
      return jasmine.getGlobal().expect(Behave.find(identifier, opts));
    }
    return jasmine.getGlobal().expect(identifier);
  }

  throw new Error("It appears jasmine or expect isn't defined. Thus Behave can't delegate expect");
};

Behave.click = function(identifier) {
  if (identifier instanceof jQuery) {
    if (identifier.is('input') && identifier.attr('type') === 'radio') {
      return identifier.click().trigger('click');
    } else {
      return identifier.trigger('click');
    }
    return;
  }
  if (_.isString(identifier)) {
    return Behave.find(identifier).trigger('click');
  }
  throw new Error("The identifier passed to click was invalid. It must be either a string or jQuery object");
};

Behave.choose = function(value) {
  // If id is already jQuery, just go with it. Useful if you've set a variable using Behave.find, and then want to
  // reuse that variable in a fill later on.

  var chooseFrom = function(dropDown) {
    var $el = dropDown instanceof jQuery ? dropDown : Behave.find(dropDown);
    return $el.val(value).trigger('change');
  };

  var chooseObject = {
    from: chooseFrom
  };

  return chooseObject;
};


// PRIVATE FUNCTIONS
var tryToFind = function(expression) {
  var el = '';
  try {
    el = Behave.view.find(expression);
  }
  catch (e) {
    // Syntax errors occur sometimes when trying to do certain operations
    // with ~'s and such. We just want it to return nothing in this case.
    if ( !(_.contains(e.message, "Syntax error") || _.contains(e.message, "SyntaxError")) ) {
      // Re throw if it's not a syntax errors
      throw (e)
    }
  }
  return $(el);
};

var getClosestInput = function($el) {
  var sibling = $el.next();
  if (sibling.is('input')) {return sibling;}
  var relatedInput = sibling.find('input');
  return relatedInput.length ? relatedInput : $el;
};

var findByClass = function(identifier, elType) {
  var prefix = _.contains(['icon', 'div', 'span'], elType) ? 'glyphicon-' : '';
  elType = elType || '';
  var expression = elType + '.' + prefix + identifier;

  return tryToFind(expression).first();
};

var findByText = function(identifier, elType) {
  var filterMethod, filterString, expression;
  filterMethod = ":textEquals";

  if (identifier[0] === '~') {
    identifier = identifier.slice(1);
    filterMethod = ":textRoughMatch";
  }
  filterString = filterMethod + "('" + identifier + "')";
  expression = elType + filterString;

  return tryToFind(expression);
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
window.fill = Behave.fill;
window.findAll = Behave.findAll;
window.tryFind = Behave.tryFind;
window.bexpect = Behave.bexpect;
window.click = Behave.click;
window.choose = Behave.choose;
