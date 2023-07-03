jQuery is a popular JavaScript library designed to simplify HTML document manipulation, event handling, and animation 
on websites. It provides a convenient way to interact with the Document Object Model (DOM) of a web page, allowing 
developers to easily traverse and manipulate elements, handle events, create animations, and make asynchronous requests 
to servers. Since the rise of JavaScript frameworks like React and Vue.js, the usage of jQuery has declined in recent years.

## Key features
- DOM manipulation: jQuery provides a rich set of methods for selecting, traversing, and manipulating HTML elements on 
a web page. It allows developers to easily add, remove, or modify elements and their attributes.

- Event handling: jQuery simplifies event handling by providing methods to attach event listeners to elements and respond
to user interactions such as clicks, mouse movements, key presses, etc. It handles cross-browser compatibility issues 
and provides consistent event handling across different browsers.

- AJAX support: jQuery makes it easy to perform asynchronous HTTP requests (AJAX) to fetch data from a server without 
reloading the entire page. It provides methods for making GET and POST requests, handling responses, and updating the
page content dynamically.

- Animation effects: jQuery includes a range of built-in animation methods to create smooth transitions and effects. 
Developers can animate elements by changing their properties such as size, position, opacity, and colors.

- Plugin ecosystem: jQuery has a vast ecosystem of plugins developed by the community, extending its functionality. 
These plugins offer additional features, UI components, and integration with other libraries.


## DOM (Document Object Mode) manipulation
The `$(document).ready()` function is a jQuery method used to specify a block of code to be executed when the DOM  has 
finished loading. It ensures that the code inside the function is executed only when the HTML document has been fully 
parsed and all elements are accessible.

All jQuery functions start with a $, usually referred to as a dollar sign operator, or as bling.

```javascript
$(document).ready(function() { 
  console.log('Document is ready!');
});
```

The `$(document).ready()` function is called with an anonymous function as its argument. The anonymous function serves 
as a callback function, meaning it will be executed when the DOM is ready.

### Selecting elements

In jQuery, there are several methods available for selecting elements in the DOM. These methods allow you to identify 
and manipulate specific elements or groups of elements on a web page. The following are some key selectors.

#### Element selector
The element selector selects elements based on their tag name. For example:<br>

`$("p") selects all <p> elements.`<br>
`$("div") selects all <div> elements.`

#### Class selector
The class selector selects elements based on their CSS class. It uses the dot (.) prefix followed by 
the class name. For example:

`$(".myClass") selects all elements with the class myClass.`

#### ID selector
The ID selector selects a single element based on its unique identifier. It uses the hash (#) prefix
followed by the ID name. For example:

`$("#myId") selects the element with the ID myId.`


#### Attribute selector
The attribute selector selects elements based on their attribute values. It uses square brackets [ ] and can be used to 
select elements with specific attribute values. For example:

`$("[name='myName']") selects elements with the attribute name having the value myName.`