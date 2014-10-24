***BEHAVE!***
Dominate the DOM.
We put the DOM back in the DOM.

`bower install behave`

**USE IT LIKE THIS**

Tired of doing lame, verbose jQuery to grab and manipulate elements in your front-end tests? No more!

Before: 
  ```
   $("[name='email']").val('joeShmo@gmail.com').trigger('input');
   $("[for='age']").val(27).trigger('input');
   $("[for='dob']").val('04/27/87').trigger('input');
   
   var createButton = $view.find("button:contains('Create')")
   expect(createButton).not.toBeDisabled();
  ```

Now with Behave!:
  ```
  fill('form').with({email: 'joeShmo@gmail.com', age: 27, dob: '04/27/87'});
  expect(find('Create')).not.toBeDisabled()
  ```



Behave! tries to intelligently find things when you try to fill in an element on the page. If your 
forms conform to general standards, it will likely find them. It searches for attrs like
name, for, placeholder, type, actual text, and others. Fill only looks through element types
that would typically show up in a form ('input', 'select', 'option', 'label', 'textarea', or 'form').


***METHODS***

**#find**

`find` is the heart of Behave. It is under the hood of most of the methods. The signature is...
`Behave.find(identifier, [type])`
It will error if it doesn't find exactly one element. That means it fails if it finds nothing or many things.
'identifier' must be a string

Why would you want to do this? Sometimes having a variable is nice.

Type is optional. Thus, try to give it something unique, but if your searching for something that's not, 
you can specify a "type" of DOM element to narrow the search by doing...
```
Behave.find('email', 'field') // Finds els of type 'input', 'select', 'option', 'label', 'textarea', or 'form'
Behave.find('Sign Up', 'clickable') // Finds els of type 'button', or 'a'
Behave.find('danger', 'icon') // Finds els of type 'icon', 'div', or 'span'
Behave.find('Birthday', 'display') // Searches EXACT text of all elements.
```

**#tryFind**
For those times when you don't want find to error (like checking that an element doesn't exist), you can use tryFind
`tryFind(identifier, [type])`

**#findAll**
findAll will allow you to find multiple elements (where as `find` errors unless it finds exactly 1)

**#fill**
  `fill('identifier').with('some value').`
  `fill` by itself really does nothing. it returns an object that has a "with" method where you fill the value.
  It also has a special case of taking a form, and you can pass it an object with many values, like so...
  ```
   fill('form').with({first_name: "Phil", last_name: "Lesh", age: 58}); 
  ```
  
  Lastly, it's good to know that `fill` can also take a jQuery object, which is convenient when you want to use a variable to store an element, like so...
  ```
   var myEl = Behave.find('myEl')
   fill(myEl).with('yay');
  ```

**#click**
`click(identifier)` // basically does find('identifier').trigger('click')
click can take a string or a jquery object. 
ex. `click('Create')`. Or `var button = find('Create') ; click(button)`
click also handles angular idiosyncracies like a radio element needing to do '.click().trigger('click')'


**#select**
`select('value').from('dropdownIdentifier')`
Basically like click, except with dropdowns.

**Global Methods**
For convenience (and because it should only get loaded during tests), Behave aliases the following
methods to the window. So in your tests you can just do...
```
 find('email');
 tryFind('email');
 findAll('email');
 fill('password').with('secret');
 click('button')
 select('value').from('dropdown');
```
