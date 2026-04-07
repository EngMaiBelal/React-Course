// Benefits of modules => code organization, reusability, maintainability, encapsulation, namespace management, lazy loading, better tooling support, and improved collaboration.
    // Export => named export, default export, renaming exports, exporting all as an object, dynamic exports
    // import => named import, default import, renaming imports, importing all as an object, dynamic imports
// import { ex } from "./util.js";
// console.log(ex);
// console.log("jjjj");
// ************************************************************************
// Destructing => array destructuring, object destructuring, nested destructuring, default values in destructuring, rest syntax in destructuring, destructuring in function parameters
// ____________________________________________________________________
// Destructing example =>
    // const arr=[1,2,3];
    // const [a,b,c]=arr; // array destructuring
    // console.log(a,b,c); // 1 2 3

    // const [a,b,c]=[1,2,3]; // array destructuring without intermediate variable
    // console.log(a,b,c); // 1 2 3

    // const [a,b,c,...rest]=[1,2,3,4,5]; // rest syntax in destructuring
    // console.log(a,b,c,rest); // 1 2 3 [4,5]


    // const obj={name:"John",age:30};
    // const {name,age}=obj; // object destructuring
    // console.log(name,age); // John 30

    // const nestedObj={person:{name:"Alice",age:25}};
    // const {person:{name,age}}=nestedObj; // nested destructuring
    // console.log(name,age); // Alice 25

    // const arr=[1,2];
    // const [a,b,c=3]=arr; // default values in destructuring
    // console.log(a,b,c); // 1 2 3

    // function greet({name,age}){ // destructuring in function parameters
    //     console.log("Hello "+name+", you are "+age+" years old");
    // }
    // greet({name:"John",age:30}); // Hello John, you are 30 years old

    // const obj={name:"Alice",age:25};
    // greet(obj); // Hello Alice, you are 25 years old
    
// ************************************************************************
// JS Array Functions
// ____________________________________________________________________

// Array prototype =>
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// 1) map() 
    // creates a new array populated with the results of calling a provided function on every element in the calling array.
    // const arr=[1,2,3,4,5];
    // const squared=arr.map(x=>x*x);// [1,4,9,16,25]

// 2) find()
    // returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
    // const arr=[1,2,3,4,5];
    // const found=arr.find(x=>x>3); // 4

// 3) findIndex()
    // returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
    // const arr=[1,2,3,4,5];
    // const foundIndex=arr.findIndex(x=>x>3); // 3

// 4) filter()
    // creates a new array with all elements that pass the test implemented by the provided function.
    // const arr=[1,2,3,4,5];
    // const filtered=arr.filter(x=>x>3); // [4,5]

// 5) reduce()
    // executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
    // const arr=[1,2,3,4,5];
    // const sum=arr.reduce((acc,x)=>acc+x,0); // 15

// 6) concat()
    // is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    // const arr1=[1,2,3];
    // const arr2=[4,5,6];
    // const merged=arr1.concat(arr2); // [1,2,3,4,5,6]

// 7) slice() 
    // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
    // const arr=[1,2,3,4,5];
    // const sliced=arr.slice(1,4); // [2,3,4]

// 8) splice()
    // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.
    // const arr=[1,2,3,4,5];
    // const removed=arr.splice(1,2); // [2,3], arr is now [1,4,5]


// ************************************************************************
// object => implicit,explicit
// ____________________________________________________________________
// Implicit object => created by using object literal syntax or constructor functions
// const obj1={name:"John",age:30}; // object literal
// function Person(name,age){ // constructor function 
//     this.name=name;
//     this.age=age;
// }
// const obj2=new Person("Alice",25); // creating object using constructor function

// Explicit object => created by using Object.create() or Object.assign()
// const obj3=Object.create(obj1); // creates a new object with obj1 as its prototype
// const obj4=Object.assign({},obj1); // creates a shallow copy of obj1 into a new object
// ************************************************************************
// Variable Scope 
// ____________________________________________________________________
 // variable scope =>
    // var => function scope, hoisted, can be re-declared and updated, not block scoped
    // let => block scope, not hoisted, cannot be re-declared but can be updated
    // const => block scope, not hoisted, cannot be re-declared or updated
    // block scope => variables declared inside a block (e.g., if, for) are only accessible within that block
    // function scope => variables declared inside a function are only accessible within that function
    // global scope => variables declared outside of any function or block are accessible anywhere in the code

// ************************************************************************
// Revisting control structures
// ____________________________________________________________________
    // Revisting control structures => 
        // if-else, switch-case, for loop, while loop, do-while loop, break statement, continue statement, ternary operator
    // if-else => a conditional statement that executes a block of code if a specified condition is true, and optionally executes another block of code if the condition is false.
    
        // const age=18;
        // if(age>=18){
        //     console.log("You are an adult");
        // }else{
        //     console.log("You are a minor");
        // }

        // const num=5;
        // if(num > 0){
        //     console.log("Positive");
        // }else if(num < 0){
        //     console.log("Negative");
        // }else{
        //     console.log("Zero");
        // }
    
    // switch-case => a control statement that allows a variable to be tested for equality against a list of values, where each value is called a case, and the variable being switched on is checked for each case.
        // example without break statement
            // const day=2;
            // switch(day){
            //     case 1:  
            //         console.log("Monday");
            //         break;
            //     case 2:
            //         console.log("Tuesday");
            //     case 3:
            //         console.log("Wednesday");
            //         break;
            //     default:
            //         console.log("Invalid day");
            // }
        // two cases with the same output
            // const day=2;
            // switch(day){
            //     case 1: 
            //     case 2:
            //         console.log("Monday or Tuesday");
            //         break;
            //     case 3:
            //         console.log("Wednesday");
            //         break;
            //     default:
            //         console.log("Invalid day");
            // }
        // const day=2;
        // switch(day){
        //     case 1:
        //         console.log("Monday");
                // break;
        //     case 2:
        //         console.log("Tuesday");
        //         break;
        //     case 3:
        //         console.log("Wednesday");
        //         break;
        //     default:
        //         console.log("Invalid day");
        // }

    // for loop => a control flow statement that allows code to be executed repeatedly based on a given boolean condition.
    
        // for(let i=0;i<5;i++){
            //     console.log(i);  
            // }
        
        
    // while loop => a control flow statement that allows code to be executed repeatedly as long as a specified condition is true.
        // let i=0;
        // while(i<5){
            //     console.log(i);
            //     i++;
            // }
            
    // do-while loop => a control flow statement that executes a block of code at least once, and then repeatedly executes the block as long as a specified condition is true.

        // let i=0;
        // do{
        //     console.log(i);
        //     i++;
        // }while(i<5);

    // break statement => 
        // a statement that terminates the current loop, switch, or label statement and transfers control to the statement following the terminated statement.
    // continue statement => 
        // a statement that skips the current iteration of a loop and continues with the next iteration.
 
    // for(let i=0;i<5;i++){
    //     if(i===2){
    //         continue; // skip the rest of the loop when i is 2
    //         break; // exit the loop when i is 2
    //     }
    //     console.log(i);
    // }

    // ternary operator => a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. It is often used as a shorthand for an if-else statement. 

    // const age=18;
    // const message=age>=18 ? "You are an adult" : "You are a minor";
    // console.log(message);
    // const num=5;
    // const parity=num%2===0 ? "Even" : "Odd";
    // console.log(parity);
    // const num=10;
    // const result=num>0 ? "Positive" :  null;  
    // console.log(result); // null
    // const score=85;
    // const grade=score>=90 ? "A" : score>=80 ? "B" : score>=70 ? "C" : score>=60 ? "D" : "F";
    // console.log(grade);
    // const isLoggedIn=true;
    // const greeting=isLoggedIn ? "Welcome back!" : "Please log in.";
    // console.log(greeting);
    // const temperature=30;
    // const weather=temperature>25 ? "Hot" : temperature>15 ? "Warm" : "Cold";
    // console.log(weather);
    

    // const pass= prompt("your password");
    // if(pass==="Hello"){
    //     console.log("Welcome");
    // }else if(pass==="hello"){
    //     console.log("Hi");
    // }else{ 
    //     console.log("Bye");
    // }
// ************************************************************************
// Function
// ____________________________________________________________________
    // function => 
        // a block of code designed to perform a particular task, which is executed when it is called or invoked. 
        // It can take inputs (parameters) and return an output (return value). 
        // Functions are fundamental building blocks in JavaScript and are used to organize and reuse code.
    // a) function declaration

    // function test(){
    //     return a+b;
    // }
    // b) invocking or calling function
    // test();

// ____________________________________________________________________
// function types according to inputs and outputs 
    // no inputs no outputs
        // function greet(){
        //     console.log("Hello");
        // }
        // greet();
    // no inputs with outputs
        // function getPi(){
        //     return 3.14;
        // }
        // getPi();
    // with inputs no outputs
        // function greet(name){
        //     console.log("Hello "+name);
        // }
        // greet("John");
    // with inputs and outputs
        // function add(a,b){
        //     return a+b;
        // }
        // add(2,3);    
// ____________________________________________________________________
// parameters vs arguments
    // function test(a,b){ // parameters
    //     return a+b;
    // }
    // test(2,3); // arguments
// ____________________________________________________________________
// function expression
    // const add=function(a,b){
    //     return a+b;
    // }
    // function expression with name
    // const add = function sum(a,b){
    //     return a+b;
    // }
        // function expression with name is useful for debugging and recursion, as =>
        // However, the name is not accessible outside the function => 
        // it cannot be called from the global scope or other functions.
        // function expression with name is not hoisted  => it cannot be called before it is defined. 
        // It is only available after the line where it is assigned to the variable. 
        // This is different from function declarations, which are hoisted and can be 
        // called before they are defined in the code.

// ____________________________________________________________________
// Arrow function: 
    // it is a shorter syntax for writing function expressions and does not have its own this, arguments, super, or new.target. It is always anonymous and cannot be used as a constructor.
        // const add=(a,b)=> a+b; // concise body with implicit return
        // const add=(a,b)=>{ // block body with explicit return
        //     return a+b;
        // }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this

// ____________________________________________________________________
// IIFE=> Immediately Invoked Function Expression
    // (function(){
    //     console.log("Hello");
    // })();
    // ____________________________________________________________________
    // (()=>{console.log("Hi")})();
    // ____________________________________________________________________   
    // (function(name){
    //     console.log("Hello "+name);
    // })("John"); 
    // ____________________________________________________________________
    // ((name)=>{console.log("Hi "+name)})("Alice");
// ____________________________________________________________________
// Closure => 
    // it is means that an inner function has access to the outer (enclosing) function’s variables and parameters, even after the outer function has returned.
    // A closure is a feature in JavaScript where an inner function remembers and has access to the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing.

        // function outer(){
        //     let count=0;
        //     function inner(){
        //         count++;
        //         console.log(count);
        //     }    
        //     return inner;
        // }
        // const counter= outer();
        // counter();
        // counter();
        // counter();
        // counter();

// Usages:
    // 1) (Data Privacy / Encapsulation)
        // function createCounter() {
        //   let count = 0; // This variable is enclosed by the inner function and retains its state across calls
        //   return function () {
        //     count++;
        //     return count;
        //   };
        // }

        // const counter = createCounter();
        // console.log(counter()); // 1
        // console.log(counter()); // 2

    // 2)(Partial Application / Currying)
        // function multiply(a) {
        //     return function(b) {
        //         return a * b;
        //     }
        // }

        // const double = multiply(2);
        // console.log(double(5)); // 10
        // console.log(double(70)); // 140
// Advanced example of closure
    // The closure allows the inner function to access the outer function’s variables even after the outer function has finished executing.
    // function outerFunction(outerVar) {
    //   return function innerFunction(innerVar) {
    //     console.log('Outer:', outerVar);
    //     console.log('Inner:', innerVar);
    //   };
    // }

    // const closureFn = outerFunction('I am the outer variable');
    // closureFn('I am the inner variable');

// function types =>
    // 1) pure function => a function that always produces the same output for the same input and has no side effects (does not modify external state or data).
        // example of pure function
            // function add(a,b){
            //     return a+b;
            // }
    // 2) impure function => a function that may produce different outputs for the same input or has side effects (modifies external state or data).  
        // example of impure function
            // let count=0;
            // function increment(){
            //     count++;
            //     return count;
            // }  
    // 3) higher-order function => a function that takes one or more functions as arguments or returns a function as its result.
            // 1) First example: closure + higher-order (returns a function and uses an outer variable).
                // function greet(name){
                //     return function(message){
                //         console.log(message+" "+name);
                //     }
                // }
                // const greetJohn=greet("John");
                // greetJohn("Hello"); // Hello John
                // greet("Alice")("Hi"); // Hi Alice
            // 2) Second example: callback + higher-order (takes a function as a parameter).
                // function repeat(n, action){
                //     for(let i=0;i<n;i++){
                //         action(i);
                //     }
                // }
                // repeat(5, console.log); // prints 0 1 2 3 4 
                // repeat(3, i=> console.log("Hello "+i)); // prints Hello 0, Hello 1, Hello 2
        
    // 4) recursive function => a function that calls itself in its definition.
        // example of recursive function
            // function factorial(n){
            //     if(n===0){
            //         return 1;
            //     }else{
            //         return n*factorial(n-1);
            //     }
            // }
            // factorial(5); // 120
    // 5) generator function => a function that can be paused and resumed, allowing it to produce a sequence of values over time.
        // example of generator function
            // function* generator(){
            //     yield 1;
            //     yield 2;
            //     yield 3;
            // }
            // const gen=generator();
            // console.log(gen.next()); // {value: 1, done: false}
            // console.log(gen.next()); // {value: 2, done: false}
            // console.log(gen.next()); // {value: 3, done: false}
            // console.log(gen.next()); // {value: undefined, done: true}
    // 6) async function => a function that returns a promise and can use the await keyword to pause execution until the promise is resolved.
        // example of async function
            // async function fetchData(){
            //     try{
            //         const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
            //         const data=await response.json();
            //         console.log(data);
            //     }catch(error){
            //         console.error("Error fetching data:", error);
            //     }
            // }
            // fetchData();
    // 7) constructor function => a function that is used to create objects and is typically called with the new keyword.
        // example of constructor function
            // function Person(name, age){
            //     this.name=name;
            //     this.age=age;
            // }
            // const person1=new Person("John",30);
            // const person2=new Person("Alice",25);

    // 8) callback function => a function that is passed as an argument to another function and is executed after some operation has been completed.
        // example of callback function
            // function greeting(name, callback){
            //     console.log("Hello "+name);
            //     callback();
            // }
            // greeting("John", ()=> console.log("Welcome!")); // Hello John, Welcome!
          
    // 9) anonymous function => a function that is defined without a name and is often used as an argument to other functions or assigned to a variable.
        // example of anonymous function
            // setTimeout(function(){
            //     console.log("Hello");
            // }, 2000);
    // 10) IIFE (Immediately Invoked Function Expression) => a function that is defined and immediately executed, often used to create a new scope and avoid polluting the global namespace.
        // (function(){
        //     console.log("Hello");
        // })();
        // ____________________________________________________________________
        // (()=>{console.log("Hi")})();
        // ____________________________________________________________________   
        // (function(name){
        //     console.log("Hello "+name);
        // })("John"); 
        // ____________________________________________________________________
        // ((name)=>{console.log("Hi "+name)})("Alice");
    
// ************************************************************************
// Using function as a parameter => callback function
// ____________________________________________________________________
    // A callback => is a function passed as an argument to another function and executed later.
    // 1) Built-in function as => Set-Timeout
        // setTimeout(function(){
        //     console.log("Hello");
        // },2000);
        // ____________________________________________________________________
        // setTimeout(()=>{console.log("Hello")},2000);
        // ____________________________________________________________________
        // function sayHello(){
        //     console.log("Hello");
        // }  
        // setTimeout(sayHello,2000);
        // ____________________________________________________________________
        // const sayHi=()=>{
        //     console.log("Hi");
        // }  
        // setTimeout(sayHi,3000);

        // setTimeout => a built-in function that executes a callback function after a specified delay (in milliseconds)
        // setInterval => a built-in function that repeatedly executes a callback function at specified intervals (in milliseconds)


    // 2) Custom Callback function
        // function greeting(callback){
        //     callback();
        // }
        // greeting(()=> console.log("Hi"));
        // ____________________________________________________________________
        // function sayHi() {
        //     console.log("Hi");
        // }
        // function greeting(callback){
        //     callback();
        // }
        // greeting(sayHi);
// ************************************************************************
// Defining a function inside a function
// ____________________________________________________________________
// function outer(){
//     function inner(){
//     console.log("inner function"); 
//     }
//     console.log("outer function"); 
//     inner();
// }
// outer();  
// 
// ************************************************************************
// reference vs value
// ____________________________________________________________________
// by value
// let a=10;
// let b=a;
// console.log(a,b);
// a=20;
// console.log(a,b);
// ____________________________________________________________________
// by value
// let msg = "Hello";
// let greeting = msg;
// console.log(msg, greeting);
// msg = "Hi";
// console.log(msg, greeting);
// greeting = "Hey";
// console.log(msg, greeting);
// ____________________________________________________________________
// by reference

// let arr1=[1,2,3];
// let arr2=arr1;
// console.log(arr1,arr2);
// arr1.push(4);
// console.log(arr1,arr2);
// ____________________________________________________________________
// let obj1={name:"John"};
// let obj2=obj1;
// console.log(obj1,obj2);
// obj1.name="Alice";
// console.log(obj1,obj2);
// ____________________________________________________________________
// function greet() {
//   console.log("Hello");
// }

// function modifyFn(fn) {
//   fn.message = "Hi there!"; // add new property to the function object

// modifyFn(greet);
// console.log(greet.message); // "Hi there!"
// ************************************************************************
// Differences between primitive and reference parameters
// ____________________________________________________________________
    //  Primitive parameters (like number, string, boolean) are passed by value → any changes inside the function do not affect the original variable.
    //  Reference parameters (like object, array, function) are passed by reference → any changes to properties or elements inside the function affect the original object.
    // Callback function effect
        //  If we pass a primitive to a callback, changes inside the callback do not modify the original value.
        //  If we pass a reference to a callback, changes inside the callback will affect the original object.
        // example
            // function greet() {
            //   console.log("Hello");
            // }

            // function modify(fn) {
            //     // Adding a property to the function → affects the original
            //     fn.newProp = "I am added";

            //     // Reassigning the function parameter → does NOT affect the original
            //     fn = function() { console.log("Changed"); }
            //     // console.log("Inside modify:", fn); // Changed → the parameter now points to the new function  
            //     fn(); // Changed → calling the new function inside modify
            // }

            // modify(greet); // Reassigning the function parameter again
            // greet();                     // Hello → still the original function
            // console.log(greet.newProp);  // "I am added" → the property still exists    
            // ____________________________________________________________________
            // function greet() {
            //   console.log("Hello");
            // }

            // function modify(fn) {
            //   // Adding a property → affects the original function
            //   fn.newProp = "I am added";

            //   // Modifying the function’s behavior indirectly
            //   fn.originalLog = fn.toString(); 
                // store old definition
                // it’s only useful if you want to remember or inspect the original code after adding modifications.
            //   fn.modified = () => console.log("Changed"); // add new method
            // }

            // modify(greet);

            // // Original function call
            // greet(); // Hello → original code is still intact

            // // You can now access the modified part through the added property
            // greet.modified(); // Changed
            // console.log(greet.newProp); // "I am added"

            // Key points:
                // You cannot fully reassign greet from inside modify — fn = ... only changes the local parameter.
                // You can add properties or extra functions to it, so you can change its “content” in that sense.
                // Functions are objects in JS, so modifying their properties is by reference.
                // If you want, I can make a trick example where we actually modify the code of greet indirectly so calling greet() itself prints “Changed” — it’s a clever hack using reference.

// ********************************************************************
// ____________________________________________________________________
// Primitive data types are values that are stored directly in the variable.
// When you assign them to another variable, a copy of the value is created.
//     Types: string, number, boolean, null, undefined, symbol, bigint

// Reference data types are objects that are stored as a reference to the memory location.
// When you assign them to another variable, a reference to the same object is created.
//     Types: object, array, function




// ********************************************************************
// ____________________________________________________________________
// variable scope=> var, let, const, block scope, function scope, global scope, closure, callback function, setTimeout, setInterval   
// export, import, modules, classes, promise, async-await, try-catch, error handling, hoisting, event loop, this keyword, call-apply-bind, 
// prototype, inheritance, encapsulation, polymorphism, abstraction, OOPs concepts, functional programming concepts, ES6 features, 
// DOM manipulation, event handling, AJAX, fetch API, JSON, local storage, session storage, cookies, regular expressions, debugging techniques, performance optimization techniques, design patterns in JavaScript, 
// best practices in JavaScript, code organization and modularization, testing and debugging tools, version control with Git, deployment strategies for JavaScript applications, security considerations in JavaScript development, 
// accessibility in web development, responsive design principles, cross-browser compatibility issues and solutions, performance optimization techniques for web applications, and the latest trends and updates in the JavaScript ecosystem.

