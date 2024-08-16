### Basic Concepts

1. **What is JavaScript?**
   - **Explanation**: JavaScript is a high-level, dynamic, and interpreted programming language that is widely used in web development. It allows developers to create interactive and dynamic web pages by manipulating the HTML and CSS. JavaScript is essential for client-side development and is also used on the server side with environments like Node.js.

2. **What are the differences between `var`, `let`, and `const`?**
   - **Scoping**: 
     - `var` is function-scoped.
     - `let` and `const` are block-scoped.
   - **Hoisting**:
     - `var` is hoisted and initialized with `undefined`.
     - `let` and `const` are hoisted but not initialized.
   - **Reassignment**:
     - `var` and `let` can be reassigned.
     - `const` cannot be reassigned once initialized.

3. **What is a closure in JavaScript?**
   - **Explanation**: A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. This allows the function to access variables from its outer function even after the outer function has returned.
   - **Example**:
     ```javascript
     function outerFunction() {
       let outerVariable = 'I am outside!';
       function innerFunction() {
         console.log(outerVariable);
       }
       return innerFunction;
     }
     const closure = outerFunction();
     closure(); // Logs "I am outside!"
     ```

4. **Explain the concept of hoisting in JavaScript.**
   - **Explanation**: Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during the compile phase. This means that variables declared with `var` and functions can be used before they are declared.
   - **Example**:
     ```javascript
     console.log(hoistedVar); // undefined
     var hoistedVar = 'I am hoisted';
     ```

5. **What are the different data types available in JavaScript?**
   - **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
   - **Non-Primitive Types**: `object` (including arrays and functions)

### Functions and Scope

6. **What are the different ways to declare a function in JavaScript?**
   - **Function Declaration**:
     ```javascript
     function declaredFunction() {
       // code
     }
     ```
   - **Function Expression**:
     ```javascript
     const expressedFunction = function() {
       // code
     };
     ```
   - **Arrow Function**:
     ```javascript
     const arrowFunction = () => {
       // code
     };
     ```

7. **What is the difference between `call()`, `apply()`, and `bind()`?**
   - **`call()`**: Invokes a function with a given `this` value and arguments provided individually.
     ```javascript
     function greet(greeting) {
       console.log(greeting + ', ' + this.name);
     }
     greet.call({ name: 'Alice' }, 'Hello');
     ```
   - **`apply()`**: Invokes a function with a given `this` value and arguments provided as an array.
     ```javascript
     greet.apply({ name: 'Bob' }, ['Hi']);
     ```
   - **`bind()`**: Creates a new function that, when called, has its `this` value set to the provided value, with a given sequence of arguments.
     ```javascript
     const boundGreet = greet.bind({ name: 'Charlie' });
     boundGreet('Hey');
     ```

8. **What is an IIFE (Immediately Invoked Function Expression)?**
   - **Explanation**: An IIFE is a function that is executed immediately after it is defined. It is commonly used to create a private scope.
   - **Example**:
     ```javascript
     (function() {
       console.log('I am an IIFE');
     })();
     ```

9. **Explain the concept of scope and scope chain.**
   - **Global Scope**: Variables declared outside any function are in the global scope.
   - **Local Scope**: Variables declared within a function are in the local scope.
   - **Block Scope**: Variables declared with `let` or `const` within a block `{}` are in block scope.
   - **Scope Chain**: The mechanism that JavaScript uses to resolve variable references. It starts from the innermost scope and moves outward to the global scope.

10. **What is the difference between `==` and `===`?**
    - **`==` (Abstract Equality)**: Compares two values for equality, performing type coercion if necessary.
    - **`===` (Strict Equality)**: Compares two values for equality without performing type coercion.
    - **Example**:
      ```javascript
      1 == '1'; // true
      1 === '1'; // false
      ```

### Objects and Arrays

11. **How do you create an object in JavaScript?**
    - **Object Literal**:
      ```javascript
      const obj = { key: 'value' };
      ```
    - **Constructor Function**:
      ```javascript
      function Person(name) {
        this.name = name;
      }
      const person = new Person('Alice');
      ```
    - **ES6 Class**:
      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
      }
      const person = new Person('Bob');
      ```

12. **How can you iterate over properties of an object?**
    - **`for...in` Loop**:
      ```javascript
      for (let key in obj) {
        console.log(key, obj[key]);
      }
      ```
    - **`Object.keys()`**:
      ```javascript
      Object.keys(obj).forEach(key => {
        console.log(key, obj[key]);
      });
      ```
    - **`Object.values()`**:
      ```javascript
      Object.values(obj).forEach(value => {
        console.log(value);
      });
      ```
    - **`Object.entries()`**:
      ```javascript
      Object.entries(obj).forEach(([key, value]) => {
        console.log(key, value);
      });
      ```

13. **What are the different ways to create an array?**
    - **Array Literal**:
      ```javascript
      const arr = [1, 2, 3];
      ```
    - **`Array` Constructor**:
      ```javascript
      const arr = new Array(1, 2, 3);
      ```
    - **`Array.of()`**:
      ```javascript
      const arr = Array.of(1, 2, 3);
      ```

14. **How do you add or remove elements from an array?**
    - **Add**:
      - `push()`: Adds to the end
      - `unshift()`: Adds to the beginning
    - **Remove**:
      - `pop()`: Removes from the end
      - `shift()`: Removes from the beginning
      - `splice()`: Adds/removes elements at specific index
      - `slice()`: Extracts a section of the array without modifying the original

15. **What is the difference between `map()`, `forEach()`, `filter()`, and `reduce()`?**
    - **`map()`**: Creates a new array with the results of calling a function on every element.
    - **`forEach()`**: Executes a function on each element but returns `undefined`.
    - **`filter()`**: Creates a new array with elements that pass a test.
    - **`reduce()`**: Reduces the array to a single value by executing a function on each element.

### Asynchronous JavaScript

16. **What is the event loop in JavaScript?**
    - **Explanation**: The event loop is a mechanism that handles the execution of multiple pieces of code, including asynchronous code, by managing the call stack and message queue. It allows JavaScript to perform non-blocking operations.

17. **What are Promises in JavaScript?**
    - **Explanation**: Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner alternative to callbacks for handling asynchronous operations.

18. **Explain `async` and `await`.**
    - **Explanation**: `async` and `await` are syntactic sugar for Promises, making asynchronous code look and behave more like synchronous code.
    - **Example**:
      ```javascript
      async function fetchData() {
        const response = await fetch('url');
        const data = await response.json();
        return data;
      }
      ```

19. **What is a callback function?**
    - **Explanation**: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
    - **Example**:
      ```javascript
      function fetchData(callback) {
        setTimeout(() => {
          callback('data');
        }, 1000);
      }
      fetchData(data => {
        console.log(data);
      });
      ```

20. **What is the difference between synchronous and asynchronous code?**
    - **Synchronous Code**: Executes in sequence, each operation must wait for the previous one to complete.
    - **Asynchronous Code**: Allows multiple operations to run concurrently, not waiting for previous operations to complete.
    - **Example**:
      ```javascript
      //

 Synchronous
      console.log('Sync 1');
      console.log('Sync 2');

      // Asynchronous
      console.log('Async 1');
      setTimeout(() => console.log('Async 2'), 1000);
      console.log('Async 3');
      ```

### DOM Manipulation

21. **How do you select an element in the DOM?**
    - **Methods**:
      - `getElementById()`
      - `getElementsByClassName()`
      - `getElementsByTagName()`
      - `querySelector()`
      - `querySelectorAll()`

22. **How can you create and append elements in the DOM?**
    - **Methods**:
      - `createElement()`
      - `appendChild()`
      - `insertBefore()`
      - `append()`

23. **What are event listeners and how do you use them?**
    - **Explanation**: Event listeners are used to run a function when an event occurs on an element.
    - **Method**: `addEventListener()`
    - **Example**:
      ```javascript
      document.getElementById('myButton').addEventListener('click', function() {
        console.log('Button clicked!');
      });
      ```

24. **What is event delegation?**
    - **Explanation**: Event delegation is a technique where a single event listener is added to a parent element to manage events for multiple child elements. This leverages event bubbling to improve performance and manage dynamic elements.
    - **Example**:
      ```javascript
      document.getElementById('parent').addEventListener('click', function(event) {
        if (event.target && event.target.matches('button.classname')) {
          console.log('Button clicked!');
        }
      });
      ```

### Miscellaneous

25. **What is `this` keyword in JavaScript?**
    - **Explanation**: The `this` keyword refers to the object from which the function was called. Its value depends on the context in which the function is invoked.
    - **Example**:
      ```javascript
      const obj = {
        name: 'Alice',
        greet: function() {
          console.log(this.name);
        }
      };
      obj.greet(); // Logs "Alice"
      ```

26. **What are arrow functions, and how do they differ from regular functions?**
    - **Syntax**:
      ```javascript
      const arrowFunc = () => {
        // code
      };
      ```
    - **Differences**:
      - Arrow functions do not have their own `this` context, they inherit `this` from the parent scope.
      - Arrow functions cannot be used as constructors.
      - Arrow functions do not have a `prototype` property.

27. **Explain the concept of prototypal inheritance.**
    - **Explanation**: Prototypal inheritance is a feature in JavaScript where objects inherit properties and methods from other objects. Each object has a `__proto__` property pointing to its prototype.
    - **Example**:
      ```javascript
      const parent = { name: 'Parent' };
      const child = Object.create(parent);
      console.log(child.name); // Logs "Parent"
      ```

28. **What is JSON and how do you parse and stringify it in JavaScript?**
    - **Explanation**: JSON (JavaScript Object Notation) is a lightweight data interchange format. It is easy to read and write for humans and easy to parse and generate for machines.
    - **Methods**:
      - `JSON.parse()`: Converts a JSON string into a JavaScript object.
      - `JSON.stringify()`: Converts a JavaScript object into a JSON string.
    - **Example**:
      ```javascript
      const jsonString = '{"name": "Alice"}';
      const obj = JSON.parse(jsonString);
      console.log(obj.name); // Logs "Alice"

      const newJsonString = JSON.stringify(obj);
      console.log(newJsonString); // Logs '{"name":"Alice"}'
      ```

29. **What is the difference between `null` and `undefined`?**
    - **Explanation**:
      - `null`: Represents the intentional absence of any object value.
      - `undefined`: Indicates that a variable has been declared but not yet assigned a value.
    - **Example**:
      ```javascript
      let a;
      console.log(a); // Logs "undefined"
      let b = null;
      console.log(b); // Logs "null"
      ```

30. **What are modules in JavaScript?**
    - **Explanation**: Modules are reusable pieces of code that can be exported from one module and imported into another. ES6 introduced a standard for modules.
    - **Syntax**:
      - **Export**:
        ```javascript
        export const myVariable = 'value';
        export function myFunction() {
          // code
        }
        ```
      - **Import**:
        ```javascript
        import { myVariable, myFunction } from './myModule.js';
        ```

### Advanced Topics

31. **Explain the concept of `use strict` in JavaScript.**
    - **Explanation**: `use strict` is a directive that enforces stricter parsing and error handling in JavaScript. It helps in catching common coding errors and "unsafe" actions.
    - **Example**:
      ```javascript
      'use strict';
      // code in strict mode
      ```

32. **What is `debouncing` and `throttling`?**
    - **Debouncing**: Limits the rate at which a function is executed. The function will be executed after a specified time period has passed since the last time it was invoked.
    - **Throttling**: Ensures a function is executed at most once in a specified time period.
    - **Example**:
      ```javascript
      // Debounce function
      function debounce(func, wait) {
        let timeout;
        return function(...args) {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, args), wait);
        };
      }

      // Throttle function
      function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
          if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
          }
        };
      }
      ```

33. **What is the `spread` operator and how is it used?**
    - **Explanation**: The spread operator (`...`) allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
    - **Example**:
      ```javascript
      const arr = [1, 2, 3];
      const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
      const obj = { a: 1, b: 2 };
      const newObj = { ...obj, c: 3 }; // { a: 1, b: 2, c: 3 }
      ```

34. **What are template literals in JavaScript?**
    - **Explanation**: Template literals are string literals that allow embedded expressions. They are enclosed by backticks (`` ` ``) and can contain placeholders indicated by `${expression}`.
    - **Example**:
      ```javascript
      const name = 'Alice';
      const greeting = `Hello, ${name}!`; // "Hello, Alice!"
      ```

35. **How does JavaScript handle automatic type conversion?**
    - **Explanation**: JavaScript performs type coercion, where it automatically converts one data type to another when performing operations involving different data types.
    - **Example**:
      ```javascript
      console.log('5' - 2); // 3 (string '5' is converted to number 5)
      console.log('5' + 2); // '52' (number 2 is converted to string '2')
      ```

### Coding Questions

36. **Write a function to reverse a string.**
    - **Solution**:
      ```javascript
      function reverseString(str) {
        return str.split('').reverse().join('');
      }
      ```

37. **Write a function to check if a string is a palindrome.**
    - **Solution**:
      ```javascript
      function isPalindrome(str) {
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanedStr === cleanedStr.split('').reverse().join('');
      }
      ```

38. **Write a function to find the largest number in an array.**
    - **Solution**:
      ```javascript
      function findLargest(arr) {
        return Math.max(...arr);
      }
      ```

39. **Write a function to remove duplicates from an array.**
    - **Solution**:
      ```javascript
      function removeDuplicates(arr) {
        return [...new Set(arr)];
      }
      ```

40. **Write a function to merge two sorted arrays.**
    - **Solution**:
      ```javascript
      function mergeSortedArrays(arr1, arr2) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
          if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
          } else {
            result.push(arr2[j]);
            j++;
          }
        }
        return result.concat(arr1.slice(i)).concat(arr2.slice(j));
      }
      ```


### Beginner 
Let's go through each of these JavaScript concepts in simple language with examples.

### Basics & Variables

**1. What is JavaScript?**
JavaScript is a programming language used to make web pages interactive. It allows you to create dynamic content like image sliders, form validations, and much more on websites.

*Example:* When you click a button and see an alert box pop up, that’s JavaScript in action.

**2. Differentiate between Java and JavaScript.**
- **Java** is a full-fledged programming language used to build large applications like Android apps.
- **JavaScript** is mainly used for enhancing web pages by making them interactive.

*Example:* Java is like a full car engine (can run a whole car), while JavaScript is like the radio (makes the drive more fun).

**3. How can you link a JavaScript file to an HTML document?**
You link a JavaScript file to an HTML document using the `<script>` tag.

*Example:*
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <script src="script.js"></script> <!-- This links the script.js file -->
</body>
</html>
```

**4. Explain the difference between `var`, `let`, and `const`.**
- **`var`**: Used to declare variables that can be redeclared and updated. It has a function scope.
- **`let`**: Used to declare variables that can be updated but not redeclared. It has block scope.
- **`const`**: Used to declare variables that cannot be updated or redeclared. It also has block scope.

*Example:*
```javascript
var x = 10;
let y = 20;
const z = 30;

x = 15; // Allowed
y = 25; // Allowed
// z = 35; // Not allowed, z is constant
```

### Data Types & Structures

**5. List the primitive data types in JavaScript.**
The primitive data types in JavaScript are:
- **String**: Text (e.g., `"Hello"`)
- **Number**: Numbers (e.g., `123`, `3.14`)
- **Boolean**: True or false (e.g., `true`, `false`)
- **Undefined**: A variable that has been declared but not assigned a value
- **Null**: Represents the intentional absence of any value
- **Symbol**: A unique and immutable value used as object keys
- **BigInt**: Used for integers larger than the `Number` type can handle

**6. What is the difference between `null` and `undefined`?**
- **`null`**: A value that represents "nothing" or "no value."
- **`undefined`**: A variable that has been declared but not assigned a value.

*Example:*
```javascript
let a;
console.log(a); // undefined
let b = null;
console.log(b); // null
```

**7. How would you check the type of a variable in JavaScript?**
You can check the type of a variable using the `typeof` operator.

*Example:*
```javascript
let x = 42;
console.log(typeof x); // "number"
```

**8. What are JavaScript arrays and how are they different from objects?**
- **Array**: A list-like structure that holds multiple values in a specific order.
- **Object**: A collection of key-value pairs where each key is a unique identifier.

*Example:*
```javascript
let fruits = ["apple", "banana", "cherry"]; // Array
let person = { name: "John", age: 30 }; // Object
```

### Functions & Scope

**9. How do you declare a function in JavaScript?**
You declare a function using the `function` keyword followed by the function name and parentheses.

*Example:*
```javascript
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Ashish")); // "Hello, Ashish"
```

**10. What is a callback function?**
A callback function is a function passed into another function as an argument, which is then executed inside the outer function.

*Example:*
```javascript
function sayHello(callback) {
    callback();
}

function greet() {
    console.log("Hello!");
}

sayHello(greet); // "Hello!"
```

**11. What is the difference between local and global scope?**
- **Global scope**: Variables declared outside any function are in the global scope and can be accessed from anywhere in the code.
- **Local scope**: Variables declared inside a function are in the local scope and can only be accessed within that function.

*Example:*
```javascript
let globalVar = "I am global";

function test() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}

test();
console.log(localVar); // Error: localVar is not defined
```

**12. How do you create an immediately invoked function expression (IIFE)?**
An IIFE is a function that runs as soon as it is defined.

*Example:*
```javascript
(function() {
    console.log("This runs immediately!");
})();
```

### Operators & Control Structures

**13. Explain the difference between `==` and `===`.**
- **`==`**: Compares values for equality, performing type conversion if necessary.
- **`===`**: Compares both value and type without performing type conversion.

*Example:*
```javascript
console.log(5 == "5"); // true, because types are converted
console.log(5 === "5"); // false, because types are different
```

**14. What are the different types of loops in JavaScript?**
- **`for`** loop: Repeats a block of code a specific number of times.
- **`while`** loop: Repeats a block of code as long as a condition is true.
- **`do...while`** loop: Executes a block of code once, and then repeats as long as a condition is true.
- **`for...in`** loop: Iterates over the properties of an object.
- **`for...of`** loop: Iterates over the values of an iterable object like an array.

*Example:*
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0 to 4
}
```

**15. How do you write a switch statement in JavaScript?**
A `switch` statement allows you to choose one of many code blocks to be executed.

*Example:*
```javascript
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("This is an apple.");
        break;
    case "banana":
        console.log("This is a banana.");
        break;
    default:
        console.log("Unknown fruit.");
}
```

### DOM Manipulation

**16. What is the DOM?**
The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page so that programs can change the document structure, style, and content.

**17. How can you select an element by its ID using JavaScript?**
You can select an element by its ID using `document.getElementById("id")`.

*Example:*
```javascript
let element = document.getElementById("myId");
console.log(element);
```

**18. How would you add a new element to the DOM?**
You can add a new element to the DOM using `document.createElement` and `appendChild`.

*Example:*
```javascript
let newElement = document.createElement("div");
newElement.textContent = "Hello, World!";
document.body.appendChild(newElement);
```

**19. What is the difference between `textContent` and `innerHTML`?**
- **`textContent`**: Sets or gets the text content of an element.
- **`innerHTML`**: Sets or gets the HTML content of an element.

*Example:*
```javascript
let element = document.getElementById("myId");
element.textContent = "Hello"; // Sets text only
element.innerHTML = "<strong>Hello</strong>"; // Sets HTML content
```

### Events & Event Handling

**20. What is an event in JavaScript?**
An event is an action or occurrence that happens in the browser, like a user clicking a button, moving the mouse, or pressing a key.

**21. How do you attach an event handler to a button click?**
You can attach an event handler using `addEventListener`.

*Example:*
```javascript
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});
```

**22. What is event delegation and why is it useful?**
Event delegation is a technique where a single event listener is added to a parent element to manage events for all of its child elements. It's useful for handling events efficiently, especially for dynamically added elements.

*Example:*
```javascript
document.body.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        alert("Button clicked!");
    }
});
```

### Objects & Prototypes

**23. How do you create an object in JavaScript?**
You can create an object using object literals or the `new Object()` syntax.

*Example:*
```javascript
let person = {
    name: "John",
    age: 30
};
```

**24

. What is a prototype in JavaScript and why is it important?**
A prototype is an object from which other objects inherit properties and methods. It's important for sharing common properties or methods across multiple objects without duplicating them.

*Example:*
```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Hello, " + this.name);
};

let john = new Person("John");
john.sayHello(); // "Hello, John"
```

**25. How can you add a method to an existing object?**
You can add a method to an existing object by assigning a function to a new property.

*Example:*
```javascript
let car = {
    brand: "Toyota"
};

car.drive = function() {
    console.log("Driving a " + this.brand);
};

car.drive(); // "Driving a Toyota"
```

### Errors & Debugging

**26. How can you log a message to the console?**
You can log a message to the console using `console.log`.

*Example:*
```javascript
console.log("This is a message");
```

**27. What is a JavaScript exception?**
A JavaScript exception is an error that occurs during the execution of a script. It disrupts the normal flow of the program.

*Example:*
```javascript
let x = y + 1; // y is not defined, so this will throw a ReferenceError
```

**28. How do you handle exceptions in JavaScript?**
You handle exceptions using `try...catch` blocks.

*Example:*
```javascript
try {
    let x = y + 1;
} catch (error) {
    console.log("An error occurred: " + error.message);
}
```

### Miscellaneous

**29. What is "hoisting" in JavaScript?**
Hoisting is JavaScript's behavior of moving declarations to the top of the current scope during the compilation phase.

*Example:*
```javascript
console.log(x); // undefined due to hoisting
var x = 5;
```

**30. What does the `this` keyword refer to in JavaScript?**
The `this` keyword refers to the object that is currently executing the code. Its value depends on the context in which it is used.

*Example:*
```javascript
let person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // "Hello, John"
```
