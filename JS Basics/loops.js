// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);



// let arr = [10, 20, 30];

// for(let value of arr) {  // loops in array
//     console.log(value);
// }

// let numbers = [1, 2, 3];

// numbers.forEach(num => console.log(num));


// let person = {
//     name: "Jitin",
//     age: 21
// };             // loops in objects

// for (let key in person) {
//     console.log(key, person[key]);
// }

// loop control key words
// for (let i = 0; i < 10; i++) {
//     if (i === 5) break;
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 2) continue;
//     console.log(i);
// }

// let i = 0;

// while (i++ < 5) {
//     console.log(i);
// }


//Issues

// for (let i = 0; i !== 1; i += 0.1) console.log(i); /// this will be dangerous due to floating point precisions //infinite loop
// //fix
// for (let i = 0; i < 1; i += 0.1) console.log(i); // output depends on which number can be represented in memory
