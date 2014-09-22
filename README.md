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
  ```

With Behave!:
  ` fill('form').with({email: 'joeShmo@gmail.com', age: 27, dob: '04/27/87'});`

the fill function also takes individual fields, or jQuery elements as input.
  ```
   fill('myOtherEl').with('new text');

   var myEl = Behave.find('myEl')
   fill(myEl).with('yay');
  ```

Behave! is very forgiving when you try to fill in an element on the page. If your 
forms conform to general standards, it will likely find them. It searches for attrs like
name, for, placeholder, type, actual text, and others. Fill only looks through element types
that would typically show up in a form ('input', 'select', 'option', 'label', 'textarea', or 'form').

** FIND **
Under the hood of "fill" is a robust "find" function. The signature is...
`Behave.find(identifier, type)`

Thus, try to give it something unique, but if it's not, you can specify a "type" of DOM element to narrow the search
by doing...
```
Behave.find('email', 'field') // Finds els of type 'input', 'select', 'option', 'label', 'textarea', or 'form'
Behave.find('Sign Up', 'clickable') // Finds els of type 'button', or 'a'
Behave.find('danger', 'icon') // Finds els of type 'icon', 'div', or 'span'
Behave.find('Birthday', 'display') // Searches text of all elements.
```

Behave also finds and makes available each element on your page instantly! Let's say your page is...
```
  <form type='form'></form>"
    <input type='checkbox' name='accept_terms'>"
    <input type='text' name='first_name'>"
    <label for='practice_url'>Practice Url</label>"
    <input type='text' name='practice_url'>"
  </form>
  <div name='coupon-container'></div>")
```
then you could do...
```
var $els = Behave.getAllEls()
$els.accept_terms
$els.PracticeUrl // This will return the label element. It automatically removes spaces from text.
$els.practice_url // would return the input that has name="practice_url"
$els.couponContainer // auto camelCases attrs that have dash-case
```

Behave also, for convenience (and because it should only get loaded during tests), aliases the `find`
and `fill` functions to the window. So in your tests you can just do...
```
 find('email');
 fill('password').with('secret');
```
