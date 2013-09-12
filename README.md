select-placeholder.js
=====================

A jQuery extension for providing placeholder text (AKA not selected text) on selects.

Dependencies
------------

 * jQuery

Usage
-----

In your HTML add a placeholder attribute to a select, the value will be the text displayed.

``` html
<select placeholder='Click something..'>
  <option>One</option>
  <option>Two</option>
</select>
```

Add into your javascript, the following...

``` js
$('select').selectPlaceholder();
```

See demo.html for a working example.

How it works
------------

A new option is inserted into the select, that contains the placeholder text.  This is automatically selected, but cannot be reselected once a new option is choosen.

What still needs resolving :(
-----------------------------

It would be better to NOT show hover effects and pointer when the cursor is on the placeholder option.
