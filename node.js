//IMPORTANT NOTES
//Node.js is a popular runtime environment that allows developers to
// build scalable network applications using JavaScript. 

// single thread: can perform one task at a time
//JavaScript and Node.js default behavior is single thread but ( Multi-threaded is possible in Node.js using Worker Threads). ).
// multiple thread: can perform multiple task at a time

//// JavaScript (Browser): JavaScript in the browser is single-threaded

// JavaScript and Node.js can both handle synchronous and asynchronous operations, but they are designed with 
// a strong emphasis on asynchronous, non-blocking execution, particularly in the context of I/O operations.
//like setTimeout, async/await, promise


// JavaScript:
// single thread
// By default, synchronous / execute sequenctially.
// Supports asynchronous operations for handling I/O, events, and timers using callbacks, promises, and async/await.


// Node.js:
// single thread but we can make multiple thread using worker
// By default, asynchronous / execute independently.
// Primarily designed for asynchronous, non-blocking I/O operations.
// Can execute synchronous code but prefers asynchronous patterns to improve performance and scalability for I/O-bound tasks.


//Q-1 Is Node.js entirely single-threaded?
// No, Node.js is not entirely single-threaded. It uses an event-driven, non-blocking I/O
// model that allows multiple operations to be processed simultaneously. 
// However, the execution of JavaScript code is single-threaded.
// Multi-threaded is possible in Node.js using Worker Threads


//2- Is it possible to use Class in Node.js?
// Yes, it is possible to use Class in Node.js.Node.js supports the use of ES6 syntax,
// including Classes, which can be used to create objects with shared properties and methods. However,
// it is essential to note that Node.js is mainly designed to use JavaScript's functional programming paradigm.


//3-How can you avoid Callback Hell in Node.js?
//  Callback Hell refers to the situation where multiple levels of 
//  nested callbacks make code difficult to read and maintain. To avoid
//  Callback Hell in Node.js, you can use the following techniques:

// 1-Use named functions instead of anonymous functions.

//2-Break complex functions into smaller, simpler functions.

//3-Use control flow libraries such as Async.js or Promises to handle asynchronous operations.