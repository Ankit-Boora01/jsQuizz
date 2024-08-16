const questions = [
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "var colors = 'red', 'green', 'blue'", correct: false },
            { text: "var colors = (1:'red', 2:'green', 3:'blue')", correct: false },
            { text: "var colors = ['red', 'green', 'blue']", correct: true },
            { text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", correct: false }
        ]
    },
    {
        question: "Explain the difference between '==' and '===' in JavaScript.",
        answers: [
            { text: "'==' checks for value equality with type coercion, while '===' checks for both value and type equality without type coercion.", correct: true },
            { text: "'===' checks for value equality with type coercion, while '==' checks for both value and type equality without type coercion.", correct: false },
            { text: "'==' is used for comparing objects, while '===' is used for comparing primitive values.", correct: false },
            { text: "They are both the same and can be used interchangeably.", correct: false }
        ]
    },
    {
        question: "What is a closure in JavaScript, and how does it work?",
        answers: [
            { text: "A closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.", correct: true },
            { text: "A closure is a function that is used to create private variables in JavaScript.", correct: false },
            { text: "A closure is a function that is executed only once and then destroyed.", correct: false },
            { text: "A closure is a method in JavaScript used to bind the 'this' keyword.", correct: false }
        ]
    },
    {
        question: "How does JavaScript handle asynchronous code?",
        answers: [
            { text: "JavaScript uses the event loop to manage asynchronous operations such as callbacks, promises, and async/await.", correct: true },
            { text: "JavaScript is single-threaded and cannot handle asynchronous code.", correct: false },
            { text: "Asynchronous code is handled by creating new threads in JavaScript.", correct: false },
            { text: "JavaScript handles asynchronous code using recursion.", correct: false }
        ]
    },
    {
        question: "How does the 'this' keyword behave in different contexts?",
        answers: [
            { text: "'this' refers to the object it belongs to, but its value can change depending on how a function is called.", correct: true },
            { text: "'this' always refers to the global object regardless of where it is used.", correct: false },
            { text: "'this' is always bound to the function in which it is used.", correct: false },
            { text: "'this' cannot be used in strict mode.", correct: false }
        ]
    },
    {
        question: "What is hoisting in JavaScript?",
        answers: [
            { text: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution.", correct: true },
            { text: "Hoisting is the process of moving all variable declarations to the bottom of the scope.", correct: false },
            { text: "Hoisting is when JavaScript automatically assigns a value to variables that have not been initialized.", correct: false },
            { text: "Hoisting refers to the ability to move functions from one file to another.", correct: false }
        ]
    },
    {
        question: "What are JavaScript prototypes?",
        answers: [
            { text: "Prototypes are objects from which other objects inherit properties and methods.", correct: true },
            { text: "Prototypes are blueprints used to create objects in JavaScript.", correct: false },
            { text: "Prototypes are special functions used to optimize JavaScript code.", correct: false },
            { text: "Prototypes are data types used to define the structure of an object.", correct: false }
        ]
    },
    {
        question: "What is the difference between 'let', 'const', and 'var'?",
        answers: [
            { text: "'var' is function-scoped, while 'let' and 'const' are block-scoped. 'const' is used for variables that should not be reassigned.", correct: true },
            { text: "'let' and 'var' are block-scoped, while 'const' is function-scoped.", correct: false },
            { text: "'const' is used for variables that are constant across all scopes.", correct: false },
            { text: "'let' and 'const' are used for global variables, while 'var' is used for local variables.", correct: false }
        ]
    },
    {
        question: "How does JavaScript handle object inheritance?",
        answers: [
            { text: "JavaScript uses prototypes to handle inheritance, where objects can inherit properties and methods from another object.", correct: true },
            { text: "JavaScript uses classes and interfaces like other programming languages to handle inheritance.", correct: false },
            { text: "JavaScript does not support inheritance.", correct: false },
            { text: "JavaScript uses copy-and-paste to handle inheritance.", correct: false }
        ]
    },
    {
        question: "What is an immediately-invoked function expression (IIFE) in JavaScript?",
        answers: [
            { text: "An IIFE is a function that runs as soon as it is defined.", correct: true },
            { text: "An IIFE is a function that runs only after being called multiple times.", correct: false },
            { text: "An IIFE is a function that is never executed.", correct: false },
            { text: "An IIFE is a function that is defined but not executed immediately.", correct: false }
        ]
    },
    {
        question: "What is the difference between 'null' and 'undefined'?",
        answers: [
            { text: "'undefined' means a variable has been declared but not yet assigned a value, while 'null' is an assignment value that represents no value or no object.", correct: true },
            { text: "'null' and 'undefined' are identical and can be used interchangeably.", correct: false },
            { text: "'null' is the default value for all variables, while 'undefined' is used for uninitialized variables.", correct: false },
            { text: "'undefined' is an object, while 'null' is a data type.", correct: false }
        ]
    },
    {
        question: "What is currying in JavaScript?",
        answers: [
            { text: "Currying is a technique where a function is transformed into a sequence of functions, each taking a single argument.", correct: true },
            { text: "Currying is a method used to optimize loops in JavaScript.", correct: false },
            { text: "Currying is a way to reverse the order of function arguments.", correct: false },
            { text: "Currying is a pattern used to flatten nested functions.", correct: false }
        ]
    },
    {
        question: "How do arrow functions differ from regular functions in JavaScript?",
        answers: [
            { text: "Arrow functions do not have their own 'this' context and are more concise.", correct: true },
            { text: "Arrow functions cannot be used in JavaScript and are just a syntax error.", correct: false },
            { text: "Arrow functions are always asynchronous, while regular functions are synchronous.", correct: false },
            { text: "Arrow functions must be declared inside a class, while regular functions do not have this restriction.", correct: false }
        ]
    },
    {
        question: "What is the difference between 'Object.create()' and using constructors to create objects?",
        answers: [
            { text: "'Object.create()' creates a new object with a specified prototype, while constructors use the 'new' keyword to create objects with inherited properties.", correct: true },
            { text: "'Object.create()' creates singleton objects, while constructors create multiple instances.", correct: false },
            { text: "'Object.create()' is used for prototyping, while constructors are used for creating objects.", correct: false },
            { text: "There is no difference between them; they are used interchangeably.", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'apply', 'call', and 'bind' methods in JavaScript?",
        answers: [
            { text: "They are used to set the 'this' context of a function.", correct: true },
            { text: "They are used to prevent functions from being executed.", correct: false },
            { text: "They are used to delete object properties.", correct: false },
            { text: "They are used to add new properties to an object.", correct: false }
        ]
    },
    {
        question: "How does JavaScript's garbage collection work?",
        answers: [
            { text: "JavaScript's garbage collector automatically frees memory that is no longer in use by removing objects that are unreachable.", correct: true },
            { text: "JavaScript's garbage collector removes objects after a fixed amount of time.", correct: false },
            { text: "JavaScript's garbage collector requires manual intervention to free memory.", correct: false },
            { text: "JavaScript does not have garbage collection; memory management is done manually.", correct: false }
        ]
    },
    {
        question: "What are the differences between 'map', 'forEach', and 'reduce' in JavaScript?",
        answers: [
            { text: "'map' returns a new array, 'forEach' iterates over elements without returning anything, and 'reduce' accumulates values based on the provided function.", correct: true },
            { text: "'map' and 'reduce' are identical, but 'forEach' is slower.", correct: false },
            { text: "'forEach' and 'reduce' are synchronous, while 'map' is asynchronous.", correct: false },
            { text: "'reduce' is used for looping, while 'map' and 'forEach' are used for filtering.", correct: false }
        ]
    },
    {
        question: "What is 'debouncing' and 'throttling' in JavaScript?",
        answers: [
            { text: "Debouncing ensures that a function is only called once after a delay, while throttling ensures that a function is called at regular intervals.", correct: true },
            { text: "Debouncing and throttling are the same and can be used interchangeably.", correct: false },
            { text: "Debouncing ensures a function is called multiple times after a delay, while throttling calls a function at random intervals.", correct: false },
            { text: "Debouncing ensures a function is only called once, while throttling prevents a function from being called.", correct: false }
        ]
    },
    {
        question: "What is a JavaScript 'promise', and how does it work?",
        answers: [
            { text: "A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.", correct: true },
            { text: "A promise is used to write synchronous code.", correct: false },
            { text: "A promise is a function that always resolves successfully.", correct: false },
            { text: "A promise is used to convert a string into a number.", correct: false }
        ]
    },
    {
        question: "How does the 'async/await' syntax improve readability and handling of asynchronous code?",
        answers: [
            { text: "'async/await' allows asynchronous code to be written in a synchronous style, making it easier to understand and work with.", correct: true },
            { text: "'async/await' slows down asynchronous code execution.", correct: false },
            { text: "'async/await' is used to write multithreaded code.", correct: false },
            { text: "'async/await' is the only way to handle asynchronous code in JavaScript.", correct: false }
        ]
    },
    {
        question: "What is the difference between 'shallow copy' and 'deep copy' in JavaScript?",
        answers: [
            { text: "A shallow copy copies only the first level of the object, while a deep copy recursively copies all levels of the object.", correct: true },
            { text: "A shallow copy duplicates all levels of an object, while a deep copy copies only the first level.", correct: false },
            { text: "A shallow copy only copies object references, while a deep copy copies object properties.", correct: false },
            { text: "There is no difference between shallow and deep copies in JavaScript.", correct: false }
        ]
    },
    {
        question: "What are modules in JavaScript, and how do they help in organizing code?",
        answers: [
            { text: "Modules allow developers to encapsulate and reuse code by importing and exporting variables, functions, and objects.", correct: true },
            { text: "Modules are used to load external libraries in JavaScript.", correct: false },
            { text: "Modules are the same as classes in JavaScript.", correct: false },
            { text: "Modules are used for creating singleton objects.", correct: false }
        ]
    },
    {
        question: "What is the difference between 'prototype' and '__proto__' in JavaScript?",
        answers: [
            { text: "'prototype' is a property of a function object, while '__proto__' is a property of an object that points to its prototype.", correct: true },
            { text: "'prototype' and '__proto__' are the same and can be used interchangeably.", correct: false },
            { text: "'prototype' is used for creating functions, while '__proto__' is used for creating objects.", correct: false },
            { text: "'prototype' is a method, while '__proto__' is a property of all objects.", correct: false }
        ]
    },
    {
        question: "How do JavaScript engines optimize code execution?",
        answers: [
            { text: "JavaScript engines optimize code by using Just-In-Time (JIT) compilation and various optimization techniques like inlining, code elimination, and more.", correct: true },
            { text: "JavaScript engines optimize code by running it on multiple threads.", correct: false },
            { text: "JavaScript engines optimize code by converting it into assembly language.", correct: false },
            { text: "JavaScript engines do not optimize code.", correct: false }
        ]
    },
    {
        question: "What is the difference between synchronous and asynchronous code in JavaScript?",
        answers: [
            { text: "Synchronous code executes sequentially, blocking further execution until it completes, while asynchronous code executes without blocking further execution.", correct: true },
            { text: "Synchronous code is executed in parallel, while asynchronous code is executed in sequence.", correct: false },
            { text: "Synchronous code is used only for I/O operations, while asynchronous code is used for calculations.", correct: false },
            { text: "There is no difference between synchronous and asynchronous code in JavaScript.", correct: false }
        ]
    },
    {
        question: "How do the 'spread' and 'rest' operators work in JavaScript?",
        answers: [
            { text: "The spread operator expands elements, while the rest operator condenses multiple elements into a single array.", correct: true },
            { text: "The spread operator is used for destructuring, while the rest operator is used for copying.", correct: false },
            { text: "The spread operator is used for copying objects, while the rest operator is used for concatenating arrays.", correct: false },
            { text: "The spread and rest operators are the same and can be used interchangeably.", correct: false }
        ]
    },
    {
        question: "What are template literals in JavaScript, and how do they differ from regular strings?",
        answers: [
            { text: "Template literals allow embedding expressions inside strings using backticks (`), unlike regular strings.", correct: true },
            { text: "Template literals are faster than regular strings.", correct: false },
            { text: "Template literals are used only for HTML templates.", correct: false },
            { text: "Template literals cannot contain variables.", correct: false }
        ]
    },
    {
        question: "How does destructuring work in JavaScript?",
        answers: [
            { text: "Destructuring allows the extraction of properties from objects or elements from arrays into distinct variables.", correct: true },
            { text: "Destructuring is a method for converting objects into strings.", correct: false },
            { text: "Destructuring is a way to flatten nested arrays.", correct: false },
            { text: "Destructuring is used to combine multiple objects into one.", correct: false }
        ]
    },
    {
        question: "What is the 'temporal dead zone' in JavaScript?",
        answers: [
            { text: "The temporal dead zone is the time between entering the scope and the variable being declared, where accessing the variable results in a reference error.", correct: true },
            { text: "The temporal dead zone is the time when variables are not initialized to 'undefined'.", correct: false },
            { text: "The temporal dead zone refers to the time delay in asynchronous operations.", correct: false },
            { text: "The temporal dead zone is a period when the browser is processing JavaScript code.", correct: false }
        ]
    },
    {
        question: "Explain the concept of lexical scoping in JavaScript.",
        answers: [
            { text: "Lexical scoping means that the scope of a variable is determined by its location within the source code, and nested functions have access to variables declared in their outer scope.", correct: true },
            { text: "Lexical scoping is when variable names are chosen based on their lexicon or dictionary meaning.", correct: false },
            { text: "Lexical scoping refers to the scope of variables declared inside a loop.", correct: false },
            { text: "Lexical scoping means that variables can only be accessed in the order they are declared.", correct: false }
        ]
    },
    {
        question: "How does JavaScript handle event delegation?",
        answers: [
            { text: "Event delegation is a technique where a single event listener is added to a parent element to manage events for multiple child elements.", correct: true },
            { text: "Event delegation is when events are passed from one element to another.", correct: false },
            { text: "Event delegation refers to the process of assigning multiple event listeners to the same element.", correct: false },
            { text: "Event delegation is when events are handled asynchronously in JavaScript.", correct: false }
        ]
    },
    {
        question: "What is the difference between a call stack and a task queue in JavaScript?",
        answers: [
            { text: "The call stack handles function execution, while the task queue handles asynchronous operations waiting to be executed.", correct: true },
            { text: "The call stack and task queue are the same and can be used interchangeably.", correct: false },
            { text: "The task queue handles synchronous operations, while the call stack handles asynchronous operations.", correct: false },
            { text: "The call stack is used for handling I/O operations, while the task queue is used for handling functions.", correct: false }
        ]
    },
    {
        question: "What is the purpose of 'strict mode' in JavaScript?",
        answers: [
            { text: "'strict mode' is used to enforce stricter parsing and error handling in JavaScript, making it easier to write secure and optimized code.", correct: true },
            { text: "'strict mode' is used to slow down the execution of JavaScript code.", correct: false },
            { text: "'strict mode' is used to prevent JavaScript code from running.", correct: false },
            { text: "'strict mode' is used to automatically correct syntax errors in JavaScript.", correct: false }
        ]
    },
    {
        question: "What is the difference between 'call', 'apply', and 'bind' in JavaScript?",
        answers: [
            { text: "'call' and 'apply' invoke a function immediately with a specified 'this' context, while 'bind' returns a new function with 'this' bound to the specified context.", correct: true },
            { text: "'call' and 'bind' are identical, but 'apply' is different.", correct: false },
            { text: "'apply' and 'bind' are identical, but 'call' is different.", correct: false },
            { text: "There is no difference between 'call', 'apply', and 'bind'; they can be used interchangeably.", correct: false }
        ]
    },
    {
        question: "How does JavaScript's 'Promise.all' work?",
        answers: [
            { text: "'Promise.all' takes an array of promises and returns a single promise that resolves when all of the promises have resolved.", correct: true },
            { text: "'Promise.all' takes a single promise and converts it into multiple promises.", correct: false },
            { text: "'Promise.all' is used to reject all promises in an array if any one of them fails.", correct: false },
            { text: "'Promise.all' does not exist in JavaScript.", correct: false }
        ]
    },
    {
        question: "What are generators in JavaScript, and how do they work?",
        answers: [
            { text: "Generators are functions that can pause execution and yield control back to the caller, and later be resumed from where they left off.", correct: true },
            { text: "Generators are functions that run only once and then are destroyed.", correct: false },
            { text: "Generators are used to create single-threaded applications in JavaScript.", correct: false },
            { text: "Generators are a new type of loop in JavaScript.", correct: false }
        ]
    },
    {
        question: "How does JavaScript's 'Event Loop' work?",
        answers: [
            { text: "The event loop continuously checks the call stack and task queue, executing tasks from the queue only when the stack is empty.", correct: true },
            { text: "The event loop is used to run asynchronous code on multiple threads.", correct: false },
            { text: "The event loop stops executing code when an error is encountered.", correct: false },
            { text: "The event loop is used to prioritize synchronous code over asynchronous code.", correct: false }
        ]
    },
    {
        question: "What are the different ways to create objects in JavaScript?",
        answers: [
            { text: "Objects can be created using object literals, constructors, 'Object.create()', and classes.", correct: true },
            { text: "Objects can only be created using constructors in JavaScript.", correct: false },
            { text: "Objects can only be created using object literals and classes.", correct: false },
            { text: "There is only one way to create objects in JavaScript.", correct: false }
        ]
    },
    {
        question: "What is the difference between 'for...of' and 'for...in' loops?",
        answers: [
            { text: "'for...of' iterates over the values of an iterable object, while 'for...in' iterates over the keys of an object.", correct: true },
            { text: "'for...in' iterates over the values of an array, while 'for...of' iterates over the properties of an object.", correct: false },
            { text: "'for...of' and 'for...in' are identical and can be used interchangeably.", correct: false },
            { text: "'for...of' is used for looping over arrays, while 'for...in' is used for looping over strings.", correct: false }
        ]
    },
    {
        question: "What is 'memoization' in JavaScript?",
        answers: [
            { text: "Memoization is a technique used to store the results of expensive function calls and return the cached result when the same inputs occur again.", correct: true },
            { text: "Memoization is a way to store all variables in memory.", correct: false },
            { text: "Memoization is used to optimize loops by caching their results.", correct: false },
            { text: "Memoization is the process of converting a function into a string.", correct: false }
        ]
    },
    {
        question: "What is the purpose of 'Symbol' in JavaScript?",
        answers: [
            { text: "Symbols are unique and immutable data types used to create hidden properties in objects.", correct: true },
            { text: "Symbols are used to convert strings into numbers.", correct: false },
            { text: "Symbols are used to create arrays.", correct: false },
            { text: "Symbols are just another name for functions in JavaScript.", correct: false }
        ]
    },
    {
        question: "How does JavaScript handle type coercion?",
        answers: [
            { text: "JavaScript automatically converts data types when performing operations between different types, sometimes leading to unexpected results.", correct: true },
            { text: "JavaScript does not perform type coercion; all types must be explicitly converted.", correct: false },
            { text: "Type coercion is only performed on objects in JavaScript.", correct: false },
            { text: "JavaScript only performs type coercion when using the '==' operator.", correct: false }
        ]
    },
    {
        question: "What is the difference between 'Function Declaration' and 'Function Expression'?",
        answers: [
            { text: "Function declarations are hoisted, meaning they can be called before they are defined, while function expressions are not hoisted.", correct: true },
            { text: "Function expressions are hoisted, while function declarations are not.", correct: false },
            { text: "Function declarations cannot accept arguments, while function expressions can.", correct: false },
            { text: "There is no difference between them.", correct: false }
        ]
    },
    {
        question: "What is a 'singleton pattern' in JavaScript?",
        answers: [
            { text: "The singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.", correct: true },
            { text: "The singleton pattern is used to create multiple instances of a class.", correct: false },
            { text: "The singleton pattern is a method used to add properties to objects.", correct: false },
            { text: "The singleton pattern is used to handle asynchronous code.", correct: false }
        ]
    },
    {
        question: "What is the purpose of 'JSON.stringify()' and 'JSON.parse()'?",
        answers: [
            { text: "'JSON.stringify()' converts a JavaScript object into a JSON string, while 'JSON.parse()' converts a JSON string back into a JavaScript object.", correct: true },
            { text: "'JSON.stringify()' is used to sort objects, while 'JSON.parse()' is used to filter arrays.", correct: false },
            { text: "'JSON.stringify()' is used to convert arrays into strings, while 'JSON.parse()' is used to convert strings into numbers.", correct: false },
            { text: "'JSON.stringify()' and 'JSON.parse()' are identical and can be used interchangeably.", correct: false }
        ]
    }
];


const questionDisplay = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answersBtn");
const nextBtn = document.querySelector(".nextBtn");
const scoreDisplay = document.querySelector("#score");
let questionIndex = 0;
let score = 0;

function showQuestion() {
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    questionDisplay.textContent = `${questionNumber}. ${currentQuestion.question}`;

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index].text;
        button.onclick = () => selectAnswer(currentQuestion.answers[index], button);
        button.disabled = false;
        button.style.backgroundColor = "";
    });
    scoreDisplay.textContent = `Score: ${score} / ${questions.length}`;
}

function selectAnswer(answer, button) {
    if (answer.correct) {
        score++;
        scoreDisplay.textContent = `Score: ${score} / ${questions.length}`;
        button.style.backgroundColor = "#0080003a";
    } else {
        button.style.backgroundColor = "#ff00002e";
    }
    answerButtons.forEach((btn, index) => {
        if (questions[questionIndex].answers[index].correct) {
            btn.style.backgroundColor = "#0080003a";
        }
        btn.disabled = true;
    });
}

nextBtn.addEventListener("click", handleNextButton);

function handleNextButton() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionDisplay.textContent = `Your Score is ${score} out of ${questions.length}!!`;
    answerButtons.forEach(button => button.style.display = "none");
    nextBtn.textContent = "Try Again";
    nextBtn.removeEventListener("click", handleNextButton);
    nextBtn.addEventListener("click", resetQuiz);
    scoreDisplay.innerHTML ='';
}

function resetQuiz() {
    questionIndex = 0;
    score = 0;
    answerButtons.forEach(button => {
        button.style.display = "block";
        button.style.backgroundColor = "";
        button.disabled = false;
    });
    scoreDisplay.textContent = `Score: ${score} / ${questions.length}`;
    nextBtn.textContent = "Next";
    nextBtn.removeEventListener("click", resetQuiz);
    nextBtn.addEventListener("click", handleNextButton);
    showQuestion();
}

showQuestion();