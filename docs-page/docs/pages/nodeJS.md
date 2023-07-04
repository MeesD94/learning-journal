# Node.js
Node.js is a JavaScript runtime that allows developers to write backend (server-side) programs in JavaScript. 
Node.js comes with a handful of built-in modules — small, independent programs — that help with this. Some of the core
modules include HTTP, which acts like a server, and File System, a module to read and modify files.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of
asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries
in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

## Features of Node.js
Following are some of the important features that make Node.js the first choice of software architects.

- **Asynchronous and Event Driven** − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially 
means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it 
and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.

- **Very Fast** − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.

- **Single Threaded but Highly Scalable** − Node.js uses a single threaded model with event looping. Event mechanism 
helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional
servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program 
can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.

- **No Buffering** − Node.js applications never buffer any data. These applications simply output the data in chunks.

- **License** − Node.js is released under the MIT license.

## A Node.js Application
The most common example Hello World of Node.js is a web server:

```javascript
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

First we use the `require` directive to load the `http` module and store the returned HTTP instance into a http variable.
We use the created http instance and call `http.createServer()` method to create a server instance, and then we bind it at 
port 3000 using the `listen` method associated with the server instance. Pass it a function with parameters request and response.

## Callbacks
Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. 
Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.

For example, a function to read a file may start reading file and return the control to the execution environment 
immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback function 
while passing the callback function, the content of the file as a parameter. So there is no blocking or wait for File 
I/O. This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function 
to return results.

### Blocking code block
The following code shows that the program blocks until it reads the file and then only it proceeds to end the program.

```javascript
var data = fs.readFileSync('files/input.txt');

console.log(data.toString());
console.log("Program Ended");
```

### Non-blocking code block
This code makes use of a `callback`. The program does not wait for file reading and proceeds to print "Program Ended" 
and at the same time, the program without blocking continues reading the file.

```javascript
fs.readFile('files/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");
```

## Event loop
Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every 
API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node
uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding 
event which signals the event-listener function to execute.




## sources
[nodejs](https://nodejs.dev/en/learn/)<br>
[tutorialsprint](https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm)<br>