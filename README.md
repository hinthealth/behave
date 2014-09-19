***BEHAVE!***
Dominate the DOM.
We put the DOM in the DOM.

`bower install behave!`

**USE IT LIKE THIS**

Tired of doing lame, verbose jQuery to grab and manipulate elements in your front-end tests? No more!

Before: 
  ` $("[name='email']").val('joeShmo@gmail.com').trigger('input'); `

With Behave!
  ` fill('email').with('joeShmo@gmail.com') `

or...

Before: 
  ```
   $("[name='email']").val('joeShmo@gmail.com').trigger('input');
   $("[for='age']").val(27).trigger('input');
   $("[for='dob']").val('04/27/87').trigger('input');
  ```

With Behave!:
  ` fill('form').with({email: 'joeShmo@gmail.com', age: 27, dob: '04/27/87'});`

the fill function also takes jQuery elements as input.
  ```
   var myEl = $("[attr='my-el']")
   fill(myEl).with('yay');
  ```



Behave! is very forgiving when you try to fill in an element on the page. If your 
forms conform to general standards, it will likely find them. It can also look for
placeholder text, as well as other attributes on the element. It will try to be intelligent
about which element it selects, but you should try to pick something that's as unique as possible.

Behave! can also work with dropdowns, radiobuttons, checkboxes, datepickers, etc.

Behave can even find and make available each element on your page instantly. It dynamically puts them in 
an object called 'els', and gives you direct access to their jQuery representations.

expect(els.email).toBeVisible();
expect(els.routingNumber).toBeInvalid();

**FIND SYNTAX**
find(identifier, type) --> type defaults to 'field'. But you can also do any html element type. 
  --> You can also of course pass in CSS selectors as the identifiers, such as... find(#myId) or find('.special-class');
find('email') --> Finds elements with name='email'
find('password', 'label') --> finds the label with a for='password'
find_rough('password') --> finds element with name='password' or name='pass', or placeholder='password'. It reg-ex matches any of those with what gets passed in.
find('accepts_cards', 'field') --> Searches among all input elements to find any element who has an attribute called "accepts_cards"
find('credit_card', 'display') --> Searches among all display type elements to find any element who has some attribute with a value of "credit_card"

