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
