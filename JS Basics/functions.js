// function greet() {
//     console.log("Hello");
// }
// greet()

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Jitin");


// function add(a, b) {       // Without return, function gives undefined.
//     return a + b;
// }

// let result = add(2, 3); // 5
// console.log(result)


// types of functions

// function add(a, b) {
//     return a + b;
// }
// add(2, 3);

// sum = add(2, 3)
// console.log(sum)



// just like lambda functions  // Function expression
// const sum = function add(a, b) {
//     return a + b;
// };
// console.log(sum(2, 3))


// Arrow functions

// const add = (a, b) => {
//     return a + b;
// };

// const add = (a, b) => a + b;

// console.log(add(5, 10));


// const fact = (n) => {
//     if (n == 0 || n == 1) return 1;
//     return n * fact(n - 1);
// }
// console.log(fact(5));


// parameters


// function greet(name = "Guest") {
//     return "Hello " + name;
// }
// console.log(greet());



// when number of parammeters are not known
// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4));

// function scope

// function test() {
//     let x = 10;
// }

// console.log(x); // Error  // accessing var out of its scope

// closures // remeber values if function execution is done

// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         return count;
//     };
// }

// const counter = outer();

// console.log(counter()); // 1
// console.log(counter()); // 2


// function greet(name, callback) {
//     console.log("Hi " + name);
//     callback();
// }

// greet("Jitin", function () {
//     console.log("Welcome!");
// });


// callback functions


// setTimeout(() => {
//     console.log("Runs later");
// }, 2000);

// // immediately invoked functions


// (function () {
//     console.log("Runs instantly");
// })();


/// this

// function test() {
//     console.log(this);
// }
// const test = () => {  // arrow functions doesn't have thier own 'this'  they inherit from outer scope
//     console.log(this);
// };
