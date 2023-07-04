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

### functions
jQuery provides a wide range of functions beyond .addClass() that allow you to manipulate elements, handle events, 
make AJAX requests, animate elements, and more. Here are a few commonly used jQuery functions:

`.addClass()`: Add one or more CSS classes to the selected element.

`.removeClass()`: Removes one or more CSS classes from the selected elements.

`.toggleClass()`: Toggles the presence of one or more CSS classes on the selected elements. If the class is already present, it is removed; otherwise, it is added.

`.css()`: Gets or sets the CSS properties of the selected elements. It can be used to get the value of a specific CSS property or set one or more CSS properties.

`.text()`: Gets or sets the text content of the selected elements. It can be used to retrieve the text or update it with a new value.

`.html()`: Gets or sets the HTML content of the selected elements. It allows you to retrieve the HTML or update it with new content.

`.attr()`: Gets or sets attributes of the selected elements. It can be used to retrieve the value of an attribute or set attribute values.

`.val()`: Gets or sets the value of form elements such as input, select, and textarea.

`.each()`: Iterates over a set of elements and performs a function on each element in the collection.

`.fadeIn()`, `.fadeOut()`, .`slideUp()`, `.slideDown()`: Provides animation effects to fade in/out or slide up/down the selected elements.

`.ajax()`: Performs asynchronous HTTP requests (AJAX) to fetch data from a server or submit data to a server.

`.hide()`, `.show()`, `.toggle()`: Hides, shows, or toggles the visibility of the selected elements.

## Event Handling
A jQuery Event is the result of an action that can be detected by jQuery (JavaScript). When these events are triggered, 
you can then use a custom function to do pretty much whatever you want with the event. These custom functions are 
called `Event Handlers`.

Events can be categorized and some important ones are the following:

| **Mouse Events** | **Keyboard Events** | **Form Events** | **Document Events** |
|------------------|---------------------|-----------------|---------------------|
| click            | keypress            | submit          | load                |
| dblclick         | keydown             | change          | resize              |
| hover            | keyup               | select          | scroll              |
| mousedown        |                     | blur            | unload              |
| mouseup          |                     | focusin         | ready               |

### Event binding syntax
The following is jQuery syntax to bind a click event with all the `<div>` elements.
```javascript
$("div").click(function(){
    // jQuery code goes here
});

// Or

$("div").bind('click', function(){
    // jQuery code goes here
});
```

### Remove event handlers
Typically, once an event handler is established, it remains in effect for the remainder of the life of the page. There
may be a need when you would like to remove event handler.
jQuery provides the unbind() command to remove an exiting event handler.

```javascript
$("div").unbind('click', function(){});
```

## AJAX
AJAX is an acronym for Asynchronous JavaScript and XML. It is a group of inter-related technologies like JavaScript, 
DOM, XML, HTML/XHTML, CSS, XMLHttpRequest etc. It allows us to send and receive data asynchronously without reloading 
the web page.

The ajax() method in jQuery performs an AJAX request. It sends an asynchronous HTTP request to the server. JQuery 
provides a rich set of AJAX methods for developing web applications.

```javascript
$.ajax({name:value, name:value, ... });
```

jQuery also provides shorthand methods that simplify common types of AJAX requests.
```javascript
$.get(); // Performs a GET request to retrieve data from the server.
$.post(); // Performs a POST request to send data to the server.
$.getJSON(); // Performs a GET request to retrieve JSON data from the server.
```

### Callbacks and Promises
AJAX requests in jQuery can handle success, error, and completion callbacks using the .done(), .fail(), and .always() 
methods respectively. These callbacks allow you to handle the response from the server, handle any errors that occur,
and perform cleanup tasks.

Additionally, jQuery provides a promise-based API using the .then() method, which allows you to chain multiple AJAX 
requests and perform actions based on their outcomes.


## Animations
The jQuery `animate()` method provides you a way to create custom animations.

```javascript
$(selector).animate({params}, speed, callback);
```

`params` defines the CSS properties to be animated.
The `speed` is optional and specifies the duration of the effect. It can be set as "slow" , "fast" or milliseconds.
The `callback` is also optional, and it is a function which is executed after the animation completes.

```javascript
$("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
});
```


## sources
[freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/#jquery)<br>
[c-sharpcorner](https://www.c-sharpcorner.com/article/top-10-functions-in-jquery/)<br>
[tutorialsprint](https://www.tutorialspoint.com/jquery/jquery-events.htm)<br>
[javapoint](https://www.javatpoint.com/jquery-ajax-method)<br>